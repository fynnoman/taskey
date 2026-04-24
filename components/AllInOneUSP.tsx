"use client";

import Link from "next/link";

/**
 * AllInOneUSP
 *
 * Taskeys zweiter Kern-USP: Alles in einem System — Schluss mit 5 parallelen
 * Software-Abos. Zeiterfassung, Einsatzplanung, Auftragsverwaltung, Objekt-
 * dokumentation, Angebote & Rechnungen, DATEV-Export — in einer Plattform.
 *
 * Varianten:
 *  - "full"    : große Sektion mit Vergleich „vorher/nachher" + Kostenrechnung
 *  - "compact" : schlanker Banner-Streifen für Unterseiten
 *  - "dark"    : dunkle Variante für helle Hintergründe
 */

type Variant = "full" | "compact" | "dark";

const replacedTools = [
  { name: "Zeiterfassungs-App", price: "ab 4 €/Nutzer/Monat" },
  { name: "Einsatz-/Schichtplanung", price: "ab 6 €/Nutzer/Monat" },
  { name: "Auftrags- & Objektverwaltung", price: "ab 9 €/Nutzer/Monat" },
  { name: "Foto-/Nachweis-Dokumentation", price: "ab 5 €/Nutzer/Monat" },
  { name: "Angebots- & Rechnungstool", price: "ab 15 €/Monat" },
  { name: "DATEV-Schnittstelle / Export", price: "oft Extra-Modul" },
];

