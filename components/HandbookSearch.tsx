"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

type Item = {
  id: string;
  chapter: string;
  section: string;
  title: string;
  content: string;
  page: number;
};

type Scored = {
  item: Item;
  score: number;
  matched: string[];
};

const STOPWORDS = new Set([
  "der", "die", "das", "und", "oder", "aber", "wenn", "als", "wie", "ist",
  "sind", "war", "waren", "ein", "eine", "einer", "eines", "einem", "einen",
  "den", "dem", "des", "im", "in", "an", "am", "auf", "zu", "zur", "zum",
  "von", "vom", "für", "mit", "bei", "über", "unter", "vor", "nach", "aus",
  "so", "ich", "du", "er", "sie", "es", "wir", "ihr", "was", "wer", "wo",
  "welche", "welcher", "welches", "nicht", "kein", "keine", "dass", "man",
  "auch", "noch", "schon", "hier", "dort", "kann", "können", "soll", "sollen",
  "muss", "müssen", "will", "wollen", "wird", "werden", "habe", "hat", "haben",
  "the", "and", "or", "how", "do", "i", "to", "a", "an", "of", "for", "on",
]);

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u")
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter((t) => t.length >= 2 && !STOPWORDS.has(t));
}

function highlight(text: string, tokens: string[]): ReactNode[] {
  if (tokens.length === 0) return [text];
  const pattern = tokens
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const re = new RegExp(`(${pattern})`, "gi");
  const parts = text.split(re);
  return parts.map((p, i) =>
    re.test(p) ? (
      <mark
        key={i}
        className="bg-cyan-100 text-blue-900 rounded px-0.5 font-semibold"
      >
        {p}
      </mark>
    ) : (
      p
    ),
  );
}

function makeExcerpt(content: string, tokens: string[], maxLen = 280): string {
  if (!content) return "";
  if (tokens.length === 0) return content.slice(0, maxLen);
  const lower = content.toLowerCase();
  let firstHit = -1;
  for (const t of tokens) {
    const idx = lower.indexOf(t);
    if (idx >= 0 && (firstHit < 0 || idx < firstHit)) firstHit = idx;
  }
  if (firstHit < 0) return content.slice(0, maxLen);
  const start = Math.max(0, firstHit - 60);
  const end = Math.min(content.length, start + maxLen);
  let excerpt = content.slice(start, end);
  if (start > 0) excerpt = "… " + excerpt;
  if (end < content.length) excerpt = excerpt + " …";
  return excerpt;
}

const SUGGESTIONS: { label: string; q: string }[] = [
  { label: "Passwort vergessen", q: "Passwort vergessen zurücksetzen" },
  { label: "Neuen Mitarbeiter anlegen", q: "Neuen Mitarbeiter anlegen" },
  { label: "Rechnung erstellen", q: "Rechnung erstellen" },
  { label: "NFC-Tag zuweisen", q: "NFC Tag zuweisen Objekt" },
  { label: "Urlaubsantrag genehmigen", q: "Urlaub genehmigen Antrag" },
  { label: "Schaden melden (App)", q: "Schaden melden App" },
  { label: "DATEV-Export", q: "DATEV Export" },
  { label: "Google Kalender verbinden", q: "Google Kalender verbinden" },
];

