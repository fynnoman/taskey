import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title:
      "Lösungen nach Branche | Reinigungssoftware für jede Sparte | Taskey",
    description:
      "Taskey-Lösungen nach Branche: Unterhaltsreinigung, Glasreinigung, Industriereinigung, Klinikreinigung und Hotel-Housekeeping – passgenau für Ihren Betrieb.",
    ogTitle:
      "Lösungen nach Branche | Reinigungssoftware für jede Sparte | Taskey",
    ogDescription:
      "Taskey-Lösungen nach Branche: Unterhalts-, Glas-, Industrie-, Klinikreinigung und Hotel-Housekeeping.",
    twitterTitle: "Lösungen nach Branche | Reinigungssoftware | Taskey",
    twitterDescription:
      "Unterhalts-, Glas-, Industrie-, Klinikreinigung und Hotel-Housekeeping.",
  },
  en: {
    title:
      "Solutions by industry | Cleaning software for every sector | Taskey",
    description:
      "Taskey solutions by industry: maintenance cleaning, window cleaning, industrial cleaning, clinic cleaning and hotel housekeeping – tailored to your business.",
    ogTitle:
      "Solutions by industry | Cleaning software for every sector | Taskey",
    ogDescription:
      "Taskey solutions by industry: maintenance, window, industrial, clinic cleaning and hotel housekeeping.",
    twitterTitle: "Solutions by industry | Cleaning software | Taskey",
    twitterDescription:
      "Maintenance, window, industrial, clinic cleaning and hotel housekeeping.",
  },
  fr: {
    title:
      "Solutions par secteur | Logiciel de nettoyage pour chaque branche | Taskey",
    description:
      "Solutions Taskey par secteur : nettoyage d’entretien, vitrerie, nettoyage industriel, nettoyage hospitalier et housekeeping hôtelier – sur mesure pour votre entreprise.",
    ogTitle:
      "Solutions par secteur | Logiciel de nettoyage pour chaque branche | Taskey",
    ogDescription:
      "Solutions Taskey par secteur : entretien, vitrerie, industriel, hospitalier et housekeeping hôtelier.",
    twitterTitle: "Solutions par secteur | Logiciel de nettoyage | Taskey",
    twitterDescription:
      "Entretien, vitrerie, nettoyage industriel, hospitalier et housekeeping hôtelier.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = pickLocale(locale);
  const meta = buildMetadata({
    copyByLocale: COPY,
    locale: l,
    path: "/loesungen",
  });
  // Preserve original alt text used by DE OpenGraph image
  const ALT: Record<typeof l, string> = {
    de: "Taskey Lösungen nach Branche für Reinigungsbetriebe",
    en: "Taskey solutions by industry for cleaning businesses",
    fr: "Solutions Taskey par secteur pour les entreprises de nettoyage",
  };
  if (meta.openGraph && Array.isArray(meta.openGraph.images)) {
    meta.openGraph.images = [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: ALT[l],
      },
    ];
  }
  return meta;
}

