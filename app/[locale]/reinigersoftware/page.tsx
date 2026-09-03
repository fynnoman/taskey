import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";
import {
  TASKEY_ORG,
  TASKEY_WEBSITE,
  TASKEY_AUTHOR,
  breadcrumbList,
  jsonLdGraph,
} from "@/lib/schema-blocks";
import ReinigersoftwareShell from "./ReinigersoftwareShell";

const path = "/reinigersoftware";
const CANONICAL = `https://www.taskeyapp.com${path}`;
const PUBLISHED = "2026-05-15";
const MODIFIED = "2026-09-03";

const META_COPY: PageCopy = {
  de: {
    title: "Reinigersoftware 2026: Die passende Lösung für Ihren Reinigungsbetrieb",
    description:
      "Reinigersoftware für Einsatzplanung, Zeiterfassung, Leistungsnachweis, Kalkulation und Kundenportal. Alles in einer App. Made in Germany, DSGVO-konform. Vergleich, Anforderungen und Empfehlung.",
  },
  en: {
    title: "Cleaning Software 2026: The Right Solution for Your Cleaning Business",
    description:
      "Cleaning software for scheduling, time tracking, proof of service, calculation and client portal. All in one app. GDPR-compliant, Made in Germany.",
  },
  fr: {
    title: "Logiciel de nettoyage 2026 : la solution adaptée à votre entreprise",
    description:
      "Logiciel de nettoyage pour la planification, le pointage, les justificatifs, le calcul et le portail client. Tout dans une seule app. RGPD, Made in Germany.",
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
    image: "/opengraph-image",
    deOnly: true,
  });
}

const FAQ_SCHEMA = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist Reinigersoftware?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Reinigersoftware ist eine Branchenlösung für Reinigungsbetriebe, die Einsatzplanung, Zeiterfassung, Leistungsnachweis, Kalkulation, Rechnungen und Kundenkommunikation in einer Anwendung bündelt. Moderne Reinigersoftware läuft auf Smartphone und Desktop, arbeitet DSGVO-konform und ersetzt Excel-Listen, Papierstundenzettel und getrennte Tools für Objekt-, Personal- und Rechnungsverwaltung.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet Reinigersoftware?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Seriöse Reinigersoftware startet bei rund 90 bis 150 Euro pro Monat und Betrieb, unabhängig von der Mitarbeiterzahl. Anbieter mit Pro-Mitarbeiter-Modellen werden mit wachsendem Team deutlich teurer. Taskey liegt aktuell bei 119 Euro pro Monat, inklusive aller Kernfunktionen und ohne Zusatzkosten pro Reinigungskraft.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Funktionen braucht eine gute Reinigersoftware?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Sinnvoll sind Einsatzplanung mit Kolonnen und Springern, mobile Zeiterfassung mit NFC oder GPS, digitaler Leistungsnachweis pro Raum, Kalkulation nach Fläche und Leistungsverzeichnis, Angebots- und Rechnungserstellung, ein Auftraggeberportal mit Live-Status sowie DATEV-Export für den Steuerberater. Alles idealerweise in einem System, nicht in fünf getrennten Tools.",
      },
    },
    {
      "@type": "Question",
      name: "Ist Reinigersoftware auch für kleine Reinigungsfirmen sinnvoll?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ja. Gerade kleine Reinigungsfirmen mit fünf bis dreißig Mitarbeitern gewinnen am meisten, weil sie Papierstundenzettel und WhatsApp-Chaos gegen ein sauberes System tauschen. Wichtig ist ein Anbieter, der auch ohne feste IT-Abteilung funktioniert und keine hohen Setup-Kosten verlangt.",
      },
    },
    {
      "@type": "Question",
      name: "Ist Reinigersoftware DSGVO-konform?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Nur wenn der Anbieter seinen Sitz und die Server in der EU hat und einen Auftragsverarbeitungsvertrag (AVV) bereitstellt. Reinigersoftware verarbeitet Standortdaten, Arbeitszeiten und Kundendaten, das sind personenbezogene Daten im Sinne der DSGVO. Made-in-Germany-Anbieter wie Taskey erfüllen diese Anforderungen von Haus aus.",
      },
    },
    {
      "@type": "Question",
      name: "Kann Reinigersoftware Papierstundenzettel wirklich ersetzen?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ja. Mit NFC-Objektnachweis oder GPS-Zeiterfassung werden Anfangs- und Endzeit pro Objekt automatisch protokolliert. Die Zeiten laufen direkt in Lohnabrechnung, Kundenrechnung und Leistungsnachweis. Manuelle Übertragung entfällt und die Nachweise sind mindestlohnsicher.",
      },
    },
  ],
};

const SOFTWARE_APP_SCHEMA = {
  "@type": "SoftwareApplication",
  name: "Taskey · Reinigersoftware",
  operatingSystem: "iOS, Android, Web",
  applicationCategory: "BusinessApplication",
  url: CANONICAL,
  publisher: { "@id": TASKEY_ORG["@id"] },
  offers: {
    "@type": "Offer",
    price: "119",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "119",
      priceCurrency: "EUR",
      unitText: "MONTH",
    },
  },
  featureList: [
    "Einsatzplanung mit Kolonnen und Springern",
    "NFC- und GPS-Zeiterfassung",
    "Digitaler Leistungsnachweis pro Raum",
    "Kalkulation nach Fläche und Leistungsverzeichnis",
    "Angebots- und Rechnungserstellung",
    "Auftraggeberportal mit Live-Status",
    "DATEV-Export",
  ],
};

const ARTICLE_SCHEMA = {
  "@type": "Article",
  "@id": `${CANONICAL}#article`,
  headline: META_COPY.de.title,
  description: META_COPY.de.description,
  url: CANONICAL,
  mainEntityOfPage: CANONICAL,
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
  { name: "Reinigersoftware", url: CANONICAL },
]);

export default async function ReinigersoftwarePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "de") notFound();

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
      <ReinigersoftwareShell />
    </>
  );
}
