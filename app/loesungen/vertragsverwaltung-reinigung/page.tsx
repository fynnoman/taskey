import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Vertragsverwaltung Reinigung – Vertraege digital managen | Taskey',
  description: 'Vertragsverwaltung für Reinigungsunternehmen: Laufzeiten, Kündigungsfristen, Leistungsumfang und Preise zentral verwalten. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/vertragsverwaltung-reinigung' },
};

const data: LandingPageData = {
  badge: 'Vertraege',
  headline: 'Vertragsverwaltung –',
  headlineHighlight: 'kein Vertrag geht verloren.',
  subheadline: 'Laufzeiten, Kündigungsfristen, SLAs – alle Vertraege digital im Griff.',
  heroDescription: 'Reinigungsvertraege sind das Rueckgrat deines Umsatzes. Taskey hilft dir, Laufzeiten zu überwachen, Fristen einzuhalten und Vertragsinhalte mit Leistungen abzugleichen.',
  painPoints: [
    { text: 'Kündigungsfristen werden verpasst – Vertraege laufen ungewollt weiter oder enden.' },
    { text: 'Vertragsdetails stehen in Papierordnern, die niemand findet.' },
    { text: 'Preisanpassungen werden vergessen, obwohl der Vertrag es erlaubt.' },
    { text: 'Kein Überblick, welche Leistungen vertraglich vereinbart sind.' },
  ],
  solutionTitle: 'Alle Vertraege. Digital. Unter Kontrolle.',
  solutionDescription: 'Taskey buendelt Vertragsinformationen zentral und erinnert dich automatisch an wichtige Fristen.',
  solutionSteps: [
    { title: 'Vertraege erfassen', description: 'Lege Vertraege an mit Laufzeit, Kündigungsfrist, Leistungsumfang und Preis.' },
    { title: 'Erinnerungen setzen', description: 'Automatische Erinnerungen vor Kündigungsfristen oder Preisanpassungen.' },
    { title: 'Soll-Ist-Abgleich', description: 'Vergleiche vereinbarte Leistungen mit tatsaechlich erbrachten Leistungen.' },
  ],
  ctaText: 'Vertraege digitalisieren',
  featureHighlights: [
    { title: 'Fristen-Alarm', description: 'Automatische Erinnerung vor Kündigungsfristen.' },
    { title: 'Vertrags-Archiv', description: 'Alle Vertraege digital und durchsuchbar.' },
    { title: 'Leistungsabgleich', description: 'Vereinbarte vs. erbrachte Leistungen vergleichen.' },
    { title: 'Preisanpassung', description: 'Preisanpassungsklauseln tracken und umsetzen.' },
    { title: 'Objekt-Verknuepfung', description: 'Vertraege mit Objekten und Kunden verknuepft.' },
    { title: 'PDF-Export', description: 'Vertraege als PDF exportieren und teilen.' },
  ],
  closingHeadline: 'Vertraege. Sicher. Transparent. Immer aktuell.',
  closingText: 'Teste Taskey 14 Tage kostenlos und behalte alle Reinigungsvertraege im Blick.',
  relatedLinks: [
    { href: '/loesungen/stammkunden-verwalten-gebäudereinigung', label: 'Kundenverwaltung', description: 'Stammkunden und Vertraege verwalten.' },
    { href: '/loesungen/sla-tracking-reinigungsfirma', label: 'SLA-Tracking', description: 'Service-Level-Agreements überwachen.' },
    { href: '/loesungen/rechnung-schreiben-reinigungsfirma', label: 'Rechnungen', description: 'Vertragsbasierte Rechnungen schreiben.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
