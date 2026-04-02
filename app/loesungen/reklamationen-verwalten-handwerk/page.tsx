import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Reklamationen verwalten Handwerk – Taskey',
  description: 'Reklamationen im Handwerksbetrieb professionell verwalten. Taskey dokumentiert, priorisiert und verfolgt alle Reklamationen digital.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/reklamationen-verwalten-handwerk' },
};

const data: LandingPageData = {
  badge: 'Reklamationsmanagement',
  headline: 'Reklamationen im',
  headlineHighlight: 'Handwerk',
  subheadline: 'professionell verwalten statt ignorieren.',
  heroDescription: 'Reklamationen sind unangenehm, aber wichtig. Taskey hilft Ihnen, Reklamationen systematisch zu erfassen, zu bearbeiten und daraus zu lernen.',
  painPoints: [
    { text: 'Reklamationen bleiben liegen und Kunden werden immer unzufriedener.' },
    { text: 'Keine Dokumentation – bei Streit steht Aussage gegen Aussage.' },
    { text: 'Gleiche Fehler passieren immer wieder, weil niemand daraus lernt.' },
    { text: 'Unnötige Kulanzleistungen, weil der Sachverhalt unklar ist.' },
  ],
  solutionTitle: 'Reklamationen systematisch lösen',
  solutionDescription: 'Taskey macht Ihr Reklamationsmanagement transparent und effizient.',
  solutionSteps: [
    { title: 'Reklamation erfassen', description: 'Reklamation mit Fotos, Beschreibung und Kundendaten digital anlegen.' },
    { title: 'Zuständigkeit zuweisen', description: 'Den richtigen Mitarbeiter für die Nachbesserung einteilen.' },
    { title: 'Erledigung dokumentieren', description: 'Nachbesserung dokumentieren und Kunden über Erledigung informieren.' },
  ],
  ctaText: 'Jetzt Reklamationen in den Griff bekommen',
  featureHighlights: [
    { title: 'Foto-Dokumentation', description: 'Mängel mit Fotos dokumentieren – vorher und nachher.' },
    { title: 'Fristenverwaltung', description: 'Gewährleistungsfristen und Reaktionszeiten im Blick behalten.' },
    { title: 'Auswertung', description: 'Häufigste Reklamationsursachen erkennen und abstellen.' },
    { title: 'Verantwortlichkeiten', description: 'Klare Zuständigkeiten für jede Reklamation.' },
    { title: 'Kundenkommunikation', description: 'Status der Bearbeitung an den Kunden kommunizieren.' },
    { title: 'Maßnahmenplan', description: 'Konkrete Schritte zur Behebung festlegen und nachverfolgen.' },
  ],
  closingHeadline: 'Aus Reklamationen lernen.',
  closingText: 'Taskey macht Reklamationen zum Qualitätstreiber – für zufriedenere Kunden und bessere Arbeit.',
  relatedLinks: [
      {
          href: '/loesungen/kundenhistorie-verwalten-handwerk',
          label: 'Kundenhistorie',
          description: 'Reklamationen als Teil der vollständigen Kundenhistorie dokumentieren.'
      },
      {
          href: '/loesungen/kundenkommunikation-baufirma',
          label: 'Kundenkommunikation',
          description: 'Bei Reklamationen professionell und transparent kommunizieren.'
      },
      {
          href: '/loesungen/maengeldokumentation-bau',
          label: 'Mängeldokumentation',
          description: 'Mängel als Ursache von Reklamationen systematisch dokumentieren.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
