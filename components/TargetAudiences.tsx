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
  href: string;
  cta: string;
};

const audiences: Audience[] = [
  {
    iconPath: "M3 21l1.5-4.5M20 21l-1.5-4.5M6 17h12l-1-6H7l-1 6zM9 11V7a3 3 0 016 0v4",
    title: "Gebäudereinigung",
    subtitle: "Software für Gebäudereiniger, Unterhaltsreinigung und Facility Cleaner.",
    keywords: [
      "Software Gebäudereinigung",
      "Reinigungsmanagement Software",
      "NFC Objektnachweis",
      "Qualitätskontrolle Reinigung",
      "Revierreinigung App",
      "Glasreinigung Software",
      "Unterhaltsreinigung digital",
      "Software Reinigungsfirma",
    ],
    pains: [
      "Unvollständige Stundenzettel",
      "Leistungsnachweise im WhatsApp-Chaos",
    ],
    cta: "Für Gebäudereiniger",
  },
  {
    iconPath: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
    title: "Handwerk & Bau",
    subtitle: "Für Elektriker, SHK, Maler, Dachdecker, Tischler, Bauunternehmen.",
    keywords: [
      "Handwerkersoftware",
      "Software Handwerksbetrieb",
      "Elektriker Software",
      "SHK Software",
      "Sanitär Software",
      "Heizungsbauer Software",
      "Maler Software",
      "Dachdecker Software",
      "Trockenbau Software",
      "Tischlerei Software",
      "Bauunternehmen Software",
      "Monteur Zeiterfassung",
    ],
    pains: [
      "Angebote, die zu spät rausgehen",
      "Nachkalkulation per Bauchgefühl",
    ],
    cta: "Für Handwerksbetriebe",
  },
  {
    iconPath: "M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01",
    title: "Facility Management",
    subtitle: "Für Hausmeisterdienste, technische Dienstleister, Objektbetreuer.",
    keywords: [
      "Facility Management Software",
      "Hausmeisterservice Software",
      "Software Hausmeister",
      "Objektbetreuung digital",
      "Technischer Dienst Software",
      "Multi-Site Management",
    ],
    pains: [
      "Dutzende Objekte, kein Live-Überblick",
      "Nachweise, die ständig nachgefordert werden",
    ],
    cta: "Für Facility Services",
  },
  {
    iconPath: "M12 2v20M5 10c3 0 5-2 7-8 2 6 4 8 7 8M5 16c3 0 5-2 7-4 2 2 4 4 7 4",
    title: "Garten- & Landschaftsbau",
    subtitle: "Für GaLaBau, Gartenbau, Baumpflege und Winterdienst.",
    keywords: [
      "GaLaBau Software",
      "Software Gartenbau",
      "Landschaftspflege Software",
      "Winterdienst Software",
      "Baumpflege App",
      "Grünpflege Management",
    ],
    pains: [
      "Kolonnen auf mehreren Baustellen, kein Status",
      "Einsatzzeiten, die keiner sauber mitschreibt",
    ],
    cta: "Für GaLaBau",
  },
  {
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Sicherheitsdienste",
    subtitle: "Für Werkschutz, Objektschutz und Streifendienst mit NFC-Kontrolle.",
    keywords: [
      "Software Sicherheitsdienst",
      "Wächterkontrolle NFC",
      "Revierkontrolle digital",
      "Objektschutz Software",
      "Werkschutz App",
    ],
    pains: [
      "Kontrollpunkte manuell protokolliert",
      "Keine revisionssichere Nachweiskette",
    ],
    cta: "Für Sicherheitsdienste",
  },
  {
    iconPath: "M3 21h18M5 21V11l7-5 7 5v10M9 21v-6h6v6",
    title: "Industrie- & Spezialreinigung",
    subtitle: "Für Industrie-, Produktions-, Baureinigung und Desinfektion.",
    keywords: [
      "Industriereinigung Software",
      "Baureinigung Software",
      "Fensterreinigung App",
      "Desinfektion Dokumentation",
      "Produktionsreinigung digital",
    ],
    pains: [
      "Hohe Dokumentationspflicht gegenüber Auftraggebern",
      "Revisionssichere Nachweise für Audits",
    ],
    cta: "Für Industriereinigung",
  },
];

