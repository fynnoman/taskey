import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Klinik Reinigung Software – Hygienestandards digital einhalten | Taskey',
  description: 'Software für Klinikreinigung und Hygienereinigung: Desinfektionsprotokolle, Reinigungspläne, Nachweise für Hygieneaudits. DSGVO-konform. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/klinik-reinigung-software' },
};

const data: LandingPageData = {
  badge: 'Klinik & Hygiene',
  headline: 'Klinikreinigung –',
  headlineHighlight: 'höchste Hygienestandards, lückenlos dokumentiert.',
  subheadline: 'OP, Station, Praxis – jede Desinfektion nachvollziehbar.',
  heroDescription: 'In Kliniken und Pflegeeinrichtungen zählt jede Reinigung. Taskey dokumentiert Desinfektionen, Reinigungsintervalle und Hygieneprotokolle lückenlos.',
  painPoints: [
    { text: 'Hygieneaudits erfordern lückenlose Nachweise – Papier reicht nicht mehr.' },
    { text: 'Desinfektionsprotokolle müssen zeitgenau dokumentiert werden.' },
    { text: 'Verschiedene Hygienezonen erfordern unterschiedliche Reinigungsverfahren.' },
    { text: 'Personalwechsel gefaehrdet die Einhaltung der Hygienestandards.' },
  ],
  solutionTitle: 'Hygiene. Digital. Auditfest.',
  solutionDescription: 'Jede Desinfektion dokumentiert, jedes Protokoll abrufbar.',
  solutionSteps: [
    { title: 'Hygienezonen definieren', description: 'Definiere Reinigungsverfahren und Intervalle pro Hygienebereich.' },
    { title: 'Protokolle digital führen', description: 'Jede Reinigung wird mit Zeitstempel, Mitarbeiter und Verfahren dokumentiert.' },
    { title: 'Auditbereit auf Knopfdruck', description: 'Alle Hygieneprotokolle als Bericht exportieren – fertig für jedes Audit.' },
  ],
  ctaText: 'Hygienereinigung digitalisieren',
  featureHighlights: [
    { title: 'Desinfektionsprotokolle', description: 'Digitale Protokolle mit Zeitstempel und Verfahrensnachweis.' },
    { title: 'Hygienezonen-Planung', description: 'Unterschiedliche Standards pro Zone – automatisch zugewiesen.' },
    { title: 'Audit-Export', description: 'Berichte für Hygieneaudits auf Knopfdruck generieren.' },
    { title: 'Schulungsnachweise', description: 'Hygieneschulungen dokumentieren und Ablaufdaten tracken.' },
    { title: 'Sofort-Reinigung', description: 'Ad-hoc-Reinigungen beauftragen und dokumentieren.' },
    { title: 'Mehrsprachig', description: 'App in 3 Sprachen – perfekt für multinationale Reinigungsteams.' },
  ],
  closingHeadline: 'Klinikreinigung. Hygienisch. Dokumentiert. Auditfest.',
  closingText: 'Teste Taskey 14 Tage kostenlos und sichere deine Hygienestandards digital ab.',
  relatedLinks: [
    { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten Reinigung', description: 'Digitale Hygiene-Checklisten pro Raum und Zone.' },
    { href: '/loesungen/reinigungspläne-digital-erstellen', label: 'Reinigungspläne digital', description: 'Reinigungspläne für Kliniken und Pflegeeinrichtungen.' },
    { href: '/loesungen/qualitaetskontrolle-gebäudereinigung', label: 'Qualitätskontrolle', description: 'Hygienekontrollen planen und dokumentieren.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
