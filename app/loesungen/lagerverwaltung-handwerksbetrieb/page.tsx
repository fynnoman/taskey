import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Lagerverwaltung Handwerksbetrieb | Taskey',
  description: 'Lagerverwaltung für Handwerksbetriebe: Bestände digital führen, Ein- und Ausgänge tracken. Mit NFC-Tags. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/lagerverwaltung-handwerksbetrieb' },
};

const data: LandingPageData = {
  badge: 'Lagerverwaltung',
  headline: 'Lager im Griff –',
  headlineHighlight: 'digital & aktuell.',
  subheadline: 'Bestände erfassen, Entnahmen buchen und Nachbestellungen auslösen – automatisch.',
  heroDescription: 'Taskey digitalisiert dein Lager: Scanne Material per NFC, buche Entnahmen auf Aufträge und behalte Bestände in Echtzeit im Blick.',
  painPoints: [
    { text: 'Keiner weiß, was noch im Lager ist – erst wenn es fehlt.' },
    { text: 'Entnahmen werden nicht dokumentiert – Bestände stimmen nie.' },
    { text: 'Material ist aus – Baustelle steht still, bis nachbestellt wird.' },
    { text: 'Materialkosten pro Auftrag? Keine Ahnung.' },
  ],
  solutionTitle: 'Lager digital. Bestände aktuell.',
  solutionDescription: 'Jede Entnahme wird gebucht – Bestände sind immer auf dem neuesten Stand.',
  solutionSteps: [
    { title: 'Artikel anlegen', description: 'Lege deine Materialien und Werkzeuge im System an – mit Mindestbeständen.' },
    { title: 'Entnahme buchen', description: 'Mitarbeiter scannen Material per NFC oder buchen in der App – automatisch dem Auftrag zugeordnet.' },
    { title: 'Nachbestellwarnung', description: 'Bei Unterschreitung des Mindestbestands wirst du automatisch informiert.' },
  ],
  ctaText: 'Lager digitalisieren',
  featureHighlights: [
    { title: 'Bestandsübersicht', description: 'Alle Materialien mit aktuellen Beständen.' },
    { title: 'NFC-Scan', description: 'Material per NFC-Tag scannen und buchen.' },
    { title: 'Verbrauchshistorie', description: 'Wer hat wann was entnommen – lückenlos dokumentiert.' },
    { title: 'Nachbestellalarm', description: 'Automatische Warnung bei niedrigen Beständen.' },
    { title: 'Auftrags-Zuordnung', description: 'Materialentnahmen werden automatisch Aufträgen zugeordnet.' },
    { title: 'Inventurliste', description: 'Inventurlisten per Knopfdruck exportieren.' },
  ],
  closingHeadline: 'Lager? Unter Kontrolle.',
  closingText: 'Starte jetzt und behalte dein Lager digital im Griff.',
  relatedLinks: [
      {
          href: '/loesungen/materialverwaltung-handwerk',
          label: 'Materialverwaltung',
          description: 'Material nicht nur lagern, sondern aktiv verwalten und zuordnen.'
      },
      {
          href: '/loesungen/bestellwesen-handwerksbetrieb',
          label: 'Bestellwesen',
          description: 'Bei niedrigem Bestand automatisch nachbestellen.'
      },
      {
          href: '/loesungen/werkzeugverwaltung-handwerk',
          label: 'Werkzeugverwaltung',
          description: 'Nicht nur Material – auch Werkzeuge digital verwalten.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
