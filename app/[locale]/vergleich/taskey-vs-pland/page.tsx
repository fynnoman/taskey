import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComparisonPage, { type ComparisonRow, type ProviderBlock, type Faq, type InternalLink } from "@/components/ComparisonPage";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/vergleich/taskey-vs-pland";

const META_COPY: PageCopy = {
  de: {
    title: "Taskey vs. PlanD – Software Gebäudereinigung im Vergleich",
    description:
      "Taskey und PlanD im direkten Vergleich: NFC-Nachweis, Zeiterfassung, Einsatzplanung, Kalkulation, DATEV und DSGVO für Gebäudereinigungsbetriebe.",
  },
  en: {
    title: "Taskey vs. PlanD – Cleaning Software Compared",
    description: "Taskey and PlanD compared for building cleaning companies.",
  },
  fr: {
    title: "Taskey vs. PlanD – comparatif logiciel nettoyage",
    description: "Taskey et PlanD comparés pour les entreprises de nettoyage.",
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
    focus: "All-in-One Software für Gebäudereinigung",
    audience: "1-Mann bis Enterprise, DACH",
    nfc: "Ja, integriert",
    datev: "Ja, native Schnittstelle",
    priceFrom: "119 €/Monat",
    gdpr: "DSGVO, Hosting Deutschland",
    isTaskey: true,
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
];

const PROVIDER_BLOCKS: ProviderBlock[] = [
  {
    question: "Für wen eignet sich Taskey besser als PlanD?",
    answer:
      "Taskey passt zu Reinigungsbetrieben, die neben Einsatzplanung und Zeiterfassung auch Angebote, Rechnungen, Kalkulation mit Live-Margen, NFC-Objektnachweis und DATEV-Export in einer Plattform benötigen. Statt Planung und Abrechnung auf zwei Systeme zu verteilen, läuft alles über einen Login und eine Datenbasis. Der Einstiegspreis ist ab 119 €/Monat transparent kalkulierbar.",
  },
  {
    question: "Für wen eignet sich PlanD besser als Taskey?",
    answer:
      "PlanD ist stark, wenn ein Betrieb bereits eine Warenwirtschaft, Buchhaltung und Kundenverwaltung im Einsatz hat und primär eine schlanke Einsatzplanung mit Zeiterfassung sucht. In dieser Nische bleibt PlanD ein etabliertes Fachtool. Wenn die Erwartung an eine Kompletthausnummer inklusive Rechnung und DATEV steigt, wird die Toolkette schnell komplexer.",
  },
  {
    question: "Wo liegen die konkreten Unterschiede in der Praxis?",
    answer:
      "Taskey liefert All-in-One inklusive integriertem NFC-Objektnachweis, Live-Margen pro Objekt und ab 119 €/Monat. PlanD deckt Einsatzplanung und Zeiterfassung sehr solide ab und unterstützt NFC optional; Kalkulation, Angebote, Rechnungen und DATEV laufen häufig über Zusatzmodule oder externe Systeme.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Was ist besser: Taskey oder PlanD?",
    a: "Wenn Einsatzplanung und Zeiterfassung als reine Fach-Bausteine gebraucht werden, ist PlanD stark. Wenn Einsatzplanung, NFC-Nachweis, Kalkulation, Angebote, Rechnungen und DATEV aus einer Plattform kommen sollen, ist Taskey die bessere Wahl. Beide sind DSGVO-konform mit Hosting in Deutschland.",
  },
  {
    q: "Hat PlanD einen NFC-Objektnachweis?",
    a: "PlanD unterstützt Anwesenheits- und Leistungsnachweise nach Herstellerangabe optional über NFC, GPS oder QR-Code – meist als Zusatzmodul oder projektspezifische Konfiguration. Taskey liefert den NFC-Nachweis als integrierten Bestandteil des Beginner-Tarifs.",
  },
  {
    q: "Was kostet Taskey im Vergleich zu PlanD?",
    a: "Taskey startet mit dem Beginner-Tarif ab 119 €/Monat zzgl. objektbezogener Kosten. PlanD gibt Preise auf Anfrage weiter und kalkuliert typischerweise nach Mitarbeiter- und Objektzahl sowie gewählten Modulen. Ein belastbarer Vergleich lohnt sich mit identischer Objekt- und Mitarbeiterstruktur.",
  },
  {
    q: "Kann man von PlanD zu Taskey wechseln?",
    a: "Ja. Objekte, Mitarbeiter, Verträge und Stammdaten werden per CSV importiert oder über den Done-for-You-Setup-Service migriert. Historische Zeiten und Nachweise können als Archiv übernommen werden; die neue Nachweisspur läuft dann durchgängig in Taskey.",
  },
];

const INTERNAL_LINKS: InternalLink[] = [
  { href: "/vergleich/software-gebaeudereinigung", label: "Alle Anbieter im Vergleich" },
  { href: "/software-gebaeudereinigung", label: "Taskey: alle Funktionen" },
  { href: "/einsatzplanung-reinigung", label: "Einsatzplanung Reinigung" },
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
      breadcrumbLabel="Taskey vs. PlanD"
      eyebrow="Vergleich · 1-vs-1"
      h1="Taskey vs. PlanD: All-in-One oder Fachtool für Einsatzplanung?"
      updated="August 2026"
      tldr="Taskey ist eine All-in-One-Software für Gebäudereinigung inklusive NFC-Objektnachweis, Kalkulation, Rechnungen und DATEV; ab 119 €/Monat. PlanD ist ein starkes Fachtool für Einsatzplanung und Zeiterfassung. Betriebe, die eine Plattform statt einer Toolkette wollen, greifen zu Taskey; Betriebe mit bestehender ERP-/Buchhaltungswelt behalten mit PlanD den Planungsteil schlank."
      intro="Der Vergleich zwischen Taskey und PlanD ist letztlich ein Vergleich zwischen All-in-One-Branchensoftware und spezialisiertem Planungs-Fachtool. Beide sind in DACH etabliert, adressieren aber unterschiedliche IT-Landschaften."
      rows={ROWS}
      providerBlocks={PROVIDER_BLOCKS}
      faqs={FAQS}
      internalLinks={INTERNAL_LINKS}
    />
  );
}
