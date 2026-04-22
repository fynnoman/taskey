import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Vorbereitung Steuerberater Handwerk – Taskey',
  description: 'Unterlagen für den Steuerberater im Handwerk vorbereiten. Taskey exportiert alle relevanten Daten – Stunden, Rechnungen, Belege – auf Knopfdruck.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/vorbereitung-steuerberater-handwerk' },
};

const data: LandingPageData = {
  badge: 'Steuerberater-Vorbereitung',
  headline: 'Unterlagen für den',
  headlineHighlight: 'Steuerberater',
  subheadline: 'auf Knopfdruck vorbereiten.',
  heroDescription: 'Nie wieder panische Nächte vor dem Steuerberater-Termin. Taskey hat alle Daten schon aufbereitet – Stunden, Rechnungen, Belege – ein Klick, fertig.',
  painPoints: [
    { text: 'Tage vor dem Steuerberater-Termin hektisch Belege zusammensuchen.' },
    { text: 'Fehlende Unterlagen führen zu höheren Steuerberaterkosten.' },
    { text: 'Daten müssen manuell aus verschiedenen Quellen zusammengetragen werden.' },
    { text: 'Der Steuerberater wartet wochenlang auf Ihre Unterlagen.' },
  ],
  solutionTitle: 'Steuerberater-Export in Sekunden',
  solutionDescription: 'Taskey bereitet alle steuerrelevanten Daten automatisch auf.',
  solutionSteps: [
    { title: 'Daten sammeln', description: 'Taskey sammelt alle steuerrelevanten Daten automatisch im Hintergrund.' },
    { title: 'Export erstellen', description: 'Mit einem Klick einen vollständigen Export für den Steuerberater generieren.' },
    { title: 'Direkt senden', description: 'Export per E-Mail direkt an den Steuerberater übermitteln.' },
  ],
  ctaText: 'Jetzt Steuerberater-Vorbereitung vereinfachen',
  featureHighlights: [
    { title: 'Export-Format', description: 'Export im passenden Format für reibungslose Übernahme.' },
    { title: 'Komplette Unterlagen', description: 'Stundennachweise, Rechnungen und Belege in einem Export.' },
    { title: 'Periodengerecht', description: 'Daten nach Monaten, Quartalen oder Jahren exportieren.' },
    { title: 'Belegerfassung', description: 'Alle Belege digital erfasst und dem Export beigefügt.' },
    { title: 'Vollständigkeitsprüfung', description: 'Taskey warnt, wenn Daten fehlen oder unvollständig sind.' },
    { title: 'Kosten sparen', description: 'Weniger Aufwand für den Steuerberater = niedrigere Rechnung.' },
  ],
  closingHeadline: 'Schluss mit Steuerberater-Panik.',
  closingText: 'Taskey hat Ihre Unterlagen immer bereit – für stressfreie Steuerberater-Termine.',
  relatedLinks: [
      {
          href: '/loesungen/buchhaltung-handwerksbetrieb',
          label: 'Buchhaltung Handwerk',
          description: 'Alle Buchungsdaten digital erfassen – der Steuerberater dankt es Ihnen.'
      },
      {
          href: '/loesungen/stundennachweise-digital',
          label: 'Stundennachweise digital',
          description: 'Fertige Stundennachweise als Export für die Lohnbuchhaltung.'
      },
      {
          href: '/loesungen/rechnungen-nachverfolgen-handwerksbetrieb',
          label: 'Rechnungen nachverfolgen',
          description: 'Offene Posten im Blick – wichtig für die Steuerberater-Übergabe.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
