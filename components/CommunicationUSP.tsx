"use client";

import Link from "next/link";

/**
 * CommunicationUSP
 *
 * Taskeys Kern-USP: Die beste Kommunikation zwischen Einsatzort und Büro.
 * Wird auf allen wichtigen Seiten eingebunden (Home, Gebäudereinigung,
 * Features, Pricing, Lösungen).
 *
 * Varianten:
 *  - "full"    : große Sektion mit 4 Säulen (Standard)
 *  - "compact" : schlanker Banner-Streifen für Unterseiten
 *  - "dark"    : dunkle Variante für helle Hintergründe
 */

type Variant = "full" | "compact" | "dark";

export default function CommunicationUSP({ variant = "full" }: { variant?: Variant }) {
  if (variant === "compact") {
    return (
      <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-8 border-y border-blue-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
            </span>
            <span className="text-[11px] font-black tracking-[0.25em] text-blue-700 uppercase">
              Taskey-USP · Live-Verbindung
            </span>
          </div>
          <p className="text-slate-900 text-base md:text-lg font-semibold leading-snug flex-1">
            Die beste Kommunikation zwischen{" "}
            <span className="text-blue-700">Einsatzort</span> und{" "}
            <span className="text-blue-700">Büro</span> — in Echtzeit.
          </p>
          <Link
            href="/#echtzeit-kommunikation"
            className="text-sm font-bold text-blue-700 hover:text-blue-700 whitespace-nowrap inline-flex items-center gap-1"
          >
            Mehr erfahren
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    );
  }

  const isDark = variant === "dark";

  // Revolut-Style Karten: großer Titel + kurzer Einzeiler + visuelle Illustration
  const cards = [
    {
      title: "Echtzeit zwischen Feld & Büro",
      subtitle: "Live-Standorte, Scans und Statusänderungen — ohne WhatsApp-Rückfragen.",
      visual: (
        <div className="relative w-full h-full flex items-end justify-center pb-8">
          <div className="absolute inset-x-8 bottom-10 h-28 rounded-2xl bg-blue-50 border border-slate-200 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-600">Live · Einsatz aktiv</span>
            </div>
            <div className="px-4 py-3 space-y-1.5">
              <div className="h-2 rounded-full bg-blue-200/60 w-4/5" />
              <div className="h-2 rounded-full bg-blue-100 w-3/5" />
              <div className="h-2 rounded-full bg-blue-100 w-2/3" />
            </div>
          </div>
          <div className="absolute left-6 top-6 w-14 h-14 rounded-2xl bg-blue-100 border border-slate-300 flex items-center justify-center">
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      title: "Transparenz für den Kunden",
      subtitle: "Auftraggeber sehen Leistungen und Protokolle live — statt nur am Monatsende.",
      visual: (
        <div className="relative w-full h-full flex items-end justify-center pb-8">
          <div className="absolute inset-x-6 bottom-8 rounded-2xl bg-blue-50 border border-slate-200 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-700">Reinigung abgeschlossen</span>
              </div>
              <span className="text-[10px] text-slate-500">09:34</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-700">Protokoll geöffnet</span>
              </div>
              <span className="text-[10px] text-slate-500">10:12</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Nachweisbar statt nur geplant",
      subtitle: "NFC-Scan, Zeit, Ort, Foto — jede Leistung lückenlos belegt.",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-36 h-36">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/20 blur-2xl" />
            <div className="absolute inset-4 rounded-full border border-slate-300" />
            <div className="absolute inset-8 rounded-full border border-slate-200" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 border border-slate-300 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Einfach im Außendienst",
      subtitle: "Wenige Taps, große Symbole, Offline-Sync. Jedes Team kommt klar.",
      visual: (
        <div className="relative w-full h-full flex items-end justify-center pb-6">
          <div className="relative w-28 h-56 rounded-[2rem] border-[3px] border-slate-300 bg-blue-50 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-5 flex justify-center">
              <div className="w-14 h-4 rounded-b-xl bg-slate-200/60" />
            </div>
            <div className="p-3 pt-8 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-square rounded-xl bg-blue-100 border border-slate-200 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-md bg-blue-300/60" />
                </div>
                <div className="aspect-square rounded-xl bg-emerald-100 border border-slate-200 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-md bg-blue-300/60" />
                </div>
                <div className="aspect-square rounded-xl bg-cyan-100 border border-slate-200 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-md bg-blue-300/60" />
                </div>
                <div className="aspect-square rounded-xl bg-purple-100 border border-slate-200 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-md bg-blue-300/60" />
                </div>
              </div>
              <div className="h-8 rounded-xl bg-blue-100 border border-slate-200" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const bgFull = isDark
    ? "bg-gradient-to-b from-white via-blue-50 to-white text-slate-900"
    : "bg-gradient-to-b from-white via-blue-50 to-white text-slate-900";

  return (
    <section id="echtzeit-kommunikation" className={`${bgFull} py-24 md:py-32 relative overflow-hidden`}>
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[72px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[64px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header – Revolut-Style: zentral, groß, knapp */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 text-slate-900">
            Feld trifft Büro.
            <br />
            <span className="text-slate-500">In Echtzeit.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Infos vom Einsatzort landen sofort im Büro. Entscheiden statt raten.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors text-base"
            >
              Kostenlos starten
            </Link>
            <Link
              href="/features"
              className="px-8 py-3.5 border border-slate-300 text-slate-900 font-bold rounded-full hover:bg-blue-100 transition-colors text-base"
            >
              Funktionen ansehen
            </Link>
          </div>
        </div>

        {/* Karten-Grid – Revolut-Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {cards.map((c, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 overflow-hidden min-h-[380px] md:min-h-[440px] flex flex-col"
            >
              <div className="p-6 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {c.subtitle}
                </p>
              </div>
              <div className="flex-1 relative">
                {c.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
