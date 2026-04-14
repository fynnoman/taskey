import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Treppenhausreinigung Software – Planen, Nachweisen, Abrechnen | Taskey',
  description: 'Software fuer Treppenhausreinigung: Hausverwaltungen zufriedenstellen mit digitalen Leistungsnachweisen und automatischer Tourenplanung. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/treppenhausreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Treppenhausreinigung',
  headline: 'Treppenhausreinigung –',
  headlineHighlight: 'jedes Objekt nachgewiesen.',
  subheadline: 'Hausverwaltungen wollen Nachweise. Mit Taskey hast du sie automatisch.',
  heroDescription: 'Treppenhausreinigung ist Vertrauenssache. Taskey liefert digitale Leistungsnachweise per NFC – Hausverwaltungen sehen sofort, dass gereinigt wurde.',
  painPoints: [
    { text: 'Hausverwaltungen bezweifeln die Reinigung – du hast keinen Nachweis.' },
    { text: 'Viele Objekte mit unterschiedlichen Intervallen sind schwer zu koordinieren.' },
    { text: 'Mieter beschweren sich – du kannst die Reinigung nicht belegen.' },
    { text: 'Tourenplanung fuer verteilte Objekte kostet zu viel Zeit.' },
  ],
  solutionTitle: 'NFC-Scan im Treppenhaus. Nachweis beim Verwalter.',
  solutionDescription: 'Ein NFC-Tag pro Treppenhaus – dein Team scannt, der Verwalter sieht es.',
  solutionSteps: [
    { title: 'NFC-Tags platzieren', description: 'Ein Tag pro Treppenhaus oder Etage – einmal kleben, dauerhaft nutzen.' },
    { title: 'Tour abarbeiten', description: 'Dein Team faehrt die Tour, scannt bei jedem Objekt und arbeitet die Checkliste ab.' },
    { title: 'Hausverwaltung informiert', description: 'Der Verwalter erhaelt automatisch den digitalen Leistungsnachweis.' },
  ],
  ctaText: 'Treppenhausreinigung digitalisieren',
  featureHighlights: [
    { title: 'NFC-Nachweis', description: 'Jede Reinigung per NFC-Scan nachgewiesen.' },
    { title: 'Tourenoptimierung', description: 'Objekte in optimaler Reihenfolge abfahren.' },
    { title: 'Intervallplanung', description: 'Woechentlich, 14-taegig, monatlich – automatisch geplant.' },
    { title: 'Hausverwaltungs-Portal', description: 'Verwalter sehen live den Reinigungsstatus.' },
    { title: 'Mieter-Beschwerden', description: 'Beschwerden digital erfassen und mit Nachweisen entkraeften.' },
    { title: 'Winterdienst-Addon', description: 'Winterdienst im gleichen System planen und nachweisen.' },
  ],
  closingHeadline: 'Treppenhausreinigung. Nachgewiesen. Keine Diskussion.',
  closingText: 'Teste Taskey 14 Tage kostenlos und ueberzeuge Hausverwaltungen mit digitalen Nachweisen.',
  relatedLinks: [
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Leistungsnachweis', description: 'NFC-basierte Nachweise fuer jedes Objekt.' },
    { href: '/loesungen/tourenplanung-reinigungsteams', label: 'Tourenplanung', description: 'Optimale Touren fuer verteilte Objekte.' },
    { href: '/loesungen/stammkunden-verwalten-gebaeudereinigung', label: 'Stammkunden verwalten', description: 'Hausverwaltungen als Stammkunden betreuen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
