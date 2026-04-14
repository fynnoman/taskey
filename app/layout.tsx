import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.taskeyapp.com'),
  title: {
    default: "Taskey - Reinigungssoftware fuer Gebaeudereiniger im DACH-Raum | Made in Germany",
    template: "%s | Taskey"
  },
  description: "Taskey ist die fuehrende Reinigungssoftware fuer Gebaeudereiniger im DACH-Raum. NFC-Leistungsnachweise, automatische Zeiterfassung, Einsatzplanung & Qualitaetskontrolle. DSGVO-konform. Jetzt 14 Tage kostenlos testen!",
  keywords: ["Reinigungssoftware", "Gebaeudereinigung Software", "Zeiterfassung Reinigung", "Einsatzplanung Gebaeudereinigung", "NFC Leistungsnachweis", "Qualitaetskontrolle Reinigung", "Reinigungssoftware DACH", "DSGVO-konforme Software", "Software fuer Gebaeudereiniger", "Unterhaltsreinigung Software"],
  authors: [{ name: "Taskey" }],
  creator: "Taskey",
  publisher: "Taskey",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.taskeyapp.com",
    siteName: "Taskey",
    title: "Taskey - Reinigungssoftware fuer Gebaeudereiniger im DACH-Raum",
    description: "NFC-Leistungsnachweise, automatische Zeiterfassung, Einsatzplanung & Qualitaetskontrolle fuer Gebaeudereiniger. Made in Germany, DSGVO-konform.",
    images: [
      {
        url: "/logobittt.png",
        width: 1200,
        height: 630,
        alt: "Taskey Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taskey - Reinigungssoftware fuer Gebaeudereiniger im DACH-Raum",
    description: "NFC-Leistungsnachweise, automatische Zeiterfassung, Einsatzplanung & Qualitaetskontrolle. Made in Germany, DSGVO-konform.",
    images: ["/logobittt.png"],
  },
  alternates: {
    canonical: "https://www.taskeyapp.com",
  },
  verification: {
    google: "your-google-verification-code-here",
  },
  icons: {
    icon: '/logobittt.png',
    shortcut: '/logobittt.png',
    apple: '/logobittt.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preload" href="/Gemini_Generated_Image_u0ytjru0ytjru0yt.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="preconnect" href="https://mission-control.vars-development.com" />
        <link rel="preconnect" href="https://signup.vars-development.com" />
        <link rel="preconnect" href="https://taskey.vars-development.com" />
        <link rel="dns-prefetch" href="https://mission-control.vars-development.com" />
        <link rel="dns-prefetch" href="https://signup.vars-development.com" />
        <link rel="dns-prefetch" href="https://taskey.vars-development.com" />
      </head>
      <body className="antialiased">
        <script defer src="https://mission-control.vars-development.com/umami/script.js" data-website-id="15a75075-86a0-4e36-8cd2-7cd83d860d5c"></script>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
