import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Liquiditätsplanung Baufirma – Taskey',
  description: 'Liquiditätsplanung für Baufirmen digitalisieren. Taskey zeigt erwartete Zahlungseingänge und -ausgänge für eine sichere Finanzplanung.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/liquiditaetsplanung-baufirma' },
};

const data: LandingPageData = {
  badge: 'Liquiditätsplanung',
  headline: 'Liquiditätsplanung für',
  headlineHighlight: 'Baufirmen',
  subheadline: 'Immer wissen, wie viel Geld da ist.',
  heroDescription: 'Bauprojekte brauchen Vorfinanzierung. Taskey zeigt Ihnen, wann welche Zahlungen kommen und gehen – für eine sichere Liquiditätsplanung.',
  painPoints: [
    { text: 'Liquiditätsengpässe wegen verspäteter Kundenzahlungen.' },
    { text: 'Kein Überblick über kommende Ein- und Auszahlungen.' },
    { text: 'Material muss vorfinanziert werden – reicht das Geld?' },
    { text: 'Keine Vorausplanung – finanzielle Engpässe kommen überraschend.' },
  ],
  solutionTitle: 'Liquidität vorausschauend planen',
  solutionDescription: 'Taskey zeigt Ihnen, wie sich Ihre Liquidität in den nächsten Wochen und Monaten entwickelt.',
  solutionSteps: [
    { title: 'Zahlungsströme analysieren', description: 'Erwartete Einnahmen und geplante Ausgaben übersichtlich darstellen.' },
    { title: 'Vorausschau', description: 'Liquiditätsentwicklung für die nächsten Wochen und Monate prognostizieren.' },
    { title: 'Engpässe erkennen', description: 'Frühzeitig gewarnt werden, wenn ein Liquiditätsengpass droht.' },
  ],
  ctaText: 'Jetzt Liquidität planen',
  featureHighlights: [
    { title: 'Liquiditäts-Dashboard', description: 'Aktuelle Liquidität und Prognose auf einen Blick.' },
    { title: 'Zahlungskalender', description: 'Alle erwarteten Ein- und Auszahlungen im Kalender.' },
    { title: 'Engpass-Warnung', description: 'Automatische Warnung bei drohendem Liquiditätsengpass.' },
    { title: 'Szenarienplanung', description: 'Was-wäre-wenn-Szenarien für verschiedene Geschäftsentwicklungen.' },
    { title: 'Abschlagsplanung', description: 'Abschlagsrechnungen optimal timen für stetige Einnahmen.' },
    { title: 'Cashflow-Übersicht', description: 'Monatlicher Cashflow für bessere strategische Entscheidungen.' },
  ],
  closingHeadline: 'Finanzielle Sicherheit für Ihre Baufirma.',
  closingText: 'Taskey gibt Ihnen den Überblick über Ihre Liquidität – für sorgenfreies Wirtschaften.',
  relatedLinks: [
      {
          href: '/loesungen/einnahmen-ausgaben-handwerker',
          label: 'Einnahmen & Ausgaben',
          description: 'Die Basis jeder Liquiditätsplanung – alle Geldströme im Blick.'
      },
      {
          href: '/loesungen/buchhaltung-handwerksbetrieb',
          label: 'Buchhaltung Handwerk',
          description: 'Alle Finanzdaten an einem Ort – für bessere Planung.'
      },
      {
          href: '/loesungen/rechnungen-nachverfolgen-handwerksbetrieb',
          label: 'Rechnungen nachverfolgen',
          description: 'Offene Rechnungen tracken und Zahlungseingänge planen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
