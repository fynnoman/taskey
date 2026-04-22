import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Praxisreinigung Software – Arztpraxis-Reinigung digital verwalten | Taskey',
  description: 'Hygienische Praxisreinigung mit digitaler Dokumentation: NFC-Nachweise, Hygienechecklisten, Qualitätskontrolle. Für Reinigungsunternehmen.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/praxisreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Praxisreinigung',
  headline: 'Praxisreinigung –',
  headlineHighlight: 'hygienisch. dokumentiert. zuverlässig.',
  subheadline: 'Arztpraxen und Zahnarztpraxen reinigen – mit lückenloser Hygiene-Dokumentation.',
  heroDescription: 'Arztpraxen verlangen höchste Hygienestandards. Taskey hilft dir, Praxisreinigung zu planen, Hygieneprotokolle einzuhalten und alles revisionssicher zu dokumentieren.',
  painPoints: [
    { text: 'Praxen fordern lückenlose Hygiene-Nachweise – Papier reicht nicht mehr.' },
    { text: 'Ohne Checklisten werden Behandlungsräume nicht nach Standard gereinigt.' },
    { text: 'Wechselnde Reinigungskräfte kennen die Hygieneanforderungen nicht.' },
    { text: 'Bei Audits fehlen nachvollziehbare Reinigungsdokumentationen.' },
  ],
  solutionTitle: 'Praxisreinigung. Hygiene-konform. Digital.',
  solutionDescription: 'Taskey verbindet Reinigungsplanung mit Hygiene-Dokumentation – speziell für Arzt- und Zahnarztpraxen.',
  solutionSteps: [
    { title: 'Hygiene-Checklisten erstellen', description: 'Definiere Reinigungsstandards pro Raumtyp: Behandlung, Wartebereich, WC.' },
    { title: 'Teams schulen & einteilen', description: 'Weise geschulte Reinigungskräfte zu und stelle sicher, dass Standards eingehalten werden.' },
    { title: 'NFC-Scan & Dokumentation', description: 'Reinigungskraft scannt, arbeitet Checkliste ab, Praxis erhaelt digitalen Nachweis.' },
  ],
  ctaText: 'Praxisreinigung digitalisieren',
  featureHighlights: [
    { title: 'Hygiene-Checklisten', description: 'Raumspezifische Checklisten nach Hygienestandard.' },
    { title: 'Desinfektionsprotokolle', description: 'Desinfektionsmaßnahmen dokumentieren und nachweisen.' },
    { title: 'NFC-Zeitstempel', description: 'Exakte Nachweise, wann welcher Raum gereinigt wurde.' },
    { title: 'Audit-Ready', description: 'Alle Dokumentationen sofort für Audits verfügbar.' },
    { title: 'Schulungsmanagement', description: 'Sicherstellen, dass Reinigungskräfte geschult sind.' },
    { title: 'Praxis-Portal', description: 'Aerzte sehen Reinigungsstatus in Echtzeit.' },
  ],
  closingHeadline: 'Praxisreinigung. Sauber. Sicher. Nachgewiesen.',
  closingText: 'Teste Taskey 3 Monate kostenlos und überzeuge deine Praxis-Kunden mit digitaler Hygiene-Dokumentation.',
  relatedLinks: [
    { href: '/loesungen/klinik-reinigung-software', label: 'Klinikreinigung', description: 'Hygienische Reinigung im klinischen Umfeld.' },
    { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten', description: 'Digitale Reinigungschecklisten.' },
    { href: '/loesungen/qualitaetskontrolle-gebäudereinigung', label: 'Qualitätskontrolle', description: 'Reinigungsqualität prüfen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
