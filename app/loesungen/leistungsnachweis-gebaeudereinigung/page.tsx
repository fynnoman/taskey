import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Leistungsnachweis Gebäudereinigung | Taskey',
  description: 'Digitale Leistungsnachweise für Gebäudereinigung: NFC-Anwesenheit, Checklisten, Fotodokumentation. Qualität nachweisbar. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/leistungsnachweis-gebaeudereinigung' },
};

const data: LandingPageData = {
  badge: 'Leistungsnachweis Reinigung',
  headline: 'Leistungsnachweise –',
  headlineHighlight: 'automatisch & lückenlos.',
  subheadline: 'Beweisen Sie Ihren Kunden, dass, wann und wie gereinigt wurde.',
  heroDescription: 'Taskey erstellt automatische Leistungsnachweise für die Gebäudereinigung: NFC-Scan bei Ankunft, Checklisten abarbeiten, Fotos machen – alles wird dokumentiert.',
  painPoints: [
    { text: 'Kunden fordern Leistungsnachweise – du hast keine strukturierten.' },
    { text: 'Reklamationen häufen sich – du kannst nicht beweisen, dass gereinigt wurde.' },
    { text: 'Manuelle Nachweise zu erstellen frisst Bürozeit.' },
    { text: 'Kunden kürzen Rechnungen wegen fehlender Nachweise.' },
  ],
  solutionTitle: 'Leistungsnachweise auf Knopfdruck.',
  solutionDescription: 'NFC-Scan, Checkliste, Fotos – der Nachweis erstellt sich von selbst.',
  solutionSteps: [
    { title: 'NFC-Tag scannen', description: 'Die Reinigungskraft scannt den NFC-Tag am Objekt – Ankunft wird dokumentiert.' },
    { title: 'Checkliste abarbeiten', description: 'Digitale Checkliste pro Objekt – jeder Punkt wird abgehakt.' },
    { title: 'Nachweis automatisch', description: 'Ein fertiger Leistungsnachweis wird automatisch erstellt und kann an den Kunden gehen.' },
  ],
  ctaText: 'Leistungsnachweise automatisieren',
  featureHighlights: [
    { title: 'NFC-Anwesenheit', description: 'NFC-Scan belegt die Anwesenheit am Objekt.' },
    { title: 'Digitale Checklisten', description: 'Individuelle Checklisten pro Objekt und Reinigungsart.' },
    { title: 'Fotodokumentation', description: 'Fotos als Qualitätsnachweis – mit Zeitstempel.' },
    { title: 'PDF-Nachweis', description: 'Automatischer Leistungsnachweis als professionelles PDF.' },
    { title: 'Auto-Versand', description: 'Nachweise automatisch per Mail an den Kunden senden.' },
    { title: 'Qualitäts-Score', description: 'Automatische Bewertung der Reinigungsqualität pro Objekt.' },
  ],
  closingHeadline: 'Gereinigt. Nachgewiesen. Bezahlt.',
  closingText: 'Starte jetzt und liefere Ihren Kunden automatische Leistungsnachweise.',
  relatedLinks: [
      {
          href: '/loesungen/rechnung-schreiben-reinigungsfirma',
          label: 'Rechnungen Reinigung',
          description: 'Leistungsnachweise als Basis für korrekte Rechnungsstellung.'
      },
      {
          href: '/loesungen/qualitaetskontrolle-gebäudereinigung',
          label: 'Qualitätskontrolle',
          description: 'Leistungsnachweise zur Qualitätssicherung heranziehen.'
      },
      {
          href: '/loesungen/sla-tracking-reinigungsfirma',
          label: 'SLA-Tracking',
          description: 'Erbrachte Leistungen gegen vereinbarte SLAs abgleichen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
