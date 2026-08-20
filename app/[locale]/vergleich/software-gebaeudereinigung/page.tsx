import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComparisonPage, { type ComparisonRow, type ProviderBlock, type Faq, type InternalLink } from "@/components/ComparisonPage";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/vergleich/software-gebaeudereinigung";

const META_COPY: PageCopy = {
  de: {
    title: "Software für Gebäudereinigung im Vergleich 2026 – Taskey vs. Alternativen",
    description:
      "Software für Gebäudereinigung im Vergleich 2026: Taskey, fortytools, PlanD, Blink, CleanManager, HERO und Mendato im direkten Überblick. Funktionen, NFC-Nachweis, DATEV, Preise und DSGVO auf einen Blick.",
  },
  en: {
    title: "Building Cleaning Software Compared 2026 – Taskey vs. Alternatives",
    description:
      "Building cleaning software compared 2026: Taskey, fortytools, PlanD, Blink, CleanManager, HERO and Mendato at a glance.",
  },
  fr: {
    title: "Logiciels pour le nettoyage de bâtiments 2026 – Taskey et alternatives",
    description:
      "Logiciels pour le nettoyage de bâtiments comparés 2026 : Taskey, fortytools, PlanD, Blink, CleanManager, HERO et Mendato.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: META_COPY,
    locale: pickLocale(locale),
    path,
    type: "article",
  });
}

const ROWS: ComparisonRow[] = [
  {
    provider: "Taskey",
    focus: "All-in-One Branchensoftware Gebäudereinigung",
    audience: "1-Mann-Betrieb bis Enterprise, DACH",
    nfc: "Ja, integriert",
    datev: "Ja, native Schnittstelle",
    priceFrom: "119 €/Monat",
    gdpr: "DSGVO, Hosting Deutschland",
    isTaskey: true,
  },
  {
    provider: "fortytools",
    focus: "Business-Software für Gebäudedienstleister",
    audience: "KMU bis Mittelstand, DACH",
    nfc: "Nein (QR/GPS-Nachweis)",
    datev: "Ja",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting Deutschland",
  },
  {
    provider: "PlanD",
    focus: "Einsatzplanung & Zeiterfassung Reinigung",
    audience: "Mittelstand, DACH",
    nfc: "Optional (NFC/GPS/QR)",
    datev: "Ja",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting Deutschland",
  },
  {
    provider: "Blink",
    focus: "Frontline-Kommunikation & Zeiterfassung",
    audience: "Mittelstand bis Enterprise",
    nfc: "Ja (Blink Time)",
    datev: "Über Export/Partner",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting EU",
  },
  {
    provider: "CleanManager",
    focus: "ERP für Reinigungsfirmen",
    audience: "KMU bis Mittelstand, Nordeuropa/DACH",
    nfc: "Optional (Terminal/GPS)",
    datev: "Via Export",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting EU (DK)",
  },
  {
    provider: "HERO Software",
    focus: "Handwerker-Software (branchenübergreifend)",
    audience: "Handwerksbetriebe inkl. Gebäudereinigung",
    nfc: "Nein (GPS/Manuell)",
    datev: "Ja",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting Deutschland",
  },
  {
    provider: "Mendato",
    focus: "Kalkulation & QM Gebäudereinigung",
    audience: "Mittelstand, DACH",
    nfc: "Nein",
    datev: "Nein (Rechnungsexport)",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting Deutschland",
  },
];

