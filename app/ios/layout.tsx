import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskey iOS App – Handwerker- & Reinigungssoftware fürs iPhone",
  description:
    "Die Taskey iOS App für Handwerker, Monteure und Reinigungskräfte: Zeiterfassung, NFC-Nachweise, Aufträge & Team-Chat – direkt auf dem iPhone. Kostenlos im App Store.",
  keywords: [
    "Taskey iOS App",
    "Handwerker App iPhone",
    "Reinigungs-App iPhone",
    "Zeiterfassung iPhone App",
    "NFC App Handwerk",
    "Monteur App iOS",
  ],
  alternates: {
    canonical: "https://www.taskeyapp.com/ios",
  },
  openGraph: {
    title: "Taskey iOS App – Handwerker- & Reinigungssoftware fürs iPhone",
    description:
      "Zeiterfassung, NFC-Nachweise, Aufträge & Team-Chat – direkt auf dem iPhone.",
    url: "https://www.taskeyapp.com/ios",
    type: "website",
  },
};

export default function IosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
