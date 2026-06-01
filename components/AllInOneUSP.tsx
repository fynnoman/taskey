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
      <section className="bg-gradient-to-r from-emerald-50 via-emerald-100 to-emerald-50 py-8 border-y border-emerald-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-black tracking-[0.25em] text-emerald-700 uppercase">
              Taskey-USP · All-in-One
            </span>
          </div>
          <p className="text-slate-900 text-base md:text-lg font-semibold leading-snug flex-1">
            Schluss mit <span className="line-through text-slate-500">5 Software-Abos</span> —{" "}
            <span className="text-emerald-700">eine Plattform, die wirklich alles abdeckt.</span>
          </p>
          <Link
            href="/#alles-in-einem"
            className="text-sm font-bold text-emerald-700 hover:text-emerald-700 whitespace-nowrap inline-flex items-center gap-1"
          >
            So spart Taskey Kosten
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    );
  }

  const current = slides[active];

  return (
    <section
      id="alles-in-einem"
      className="bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[64px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[64px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          {/* Linke Spalte: Text + Bullets */}
          <div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 text-slate-900">
              Mehr als nur
              <br />
              <span className="text-slate-500">das Wesentliche</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              Vom Tag 1 deckt Taskey alles ab, was ein moderner Betrieb vor Ort und im Büro braucht.
            </p>

            <ul className="space-y-2 mb-10">
              {slides.map((s, i) => (
                <li key={s.label}>
                  <button
                    onClick={() => setActive(i)}
                    className={`group w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                      i === active
                        ? "bg-blue-100 border-slate-300"
                        : "bg-transparent border-transparent hover:bg-blue-50"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-2 h-2 rounded-full transition-all ${
                        i === active ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" : "bg-blue-200/60"
                      }`}
                    />
                    <span className={`text-base font-semibold ${i === active ? "text-slate-900" : "text-slate-600"}`}>
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
                className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors text-base text-center"
              >
                Kostenlos starten
              </Link>
              <Link
                href="/features"
                className="px-8 py-3.5 border border-slate-300 text-slate-900 font-bold rounded-full hover:bg-blue-100 transition-colors text-base text-center"
              >
                Alle Funktionen
              </Link>
            </div>
          </div>

          {/* Rechte Spalte: große rotierende Karte */}
          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-50 overflow-hidden">
                <div
                  key={active}
                  className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 origin-left"
                  style={{ animation: "allinone-progress 4.5s linear forwards" }}
                />
              </div>

              <div className="p-8 md:p-10 flex flex-col h-full">
                <span className="inline-flex self-start text-[10px] font-black tracking-[0.25em] uppercase text-emerald-700 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full mb-6">
                  {current.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-3">
                  {current.title}
                </h3>
                <p className="text-sm md:text-base text-slate-500 mb-6">{current.subtitle}</p>
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
                    i === active ? "w-6 bg-blue-600" : "w-1.5 bg-blue-200/70"
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
