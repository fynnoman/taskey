import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComparisonPage, { type ComparisonRow, type ProviderBlock, type Faq, type InternalLink } from "@/components/ComparisonPage";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/vergleich/taskey-vs-cleanmanager";

const META_COPY: PageCopy = {
  de: {
    title: "Taskey vs. CleanManager – Vergleich Reinigungssoftware",
    description:
      "Taskey und CleanManager im direkten Vergleich: Made-in-Germany All-in-One vs. skandinavisches ERP. NFC-Nachweis, Zeit, Planung, DATEV, Preis und DSGVO für DACH-Betriebe.",
  },
  en: {
    title: "Taskey vs. CleanManager – Cleaning Software Compared",
    description: "Taskey and CleanManager compared for cleaning companies.",
  },
  fr: {
    title: "Taskey vs. CleanManager – comparatif logiciel nettoyage",
    description: "Taskey et CleanManager comparés pour les entreprises de nettoyage.",
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
    focus: "All-in-One Branchensoftware Gebäudereinigung, Made in Germany",
    audience: "1-Mann bis Enterprise, DACH",
    nfc: "Ja, integriert",
    datev: "Ja, native Schnittstelle",
    priceFrom: "119 €/Monat",
    gdpr: "DSGVO, Hosting Deutschland",
    isTaskey: true,
  },
  {
    provider: "CleanManager",
    focus: "ERP für Reinigungsfirmen (Skandinavien-Ursprung)",
    audience: "KMU, Nordeuropa / DACH",
    nfc: "Optional (Terminal/GPS)",
    datev: "Via Export",
    priceFrom: "Auf Anfrage",
    gdpr: "DSGVO, Hosting EU (DK)",
  },
];

const PROVIDER_BLOCKS: ProviderBlock[] = [
  {
    question: "Für wen eignet sich Taskey besser als CleanManager?",
    answer:
      "Taskey ist Made in Germany, gehostet in Deutschland, mit nativer DATEV-Schnittstelle und deutscher Rechts- und Steuerlogik (§17 MiLoG, EuGH-Zeiterfassungsurteil, GoBD). Für DACH-Betriebe fällt die Reibung mit lokalen Anforderungen deutlich niedriger aus als bei einem aus Nordeuropa portierten ERP.",
  },
  {
    question: "Für wen eignet sich CleanManager besser als Taskey?",
    answer:
      "CleanManager passt zu Betrieben, die bereits im dänischen oder skandinavischen Umfeld arbeiten oder als DACH-Ableger einer nordeuropäischen Reinigungsgruppe gegründet wurden. Der ERP-Kern ist in Nordeuropa etabliert und kann in gemischten Länder-Setups Sinn ergeben.",
  },
  {
    question: "Wo liegen die konkreten Unterschiede in der Praxis?",
    answer:
      "Taskey liefert NFC-Objektnachweis, Live-Margen und DATEV-Native in einer Plattform ab 119 €/Monat. CleanManager ist als ERP eher modular aufgebaut, NFC läuft über Terminals oder Zusatzhardware, DATEV-Anbindung über Exporte. Für rein deutsche Reinigungsfirmen ist Taskey typischerweise die direktere Wahl, weil die Prozesse ohne Anpassungsschicht funktionieren.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Was ist besser: Taskey oder CleanManager?",
    a: "Für deutsche Reinigungsbetriebe mit DATEV-Anbindung, deutscher Zeitgesetzgebung und lokalem Support ist Taskey die passendere Wahl. Für Betriebe mit skandinavischem Hintergrund oder gemischten Länder-Setups kann CleanManager weiterhin sinnvoll sein.",
  },
  {
    q: "Hat CleanManager einen NFC-Objektnachweis?",
    a: "CleanManager unterstützt Nachweise über Terminals, GPS-Check-in und optional NFC-Zusatzhardware. Ein voll integrierter, softwareseitiger NFC-Objektnachweis wie bei Taskey ist typischerweise nicht Standard.",
  },
  {
    q: "Was kostet Taskey im Vergleich zu CleanManager?",
    a: "Taskey startet transparent bei 119 €/Monat zzgl. objektbezogener Kosten. CleanManager kalkuliert Preise auf Anfrage, meist pro Nutzer und Modul. Für kleinere DACH-Reinigungsfirmen ist Taskey in aller Regel deutlich niedrigschwelliger.",
  },
  {
    q: "Ist CleanManager DSGVO-konform?",
    a: "CleanManager gibt DSGVO-Konformität an und hostet innerhalb der EU, überwiegend in Dänemark. Für Auftraggeber, die explizit Hosting in Deutschland fordern, ist Taskey die einfachere Wahl.",
  },
];

const INTERNAL_LINKS: InternalLink[] = [
  { href: "/vergleich/software-gebaeudereinigung", label: "Alle Anbieter im Vergleich" },
  { href: "/software-gebaeudereinigung", label: "Taskey: alle Funktionen" },
  { href: "/leistungsnachweis-gebaeudereinigung", label: "Leistungsnachweis Gebäudereinigung" },
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
      breadcrumbLabel="Taskey vs. CleanManager"
      eyebrow="Vergleich · 1-vs-1"
      h1="Taskey vs. CleanManager: Made in Germany oder skandinavisches ERP?"
      updated="August 2026"
      tldr="Taskey ist eine Made-in-Germany All-in-One-Software für Gebäudereinigung mit NFC-Objektnachweis, nativer DATEV-Schnittstelle und Hosting in Deutschland ab 119 €/Monat. CleanManager stammt aus Dänemark und ist als ERP für Reinigungsfirmen in Nordeuropa etabliert; in DACH bleibt es typischerweise die zweite Wahl, wenn deutsche Steuer- und Zeitlogik durchgängig integriert sein soll."
      intro="Dieser Vergleich stellt Taskey und CleanManager direkt gegenüber. Beide sind ausgewachsene Reinigungssoftware-Lösungen, unterscheiden sich aber in der geografischen und regulatorischen Ausrichtung."
      rows={ROWS}
      providerBlocks={PROVIDER_BLOCKS}
      faqs={FAQS}
      internalLinks={INTERNAL_LINKS}
    />
  );
}
