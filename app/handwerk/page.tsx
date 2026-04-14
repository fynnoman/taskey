import type { Metadata } from "next";
import HandwerkClient from "./HandwerkClient";

export const metadata: Metadata = {
  title: "Taskey - Die App fuer Handwerksbetriebe in DACH | Zeiterfassung, NFC-Werkzeug-Tracking & Live-Margen",
  description:
    "Automatische Zeiterfassung, NFC-Werkzeug-Tracking, Live-Margen fuer Handwerksbetriebe. Elektriker, SHK, Dachdecker, Maler, Tischler, Bauunternehmen. Made in Germany. 14 Tage kostenlos testen.",
  keywords: [
    "Handwerkersoftware",
    "Handwerker App",
    "Zeiterfassung Handwerk",
    "Werkzeug-Tracking",
    "Baustellensoftware",
    "Software Elektriker",
    "Software SHK",
    "Handwerksbetrieb Software",
    "Baustellenmanagement",
    "NFC Werkzeug",
    "Handwerk DACH",
    "Auftragsplanung Handwerk",
  ],
  alternates: {
    canonical: "https://www.taskeyapp.com/handwerk",
  },
  openGraph: {
    title: "Taskey - Die App fuer Handwerksbetriebe in DACH",
    description:
      "Automatische Zeiterfassung, NFC-Werkzeug-Tracking, Live-Margen fuer Handwerksbetriebe. Made in Germany. 14 Tage kostenlos testen.",
    url: "https://www.taskeyapp.com/handwerk",
    siteName: "Taskey",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/logobittt.png", width: 1200, height: 630, alt: "Taskey fuer Handwerksbetriebe" }],
  },
};

export default function HandwerkPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Taskey fuer Handwerk",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "11.79",
      priceCurrency: "EUR",
      description: "Ab 11,79 Euro pro Mitarbeiter / Monat. 14 Tage kostenlos testen.",
    },
    description:
      "Handwerkersoftware fuer automatische Zeiterfassung, NFC-Werkzeug-Tracking, Auftragsplanung und Live-Margen. Fuer Elektriker, SHK, Dachdecker, Maler, Tischler und Bauunternehmen im DACH-Raum.",
    author: { "@type": "Organization", name: "Taskey", url: "https://taskeyapp.com" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HandwerkClient />
    </>
  );
}