const pillars = [
  {
    title: "Eine Plattform statt fünf Tools",
    desc: "Zeiterfassung, Einsatzplanung, Aufträge, Nachweise, Rechnungen, DATEV-Export – alles in Taskey.",
    path: "M4 6h16M4 12h16M4 18h16",
  },
  {
    title: "Ein Abo statt fünf",
    desc: "Ein klarer Preis. Planbar, ohne Modul-Aufschläge.",
    path: "M12 8c-2.21 0-4 1.12-4 2.5S9.79 13 12 13s4 1.12 4 2.5S14.21 18 12 18m0-10V6m0 12v2m-8-6a8 8 0 1116 0 8 8 0 01-16 0z",
  },
  {
    title: "Daten, die automatisch zusammenpassen",
    desc: "NFC-Zeit → Auftrag → Lohn → Rechnung. Ein Datenmodell, nicht sechs.",
    path: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    title: "Einführen an einem Nachmittag",
    desc: "Accounts anlegen, NFC kleben, App ausrollen. Ohne Schulung.",
    path: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

export default function AllInOneUSP({ variant = "full" }: { variant?: Variant }) {
  if (variant === "compact") {
    return (
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-gray-900 py-8 border-y border-emerald-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-black tracking-[0.25em] text-emerald-300 uppercase">
              Taskey-USP · All-in-One
            </span>
          </div>
          <p className="text-white text-base md:text-lg font-semibold leading-snug flex-1">
            Schluss mit <span className="line-through text-white/50">5 Software-Abos</span> —{" "}
            <span className="text-emerald-300">eine Plattform, die wirklich alles abdeckt.</span>
          </p>
          <Link
            href="/#alles-in-einem"
            className="text-sm font-bold text-emerald-300 hover:text-emerald-200 whitespace-nowrap inline-flex items-center gap-1"
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

  const isDark = variant === "dark";
  const bg = isDark
    ? "bg-gradient-to-br from-gray-950 via-emerald-950 to-gray-900 text-white"
    : "bg-gradient-to-br from-gray-50 via-white to-emerald-50/40 text-gray-900";
  const cardBg = isDark
    ? "bg-white/5 border-white/10 hover:border-emerald-400/40"
    : "bg-white border-gray-200 hover:border-emerald-700/30 shadow-sm hover:shadow-md";
  const muted = isDark ? "text-gray-300" : "text-gray-600";
  const subtleBg = isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200";

  return (
    <section id="alles-in-einem" className={`${bg} py-20 sm:py-28 relative overflow-hidden`}>
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
              isDark
                ? "bg-emerald-500/10 border-emerald-400/30 text-emerald-300"
                : "bg-emerald-50 border-emerald-200 text-emerald-800"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-black tracking-[0.25em] uppercase">
              Kern-USP · Alles in einem System
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center leading-[1.05] mb-6 tracking-tight">
          Eine <span className="text-emerald-500">Software</span>.
          <br className="hidden sm:block" /> Statt fünf.
        </h2>
        <p
          className={`text-lg sm:text-xl text-center max-w-2xl mx-auto mb-14 leading-relaxed ${muted}`}
        >
          Zeiterfassung, Einsatzplanung, Aufträge, Nachweise, Rechnungen, DATEV – in einer Plattform.
        </p>

        {/* Replaces-stack vs. Taskey */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {/* Vorher */}
          <div
            className={`rounded-2xl border p-6 sm:p-7 ${subtleBg} ${
              isDark ? "" : "bg-white"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-black tracking-[0.25em] uppercase text-red-500">
                Vorher
              </span>
              <span className={`text-xs ${muted}`}>— 5+ Abos jeden Monat</span>
            </div>
            <ul className="space-y-2.5">
              {replacedTools.map((tool) => (
                <li
                  key={tool.name}
                  className={`flex items-center justify-between gap-3 text-sm pb-2.5 border-b ${
                    isDark ? "border-white/10" : "border-gray-100"
                  } last:border-b-0`}
                >
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-red-500 flex-shrink-0"
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
                    <span className={isDark ? "text-gray-200" : "text-gray-800"}>
                      {tool.name}
                    </span>
                  </span>
                  <span className={`text-xs font-semibold ${muted} whitespace-nowrap`}>
                    {tool.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nachher */}
          <div
            className={`rounded-2xl border-2 p-6 sm:p-7 ${
              isDark
                ? "bg-emerald-500/5 border-emerald-400/40"
                : "bg-emerald-50/40 border-emerald-500"
            } relative`}
          >
            <div className="absolute -top-3 left-6 bg-emerald-500 text-white text-[10px] font-black tracking-[0.25em] uppercase px-3 py-1 rounded-full">
              Mit Taskey
            </div>
            <div className="flex items-center gap-2 mb-4 mt-1">
              <span className="text-xs font-black tracking-[0.25em] uppercase text-emerald-600 dark:text-emerald-400">
                Nachher
              </span>
              <span className={`text-xs ${muted}`}>— ein System, ein Abo</span>
            </div>
            <ul className="space-y-2.5">
              {[
                "Zeiterfassung mit NFC",
                "Einsatz- & Schichtplanung",
                "Auftrags- & Objektverwaltung",
                "Foto-/Nachweis-Dokumentation",
                "Angebote & Rechnungen",
                "DATEV-Export inklusive",
              ].map((item) => (
                <li
                  key={item}
                  className={`flex items-center gap-2 text-sm pb-2.5 border-b ${
                    isDark ? "border-white/10" : "border-emerald-200/60"
                  } last:border-b-0`}
                >
                  <svg
                    className="w-4 h-4 text-emerald-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4 Säulen */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`${cardBg} border rounded-2xl p-5 sm:p-6 transition-all`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${isDark ? "bg-emerald-500/10 text-emerald-300" : "bg-emerald-50 text-emerald-700"}`} aria-hidden>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={p.path} />
                </svg>
              </div>
              <h3
                className={`text-base sm:text-lg font-bold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {p.title}
              </h3>
              <p className={`text-sm leading-relaxed ${muted}`}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className={`text-center text-base sm:text-lg max-w-2xl mx-auto ${muted}`}>
          Ein Login. Ein Datenmodell. Eine Rechnung.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-colors"
          >
            Alle Funktionen ansehen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          <Link
            href="/pricing"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-colors border ${
              isDark
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-gray-300 text-gray-900 hover:bg-gray-100"
            }`}
          >
            Preis statt 5 Abos sehen
          </Link>
        </div>
      </div>
    </section>
  );
}
