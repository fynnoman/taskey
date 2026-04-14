import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Klinik Reinigung Software – Hygienestandards digital einhalten | Taskey',
  description: 'Software fuer Klinikreinigung und Hygienereinigung: Desinfektionsprotokolle, Reinigungsplaene, Nachweise fuer Hygieneaudits. DSGVO-konform. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/klinik-reinigung-software' },
};

const data: LandingPageData = {
  badge: 'Klinik & Hygiene',
  headline: 'Klinikreinigung –',
  headlineHighlight: 'hoechste Hygienestandards, lueckenlos dokumentiert.',
  subheadline: 'OP, Station, Praxis – jede Desinfektion nachvollziehbar.',
  heroDescription: 'In Kliniken und Pflegeeinrichtungen zaehlt jede Reinigung. Taskey dokumentiert Desinfektionen, Reinigungsintervalle und Hygieneprotokolle lueckenlos.',
  painPoints: [
    { text: 'Hygieneaudits erfordern lueckenlose Nachweise – Papier reicht nicht mehr.' },
    { text: 'Desinfektionsprotokolle muessen zeitgenau dokumentiert werden.' },
    { text: 'Verschiedene Hygienezonen erfordern unterschiedliche Reinigungsverfahren.' },
    { text: 'Personalwechsel gefaehrdet die Einhaltung der Hygienestandards.' },
  ],
  solutionTitle: 'Hygiene. Digital. Auditfest.',
  solutionDescription: 'Jede Desinfektion dokumentiert, jedes Protokoll abrufbar.',
  solutionSteps: [
    { title: 'Hygienezonen definieren', description: 'Definiere Reinigungsverfahren und Intervalle pro Hygienebereich.' },
    { title: 'Protokolle digital fuehren', description: 'Jede Reinigung wird mit Zeitstempel, Mitarbeiter und Verfahren dokumentiert.' },
    { title: 'Auditbereit auf Knopfdruck', description: 'Alle Hygieneprotokolle als Bericht exportieren – fertig fuer jedes Audit.' },
  ],
  ctaText: 'Hygienereinigung digitalisieren',
  featureHighlights: [
    { title: 'Desinfektionsprotokolle', description: 'Digitale Protokolle mit Zeitstempel und Verfahrensnachweis.' },
    { title: 'Hygienezonen-Planung', description: 'Unterschiedliche Standards pro Zone – automatisch zugewiesen.' },
    { title: 'Audit-Export', description: 'Berichte fuer Hygieneaudits auf Knopfdruck generieren.' },
    { title: 'Schulungsnachweise', description: 'Hygieneschulungen dokumentieren und Ablaufdaten tracken.' },
    { title: 'Sofort-Reinigung', description: 'Ad-hoc-Reinigungen beauftragen und dokumentieren.' },
    { title: 'Mehrsprachig', description: 'App in 3 Sprachen – perfekt fuer multinationale Reinigungsteams.' },
  ],
  closingHeadline: 'Klinikreinigung. Hygienisch. Dokumentiert. Auditfest.',
  closingText: 'Teste Taskey 14 Tage kostenlos und sichere deine Hygienestandards digital ab.',
  relatedLinks: [
    { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten Reinigung', description: 'Digitale Hygiene-Checklisten pro Raum und Zone.' },
    { href: '/loesungen/reinigungsplaene-digital-erstellen', label: 'Reinigungsplaene digital', description: 'Reinigungsplaene fuer Kliniken und Pflegeeinrichtungen.' },
    { href: '/loesungen/qualitaetskontrolle-gebaeudereinigung', label: 'Qualitaetskontrolle', description: 'Hygienekontrollen planen und dokumentieren.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
