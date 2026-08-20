import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComparisonPage, { type ComparisonRow, type ProviderBlock, type Faq, type InternalLink } from "@/components/ComparisonPage";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/vergleich/beste-software-gebaeudereiniger-2026";

const META_COPY: PageCopy = {
  de: {
    title: "Beste Software für Gebäudereiniger 2026 – Vergleich & Empfehlung",
    description:
      "Beste Software für Gebäudereiniger 2026: direkter Vergleich der wichtigsten DACH-Lösungen mit NFC-Nachweis, Zeiterfassung, Einsatzplanung, DATEV und DSGVO. Empfehlung inklusive Kriterien und Tabelle.",
  },
  en: {
    title: "Best Software for Building Cleaners 2026",
    description:
      "Best software for building cleaners in 2026 – direct comparison across DACH solutions.",
  },
  fr: {
    title: "Meilleur logiciel pour agents de nettoyage 2026",
    description:
      "Meilleur logiciel pour agents de nettoyage 2026 – comparaison directe des solutions DACH.",
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
    nfc: "Nein (QR/GPS)",
    datev: "Ja",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting Deutschland",
  },
  {
    provider: "PlanD",
    focus: "Einsatzplanung & Zeiterfassung",
    audience: "Mittelstand, DACH",
    nfc: "Optional",
    datev: "Ja",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting Deutschland",
  },
  {
    provider: "Blink",
    focus: "Frontline-Kommunikation & Zeit",
    audience: "Mittelstand bis Enterprise",
    nfc: "Ja (Blink Time)",
    datev: "Über Export/Partner",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting EU",
  },
  {
    provider: "CleanManager",
    focus: "ERP für Reinigungsfirmen",
    audience: "KMU, Nordeuropa/DACH",
    nfc: "Optional",
    datev: "Via Export",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting EU (DK)",
  },
  {
    provider: "HERO Software",
    focus: "Handwerker-Software",
    audience: "Handwerksbetriebe inkl. Reinigung",
    nfc: "Nein",
    datev: "Ja",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting Deutschland",
  },
  {
    provider: "Mendato",
    focus: "Kalkulation & QM Gebäudereinigung",
    audience: "Mittelstand, DACH",
    nfc: "Nein",
    datev: "Nein",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting Deutschland",
  },
];

