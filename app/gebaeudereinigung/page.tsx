import type { Metadata } from "next";
import ReinigungClient from "./ReinigungClient";

export const metadata: Metadata = {
  title: "Reinigungssoftware für Gebäudereiniger – NFC-Nachweise, Zeiterfassung & Einsatzplanung | Taskey",
  description:
    "Taskey ist die führende Reinigungssoftware für Gebäudereiniger im DACH-Raum. NFC-Leistungsnachweise, automatische Zeiterfassung, Einsatzplanung, Qualitätskontrolle. DSGVO-konform. 3 Monate kostenlos testen!",
  keywords: [
    "Reinigungssoftware",
    "Gebäudereinigung Software",
    "Software für Gebäudereiniger",
    "Gebäudereinigungssoftware",
    "Zeiterfassung Reinigung",
    "NFC Leistungsnachweis Reinigung",
    "Einsatzplanung Gebäudereinigung",
    "Reinigungssoftware DACH",
    "Unterhaltsreinigung Software",
    "Qualitätskontrolle Reinigung",
    "Gebäudereinigung App",
    "Reinigungsfirma Software",
    "Cleaning Software Germany",
  ],
  alternates: { canonical: "https://www.taskeyapp.com/gebaeudereinigung" },
  openGraph: {
    title: "Taskey – Die Reinigungssoftware für Gebäudereiniger",
    description:
      "NFC-Leistungsnachweise, automatische Zeiterfassung, Einsatzplanung. Für Unterhaltsreinigung, Glasreinigung, Industriereinigung. Made in Germany.",
    url: "https://www.taskeyapp.com/gebaeudereinigung",
    siteName: "Taskey",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/logobittt.png", width: 1200, height: 630, alt: "Taskey Reinigungssoftware" }],
  },
};

export default function GebaeudereinigungPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Taskey Reinigungssoftware",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "3 Monate kostenlos testen",
    },
    description:
      "Die führende Reinigungssoftware für Gebäudereiniger im DACH-Raum. NFC-Leistungsnachweise, Zeiterfassung, Einsatzplanung und Qualitätskontrolle.",
    author: { "@type": "Organization", name: "Taskey", url: "https://www.taskeyapp.com" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ReinigungClient />
    </>
  );
}
