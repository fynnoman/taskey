import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title:
    "Lösungen nach Branche | Reinigungssoftware für jede Sparte | Taskey",
  description:
    "Taskey-Lösungen nach Branche: Unterhaltsreinigung, Glasreinigung, Industriereinigung, Klinikreinigung und Hotel-Housekeeping – passgenau für Ihren Betrieb.",
  alternates: { canonical: "https://www.taskeyapp.com/loesungen" },
  openGraph: {
    title: "Lösungen nach Branche | Reinigungssoftware für jede Sparte | Taskey",
    description:
      "Taskey-Lösungen nach Branche: Unterhalts-, Glas-, Industrie-, Klinikreinigung und Hotel-Housekeeping.",
    url: "https://www.taskeyapp.com/loesungen",
    type: "website",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Taskey Lösungen nach Branche für Reinigungsbetriebe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lösungen nach Branche | Reinigungssoftware | Taskey",
    description: "Unterhalts-, Glas-, Industrie-, Klinikreinigung und Hotel-Housekeeping.",
    images: ["/opengraph-image"],
  },
};

const branchen = [
  {
    href: "/loesungen/unterhaltsreinigung",
    title: "Unterhaltsreinigung",
    description:
      "Wiederkehrende Touren, NFC-Nachweise pro Objekt, automatische Abrechnung und Hausverwalter-Portal.",
  },
  {
    href: "/loesungen/glasreinigung",
    title: "Glasreinigung",
    description:
      "Tourenplanung, Vorher-Nachher-Fotos, Höhenklassen-Doku und Sofort-Rechnung am Objekt.",
  },
  {
    href: "/loesungen/industriereinigung",
    title: "Industriereinigung",
    description:
      "Schichtbetrieb, Sicherheitsprotokolle, Schulungs-Tracking und DATEV-Export.",
  },
  {
    href: "/loesungen/klinikreinigung",
    title: "Klinik- und Hygienereinigung",
    description:
      "Lückenlose Dokumentation, RKI-konforme Protokolle, Schulungsstand und Audit-fähige Berichte.",
  },
  {
    href: "/loesungen/hotel-housekeeping",
    title: "Hotel Housekeeping",
    description:
      "Zimmer-Touren in Echtzeit, Live-Status für die Rezeption, Wäsche- und Material-Logs.",
  },
];

export default function LoesungenPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 overflow-hidden">
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", url: "https://www.taskeyapp.com" },
          { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen" },
        ]}
      />

      <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-cyan-500/12 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[80px] pointer-events-none" />

      <section className="relative pt-32 md:pt-40 pb-14 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-slate-200 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase">
              Lösungen nach Branche
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.95] tracking-tight mb-6">
            Reinigungssoftware{" "}
            <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              für jede Sparte.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Taskey ist eine All-in-One-Plattform – die Spezifika Ihrer Branche bilden wir
            modular ab. Wählen Sie unten Ihre Hauptbranche, um zu sehen, wie Taskey konkret
            für Sie aussieht.
          </p>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-5">
          {branchen.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="group rounded-3xl bg-blue-50/70 border border-slate-200 hover:border-cyan-400 p-7 md:p-9 transition-colors"
            >
              <h2 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-blue-700 transition-colors">
                {b.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-5">
                {b.description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700">
                Branche entdecken
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-white via-blue-50 to-white border border-slate-200 p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-[56px] pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3">
                  Ihre Branche fehlt?
                </h2>
                <p className="text-slate-600 text-base md:text-lg">
                  Sprechen Sie uns an – Taskey passt sich an, nicht umgekehrt.
                </p>
              </div>
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-full hover:bg-blue-500 transition-colors whitespace-nowrap"
              >
                Kontakt aufnehmen
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase mb-3">
              Funktionen im Detail
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              Die Software für Gebäudereinigung – funktionsweise pro Modul
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/software-gebaeudereinigung", label: "Software für Gebäudereinigung", desc: "Der Überblick: alle Module der Branchensoftware in einem System." },
              { href: "/zeiterfassung-gebaeudereinigung", label: "Zeiterfassung Gebäudereinigung", desc: "Mindestlohn-konform per NFC, GPS und Offline-Sync." },
              { href: "/nfc-zeiterfassung", label: "NFC-Zeiterfassung", desc: "Wie NFC-Tags Stempelzeiten manipulationssicher dokumentieren." },
              { href: "/einsatzplanung-reinigung", label: "Einsatzplanung Reinigung", desc: "Touren, Kolonnen, Vertretungen per Drag-and-drop." },
              { href: "/leistungsnachweis-gebaeudereinigung", label: "Leistungsnachweis Gebäudereinigung", desc: "Automatischer Nachweis pro Objekt für Auftraggeber." },
              { href: "/software-kleine-reinigungsfirma", label: "Software für kleine Reinigungsfirmen", desc: "Speziell für Betriebe mit 1–15 Mitarbeitenden." },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 p-6 transition-colors"
              >
                <h3 className="text-base md:text-lg font-black mb-2 group-hover:text-blue-700 transition-colors">
                  {l.label}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{l.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 mb-6">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase mb-3">
              Marktvergleich
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              Taskey vs. andere Branchensoftware
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/vergleich/software-gebaeudereinigung", label: "Anbietervergleich 2026" },
              { href: "/vergleich/zvoove-alternative", label: "Taskey vs. zvoove" },
              { href: "/vergleich/blink-alternative", label: "Taskey vs. Blink" },
              { href: "/vergleich/mendato-alternative", label: "Taskey vs. Mendato" },
              { href: "/vergleich/fortytools-alternative", label: "Taskey vs. fortytools" },
              { href: "/vergleich/plan-d-alternative", label: "Taskey vs. Plan-D" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 p-5 transition-colors"
              >
                <span className="text-base font-bold group-hover:text-blue-700 transition-colors">
                  {l.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
