import type { Metadata } from "next";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "iOS App für Reinigungsfirmen | NFC Zeiterfassung iPhone | Taskey",
    description:
      "Die Taskey App für iPhone & iPad: NFC-Zeiterfassung, Einsatzplan, Offline-Sync. Kostenlos im App Store. DSGVO-konform, Made in Germany.",
    ogTitle: "iOS App für Reinigungsfirmen | NFC Zeiterfassung iPhone | Taskey",
    ogDescription:
      "Die Taskey App für iPhone & iPad: NFC-Zeiterfassung, Einsatzplan, Offline-Sync. Kostenlos im App Store.",
    twitterTitle: "iOS App für Reinigungsfirmen | NFC Zeiterfassung iPhone | Taskey",
    twitterDescription:
      "Taskey App für iPhone & iPad: NFC-Zeiterfassung, Einsatzplan, Offline-Sync. Kostenlos im App Store.",
  },
  en: {
    title: "iOS app for cleaning companies | NFC time tracking iPhone | Taskey",
    description:
      "The Taskey app for iPhone & iPad: NFC time tracking, schedule, offline sync. Free on the App Store. DSGVO-compliant, Made in Germany.",
    ogTitle: "iOS app for cleaning companies | NFC time tracking iPhone | Taskey",
    ogDescription:
      "The Taskey app for iPhone & iPad: NFC time tracking, schedule, offline sync. Free on the App Store.",
    twitterTitle: "iOS app for cleaning companies | NFC time tracking iPhone | Taskey",
    twitterDescription:
      "Taskey app for iPhone & iPad: NFC time tracking, schedule, offline sync. Free on the App Store.",
  },
  fr: {
    title: "Application iOS pour entreprises de nettoyage | Pointage NFC iPhone | Taskey",
    description:
      "L'application Taskey pour iPhone & iPad : pointage NFC, planning, synchronisation hors-ligne. Gratuit sur l'App Store. Conforme DSGVO, Made in Germany.",
    ogTitle: "Application iOS pour entreprises de nettoyage | Pointage NFC iPhone | Taskey",
    ogDescription:
      "L'application Taskey pour iPhone & iPad : pointage NFC, planning, synchronisation hors-ligne. Gratuit sur l'App Store.",
    twitterTitle: "Application iOS pour entreprises de nettoyage | Pointage NFC iPhone | Taskey",
    twitterDescription:
      "Application Taskey pour iPhone & iPad : pointage NFC, planning, synchronisation hors-ligne. Gratuit sur l'App Store.",
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
    path: "/ios",
  });
}

export default function IosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
