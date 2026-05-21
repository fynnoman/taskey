import type { Metadata } from "next";
import Link from "next/link";
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
    <main className="relative min-h-screen bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white overflow-hidden">
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", url: "https://www.taskeyapp.com" },
          { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen" },
        ]}
      />

      <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-cyan-500/12 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

      <section className="relative pt-32 md:pt-40 pb-14 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-cyan-300 uppercase">
              Lösungen nach Branche
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.95] tracking-tight mb-6">
            Reinigungssoftware{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
              für jede Sparte.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/65 max-w-3xl leading-relaxed">
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
              className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 p-7 md:p-9 transition-colors"
            >
              <h2 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-cyan-200 transition-colors">
                {b.title}
              </h2>
              <p className="text-white/65 leading-relaxed text-sm md:text-base mb-5">
                {b.description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-300">
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
          <div className="relative rounded-3xl bg-gradient-to-br from-[#13203a] via-[#0d1a2e] to-[#13203a] border border-white/10 p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[56px] pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3">
                  Ihre Branche fehlt?
                </h2>
                <p className="text-white/60 text-base md:text-lg">
                  Sprechen Sie uns an – Taskey passt sich an, nicht umgekehrt.
                </p>
              </div>
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 text-base font-bold rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
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
    </main>
  );
}
