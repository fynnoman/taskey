import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Materialliste Baustelle erstellen – Taskey',
  description: 'Materiallisten für die Baustelle digital erstellen. Taskey berechnet Bedarfe, vermeidet Fehlbestellungen und spart Materialkosten.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/materialliste-baustelle-erstellen' },
};

const data: LandingPageData = {
  badge: 'Materiallisten',
  headline: 'Materiallisten für die',
  headlineHighlight: 'Baustelle',
  subheadline: 'digital erstellen und verwalten.',
  heroDescription: 'Nie wieder Material vergessen oder doppelt bestellen. Taskey erstellt Materiallisten für jede Baustelle und behält den Überblick über Bestellungen und Lieferungen.',
  painPoints: [
    { text: 'Materiallisten auf Zettel geschrieben – gehen verloren oder sind unleserlich.' },
    { text: 'Material fehlt auf der Baustelle – Leerlauf für das ganze Team.' },
    { text: 'Doppelbestellungen kosten unnötig Geld.' },
    { text: 'Kein Überblick, was schon bestellt und geliefert wurde.' },
  ],
  solutionTitle: 'Materialbedarf digital planen',
  solutionDescription: 'Taskey erstellt Materiallisten und verfolgt Bestellungen automatisch.',
  solutionSteps: [
    { title: 'Bedarf erfassen', description: 'Materialbedarfe pro Baustelle und Gewerk digital erfassen.' },
    { title: 'Bestellung auslösen', description: 'Materiallisten direkt als Bestellung an Lieferanten senden.' },
    { title: 'Lieferung prüfen', description: 'Gelieferte Mengen mit der Bestellung abgleichen.' },
  ],
  ctaText: 'Jetzt Materiallisten digitalisieren',
  featureHighlights: [
    { title: 'Digitale Materiallisten', description: 'Übersichtliche Listen pro Baustelle und Gewerk erstellen.' },
    { title: 'Bestellverfolgung', description: 'Status jeder Bestellung und Lieferung nachverfolgen.' },
    { title: 'Vorlagen', description: 'Materiallisten-Vorlagen für häufige Projekttypen.' },
    { title: 'Kostenübersicht', description: 'Materialkosten pro Baustelle und gesamt im Blick.' },
    { title: 'Mobile Erfassung', description: 'Materialbedarf direkt auf der Baustelle per App erfassen.' },
    { title: 'Fehlmengen-Warnung', description: 'Automatisch gewarnt werden, wenn Material knapp wird.' },
  ],
  closingHeadline: 'Immer das richtige Material zur richtigen Zeit.',
  closingText: 'Taskey macht Ihre Materialplanung fehlerfrei und effizient.',
  relatedLinks: [
      {
          href: '/loesungen/materialverbrauch-tracken-baustelle',
          label: 'Materialverbrauch tracken',
          description: 'Geplantes Material vs. tatsächlichen Verbrauch vergleichen.'
      },
      {
          href: '/loesungen/materialverwaltung-handwerk',
          label: 'Materialverwaltung',
          description: 'Alle Materialien zentral verwalten und Beständen zuordnen.'
      },
      {
          href: '/loesungen/bestellwesen-handwerksbetrieb',
          label: 'Bestellwesen',
          description: 'Aus der Materialliste direkt Bestellungen generieren.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