export default function TargetAudiences({
  variant = "light",
}: {
  variant?: "light" | "dark" | "compact";
}) {
  if (variant === "compact") {
    return (
      <section id="zielgruppen" className="bg-white py-16 sm:py-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-blue-600 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              Für wen ist Taskey gemacht?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.05] tracking-tight">
              Gebaut für <span className="text-blue-600">Ihren Betrieb</span>.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {audiences.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="group bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-2xl p-4 sm:p-5 transition-all flex flex-col items-start"
              >
                <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 group-hover:border-blue-300 text-blue-700 flex items-center justify-center mb-3" aria-hidden>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={a.iconPath} />
                  </svg>
                </div>
                <span className="text-sm font-bold text-gray-900 leading-tight">{a.title}</span>
              </Link>
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
      className="bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Linke Spalte: große rotierende Karte */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] bg-gradient-to-br from-[#1a2942] to-[#0d1a2e] border border-white/5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
                <div
                  key={active}
                  className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 origin-left"
                  style={{ animation: "audience-progress 4.5s linear forwards" }}
                />
              </div>

              <div className="p-8 md:p-10 flex flex-col h-full">
                <span className="inline-flex self-start text-[10px] font-black tracking-[0.25em] uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 rounded-full mb-6">
                  Branche · {String(active + 1).padStart(2, "0")}/{String(audiences.length).padStart(2, "0")}
                </span>

                <div key={active} className="flex-1 flex flex-col" style={{ animation: "audience-fade 0.6s ease-out" }}>
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={current.iconPath} />
                    </svg>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
                    {current.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/50 mb-6">{current.subtitle}</p>

                  <div className="mb-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-white/40">
                      Typische Pain-Points
                    </p>
                    <ul className="space-y-1.5">
                      {current.pains.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-white/70">
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
                        className="text-[10px] px-2.5 py-1 rounded-full border font-medium bg-white/5 text-white/60 border-white/10"
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
                    i === active ? "w-6 bg-white" : "w-1.5 bg-white/30"
                  }`}
                  aria-label={`Branche ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Rechte Spalte: Text + klickbare Bullet-Liste */}
          <div className="order-1 lg:order-2">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-cyan-300 mb-4">
              Für wen ist Taskey gemacht?
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 text-white">
              Gebaut für
              <br />
              <span className="text-white/50">Ihren Betrieb.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-xl">
              Keine generische Business-Software. Taskey ist für operative Dienstleister im DACH-Raum gebaut.
            </p>

            <ul className="space-y-2 mb-10">
              {audiences.map((a, i) => (
                <li key={a.title}>
                  <button
                    onClick={() => setActive(i)}
                    className={`group w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                      i === active
                        ? "bg-white/10 border-white/20"
                        : "bg-transparent border-transparent hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-2 h-2 rounded-full transition-all ${
                        i === active ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" : "bg-white/20"
                      }`}
                    />
                    <span className={`text-base font-semibold ${i === active ? "text-white" : "text-white/60"}`}>
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
                className="px-8 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-white/90 transition-colors text-base text-center"
              >
                Kostenlos starten
              </Link>
              <Link
                href={current.href}
                className="px-8 py-3.5 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-base text-center"
              >
                {current.cta}
              </Link>
            </div>
          </div>
        </div>

        {/* Weitere Gewerke — SEO-Block, Keyword-Liste */}
        <div className="mt-20 rounded-2xl border bg-white/[0.03] border-white/10 p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-black mb-3 text-white">
            Und viele weitere Gewerke &amp; Branchen:
          </h3>
          <p className="text-sm leading-relaxed text-white/60">
            Taskey wird auch eingesetzt von: Schreinereien, Zimmereien, Fliesenlegern,
            Bodenlegern, Stuckateuren, Gerüstbauern, Klempnerei-Betrieben,
            Kälte-/Klimatechnikern, Lüftungsbauern, Aufzugsservice, Umzugsunternehmen,
            Entrümpelungsdiensten, Schädlingsbekämpfung, Schlüsseldiensten,
            Reinigungsdiensten im Gesundheitswesen, Spezialreinigern für Brand- und
            Wasserschadensanierung, Kfz-Werkstätten mit mobilem Service,
            Gartenpflege-Teams, Baumpflegern, Fassadenreinigern, Solarreinigern,
            Treppenhausreinigern, Krankenhaus-Servicefirmen und
            Hotel-Housekeeping-Diensten.
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