const CONTENT = {
  de: {
    breadcrumbHome: "Home",
    breadcrumbLoesungen: "Lösungen",
    eyebrow: "Lösungen nach Branche",
    h1Prefix: "Reinigungssoftware",
    h1Accent: "für jede Sparte.",
    lead: "Taskey ist eine All-in-One-Plattform – die Spezifika Ihrer Branche bilden wir modular ab. Wählen Sie unten Ihre Hauptbranche, um zu sehen, wie Taskey konkret für Sie aussieht.",
    branchen: [
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
    ],
    discoverBranche: "Branche entdecken",
    missingHeading: "Ihre Branche fehlt?",
    missingBody: "Sprechen Sie uns an – Taskey passt sich an, nicht umgekehrt.",
    contactCta: "Kontakt aufnehmen",
    featuresEyebrow: "Funktionen im Detail",
    featuresHeading: "Die Software für Gebäudereinigung – funktionsweise pro Modul",
    features: [
      { href: "/software-gebaeudereinigung", label: "Software für Gebäudereinigung", desc: "Der Überblick: alle Module der Branchensoftware in einem System." },
      { href: "/zeiterfassung-gebaeudereinigung", label: "Zeiterfassung Gebäudereinigung", desc: "Mindestlohn-konform per NFC, GPS und Offline-Sync." },
      { href: "/nfc-zeiterfassung", label: "NFC-Zeiterfassung", desc: "Wie NFC-Tags Stempelzeiten manipulationssicher dokumentieren." },
      { href: "/einsatzplanung-reinigung", label: "Einsatzplanung Reinigung", desc: "Touren, Kolonnen, Vertretungen per Drag-and-drop." },
      { href: "/leistungsnachweis-gebaeudereinigung", label: "Leistungsnachweis Gebäudereinigung", desc: "Automatischer Nachweis pro Objekt für Auftraggeber." },
      { href: "/software-kleine-reinigungsfirma", label: "Software für kleine Reinigungsfirmen", desc: "Speziell für Betriebe mit 1–15 Mitarbeitenden." },
    ],
    compareEyebrow: "Marktvergleich",
    compareHeading: "Taskey vs. andere Branchensoftware",
    comparisons: [
      { href: "/vergleich/software-gebaeudereinigung", label: "Anbietervergleich 2026" },
      { href: "/vergleich/zvoove-alternative", label: "Taskey vs. zvoove" },
      { href: "/vergleich/blink-alternative", label: "Taskey vs. Blink" },
      { href: "/vergleich/mendato-alternative", label: "Taskey vs. Mendato" },
      { href: "/vergleich/fortytools-alternative", label: "Taskey vs. fortytools" },
      { href: "/vergleich/plan-d-alternative", label: "Taskey vs. Plan-D" },
    ],
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbLoesungen: "Solutions",
    eyebrow: "Solutions by industry",
    h1Prefix: "Cleaning software",
    h1Accent: "for every sector.",
    lead: "Taskey is an all-in-one platform – we cover the specifics of your industry in modular building blocks. Pick your main sector below to see what Taskey looks like for you concretely.",
    branchen: [
      {
        href: "/loesungen/unterhaltsreinigung",
        title: "Maintenance cleaning",
        description:
          "Recurring tours, NFC proof per site, automated invoicing and a portal for property managers.",
      },
      {
        href: "/loesungen/glasreinigung",
        title: "Window cleaning",
        description:
          "Route planning, before/after photos, height-class documentation and instant invoicing on-site.",
      },
      {
        href: "/loesungen/industriereinigung",
        title: "Industrial cleaning",
        description:
          "Shift operations, safety protocols, training tracking and DATEV export.",
      },
      {
        href: "/loesungen/klinikreinigung",
        title: "Clinic and hygiene cleaning",
        description:
          "Gap-free documentation, RKI-compliant protocols, training status and audit-ready reports.",
      },
      {
        href: "/loesungen/hotel-housekeeping",
        title: "Hotel housekeeping",
        description:
          "Real-time room tours, live status for reception, laundry and supply logs.",
      },
    ],
    discoverBranche: "Discover this industry",
    missingHeading: "Don’t see your industry?",
    missingBody: "Get in touch – Taskey adapts to you, not the other way around.",
    contactCta: "Contact us",
    featuresEyebrow: "Features in detail",
    featuresHeading: "The software for building services – how each module works",
    features: [
      { href: "/software-gebaeudereinigung", label: "Building services software", desc: "The overview: every module of the industry software in one system." },
      { href: "/zeiterfassung-gebaeudereinigung", label: "Time tracking for cleaning", desc: "Minimum-wage compliant via NFC, GPS and offline sync." },
      { href: "/nfc-zeiterfassung", label: "NFC time tracking", desc: "How NFC tags document clock-in times in a tamper-proof way." },
      { href: "/einsatzplanung-reinigung", label: "Cleaning scheduling", desc: "Tours, crews, substitutions by drag and drop." },
      { href: "/leistungsnachweis-gebaeudereinigung", label: "Service proof for cleaning", desc: "Automatic proof per site for your clients." },
      { href: "/software-kleine-reinigungsfirma", label: "Software for small cleaning companies", desc: "Built for teams of 1–15 employees." },
    ],
    compareEyebrow: "Market comparison",
    compareHeading: "Taskey vs. other industry software",
    comparisons: [
      { href: "/vergleich/software-gebaeudereinigung", label: "Vendor comparison 2026" },
      { href: "/vergleich/zvoove-alternative", label: "Taskey vs. zvoove" },
      { href: "/vergleich/blink-alternative", label: "Taskey vs. Blink" },
      { href: "/vergleich/mendato-alternative", label: "Taskey vs. Mendato" },
      { href: "/vergleich/fortytools-alternative", label: "Taskey vs. fortytools" },
      { href: "/vergleich/plan-d-alternative", label: "Taskey vs. Plan-D" },
    ],
  },
  fr: {
    breadcrumbHome: "Accueil",
    breadcrumbLoesungen: "Solutions",
    eyebrow: "Solutions par secteur",
    h1Prefix: "Logiciel de nettoyage",
    h1Accent: "pour chaque branche.",
    lead: "Taskey est une plateforme tout-en-un – nous adressons les spécificités de votre secteur de façon modulaire. Choisissez ci-dessous votre branche principale pour voir à quoi Taskey ressemble concrètement pour vous.",
    branchen: [
      {
        href: "/loesungen/unterhaltsreinigung",
        title: "Nettoyage d’entretien",
        description:
          "Tournées récurrentes, preuves NFC par site, facturation automatique et portail pour syndics et gestionnaires.",
      },
      {
        href: "/loesungen/glasreinigung",
        title: "Nettoyage de vitres",
        description:
          "Planification des tournées, photos avant/après, documentation des classes de hauteur et facture immédiate sur site.",
      },
      {
        href: "/loesungen/industriereinigung",
        title: "Nettoyage industriel",
        description:
          "Travail posté, protocoles de sécurité, suivi des formations et export DATEV.",
      },
      {
        href: "/loesungen/klinikreinigung",
        title: "Nettoyage hospitalier et d’hygiène",
        description:
          "Documentation sans faille, protocoles conformes RKI, suivi des formations et rapports prêts pour audit.",
      },
      {
        href: "/loesungen/hotel-housekeeping",
        title: "Housekeeping hôtelier",
        description:
          "Tournées de chambres en temps réel, statut en direct pour la réception, suivi du linge et des consommables.",
      },
    ],
    discoverBranche: "Découvrir ce secteur",
    missingHeading: "Votre secteur manque ?",
    missingBody: "Parlez-nous-en – Taskey s’adapte à vous, et non l’inverse.",
    contactCta: "Nous contacter",
    featuresEyebrow: "Fonctionnalités en détail",
    featuresHeading: "Le logiciel pour les services au bâtiment – fonctionnement par module",
    features: [
      { href: "/software-gebaeudereinigung", label: "Logiciel pour le nettoyage de bâtiments", desc: "Vue d’ensemble : tous les modules du logiciel métier dans un seul système." },
      { href: "/zeiterfassung-gebaeudereinigung", label: "Pointage pour le nettoyage", desc: "Conforme au salaire minimum via NFC, GPS et synchronisation hors ligne." },
      { href: "/nfc-zeiterfassung", label: "Pointage NFC", desc: "Comment les tags NFC documentent les heures de pointage de manière infalsifiable." },
      { href: "/einsatzplanung-reinigung", label: "Planification d’interventions de nettoyage", desc: "Tournées, équipes et remplacements en glisser-déposer." },
      { href: "/leistungsnachweis-gebaeudereinigung", label: "Justificatif de prestations de nettoyage", desc: "Preuve automatique par site pour vos donneurs d’ordres." },
      { href: "/software-kleine-reinigungsfirma", label: "Logiciel pour petites entreprises de nettoyage", desc: "Conçu pour les structures de 1 à 15 collaborateurs." },
    ],
    compareEyebrow: "Comparatif du marché",
    compareHeading: "Taskey vs. autres logiciels métiers",
    comparisons: [
      { href: "/vergleich/software-gebaeudereinigung", label: "Comparatif des éditeurs 2026" },
      { href: "/vergleich/zvoove-alternative", label: "Taskey vs. zvoove" },
      { href: "/vergleich/blink-alternative", label: "Taskey vs. Blink" },
      { href: "/vergleich/mendato-alternative", label: "Taskey vs. Mendato" },
      { href: "/vergleich/fortytools-alternative", label: "Taskey vs. fortytools" },
      { href: "/vergleich/plan-d-alternative", label: "Taskey vs. Plan-D" },
    ],
  },
} as const;

export default async function LoesungenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = pickLocale(locale);
  const c = CONTENT[l];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 overflow-hidden">
      <BreadcrumbSchema
        crumbs={[
          { name: c.breadcrumbHome, url: "https://www.taskeyapp.com" },
          { name: c.breadcrumbLoesungen, url: "https://www.taskeyapp.com/loesungen" },
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
              {c.eyebrow}
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.95] tracking-tight mb-6">
            {c.h1Prefix}{" "}
            <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              {c.h1Accent}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            {c.lead}
          </p>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-5">
          {c.branchen.map((b) => (
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
                {c.discoverBranche}
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
                  {c.missingHeading}
                </h2>
                <p className="text-slate-600 text-base md:text-lg">
                  {c.missingBody}
                </p>
              </div>
              <a
                href="mailto:fynn@taskeyapp.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-full hover:bg-blue-500 transition-colors whitespace-nowrap"
              >
                {c.contactCta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase mb-3">
              {c.featuresEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              {c.featuresHeading}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.features.map((l) => (
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
              {c.compareEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              {c.compareHeading}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.comparisons.map((l) => (
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
