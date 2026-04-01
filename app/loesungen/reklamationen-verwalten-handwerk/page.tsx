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
    { icon: '😤', text: 'Reklamationen bleiben liegen und Kunden werden immer unzufriedener.' },
    { icon: '📝', text: 'Keine Dokumentation – bei Streit steht Aussage gegen Aussage.' },
    { icon: '🔄', text: 'Gleiche Fehler passieren immer wieder, weil niemand daraus lernt.' },
    { icon: '💸', text: 'Unnötige Kulanzleistungen, weil der Sachverhalt unklar ist.' },
  ],
  solutionTitle: 'Reklamationen systematisch lösen',
  solutionDescription: 'Taskey macht Ihr Reklamationsmanagement transparent und effizient.',
  solutionSteps: [
    { icon: '📋', title: 'Reklamation erfassen', description: 'Reklamation mit Fotos, Beschreibung und Kundendaten digital anlegen.' },
    { icon: '👥', title: 'Zuständigkeit zuweisen', description: 'Den richtigen Mitarbeiter für die Nachbesserung einteilen.' },
    { icon: '✅', title: 'Erledigung dokumentieren', description: 'Nachbesserung dokumentieren und Kunden über Erledigung informieren.' },
  ],
  ctaText: 'Jetzt Reklamationen in den Griff bekommen',
  featureHighlights: [
    { icon: '📸', title: 'Foto-Dokumentation', description: 'Mängel mit Fotos dokumentieren – vorher und nachher.' },
    { icon: '⏱️', title: 'Fristenverwaltung', description: 'Gewährleistungsfristen und Reaktionszeiten im Blick behalten.' },
    { icon: '📊', title: 'Auswertung', description: 'Häufigste Reklamationsursachen erkennen und abstellen.' },
    { icon: '👥', title: 'Verantwortlichkeiten', description: 'Klare Zuständigkeiten für jede Reklamation.' },
    { icon: '📧', title: 'Kundenkommunikation', description: 'Status der Bearbeitung an den Kunden kommunizieren.' },
    { icon: '📋', title: 'Maßnahmenplan', description: 'Konkrete Schritte zur Behebung festlegen und nachverfolgen.' },
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