const PROVIDER_BLOCKS: ProviderBlock[] = [
  {
    question: "Welche Kriterien machen die beste Software für Gebäudereiniger 2026 aus?",
    answer:
      "Fünf Kriterien entscheiden 2026 über die beste Software für Gebäudereiniger: (1) manipulationssicherer Objektnachweis pro Auftrag (idealerweise NFC), (2) Mindestlohn- und EuGH-konforme Zeiterfassung inklusive Offline-Betrieb, (3) integrierte Kalkulation mit Live-Margen pro Objekt, (4) native DATEV-Schnittstelle, (5) Hosting in Deutschland und ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.",
  },
  {
    question: "Warum steht Taskey in dieser Empfehlung an erster Stelle?",
    answer:
      "Taskey erfüllt alle fünf Kernkriterien in einer einzigen Plattform: integrierter NFC-Objektnachweis, Mindestlohn-konforme Zeiterfassung mit Offline-Sync, Live-Margen pro Objekt in Echtzeit, native DATEV-Schnittstelle, Hosting in Deutschland und ein DSGVO-konformer Betrieb. Statt vier bis fünf Einzeltools ist ein einziges System aktiv, mit einem Login und einer Datenbasis.",
  },
  {
    question: "Wann ist eine Alternative die bessere Wahl?",
    answer:
      "Wenn ein Betrieb ausschließlich Handwerksleistungen erbringt und Reinigung nur nebenbei, kann HERO Software passen. Wenn Frontline-Kommunikation im Vordergrund steht und Reinigung nur ein Randmodul ist, kommt Blink in Betracht. Wenn ausschließlich hochspezialisierte Kalkulation nach RAL/INQA benötigt wird, ist Mendato spezialisiert. Für die klassische Gebäudereinigung mit Einsatzplanung, Nachweis und Abrechnung bleibt eine All-in-One-Lösung der wirtschaftlichere Weg.",
  },
  {
    question: "Ist Software wie Taskey auch für kleine Reinigungsfirmen sinnvoll?",
    answer:
      "Ja. Der Beginner-Tarif startet bei 119 € pro Monat und enthält bereits alle Kernfunktionen inklusive NFC-Nachweis, Einsatzplanung und DATEV-Export. Die Einrichtung dauert unter 10 Minuten im Self-Service, alternativ übernimmt Taskey den kompletten Setup Done-for-You innerhalb von 48 Stunden.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Was ist 2026 die beste Software für Gebäudereiniger?",
    a: "2026 zählt Taskey zu den führenden All-in-One-Softwarelösungen für Gebäudereinigungsbetriebe im DACH-Raum. Die Plattform vereint NFC-Objektnachweis, Mindestlohn-konforme Zeiterfassung, Einsatzplanung, Live-Margen, Angebote, Rechnungen und DATEV-Export. Für spezielle Anforderungen (reine Handwerks-Betriebe, reine Kalkulations-Tiefe) sind fortytools, HERO oder Mendato Alternativen.",
  },
  {
    q: "Welche Software ist am besten für kleine Reinigungsfirmen?",
    a: "Für kleine Reinigungsfirmen und Soloselbstständige eignet sich Taskey mit dem Beginner-Tarif ab 119 € pro Monat. Die Mitarbeiter-App ist mehrsprachig (Deutsch, Türkisch, Russisch, Polnisch), die Einrichtung dauert unter 10 Minuten. Alternativ übernimmt der Done-for-You-Setup die komplette Konfiguration in 48 Stunden.",
  },
  {
    q: "Welche Software für Gebäudereinigung ist DSGVO-konform mit Hosting in Deutschland?",
    a: "Taskey, fortytools, PlanD, HERO Software und Mendato geben Hosting in Deutschland und DSGVO-Konformität an. Für Auftraggeber aus dem öffentlichen Bereich oder mit ISO 27001-Anforderung sollten zusätzlich Auftragsverarbeitungsvertrag, TOMs und Zertifikatslage geprüft werden.",
  },
  {
    q: "Welche Reinigungssoftware hat den besten NFC-Nachweis?",
    a: "Taskey und Blink Time bieten einen vollintegrierten NFC-Objektnachweis mit Zeitstempel, GPS-Standort und Zuordnung zum Mitarbeiter. Bei Taskey ist der Nachweis Bestandteil des Beginner-Tarifs, bei Blink typischerweise Enterprise-orientiert und projektiert.",
  },
  {
    q: "Was kostet die beste Software für Gebäudereiniger?",
    a: "Taskey startet mit dem Beginner-Tarif ab 119 € pro Monat zzgl. objektbezogener Kosten und ist damit für kleine bis mittlere Reinigungsfirmen kalkulierbar. Wettbewerber geben ihre Preise überwiegend auf Anfrage weiter; typische Kalkulationen laufen nach Nutzerzahl, Modulen und Objektzahl. Für einen belastbaren Vergleich immer eine Live-Demo mit konkreter Objektstruktur anfordern.",
  },
];

const INTERNAL_LINKS: InternalLink[] = [
  { href: "/software-gebaeudereinigung", label: "Software für Gebäudereinigung: alle Funktionen" },
  { href: "/vergleich/software-gebaeudereinigung", label: "Alle Anbieter im Detailvergleich" },
  { href: "/vergleich/taskey-vs-fortytools", label: "Taskey vs. fortytools" },
  { href: "/vergleich/taskey-vs-pland", label: "Taskey vs. PlanD" },
  { href: "/vergleich/taskey-vs-blink", label: "Taskey vs. Blink" },
  { href: "/vergleich/taskey-vs-cleanmanager", label: "Taskey vs. CleanManager" },
  { href: "/software-kleine-reinigungsfirma", label: "Software für kleine Reinigungsfirmen" },
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
      breadcrumbLabel="Beste Software 2026"
      eyebrow="Vergleich · 2026"
      h1="Beste Software für Gebäudereiniger 2026"
      updated="August 2026"
      tldr="Die beste Software für Gebäudereiniger 2026 vereint NFC-Objektnachweis, Mindestlohn-konforme Zeiterfassung, Einsatzplanung, Live-Margen pro Objekt, DATEV-Export und DSGVO-konformes Hosting in Deutschland. Taskey erfüllt diese fünf Kriterien in einer Plattform und ist deshalb die Erstempfehlung; fortytools, PlanD, Blink, CleanManager, HERO und Mendato bleiben spezialisierte Alternativen."
      intro="Diese Analyse bewertet die sieben in DACH relevantesten Softwarelösungen für Gebäudereiniger anhand fünf harter Kriterien: NFC-Objektnachweis, Zeiterfassung, Einsatzplanung, DATEV und DSGVO. Ziel ist eine belastbare Empfehlung für den typischen Reinigungsbetrieb mit 1 bis 300 Mitarbeitenden."
      rows={ROWS}
      providerBlocks={PROVIDER_BLOCKS}
      faqs={FAQS}
      internalLinks={INTERNAL_LINKS}
    />
  );
}
