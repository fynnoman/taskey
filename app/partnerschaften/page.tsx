import type { Metadata } from "next";
import PartnerschaftenClient from "./partnerschaften-client";

export const metadata: Metadata = {
  title: "Partner werden – Taskey Partnerprogramm",
  description:
    "Werde Taskey-Partner und verdiene Provision. Für Steuerberater, Softwareanbieter und Branchenverbände im DACH-Raum.",
  alternates: { canonical: "https://www.taskeyapp.com/partnerschaften" },
  openGraph: {
    title: "Partner werden – Taskey Partnerprogramm",
    description:
      "Werde Taskey-Partner und verdiene Provision. Für Steuerberater, Softwareanbieter und Branchenverbände im DACH-Raum.",
    url: "https://www.taskeyapp.com/partnerschaften",
  },
};

export default function PartnerschaftenPage() {
  return <PartnerschaftenClient />;
}
