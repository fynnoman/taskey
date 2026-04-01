import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Materialverwaltung Handwerk | Taskey',
  description: 'Materialverwaltung für Handwerksbetriebe: Bestände, Verbrauch und Bestellungen digital managen. Kein Material mehr vergessen. Jetzt testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/materialverwaltung-handwerk' },
};

const data: LandingPageData = {
  badge: 'Materialverwaltung',
  headline: 'Material im Griff –',
  headlineHighlight: 'digital statt chaotisch.',
  subheadline: 'Welches Material ist wo? Was muss bestellt werden? Taskey weiß es.',
  heroDescription: 'Taskey digitalisiert deine Materialverwaltung: Bestände erfassen, Verbrauch tracken, Bestellungen auslösen – alles verbunden mit deinen Aufträgen.',
  painPoints: [
    { icon: '🔧', text: 'Material ist aus, aber keiner hat nachbestellt.' },
    { icon: '🏗️', text: 'Material steht auf der falschen Baustelle – unnötige Fahrten.' },
    { icon: '📝', text: 'Materialverbräuche werden nirgends erfasst – Nachkalkulation unmöglich.' },
    { icon: '💰', text: 'Du weißt nicht, wie viel Material in welchem Auftrag steckt.' },
  ],
  solutionTitle: 'Material digital managen.',
  solutionDescription: 'Bestände, Verbrauch und Bestellungen – alles in einem System.',
  solutionSteps: [
    { icon: '📦', title: 'Bestände erfassen', description: 'Lege deine Materialien an und pflege Bestände – auch per NFC-Scan.' },
    { icon: '📊', title: 'Verbrauch tracken', description: 'Mitarbeiter buchen Material auf Aufträge – automatisch vom Bestand abgezogen.' },
    { icon: '🔔', title: 'Nachbestellen', description: 'Automatische Warnung bei niedrigen Beständen – Bestellung mit einem Klick.' },
  ],
  ctaText: 'Material digital verwalten',
  featureHighlights: [
    { icon: '📦', title: 'Bestandsübersicht', description: 'Alle Materialien mit aktuellen Beständen auf einen Blick.' },
    { icon: '📊', title: 'Verbrauchstracking', description: 'Material wird automatisch Aufträgen zugeordnet.' },
    { icon: '🔔', title: 'Nachbestellwarnung', description: 'Automatische Warnung bei Unterschreitung des Mindestbestands.' },
    { icon: '🏷️', title: 'NFC-Tags', description: 'Materialien mit NFC-Tags scannen und zuordnen.' },
    { icon: '📋', title: 'Lieferscheine', description: 'Digitale Lieferscheine erstellen und zuordnen.' },
    { icon: '💰', title: 'Kostenauswertung', description: 'Materialkosten pro Auftrag – für die Nachkalkulation.' },
  ],
  closingHeadline: 'Material? Im Griff.',
  closingText: 'Starte jetzt und behalte dein Material im Überblick.',
  relatedLinks: [
      {
          href: '/loesungen/lagerverwaltung-handwerksbetrieb',
          label: 'Lagerverwaltung',
          description: 'Lagerbestände digital verwalten und Materialentnahmen tracken.'
      },
      {
          href: '/loesungen/materialverbrauch-tracken-baustelle',
          label: 'Materialverbrauch tracken',
          description: 'Den Materialverbrauch pro Baustelle exakt dokumentieren.'
      },
      {
          href: '/loesungen/bestellwesen-handwerksbetrieb',
          label: 'Bestellwesen',
          description: 'Material rechtzeitig nachbestellen – bevor es auf der Baustelle fehlt.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
