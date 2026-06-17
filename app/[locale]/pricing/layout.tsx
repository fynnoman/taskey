import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise Gebäudereinigungssoftware | Ab 119€/Monat | Taskey",
  description:
    "Transparente Preise für Reinigungssoftware: Beginner ab 119€, Professional ab 315€, Business ab 429€/Monat. Unbegrenzte Mitarbeiter. Täglich kündbar.",
  alternates: {
    canonical: "https://www.taskeyapp.com/pricing",
  },
  openGraph: {
    title: "Preise Gebäudereinigungssoftware | Ab 119€/Monat | Taskey",
    description:
      "Transparente Preise für Reinigungssoftware: Beginner ab 119€, Professional ab 315€, Business ab 429€/Monat. Unbegrenzte Mitarbeiter.",
    url: "https://www.taskeyapp.com/pricing",
    type: "website",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Taskey Preise – Gebäudereinigungssoftware ab 119 € pro Monat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preise Gebäudereinigungssoftware | Ab 119€/Monat | Taskey",
    description:
      "Beginner ab 119€, Professional ab 315€, Business ab 429€/Monat. Unbegrenzte Mitarbeiter.",
    images: ["/opengraph-image"],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
