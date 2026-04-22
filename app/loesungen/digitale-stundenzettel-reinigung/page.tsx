import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Digitale Stundenzettel Reinigung – Automatisch & fehlerfrei | Taskey',
  description: 'Digitale Stundenzettel für Reinigungsunternehmen: Arbeitszeiten per NFC erfassen, automatisch berechnen, als PDF exportieren. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/digitale-stundenzettel-reinigung' },
};

const data: LandingPageData = {
  badge: 'Stundenzettel',
  headline: 'Stundenzettel –',
  headlineHighlight: 'automatisch. fehlerfrei. digital.',
  subheadline: 'Kein Papier, keine Fehler. Arbeitszeiten per NFC erfasst und berechnet.',
  heroDescription: 'Papierne Stundenzettel kosten dein Buero Stunden. Taskey generiert Stundenzettel automatisch aus NFC-Scans – bereit für die Lohnabrechnung.',
  painPoints: [
    { text: 'Handgeschriebene Stundenzettel sind unleserlich und fehlerhaft.' },
    { text: 'Das Buero braucht Stunden, um Stundenzettel einzutippen.' },
    { text: 'Mitarbeiter vergessen, Zeiten aufzuschreiben.' },
    { text: 'Fehler in Stundenzetteln führen zu falschen Lohnabrechnungen.' },
  ],
  solutionTitle: 'NFC scannen. Stundenzettel fertig.',
  solutionDescription: 'Arbeitszeiten werden per NFC erfasst und automatisch als Stundenzettel aufbereitet.',
  solutionSteps: [
    { title: 'NFC-Scan bei Arbeitsbeginn', description: 'Mitarbeiter scannt am Objekt – Zeitstempel + GPS werden erfasst.' },
    { title: 'NFC-Scan bei Arbeitsende', description: 'Feierabend-Scan am gleichen Tag – Arbeitszeit wird automatisch berechnet.' },
    { title: 'Stundenzettel exportieren', description: 'Wochen- oder Monatsübersicht als PDF oder direkt in die Lohnbuchhaltung.' },
  ],
  ctaText: 'Stundenzettel digitalisieren',
  featureHighlights: [
    { title: 'Automatische Berechnung', description: 'Arbeitszeit, Pausen, Ueberstunden – alles automatisch berechnet.' },
    { title: 'PDF-Export', description: 'Stundenzettel als PDF für Mitarbeiter oder Steuerberater.' },
    { title: 'Lohnbuchhaltungs-Export', description: 'Als PDF, CSV oder Excel exportieren.' },
    { title: 'Objekt-Zuordnung', description: 'Stunden werden automatisch dem richtigen Objekt zugeordnet.' },
    { title: 'Genehmigungsworkflow', description: 'Objektleiter prüft und genehmigt Stundenzettel digital.' },
    { title: 'Archivierung', description: 'Alle Stundenzettel revisionssicher archiviert.' },
  ],
  closingHeadline: 'Stundenzettel. Digital. Automatisch. Korrekt.',
  closingText: 'Teste Taskey 3 Monate kostenlos und spare Stunden bei der Lohnvorbereitung.',
  relatedLinks: [
    { href: '/loesungen/arbeitszeiterfassung-reinigungsfirma', label: 'Zeiterfassung', description: 'Arbeitszeiten per NFC erfassen.' },
    { href: '/loesungen/lohnabrechnung-reinigungsfirma', label: 'Lohnabrechnung', description: 'Stundenzettel direkt in die Lohnabrechnung.' },
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Leistungsnachweis', description: 'NFC-Scans als Basis für Stundenzettel.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
