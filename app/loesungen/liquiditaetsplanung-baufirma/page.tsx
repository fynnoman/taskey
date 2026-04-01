import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Liquiditätsplanung Baufirma – Taskey',
  description: 'Liquiditätsplanung für Baufirmen digitalisieren. Taskey zeigt erwartete Zahlungseingänge und -ausgänge für eine sichere Finanzplanung.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/liquiditaetsplanung-baufirma' },
};

const data: LandingPageData = {
  badge: 'Liquiditätsplanung',
  headline: 'Liquiditätsplanung für',
  headlineHighlight: 'Baufirmen',
  subheadline: 'Immer wissen, wie viel Geld da ist.',
  heroDescription: 'Bauprojekte brauchen Vorfinanzierung. Taskey zeigt Ihnen, wann welche Zahlungen kommen und gehen – für eine sichere Liquiditätsplanung.',
  painPoints: [
    { icon: '💸', text: 'Liquiditätsengpässe wegen verspäteter Kundenzahlungen.' },
    { icon: '📊', text: 'Kein Überblick über kommende Ein- und Auszahlungen.' },
    { icon: '⚠️', text: 'Material muss vorfinanziert werden – reicht das Geld?' },
    { icon: '📅', text: 'Keine Vorausplanung – finanzielle Engpässe kommen überraschend.' },
  ],
  solutionTitle: 'Liquidität vorausschauend planen',
  solutionDescription: 'Taskey zeigt Ihnen, wie sich Ihre Liquidität in den nächsten Wochen und Monaten entwickelt.',
  solutionSteps: [
    { icon: '📊', title: 'Zahlungsströme analysieren', description: 'Erwartete Einnahmen und geplante Ausgaben übersichtlich darstellen.' },
    { icon: '📅', title: 'Vorausschau', description: 'Liquiditätsentwicklung für die nächsten Wochen und Monate prognostizieren.' },
    { icon: '⚠️', title: 'Engpässe erkennen', description: 'Frühzeitig gewarnt werden, wenn ein Liquiditätsengpass droht.' },
  ],
  ctaText: 'Jetzt Liquidität planen',
  featureHighlights: [
    { icon: '📊', title: 'Liquiditäts-Dashboard', description: 'Aktuelle Liquidität und Prognose auf einen Blick.' },
    { icon: '📅', title: 'Zahlungskalender', description: 'Alle erwarteten Ein- und Auszahlungen im Kalender.' },
    { icon: '⚠️', title: 'Engpass-Warnung', description: 'Automatische Warnung bei drohendem Liquiditätsengpass.' },
    { icon: '📈', title: 'Szenarienplanung', description: 'Was-wäre-wenn-Szenarien für verschiedene Geschäftsentwicklungen.' },
    { icon: '🧾', title: 'Abschlagsplanung', description: 'Abschlagsrechnungen optimal timen für stetige Einnahmen.' },
    { icon: '📋', title: 'Cashflow-Übersicht', description: 'Monatlicher Cashflow für bessere strategische Entscheidungen.' },
  ],
  closingHeadline: 'Finanzielle Sicherheit für Ihre Baufirma.',
  closingText: 'Taskey gibt Ihnen den Überblick über Ihre Liquidität – für sorgenfreies Wirtschaften.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
