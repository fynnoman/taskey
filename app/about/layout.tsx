import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Taskey – Betriebssoftware Made in Germany | Schulz & Stosse GbR",
  description:
    "Taskey wird in Deutschland entwickelt – von der Schulz & Stosse GbR. Unsere Mission: Eine Software, die Handwerk, Bau und Gebäudereinigung wirklich versteht.",
  keywords: [
    "Taskey über uns",
    "Schulz Stosse GbR",
    "Handwerkersoftware Made in Germany",
    "Betriebssoftware Hersteller",
    "Taskey Team",
  ],
  alternates: {
    canonical: "https://www.taskeyapp.com/about",
  },
  openGraph: {
    title: "Über Taskey – Betriebssoftware Made in Germany",
    description: "Die Mission hinter Taskey: Eine Software für Handwerk, Bau und Reinigung.",
    url: "https://www.taskeyapp.com/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
