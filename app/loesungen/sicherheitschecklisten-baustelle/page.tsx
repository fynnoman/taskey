import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Sicherheitschecklisten Baustelle – Taskey',
  description: 'Sicherheitschecklisten für Baustellen digital führen. Taskey dokumentiert Sicherheitsprüfungen und hilft bei der Einhaltung von Arbeitsschutz.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/sicherheitschecklisten-baustelle' },
};

const data: LandingPageData = {
  badge: 'Sicherheitschecklisten',
  headline: 'Sicherheitschecklisten für die',
  headlineHighlight: 'Baustelle',
  subheadline: 'Arbeitsschutz digital dokumentieren.',
  heroDescription: 'Sicherheit auf der Baustelle ist Pflicht. Taskey hilft Ihnen, Sicherheitsprüfungen systematisch durchzuführen und lückenlos zu dokumentieren.',
  painPoints: [
    { text: 'Sicherheitsprüfungen werden vernachlässigt oder nur halbherzig durchgeführt.' },
    { text: 'Keine Nachweise bei Unfällen oder Kontrollen durch die BG.' },
    { text: 'Papier-Checklisten verschwinden in Schubladen.' },
    { text: 'Mängel werden dokumentiert, aber nicht behoben.' },
  ],
  solutionTitle: 'Sicherheit systematisch sicherstellen',
  solutionDescription: 'Taskey macht Sicherheitsprüfungen einfach, nachvollziehbar und lückenlos.',
  solutionSteps: [
    { title: 'Prüfung durchführen', description: 'Standardisierte Sicherheitscheckliste Punkt für Punkt abarbeiten.' },
    { title: 'Mängel dokumentieren', description: 'Sicherheitsmängel mit Foto und Beschreibung erfassen.' },
    { title: 'Behebung nachverfolgen', description: 'Mängel zuweisen und Behebung bis zum Abschluss nachverfolgen.' },
  ],
  ctaText: 'Jetzt Sicherheit digitalisieren',
  featureHighlights: [
    { title: 'Standard-Checklisten', description: 'Branchenspezifische Sicherheitschecklisten sofort einsatzbereit.' },
    { title: 'Mängeldokumentation', description: 'Sicherheitsmängel mit Fotos dokumentieren.' },
    { title: 'Prioritäten', description: 'Mängel nach Gefährdungspotenzial priorisieren.' },
    { title: 'Verantwortlichkeiten', description: 'Mängelbehebung mit Frist und Verantwortlichem zuweisen.' },
    { title: 'Statistiken', description: 'Häufigste Mängeltypen erkennen und präventiv handeln.' },
    { title: 'Prüfnachweise', description: 'Alle Sicherheitsprüfungen revisionssicher archiviert.' },
  ],
  closingHeadline: 'Sicherheit – digital nachgewiesen.',
  closingText: 'Taskey sorgt für lückenlose Sicherheitsdokumentation auf Ihren Baustellen.',
  relatedLinks: [
      {
          href: '/loesungen/wartungschecklisten-handwerk',
          label: 'Wartungschecklisten',
          description: 'Nicht nur Sicherheit – auch Wartung mit digitalen Checklisten abdecken.'
      },
      {
          href: '/loesungen/baudokumentation-software',
          label: 'Baudokumentation',
          description: 'Sicherheitschecks als Teil der vollständigen Baudokumentation.'
      },
      {
          href: '/loesungen/protokolle-baustelle-erstellen',
          label: 'Baustellenprotokolle',
          description: 'Sicherheitsprüfungen in Baustellenprotokollen dokumentieren.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
