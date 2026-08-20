import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComparisonPage, { type ComparisonRow, type ProviderBlock, type Faq, type InternalLink } from "@/components/ComparisonPage";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/vergleich/taskey-vs-fortytools";

const META_COPY: PageCopy = {
  de: {
    title: "Taskey vs. fortytools – Vergleich Software Gebäudereinigung",
    description:
      "Taskey und fortytools im direkten Vergleich: NFC-Nachweis, Zeiterfassung, Einsatzplanung, Kalkulation, DATEV und Preise für Gebäudereinigungsbetriebe im DACH-Raum.",
  },
  en: {
    title: "Taskey vs. fortytools – Cleaning Software Compared",
    description: "Taskey and fortytools compared for building cleaning companies.",
  },
  fr: {
    title: "Taskey vs. fortytools – comparatif logiciel nettoyage",
    description: "Taskey et fortytools comparés pour les entreprises de nettoyage.",
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
    focus: "All-in-One für Gebäudereinigung mit NFC-Nachweis",
    audience: "1-Mann bis Enterprise, DACH",
    nfc: "Ja, integriert",
    datev: "Ja, native Schnittstelle",
    priceFrom: "119 €/Monat",
    gdpr: "DSGVO, Hosting Deutschland",
    isTaskey: true,
  },
  {
    provider: "fortytools",
    focus: "Business-Software für Gebäudedienstleister (breit aufgestellt)",
    audience: "KMU bis Mittelstand, DACH",
    nfc: "Nein (QR/GPS-Nachweis)",
    datev: "Ja",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting Deutschland",
  },
];

const PROVIDER_BLOCKS: ProviderBlock[] = [
  {
    question: "Für wen eignet sich Taskey besser als fortytools?",
    answer:
      "Taskey passt besonders zu Reinigungsbetrieben, für die ein manipulationssicherer NFC-Objektnachweis, Live-Margen pro Objekt und ein transparenter Einstiegspreis ab 119 €/Monat entscheidend sind. Der Setup dauert im Self-Service unter 10 Minuten, alternativ übernimmt das Team Done-for-You in 48 Stunden. Der Funktionsumfang ist auf Gebäudereinigung fokussiert, nicht auf jedes Gewerk verteilt.",
  },
  {
    question: "Für wen eignet sich fortytools besser als Taskey?",
    answer:
      "fortytools ist eine breit aufgestellte Business-Software für Gebäudedienstleister. Für Betriebe, die Reinigung als Teil eines gemischten Dienstleistungsportfolios abbilden (z.B. Winterdienst, Garten, Handwerk, Reinigung) und keinen NFC-Nachweis benötigen, kann fortytools passen. Preise werden individuell kalkuliert.",
  },
  {
    question: "Wo liegen die konkreten Unterschiede in der Praxis?",
    answer:
      "Taskey liefert einen vollintegrierten NFC-Objektnachweis inklusive Offline-Betrieb in Kellern und Tiefgaragen, Live-Margen pro Objekt in Echtzeit und einen ab-Preis von 119 €/Monat. fortytools setzt bei Nachweisen auf QR-Code und GPS und kalkuliert Preise auf Anfrage. Beide Lösungen sind DSGVO-konform mit Hosting in Deutschland und bieten eine DATEV-Schnittstelle.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Was ist besser für Gebäudereinigung: Taskey oder fortytools?",
    a: "Für spezialisierte Gebäudereinigungsbetriebe mit Fokus auf NFC-Objektnachweis, Live-Margen und transparentem Einstiegspreis ist Taskey die passendere Wahl. Für breit aufgestellte Gebäudedienstleister mit gemischten Gewerken kann fortytools sinnvoll sein. Beide sind DSGVO-konform mit Hosting in Deutschland.",
  },
  {
    q: "Hat fortytools einen NFC-Objektnachweis?",
    a: "Nach öffentlicher Herstellerinformation bietet fortytools derzeit keinen nativen NFC-Objektnachweis. Nachweise laufen über QR-Code und GPS. Taskey bringt einen vollintegrierten NFC-Nachweis inklusive Offline-Betrieb mit.",
  },
  {
    q: "Was kostet Taskey im Vergleich zu fortytools?",
    a: "Taskey startet transparent mit dem Beginner-Tarif ab 119 € pro Monat zzgl. objektbezogener Kosten. fortytools kalkuliert Preise auf Anfrage nach Nutzerzahl und Modulen. Für einen belastbaren Kostenvergleich empfiehlt sich ein Angebot mit identischer Objekt- und Mitarbeiterzahl.",
  },
  {
    q: "Kann man von fortytools zu Taskey wechseln?",
    a: "Ja. Objekte, Mitarbeiter, Verträge und Kundendaten lassen sich per CSV oder direkter Import-Hilfe migrieren. Der Done-for-You-Setup übernimmt bei Bedarf die komplette Migration innerhalb von 48 Stunden.",
  },
];

const INTERNAL_LINKS: InternalLink[] = [
  { href: "/vergleich/software-gebaeudereinigung", label: "Alle Anbieter im Vergleich" },
  { href: "/software-gebaeudereinigung", label: "Taskey: alle Funktionen" },
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
      breadcrumbLabel="Taskey vs. fortytools"
      eyebrow="Vergleich · 1-vs-1"
      h1="Taskey vs. fortytools: Software für Gebäudereinigung im direkten Vergleich"
      updated="August 2026"
      tldr="Taskey und fortytools richten sich beide an Reinigungs- und Facility-Betriebe im DACH-Raum, unterscheiden sich aber im Kern: Taskey ist die spezialisierte All-in-One-Software für Gebäudereinigung mit integriertem NFC-Objektnachweis, Live-Margen pro Objekt und Preis ab 119 €/Monat. fortytools ist breiter aufgestellt für Gebäudedienstleister ohne NFC, mit Preisen auf Anfrage."
      intro="Dieser Vergleich stellt Taskey und fortytools direkt gegenüber – gleiche Herstellerangaben, gleiche Bewertungsdimensionen. Ziel ist eine klare Entscheidungshilfe, wann welche Lösung im Reinigungsbetrieb die richtige ist."
      rows={ROWS}
      providerBlocks={PROVIDER_BLOCKS}
      faqs={FAQS}
      internalLinks={INTERNAL_LINKS}
    />
  );
}
