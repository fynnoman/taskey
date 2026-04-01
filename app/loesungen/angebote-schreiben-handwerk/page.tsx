import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Angebote schreiben Handwerk – Schnell & professionell | Taskey',
  description: 'Angebote für Handwerksbetriebe schnell erstellen: Vorlagen, Kalkulation, PDF-Export. Professionell und in Minuten. Jetzt testen!',
  alternates: { canonical: 'https://taskey.de/loesungen/angebote-schreiben-handwerk' },
};

const data: LandingPageData = {
  badge: 'Angebote schreiben',
  headline: 'Angebote schreiben –',
  headlineHighlight: 'in Minuten statt Stunden.',
  subheadline: 'Professionelle Angebote mit wenigen Klicks. Vorlagen, Kalkulation, PDF.',
  heroDescription: 'Taskey macht Angebotserstellung einfach: Wähle eine Vorlage, füge Positionen hinzu, kalkuliere – und schicke das fertige PDF direkt an den Kunden.',
  painPoints: [
    { icon: '⏰', text: 'Jedes Angebot dauert 30+ Minuten in Word oder Excel.' },
    { icon: '📊', text: 'Kalkulationen sind fehleranfällig – falsche Preise kosten Marge.' },
    { icon: '📝', text: 'Angebote sehen jedes Mal anders aus – unprofessionell.' },
    { icon: '📧', text: 'Nachfassen bei offenen Angeboten? Wird vergessen.' },
  ],
  solutionTitle: 'Angebote, die Aufträge bringen.',
  solutionDescription: 'Professionell, kalkuliert, nachverfolgbar – mit Taskey.',
  solutionSteps: [
    { icon: '📋', title: 'Vorlage wählen', description: 'Wähle aus deinen gespeicherten Vorlagen oder starte ein neues Angebot von Grund auf.' },
    { icon: '💰', title: 'Kalkulieren', description: 'Positionen, Stundensätze, Material – alles wird automatisch berechnet.' },
    { icon: '📤', title: 'Versenden', description: 'PDF generieren und direkt per Mail an den Kunden senden.' },
  ],
  ctaText: 'Angebote schneller schreiben',
  featureHighlights: [
    { icon: '📋', title: 'Vorlagen', description: 'Spare Zeit mit wiederverwendbaren Angebotsvorlagen.' },
    { icon: '💰', title: 'Auto-Kalkulation', description: 'Stundensätze, Material, Zuschläge – automatisch berechnet.' },
    { icon: '📄', title: 'PDF-Export', description: 'Professionelle PDFs mit deinem Firmenlogo.' },
    { icon: '📧', title: 'Direkt versenden', description: 'Angebote per Mail direkt aus Taskey verschicken.' },
    { icon: '🔔', title: 'Nachverfolgung', description: 'Offene Angebote automatisch nachfassen.' },
    { icon: '➡️', title: 'Angebot → Auftrag', description: 'Akzeptiertes Angebot mit einem Klick in einen Auftrag umwandeln.' },
  ],
  closingHeadline: 'Angebote, die überzeugen.',
  closingText: 'Starte jetzt und schreibe dein erstes Angebot in unter 5 Minuten.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
