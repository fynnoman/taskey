import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Auftragsplanung Reinigungsfirma | Taskey',
  description: 'Auftragsplanung für Reinigungsfirmen: Objekte, Teams und Einsätze digital planen und steuern. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/auftragsplanung-reinigungsfirma' },
};

const data: LandingPageData = {
  badge: 'Auftragsplanung Reinigung',
  headline: 'Reinigungsaufträge planen –',
  headlineHighlight: 'effizient & digital.',
  subheadline: 'Welches Team reinigt wann welches Objekt? Mit Taskey ist das in Sekunden geplant.',
  heroDescription: 'Taskey ist die Auftragsplanungssoftware für Reinigungsfirmen. Objekte anlegen, Teams zuweisen, Einsätze planen – alles in einem System.',
  painPoints: [
    { icon: '🧹', text: 'Die Einsatzplanung läuft über WhatsApp-Gruppen und Anrufe.' },
    { icon: '📋', text: 'Neue Objekte und Sonderreinigungen gehen in der Flut unter.' },
    { icon: '📞', text: 'Reinigungskräfte wissen morgens nicht, wo sie hin sollen.' },
    { icon: '📊', text: 'Welche Objekte sind profitabel? Keine Ahnung.' },
  ],
  solutionTitle: 'Reinigungsaufträge – smart geplant.',
  solutionDescription: 'Objekte, Teams, Zeitfenster – alles in einer übersichtlichen Planung.',
  solutionSteps: [
    { icon: '🏢', title: 'Objekte anlegen', description: 'Lege alle Reinigungsobjekte an – mit Adresse, Ansprechpartner, Reinigungsplan und SLA.' },
    { icon: '👥', title: 'Teams zuweisen', description: 'Weise Reinigungsteams zu und plane regelmäßige Einsätze oder Sonderreinigungen.' },
    { icon: '📱', title: 'Alles im Blick', description: 'Teams sehen ihre Einsätze in der App – du siehst den Status aller Objekte live.' },
  ],
  ctaText: 'Reinigungsplanung starten',
  featureHighlights: [
    { icon: '🏢', title: 'Objektverwaltung', description: 'Alle Objekte mit Plänen, Kontakten und Reinigungsrhythmus.' },
    { icon: '📅', title: 'Wiederkehrende Einsätze', description: 'Regelmäßige Reinigungen automatisch planen – täglich, wöchentlich, monatlich.' },
    { icon: '📋', title: 'Reinigungschecklisten', description: 'Digitale Checklisten pro Objekt – was wurde gereinigt?' },
    { icon: '📸', title: 'Fotodokumentation', description: 'Vorher/Nachher-Fotos als Qualitätsnachweis.' },
    { icon: '📊', title: 'Objektprofitabilität', description: 'Welches Objekt bringt Gewinn, welches kostet nur?' },
    { icon: '📱', title: 'Mobile Einsatzliste', description: 'Reinigungskräfte sehen alle Einsätze auf dem Handy.' },
  ],
  closingHeadline: 'Reinigung planen. Ohne Chaos.',
  closingText: 'Starte jetzt und erlebe, wie einfach Auftragsplanung für Reinigungsfirmen sein kann.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
