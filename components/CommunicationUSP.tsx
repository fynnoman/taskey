"use client";

import Link from "next/link";

/**
 * CommunicationUSP
 *
 * Taskeys Kern-USP: Die beste Kommunikation zwischen Einsatzort und Büro.
 * Wird auf allen wichtigen Seiten eingebunden (Home, Handwerk, Gebäudereinigung,
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
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 py-8 border-y border-blue-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
            </span>
            <span className="text-[11px] font-black tracking-[0.25em] text-cyan-300 uppercase">
              Taskey-USP · Live-Verbindung
            </span>
          </div>
          <p className="text-white text-base md:text-lg font-semibold leading-snug flex-1">
            Die beste Kommunikation zwischen{" "}
            <span className="text-cyan-300">Einsatzort</span> und{" "}
            <span className="text-cyan-300">Büro</span> — in Echtzeit.
          </p>
          <Link
            href="/#echtzeit-kommunikation"
            className="text-sm font-bold text-cyan-300 hover:text-cyan-200 whitespace-nowrap inline-flex items-center gap-1"
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
  const bg = isDark
    ? "bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white"
    : "bg-gradient-to-br from-gray-50 via-white to-blue-50/40 text-gray-900";
  const cardBg = isDark
    ? "bg-white/5 border-white/10 hover:border-cyan-400/40"
    : "bg-white border-gray-200 hover:border-blue-900/30 shadow-sm hover:shadow-md";
  const muted = isDark ? "text-gray-300" : "text-gray-600";
  const accent = isDark ? "text-cyan-300" : "text-blue-900";

  const pillars = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          <circle cx="19" cy="17.25" r="2.25" fill="currentColor" />
        </svg>
      ),
      title: "Echtzeit zwischen Feld & Büro",
      text:
        "Live-Standorte, aktive Mitarbeitende, Scans, Statusänderungen, Fotos, Berichte und Dokumente — Büro und Einsatzort arbeiten auf demselben Informationsstand. Keine Rückfragen per WhatsApp mehr.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .644C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Transparenz für den Kunden",
      text:
        "Über Auftraggeber-Ansichten und Live-Einblicke sehen Ihre Kunden Leistungen, Protokolle und Audit-Ergebnisse — statt am Ende nur eine Rechnung. Das schafft Vertrauen und reduziert Reklamationen drastisch.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Operative Nachweise statt Organisation",
      text:
        "Taskey macht den realen Vor-Ort-Einsatz beweisbar: NFC-Scan, Zeit, Ort, Foto-Dokumentation und Nachkalkulation. Jede Leistung ist lückenlos belegt — vor Gericht, gegenüber Auftraggebern und für Ihre eigene Kalkulation.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: "Einfachheit im Außendienst",
      text:
        "Wenige Taps, große Symbole, Offline-Sync, schnelle Statusmeldungen. Taskey funktioniert auch bei Teams ohne Büro-Disziplin — und genau deshalb kommen die Informationen überhaupt im Büro an.",
    },
  ];

  return (
    <section id="echtzeit-kommunikation" className={`${bg} py-20 md:py-28 relative overflow-hidden`}>
      {isDark && (
        <>
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
        </>
      )}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className={`inline-flex items-center gap-2 px-5 py-2 text-xs font-black tracking-[0.25em] uppercase rounded-full mb-6 ${
              isDark
                ? "text-cyan-300 bg-cyan-400/10 border border-cyan-400/20"
                : "text-blue-900 bg-blue-100"
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isDark ? "bg-cyan-400" : "bg-blue-600"} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isDark ? "bg-cyan-400" : "bg-blue-600"}`} />
            </span>
            Was Taskey wirklich abhebt
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6">
            Die beste Kommunikation zwischen{" "}
            <span className={accent}>Einsatzort</span> und{" "}
            <span className={accent}>Büro.</span>
          </h2>

          <p className={`text-lg md:text-xl leading-relaxed ${muted}`}>
            Taskey ist nicht nur eine Software — Taskey ist der{" "}
            <span className={isDark ? "text-white font-semibold" : "text-gray-900 font-semibold"}>
              Vermittler für Infos
            </span>
            , die Ihre Mitarbeitenden vor Ort sammeln: Defekte, Einsatzstunden, Probleme mit Kunden,
            Materialbedarf. Das Büro bekommt diese Informationen{" "}
            <span className={isDark ? "text-white font-semibold" : "text-gray-900 font-semibold"}>
              in Echtzeit
            </span>{" "}
            — und kann sofort entscheiden, statt abends im Dunkeln zu tappen.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-14">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-7 transition-all ${cardBg}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    isDark
                      ? "bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                      : "bg-blue-900 text-white"
                  }`}
                >
                  {p.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-xl font-black mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {p.title}
                  </h3>
                  <p className={`text-[15px] leading-relaxed ${muted}`}>{p.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow visualization */}
        <div
          className={`rounded-3xl p-8 md:p-10 border ${
            isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200 shadow-sm"
          }`}
        >
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center">
            {/* Feld */}
            <div className="text-center md:text-right">
              <p className={`text-xs font-black tracking-[0.2em] uppercase mb-2 ${accent}`}>Einsatzort</p>
              <p className={`text-lg font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                Mitarbeitende vor Ort
              </p>
              <p className={`text-sm ${muted}`}>
                NFC-Scan · Zeiten · Fotos · Defekte · Kundenprobleme · Material
              </p>
            </div>

            {/* Arrow animation */}
            <div className="flex md:flex-col items-center justify-center gap-2 md:gap-1 py-2 md:py-0 md:px-4">
              <svg
                className={`w-8 h-8 md:w-7 md:h-7 md:rotate-0 ${isDark ? "text-cyan-400" : "text-blue-900"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${accent}`}>Echtzeit</span>
              <svg
                className={`w-8 h-8 md:w-7 md:h-7 md:rotate-0 ${isDark ? "text-cyan-400" : "text-blue-900"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
            </div>

            {/* Büro */}
            <div className="text-center md:text-left">
              <p className={`text-xs font-black tracking-[0.2em] uppercase mb-2 ${accent}`}>Büro</p>
              <p className={`text-lg font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                Entscheider & Disposition
              </p>
              <p className={`text-sm ${muted}`}>
                Live-Dashboard · Benachrichtigungen · Nachkalkulation · Kundenkommunikation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