export default function HandbookSearch() {
  const [items, setItems] = useState<Item[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/handbook.json", { cache: "force-cache" })
      .then((r) => {
        if (!r.ok) throw new Error("load-failed");
        return r.json();
      })
      .then((data: Item[]) => {
        if (!cancelled) setItems(data);
      })
      .catch(() => {
        if (!cancelled) setError("Handbuch konnte nicht geladen werden.");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query), 140);
    return () => clearTimeout(t);
  }, [query]);

  const tokens = useMemo(() => tokenize(debounced), [debounced]);

  const results: Scored[] = useMemo(() => {
    if (!items || tokens.length === 0) return [];
    const scored: Scored[] = [];
    for (const item of items) {
      const titleL = item.title.toLowerCase();
      const sectionL = item.section.toLowerCase();
      const chapterL = item.chapter.toLowerCase();
      const contentL = item.content.toLowerCase();
      let score = 0;
      const matched: string[] = [];

      const fullQ = debounced.toLowerCase().trim();
      if (fullQ.length >= 3 && titleL.includes(fullQ)) score += 60;
      if (fullQ.length >= 3 && sectionL.includes(fullQ)) score += 25;

      for (const t of tokens) {
        let tokScore = 0;
        if (titleL === t) tokScore += 80;
        else if (titleL.includes(t)) tokScore += 22;
        if (sectionL.includes(t)) tokScore += 10;
        if (chapterL.includes(t)) tokScore += 4;
        if (contentL.includes(t)) {
          const occ = contentL.split(t).length - 1;
          tokScore += Math.min(occ, 6) * 2;
        }
        if (tokScore > 0) matched.push(t);
        score += tokScore;
      }

      const coverage = matched.length / tokens.length;
      score = score * (0.4 + 0.6 * coverage);

      if (score > 0) scored.push({ item, score, matched });
    }
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 6);
  }, [items, tokens, debounced]);

  const bestScore = results[0]?.score ?? 0;
  const hasStrong = bestScore >= 12;
  const showFallback =
    debounced.trim().length > 0 && (results.length === 0 || !hasStrong);

  function toggle(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section
      id="hilfe-center"
      aria-labelledby="hilfe-center-heading"
      className="relative pb-16 md:pb-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-700 mb-3">
            Hilfe-Center
          </p>
          <h2
            id="hilfe-center-heading"
            className="text-3xl md:text-4xl font-black leading-tight mb-3"
          >
            Antwort im Handbuch finden.
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Stelle deine Frage in eigenen Worten. Die Suche durchsucht das
            komplette Nutzerhandbuch und zeigt dir die passenden Passagen.
          </p>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl bg-white border border-slate-200 shadow-sm focus-within:border-cyan-400 focus-within:shadow-md transition">
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              />
            </svg>
            <input
              ref={inputRef}
              type="search"
              inputMode="search"
              autoComplete="off"
              spellCheck={false}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="z. B. „Wie erstelle ich eine Rechnung?“"
              className="w-full bg-transparent pl-14 pr-14 py-4 md:py-5 text-base md:text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none rounded-2xl"
              aria-label="Handbuch durchsuchen"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition"
                aria-label="Suche leeren"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          {items === null && !error && (
            <p className="mt-4 text-sm text-slate-500 text-center">
              Handbuch wird geladen …
            </p>
          )}
          {error && (
            <p className="mt-4 text-sm text-rose-600 text-center">{error}</p>
          )}
        </div>

        {debounced.trim().length === 0 && items !== null && (
          <div className="mt-8">
            <p className="text-xs font-black tracking-[0.2em] uppercase text-slate-500 mb-3 text-center">
              Häufig gesucht
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => {
                    setQuery(s.q);
                    inputRef.current?.focus();
                  }}
                  className="px-4 py-2 rounded-full bg-blue-50 border border-slate-200 text-sm font-semibold text-blue-800 hover:bg-white hover:border-cyan-400 transition-colors"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {debounced.trim().length > 0 && results.length > 0 && (
          <div className="mt-8 space-y-3">
            <p className="text-xs font-black tracking-[0.2em] uppercase text-slate-500 mb-1">
              {results.length} passende {results.length === 1 ? "Antwort" : "Antworten"}
            </p>
            {results.map(({ item }) => {
              const isOpen = expanded.has(item.id);
              const excerpt = isOpen
                ? item.content
                : makeExcerpt(item.content, tokens);
              return (
                <article
                  key={item.id}
                  className="rounded-2xl bg-blue-50/70 border border-slate-200 p-5 md:p-6"
                >
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-700">
                      {item.chapter}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">
                      {item.section}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2">
                    {highlight(item.title, tokens)}
                  </h3>
                  {excerpt && (
                    <p className="text-slate-700 leading-relaxed text-sm md:text-base whitespace-pre-line">
                      {highlight(excerpt, tokens)}
                    </p>
                  )}
                  {item.content && item.content.length > 280 && (
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      className="mt-3 text-sm font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                    >
                      {isOpen ? "Weniger anzeigen" : "Ganze Passage lesen"}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </article>
              );
            })}
          </div>
        )}

        {showFallback && items !== null && (
          <div className="mt-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-cyan-200 p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-cyan-200 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-black text-slate-900">
                  Nichts Passendes gefunden?
                </h3>
                <p className="text-slate-600 text-sm md:text-base mt-1">
                  Schreib oder ruf uns an. Wir helfen persönlich weiter.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="mailto:info@taskeyapp.com"
                className="group rounded-xl bg-white border border-slate-200 hover:border-cyan-400 p-4 transition-colors"
              >
                <p className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-700 mb-1">
                  E-Mail
                </p>
                <p className="text-base md:text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors break-all">
                  info@taskeyapp.com
                </p>
              </a>
              <a
                href="tel:+4901745459801"
                className="group rounded-xl bg-white border border-slate-200 hover:border-cyan-400 p-4 transition-colors"
              >
                <p className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-700 mb-1">
                  Telefon
                </p>
                <p className="text-base md:text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                  0174 5459801
                </p>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
