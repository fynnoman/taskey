"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * AllInOneUSP — Revolut-Style Split-Layout mit auto-rotierender Karte.
 */

type Variant = "full" | "compact" | "dark";

const slides = [
  {
    label: "Zeiterfassung mit NFC",
    title: "Zeiterfassung mit NFC",
    subtitle: "Ein Tap am Objekt genügt. Zeit, Ort, Person – lückenlos belegt.",
    tag: "Zeiterfassung",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-500/20 blur-2xl" />
          <div className="absolute inset-6 rounded-full border border-slate-200 animate-pulse" />
          <div className="absolute inset-12 rounded-full border border-slate-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 border border-slate-300 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 inset-x-6 rounded-2xl bg-blue-50 border border-slate-200 px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-emerald-700">NFC-Scan · 08:04</span>
          </div>
          <div className="h-1.5 rounded-full bg-blue-100 overflow-hidden">
            <div className="h-full w-3/4 bg-emerald-400/60" />
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Einsatz- & Schichtplanung",
    title: "Einsatzplanung per Drag & Drop",
    subtitle: "Teams, Touren, Objekte – alles im selben Kalender. Statt in drei Tools.",
    tag: "Planung",
    visual: (
      <div className="relative w-full h-full p-6 flex items-center">
        <div className="w-full rounded-2xl bg-blue-50 border border-slate-200 overflow-hidden">
          {["Mo", "Di", "Mi", "Do", "Fr"].map((d, i) => (
            <div key={d} className={`flex items-center gap-2 px-4 py-2 ${i < 4 ? "border-b border-slate-200/60" : ""}`}>
              <span className="text-[10px] font-black tracking-widest text-slate-500 w-6">{d}</span>
              <div className="flex-1 flex gap-1">
                {[...Array(i === 2 ? 3 : 2)].map((_, j) => (
                  <div
                    key={j}
                    className={`h-5 rounded-md ${
                      ["bg-emerald-400/50", "bg-cyan-400/50", "bg-blue-400/50", "bg-purple-400/50"][(i + j) % 4]
                    }`}
                    style={{ width: `${25 + ((i + j * 13) % 40)}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Angebote & Rechnungen",
    title: "Angebote und Rechnungen raus in Minuten",
    subtitle: "Aus Auftrag wird Angebot wird Rechnung. Ohne Copy-Paste, ohne Excel.",
    tag: "Abrechnung",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center p-6">
        <div className="relative w-full max-w-[260px]">
          <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-blue-50 border border-slate-200" />
          <div className="absolute -bottom-1.5 -right-1.5 w-full h-full rounded-2xl bg-blue-50 border border-slate-200" />
          <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-slate-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-black tracking-widest uppercase text-emerald-700">Rechnung 2026-0421</span>
              <span className="text-[10px] text-slate-500">Bezahlt</span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-2 rounded-full bg-blue-100 w-full" />
              <div className="h-2 rounded-full bg-blue-100 w-4/5" />
              <div className="h-2 rounded-full bg-blue-100 w-3/5" />
            </div>
            <div className="flex items-baseline justify-between pt-3 border-t border-slate-200">
              <span className="text-[10px] text-slate-500">Gesamt</span>
              <span className="text-2xl font-black text-slate-900">4.280 €</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "DATEV-Export inklusive",
    title: "DATEV-Export ohne Zusatzmodul",
    subtitle: "Zeiten, Rechnungen, Stammdaten – direkt zur Steuerkanzlei. Ein Klick.",
    tag: "Buchhaltung",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center p-6">
        <div className="relative w-full max-w-[280px] rounded-2xl bg-blue-50 border border-slate-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">DATEV_April_2026.csv</p>
              <p className="text-[10px] text-slate-500">Bereit zum Download · 124 KB</p>
            </div>
          </div>
          <div className="space-y-2">
            {[100, 85, 70, 55].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <div className="h-2 rounded-full bg-blue-100 flex-1" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Dokumentation",
    title: "Nachweise, die Kunden überzeugen",
    subtitle: "Fotos, Protokolle, Unterschriften — alles an Auftrag und Objekt gebunden.",
    tag: "Dokumentation",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center p-6">
        <div className="relative w-full max-w-[280px]">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-xl border border-slate-200 ${
                  ["bg-emerald-50", "bg-cyan-50", "bg-blue-50", "bg-purple-50", "bg-emerald-50", "bg-cyan-50"][i]
                } flex items-center justify-center`}
              >
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl bg-blue-50 border border-slate-200 px-3 py-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs font-bold text-slate-700">Vom Kunden unterschrieben</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function AllInOneUSP({ variant = "full" }: { variant?: Variant }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (variant === "compact") return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [variant]);

  if (variant === "compact") {
    return (
      <section className="bg-[var(--section-alt)] py-8 border-y border-[var(--signal)]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--signal)] opacity-70" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--signal)]" />
            </span>
            <span className="font-mono text-[10px] font-semibold tracking-[0.25em] text-[var(--ink-soft)] uppercase">
              Taskey-USP · All-in-One
            </span>
          </div>
          <p className="text-[var(--ink)] text-base md:text-lg font-semibold tracking-[-0.015em] leading-snug flex-1">
            Schluss mit <span className="line-through text-[var(--foreground-soft)]">5 Software-Abos</span> —{" "}
            <span className="text-[var(--signal-strong)]">eine Plattform, die wirklich alles abdeckt.</span>
          </p>
          <Link
            href="/#alles-in-einem"
            className="text-sm font-semibold text-[var(--signal-strong)] hover:text-[var(--ink)] whitespace-nowrap inline-flex items-center gap-1 transition-colors"
          >
            So spart Taskey Kosten <span>→</span>
          </Link>
        </div>
      </section>
    );
  }

  const current = slides[active];

  return (
    <section
      id="alles-in-einem"
      className="bg-[var(--background-deep)] text-[var(--ink)] py-24 md:py-32 relative overflow-hidden isolate"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 graph-paper-fine opacity-60"
          style={{
            maskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)',
          }}
        />
        <div
          className="absolute top-0 right-1/3 w-[500px] h-[500px]"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(234,88,12,0.12), transparent 75%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          {/* Linke Spalte: Text + Bullets */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--foreground-soft)] mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-[var(--border-strong)]" />
              <span>§02 · All-in-One</span>
            </div>
            <h2 className="text-[2.6rem] leading-[0.98] sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] mb-6 text-[var(--ink)]">
              Eine Software statt
              <br />
              <span className="line-through decoration-[var(--signal)] decoration-[3px] text-[var(--foreground-soft)]">
                fünf Abos.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed mb-8 max-w-xl">
              Vom Tag 1 deckt Taskey alles ab, was ein moderner Betrieb vor Ort und im Büro braucht.
            </p>

            <ul className="space-y-2 mb-10">
              {slides.map((s, i) => (
                <li key={s.label}>
                  <button
                    onClick={() => setActive(i)}
                    className={`group w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                      i === active
                        ? "bg-[var(--background)] border-[var(--signal)]/40 shadow-[0_4px_14px_-6px_rgba(234,88,12,0.25)]"
                        : "bg-transparent border-transparent hover:bg-[var(--background)]/60"
                    }`}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-semibold w-7 text-[var(--foreground-soft)]">
                      0{i + 1}
                    </span>
                    <span
                      className={`flex-shrink-0 w-2 h-2 rounded-full transition-all ${
                        i === active
                          ? "bg-[var(--signal)] shadow-[0_0_10px_rgba(234,88,12,0.6)]"
                          : "bg-[var(--border-strong)]"
                      }`}
                    />
                    <span
                      className={`text-base font-semibold tracking-[-0.015em] ${
                        i === active ? "text-[var(--ink)]" : "text-[var(--foreground-muted)]"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--ink)] text-[var(--background)] font-semibold rounded-full hover:bg-[var(--ink-soft)] transition-all duration-300 shadow-[0_10px_30px_-12px_rgba(12,14,16,0.55)] hover:-translate-y-[1px] text-base text-center"
              >
                <span>Kostenlos starten</span>
                <span className="text-[var(--signal-soft)] transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[var(--border-strong)] bg-[var(--background)]/60 text-[var(--ink)] font-semibold rounded-full hover:bg-[var(--background)] transition-colors text-base text-center"
              >
                <span>Alle Funktionen</span>
                <span className="text-[var(--foreground-soft)]">↗</span>
              </Link>
            </div>
          </div>

          {/* Rechte Spalte: große rotierende Karte */}
          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] bg-[var(--background)] border border-[var(--border-soft)] overflow-hidden shadow-[0_30px_80px_-25px_rgba(12,14,16,0.2)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--background-deep)] overflow-hidden">
                <div
                  key={active}
                  className="h-full bg-[var(--signal)] origin-left"
                  style={{ animation: "allinone-progress 4.5s linear forwards" }}
                />
              </div>

              <div className="p-8 md:p-10 flex flex-col h-full">
                <span className="inline-flex self-start font-mono text-[10px] font-semibold tracking-[0.25em] uppercase text-[var(--signal-strong)] bg-[var(--signal-soft)] border border-[var(--signal)]/30 px-3 py-1 rounded-full mb-6">
                  {current.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.025em] leading-tight mb-3">
                  {current.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--foreground-muted)] mb-6">{current.subtitle}</p>
                <div className="flex-1 relative">
                  <div key={active} className="absolute inset-0" style={{ animation: "allinone-fade 0.6s ease-out" }}>
                    {current.visual}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots für Mobile */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-[var(--signal)]" : "w-1.5 bg-[var(--border-strong)]"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes allinone-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes allinone-fade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
