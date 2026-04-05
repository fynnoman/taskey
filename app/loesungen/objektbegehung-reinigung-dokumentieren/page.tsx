import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Objektbegehung Reinigung dokumentieren – Taskey',
  description: 'Objektbegehungen in der Gebäudereinigung digital dokumentieren. Taskey erfasst Mängel, Verbesserungspotenzial und Kundenwünsche.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/objektbegehung-reinigung-dokumentieren' },
};

const data: LandingPageData = {
  badge: 'Objektbegehung',
  headline: 'Objektbegehungen',
  headlineHighlight: 'digital dokumentieren',
  subheadline: 'Qualität sichern durch regelmäßige Kontrollen.',
  heroDescription: 'Regelmäßige Objektbegehungen sichern die Reinigungsqualität. Taskey macht die Dokumentation einfach – mit standardisierten Protokollen, Fotos und Bewertungen.',
  painPoints: [
    { text: 'Objektbegehungen werden auf Papier dokumentiert und landen in Ordnern.' },
    { text: 'Ergebnisse sind nicht vergleichbar – keine standardisierten Bewertungskriterien.' },
    { text: 'Festgestellte Mängel werden nicht systematisch behoben.' },
    { text: 'Keine Qualitätsentwicklung nachvollziehbar.' },
  ],
  solutionTitle: 'Objektbegehungen standardisiert durchführen',
  solutionDescription: 'Taskey gibt Ihnen standardisierte Protokolle für professionelle Objektbegehungen.',
  solutionSteps: [
    { title: 'Begehung durchführen', description: 'Standardisiertes Protokoll Raum für Raum abarbeiten.' },
    { title: 'Mängel dokumentieren', description: 'Auffälligkeiten mit Foto und Bewertung erfassen.' },
    { title: 'Maßnahmen ableiten', description: 'Aus Ergebnissen konkrete Verbesserungsmaßnahmen definieren.' },
  ],
  ctaText: 'Jetzt Begehungen digitalisieren',
  featureHighlights: [
    { title: 'Standardisierte Protokolle', description: 'Einheitliche Bewertungskriterien für vergleichbare Ergebnisse.' },
    { title: 'Foto-Dokumentation', description: 'Mängel und Positivbeispiele mit Fotos festhalten.' },
    { title: 'Bewertungssystem', description: 'Räume und Bereiche nach Reinigungsqualität bewerten.' },
    { title: 'Trend-Analyse', description: 'Qualitätsentwicklung über Zeit und Objekte verfolgen.' },
    { title: 'Berichtsversand', description: 'Begehungsberichte automatisch an Kunden und Team senden.' },
    { title: 'Maßnahmenverfolgung', description: 'Festgelegte Maßnahmen bis zur Erledigung nachverfolgen.' },
  ],
  closingHeadline: 'Qualität, die man sehen kann.',
  closingText: 'Taskey macht Ihre Objektbegehungen zum Qualitätsinstrument – standardisiert und nachweisbar.',
  relatedLinks: [
      {
          href: '/loesungen/qualitaetskontrolle-gebaeudereinigung',
          label: 'Qualitätskontrolle',
          description: 'Objektbegehungen als Instrument der Qualitätssicherung.'
      },
      {
          href: '/loesungen/fotos-baustelle-dokumentieren-app',
          label: 'Fotos dokumentieren',
          description: 'Begehungen mit Fotos ergänzen und Mängel dokumentieren.'
      },
      {
          href: '/loesungen/leistungsnachweis-gebaeudereinigung',
          label: 'Leistungsnachweise',
          description: 'Begehungsergebnisse als Grundlage für Leistungsnachweise.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
