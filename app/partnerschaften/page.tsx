import type { Metadata } from "next";
import PartnerschaftenClient from "./partnerschaften-client";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Partner werden | Reinigungssoftware empfehlen & verdienen | Taskey",
  description:
    "Werden Sie Taskey-Partner und verdienen Sie dauerhaft an jeder Empfehlung. Für Berater, Verbände und Softwareanbieter im Reinigungsbereich.",
  alternates: { canonical: "https://www.taskeyapp.com/partnerschaften" },
  openGraph: {
    title: "Partner werden | Reinigungssoftware empfehlen & verdienen | Taskey",
    description:
      "Werden Sie Taskey-Partner und verdienen Sie dauerhaft an jeder Empfehlung. Für Berater, Verbände und Softwareanbieter.",
=======
  title: "Partnerschaften – Taskey Betriebssoftware",
  description:
    "Werden Sie Taskey-Partner: Empfehlungsprogramm, Reseller & Integrationspartner für Handwerk, Reinigung & Facility Management.",
  alternates: { canonical: "https://www.taskeyapp.com/partnerschaften" },
  openGraph: {
    title: "Partnerschaften – Taskey Betriebssoftware",
    description:
      "Empfehlungsprogramm, Reseller & Integrationspartner – jetzt Partner werden.",
>>>>>>> 7e326fd (Fix enterprise-client export name)
    url: "https://www.taskeyapp.com/partnerschaften",
    type: "website",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Taskey Partnerprogramm für Reinigungssoftware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner werden | Reinigungssoftware empfehlen & verdienen | Taskey",
    description:
      "Werden Sie Taskey-Partner und verdienen Sie dauerhaft an jeder Empfehlung.",
    images: ["/opengraph-image"],
  },
};

export default function PartnerschaftenPage() {
  return <PartnerschaftenClient />;
}
