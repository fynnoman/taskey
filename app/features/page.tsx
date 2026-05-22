import type { Metadata } from "next";
import FeaturesClient from "./features-client";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Funktionen | NFC Zeiterfassung, Einsatzplanung & DATEV-Export | Taskey",
  description:
    "Alle Funktionen von Taskey: NFC-Objektnachweis, automatische Zeiterfassung, Schichtplanung, Auftraggeber-Portal und DATEV-Export. Jetzt kostenlos testen.",
  alternates: { canonical: "https://www.taskeyapp.com/features" },
  openGraph: {
    title: "Funktionen | NFC Zeiterfassung, Einsatzplanung & DATEV-Export | Taskey",
    description:
      "Alle Funktionen von Taskey: NFC-Objektnachweis, automatische Zeiterfassung, Schichtplanung, Auftraggeber-Portal und DATEV-Export.",
    url: "https://www.taskeyapp.com/features",
    type: "website",
    locale: "de_DE",
    siteName: "Taskey",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Taskey Funktionen – NFC Zeiterfassung und Einsatzplanung" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funktionen | NFC Zeiterfassung, Einsatzplanung & DATEV-Export | Taskey",
    description: "NFC-Objektnachweis, Zeiterfassung, Schichtplanung, Auftraggeber-Portal und DATEV-Export.",
    images: ["/opengraph-image"],
  },
};

const featuresFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Wie funktioniert die NFC-Zeiterfassung in Taskey?", "acceptedAnswer": { "@type": "Answer", "text": "Am Objekt wird ein wetterfester NFC-Tag platziert. Die Reinigungskraft hält das Smartphone daran und Taskey erfasst Zeitstempel, GPS-Standort und Mitarbeiter automatisch – ohne dass eine App-Bedienung nötig ist." } },
    { "@type": "Question", "name": "Kann ich Einsatzpläne für mehrere Kolonnen gleichzeitig erstellen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Taskey unterstützt mehrere Kolonnen, Schichten und wiederkehrende Touren parallel. Vertretungen, Krankmeldungen und kurzfristige Änderungen lassen sich in Sekunden umplanen." } },
    { "@type": "Question", "name": "Funktioniert der DATEV-Export aus Taskey direkt mit dem Steuerberater?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Taskey exportiert Lohn- und Buchungsdaten im DATEV-Standardformat. Ihr Steuerberater kann die Datei direkt importieren – ohne Nachbearbeitung." } },
    { "@type": "Question", "name": "Wie sieht der Auftraggeber-Zugang (Taskey Share) aus?", "acceptedAnswer": { "@type": "Answer", "text": "Jeder Auftraggeber bekommt einen eigenen Login mit Live-Übersicht aller Einsätze, Nachweise und Beanstandungen für seine Objekte. Das reduziert Rückfragen und schafft Vertrauen." } },
    { "@type": "Question", "name": "Lassen sich Angebote und Rechnungen aus Taskey heraus erstellen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vollständig. Aus dem Einsatzplan oder Objekt heraus lassen sich Angebote, Wartungsverträge und Rechnungen mit einem Klick erzeugen, versenden und nachverfolgen." } },
    { "@type": "Question", "name": "Wie viele Mitarbeitende kann ich in Taskey verwalten?", "acceptedAnswer": { "@type": "Answer", "text": "Unbegrenzt. Alle Tarife enthalten unbegrenzt viele Mitarbeitende – Sie zahlen nur pro aktivem Objekt. Damit skaliert Taskey vom Soloselbstständigen bis zum Großbetrieb." } },
  ],
};

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Funktionen", url: "https://www.taskeyapp.com/features" },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresFaqSchema) }} />
      <FeaturesClient />
    </>
  );
}
