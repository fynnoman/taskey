import type { Metadata } from "next";
import FeaturesClient from "./features-client";
import BreadcrumbSchema from "@/components/BreadcrumbSchema"

export const metadata: Metadata = {
  title: "Funktionen – Taskey Betriebssoftware",
  description:
    "NFC-Zeiterfassung, Einsatzplanung, Angebote & Rechnungen – alle Funktionen von Taskey im Überblick. Made in Germany.",
  alternates: { canonical: "https://www.taskeyapp.com/features" },
  openGraph: {
    title: "Funktionen – Taskey Betriebssoftware",
    description:
      "NFC-Zeiterfassung, Einsatzplanung, Angebote & Rechnungen – alle Funktionen von Taskey im Überblick. Made in Germany.",
    url: "https://www.taskeyapp.com/features",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Funktionen", url: "https://www.taskeyapp.com/features" },
      ]} />
      <FeaturesClient />
    </>
  )
}
