import type { Metadata } from "next";
import PartnerschaftenClient from "./partnerschaften-client";

export const metadata: Metadata = {
  title: "Partnerschaften – Taskey Betriebssoftware",
  description:
    "Werden Sie Taskey-Partner: Empfehlungsprogramm, Reseller & Integrationspartner für Handwerk, Reinigung & Facility Management.",
  alternates: { canonical: "https://www.taskeyapp.com/partnerschaften" },
  openGraph: {
    title: "Partnerschaften – Taskey Betriebssoftware",
    description:
      "Empfehlungsprogramm, Reseller & Integrationspartner – jetzt Partner werden.",
    url: "https://www.taskeyapp.com/partnerschaften",
  },
};

export default function PartnerschaftenPage() {
  return <PartnerschaftenClient />;
}
