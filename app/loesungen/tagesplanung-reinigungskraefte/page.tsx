import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Tagesplanung Reinigungskräfte – Taskey',
  description: 'Tagesplanung für Reinigungskräfte digital erstellen. Taskey verteilt Aufträge, plant Routen und informiert Ihre Teams automatisch.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/tagesplanung-reinigungskraefte' },
};

const data: LandingPageData = {
  badge: 'Tagesplanung',
  headline: 'Tagesplanung für',
  headlineHighlight: 'Reinigungskräfte',
  subheadline: 'Jeder weiß, was zu tun ist – jeden Tag.',
  heroDescription: 'Keine morgendlichen Anrufe mehr. Taskey erstellt Tagespläne für Ihre Reinigungskräfte automatisch – mit Objekt, Aufgaben und Uhrzeiten.',
  painPoints: [
    { text: 'Jeden Morgen Anrufe und Nachrichten zur Tageseinteilung.' },
    { text: 'Reinigungskräfte wissen nicht genau, was wo zu tun ist.' },
    { text: 'Ineffiziente Routen – viel Fahrzeit zwischen den Objekten.' },
    { text: 'Änderungen im Tagesplan kommen nicht bei allen an.' },
  ],
  solutionTitle: 'Tagespläne automatisch verteilen',
  solutionDescription: 'Taskey informiert Ihre Reinigungskräfte automatisch über ihren Tagesplan.',
  solutionSteps: [
    { title: 'Plan erstellen', description: 'Objekte und Aufgaben den Reinigungskräften für den Tag zuweisen.' },
    { title: 'Automatisch senden', description: 'Jede Reinigungskraft erhält ihren Tagesplan auf das Smartphone.' },
    { title: 'Live aktualisieren', description: 'Änderungen im Plan werden sofort an alle Betroffenen gesendet.' },
  ],
  ctaText: 'Jetzt Tagesplanung digitalisieren',
  featureHighlights: [
    { title: 'Detaillierte Tagespläne', description: 'Objekt, Aufgaben, Zeiten – alles auf einen Blick.' },
    { title: 'Mobile Zustellung', description: 'Tagespläne direkt auf dem Smartphone der Reinigungskraft.' },
    { title: 'Routenoptimierung', description: 'Objekte in sinnvoller Reihenfolge anordnen für kurze Wege.' },
    { title: 'Echtzeit-Updates', description: 'Planänderungen sofort auf allen Geräten sichtbar.' },
    { title: 'Erledigungsstatus', description: 'Sehen, welche Objekte bereits gereinigt wurden.' },
    { title: 'Tagesauswertung', description: 'Am Ende des Tages alle erledigten Aufgaben auswerten.' },
  ],
  closingHeadline: 'Jeden Tag perfekt organisiert.',
  closingText: 'Taskey macht Ihre Tagesplanung effizient – für zufriedene Kunden und motivierte Teams.',
  relatedLinks: [
      {
          href: '/loesungen/einsatzplanung-gebaeudereinigung',
          label: 'Einsatzplanung Reinigung',
          description: 'Von der Tagesplanung zur langfristigen Einsatzplanung.'
      },
      {
          href: '/loesungen/schichtplanung-reinigungsunternehmen',
          label: 'Schichtplanung',
          description: 'Tagespläne in Schichtmodelle integrieren.'
      },
      {
          href: '/loesungen/arbeitszeiterfassung-reinigungsfirma',
          label: 'Arbeitszeiterfassung',
          description: 'Geplante vs. tatsächliche Arbeitszeiten vergleichen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
