import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Kostenvoranschlag erstellen Software | Taskey',
  description: 'Kostenvoranschläge erstellen mit Software: Positionen kalkulieren, PDF generieren, direkt versenden. Für Handwerk & Bau. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/kostenvoranschlag-erstellen-software' },
};

const data: LandingPageData = {
  badge: 'Kostenvoranschlag',
  headline: 'Kostenvoranschläge –',
  headlineHighlight: 'präzise & professionell.',
  subheadline: 'Kalkuliere in Minuten statt Stunden. Professionelle PDFs, direkt versandbereit.',
  heroDescription: 'Taskey macht Kostenvoranschläge einfach: Positionen zusammenstellen, Stundensätze und Material kalkulieren, PDF generieren und direkt per Mail versenden.',
  painPoints: [
    { text: 'Jeder Kostenvoranschlag dauert 45+ Minuten – zu lange.' },
    { text: 'Kalkulationsfehler führen zu Verlusten oder verlorenen Aufträgen.' },
    { text: 'Word-Dokumente sehen jedes Mal anders aus.' },
    { text: 'Alte Kostenvoranschläge als Vorlage? Erst mal suchen.' },
  ],
  solutionTitle: 'Kostenvoranschlag in 10 Minuten.',
  solutionDescription: 'Vorlage wählen, Positionen anpassen, kalkulieren, versenden. Fertig.',
  solutionSteps: [
    { title: 'Vorlage wählen', description: 'Nutze eine bestehende Vorlage oder starte von Null.' },
    { title: 'Automatisch kalkulieren', description: 'Stundensätze, Materialpreise und Zuschläge werden automatisch berechnet.' },
    { title: 'PDF versenden', description: 'Professionelles PDF mit Firmenlogo – per Mail direkt an den Kunden.' },
  ],
  ctaText: 'Kostenvoranschläge schneller erstellen',
  featureHighlights: [
    { title: 'Vorlagen', description: 'Wiederverwendbare Vorlagen für verschiedene Auftragstypen.' },
    { title: 'Kalkulation', description: 'Automatische Berechnung aller Positionen.' },
    { title: 'Profi-PDF', description: 'Professionelle Dokumente mit Firmenlogo.' },
    { title: 'Direkt versenden', description: 'Per Mail aus Taskey heraus verschicken.' },
    { title: 'Nachverfolgung', description: 'Status des Kostenvoranschlags tracken.' },
    { title: 'KV → Auftrag', description: 'Mit einem Klick zum Auftrag umwandeln.' },
  ],
  closingHeadline: 'Professionell kalkuliert. Schnell versendet.',
  closingText: 'Starte jetzt und erstelle deinen ersten Kostenvoranschlag in Minuten.',
  relatedLinks: [
      {
          href: '/loesungen/angebote-schreiben-handwerk',
          label: 'Angebote schreiben',
          description: 'Aus dem Kostenvoranschlag wird das fertige Angebot – mit einem Klick.'
      },
      {
          href: '/loesungen/angebotskalkulation-bau',
          label: 'Angebotskalkulation Bau',
          description: 'Material, Stunden und Gewinn exakt kalkulieren.'
      },
      {
          href: '/loesungen/stundensaetze-kalkulieren-handwerk',
          label: 'Stundensätze kalkulieren',
          description: 'Die richtigen Stundensätze für profitable Angebote berechnen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
