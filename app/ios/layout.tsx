import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskey iOS App – Reinigungssoftware & Facility Management fürs iPhone",
  description:
    "Die Taskey iOS App für Reinigungskräfte und Facility-Management-Teams: Zeiterfassung, NFC-Nachweise, Aufträge & Team-Chat – direkt auf dem iPhone. Kostenlos im App Store.",
  alternates: {
    canonical: "https://www.taskeyapp.com/ios",
  },
  openGraph: {
    title: "Taskey iOS App – Reinigungssoftware & Facility Management fürs iPhone",
    description:
      "Zeiterfassung, NFC-Nachweise, Aufträge & Team-Chat – direkt auf dem iPhone.",
    url: "https://www.taskeyapp.com/ios",
    type: "website",
  },
};

export default function IosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
