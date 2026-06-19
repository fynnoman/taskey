import type { Metadata } from "next";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Über Taskey | Reinigungssoftware Made in Germany | Schulz & Stosse",
    description:
      "Taskey wurde von Fynn-Luca Schulz und Julian Stosse in Völklingen entwickelt. DSGVO-konform, deutsche Server, persönlicher Support. Seit 2024.",
    ogTitle: "Über Taskey | Reinigungssoftware Made in Germany",
    ogDescription:
      "Taskey wurde von Fynn-Luca Schulz und Julian Stosse in Völklingen entwickelt. DSGVO-konform, deutsche Server, persönlicher Support.",
    twitterTitle: "Über Taskey | Reinigungssoftware Made in Germany",
    twitterDescription:
      "Taskey wurde von Fynn-Luca Schulz und Julian Stosse in Völklingen entwickelt. DSGVO-konform, deutsche Server.",
  },
  en: {
    title: "About Taskey | Cleaning software made in Germany | Schulz & Stosse",
    description:
      "Taskey was built by Fynn-Luca Schulz and Julian Stosse in Völklingen. DSGVO-compliant, German servers, personal support. Since 2024.",
    ogTitle: "About Taskey | Cleaning software made in Germany",
    ogDescription:
      "Taskey was built by Fynn-Luca Schulz and Julian Stosse in Völklingen. DSGVO-compliant, German servers, personal support.",
    twitterTitle: "About Taskey | Cleaning software made in Germany",
    twitterDescription:
      "Taskey was built by Fynn-Luca Schulz and Julian Stosse in Völklingen. DSGVO-compliant, German servers.",
  },
  fr: {
    title: "À propos de Taskey | Logiciel de nettoyage Made in Germany | Schulz & Stosse",
    description:
      "Taskey a été développé par Fynn-Luca Schulz et Julian Stosse à Völklingen. Conforme DSGVO, serveurs allemands, support personnel. Depuis 2024.",
    ogTitle: "À propos de Taskey | Logiciel de nettoyage Made in Germany",
    ogDescription:
      "Taskey a été développé par Fynn-Luca Schulz et Julian Stosse à Völklingen. Conforme DSGVO, serveurs allemands, support personnel.",
    twitterTitle: "À propos de Taskey | Logiciel de nettoyage Made in Germany",
    twitterDescription:
      "Taskey a été développé par Fynn-Luca Schulz et Julian Stosse à Völklingen. Conforme DSGVO, serveurs allemands.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: COPY,
    locale: pickLocale(locale),
    path: "/about",
  });
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
