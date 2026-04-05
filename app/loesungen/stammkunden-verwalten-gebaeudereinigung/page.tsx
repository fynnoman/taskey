import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Stammkunden verwalten Gebäudereinigung – Taskey',
  description: 'Stammkunden in der Gebäudereinigung optimal betreuen. Taskey verwaltet Verträge, Leistungen und Kommunikation für langfristige Kundenbeziehungen.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/stammkunden-verwalten-gebaeudereinigung' },
};

const data: LandingPageData = {
  badge: 'Stammkunden',
  headline: 'Stammkunden in der',
  headlineHighlight: 'Gebäudereinigung',
  subheadline: 'optimal betreuen und langfristig binden.',
  heroDescription: 'Stammkunden sind Ihr wertvollstes Kapital. Taskey hilft Ihnen, Bestandskunden systematisch zu betreuen und Vertragsverlängerungen sicherzustellen.',
  painPoints: [
    { text: 'Vertragsdetails und Leistungsumfang nicht schnell abrufbar.' },
    { text: 'Vertragsverlängerungen werden verpasst – Kunden wechseln zur Konkurrenz.' },
    { text: 'Keine Übersicht über Kundenzufriedenheit und Umsatzentwicklung.' },
    { text: 'Proaktive Kundenbetreuung bleibt im Alltag auf der Strecke.' },
  ],
  solutionTitle: 'Stammkunden systematisch betreuen',
  solutionDescription: 'Taskey gibt Ihnen alle Werkzeuge für langfristige Kundenbeziehungen.',
  solutionSteps: [
    { title: 'Kundenprofil pflegen', description: 'Alle Verträge, Objekte und Kontaktpersonen zentral verwalten.' },
    { title: 'Proaktiv agieren', description: 'Automatische Erinnerungen für Vertragsverlängerungen und Qualitätschecks.' },
    { title: 'Beziehung stärken', description: 'Regelmäßige Qualitätsberichte und Verbesserungsvorschläge teilen.' },
  ],
  ctaText: 'Jetzt Stammkunden besser betreuen',
  featureHighlights: [
    { title: 'Vertragsübersicht', description: 'Alle Vertragslaufzeiten und -konditionen auf einen Blick.' },
    { title: 'Verlängerungserinnerungen', description: 'Nie wieder eine Vertragsverlängerung verpassen.' },
    { title: 'Qualitätsberichte', description: 'Regelmäßige Berichte über erbrachte Leistungen generieren.' },
    { title: 'Umsatzentwicklung', description: 'Umsatz pro Stammkunde analysieren und Potenzial erkennen.' },
    { title: 'Regelmäßiger Kontakt', description: 'Geplante Kontaktpunkte für proaktive Kundenbetreuung.' },
    { title: 'Kundenzufriedenheit', description: 'Feedback-Scores pro Kunde für gezielte Betreuung.' },
  ],
  closingHeadline: 'Ihre besten Kunden verdienen die beste Betreuung.',
  closingText: 'Taskey macht Stammkundenpflege einfach – für langfristige, profitable Kundenbeziehungen.',
  relatedLinks: [
      {
          href: '/loesungen/kundendatenbank-reinigungsfirma',
          label: 'Kundendatenbank Reinigung',
          description: 'Alle Kundendaten – auch Neukunden – zentral verwalten.'
      },
      {
          href: '/loesungen/kundenfeedback-reinigung',
          label: 'Kundenfeedback',
          description: 'Feedback von Stammkunden einholen und Qualität sichern.'
      },
      {
          href: '/loesungen/reinigungsplaene-digital-erstellen',
          label: 'Reinigungspläne digital',
          description: 'Individuelle Reinigungspläne für jeden Stammkunden erstellen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
