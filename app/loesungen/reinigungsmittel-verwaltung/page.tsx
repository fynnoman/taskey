import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Reinigungsmittel Verwaltung – Material & Verbrauch tracken | Taskey',
  description: 'Reinigungsmittel und Material digital verwalten: Bestaende, Verbrauch, Nachbestellungen. Fuer Gebaeudereinigungsunternehmen im DACH-Raum.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/reinigungsmittel-verwaltung' },
};

const data: LandingPageData = {
  badge: 'Materialverwaltung',
  headline: 'Reinigungsmittel –',
  headlineHighlight: 'Verbrauch tracken. Kosten senken.',
  subheadline: 'Wer verbraucht was, wo und wie viel? Behalte den Ueberblick ueber deine Reinigungsmittel.',
  heroDescription: 'Reinigungsmittel sind ein erheblicher Kostenfaktor. Taskey hilft dir, Verbrauch zu tracken, Bestaende zu verwalten und Nachbestellungen zu optimieren.',
  painPoints: [
    { text: 'Niemand weiss, wie viel Reinigungsmittel pro Objekt verbraucht wird.' },
    { text: 'Reinigungskraefte bestellen Material ohne Abstimmung – Kosten explodieren.' },
    { text: 'Lager ist leer, wenn man es braucht – Nachbestellungen kommen zu spaet.' },
    { text: 'Materialkosten sind nicht pro Objekt zuordenbar.' },
  ],
  solutionTitle: 'Material im Griff. Kosten im Blick.',
  solutionDescription: 'Taskey verknuepft Materialverbrauch mit Objekten und gibt dir volle Transparenz ueber Kosten.',
  solutionSteps: [
    { title: 'Materialstamm anlegen', description: 'Hinterlege alle Reinigungsmittel mit Preisen und Lieferanten.' },
    { title: 'Verbrauch erfassen', description: 'Reinigungskraefte melden Materialverbrauch direkt in der App pro Objekt.' },
    { title: 'Auswerten & optimieren', description: 'Sieh den Verbrauch pro Objekt, Team oder Zeitraum und optimiere Bestellungen.' },
  ],
  ctaText: 'Materialverwaltung starten',
  featureHighlights: [
    { title: 'Verbrauch pro Objekt', description: 'Materialkosten dem richtigen Objekt zuordnen.' },
    { title: 'Bestandsuebersicht', description: 'Aktuelle Lagerbestaende in Echtzeit.' },
    { title: 'Nachbestell-Alarm', description: 'Automatische Benachrichtigung bei Mindestbestand.' },
    { title: 'Lieferanten-Verwaltung', description: 'Lieferanten und Preise zentral verwalten.' },
    { title: 'Kostenauswertung', description: 'Material-Kostenanalyse pro Objekt und Monat.' },
    { title: 'App-Erfassung', description: 'Reinigungskraefte melden Verbrauch per App.' },
  ],
  closingHeadline: 'Reinigungsmittel. Transparent. Effizient. Digital.',
  closingText: 'Teste Taskey 14 Tage kostenlos und spare bei deinen Materialkosten.',
  relatedLinks: [
    { href: '/loesungen/inventar-verwalten-reinigungsfirma', label: 'Inventarverwaltung', description: 'Geraete und Material verwalten.' },
    { href: '/loesungen/nachkalkulation-reinigungsauftraege', label: 'Nachkalkulation', description: 'Auftraege nachkalkulieren.' },
    { href: '/loesungen/rechnung-schreiben-reinigungsfirma', label: 'Rechnungen', description: 'Rechnungen mit Materialkosten erstellen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
