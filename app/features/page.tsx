import type { Metadata } from "next";
import FeaturesClient from "./features-client";

export const metadata: Metadata = {
  title: "Funktionen – Taskey Betriebssoftware",
  description:
    "NFC-Nachweise, Zeiterfassung, Einsatzplanung & mehr – alle Funktionen von Taskey für Handwerk, Reinigung & Facility Management.",
  alternates: { canonical: "https://www.taskeyapp.com/features" },
  openGraph: {
    title: "Funktionen – Taskey Betriebssoftware",
    description:
      "NFC-Nachweise, Zeiterfassung, Einsatzplanung & mehr – alle Funktionen von Taskey.",
    url: "https://www.taskeyapp.com/features",
  },
};

export default function FeaturesPage() {
  return <FeaturesClient />;
}
