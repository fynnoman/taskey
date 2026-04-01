import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Tourenplanung Reinigungsteams | Taskey',
  description: 'Tourenplanung für Reinigungsteams: Objekte nach Route planen, Fahrzeiten minimieren, Teams effizient einsetzen. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/tourenplanung-reinigungsteams' },
};

const data: LandingPageData = {
  badge: 'Tourenplanung',
  headline: 'Touren planen –',
  headlineHighlight: 'effizient statt kreuz und quer.',
  subheadline: 'Optimiere die Routen deiner Reinigungsteams – weniger Fahrzeit, mehr Produktivität.',
  heroDescription: 'Taskey hilft dir, die Einsätze deiner Reinigungsteams nach Route zu planen. Weniger Fahrzeit, weniger Sprit, mehr gereinigte Objekte pro Tag.',
  painPoints: [
    { icon: '🚗', text: 'Reinigungsteams fahren kreuz und quer – unnötige Kilometer jeden Tag.' },
    { icon: '⛽', text: 'Spritkosten und Fahrzeiten fressen die Marge.' },
    { icon: '📋', text: 'Tourenplanung auf Papier ist unflexibel bei kurzfristigen Änderungen.' },
    { icon: '⏰', text: 'Teams kommen zu spät, weil die Reihenfolge nicht optimiert ist.' },
  ],
  solutionTitle: 'Optimierte Touren. Mehr Objekte pro Tag.',
  solutionDescription: 'Plane Touren visuell auf der Karte – die optimale Route berechnet sich von allein.',
  solutionSteps: [
    { icon: '🗺️', title: 'Objekte auf Karte', description: 'Sieh alle Objekte auf einer Karte und plane die Route visuell.' },
    { icon: '🚗', title: 'Route optimieren', description: 'Taskey schlägt die optimale Reihenfolge vor – minimale Fahrzeit.' },
    { icon: '📱', title: 'Tour aufs Handy', description: 'Das Team erhält die Tour mit Navigation direkt auf dem Smartphone.' },
  ],
  ctaText: 'Touren optimieren',
  featureHighlights: [
    { icon: '🗺️', title: 'Kartenansicht', description: 'Alle Objekte auf einer interaktiven Karte.' },
    { icon: '🚗', title: 'Routenoptimierung', description: 'Automatische Berechnung der kürzesten Route.' },
    { icon: '📱', title: 'Mobile Navigation', description: 'Teams navigieren direkt über die App zum nächsten Objekt.' },
    { icon: '🔄', title: 'Flexible Umplanung', description: 'Bei Ausfall schnell umplanen – alle werden informiert.' },
    { icon: '📊', title: 'Fahrzeit-Reports', description: 'Auswertung der Fahrzeiten und Strecken pro Team.' },
    { icon: '⛽', title: 'Kosten senken', description: 'Weniger Fahrzeit = weniger Sprit = mehr Marge.' },
  ],
  closingHeadline: 'Kürzere Wege. Mehr Umsatz.',
  closingText: 'Teste Taskey und optimiere die Touren deiner Reinigungsteams.',
  relatedLinks: [
      {
          href: '/loesungen/einsatzplanung-gebaeudereinigung',
          label: 'Einsatzplanung Reinigung',
          description: 'Touren als Teil der gesamten Einsatzplanung für Reinigungsteams.'
      },
      {
          href: '/loesungen/tagesplanung-reinigungskraefte',
          label: 'Tagesplanung',
          description: 'Touren in den täglichen Einsatzplan integrieren.'
      },
      {
          href: '/loesungen/fahrzeugplanung-handwerksbetrieb',
          label: 'Fahrzeugplanung',
          description: 'Fahrzeuge für die Touren effizient einplanen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
