import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Arbeitszeiterfassung Reinigungsfirma – Digital & DSGVO-konform | Taskey',
  description: 'Arbeitszeiterfassung für Reinigungsfirmen: GPS-basiert, NFC-Tags an Objekten, automatische Stundennachweise. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/arbeitszeiterfassung-reinigungsfirma' },
};

const data: LandingPageData = {
  badge: 'Reinigungsfirma',
  headline: 'Arbeitszeiten in der Reinigung –',
  headlineHighlight: 'endlich transparent.',
  subheadline: 'Wer hat wann welches Objekt gereinigt? Mit Taskey weißt du es auf die Minute.',
  heroDescription: 'NFC-Tags an jedem Objekt, GPS-Nachweis bei jedem Einsatz. Deine Reinigungskräfte stempeln sich ein – du hast alle Zeiten sofort digital.',
  painPoints: [
    { text: 'Reinigungskräfte melden sich nicht an und ab – Zeiten sind geschätzt.' },
    { text: 'Kunden beschweren sich, dass nicht gereinigt wurde – du hast keinen Beweis.' },
    { text: 'Stundennachweise für verschiedene Objekte manuell erstellen dauert ewig.' },
    { text: 'Überstunden werden falsch berechnet, Lohnabrechnungen sind fehlerhaft.' },
  ],
  solutionTitle: 'Jedes Objekt, jede Reinigungskraft – erfasst.',
  solutionDescription: 'NFC-Tag am Objekt scannen, fertig. Taskey dokumentiert alles automatisch.',
  solutionSteps: [
    { title: 'NFC-Tag am Objekt', description: 'Klebe einen NFC-Tag am Eingang jedes Reinigungsobjekts. Mitarbeiter scannen beim Kommen und Gehen.' },
    { title: 'GPS-Nachweis', description: 'Jeder Scan wird mit GPS-Position dokumentiert – Beweis, dass vor Ort gereinigt wurde.' },
    { title: 'Automatische Abrechnung', description: 'Stunden pro Objekt werden automatisch berechnet – perfekt für die Kundenabrechnung.' },
  ],
  ctaText: 'Reinigungszeiten digitalisieren',
  featureHighlights: [
    { title: 'Objekt-basierte Erfassung', description: 'Stunden werden automatisch dem richtigen Objekt zugeordnet.' },
    { title: 'Fotodokumentation', description: 'Vorher/Nachher-Fotos mit Zeitstempel als Qualitätsnachweis.' },
    { title: 'Checklisten', description: 'Digitale Reinigungspläne pro Objekt – abgehakt und dokumentiert.' },
    { title: 'Teamplanung', description: 'Weise Reinigungskräfte Objekten zu und plane Schichten.' },
    { title: 'Leistungsnachweise', description: 'Automatische Leistungsnachweise für jeden Kunden.' },
    { title: 'Lohnvorbereitung', description: 'Fertige Stundenübersichten für die Lohnabrechnung.' },
  ],
  closingHeadline: 'Reinigung. Dokumentiert. Abgerechnet.',
  closingText: 'Teste Taskey 14 Tage kostenlos und erlebe, wie einfach Zeiterfassung in der Reinigung sein kann.',
  relatedLinks: [
      {
          href: '/loesungen/schichtplanung-reinigungsunternehmen',
          label: 'Schichtplanung Reinigung',
          description: 'Schichten planen und Arbeitszeiten direkt pro Schicht erfassen.'
      },
      {
          href: '/loesungen/lohnabrechnung-reinigungsfirma',
          label: 'Lohnabrechnung Reinigung',
          description: 'Erfasste Zeiten direkt in die Lohnabrechnung übernehmen – ohne Medienbruch.'
      },
      {
          href: '/loesungen/einsatzplanung-gebaeudereinigung',
          label: 'Einsatzplanung Gebäudereinigung',
          description: 'Wer reinigt wann welches Objekt? Einsätze planen und Zeiten automatisch zuordnen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
