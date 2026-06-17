import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iOS App für Reinigungsfirmen | NFC Zeiterfassung iPhone | Taskey",
  description:
    "Die Taskey App für iPhone & iPad: NFC-Zeiterfassung, Einsatzplan, Offline-Sync. Kostenlos im App Store. DSGVO-konform, Made in Germany.",
  alternates: {
    canonical: "https://www.taskeyapp.com/ios",
  },
  openGraph: {
    title: "iOS App für Reinigungsfirmen | NFC Zeiterfassung iPhone | Taskey",
    description:
      "Die Taskey App für iPhone & iPad: NFC-Zeiterfassung, Einsatzplan, Offline-Sync. Kostenlos im App Store.",
    url: "https://www.taskeyapp.com/ios",
    type: "website",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Taskey iOS App – NFC Zeiterfassung auf dem iPhone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iOS App für Reinigungsfirmen | NFC Zeiterfassung iPhone | Taskey",
    description:
      "Taskey App für iPhone & iPad: NFC-Zeiterfassung, Einsatzplan, Offline-Sync. Kostenlos im App Store.",
    images: ["/opengraph-image"],
  },
};

export default function IosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
