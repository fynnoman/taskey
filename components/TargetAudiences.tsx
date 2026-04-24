"use client";

import Link from "next/link";

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
    href: "/gebaeudereinigung",
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
    href: "/handwerk",
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
    href: "/handwerk",
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
    href: "/handwerk",
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
    href: "/handwerk",
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
    href: "/handwerk",
    cta: "Für Industriereinigung",
  },
];

export default function TargetAudiences({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  const bg = isDark
    ? "bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white"
    : "bg-gradient-to-br from-white via-gray-50 to-blue-50/30 text-gray-900";
  const cardBg = isDark
    ? "bg-white/5 border-white/10 hover:border-blue-400/40"
    : "bg-white border-gray-200 hover:border-blue-700/30 shadow-sm hover:shadow-lg";
  const muted = isDark ? "text-gray-300" : "text-gray-600";
  const chipBg = isDark
    ? "bg-blue-500/10 text-blue-300 border-blue-400/20"
    : "bg-blue-50 text-blue-800 border-blue-200";

  return (
    <section
      id="zielgruppen"
      className={`${bg} py-20 sm:py-28 relative overflow-hidden`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
              isDark
                ? "bg-white/5 border-white/20 text-blue-300"
                : "bg-blue-50 border-blue-200 text-blue-800"
            }`}
          >
            <span className="text-xs font-black tracking-[0.25em] uppercase">
              Für wen ist Taskey gemacht?
            </span>
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center leading-[1.05] mb-6 tracking-tight">
          Gebaut für <span className="text-blue-500">Ihren Betrieb</span>.
        </h2>
        <p
          className={`text-lg sm:text-xl text-center max-w-2xl mx-auto mb-16 leading-relaxed ${muted}`}
        >
          Keine generische Business-Software. Taskey ist für operative Dienstleister im DACH-Raum gebaut.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {audiences.map((a) => (
            <article
              key={a.title}
              className={`${cardBg} border rounded-2xl p-6 sm:p-7 transition-all flex flex-col`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${isDark ? "bg-blue-500/10 text-blue-300" : "bg-blue-50 text-blue-700"}`} aria-hidden>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={a.iconPath} />
                </svg>
              </div>
              <h3
                className={`text-lg sm:text-xl font-black mb-2 leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {a.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-4 ${muted}`}>
                {a.subtitle}
              </p>

              <div className="mb-4">
                <p
                  className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Typische Pain-Points
                </p>
                <ul className={`text-xs space-y-1 ${muted}`}>
                  {a.pains.map((p) => (
                    <li key={p} className="flex gap-1.5">
                      <span className="text-red-400">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-5">
                <p
                  className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Relevante Suchbegriffe
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {a.keywords.map((k) => (
                    <span
                      key={k}
                      className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${chipBg}`}
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={a.href}
                className={`mt-auto inline-flex items-center gap-1.5 text-sm font-bold ${
                  isDark ? "text-cyan-300 hover:text-cyan-200" : "text-blue-700 hover:text-blue-900"
                }`}
              >
                {a.cta}
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Weitere Gewerke — reine Keyword-Liste für SEO + Klarheit */}
        <div
          className={`rounded-2xl border p-6 sm:p-8 ${
            isDark
              ? "bg-white/5 border-white/10"
              : "bg-white border-gray-200 shadow-sm"
          }`}
        >
          <h3
            className={`text-base sm:text-lg font-black mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Und viele weitere Gewerke &amp; Branchen:
          </h3>
          <p className={`text-sm leading-relaxed ${muted}`}>
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
    </section>
  );
}
