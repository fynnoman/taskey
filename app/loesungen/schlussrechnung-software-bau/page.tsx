import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Schlussrechnung Software Bau – Taskey',
  description: 'Schlussrechnungen für Bauprojekte automatisch erstellen. Taskey verrechnet alle Abschläge und generiert die finale Rechnung in Sekunden.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/schlussrechnung-software-bau' },
};

const data: LandingPageData = {
  badge: 'Schlussrechnung',
  headline: 'Schlussrechnungen für',
  headlineHighlight: 'Bauprojekte',
  subheadline: 'automatisch & fehlerfrei erstellen',
  heroDescription: 'Keine manuelle Verrechnung von Abschlägen mehr. Taskey generiert die korrekte Schlussrechnung inklusive aller Teilzahlungen automatisch.',
  painPoints: [
    { text: 'Abschläge manuell verrechnen ist fehleranfällig und dauert ewig.' },
    { text: 'Fehler in der Schlussrechnung führen zu Zahlungsverzögerungen.' },
    { text: 'Aufwändiges Zusammensuchen aller Teilrechnungen und Nachträge.' },
    { text: 'Streitigkeiten mit Auftraggebern über bereits geleistete Zahlungen.' },
  ],
  solutionTitle: 'Schlussrechnung auf Knopfdruck',
  solutionDescription: 'Taskey kennt alle Abschläge und erstellt die finale Rechnung automatisch.',
  solutionSteps: [
    { title: 'Projekt abschließen', description: 'Markieren Sie das Projekt als abgeschlossen – alle Leistungen sind erfasst.' },
    { title: 'Schlussrechnung generieren', description: 'Taskey verrechnet automatisch alle Abschläge und erstellt die korrekte Endabrechnung.' },
    { title: 'Versenden & archivieren', description: 'Rechnung versenden und mit allen Projektunterlagen digital archivieren.' },
  ],
  ctaText: 'Jetzt Schlussrechnungen vereinfachen',
  featureHighlights: [
    { title: 'Automatische Verrechnung', description: 'Alle Abschlagszahlungen werden automatisch korrekt abgezogen.' },
    { title: 'Nachtragsverwaltung', description: 'Nachträge und Zusatzleistungen werden sauber in die Schlussrechnung integriert.' },
    { title: 'Soll-Ist-Vergleich', description: 'Angebotssumme vs. tatsächliche Kosten auf einen Blick.' },
    { title: 'Komplette Dokumentation', description: 'Alle Teilrechnungen, Nachträge und Leistungsnachweise gebündelt.' },
    { title: 'Rechtskonform', description: 'Alle Pflichtangaben automatisch enthalten – GoBD-konform.' },
    { title: 'Export & Versand', description: 'Als PDF exportieren oder direkt per E-Mail versenden.' },
  ],
  closingHeadline: 'Schlussrechnungen ohne Stress.',
  closingText: 'Taskey verrechnet alles automatisch – Sie prüfen nur noch und versenden.',
  relatedLinks: [
      {
          href: '/loesungen/abschlagsrechnung-erstellen-handwerk',
          label: 'Abschlagsrechnungen',
          description: 'Abschlagsrechnungen erstellen und bei der Schlussrechnung verrechnen.'
      },
      {
          href: '/loesungen/bauabrechnung-software',
          label: 'Bauabrechnung',
          description: 'Die gesamte Bauabrechnung digital managen.'
      },
      {
          href: '/loesungen/aufmass-erstellen-digital',
          label: 'Aufmaß digital',
          description: 'Das digitale Aufmaß als Grundlage für die korrekte Schlussrechnung.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
