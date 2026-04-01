import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Sicherheitschecklisten Baustelle – Taskey',
  description: 'Sicherheitschecklisten für Baustellen digital führen. Taskey dokumentiert Sicherheitsprüfungen und hilft bei der Einhaltung von Arbeitsschutz.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/sicherheitschecklisten-baustelle' },
};

const data: LandingPageData = {
  badge: 'Sicherheitschecklisten',
  headline: 'Sicherheitschecklisten für die',
  headlineHighlight: 'Baustelle',
  subheadline: 'Arbeitsschutz digital dokumentieren.',
  heroDescription: 'Sicherheit auf der Baustelle ist Pflicht. Taskey hilft Ihnen, Sicherheitsprüfungen systematisch durchzuführen und lückenlos zu dokumentieren.',
  painPoints: [
    { icon: '⚠️', text: 'Sicherheitsprüfungen werden vernachlässigt oder nur halbherzig durchgeführt.' },
    { icon: '📋', text: 'Keine Nachweise bei Unfällen oder Kontrollen durch die BG.' },
    { icon: '📝', text: 'Papier-Checklisten verschwinden in Schubladen.' },
    { icon: '❌', text: 'Mängel werden dokumentiert, aber nicht behoben.' },
  ],
  solutionTitle: 'Sicherheit systematisch sicherstellen',
  solutionDescription: 'Taskey macht Sicherheitsprüfungen einfach, nachvollziehbar und lückenlos.',
  solutionSteps: [
    { icon: '📋', title: 'Prüfung durchführen', description: 'Standardisierte Sicherheitscheckliste Punkt für Punkt abarbeiten.' },
    { icon: '📸', title: 'Mängel dokumentieren', description: 'Sicherheitsmängel mit Foto und Beschreibung erfassen.' },
    { icon: '✅', title: 'Behebung nachverfolgen', description: 'Mängel zuweisen und Behebung bis zum Abschluss nachverfolgen.' },
  ],
  ctaText: 'Jetzt Sicherheit digitalisieren',
  featureHighlights: [
    { icon: '📋', title: 'Standard-Checklisten', description: 'Branchenspezifische Sicherheitschecklisten sofort einsatzbereit.' },
    { icon: '📸', title: 'Mängeldokumentation', description: 'Sicherheitsmängel mit Fotos dokumentieren.' },
    { icon: '⚠️', title: 'Prioritäten', description: 'Mängel nach Gefährdungspotenzial priorisieren.' },
    { icon: '👥', title: 'Verantwortlichkeiten', description: 'Mängelbehebung mit Frist und Verantwortlichem zuweisen.' },
    { icon: '📊', title: 'Statistiken', description: 'Häufigste Mängeltypen erkennen und präventiv handeln.' },
    { icon: '📁', title: 'Prüfnachweise', description: 'Alle Sicherheitsprüfungen revisionssicher archiviert.' },
  ],
  closingHeadline: 'Sicherheit – digital nachgewiesen.',
  closingText: 'Taskey sorgt für lückenlose Sicherheitsdokumentation auf Ihren Baustellen.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
