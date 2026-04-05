import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Mahnwesen Handwerk – Taskey',
  description: 'Mahnwesen für Handwerksbetriebe einfach digitalisieren. Taskey erinnert automatisch an überfällige Rechnungen und erstellt Mahnungen.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/mahnwesen-handwerk' },
};

const data: LandingPageData = {
  badge: 'Mahnwesen',
  headline: 'Mahnwesen für',
  headlineHighlight: 'Handwerksbetriebe',
  subheadline: 'Automatische Zahlungserinnerungen – ohne peinliche Anrufe.',
  heroDescription: 'Überfällige Rechnungen kosten Geld und Nerven. Taskey automatisiert Ihr Mahnwesen – von der freundlichen Erinnerung bis zur finalen Mahnung.',
  painPoints: [
    { text: 'Unangenehme Telefonate wegen unbezahlter Rechnungen.' },
    { text: 'Kein System – offene Posten werden zu spät bemerkt.' },
    { text: 'Forderungsausfälle wegen fehlender oder verspäteter Mahnungen.' },
    { text: 'Mahnungen schreiben kostet Zeit, die Sie nicht haben.' },
  ],
  solutionTitle: 'Automatisiertes Mahnwesen in 3 Schritten',
  solutionDescription: 'Taskey erkennt überfällige Rechnungen und handelt automatisch.',
  solutionSteps: [
    { title: 'Frist überwachen', description: 'Taskey erkennt automatisch, wenn Zahlungsfristen überschritten werden.' },
    { title: 'Erinnerung senden', description: 'Freundliche Zahlungserinnerung wird automatisch per E-Mail versendet.' },
    { title: 'Mahnstufen eskalieren', description: 'Bei ausbleibender Zahlung folgen weitere Mahnstufen – alles automatisch.' },
  ],
  ctaText: 'Jetzt Mahnwesen automatisieren',
  featureHighlights: [
    { title: 'Mehrstufiges Mahnwesen', description: 'Zahlungserinnerung, 1. Mahnung, 2. Mahnung – alles automatisch.' },
    { title: 'Automatischer Versand', description: 'Mahnungen werden zum richtigen Zeitpunkt automatisch versendet.' },
    { title: 'Individuelle Texte', description: 'Mahntexte an Ihren Ton und Ihre Geschäftsbeziehung anpassen.' },
    { title: 'Offene-Posten-Liste', description: 'Alle überfälligen Rechnungen mit Fälligkeitsdatum auf einen Blick.' },
    { title: 'Mahngebühren', description: 'Mahngebühren und Verzugszinsen automatisch berechnen.' },
    { title: 'Dokumentation', description: 'Alle Mahnvorgänge lückenlos dokumentiert und archiviert.' },
  ],
  closingHeadline: 'Schluss mit Zahlungsausfällen.',
  closingText: 'Taskey sorgt dafür, dass Ihre Rechnungen bezahlt werden – professionell und automatisch.',
  relatedLinks: [
      {
          href: '/loesungen/rechnungen-nachverfolgen-handwerksbetrieb',
          label: 'Rechnungen nachverfolgen',
          description: 'Alle offenen Rechnungen im Blick – vor der Mahnung kommt die Übersicht.'
      },
      {
          href: '/loesungen/rechnungsprogramm-handwerker',
          label: 'Rechnungsprogramm',
          description: 'Rechnungen erstellen und Zahlungseingänge tracken.'
      },
      {
          href: '/loesungen/liquiditaetsplanung-baufirma',
          label: 'Liquiditätsplanung',
          description: 'Offene Forderungen in die Liquiditätsplanung einbeziehen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
