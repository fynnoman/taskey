import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const path = "/vergleich/software-gebaeudereinigung";
const URL = `https://www.taskeyapp.com${path}`;

export const metadata: Metadata = {
  title: "Software für Gebäudereinigung Vergleich 2026 – die 8 wichtigsten Anbieter",
  description:
    "Vergleich der wichtigsten Software für Gebäudereinigung 2026: Taskey, zvoove, Blink, HERO, Mendato, fortytools, Plan-D, profacilo. Funktionen, Preise, Stärken, Schwächen.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Software für Gebäudereinigung Vergleich 2026 | Taskey",
    description:
      "8 Anbieter im Direktvergleich: Funktionen, Preise, Schwächen. Welche Software für Gebäudereinigung passt zu Ihrem Betrieb?",
    url: URL,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [{ url: "/feature-zeiterfassung.webp", width: 1200, height: 630, alt: "Software für Gebäudereinigung Vergleich 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software für Gebäudereinigung Vergleich 2026",
    description: "8 Anbieter im Direktvergleich: Funktionen, Preise, Schwächen.",
    images: ["/feature-zeiterfassung.webp"],
  },
};

type Vendor = {
  name: string;
  url: string;
  shortDescription: string;
  starkeFuer: string;
  schwaechen: string;
  preisAbMonat: string;
  testZeitraum: string;
  features: string[];
  internalLink?: string;
};

const vendors: Vendor[] = [
  {
    name: "Taskey",
    url: "https://www.taskeyapp.com",
    shortDescription:
      "All-in-One-Software, die Einsatzplanung, NFC-Objektnachweis, Zeiterfassung, Angebote, Rechnungen und Live-Margen in einer Plattform bündelt. Made in Germany, DSGVO.",
    starkeFuer:
      "Reinigungsbetriebe, die Tool-Chaos auflösen wollen – vom 1-Mann-Betrieb bis Enterprise. Besonders stark beim NFC-Objektnachweis und Live-Margen pro Objekt.",
    schwaechen:
      "Jüngerer Anbieter (gegründet 2023), kleinere Brand-Awareness als zvoove oder Blink.",
    preisAbMonat: "ab 119 € / Monat (Beginner) + 4,40 € pro aktivem Objekt",
    testZeitraum: "3 Monate kostenlos, keine Kreditkarte",
    features: [
      "NFC-Objektnachweis",
      "Einsatzplanung (Drag-and-drop)",
      "Mobile Zeiterfassung (offline, GPS)",
      "Angebote & Rechnungen",
      "DATEV-Export",
      "Live-Margen pro Objekt",
      "Auftraggeber-Portal (Taskey Share)",
      "Qualitätskontrolle & Checklisten",
      "DSGVO, Hosting in Deutschland",
    ],
    internalLink: "/software-gebaeudereinigung",
  },
  {
    name: "zvoove (vormals Landwehr)",
    url: "https://www.zvoove.com",
    shortDescription:
      "Größter etablierter Anbieter im DACH-Raum für Branchensoftware Gebäudereinigung. Modular aufgebaut, sehr feature-reich.",
    starkeFuer:
      "Große Gebäudereinigungsbetriebe ab ~50 Mitarbeitenden mit komplexen Strukturen. Hat eigene Kalkulations- und Lohnmodule.",
    schwaechen:
      "Hoher Implementierungsaufwand, lange Vertragslaufzeiten, modulare Preise oft intransparent. UX teilweise altmodisch.",
    preisAbMonat: "auf Anfrage, in der Regel mehrere hundert € pro Monat",
    testZeitraum: "kostenlose Demo, kein Self-Service-Trial",
    features: [
      "Einsatzplanung",
      "Zeiterfassung",
      "Lohnabrechnung integriert",
      "Kalkulation pro Objekt",
      "Rechnungswesen",
      "DATEV-Export",
      "Auftragsverwaltung",
    ],
    internalLink: "/vergleich/zvoove-alternative",
  },
  {
    name: "Blink",
    url: "https://www.blink.de",
    shortDescription:
      "Smartphone-fokussierte App für Reinigungsteams. Schwerpunkt auf Kommunikation, Schichtplan und mobiler Zeiterfassung.",
    starkeFuer:
      "Betriebe, die vor allem die Mitarbeiter-Kommunikation digitalisieren wollen und keine Backoffice-Software brauchen.",
    schwaechen:
      "Kein klassisches ERP-Modul: Angebote, Rechnungen, Buchhaltung muss extern laufen. Limitierte Margen-Auswertung.",
    preisAbMonat: "ab ca. 4 € pro Mitarbeitendem / Monat",
    testZeitraum: "kostenlose Demo",
    features: [
      "Schichtplan",
      "Mitarbeiter-Chat",
      "Mobile Zeiterfassung",
      "Aufgabenverwaltung",
      "Stundenzettel-Export",
    ],
    internalLink: "/vergleich/blink-alternative",
  },
  {
    name: "HERO Software",
    url: "https://hero-software.de",
    shortDescription:
      "Handwerkersoftware mit eigenem Branchenmodul für Gebäudereiniger. Cloud-basiert mit App für Mitarbeitende.",
    starkeFuer:
      "Reinigungsbetriebe, die eine breit aufgestellte Handwerkersoftware suchen und auch andere Gewerke abdecken möchten.",
    schwaechen:
      "Nicht spezialisiert auf Gebäudereinigung – Objekt- und NFC-Workflows weniger ausgeprägt. Kein nativer Live-Margen-Report pro Objekt.",
    preisAbMonat: "ab ca. 79 € pro Monat (Single) bis ~199 € (Team)",
    testZeitraum: "14 Tage kostenlos",
    features: [
      "Auftragsverwaltung",
      "Kalkulation",
      "Rechnungen",
      "Zeiterfassung",
      "Mehrsprachige Reinigungspläne",
      "Mobile App",
    ],
  },
  {
    name: "Mendato",
    url: "https://www.mendato.de",
    shortDescription:
      "Cloud-Software für Gebäudereinigung mit Fokus auf Tourenplanung, Stammdaten und Stundenerfassung.",
    starkeFuer:
      "Mittelgroße Reinigungsbetriebe, die eine etablierte Cloud-Lösung mit klassischem Funktionsumfang suchen.",
    schwaechen:
      "Kein NFC-Objektnachweis im Standard. Modul-Preise auf Anfrage, lange Demo-Pfade.",
    preisAbMonat: "auf Anfrage",
    testZeitraum: "kostenlose Demo",
    features: [
      "Tourenplanung",
      "Stammdaten",
      "Stundenerfassung",
      "Auftragsverwaltung",
      "Rechnungen",
    ],
    internalLink: "/vergleich/mendato-alternative",
  },
  {
    name: "fortytools",
    url: "https://www.fortytools.com",
    shortDescription:
      "Vergleichsweise schlanke Cloud-Software für Reinigungs- und Servicebetriebe, fokussiert auf Disposition und Stundenzettel.",
    starkeFuer:
      "Kleine und mittlere Reinigungsbetriebe, die schnell einsteigen wollen und keine komplexe ERP-Logik brauchen.",
    schwaechen:
      "Weniger Tiefe in Margen-Analysen und Objektnachweis. Kein integriertes Mahnwesen im Beginner-Plan.",
    preisAbMonat: "ab ca. 39 € / Monat",
    testZeitraum: "14 Tage kostenlos",
    features: [
      "Auftragsdisposition",
      "Stundenzettel",
      "Rechnungen",
      "Kundenstamm",
      "Mobile App",
    ],
    internalLink: "/vergleich/fortytools-alternative",
  },
  {
    name: "Plan-D",
    url: "https://www.plan-d.eu",
    shortDescription:
      "Branchensoftware mit Schwerpunkt auf Einsatzplanung und Personaldisposition für Gebäudereinigung.",
    starkeFuer:
      "Betriebe, deren primäres Problem die wechselnde Schichtplanung ist – mit komplexen Kolonnen- und Vertretungs-Szenarien.",
    schwaechen:
      "Rechnungsstellung und CRM eher rudimentär. Keine native Live-Margen-Sicht. UX teilweise erklärungsbedürftig.",
    preisAbMonat: "auf Anfrage",
    testZeitraum: "kostenlose Demo",
    features: [
      "Personaleinsatzplanung",
      "Kolonnenverwaltung",
      "Schichtmodelle",
      "Stundenzettel",
      "Auftragsverwaltung",
    ],
    internalLink: "/vergleich/plan-d-alternative",
  },
  {
    name: "profacilo",
    url: "https://profacilo.de",
    shortDescription:
      "Cloud-Software für Gebäudereiniger und kleinere Facility-Management-Betriebe. Schlanker Funktionsumfang.",
    starkeFuer:
      "Betriebe, die eine günstige Einstiegslösung suchen, ohne ERP-Komplexität.",
    schwaechen:
      "Weniger Tiefe in Disposition und Margen. Kein nativer NFC-Objektnachweis. Schmaleres Reporting.",
    preisAbMonat: "ab ca. 29 € / Monat",
    testZeitraum: "kostenlose Demo / Trial",
    features: [
      "Objektverwaltung",
      "Stundenzettel",
      "Rechnungen",
      "Mobile App",
      "Reinigungspläne",
    ],
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Software für Gebäudereinigung Vergleich 2026 – die 8 wichtigsten Anbieter",
  description:
    "Direktvergleich der 8 wichtigsten Software für Gebäudereinigung 2026 mit Funktionen, Preisen, Stärken und Schwächen.",
  author: {
    "@type": "Organization",
    name: "Taskey",
    url: "https://www.taskeyapp.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Schulz & Stosse GbR",
    url: "https://www.taskeyapp.com",
  },
  datePublished: "2026-06-04",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "de-DE",
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  image: "https://www.taskeyapp.com/opengraph-image",
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Software für Gebäudereinigung – Anbietervergleich 2026",
  numberOfItems: vendors.length,
  itemListElement: vendors.map((v, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: v.name,
    url: v.url,
  })),
};

const faqs = [
  {
    q: "Welche Software für Gebäudereinigung ist die beste 2026?",
    a: "„Die beste“ hängt vom Betrieb ab. Für All-in-One-Lösungen mit NFC-Objektnachweis und Live-Margen ist Taskey die Empfehlung. Für klassische Enterprise-Strukturen ab 50+ Mitarbeitenden ist zvoove etabliert. Für reine Team-Kommunikation eignet sich Blink. Wir vergleichen 8 Anbieter im Detail unten.",
  },
  {
    q: "Was kostet Software für Gebäudereinigung?",
    a: "Die monatlichen Preise reichen von ~29 € (profacilo, Einstieg) über 119 € (Taskey Beginner) bis zu mehreren hundert € pro Monat (zvoove). Viele Anbieter zeigen Preise erst auf Anfrage – Taskey, HERO und fortytools sind transparent.",
  },
  {
    q: "Gibt es Software für Gebäudereinigung mit kostenlosem Test?",
    a: "Ja. Taskey bietet 3 Monate kostenlos ohne Kreditkarte. HERO und fortytools bieten 14 Tage. Die meisten anderen Anbieter (zvoove, Blink, Mendato, Plan-D) arbeiten mit Demo-Terminen statt Self-Service-Trials.",
  },
  {
    q: "Welche Software hat NFC-Objektnachweis?",
    a: "NFC-Objektnachweis (manipulationssicherer Anwesenheitsnachweis via NFC-Tag am Objekt) ist nicht bei allen Anbietern Standard. Taskey hat NFC nativ integriert. Bei den meisten anderen Anbietern ist NFC entweder Add-on oder gar nicht verfügbar.",
  },
  {
    q: "Welche Software für Gebäudereinigung passt zu kleinen Betrieben?",
    a: "Für 1–15 Mitarbeitende sind Taskey (ab 119 €), fortytools (ab 39 €) und profacilo (ab 29 €) gut geeignet. zvoove und Mendato sind eher für größere Strukturen ausgelegt.",
  },
  {
    q: "Welche Software ist DSGVO-konform und in Deutschland gehostet?",
    a: "Taskey, zvoove, HERO, Mendato, fortytools, Plan-D und profacilo werben mit deutschem Hosting und DSGVO-Konformität. Bei jeder Auswahl sollten Sie ein aktuelles AVV-Dokument anfordern.",
  },
  {
    q: "Welche Software lässt sich mit DATEV verbinden?",
    a: "DATEV-Export bieten Taskey, zvoove, HERO, Mendato und Plan-D. Bei Blink und fortytools ist DATEV-Anbindung tarif- oder integrationsabhängig.",
  },
  {
    q: "Wie schnell ist die Migration aus Excel oder einer Alt-Software?",
    a: "Taskey-Migration läuft typischerweise in 48 Stunden (Done-for-You). HERO und fortytools bieten Self-Service-Imports per CSV. zvoove und Plan-D haben strukturierte Onboarding-Programme, die in der Regel 4–8 Wochen dauern.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", url: "https://www.taskeyapp.com" },
          { name: "Vergleich", url: "https://www.taskeyapp.com/vergleich/zvoove-alternative" },
          { name: "Software für Gebäudereinigung Vergleich", url: URL },
        ]}
      />

      <main className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-cyan-500/12 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[80px] pointer-events-none" />

        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8 text-xs sm:text-sm text-slate-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-blue-700 transition-colors">Home</Link></li>
                <li className="text-slate-400">/</li>
                <li><Link href="/software-gebaeudereinigung" className="hover:text-blue-700 transition-colors">Software für Gebäudereinigung</Link></li>
                <li className="text-slate-400">/</li>
                <li className="text-slate-600">Vergleich 2026</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-slate-200 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase">
                Anbietervergleich · Juni 2026
              </span>
            </div>

            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-black leading-[0.95] tracking-tight mb-6">
              Software für Gebäudereinigung Vergleich 2026
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-6">
              Die 8 wichtigsten Anbieter im Direktvergleich: Funktionen, Preise, Stärken, Schwächen.
              Welche Branchensoftware für Gebäudereinigung passt zu Ihrem Betrieb – vom 1-Mann-Betrieb
              bis zur Mehrobjekt-Reinigungsfirma?
            </p>
            <p className="text-sm text-slate-500 mb-8">
              <strong>Zuletzt aktualisiert:</strong> Juni 2026 · 8 Anbieter geprüft · Preise und
              Features zum Stichtag der Veröffentlichung
            </p>
          </div>
        </section>

        {/* Vergleichstabelle */}
        <section className="relative pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
              Software für Gebäudereinigung im Direktvergleich
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-left">
                    <th className="px-4 py-3 font-black">Anbieter</th>
                    <th className="px-4 py-3 font-black">Preis ab</th>
                    <th className="px-4 py-3 font-black">Kostenloser Test</th>
                    <th className="px-4 py-3 font-black">NFC-Nachweis</th>
                    <th className="px-4 py-3 font-black">DATEV</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((v) => (
                    <tr key={v.name} className="border-t border-slate-200">
                      <td className="px-4 py-3 font-bold">{v.name}</td>
                      <td className="px-4 py-3 text-slate-600">{v.preisAbMonat}</td>
                      <td className="px-4 py-3 text-slate-600">{v.testZeitraum}</td>
                      <td className="px-4 py-3 text-slate-600">
                        {v.features.some((f) => f.includes("NFC")) ? "✓ nativ" : "kein nativer NFC"}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {v.features.some((f) => f.includes("DATEV")) ? "✓" : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Angaben basieren auf öffentlich verfügbaren Anbieter-Informationen, Juni 2026. Bei Preisen „auf Anfrage" wurden keine Daten ergänzt.
            </p>
          </div>
        </section>

        {/* Vendor-Karten */}
        <section className="relative pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
              Die 8 Anbieter im Detail
            </h2>
            {vendors.map((v, i) => (
              <article
                key={v.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs font-black tracking-[0.2em] text-blue-700 uppercase mb-1">
                      #{i + 1}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-black">{v.name}</h3>
                  </div>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="hidden sm:inline-flex items-center justify-center gap-1 px-4 py-2 rounded-full border border-slate-300 text-slate-700 text-xs font-bold hover:border-blue-400 transition-colors whitespace-nowrap"
                  >
                    Anbieter-Website ↗
                  </a>
                </div>

                <p className="text-slate-700 leading-relaxed mb-5">{v.shortDescription}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
                    <p className="text-[10px] font-black tracking-[0.2em] text-emerald-700 uppercase mb-2">
                      Stark für
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">{v.starkeFuer}</p>
                  </div>
                  <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
                    <p className="text-[10px] font-black tracking-[0.2em] text-amber-700 uppercase mb-2">
                      Schwächen
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">{v.schwaechen}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="text-sm">
                    <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-1">Preis</p>
                    <p className="font-bold">{v.preisAbMonat}</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-1">Kostenloser Test</p>
                    <p className="font-bold">{v.testZeitraum}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-2">Wichtigste Features</p>
                  <div className="flex flex-wrap gap-2">
                    {v.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {v.internalLink && (
                  <div className="mt-5 pt-5 border-t border-slate-100">
                    <Link
                      href={v.internalLink}
                      className="inline-flex items-center gap-1 text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      → Detailseite: {v.name === "Taskey" ? "Software für Gebäudereinigung" : `Taskey vs. ${v.name.replace(" (vormals Landwehr)", "")}`}
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Auswahl-Guide */}
        <section className="relative pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
              Welche Software für Gebäudereinigung passt zu welchem Betrieb?
            </h2>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-2">1-Mann-Betrieb bis 15 Mitarbeitende</h3>
                <p>
                  Wer gerade aus Excel und WhatsApp aussteigt, will eine Software ohne Implementierungs-Marathon. Empfehlung: <strong>Taskey</strong> (All-in-One inkl. NFC-Nachweis, 3 Monate kostenlos), <strong>fortytools</strong> (günstiger Einstieg, weniger Tiefe) oder <strong>profacilo</strong> (sehr schlank).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Mittlerer Reinigungsbetrieb (15–50 Mitarbeitende)</h3>
                <p>
                  Hier wird die Marge pro Objekt entscheidend. Empfehlung: <strong>Taskey</strong> (Live-Margen + NFC-Nachweis im Standard), <strong>HERO</strong> (breiterer Funktionsumfang, falls weitere Gewerke abgedeckt werden sollen) oder <strong>Mendato</strong> für klassische Cloud-Workflows.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Großer Reinigungsbetrieb (50+ Mitarbeitende)</h3>
                <p>
                  Komplexe Lohnmodelle, Mandantenstrukturen, mehrere Standorte. <strong>zvoove</strong> ist hier etabliert, aber teuer und implementierungsintensiv. <strong>Taskey</strong> ist im Enterprise-Tarif eine moderne Alternative mit transparenter Preisstruktur.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Schwerpunkt Schichtplanung / Personaldisposition</h3>
                <p>
                  Wenn Kolonnen-Wechsel und Vertretungen das tägliche Hauptproblem sind: <strong>Plan-D</strong> ist darauf spezialisiert. <strong>Blink</strong>, wenn primär die Team-Kommunikation digitalisiert werden soll.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative pb-20 md:pb-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
              Häufige Fragen zu Software für Gebäudereinigung
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 open:border-cyan-400 transition-colors"
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-bold text-base md:text-lg">
                    <span>{f.q}</span>
                    <span className="text-blue-700 text-2xl leading-none transition-transform group-open:rotate-45 select-none">+</span>
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed text-[15px]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative pb-24 md:pb-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-gradient-to-br from-white via-blue-50 to-white border border-slate-200 p-8 md:p-12 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-[56px] pointer-events-none" />
              <div className="relative">
                <p className="text-[10px] font-black tracking-[0.25em] text-blue-700 uppercase mb-3">
                  Selbst ausprobieren
                </p>
                <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3">
                  Taskey kostenlos testen statt nur vergleichen
                </h2>
                <p className="text-slate-600 text-base md:text-lg max-w-2xl mb-6">
                  3 Monate Vollversion, ohne Kreditkarte. Einrichtung in 48 Stunden – Done-for-You durch unser Team.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://signup.taskeyapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-full hover:bg-blue-500 transition-colors"
                  >
                    Jetzt kostenlos starten
                  </a>
                  <Link
                    href="/software-gebaeudereinigung"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-300 text-slate-700 text-base font-bold rounded-full hover:border-blue-400 transition-colors"
                  >
                    Mehr über Taskey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
