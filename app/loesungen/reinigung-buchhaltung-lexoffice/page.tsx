import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Reinigung Buchhaltung LexOffice – Nahtlose Integration | Taskey',
  description: 'Taskey + LexOffice: Rechnungen, Stundenzettel und Lohndaten automatisch in die Buchhaltung. Für Reinigungsunternehmen im DACH-Raum.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/reinigung-buchhaltung-lexoffice' },
};

const data: LandingPageData = {
  badge: 'LexOffice',
  headline: 'LexOffice-Integration –',
  headlineHighlight: 'Buchhaltung auf Autopilot.',
  subheadline: 'Rechnungen, Lohndaten und Belege automatisch in LexOffice – ohne Doppelerfassung.',
  heroDescription: 'Doppelte Datenerfassung kostet dich Stunden pro Woche. Taskey synchronisiert Rechnungen, Arbeitszeiten und Lohndaten nahtlos mit LexOffice – dein Steuerberater freut sich.',
  painPoints: [
    { text: 'Rechnungen werden in Taskey erstellt und nochmal in die Buchhaltung eingetippt.' },
    { text: 'Stundenzettel müssen manuell in die Lohnbuchhaltung übertragen werden.' },
    { text: 'Fehler bei der manuellen Übertragung kosten Zeit und Geld.' },
    { text: 'Der Steuerberater bekommt Unterlagen zu spaet oder unvollständig.' },
  ],
  solutionTitle: 'Taskey + LexOffice. Automatisch synchron.',
  solutionDescription: 'Verbinde Taskey mit LexOffice und automatisiere deine gesamte Buchhaltungs-Pipeline.',
  solutionSteps: [
    { title: 'LexOffice verbinden', description: 'Einmal einrichten – Taskey verbindet sich per API mit deinem LexOffice-Konto.' },
    { title: 'Rechnungen synchronisieren', description: 'In Taskey erstellte Rechnungen erscheinen automatisch in LexOffice.' },
    { title: 'Lohndaten exportieren', description: 'Arbeitszeiten und Zuschlaege direkt in die Lohnbuchhaltung exportieren.' },
  ],
  ctaText: 'LexOffice-Integration testen',
  featureHighlights: [
    { title: 'Rechnungs-Sync', description: 'Rechnungen automatisch in LexOffice übertragen.' },
    { title: 'Lohnexport', description: 'Stundenzettel und Zuschlaege für die Lohnbuchhaltung.' },
    { title: 'Keine Doppelerfassung', description: 'Daten nur einmal eingeben – den Rest erledigt Taskey.' },
    { title: 'Belegarchiv', description: 'Alle Belege revisionssicher in LexOffice.' },
    { title: 'Steuerberater-Zugang', description: 'Dein Steuerberater greift direkt auf LexOffice zu.' },
    { title: 'Sage-Alternative', description: 'Auch Sage-Export verfügbar als Alternative.' },
  ],
  closingHeadline: 'Buchhaltung. Automatisch. Fehlerfrei. In LexOffice.',
  closingText: 'Teste Taskey 3 Monate kostenlos und verbinde deine Reinigungssoftware mit LexOffice.',
  relatedLinks: [
    { href: '/loesungen/rechnung-schreiben-reinigungsfirma', label: 'Rechnungen', description: 'Rechnungen in Taskey erstellen.' },
    { href: '/loesungen/lohnabrechnung-reinigungsfirma', label: 'Lohnabrechnung', description: 'Lohndaten automatisch aufbereiten.' },
    { href: '/loesungen/digitale-stundenzettel-reinigung', label: 'Stundenzettel', description: 'Digitale Stundenzettel generieren.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
