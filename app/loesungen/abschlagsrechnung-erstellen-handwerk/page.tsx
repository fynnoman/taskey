import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Abschlagsrechnung erstellen Handwerk – Taskey',
  description: 'Abschlagsrechnungen für Handwerksprojekte einfach erstellen. Taskey unterstützt Teilrechnungen, Schlussrechnungen und behält den Überblick.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/abschlagsrechnung-erstellen-handwerk' },
};

const data: LandingPageData = {
  badge: 'Abschlagsrechnungen',
  headline: 'Abschlagsrechnungen im',
  headlineHighlight: 'Handwerk',
  subheadline: 'einfach erstellen & verwalten',
  heroDescription: 'Große Projekte erfordern Teilzahlungen. Taskey erstellt Abschlagsrechnungen automatisch, behält den Überblick über Zahlungen und generiert die Schlussrechnung.',
  painPoints: [
    { text: 'Manuelles Berechnen von Abschlagssummen ist fehleranfällig und zeitraubend.' },
    { text: 'Kein Überblick, welche Abschläge bereits bezahlt wurden.' },
    { text: 'Schlussrechnung stimmt nicht mit den Abschlägen überein – Ärger mit dem Kunden.' },
    { text: 'Liquiditätsengpässe, weil Abschlagsrechnungen zu spät gestellt werden.' },
  ],
  solutionTitle: 'Teilzahlungen automatisch verwalten',
  solutionDescription: 'Taskey verfolgt jeden Abschlag vom ersten bis zum letzten Euro.',
  solutionSteps: [
    { title: 'Auftragssumme hinterlegen', description: 'Gesamtauftragswert eingeben und Abschlagsintervalle festlegen.' },
    { title: 'Abschlag erstellen', description: 'Per Knopfdruck die nächste Abschlagsrechnung mit korrekter Nummerierung generieren.' },
    { title: 'Schlussrechnung', description: 'Automatische Schlussrechnung mit Auflistung aller geleisteten Abschläge.' },
  ],
  ctaText: 'Jetzt Abschläge digitalisieren',
  featureHighlights: [
    { title: 'Automatische Nummerierung', description: 'Fortlaufende Abschlagsnummern werden automatisch vergeben.' },
    { title: 'Zahlungsübersicht', description: 'Auf einen Blick sehen, welche Abschläge offen oder bezahlt sind.' },
    { title: 'Schlussrechnung', description: 'Automatisch generierte Schlussrechnung mit allen Abzügen.' },
    { title: 'Liquiditätsplanung', description: 'Geplante Zahlungseingänge für bessere Finanzplanung.' },
    { title: 'Direktversand', description: 'Abschlagsrechnungen per E-Mail direkt an den Kunden senden.' },
    { title: 'Projektverknüpfung', description: 'Alle Rechnungen sind dem zugehörigen Projekt zugeordnet.' },
  ],
  closingHeadline: 'Abschlagsrechnungen ohne Kopfschmerzen.',
  closingText: 'Taskey übernimmt die Verwaltung Ihrer Teilzahlungen – damit Sie sich auf die Arbeit konzentrieren können.',
  relatedLinks: [
      {
          href: '/loesungen/schlussrechnung-software-bau',
          label: 'Schlussrechnung Bau',
          description: 'Nach den Abschlägen folgt die Schlussrechnung – ebenso einfach erstellt.'
      },
      {
          href: '/loesungen/rechnungsprogramm-handwerker',
          label: 'Rechnungsprogramm',
          description: 'Alle Rechnungsarten in einem System – Abschlag, Teilrechnung, Schlussrechnung.'
      },
      {
          href: '/loesungen/bauabrechnung-software',
          label: 'Bauabrechnung',
          description: 'Die komplette Bauabrechnung digital – vom Aufmaß bis zur Rechnung.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
