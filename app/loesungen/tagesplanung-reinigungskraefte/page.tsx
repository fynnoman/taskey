import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Tagesplanung Reinigungskräfte – Taskey',
  description: 'Tagesplanung für Reinigungskräfte digital erstellen. Taskey verteilt Aufträge, plant Routen und informiert Ihre Teams automatisch.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/tagesplanung-reinigungskraefte' },
};

const data: LandingPageData = {
  badge: 'Tagesplanung',
  headline: 'Tagesplanung für',
  headlineHighlight: 'Reinigungskräfte',
  subheadline: 'Jeder weiß, was zu tun ist – jeden Tag.',
  heroDescription: 'Keine morgendlichen Anrufe mehr. Taskey erstellt Tagespläne für Ihre Reinigungskräfte automatisch – mit Objekt, Aufgaben und Uhrzeiten.',
  painPoints: [
    { icon: '📞', text: 'Jeden Morgen Anrufe und Nachrichten zur Tageseinteilung.' },
    { icon: '❓', text: 'Reinigungskräfte wissen nicht genau, was wo zu tun ist.' },
    { icon: '🚗', text: 'Ineffiziente Routen – viel Fahrzeit zwischen den Objekten.' },
    { icon: '📋', text: 'Änderungen im Tagesplan kommen nicht bei allen an.' },
  ],
  solutionTitle: 'Tagespläne automatisch verteilen',
  solutionDescription: 'Taskey informiert Ihre Reinigungskräfte automatisch über ihren Tagesplan.',
  solutionSteps: [
    { icon: '📋', title: 'Plan erstellen', description: 'Objekte und Aufgaben den Reinigungskräften für den Tag zuweisen.' },
    { icon: '📱', title: 'Automatisch senden', description: 'Jede Reinigungskraft erhält ihren Tagesplan auf das Smartphone.' },
    { icon: '🔄', title: 'Live aktualisieren', description: 'Änderungen im Plan werden sofort an alle Betroffenen gesendet.' },
  ],
  ctaText: 'Jetzt Tagesplanung digitalisieren',
  featureHighlights: [
    { icon: '📋', title: 'Detaillierte Tagespläne', description: 'Objekt, Aufgaben, Zeiten – alles auf einen Blick.' },
    { icon: '📱', title: 'Mobile Zustellung', description: 'Tagespläne direkt auf dem Smartphone der Reinigungskraft.' },
    { icon: '🗺️', title: 'Routenoptimierung', description: 'Objekte in sinnvoller Reihenfolge anordnen für kurze Wege.' },
    { icon: '🔄', title: 'Echtzeit-Updates', description: 'Planänderungen sofort auf allen Geräten sichtbar.' },
    { icon: '✅', title: 'Erledigungsstatus', description: 'Sehen, welche Objekte bereits gereinigt wurden.' },
    { icon: '📊', title: 'Tagesauswertung', description: 'Am Ende des Tages alle erledigten Aufgaben auswerten.' },
  ],
  closingHeadline: 'Jeden Tag perfekt organisiert.',
  closingText: 'Taskey macht Ihre Tagesplanung effizient – für zufriedene Kunden und motivierte Teams.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
