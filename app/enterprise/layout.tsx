import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Reinigungssoftware | Für Betriebe ab 50 Mitarbeitende | Taskey",
  description:
    "Taskey Enterprise für große Reinigungsunternehmen: API-Zugang, SSO, individuelle Integrationen und dedizierter Account-Manager. Jetzt anfragen.",
  alternates: {
    canonical: "https://www.taskeyapp.com/enterprise",
  },
  openGraph: {
    title: "Enterprise Reinigungssoftware | Für Betriebe ab 50 Mitarbeitende | Taskey",
    description:
      "Taskey Enterprise: API-Zugang, SSO, individuelle Integrationen und dedizierter Account-Manager für große Reinigungsunternehmen.",
    url: "https://www.taskeyapp.com/enterprise",
    type: "website",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Taskey Enterprise – Reinigungssoftware für große Betriebe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Reinigungssoftware | Für Betriebe ab 50 Mitarbeitende | Taskey",
    description:
      "API-Zugang, SSO, individuelle Integrationen und dedizierter Account-Manager.",
    images: ["/opengraph-image"],
  },
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
