import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComparisonPage, { type ComparisonRow, type ProviderBlock, type Faq, type InternalLink } from "@/components/ComparisonPage";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/vergleich/taskey-vs-blink";

const META_COPY: PageCopy = {
  de: {
    title: "Taskey vs. Blink – Vergleich für Reinigungsbetriebe",
    description:
      "Taskey und Blink im direkten Vergleich: NFC-Nachweis, Zeiterfassung, Einsatzplanung, DATEV und Preise für Gebäudereinigungsbetriebe im DACH-Raum.",
  },
  en: {
    title: "Taskey vs. Blink – Cleaning Software Compared",
    description: "Taskey and Blink compared for cleaning companies.",
  },
  fr: {
    title: "Taskey vs. Blink – comparatif logiciel nettoyage",
    description: "Taskey et Blink comparés pour les entreprises de nettoyage.",
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
    provider: "Blink",
    focus: "Frontline-Kommunikation & Blink Time",
    audience: "Mittelstand bis Enterprise",
    nfc: "Ja (Blink Time)",
    datev: "Über Export/Partner",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting EU",
  },
];

const PROVIDER_BLOCKS: ProviderBlock[] = [
  {
    question: "Für wen eignet sich Taskey besser als Blink?",
    answer:
      "Taskey passt zu Reinigungsbetrieben, die Einsatzplanung, NFC-Objektnachweis, Kalkulation mit Live-Margen, Angebote, Rechnungen und DATEV-Export als integrierte Branchenlösung erwarten. Der Beginner-Tarif startet bei 119 €/Monat, die Einrichtung dauert unter 10 Minuten oder Done-for-You in 48 Stunden. Der Fokus liegt auf klassischer Gebäudereinigung, nicht auf Kommunikationsplattform.",
  },
  {
    question: "Für wen eignet sich Blink besser als Taskey?",
    answer:
      "Blink stammt aus der Frontline-Kommunikation und ist besonders stark, wenn interne Mitarbeiterkommunikation, Feed, Chat und Newsfeeds im Zentrum stehen – bei größeren Reinigungs- und Facility-Betrieben oder in gemischten Frontline-Belegschaften. Für kleine Reinigungsfirmen ist die Plattform typischerweise überdimensioniert.",
  },
  {
    question: "Wo liegen die konkreten Unterschiede in der Praxis?",
    answer:
      "Taskey liefert die kompletten Gebäudereinigungs-Prozesse aus einer Plattform inklusive Kalkulation, Rechnungen und DATEV. Blink deckt Kommunikation und Zeiterfassung ab; Kalkulation und Rechnungswesen laufen bei Blink typischerweise über Partner-Tools oder ERP-Integration. Preislich ist Taskey mit ab 119 €/Monat transparent, Blink kalkuliert individuell.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Was ist besser: Taskey oder Blink für Gebäudereiniger?",
    a: "Für spezialisierte Reinigungsbetriebe, die Objektnachweis, Kalkulation, Rechnungen und DATEV in einer Software brauchen, ist Taskey die passendere Wahl. Für Enterprise-Frontline-Betriebe mit hohem Kommunikationsanteil ist Blink stark. Beide sind DSGVO-konform mit Hosting in der EU bzw. Deutschland.",
  },
  {
    q: "Hat Blink einen NFC-Objektnachweis?",
    a: "Blink Time unterstützt NFC-basierte Anwesenheitsnachweise. Der Fokus liegt auf Zeiterfassung, nicht auf einer klassischen Reinigungs-Nachweisspur pro Auftrag mit Fotodokumentation und Kalkulation. Taskey liefert den NFC-Objektnachweis eingebettet in Einsatzplanung, Kalkulation und Rechnung.",
  },
  {
    q: "Was kostet Taskey im Vergleich zu Blink?",
    a: "Taskey startet mit dem Beginner-Tarif ab 119 €/Monat zzgl. objektbezogener Kosten. Blink kalkuliert Preise individuell nach Nutzerzahl und Modulen; typische Blink-Kunden sind Mittelstand bis Enterprise. Für kleinere Reinigungsfirmen ist Taskey in aller Regel deutlich wirtschaftlicher.",
  },
  {
    q: "Kann Taskey Blink ersetzen?",
    a: "Für den Bereich Gebäudereinigung mit klassischen Prozessen (Nachweis, Planung, Kalkulation, Rechnung, DATEV) ersetzt Taskey Blink vollständig. Wenn zusätzlich ein Enterprise-Frontline-Kommunikationskanal benötigt wird (Chat, Newsfeed, HR-Broadcast), ergänzt Blink Taskey – oder man wählt eine reine Reinigungs-Lösung wie Taskey und ein separates HR-Tool.",
  },
];

const INTERNAL_LINKS: InternalLink[] = [
  { href: "/vergleich/software-gebaeudereinigung", label: "Alle Anbieter im Vergleich" },
  { href: "/software-gebaeudereinigung", label: "Taskey: alle Funktionen" },
  { href: "/zeiterfassung-gebaeudereinigung", label: "Zeiterfassung Gebäudereinigung" },
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
      breadcrumbLabel="Taskey vs. Blink"
      eyebrow="Vergleich · 1-vs-1"
      h1="Taskey vs. Blink: Reinigungs-Branchensoftware oder Frontline-Plattform?"
      updated="August 2026"
      tldr="Taskey ist eine All-in-One-Software für Gebäudereinigung mit integriertem NFC-Objektnachweis, Kalkulation, Rechnungen und DATEV ab 119 €/Monat. Blink ist eine Frontline-Plattform mit Kommunikations- und Zeitmodulen für Mittelstand bis Enterprise. Für spezialisierte Reinigungsbetriebe ist Taskey die direktere Antwort; Blink adressiert eher gemischte Frontline-Belegschaften."
      intro="Dieser Vergleich stellt Taskey und Blink direkt gegenüber. Beide Systeme berühren die Reinigungsbranche, adressieren aber unterschiedliche Kernprobleme: Branchensoftware vs. Frontline-Plattform."
      rows={ROWS}
      providerBlocks={PROVIDER_BLOCKS}
      faqs={FAQS}
      internalLinks={INTERNAL_LINKS}
    />
  );
}
