import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import ReinigungsappHero from "@/components/reinigungsapp/Hero";
import ReinigungsappFeatures from "@/components/reinigungsapp/Features";
import ReinigungsappCTA from "@/components/reinigungsapp/CTA";
import ReinigungsappFAQ from "@/components/reinigungsapp/FAQ";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";
import {
  TASKEY_ORG,
  TASKEY_WEBSITE,
  TASKEY_AUTHOR,
  breadcrumbList,
  jsonLdGraph,
} from "@/lib/schema-blocks";

const path = "/reinigungsapp";
const CANONICAL = `https://www.taskeyapp.com${path}`;

const META_COPY: PageCopy = {
  de: {
    title: "Reinigungsapp | NFC Zeiterfassung, Einsatzplanung & Live-Margen | Taskey",
    description:
      "Die Reinigungsapp für Ihren Betrieb: NFC-Zeiterfassung, Einsatzplanung, Angebote, Rechnungen, DATEV-Export und Live-Margen. Alles in einer App. DSGVO-konform, Made in Germany. Kostenlos starten.",
    ogTitle: "Reinigungsapp – Die App für professionelle Reinigungsbetriebe",
    ogDescription:
      "Zeiterfassung per NFC, Einsatzplanung, Rechnungen und Live-Margen in einer Reinigungsapp. DSGVO-konform, Made in Germany.",
  },
  en: { title: "", description: "" },
  fr: { title: "", description: "" },
};

const PUBLISHED = "2026-06-01";
const MODIFIED = "2026-09-03";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") {
    return { robots: { index: false, follow: false } };
  }
  return buildMetadata({
    copyByLocale: META_COPY,
    locale: pickLocale(locale),
    path,
    type: "website",
    deOnly: true,
  });
}

const FAQ_SCHEMA = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist eine Reinigungsapp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine Reinigungsapp bündelt Einsatzplanung, mobile Zeiterfassung, Leistungsnachweis, Angebote, Rechnungen und Auftraggeber-Kommunikation in einer einzigen mobilen Anwendung. Taskey ist eine solche Reinigungsapp, entwickelt für Reinigungsbetriebe im DACH-Raum. Alles läuft auf dem Handy, offline-fähig, mehrsprachig, DSGVO-konform.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet die Reinigungsapp Taskey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taskey startet mit einem kostenlosen Account (ohne Kreditkarte). Die bezahlten Tarife beginnen ab 69 € pro Monat für Einzelunternehmer, 119 € pro Monat für Kleinbetriebe und gehen bis 429 € pro Monat für größere Betriebe. Alle Kernfunktionen sind in jedem Tarif enthalten, es gibt keine versteckten Zusatzkosten pro Reinigungskraft.",
      },
    },
    {
      "@type": "Question",
      name: "Funktioniert die Reinigungsapp auch offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Taskey funktioniert vollständig offline. Zeitbuchungen, NFC-Scans und Fotos werden lokal gespeichert und automatisch synchronisiert, sobald wieder Netz verfügbar ist. Damit läuft die App auch in Kellern, Tiefgaragen und Objekten ohne Empfang.",
      },
    },
    {
      "@type": "Question",
      name: "Ist die Reinigungsapp DSGVO-konform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Alle Daten liegen ausschließlich auf deutschen Servern, werden verschlüsselt übertragen und ein Auftragsverarbeitungsvertrag (AVV) wird bereitgestellt. Die NFC-Zeiterfassung erfüllt zusätzlich die Mindestlohn-Dokumentationspflicht nach §17 MiLoG.",
      },
    },
    {
      "@type": "Question",
      name: "Können neue Reinigungskräfte die App ohne Schulung nutzen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Die Mitarbeiter-App ist bewusst so gestaltet, dass sie ohne Schulung funktioniert. Ein Antippen des NFC-Tags reicht, um Zeit und Standort zu erfassen. Die App ist mehrsprachig verfügbar (Deutsch, Türkisch, Russisch, Polnisch u.a.), so dass jede Kraft in der eigenen Sprache arbeitet.",
      },
    },
  ],
};

const SOFTWARE_APP_SCHEMA = {
  "@type": "SoftwareApplication",
  name: "Taskey · Reinigungsapp",
  operatingSystem: "iOS, Android, Web",
  applicationCategory: "BusinessApplication",
  url: CANONICAL,
  publisher: { "@id": `${TASKEY_ORG["@id"]}` },
  offers: {
    "@type": "Offer",
    price: "69",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "69",
      priceCurrency: "EUR",
      unitText: "MONTH",
    },
  },
  featureList: [
    "NFC-Zeiterfassung",
    "Einsatzplanung",
    "Leistungsnachweis",
    "Angebote und Rechnungen",
    "DATEV-Export",
    "Live-Margen",
    "Offline-Modus",
    "Mehrsprachige Mitarbeiter-App",
  ],
};

const ARTICLE_SCHEMA = {
  "@type": "WebPage",
  "@id": `${CANONICAL}#webpage`,
  url: CANONICAL,
  name: META_COPY.de.title,
  description: META_COPY.de.description,
  inLanguage: "de-DE",
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  isPartOf: { "@id": "https://www.taskeyapp.com/#website" },
  about: { "@id": TASKEY_ORG["@id"] },
  author: { "@id": TASKEY_AUTHOR["@id"] },
  publisher: { "@id": TASKEY_ORG["@id"] },
};

const BREADCRUMB = breadcrumbList([
  { name: "Home", url: "https://www.taskeyapp.com" },
  { name: "Reinigungsapp", url: CANONICAL },
]);

export default async function ReinigungsappPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "de") {
    notFound();
  }

  const graph = jsonLdGraph(
    TASKEY_ORG,
    TASKEY_WEBSITE,
    TASKEY_AUTHOR,
    ARTICLE_SCHEMA,
    SOFTWARE_APP_SCHEMA,
    FAQ_SCHEMA,
    BREADCRUMB,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: graph }}
      />
      <main>
        <ReinigungsappHero />
        <ReinigungsappFeatures />
        <ReinigungsappFAQ />
        <ReinigungsappCTA />
      </main>
    </>
  );
}
