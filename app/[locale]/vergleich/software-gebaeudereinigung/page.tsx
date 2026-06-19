import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "@/components/LocaleLink";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";

const path = "/vergleich/software-gebaeudereinigung";
const URL = `https://www.taskeyapp.com${path}`;

const COPY: PageCopy = {
  de: {
    title: "Software für Gebäudereinigung Vergleich 2026 – die 8 wichtigsten Anbieter",
    description:
      "Vergleich der wichtigsten Software für Gebäudereinigung 2026: Taskey, zvoove, Blink, HERO, Mendato, fortytools, Plan-D, profacilo. Funktionen, Preise, Stärken, Schwächen.",
    ogTitle: "Software für Gebäudereinigung Vergleich 2026 | Taskey",
    ogDescription:
      "8 Anbieter im Direktvergleich: Funktionen, Preise, Schwächen. Welche Software für Gebäudereinigung passt zu Ihrem Betrieb?",
    twitterTitle: "Software für Gebäudereinigung Vergleich 2026",
    twitterDescription: "8 Anbieter im Direktvergleich: Funktionen, Preise, Schwächen.",
  },
  en: {
    title: "Building Cleaning Software Comparison 2026 – the 8 most important vendors",
    description:
      "Comparison of the most important building cleaning software 2026: Taskey, zvoove, Blink, HERO, Mendato, fortytools, Plan-D, profacilo. Features, prices, strengths, weaknesses.",
    ogTitle: "Building Cleaning Software Comparison 2026 | Taskey",
    ogDescription:
      "8 vendors head-to-head: features, prices, weaknesses. Which building cleaning software fits your business?",
    twitterTitle: "Building Cleaning Software Comparison 2026",
    twitterDescription: "8 vendors head-to-head: features, prices, weaknesses.",
  },
  fr: {
    title: "Comparatif logiciels de nettoyage de bâtiments 2026 – les 8 acteurs majeurs",
    description:
      "Comparatif des principaux logiciels pour le nettoyage de bâtiments en 2026 : Taskey, zvoove, Blink, HERO, Mendato, fortytools, Plan-D, profacilo. Fonctionnalités, tarifs, forces, faiblesses.",
    ogTitle: "Comparatif logiciels de nettoyage de bâtiments 2026 | Taskey",
    ogDescription:
      "8 acteurs en comparatif direct : fonctionnalités, tarifs, faiblesses. Quel logiciel pour le nettoyage de bâtiments correspond à votre entreprise ?",
    twitterTitle: "Comparatif logiciels de nettoyage de bâtiments 2026",
    twitterDescription: "8 acteurs en comparatif direct : fonctionnalités, tarifs, faiblesses.",
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

type LocaleContent = {
  ogImageAlt: string;
  articleHeadline: string;
  articleDescription: string;
  inLanguage: string;
  itemListName: string;
  breadcrumbAriaLabel: string;
  breadcrumbHome: string;
  breadcrumbParent: string;
  breadcrumbCurrent: string;
  schemaCrumbHome: string;
  schemaCrumbVergleich: string;
  schemaCrumbCurrent: string;
  heroBadge: string;
  heroH1: string;
  heroLead: string;
  heroUpdated: string;
  tableHeading: string;
  thProvider: string;
  thPrice: string;
  thFreeTrial: string;
  thNfc: string;
  thDatev: string;
  nfcYes: string;
  nfcNo: string;
  datevYes: string;
  datevNo: string;
  tableFootnote: string;
  detailsHeading: string;
  vendorWebsite: string;
  labelStrongFor: string;
  labelWeaknesses: string;
  labelPrice: string;
  labelFreeTrial: string;
  labelTopFeatures: string;
  detailPagePrefix: string;
  detailPageTaskey: string;
  detailPageVsTemplate: (name: string) => string;
  guideHeading: string;
  guideSmall: string;
  guideSmallBody: ReactNode;
  guideMid: string;
  guideMidBody: ReactNode;
  guideLarge: string;
  guideLargeBody: ReactNode;
  guideShift: string;
  guideShiftBody: ReactNode;
  faqHeading: string;
  ctaEyebrow: string;
  ctaHeading: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
  vendors: Vendor[];
  faqs: { q: string; a: string }[];
};

const taskeyDe: Vendor = {
  name: "Taskey",
  url: "https://www.taskeyapp.com",
  shortDescription:
    "All-in-One-Software, die Einsatzplanung, NFC-Objektnachweis, Zeiterfassung, Angebote, Rechnungen und Live-Margen in einer Plattform bündelt. Made in Germany, DSGVO.",
  starkeFuer:
    "Reinigungsbetriebe, die Tool-Chaos auflösen wollen – vom 1-Mann-Betrieb bis Enterprise. Besonders stark beim NFC-Objektnachweis und Live-Margen pro Objekt.",
  schwaechen:
    "Jüngerer Anbieter (gegründet 2023), kleinere Brand-Awareness als zvoove oder Blink.",
  preisAbMonat: "ab 119 € / Monat (Beginner) + 4,40 € pro aktivem Objekt",
  testZeitraum: "30 Tage kostenlos, keine Kreditkarte",
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
};

const CONTENT: Record<Locale, LocaleContent> = {
  de: {
    ogImageAlt: "Software für Gebäudereinigung Vergleich 2026",
    articleHeadline: "Software für Gebäudereinigung Vergleich 2026 – die 8 wichtigsten Anbieter",
    articleDescription:
      "Direktvergleich der 8 wichtigsten Software für Gebäudereinigung 2026 mit Funktionen, Preisen, Stärken und Schwächen.",
    inLanguage: "de-DE",
    itemListName: "Software für Gebäudereinigung – Anbietervergleich 2026",
    breadcrumbAriaLabel: "Breadcrumb",
    breadcrumbHome: "Home",
    breadcrumbParent: "Software für Gebäudereinigung",
    breadcrumbCurrent: "Vergleich 2026",
    schemaCrumbHome: "Home",
    schemaCrumbVergleich: "Vergleich",
    schemaCrumbCurrent: "Software für Gebäudereinigung Vergleich",
    heroBadge: "Anbietervergleich · Juni 2026",
    heroH1: "Software für Gebäudereinigung Vergleich 2026",
    heroLead:
      "Die 8 wichtigsten Anbieter im Direktvergleich: Funktionen, Preise, Stärken, Schwächen. Welche Branchensoftware für Gebäudereinigung passt zu Ihrem Betrieb – vom 1-Mann-Betrieb bis zur Mehrobjekt-Reinigungsfirma?",
    heroUpdated:
      "Juni 2026 · 8 Anbieter geprüft · Preise und Features zum Stichtag der Veröffentlichung",
    tableHeading: "Software für Gebäudereinigung im Direktvergleich",
    thProvider: "Anbieter",
    thPrice: "Preis ab",
    thFreeTrial: "Kostenloser Test",
    thNfc: "NFC-Nachweis",
    thDatev: "DATEV",
    nfcYes: "✓ nativ",
    nfcNo: "kein nativer NFC",
    datevYes: "✓",
    datevNo: "—",
    tableFootnote:
      "Angaben basieren auf öffentlich verfügbaren Anbieter-Informationen, Juni 2026. Bei Preisen „auf Anfrage\" wurden keine Daten ergänzt.",
    detailsHeading: "Die 8 Anbieter im Detail",
    vendorWebsite: "Anbieter-Website ↗",
    labelStrongFor: "Stark für",
    labelWeaknesses: "Schwächen",
    labelPrice: "Preis",
    labelFreeTrial: "Kostenloser Test",
    labelTopFeatures: "Wichtigste Features",
    detailPagePrefix: "→ Detailseite: ",
    detailPageTaskey: "Software für Gebäudereinigung",
    detailPageVsTemplate: (name) => `Taskey vs. ${name}`,
    guideHeading: "Welche Software für Gebäudereinigung passt zu welchem Betrieb?",
    guideSmall: "1-Mann-Betrieb bis 15 Mitarbeitende",
    guideSmallBody: (
      <>
        Wer gerade aus Excel und WhatsApp aussteigt, will eine Software ohne Implementierungs-Marathon. Empfehlung: <strong>Taskey</strong> (All-in-One inkl. NFC-Nachweis, 30 Tage kostenlos), <strong>fortytools</strong> (günstiger Einstieg, weniger Tiefe) oder <strong>profacilo</strong> (sehr schlank).
      </>
    ),
    guideMid: "Mittlerer Reinigungsbetrieb (15–50 Mitarbeitende)",
    guideMidBody: (
      <>
        Hier wird die Marge pro Objekt entscheidend. Empfehlung: <strong>Taskey</strong> (Live-Margen + NFC-Nachweis im Standard), <strong>HERO</strong> (breiterer Funktionsumfang, falls weitere Gewerke abgedeckt werden sollen) oder <strong>Mendato</strong> für klassische Cloud-Workflows.
      </>
    ),
    guideLarge: "Großer Reinigungsbetrieb (50+ Mitarbeitende)",
    guideLargeBody: (
      <>
        Komplexe Lohnmodelle, Mandantenstrukturen, mehrere Standorte. <strong>zvoove</strong> ist hier etabliert, aber teuer und implementierungsintensiv. <strong>Taskey</strong> ist im Enterprise-Tarif eine moderne Alternative mit transparenter Preisstruktur.
      </>
    ),
    guideShift: "Schwerpunkt Schichtplanung / Personaldisposition",
    guideShiftBody: (
      <>
        Wenn Kolonnen-Wechsel und Vertretungen das tägliche Hauptproblem sind: <strong>Plan-D</strong> ist darauf spezialisiert. <strong>Blink</strong>, wenn primär die Team-Kommunikation digitalisiert werden soll.
      </>
    ),
    faqHeading: "Häufige Fragen zu Software für Gebäudereinigung",
    ctaEyebrow: "Selbst ausprobieren",
    ctaHeading: "Taskey kostenlos testen statt nur vergleichen",
    ctaBody:
      "30 Tage Vollversion, ohne Kreditkarte. Einrichtung in 48 Stunden – Done-for-You durch unser Team.",
    ctaPrimary: "Jetzt kostenlos starten",
    ctaSecondary: "Mehr über Taskey",
    vendors: [
      taskeyDe,
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
    ],
    faqs: [
      {
        q: "Welche Software für Gebäudereinigung ist die beste 2026?",
        a: "„Die beste\" hängt vom Betrieb ab. Für All-in-One-Lösungen mit NFC-Objektnachweis und Live-Margen ist Taskey die Empfehlung. Für klassische Enterprise-Strukturen ab 50+ Mitarbeitenden ist zvoove etabliert. Für reine Team-Kommunikation eignet sich Blink. Wir vergleichen 8 Anbieter im Detail unten.",
      },
      {
        q: "Was kostet Software für Gebäudereinigung?",
        a: "Die monatlichen Preise reichen von ~29 € (profacilo, Einstieg) über 119 € (Taskey Beginner) bis zu mehreren hundert € pro Monat (zvoove). Viele Anbieter zeigen Preise erst auf Anfrage – Taskey, HERO und fortytools sind transparent.",
      },
      {
        q: "Gibt es Software für Gebäudereinigung mit kostenlosem Test?",
        a: "Ja. Taskey bietet 30 Tage kostenlos ohne Kreditkarte. HERO und fortytools bieten 14 Tage. Die meisten anderen Anbieter (zvoove, Blink, Mendato, Plan-D) arbeiten mit Demo-Terminen statt Self-Service-Trials.",
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
    ],
  },
  en: {
    ogImageAlt: "Building Cleaning Software Comparison 2026",
    articleHeadline: "Building Cleaning Software Comparison 2026 – the 8 most important vendors",
    articleDescription:
      "Head-to-head comparison of the 8 most important building cleaning software vendors in 2026 with features, prices, strengths and weaknesses.",
    inLanguage: "en-US",
    itemListName: "Building cleaning software – vendor comparison 2026",
    breadcrumbAriaLabel: "Breadcrumb",
    breadcrumbHome: "Home",
    breadcrumbParent: "Software for building cleaning",
    breadcrumbCurrent: "Comparison 2026",
    schemaCrumbHome: "Home",
    schemaCrumbVergleich: "Comparison",
    schemaCrumbCurrent: "Building cleaning software comparison",
    heroBadge: "Vendor comparison · June 2026",
    heroH1: "Building cleaning software comparison 2026",
    heroLead:
      "The 8 most important vendors head-to-head: features, prices, strengths, weaknesses. Which industry software for building cleaning fits your business – from a one-person operation to a multi-site cleaning company?",
    heroUpdated:
      "June 2026 · 8 vendors reviewed · prices and features as of the publication date",
    tableHeading: "Building cleaning software head-to-head",
    thProvider: "Vendor",
    thPrice: "Price from",
    thFreeTrial: "Free trial",
    thNfc: "NFC proof",
    thDatev: "DATEV",
    nfcYes: "✓ native",
    nfcNo: "no native NFC",
    datevYes: "✓",
    datevNo: "—",
    tableFootnote:
      "Information based on publicly available vendor data, June 2026. For prices listed as “on request”, no data was added.",
    detailsHeading: "The 8 vendors in detail",
    vendorWebsite: "Vendor website ↗",
    labelStrongFor: "Strong for",
    labelWeaknesses: "Weaknesses",
    labelPrice: "Price",
    labelFreeTrial: "Free trial",
    labelTopFeatures: "Top features",
    detailPagePrefix: "→ Detail page: ",
    detailPageTaskey: "Software for building cleaning",
    detailPageVsTemplate: (name) => `Taskey vs. ${name}`,
    guideHeading: "Which building cleaning software fits which business?",
    guideSmall: "One-person operation up to 15 employees",
    guideSmallBody: (
      <>
        If you are just leaving Excel and WhatsApp behind, you want software without an implementation marathon. Recommendation: <strong>Taskey</strong> (all-in-one incl. NFC proof, 30 days free), <strong>fortytools</strong> (cheap entry, less depth) or <strong>profacilo</strong> (very lean).
      </>
    ),
    guideMid: "Mid-sized cleaning company (15–50 employees)",
    guideMidBody: (
      <>
        Here the margin per site becomes decisive. Recommendation: <strong>Taskey</strong> (live margins + NFC proof as standard), <strong>HERO</strong> (broader feature scope if other trades should be covered) or <strong>Mendato</strong> for classic cloud workflows.
      </>
    ),
    guideLarge: "Large cleaning company (50+ employees)",
    guideLargeBody: (
      <>
        Complex payroll models, multi-tenant structures, several locations. <strong>zvoove</strong> is established here, but expensive and implementation-heavy. <strong>Taskey</strong> in the Enterprise plan is a modern alternative with a transparent pricing structure.
      </>
    ),
    guideShift: "Focus on scheduling / workforce planning",
    guideShiftBody: (
      <>
        When team rotations and substitutions are your daily core problem: <strong>Plan-D</strong> is specialised in this. <strong>Blink</strong> if you primarily want to digitalise team communication.
      </>
    ),
    faqHeading: "Frequently asked questions about building cleaning software",
    ctaEyebrow: "Try it yourself",
    ctaHeading: "Try Taskey for free instead of just comparing",
    ctaBody:
      "30-day full version, no credit card. Set-up in 48 hours – Done-for-You by our team.",
    ctaPrimary: "Start your free trial",
    ctaSecondary: "More about Taskey",
    vendors: [
      {
        ...taskeyDe,
        shortDescription:
          "All-in-one software bundling scheduling, NFC site proof, time tracking, quotes, invoices and live margins on a single platform. Made in Germany, DSGVO.",
        starkeFuer:
          "Cleaning companies that want to end tool chaos – from solo operators to enterprise. Particularly strong at NFC site proof and live margins per site.",
        schwaechen:
          "Younger vendor (founded 2023), smaller brand awareness than zvoove or Blink.",
        preisAbMonat: "from €119 / month (Beginner) + €4.40 per active site",
        testZeitraum: "30 days free, no credit card",
        features: [
          "NFC site proof",
          "Scheduling (drag-and-drop)",
          "Mobile time tracking (offline, GPS)",
          "Quotes & invoices",
          "DATEV export",
          "Live margins per site",
          "Client portal (Taskey Share)",
          "Quality control & checklists",
          "DSGVO, hosting in Germany",
        ],
      },
      {
        name: "zvoove (formerly Landwehr)",
        url: "https://www.zvoove.com",
        shortDescription:
          "Largest established vendor in the DACH region for building cleaning industry software. Modular, very feature-rich.",
        starkeFuer:
          "Large cleaning companies from approx. 50 employees with complex structures. Has its own costing and payroll modules.",
        schwaechen:
          "High implementation effort, long contract terms, modular prices often opaque. UX in parts dated.",
        preisAbMonat: "on request, typically several hundred € per month",
        testZeitraum: "free demo, no self-service trial",
        features: [
          "Scheduling",
          "Time tracking",
          "Payroll integrated",
          "Costing per site",
          "Accounting",
          "DATEV export",
          "Job management",
        ],
        internalLink: "/vergleich/zvoove-alternative",
      },
      {
        name: "Blink",
        url: "https://www.blink.de",
        shortDescription:
          "Smartphone-focused app for cleaning teams. Focus on communication, shift planning and mobile time tracking.",
        starkeFuer:
          "Companies that primarily want to digitalise employee communication and do not need back-office software.",
        schwaechen:
          "No classic ERP module: quotes, invoices and accounting have to run externally. Limited margin analysis.",
        preisAbMonat: "from approx. €4 per employee / month",
        testZeitraum: "free demo",
        features: [
          "Shift plan",
          "Employee chat",
          "Mobile time tracking",
          "Task management",
          "Timesheet export",
        ],
        internalLink: "/vergleich/blink-alternative",
      },
      {
        name: "HERO Software",
        url: "https://hero-software.de",
        shortDescription:
          "Trades software with its own industry module for building cleaners. Cloud-based with an app for employees.",
        starkeFuer:
          "Cleaning companies that look for broadly positioned trades software and also want to cover other trades.",
        schwaechen:
          "Not specialised in building cleaning – site and NFC workflows less pronounced. No native live margin report per site.",
        preisAbMonat: "from approx. €79 per month (Single) up to ~€199 (Team)",
        testZeitraum: "14 days free",
        features: [
          "Job management",
          "Costing",
          "Invoices",
          "Time tracking",
          "Multilingual cleaning plans",
          "Mobile app",
        ],
      },
      {
        name: "Mendato",
        url: "https://www.mendato.de",
        shortDescription:
          "Cloud software for building cleaning focused on route planning, master data and time tracking.",
        starkeFuer:
          "Mid-sized cleaning companies looking for an established cloud solution with a classic feature scope.",
        schwaechen:
          "No NFC site proof as standard. Module prices on request, long demo paths.",
        preisAbMonat: "on request",
        testZeitraum: "free demo",
        features: [
          "Route planning",
          "Master data",
          "Time tracking",
          "Job management",
          "Invoices",
        ],
        internalLink: "/vergleich/mendato-alternative",
      },
      {
        name: "fortytools",
        url: "https://www.fortytools.com",
        shortDescription:
          "Relatively lean cloud software for cleaning and service businesses, focused on dispatching and timesheets.",
        starkeFuer:
          "Small and mid-sized cleaning companies that want a quick start and do not need complex ERP logic.",
        schwaechen:
          "Less depth in margin analytics and site proof. No integrated dunning in the Beginner plan.",
        preisAbMonat: "from approx. €39 / month",
        testZeitraum: "14 days free",
        features: [
          "Job dispatching",
          "Timesheets",
          "Invoices",
          "Customer database",
          "Mobile app",
        ],
        internalLink: "/vergleich/fortytools-alternative",
      },
      {
        name: "Plan-D",
        url: "https://www.plan-d.eu",
        shortDescription:
          "Industry software focused on scheduling and workforce planning for building cleaning.",
        starkeFuer:
          "Companies whose primary problem is changing shift planning – with complex team and substitution scenarios.",
        schwaechen:
          "Invoicing and CRM rather rudimentary. No native live margin view. UX in parts requires explanation.",
        preisAbMonat: "on request",
        testZeitraum: "free demo",
        features: [
          "Workforce planning",
          "Team management",
          "Shift models",
          "Timesheets",
          "Job management",
        ],
        internalLink: "/vergleich/plan-d-alternative",
      },
      {
        name: "profacilo",
        url: "https://profacilo.de",
        shortDescription:
          "Cloud software for building cleaners and smaller facility management businesses. Lean feature scope.",
        starkeFuer:
          "Companies looking for a cheap entry-level solution, without ERP complexity.",
        schwaechen:
          "Less depth in dispatching and margins. No native NFC site proof. Narrower reporting.",
        preisAbMonat: "from approx. €29 / month",
        testZeitraum: "free demo / trial",
        features: [
          "Site management",
          "Timesheets",
          "Invoices",
          "Mobile app",
          "Cleaning plans",
        ],
      },
    ],
    faqs: [
      {
        q: "Which building cleaning software is the best in 2026?",
        a: "“The best” depends on the business. For all-in-one solutions with NFC site proof and live margins, Taskey is the recommendation. For classic enterprise structures from 50+ employees, zvoove is established. For pure team communication, Blink is a good fit. We compare 8 vendors in detail below.",
      },
      {
        q: "What does building cleaning software cost?",
        a: "Monthly prices range from ~€29 (profacilo, entry) and €119 (Taskey Beginner) up to several hundred € per month (zvoove). Many vendors only show prices on request – Taskey, HERO and fortytools are transparent.",
      },
      {
        q: "Is there building cleaning software with a free trial?",
        a: "Yes. Taskey offers 30 days free with no credit card. HERO and fortytools offer 14 days. Most other vendors (zvoove, Blink, Mendato, Plan-D) work with demo appointments instead of self-service trials.",
      },
      {
        q: "Which software has NFC site proof?",
        a: "NFC site proof (tamper-proof attendance evidence via NFC tag at the site) is not standard everywhere. Taskey has NFC integrated natively. With most other vendors, NFC is either an add-on or not available at all.",
      },
      {
        q: "Which building cleaning software fits small businesses?",
        a: "For 1–15 employees, Taskey (from €119), fortytools (from €39) and profacilo (from €29) are a good fit. zvoove and Mendato are rather geared towards larger structures.",
      },
      {
        q: "Which software is DSGVO-compliant and hosted in Germany?",
        a: "Taskey, zvoove, HERO, Mendato, fortytools, Plan-D and profacilo all advertise German hosting and DSGVO compliance. With any choice you should request an up-to-date DPA document.",
      },
      {
        q: "Which software can connect to DATEV?",
        a: "DATEV export is offered by Taskey, zvoove, HERO, Mendato and Plan-D. With Blink and fortytools, the DATEV connection depends on the plan or integration.",
      },
      {
        q: "How fast is the migration from Excel or a legacy software?",
        a: "Taskey migration typically takes 48 hours (Done-for-You). HERO and fortytools offer self-service imports via CSV. zvoove and Plan-D have structured onboarding programmes that usually take 4–8 weeks.",
      },
    ],
  },
  fr: {
    ogImageAlt: "Comparatif logiciels de nettoyage de bâtiments 2026",
    articleHeadline:
      "Comparatif logiciels de nettoyage de bâtiments 2026 – les 8 acteurs majeurs",
    articleDescription:
      "Comparatif direct des 8 principaux logiciels pour le nettoyage de bâtiments en 2026, avec fonctionnalités, tarifs, forces et faiblesses.",
    inLanguage: "fr-FR",
    itemListName: "Logiciels pour le nettoyage de bâtiments – comparatif d'acteurs 2026",
    breadcrumbAriaLabel: "Fil d'Ariane",
    breadcrumbHome: "Accueil",
    breadcrumbParent: "Logiciel pour le nettoyage de bâtiments",
    breadcrumbCurrent: "Comparatif 2026",
    schemaCrumbHome: "Accueil",
    schemaCrumbVergleich: "Comparatif",
    schemaCrumbCurrent: "Comparatif logiciels de nettoyage de bâtiments",
    heroBadge: "Comparatif d'acteurs · juin 2026",
    heroH1: "Comparatif logiciels de nettoyage de bâtiments 2026",
    heroLead:
      "Les 8 acteurs majeurs en comparatif direct : fonctionnalités, tarifs, forces, faiblesses. Quel logiciel métier pour le nettoyage de bâtiments correspond à votre entreprise – de l'auto-entrepreneur à l'entreprise multi-sites ?",
    heroUpdated:
      "Juin 2026 · 8 acteurs analysés · tarifs et fonctionnalités à la date de publication",
    tableHeading: "Logiciels de nettoyage de bâtiments en comparatif direct",
    thProvider: "Acteur",
    thPrice: "Prix dès",
    thFreeTrial: "Essai gratuit",
    thNfc: "Preuve NFC",
    thDatev: "DATEV",
    nfcYes: "✓ natif",
    nfcNo: "pas de NFC natif",
    datevYes: "✓",
    datevNo: "—",
    tableFootnote:
      "Informations basées sur les données publiques des acteurs, juin 2026. Pour les tarifs « sur demande », aucune donnée n'a été ajoutée.",
    detailsHeading: "Les 8 acteurs en détail",
    vendorWebsite: "Site de l'éditeur ↗",
    labelStrongFor: "Points forts",
    labelWeaknesses: "Faiblesses",
    labelPrice: "Prix",
    labelFreeTrial: "Essai gratuit",
    labelTopFeatures: "Fonctionnalités clés",
    detailPagePrefix: "→ Page détaillée : ",
    detailPageTaskey: "Logiciel pour le nettoyage de bâtiments",
    detailPageVsTemplate: (name) => `Taskey vs. ${name}`,
    guideHeading: "Quel logiciel pour le nettoyage de bâtiments selon quelle entreprise ?",
    guideSmall: "Auto-entrepreneur jusqu'à 15 employés",
    guideSmallBody: (
      <>
        Si vous sortez tout juste d'Excel et de WhatsApp, vous voulez un logiciel sans marathon de mise en place. Recommandation : <strong>Taskey</strong> (tout-en-un avec preuve NFC, 30 jours gratuits), <strong>fortytools</strong> (entrée de gamme abordable, moins de profondeur) ou <strong>profacilo</strong> (très épuré).
      </>
    ),
    guideMid: "Entreprise de nettoyage de taille moyenne (15 à 50 employés)",
    guideMidBody: (
      <>
        Ici, la marge par site devient décisive. Recommandation : <strong>Taskey</strong> (marges en direct + preuve NFC en standard), <strong>HERO</strong> (périmètre plus large si d'autres métiers doivent être couverts) ou <strong>Mendato</strong> pour les workflows cloud classiques.
      </>
    ),
    guideLarge: "Grande entreprise de nettoyage (50+ employés)",
    guideLargeBody: (
      <>
        Modèles de paie complexes, structures multi-clients, plusieurs sites. <strong>zvoove</strong> y est établi, mais coûteux et lourd à implémenter. <strong>Taskey</strong>, dans sa formule Enterprise, est une alternative moderne à la grille tarifaire transparente.
      </>
    ),
    guideShift: "Focus planification / gestion du personnel",
    guideShiftBody: (
      <>
        Quand les rotations d'équipes et les remplacements sont le principal problème quotidien : <strong>Plan-D</strong> en est spécialiste. <strong>Blink</strong>, si vous souhaitez avant tout digitaliser la communication d'équipe.
      </>
    ),
    faqHeading: "Questions fréquentes sur les logiciels pour le nettoyage de bâtiments",
    ctaEyebrow: "Essayer par vous-même",
    ctaHeading: "Essayer Taskey gratuitement plutôt que simplement comparer",
    ctaBody:
      "30 jours version complète, sans carte bancaire. Mise en place en 48 heures – Done-for-You par notre équipe.",
    ctaPrimary: "Démarrer l'essai gratuit",
    ctaSecondary: "En savoir plus sur Taskey",
    vendors: [
      {
        ...taskeyDe,
        shortDescription:
          "Logiciel tout-en-un qui regroupe planification, preuve NFC sur site, pointage, devis, factures et marges en direct sur une seule plateforme. Made in Germany, DSGVO.",
        starkeFuer:
          "Entreprises de nettoyage qui veulent en finir avec le chaos des outils – de l'auto-entrepreneur à l'enterprise. Particulièrement fort sur la preuve NFC sur site et les marges en direct par site.",
        schwaechen:
          "Acteur plus jeune (fondé en 2023), notoriété plus faible que zvoove ou Blink.",
        preisAbMonat: "dès 119 € / mois (Beginner) + 4,40 € par site actif",
        testZeitraum: "30 jours gratuits, sans carte bancaire",
        features: [
          "Preuve NFC sur site",
          "Planification (drag-and-drop)",
          "Pointage mobile (hors ligne, GPS)",
          "Devis & factures",
          "Export DATEV",
          "Marges en direct par site",
          "Portail donneur d'ordre (Taskey Share)",
          "Contrôle qualité & checklists",
          "DSGVO, hébergement en Allemagne",
        ],
      },
      {
        name: "zvoove (anciennement Landwehr)",
        url: "https://www.zvoove.com",
        shortDescription:
          "Acteur établi le plus important dans la région DACH pour les logiciels métier de nettoyage de bâtiments. Modulaire, très riche en fonctionnalités.",
        starkeFuer:
          "Grandes entreprises de nettoyage à partir d'environ 50 employés avec des structures complexes. Dispose de ses propres modules de chiffrage et de paie.",
        schwaechen:
          "Effort de mise en place élevé, engagements longs, tarifs modulaires souvent peu transparents. UX par endroits datée.",
        preisAbMonat: "sur demande, en général plusieurs centaines d'€ par mois",
        testZeitraum: "démo gratuite, pas d'essai en libre-service",
        features: [
          "Planification",
          "Pointage",
          "Paie intégrée",
          "Chiffrage par site",
          "Comptabilité",
          "Export DATEV",
          "Gestion des missions",
        ],
        internalLink: "/vergleich/zvoove-alternative",
      },
      {
        name: "Blink",
        url: "https://www.blink.de",
        shortDescription:
          "Application smartphone-first pour les équipes de nettoyage. Axée sur la communication, les plannings d'équipe et le pointage mobile.",
        starkeFuer:
          "Entreprises qui veulent surtout digitaliser la communication employés et n'ont pas besoin de logiciel back-office.",
        schwaechen:
          "Pas de module ERP classique : devis, factures et comptabilité doivent passer par d'autres outils. Analyse de marge limitée.",
        preisAbMonat: "à partir d'environ 4 € par employé / mois",
        testZeitraum: "démo gratuite",
        features: [
          "Planning d'équipe",
          "Chat employés",
          "Pointage mobile",
          "Gestion des tâches",
          "Export des feuilles d'heures",
        ],
        internalLink: "/vergleich/blink-alternative",
      },
      {
        name: "HERO Software",
        url: "https://hero-software.de",
        shortDescription:
          "Logiciel artisan avec un module métier dédié au nettoyage de bâtiments. Cloud, avec une application pour les employés.",
        starkeFuer:
          "Entreprises de nettoyage qui cherchent un logiciel artisan généraliste et souhaitent couvrir d'autres métiers.",
        schwaechen:
          "Non spécialisé sur le nettoyage de bâtiments – workflows site et NFC moins développés. Pas de reporting natif de marge en direct par site.",
        preisAbMonat: "à partir d'environ 79 € par mois (Single) jusqu'à ~199 € (Team)",
        testZeitraum: "14 jours gratuits",
        features: [
          "Gestion des missions",
          "Chiffrage",
          "Factures",
          "Pointage",
          "Plans de nettoyage multilingues",
          "Application mobile",
        ],
      },
      {
        name: "Mendato",
        url: "https://www.mendato.de",
        shortDescription:
          "Logiciel cloud pour le nettoyage de bâtiments centré sur la planification de tournées, les données de base et le pointage.",
        starkeFuer:
          "Entreprises de nettoyage de taille moyenne qui cherchent une solution cloud établie avec un périmètre fonctionnel classique.",
        schwaechen:
          "Pas de preuve NFC sur site en standard. Tarifs des modules sur demande, processus de démo longs.",
        preisAbMonat: "sur demande",
        testZeitraum: "démo gratuite",
        features: [
          "Planification de tournées",
          "Données de base",
          "Pointage",
          "Gestion des missions",
          "Factures",
        ],
        internalLink: "/vergleich/mendato-alternative",
      },
      {
        name: "fortytools",
        url: "https://www.fortytools.com",
        shortDescription:
          "Logiciel cloud relativement épuré pour les entreprises de nettoyage et de services, centré sur la dispatch et les feuilles d'heures.",
        starkeFuer:
          "Petites et moyennes entreprises de nettoyage qui veulent démarrer rapidement, sans logique ERP complexe.",
        schwaechen:
          "Moins de profondeur dans l'analyse de marges et la preuve site. Pas de relances intégrées dans la formule Beginner.",
        preisAbMonat: "à partir d'environ 39 € / mois",
        testZeitraum: "14 jours gratuits",
        features: [
          "Dispatch des missions",
          "Feuilles d'heures",
          "Factures",
          "Base clients",
          "Application mobile",
        ],
        internalLink: "/vergleich/fortytools-alternative",
      },
      {
        name: "Plan-D",
        url: "https://www.plan-d.eu",
        shortDescription:
          "Logiciel métier centré sur la planification et la gestion du personnel pour le nettoyage de bâtiments.",
        starkeFuer:
          "Entreprises dont le problème principal est la planification changeante – avec des scénarios complexes d'équipes et de remplacements.",
        schwaechen:
          "Facturation et CRM plutôt rudimentaires. Pas de vue native des marges en direct. UX par endroits peu intuitive.",
        preisAbMonat: "sur demande",
        testZeitraum: "démo gratuite",
        features: [
          "Planification du personnel",
          "Gestion des équipes",
          "Modèles de plannings",
          "Feuilles d'heures",
          "Gestion des missions",
        ],
        internalLink: "/vergleich/plan-d-alternative",
      },
      {
        name: "profacilo",
        url: "https://profacilo.de",
        shortDescription:
          "Logiciel cloud pour les entreprises de nettoyage de bâtiments et les petites structures de facility management. Périmètre fonctionnel épuré.",
        starkeFuer:
          "Entreprises qui cherchent une solution d'entrée de gamme abordable, sans complexité ERP.",
        schwaechen:
          "Moins de profondeur en dispatch et en marges. Pas de preuve NFC native sur site. Reporting plus restreint.",
        preisAbMonat: "à partir d'environ 29 € / mois",
        testZeitraum: "démo gratuite / essai",
        features: [
          "Gestion des sites",
          "Feuilles d'heures",
          "Factures",
          "Application mobile",
          "Plans de nettoyage",
        ],
      },
    ],
    faqs: [
      {
        q: "Quel est le meilleur logiciel pour le nettoyage de bâtiments en 2026 ?",
        a: "« Le meilleur » dépend de l'entreprise. Pour une solution tout-en-un avec preuve NFC sur site et marges en direct, Taskey est notre recommandation. Pour des structures enterprise classiques à partir de 50+ employés, zvoove est établi. Pour la communication d'équipe pure, Blink est adapté. Nous comparons 8 acteurs en détail ci-dessous.",
      },
      {
        q: "Combien coûte un logiciel pour le nettoyage de bâtiments ?",
        a: "Les tarifs mensuels vont d'environ 29 € (profacilo, entrée de gamme) à 119 € (Taskey Beginner) jusqu'à plusieurs centaines d'€ par mois (zvoove). De nombreux acteurs n'affichent leurs tarifs que sur demande – Taskey, HERO et fortytools sont transparents.",
      },
      {
        q: "Existe-t-il un logiciel pour le nettoyage de bâtiments avec essai gratuit ?",
        a: "Oui. Taskey propose 30 jours gratuits sans carte bancaire. HERO et fortytools proposent 14 jours. La plupart des autres acteurs (zvoove, Blink, Mendato, Plan-D) fonctionnent avec des rendez-vous de démo plutôt qu'avec un essai en libre-service.",
      },
      {
        q: "Quel logiciel propose une preuve NFC sur site ?",
        a: "La preuve NFC sur site (preuve de présence inviolable via un tag NFC sur le site) n'est pas un standard chez tous les acteurs. Taskey intègre nativement le NFC. Chez la plupart des autres acteurs, le NFC est soit un add-on, soit indisponible.",
      },
      {
        q: "Quel logiciel pour le nettoyage de bâtiments convient aux petites entreprises ?",
        a: "Pour 1 à 15 employés, Taskey (dès 119 €), fortytools (dès 39 €) et profacilo (dès 29 €) conviennent bien. zvoove et Mendato sont plutôt orientés vers des structures plus grandes.",
      },
      {
        q: "Quel logiciel est conforme au DSGVO et hébergé en Allemagne ?",
        a: "Taskey, zvoove, HERO, Mendato, fortytools, Plan-D et profacilo communiquent sur un hébergement allemand et une conformité DSGVO. Pour chaque choix, demandez un document de sous-traitance à jour.",
      },
      {
        q: "Quel logiciel se connecte à DATEV ?",
        a: "Un export DATEV est proposé par Taskey, zvoove, HERO, Mendato et Plan-D. Chez Blink et fortytools, la connexion DATEV dépend de la formule ou de l'intégration.",
      },
      {
        q: "À quelle vitesse se fait la migration depuis Excel ou un ancien logiciel ?",
        a: "La migration vers Taskey prend typiquement 48 heures (Done-for-You). HERO et fortytools proposent des imports en libre-service via CSV. zvoove et Plan-D ont des programmes d'onboarding structurés qui durent en général 4 à 8 semaines.",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = pickLocale(locale);
  return buildMetadata({
    copyByLocale: COPY,
    locale: l,
    path,
    type: "article",
    image: "/feature-zeiterfassung.webp",
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = pickLocale(locale);
  const c = CONTENT[l];

  const vendors = c.vendors;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.articleHeadline,
    description: c.articleDescription,
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
    inLanguage: c.inLanguage,
    mainEntityOfPage: { "@type": "WebPage", "@id": URL },
    image: "https://www.taskeyapp.com/opengraph-image",
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: c.itemListName,
    numberOfItems: vendors.length,
    itemListElement: vendors.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: v.name,
      url: v.url,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const featureHasNfc = (features: string[]) =>
    features.some((f) => f.includes("NFC"));

  const featureHasDatev = (features: string[]) =>
    features.some((f) => f.includes("DATEV"));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema
        crumbs={[
          { name: c.schemaCrumbHome, url: "https://www.taskeyapp.com" },
          { name: c.schemaCrumbVergleich, url: "https://www.taskeyapp.com/vergleich/zvoove-alternative" },
          { name: c.schemaCrumbCurrent, url: URL },
        ]}
      />

      <main className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-cyan-500/12 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[80px] pointer-events-none" />

        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label={c.breadcrumbAriaLabel} className="mb-8 text-xs sm:text-sm text-slate-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-blue-700 transition-colors">{c.breadcrumbHome}</Link></li>
                <li className="text-slate-400">/</li>
                <li><Link href="/software-gebaeudereinigung" className="hover:text-blue-700 transition-colors">{c.breadcrumbParent}</Link></li>
                <li className="text-slate-400">/</li>
                <li className="text-slate-600">{c.breadcrumbCurrent}</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-slate-200 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase">
                {c.heroBadge}
              </span>
            </div>

            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-black leading-[0.95] tracking-tight mb-6">
              {c.heroH1}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-6">
              {c.heroLead}
            </p>
            <p className="text-sm text-slate-500 mb-8">
              <strong>{l === "de" ? "Zuletzt aktualisiert:" : l === "en" ? "Last updated:" : "Dernière mise à jour :"}</strong> {c.heroUpdated}
            </p>
          </div>
        </section>

        {/* Vergleichstabelle */}
        <section className="relative pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
              {c.tableHeading}
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-left">
                    <th className="px-4 py-3 font-black">{c.thProvider}</th>
                    <th className="px-4 py-3 font-black">{c.thPrice}</th>
                    <th className="px-4 py-3 font-black">{c.thFreeTrial}</th>
                    <th className="px-4 py-3 font-black">{c.thNfc}</th>
                    <th className="px-4 py-3 font-black">{c.thDatev}</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((v) => (
                    <tr key={v.name} className="border-t border-slate-200">
                      <td className="px-4 py-3 font-bold">{v.name}</td>
                      <td className="px-4 py-3 text-slate-600">{v.preisAbMonat}</td>
                      <td className="px-4 py-3 text-slate-600">{v.testZeitraum}</td>
                      <td className="px-4 py-3 text-slate-600">
                        {featureHasNfc(v.features) ? c.nfcYes : c.nfcNo}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {featureHasDatev(v.features) ? c.datevYes : c.datevNo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              {c.tableFootnote}
            </p>
          </div>
        </section>

        {/* Vendor-Karten */}
        <section className="relative pb-20 md:pb-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
              {c.detailsHeading}
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
                    {c.vendorWebsite}
                  </a>
                </div>

                <p className="text-slate-700 leading-relaxed mb-5">{v.shortDescription}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
                    <p className="text-[10px] font-black tracking-[0.2em] text-emerald-700 uppercase mb-2">
                      {c.labelStrongFor}
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">{v.starkeFuer}</p>
                  </div>
                  <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
                    <p className="text-[10px] font-black tracking-[0.2em] text-amber-700 uppercase mb-2">
                      {c.labelWeaknesses}
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">{v.schwaechen}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-5">
                  <div className="text-sm">
                    <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-1">{c.labelPrice}</p>
                    <p className="font-bold">{v.preisAbMonat}</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-1">{c.labelFreeTrial}</p>
                    <p className="font-bold">{v.testZeitraum}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-2">{c.labelTopFeatures}</p>
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
                      {c.detailPagePrefix}{v.name === "Taskey" ? c.detailPageTaskey : c.detailPageVsTemplate(v.name.replace(/ \(.*\)$/, ""))}
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
              {c.guideHeading}
            </h2>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{c.guideSmall}</h3>
                <p>
                  {c.guideSmallBody}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{c.guideMid}</h3>
                <p>
                  {c.guideMidBody}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{c.guideLarge}</h3>
                <p>
                  {c.guideLargeBody}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{c.guideShift}</h3>
                <p>
                  {c.guideShiftBody}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative pb-20 md:pb-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
              {c.faqHeading}
            </h2>
            <div className="space-y-3">
              {c.faqs.map((f) => (
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
                  {c.ctaEyebrow}
                </p>
                <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3">
                  {c.ctaHeading}
                </h2>
                <p className="text-slate-600 text-base md:text-lg max-w-2xl mb-6">
                  {c.ctaBody}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://signup.taskeyapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-full hover:bg-blue-500 transition-colors"
                  >
                    {c.ctaPrimary}
                  </a>
                  <Link
                    href="/software-gebaeudereinigung"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-300 text-slate-700 text-base font-bold rounded-full hover:border-blue-400 transition-colors"
                  >
                    {c.ctaSecondary}
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
