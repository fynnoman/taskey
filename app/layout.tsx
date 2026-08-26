import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { WebVitals } from "./web-vitals";
import { GlobalStructuredData } from "@/components/StructuredData";
import AnalyticsScript from "@/components/AnalyticsScript";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taskeyapp.com"),
  title: {
    default: "Taskey – Betriebssoftware für Reinigung & Facility Management",
    template: "%s | Taskey",
  },
  description:
    "Taskey ist die einfachste Betriebssoftware für Gebäudereinigung und Facility Management im DACH-Raum. Zeiterfassung, NFC-Nachweise, Einsatzplanung, Live-Margen – alles in einer App. DSGVO-konform. Kostenlosen Account erstellen!",
  authors: [{ name: "Taskey" }],
  creator: "Taskey",
  publisher: "Taskey",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.taskeyapp.com",
    siteName: "Taskey",
    title: "Taskey - Betriebssoftware für Reinigung & Facility Management",
    description:
      "Zeiterfassung, NFC-Nachweise, Einsatzplanung & Live-Margen für Gebäudereinigung und Facility Management. Made in Germany, DSGVO-konform.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Taskey Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taskey - Betriebssoftware für Reinigung & Facility Management",
    description:
      "Zeiterfassung, NFC-Nachweise, Einsatzplanung & Live-Margen für Gebäudereinigung und Facility Management. Made in Germany, DSGVO-konform.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.taskeyapp.com",
    languages: {
      "de-DE": "https://www.taskeyapp.com",
      "en-US": "https://www.taskeyapp.com/en",
      "fr-FR": "https://www.taskeyapp.com/fr",
      "x-default": "https://www.taskeyapp.com",
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
      "facebook-domain-verification": process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION ?? "",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Locale set by middleware (x-locale header). Default to "de" for safety.
  const h = await headers();
  const locale = h.get("x-locale") ?? "de";

  return (
    <html lang={locale}>
      <head>
        <link rel="preload" href="/hero-background.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="preconnect" href="https://mission-control.vars-development.com" />
        <link rel="preconnect" href="https://signup.taskeyapp.com" />
        <link rel="preconnect" href="https://taskey.vars-development.com" />
        <link rel="dns-prefetch" href="https://mission-control.vars-development.com" />
        <link rel="dns-prefetch" href="https://signup.taskeyapp.com" />
        <link rel="dns-prefetch" href="https://taskey.vars-development.com" />
        <GlobalStructuredData />
      </head>
      <body className="antialiased">
        <WebVitals />
        <AnalyticsScript />
        {children}
      </body>
    </html>
  );
}
