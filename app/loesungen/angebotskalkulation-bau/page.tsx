import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Angebotskalkulation Bau – Taskey',
  description: 'Angebote für Bauprojekte präzise kalkulieren. Taskey unterstützt Sie bei der Kalkulation von Material, Arbeitsstunden und Margen.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/angebotskalkulation-bau' },
};

const data: LandingPageData = {
  badge: 'Angebotskalkulation',
  headline: 'Angebote für Bauprojekte',
  headlineHighlight: 'präzise kalkulieren',
  subheadline: 'Nie wieder zu günstig anbieten – oder Aufträge durch überhöhte Preise verlieren.',
  heroDescription: 'Taskey hilft Ihnen, Materialkosten, Arbeitsstunden und Margen exakt zu berechnen. So erstellen Sie wettbewerbsfähige Angebote, die trotzdem profitabel sind.',
  painPoints: [
    { text: 'Angebote werden aus dem Bauch heraus kalkuliert – oft zu günstig.' },
    { text: 'Stundenlang an komplexen Kalkulationen sitzen statt Aufträge abzuarbeiten.' },
    { text: 'Nachträglich feststellen, dass ein Angebot nicht kostendeckend war.' },
    { text: 'Keine Übersicht über tatsächliche Kosten vs. kalkulierte Kosten.' },
  ],
  solutionTitle: 'Kalkulation mit Daten statt Bauchgefühl',
  solutionDescription: 'Taskey nutzt Ihre echten Projektdaten für realistische Kalkulationen.',
  solutionSteps: [
    { title: 'Positionen erfassen', description: 'Material, Arbeitszeit und Fremdleistungen – alle Kostenpositionen übersichtlich erfassen.' },
    { title: 'Automatisch kalkulieren', description: 'Taskey berechnet Gesamtkosten, Margen und empfiehlt Angebotspreise basierend auf Erfahrungswerten.' },
    { title: 'Angebot erstellen', description: 'Aus der Kalkulation ein professionelles Angebot generieren und direkt versenden.' },
  ],
  ctaText: 'Jetzt präziser kalkulieren',
  featureHighlights: [
    { title: 'Erfahrungswerte nutzen', description: 'Vergangene Projekte liefern echte Daten für genauere Kalkulationen.' },
    { title: 'Margen-Berechnung', description: 'Gewünschte Marge eingeben – Taskey berechnet den nötigen Angebotspreis.' },
    { title: 'Positionsbasiert', description: 'Jede Leistung einzeln kalkulieren für maximale Transparenz.' },
    { title: 'Vorlagen nutzen', description: 'Kalkulationsvorlagen für wiederkehrende Auftragstypen erstellen.' },
    { title: 'Nachkalkulation', description: 'Angebot vs. Ist-Kosten vergleichen und Kalkulationen verbessern.' },
    { title: 'PDF-Export', description: 'Professionelle Angebote als PDF erstellen und versenden.' },
  ],
  closingHeadline: 'Schluss mit Bauchgefühl-Kalkulationen.',
  closingText: 'Mit Taskey kalkulieren Sie Angebote auf Basis echter Daten – für mehr Aufträge und bessere Margen.',
  relatedLinks: [
      {
          href: '/loesungen/kostenvoranschlag-erstellen-software',
          label: 'Kostenvoranschlag erstellen',
          description: 'Vom kalkulierten Angebot zum fertigen Kostenvoranschlag.'
      },
      {
          href: '/loesungen/nachkalkulation-handwerk',
          label: 'Nachkalkulation',
          description: 'Nach dem Auftrag prüfen: Wurde das Angebot profitabel kalkuliert?'
      },
      {
          href: '/loesungen/stundensaetze-kalkulieren-handwerk',
          label: 'Stundensätze kalkulieren',
          description: 'Realistische Stundensätze als Basis für jede Kalkulation.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
