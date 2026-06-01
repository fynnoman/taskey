"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * TargetAudiences
 *
 * Klare Zielgruppen-Vermittlung für SEO + Nutzerklarheit.
 * Jede Zielgruppe wird mit typischen Suchbegriffen, Pain-Points und Lösungen
 * angereichert, damit Google (und Nutzer) sofort erkennen: „Das ist für mich".
 *
 * SEO-Wirkung: hohe Keyword-Dichte für alle relevanten Gewerke + Branchen,
 * ohne unnatürliches Keyword-Stuffing.
 */

type Audience = {
  iconPath: string;
  title: string;
  subtitle: string;
  keywords: string[];
  pains: string[];
  cta: string;
};

const audiences: Audience[] = [
  {
    iconPath: "M3 21l1.5-4.5M20 21l-1.5-4.5M6 17h12l-1-6H7l-1 6zM9 11V7a3 3 0 016 0v4",
    title: "Unterhaltsreinigung",
    subtitle: "Für Büro-, Praxis- und Verwaltungsobjekte mit täglichen Reinigungstouren.",
    keywords: [
      "Software Unterhaltsreinigung",
      "Reinigungsmanagement Software",
      "NFC Objektnachweis",
      "Revierreinigung App",
      "Tourenplanung Reinigung",
      "Reinigungsplan digital",
      "Stundenzettel Reinigung",
      "Software Reinigungsfirma",
    ],
    pains: [
      "Unvollständige Stundenzettel",
      "Leistungsnachweise im WhatsApp-Chaos",
    ],
    cta: "Für Unterhaltsreinigung",
  },
  {
    iconPath: "M3 12h18M3 6h18M3 18h18",
    title: "Glas- & Fassadenreinigung",
    subtitle: "Für Glas-, Fenster- und Fassadenreiniger mit Höhen- und Spezialeinsätzen.",
    keywords: [
      "Software Glasreinigung",
      "Fensterreinigung App",
      "Fassadenreinigung Software",
      "Höhenreinigung Doku",
      "Aufmaß Glasflächen",
      "Auftragsverwaltung Reinigung",
    ],
    pains: [
      "Aufmaß und Abrechnung händisch",
      "Sicherheits- und Einsatznachweise unvollständig",
    ],
    cta: "Für Glasreinigung",
  },
  {
    iconPath: "M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01",
    title: "Industrie- & Produktionsreinigung",
    subtitle: "Für Produktionsreinigung, Maschinenreinigung und Werksreinigung.",
    keywords: [
      "Industriereinigung Software",
      "Produktionsreinigung digital",
      "Maschinenreinigung Doku",
      "Werksreinigung App",
      "Schichtreinigung Software",
    ],
    pains: [
      "Dokumentationspflicht gegenüber Auftraggebern",
      "Revisionssichere Nachweise für Audits",
    ],
    cta: "Für Industriereinigung",
  },
  {
    iconPath: "M12 4v16M4 12h16M8 8h8v8H8z",
    title: "Klinik- & Hygienereinigung",
    subtitle: "Für Krankenhäuser, Praxen, Pflegeheime und Reinräume mit höchstem Hygienelevel.",
    keywords: [
      "Software Klinikreinigung",
      "Hygienereinigung Doku",
      "Desinfektion Dokumentation",
      "OP-Reinigung Software",
      "Pflegeheim Reinigung App",
      "Praxisreinigung Software",
    ],
    pains: [
      "Hygienenachweise auf Papier",
      "Audit-Vorbereitung kostet Tage",
    ],
    cta: "Für Klinikreinigung",
  },
  {
    iconPath: "M3 21V10h18v11M3 10V7a2 2 0 012-2h14a2 2 0 012 2v3M7 14h10",
    title: "Hotel-Housekeeping",
    subtitle: "Für Reinigungsfirmen mit Hotel-, Ferienanlagen- und Apartment-Aufträgen.",
    keywords: [
      "Housekeeping Software",
      "Hotelreinigung App",
      "Zimmerreinigung digital",
      "Ferienwohnung Reinigung Software",
      "Reinigungsabrechnung Hotel",
    ],
    pains: [
      "Zimmerstatus telefonisch durchgesagt",
      "Reklamationen ohne Foto-Nachweis",
    ],
    cta: "Für Housekeeping",
  },
  {
    iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    title: "Sonder- & Baureinigung",
    subtitle: "Für Bau-, Grund-, Brand- und Wasserschadensanierung sowie Spezialreinigung.",
    keywords: [
      "Baureinigung Software",
      "Grundreinigung App",
      "Sonderreinigung digital",
      "Brandschadensanierung Software",
      "Wasserschadensanierung Doku",
    ],
    pains: [
      "Aufträge schlecht kalkuliert – Marge weg",
      "Doku für Versicherungen fehlt",
    ],
    cta: "Für Sonderreinigung",
  },
];

