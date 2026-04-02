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
    { text: 'Die Einsatzplanung läuft über WhatsApp-Gruppen und Anrufe.' },
    { text: 'Neue Objekte und Sonderreinigungen gehen in der Flut unter.' },
    { text: 'Reinigungskräfte wissen morgens nicht, wo sie hin sollen.' },
    { text: 'Welche Objekte sind profitabel? Keine Ahnung.' },
  ],
  solutionTitle: 'Reinigungsaufträge – smart geplant.',
  solutionDescription: 'Objekte, Teams, Zeitfenster – alles in einer übersichtlichen Planung.',
  solutionSteps: [
    { title: 'Objekte anlegen', description: 'Lege alle Reinigungsobjekte an – mit Adresse, Ansprechpartner, Reinigungsplan und SLA.' },
    { title: 'Teams zuweisen', description: 'Weise Reinigungsteams zu und plane regelmäßige Einsätze oder Sonderreinigungen.' },
    { title: 'Alles im Blick', description: 'Teams sehen ihre Einsätze in der App – du siehst den Status aller Objekte live.' },
  ],
  ctaText: 'Reinigungsplanung starten',
  featureHighlights: [
    { title: 'Objektverwaltung', description: 'Alle Objekte mit Plänen, Kontakten und Reinigungsrhythmus.' },
    { title: 'Wiederkehrende Einsätze', description: 'Regelmäßige Reinigungen automatisch planen – täglich, wöchentlich, monatlich.' },
    { title: 'Reinigungschecklisten', description: 'Digitale Checklisten pro Objekt – was wurde gereinigt?' },
    { title: 'Fotodokumentation', description: 'Vorher/Nachher-Fotos als Qualitätsnachweis.' },
    { title: 'Objektprofitabilität', description: 'Welches Objekt bringt Gewinn, welches kostet nur?' },
    { title: 'Mobile Einsatzliste', description: 'Reinigungskräfte sehen alle Einsätze auf dem Handy.' },
  ],
  closingHeadline: 'Reinigung planen. Ohne Chaos.',
  closingText: 'Starte jetzt und erlebe, wie einfach Auftragsplanung für Reinigungsfirmen sein kann.',
  relatedLinks: [
      {
          href: '/loesungen/einsatzplanung-gebaeudereinigung',
          label: 'Einsatzplanung Gebäudereinigung',
          description: 'Teams Objekten zuordnen und Einsatzpläne automatisch erstellen.'
      },
      {
          href: '/loesungen/reinigungsplaene-digital-erstellen',
          label: 'Reinigungspläne digital',
          description: 'Reinigungspläne erstellen, teilen und Fortschritte live verfolgen.'
      },
      {
          href: '/loesungen/kundendatenbank-reinigungsfirma',
          label: 'Kundendatenbank Reinigung',
          description: 'Alle Kundendaten, Objekte und Verträge zentral verwalten.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
