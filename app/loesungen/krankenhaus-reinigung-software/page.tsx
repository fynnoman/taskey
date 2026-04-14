import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Krankenhaus-Reinigung Software – Klinikhygiene digital | Taskey',
  description: 'Software fuer Krankenhausreinigung: Hygiene-Checklisten, NFC-Nachweise, Desinfektionsprotokolle. Fuer Reinigungsunternehmen im Gesundheitswesen.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/krankenhaus-reinigung-software' },
};

const data: LandingPageData = {
  badge: 'Krankenhausreinigung',
  headline: 'Krankenhausreinigung –',
  headlineHighlight: 'Hygiene ohne Kompromisse.',
  subheadline: 'Kliniken, Stationen, OPs – Reinigung nach hoechsten Hygienestandards, digital dokumentiert.',
  heroDescription: 'Krankenhausreinigung ist hoechst anspruchsvoll: Hygienevorschriften, Desinfektionsplaene, Audit-Anforderungen. Taskey unterstuetzt Reinigungsunternehmen dabei, klinische Hygiene lueckenlos digital zu dokumentieren.',
  painPoints: [
    { text: 'Hygienevorschriften sind komplex und aendern sich regelmaessig.' },
    { text: 'OPs, Intensivstationen und Patientenzimmer brauchen unterschiedliche Protokolle.' },
    { text: 'Audits durch Gesundheitsaemter erfordern lueckenlose Dokumentation.' },
    { text: 'Hohe Mitarbeiterfluktuation macht Schulung und Qualitaetssicherung schwierig.' },
  ],
  solutionTitle: 'Klinikhygiene. Digital. Auditsicher.',
  solutionDescription: 'Taskey verbindet Reinigungsplanung mit Hygiene-Dokumentation – speziell fuer den klinischen Bereich.',
  solutionSteps: [
    { title: 'Hygiene-Zonen definieren', description: 'Konfiguriere Reinigungsstandards pro Zone: OP, Station, Flur, Sanitaer.' },
    { title: 'Desinfektionsprotokolle', description: 'Mitarbeiter arbeiten zonenspezifische Desinfektions-Checklisten ab.' },
    { title: 'Audit-Report generieren', description: 'Alle Nachweise auf Knopfdruck als Report fuer Audits und Begehungen.' },
  ],
  ctaText: 'Klinikreinigung digitalisieren',
  featureHighlights: [
    { title: 'Zonen-Management', description: 'Reinigungsstandards pro Hygienezone definieren.' },
    { title: 'Desinfektionsprotokolle', description: 'Desinfektion dokumentieren mit Mittel, Zeit und Konzentration.' },
    { title: 'NFC pro Raum', description: 'NFC-Tags pro Raum fuer exakte Reinigungsnachweise.' },
    { title: 'Schulungstracker', description: 'Nachweisen, dass Reinigungskraefte geschult sind.' },
    { title: 'Audit-Reports', description: 'Alle Dokumentationen sofort fuer Audits verfuegbar.' },
    { title: 'Outbreak-Management', description: 'Bei Ausbruechen sofort Sonderreinigungen ausloesen und dokumentieren.' },
  ],
  closingHeadline: 'Krankenhausreinigung. Sicher. Dokumentiert. Lueckenlos.',
  closingText: 'Teste Taskey 14 Tage kostenlos und bring deine Klinikreinigung auf Audit-Niveau.',
  relatedLinks: [
    { href: '/loesungen/klinik-reinigung-software', label: 'Klinikreinigung', description: 'Allgemeine klinische Reinigung.' },
    { href: '/loesungen/praxisreinigung-software', label: 'Praxisreinigung', description: 'Arztpraxen hygienisch reinigen.' },
    { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten', description: 'Digitale Hygiene-Checklisten.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
