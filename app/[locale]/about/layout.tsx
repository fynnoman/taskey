import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Taskey | Reinigungssoftware Made in Germany | Schulz & Stosse",
  description:
    "Taskey wurde von Fynn-Luca Schulz und Julian Stosse in Völklingen entwickelt. DSGVO-konform, deutsche Server, persönlicher Support. Seit 2024.",
  alternates: {
    canonical: "https://www.taskeyapp.com/about",
  },
  openGraph: {
    title: "Über Taskey | Reinigungssoftware Made in Germany",
    description:
      "Taskey wurde von Fynn-Luca Schulz und Julian Stosse in Völklingen entwickelt. DSGVO-konform, deutsche Server, persönlicher Support.",
    url: "https://www.taskeyapp.com/about",
    type: "website",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Team hinter Taskey – Reinigungssoftware aus Völklingen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Über Taskey | Reinigungssoftware Made in Germany",
    description:
      "Taskey wurde von Fynn-Luca Schulz und Julian Stosse in Völklingen entwickelt. DSGVO-konform, deutsche Server.",
    images: ["/opengraph-image"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
