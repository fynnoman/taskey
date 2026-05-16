import type { Metadata } from "next";
import NFCClient from "./nfc-client";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "NFC-Zeiterfassung – Taskey",
  description:
    "Mit NFC-Tags Arbeitszeiten sekundenschnell erfassen. Manipulationssicher, wetterfest und DSGVO-konform. Made in Germany.",
  alternates: { canonical: "https://www.taskeyapp.com/nfc" },
  openGraph: {
    title: "NFC-Zeiterfassung – Taskey",
    description:
      "Mit NFC-Tags Arbeitszeiten sekundenschnell erfassen. Manipulationssicher, wetterfest und DSGVO-konform. Made in Germany.",
    url: "https://www.taskeyapp.com/nfc",
  },
};

export default function NFCPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "NFC-Zeiterfassung", url: "https://www.taskeyapp.com/nfc" },
      ]} />
      <NFCClient />
    </>
  )
}