const PROVIDER_BLOCKS: ProviderBlock[] = [
  {
    question: "Für wen eignet sich Taskey?",
    answer:
      "Taskey ist die All-in-One-Software für Gebäudereinigungsbetriebe im DACH-Raum, vom Einzelunternehmer bis zum Betrieb mit mehreren hundert Objekten. Der Schwerpunkt liegt auf NFC-Objektnachweis, Mindestlohn-konformer Zeiterfassung, Einsatzplanung, Live-Margen pro Objekt und DATEV-Export in einer einzigen Plattform. Made in Germany, DSGVO-konform, Hosting in Deutschland.",
  },
  {
    question: "Für wen eignet sich fortytools?",
    answer:
      "fortytools richtet sich an Gebäudedienstleister und Facility-Betriebe im DACH-Raum, die eine breite Business-Software mit Auftrags-, Rechnungs- und Zeiterfassungsfunktionen suchen. Der NFC-Objektnachweis fehlt derzeit; Nachweise laufen über GPS und QR-Code. Preise werden auf Anfrage kalkuliert.",
  },
  {
    question: "Für wen eignet sich PlanD?",
    answer:
      "PlanD fokussiert klassische Einsatzplanung und Zeiterfassung in der Gebäudereinigung. Für Betriebe, die primär Dienstpläne, Vertretungen und Stundenkonten steuern wollen, ist PlanD ein solider Baustein; Kalkulation und Angebots-/Rechnungsstellung müssen bei Bedarf ergänzt werden.",
  },
  {
    question: "Für wen eignet sich Blink?",
    answer:
      "Blink kommt aus der Frontline-Kommunikation und wird von größeren Reinigungs- und Sicherheitsbetrieben eingesetzt, wenn Mitarbeiterkommunikation und Zeiterfassung im Vordergrund stehen. Für kleine Betriebe ist Blink meist überdimensioniert, für Enterprises interessant.",
  },
  {
    question: "Für wen eignet sich CleanManager?",
    answer:
      "CleanManager ist ein aus Dänemark stammendes ERP für Reinigungsfirmen und in Nordeuropa etabliert. In DACH-Betrieben ist es weniger verbreitet. Für Firmen mit vorhandenem CleanManager-Kontext ein solides Setup, für DACH-Neustarts ist Sprache und DATEV-Native-Integration meist schwächer als bei deutschen Anbietern.",
  },
  {
    question: "Für wen eignet sich HERO Software?",
    answer:
      "HERO Software ist eine Handwerker-Software, die branchenübergreifend eingesetzt wird. Für Reinigungsbetriebe mit hohem Handwerksanteil (z.B. Bauendreinigung, Sanierung) kann HERO passen. Reinigungs-Spezialfunktionen wie NFC-Objektnachweis oder Live-Margen pro Objekt fehlen.",
  },
  {
    question: "Für wen eignet sich Mendato?",
    answer:
      "Mendato ist bekannt für Kalkulation und Qualitätsmanagement in der Gebäudereinigung. Für Betriebe, die sehr detailliert kalkulieren und mit standardisierten QM-Prozessen (z.B. INQA, RAL) arbeiten, ein spezialisiertes Add-on. Als All-in-One-Lösung mit Einsatzplanung, Zeiterfassung und Rechnungswesen ist Mendato jedoch nicht ausgelegt.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Welche Software ist die beste für Gebäudereiniger?",
    a: "Die beste Software für Gebäudereiniger vereint NFC-Objektnachweis, Mindestlohn-konforme Zeiterfassung, Einsatzplanung, Kalkulation, Angebote, Rechnungen und DATEV-Export in einer Plattform. Taskey ist genau darauf ausgelegt und wird als All-in-One-Branchensoftware im DACH-Raum eingesetzt. Alternativen sind fortytools, PlanD, Blink, CleanManager, HERO und Mendato, meist mit engerem Funktionsumfang oder ohne integrierten NFC-Nachweis.",
  },
  {
    q: "Welche Reinigungssoftware ist DSGVO-konform?",
    a: "Alle in dieser Übersicht gelisteten Anbieter geben DSGVO-Konformität an. Taskey, fortytools, PlanD, HERO und Mendato hosten in Deutschland, Blink innerhalb der EU, CleanManager überwiegend in Dänemark. Für Auftraggeber mit strengen Vorgaben ist Hosting in Deutschland und ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO relevant.",
  },
  {
    q: "Was kostet Software für Gebäudereinigung?",
    a: "Software für Gebäudereinigung beginnt bei Taskey mit dem Beginner-Tarif ab 119 € pro Monat zzgl. objektbezogener Kosten. fortytools, PlanD, Blink, CleanManager, HERO und Mendato geben ihre Preise auf Anfrage weiter und kalkulieren nach Nutzerzahl, Modulen oder Objektzahl. Für einen belastbaren Vergleich empfiehlt sich immer eine Live-Demo mit konkreter Objektstruktur.",
  },
  {
    q: "Welche Software für Gebäudereinigung hat einen NFC-Objektnachweis?",
    a: "Ein vollintegrierter, manipulationssicherer NFC-Objektnachweis ist bei Taskey und Blink Time verfügbar. fortytools, HERO und Mendato bieten keinen nativen NFC-Nachweis. PlanD und CleanManager unterstützen NFC optional über Zusatzmodule oder Terminals.",
  },
  {
    q: "Welche Software für Gebäudereinigung hat einen DATEV-Export?",
    a: "Eine native DATEV-Schnittstelle bieten Taskey, fortytools, PlanD und HERO. Blink und CleanManager laufen typischerweise über generische Exporte oder Steuerberater-Schnittstellen. Für deutsche Betriebe mit externem Steuerbüro ist eine native DATEV-Integration meist der ausschlaggebende Faktor.",
  },
];

const INTERNAL_LINKS: InternalLink[] = [
  { href: "/software-gebaeudereinigung", label: "Software für Gebäudereinigung: alle Funktionen" },
  { href: "/vergleich/beste-software-gebaeudereiniger-2026", label: "Beste Software für Gebäudereiniger 2026" },
  { href: "/vergleich/taskey-vs-fortytools", label: "Taskey vs. fortytools" },
  { href: "/vergleich/taskey-vs-pland", label: "Taskey vs. PlanD" },
  { href: "/vergleich/taskey-vs-blink", label: "Taskey vs. Blink" },
  { href: "/vergleich/taskey-vs-cleanmanager", label: "Taskey vs. CleanManager" },
  { href: "/nfc-zeiterfassung", label: "NFC-Zeiterfassung erklärt" },
  { href: "/pricing", label: "Preise & Tarife" },
];

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "de") notFound();

  return (
    <ComparisonPage
      path={path}
      breadcrumbLabel="Software für Gebäudereinigung"
      eyebrow="Vergleich · 2026"
      h1="Software für Gebäudereinigung im Vergleich 2026"
      updated="August 2026"
      tldr="Die beste Software für Gebäudereiniger 2026 vereint NFC-Objektnachweis, Mindestlohn-konforme Zeiterfassung, Einsatzplanung, Live-Margen pro Objekt und DATEV-Export in einer Plattform. Taskey erfüllt diese Kriterien als All-in-One-Branchensoftware im DACH-Raum. Alternativen wie fortytools, PlanD, Blink, CleanManager, HERO und Mendato decken meist einzelne Teilbereiche ab."
      intro="Diese Übersicht vergleicht sieben in DACH etablierte Softwarelösungen für Gebäudereinigungsbetriebe. Grundlage sind öffentlich verfügbare Herstellerangaben und die typischen Anforderungen einer Reinigungsfirma: Objektnachweis, Zeiterfassung, Einsatzplanung, Kalkulation, Abrechnung, DATEV und DSGVO."
      rows={ROWS}
      providerBlocks={PROVIDER_BLOCKS}
      faqs={FAQS}
      internalLinks={INTERNAL_LINKS}
    />
  );
}