export default function TargetAudiences({
  variant = "light",
}: {
  variant?: "light" | "dark" | "compact";
}) {
  if (variant === "compact") {
    return (
      <section id="zielgruppen" className="bg-white py-16 sm:py-20 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-blue-600 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              Für wen ist Taskey gemacht?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.05] tracking-tight">
              Gebaut für <span className="text-blue-600">Reinigungsbetriebe</span>.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col items-start"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-blue-700 flex items-center justify-center mb-3" aria-hidden>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={a.iconPath} />
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-900 leading-tight">{a.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Auto-rotation für Split-Layout
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % audiences.length), 4500);
    return () => clearInterval(id);
  }, []);
  const current = audiences[active];

  return (
    <section
      id="zielgruppen"
      className="bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[64px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[64px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Linke Spalte: große rotierende Karte */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-50 overflow-hidden">
                <div
                  key={active}
                  className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 origin-left"
                  style={{ animation: "audience-progress 4.5s linear forwards" }}
                />
              </div>

              <div className="p-8 md:p-10 flex flex-col h-full">
                <span className="inline-flex self-start text-[10px] font-black tracking-[0.25em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 px-3 py-1 rounded-full mb-6">
                  Reinigungsart · {String(active + 1).padStart(2, "0")}/{String(audiences.length).padStart(2, "0")}
                </span>

                <div key={active} className="flex-1 flex flex-col" style={{ animation: "audience-fade 0.6s ease-out" }}>
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-slate-200 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={current.iconPath} />
                    </svg>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-3">
                    {current.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 mb-6">{current.subtitle}</p>

                  <div className="mb-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-slate-500">
                      Typische Pain-Points
                    </p>
                    <ul className="space-y-1.5">
                      {current.pains.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                          <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                          </svg>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {current.keywords.slice(0, 6).map((k) => (
                      <span
                        key={k}
                        className="text-[10px] px-2.5 py-1 rounded-full border font-medium bg-blue-50 text-slate-600 border-slate-200"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots für Mobile */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              {audiences.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-blue-600" : "w-1.5 bg-blue-200/70"
                  }`}
                  aria-label={`Reinigungsart ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Rechte Spalte: Text + klickbare Bullet-Liste */}
          <div className="order-1 lg:order-2">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-4">
              Für wen ist Taskey gemacht?
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 text-slate-900">
              Gebaut für
              <br />
              <span className="text-slate-500">Reinigungsfirmen.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              Keine generische Business-Software. Taskey ist 100 % auf den Alltag von
              Reinigungsbetrieben im DACH-Raum zugeschnitten.
            </p>

            <ul className="space-y-2 mb-10">
              {audiences.map((a, i) => (
                <li key={a.title}>
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
                        i === active ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" : "bg-blue-200/60"
                      }`}
                    />
                    <span className={`text-base font-semibold ${i === active ? "text-slate-900" : "text-slate-600"}`}>
                      {a.title}
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
            </div>
          </div>
        </div>

        {/* Weitere Reinigungs-Spezialisierungen — SEO-Block, Keyword-Liste */}
        <div className="mt-20 rounded-2xl border bg-blue-50/70 border-slate-200 p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-black mb-3 text-slate-900">
            Und viele weitere Reinigungs-Spezialisierungen:
          </h3>
          <p className="text-sm leading-relaxed text-slate-600">
            Taskey wird auch eingesetzt von: Treppenhausreinigern, Teppich- und
            Polsterreinigern, Solarmodul-Reinigern, Fahrzeugreinigern,
            Containerreinigung, Tank- und Behälterreinigung, Reinigern für
            Lebensmittelproduktion, Reinräume und Pharma, Krankenhaus-Servicefirmen,
            Pflegeheim-Reinigung, Schul- und Kita-Reinigung, Sportstätten-Reinigung,
            Schwimmbad- und Saunareinigung, Veranstaltungs- und Event-Reinigung,
            Reinigern für Banken und öffentliche Gebäude, Apartment- und
            Ferienwohnungsreinigung, mobile Reinigungsdiensten,
            Glas- und Wintergartenreinigung, Photovoltaik-Reinigung sowie
            Spezialreinigern für Brand- und Wasserschadensanierung.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes audience-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes audience-fade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

