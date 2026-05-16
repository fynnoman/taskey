import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NFC Zeiterfassung & Leistungsnachweis – Taskey für Reinigung & Facility Management",
  description:
    "NFC-Tags für Zeiterfassung, Objekt-Check-in und revisionssicheren Leistungsnachweis. Mitarbeiter tappen – Taskey dokumentiert. DSGVO-konform, Made in Germany.",
  alternates: {
    canonical: "https://www.taskeyapp.com/nfc",
  },
  openGraph: {
    title: "NFC Zeiterfassung & Leistungsnachweis – Taskey",
    description:
      "Mitarbeiter tappen – Taskey dokumentiert. Revisionssicher, DSGVO-konform.",
    url: "https://www.taskeyapp.com/nfc",
    type: "website",
  },
};

export default function NfcLayout({ children }: { children: React.ReactNode }) {
  return children;
}
