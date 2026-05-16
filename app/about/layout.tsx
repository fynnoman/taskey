import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Taskey – Betriebssoftware Made in Germany | Schulz & Stosse GbR",
  description:
    "Taskey wird in Deutschland entwickelt – von der Schulz & Stosse GbR. Unsere Mission: Eine Software, die Gebäudereinigung und Facility Management wirklich versteht.",
  alternates: {
    canonical: "https://www.taskeyapp.com/about",
  },
  openGraph: {
    title: "Über Taskey – Betriebssoftware Made in Germany",
    description: "Die Mission hinter Taskey: Eine Software für Gebäudereinigung und Facility Management.",
    url: "https://www.taskeyapp.com/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
