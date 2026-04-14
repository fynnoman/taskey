import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Schulreinigung Software – Schulen professionell reinigen | Taskey',
  description: 'Software fuer Schulreinigung: Reinigungsplaene, Ferienplanung, NFC-Nachweise, Qualitaetskontrolle. Fuer Reinigungsunternehmen mit Schulobjekten.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/schulreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Schulreinigung',
  headline: 'Schulreinigung –',
  headlineHighlight: 'sauber durch das Schuljahr.',
  subheadline: 'Klassenzimmer, Turnhallen, Mensen – Schulreinigung effizient planen und dokumentieren.',
  heroDescription: 'Schulen stellen besondere Anforderungen: Grosse Flaechen, enge Zeitfenster und wechselnde Anforderungen in Ferien. Taskey hilft dir, Schulreinigung professionell zu managen.',
  painPoints: [
    { text: 'Reinigung muss in kurzen Zeitfenstern nach Unterrichtsende erfolgen.' },
    { text: 'In Ferien stehen Grundreinigungen an – Personalplanung wird komplex.' },
    { text: 'Schultraeger fordern Nachweise ueber erbrachte Reinigungsleistungen.' },
    { text: 'Verschiedene Raumtypen (Klassenzimmer, WC, Mensa) brauchen unterschiedliche Standards.' },
  ],
  solutionTitle: 'Schulreinigung. Effizient geplant. Lueckenlos nachgewiesen.',
  solutionDescription: 'Taskey optimiert die Schulreinigung mit intelligenter Planung und digitaler Dokumentation.',
  solutionSteps: [
    { title: 'Raumplaene erstellen', description: 'Definiere Reinigungsstandards pro Raumtyp: Klassenzimmer, WC, Turnhalle, Mensa.' },
    { title: 'Ferien-Modus', description: 'Plane Grundreinigungen in Ferien mit angepasstem Personalplan.' },
    { title: 'Nachweise fuer Schultraeger', description: 'NFC-Scans und Checklisten als digitaler Nachweis fuer den Auftraggeber.' },
  ],
  ctaText: 'Schulreinigung optimieren',
  featureHighlights: [
    { title: 'Raumtyp-Standards', description: 'Unterschiedliche Reinigungsstandards pro Raumtyp.' },
    { title: 'Ferienplanung', description: 'Grundreinigungen in Ferien separat planen.' },
    { title: 'Zeitfenster-Planung', description: 'Reinigung in Zeitfenster nach Unterrichtsschluss einplanen.' },
    { title: 'NFC pro Raum', description: 'NFC-Tags in jedem Raum fuer exakte Nachweise.' },
    { title: 'Schultraeger-Portal', description: 'Auftraggeber sieht Reinigungsstatus in Echtzeit.' },
    { title: 'Sonderreinigungen', description: 'Events, Feste, Bauarbeiten – Sonderreinigungen schnell planen.' },
  ],
  closingHeadline: 'Schulreinigung. Professionell. Zuverlaessig. Digital.',
  closingText: 'Teste Taskey 14 Tage kostenlos und manage deine Schulreinigung effizient.',
  relatedLinks: [
    { href: '/loesungen/unterhaltsreinigung-software', label: 'Unterhaltsreinigung', description: 'Regelmaessige Reinigung planen.' },
    { href: '/loesungen/grundreinigung-software', label: 'Grundreinigung', description: 'Grundreinigungen in Ferien planen.' },
    { href: '/loesungen/auftraggeber-portal-reinigung', label: 'Kundenportal', description: 'Portal fuer Schultraeger.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
