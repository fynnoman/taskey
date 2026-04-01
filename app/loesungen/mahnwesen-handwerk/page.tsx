import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Mahnwesen Handwerk – Taskey',
  description: 'Mahnwesen für Handwerksbetriebe einfach digitalisieren. Taskey erinnert automatisch an überfällige Rechnungen und erstellt Mahnungen.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/mahnwesen-handwerk' },
};

const data: LandingPageData = {
  badge: 'Mahnwesen',
  headline: 'Mahnwesen für',
  headlineHighlight: 'Handwerksbetriebe',
  subheadline: 'Automatische Zahlungserinnerungen – ohne peinliche Anrufe.',
  heroDescription: 'Überfällige Rechnungen kosten Geld und Nerven. Taskey automatisiert Ihr Mahnwesen – von der freundlichen Erinnerung bis zur finalen Mahnung.',
  painPoints: [
    { icon: '😓', text: 'Unangenehme Telefonate wegen unbezahlter Rechnungen.' },
    { icon: '📂', text: 'Kein System – offene Posten werden zu spät bemerkt.' },
    { icon: '💸', text: 'Forderungsausfälle wegen fehlender oder verspäteter Mahnungen.' },
    { icon: '⏳', text: 'Mahnungen schreiben kostet Zeit, die Sie nicht haben.' },
  ],
  solutionTitle: 'Automatisiertes Mahnwesen in 3 Schritten',
  solutionDescription: 'Taskey erkennt überfällige Rechnungen und handelt automatisch.',
  solutionSteps: [
    { icon: '🔔', title: 'Frist überwachen', description: 'Taskey erkennt automatisch, wenn Zahlungsfristen überschritten werden.' },
    { icon: '📧', title: 'Erinnerung senden', description: 'Freundliche Zahlungserinnerung wird automatisch per E-Mail versendet.' },
    { icon: '⚠️', title: 'Mahnstufen eskalieren', description: 'Bei ausbleibender Zahlung folgen weitere Mahnstufen – alles automatisch.' },
  ],
  ctaText: 'Jetzt Mahnwesen automatisieren',
  featureHighlights: [
    { icon: '🔄', title: 'Mehrstufiges Mahnwesen', description: 'Zahlungserinnerung, 1. Mahnung, 2. Mahnung – alles automatisch.' },
    { icon: '📧', title: 'Automatischer Versand', description: 'Mahnungen werden zum richtigen Zeitpunkt automatisch versendet.' },
    { icon: '📋', title: 'Individuelle Texte', description: 'Mahntexte an Ihren Ton und Ihre Geschäftsbeziehung anpassen.' },
    { icon: '📊', title: 'Offene-Posten-Liste', description: 'Alle überfälligen Rechnungen mit Fälligkeitsdatum auf einen Blick.' },
    { icon: '💰', title: 'Mahngebühren', description: 'Mahngebühren und Verzugszinsen automatisch berechnen.' },
    { icon: '📁', title: 'Dokumentation', description: 'Alle Mahnvorgänge lückenlos dokumentiert und archiviert.' },
  ],
  closingHeadline: 'Schluss mit Zahlungsausfällen.',
  closingText: 'Taskey sorgt dafür, dass Ihre Rechnungen bezahlt werden – professionell und automatisch.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
