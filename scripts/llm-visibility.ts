/* eslint-disable no-console */
/**
 * LLM Visibility Tracker for Taskey.
 *
 * Runs a fixed list of German-language prompts against OpenAI, Anthropic,
 * Perplexity and Google Gemini, then checks:
 *   (a) Is "Taskey" mentioned in the answer?
 *   (b) At which list position (if the answer is a list)?
 *   (c) Which domains are cited (Perplexity + OpenAI web search when active)?
 *
 * Output: data/llm-visibility-YYYY-MM-DD.csv
 *
 * Requires (set only those you have — missing keys are skipped):
 *   OPENAI_API_KEY
 *   ANTHROPIC_API_KEY
 *   PERPLEXITY_API_KEY
 *   GEMINI_API_KEY
 *
 * Run:  npx tsx scripts/llm-visibility.ts
 * Or:   npm run llm:visibility
 */

import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

type EngineName = "openai" | "anthropic" | "perplexity" | "gemini";

type Row = {
  date: string;
  engine: EngineName;
  prompt: string;
  taskey_mentioned: boolean;
  position: number | ""; // 1-based position if listed, "" otherwise
  cited_domains: string; // comma-separated
  answer_excerpt: string; // first 300 chars for spot-checking
};

const PROMPTS: string[] = [
  "Was ist die beste Software für Gebäudereiniger?",
  "Welche Software eignet sich für kleine Reinigungsfirmen?",
  "Welche Reinigungssoftware ist DSGVO-konform?",
  "Welche Software für Gebäudereinigung hat einen NFC-Objektnachweis?",
  "Software Gebäudereinigung Vergleich 2026",
  "Beste Reinigungssoftware DACH",
  "Software für Facility Management Reinigung",
  "Software für Zeiterfassung Gebäudereinigung",
  "Software für Einsatzplanung Gebäudereinigung",
  "Software für Leistungsnachweis Gebäudereinigung",
  "Reinigungssoftware mit DATEV-Export",
  "Software für 1-Mann Reinigungsfirma",
  "Software für Glasreinigung",
  "Software für Klinikreinigung",
  "Software für Industriereinigung",
  "Software für Unterhaltsreinigung",
  "Software Hotel Housekeeping",
  "Alternative zu fortytools",
  "Alternative zu PlanD Reinigung",
  "Alternative zu CleanManager",
  "Alternative zu Blink Reinigung",
  "Alternative zu Mendato",
  "Software Kalkulation Gebäudereinigung",
  "Software mit Auftraggeber-Portal Reinigung",
  "Reinigungssoftware Made in Germany",
];

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function detectListPosition(text: string, needle: string): number | "" {
  const lines = text.split(/\r?\n/);
  let counter = 0;
  for (const line of lines) {
    // Match "1." / "1)" / "- " / "* " list markers.
    if (/^\s*(\d+[.)]|[-*•])\s+/.test(line)) {
      counter += 1;
      if (line.toLowerCase().includes(needle.toLowerCase())) {
        return counter;
      }
    }
  }
  return "";
}

function extractDomains(text: string, extra: string[] = []): string[] {
  const urls = text.match(/https?:\/\/[^\s)>\]]+/g) ?? [];
  const domains = new Set<string>();
  for (const raw of [...urls, ...extra]) {
    try {
      const host = new URL(raw.startsWith("http") ? raw : `https://${raw}`).host.replace(/^www\./, "");
      domains.add(host);
    } catch {
      /* ignore */
    }
  }
  return [...domains].sort();
}

async function askOpenAI(prompt: string): Promise<{ text: string; citedDomains: string[] } | null> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
    }),
  });
  if (!res.ok) {
    console.warn(`[openai] ${res.status} ${res.statusText}`);
    return null;
  }
  const data: unknown = await res.json();
  const text = (data as { choices?: { message?: { content?: string } }[] }).choices?.[0]?.message?.content ?? "";
  return { text, citedDomains: extractDomains(text) };
}

