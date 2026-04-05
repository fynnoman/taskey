import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Einnahmen Ausgaben Handwerker – Taskey',
  description: 'Einnahmen und Ausgaben als Handwerker einfach verwalten. Taskey gibt Ihnen den finanziellen Überblick – ohne BWL-Studium.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/einnahmen-ausgaben-handwerker' },
};

const data: LandingPageData = {
  badge: 'Einnahmen & Ausgaben',
  headline: 'Einnahmen & Ausgaben als',
  headlineHighlight: 'Handwerker',
  subheadline: 'den Überblick behalten.',
  heroDescription: 'Was kommt rein, was geht raus? Taskey gibt Ihnen den finanziellen Überblick über Ihren Handwerksbetrieb – einfach, klar und ohne Buchhaltungswissen.',
  painPoints: [
    { text: 'Keine Ahnung, ob der Betrieb diesen Monat Gewinn oder Verlust macht.' },
    { text: 'Belege und Rechnungen in Schuhkartons und E-Mail-Postfächern.' },
    { text: 'Der Steuerberater bekommt die Unterlagen viel zu spät.' },
    { text: 'Überraschende Steuernachzahlungen, weil die Zahlen nicht stimmen.' },
  ],
  solutionTitle: 'Finanzen einfach im Blick',
  solutionDescription: 'Taskey macht Ihre Einnahmen-Ausgaben-Übersicht so einfach wie eine App.',
  solutionSteps: [
    { title: 'Einnahmen erfassen', description: 'Rechnungen und Zahlungseingänge werden automatisch erfasst.' },
    { title: 'Ausgaben dokumentieren', description: 'Belege fotografieren und Ausgaben kategorisieren.' },
    { title: 'Überblick gewinnen', description: 'Dashboard zeigt Gewinn, Umsatz und offene Posten in Echtzeit.' },
  ],
  ctaText: 'Jetzt Finanzen im Griff haben',
  featureHighlights: [
    { title: 'Finanz-Dashboard', description: 'Einnahmen, Ausgaben und Gewinn auf einen Blick.' },
    { title: 'Beleg-Scan', description: 'Belege fotografieren und automatisch zuordnen lassen.' },
    { title: 'Kategorisierung', description: 'Ausgaben automatisch in Kategorien sortieren.' },
    { title: 'Monatsvergleich', description: 'Finanzentwicklung über Monate und Jahre vergleichen.' },
    { title: 'Steuerberater-Export', description: 'Alle Daten für den Steuerberater fertig aufbereitet exportieren.' },
    { title: 'Erinnerungen', description: 'An fällige Zahlungen und Steuertermine erinnert werden.' },
  ],
  closingHeadline: 'Ihre Finanzen – endlich durchblicken.',
  closingText: 'Taskey macht Einnahmen-Ausgaben-Verwaltung so einfach, dass Sie es tatsächlich tun.',
  relatedLinks: [
      {
          href: '/loesungen/buchhaltung-handwerksbetrieb',
          label: 'Buchhaltung Handwerk',
          description: 'Die komplette Buchhaltung für Ihren Handwerksbetrieb – digital und einfach.'
      },
      {
          href: '/loesungen/gewinn-pro-auftrag-berechnen',
          label: 'Gewinn pro Auftrag',
          description: 'Nicht nur Gesamtzahlen: Erfahren Sie den Gewinn pro einzelnem Auftrag.'
      },
      {
          href: '/loesungen/liquiditaetsplanung-baufirma',
          label: 'Liquiditätsplanung',
          description: 'Zahlungsströme planen und Liquiditätsengpässe frühzeitig erkennen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