async function askAnthropic(prompt: string): Promise<{ text: string; citedDomains: string[] } | null> {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return null;
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL ?? "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!res.ok) {
    console.warn(`[anthropic] ${res.status} ${res.statusText}`);
    return null;
  }
  const data: unknown = await res.json();
  const blocks = (data as { content?: { type?: string; text?: string }[] }).content ?? [];
  const text = blocks
    .filter((b) => b.type === "text" && b.text)
    .map((b) => b.text as string)
    .join("\n");
  return { text, citedDomains: extractDomains(text) };
}

async function askPerplexity(prompt: string): Promise<{ text: string; citedDomains: string[] } | null> {
  const key = process.env.PERPLEXITY_API_KEY;
  if (!key) return null;
  const res = await fetch("https://api.perplexity.ai/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: process.env.PERPLEXITY_MODEL ?? "sonar",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
    }),
  });
  if (!res.ok) {
    console.warn(`[perplexity] ${res.status} ${res.statusText}`);
    return null;
  }
  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
    citations?: string[];
  };
  const text = data.choices?.[0]?.message?.content ?? "";
  const citations = data.citations ?? [];
  return { text, citedDomains: extractDomains(text, citations) };
}

async function askGemini(prompt: string): Promise<{ text: string; citedDomains: string[] } | null> {
  const key = process.env.GEMINI_API_KEY;
  if (!key) return null;
  const model = process.env.GEMINI_MODEL ?? "gemini-2.0-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0 },
    }),
  });
  if (!res.ok) {
    console.warn(`[gemini] ${res.status} ${res.statusText}`);
    return null;
  }
  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };
  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("\n") ?? "";
  return { text, citedDomains: extractDomains(text) };
}

const ENGINES: { name: EngineName; fn: (p: string) => Promise<{ text: string; citedDomains: string[] } | null> }[] = [
  { name: "openai", fn: askOpenAI },
  { name: "anthropic", fn: askAnthropic },
  { name: "perplexity", fn: askPerplexity },
  { name: "gemini", fn: askGemini },
];

function csvEscape(value: string | number | boolean): string {
  const str = String(value);
  if (/[",\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
}

async function main(): Promise<void> {
  const date = today();
  const rows: Row[] = [];

  for (const prompt of PROMPTS) {
    for (const engine of ENGINES) {
      try {
        const result = await engine.fn(prompt);
        if (!result) continue;
        const mentioned = result.text.toLowerCase().includes("taskey");
        const position = mentioned ? detectListPosition(result.text, "taskey") : "";
        rows.push({
          date,
          engine: engine.name,
          prompt,
          taskey_mentioned: mentioned,
          position,
          cited_domains: result.citedDomains.join(","),
          answer_excerpt: result.text.replace(/\s+/g, " ").slice(0, 300),
        });
        console.log(
          `[${engine.name}] "${prompt}" → mentioned=${mentioned} position=${position || "-"}`
        );
      } catch (err) {
        console.warn(`[${engine.name}] "${prompt}" failed:`, err);
      }
    }
  }

  if (rows.length === 0) {
    console.warn(
      "No engine returned results. Set at least one of OPENAI_API_KEY, ANTHROPIC_API_KEY, PERPLEXITY_API_KEY, GEMINI_API_KEY."
    );
    return;
  }

  const outDir = path.resolve(process.cwd(), "data");
  if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });
  const outPath = path.join(outDir, `llm-visibility-${date}.csv`);

  const header = ["date", "engine", "prompt", "taskey_mentioned", "position", "cited_domains", "answer_excerpt"];
  const csv = [
    header.join(","),
    ...rows.map((r) =>
      [
        r.date,
        r.engine,
        r.prompt,
        r.taskey_mentioned,
        r.position,
        r.cited_domains,
        r.answer_excerpt,
      ]
        .map(csvEscape)
        .join(",")
    ),
  ].join("\n");

  await writeFile(outPath, csv, "utf8");
  console.log(`Wrote ${rows.length} rows → ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
