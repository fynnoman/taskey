import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Vorbereitung Steuerberater Handwerk – Taskey',
  description: 'Unterlagen für den Steuerberater im Handwerk vorbereiten. Taskey exportiert alle relevanten Daten – Stunden, Rechnungen, Belege – auf Knopfdruck.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/vorbereitung-steuerberater-handwerk' },
};

const data: LandingPageData = {
  badge: 'Steuerberater-Vorbereitung',
  headline: 'Unterlagen für den',
  headlineHighlight: 'Steuerberater',
  subheadline: 'auf Knopfdruck vorbereiten.',
  heroDescription: 'Nie wieder panische Nächte vor dem Steuerberater-Termin. Taskey hat alle Daten schon aufbereitet – Stunden, Rechnungen, Belege – ein Klick, fertig.',
  painPoints: [
    { icon: '😓', text: 'Tage vor dem Steuerberater-Termin hektisch Belege zusammensuchen.' },
    { icon: '📂', text: 'Fehlende Unterlagen führen zu höheren Steuerberaterkosten.' },
    { icon: '📊', text: 'Daten müssen manuell aus verschiedenen Quellen zusammengetragen werden.' },
    { icon: '⏳', text: 'Der Steuerberater wartet wochenlang auf Ihre Unterlagen.' },
  ],
  solutionTitle: 'Steuerberater-Export in Sekunden',
  solutionDescription: 'Taskey bereitet alle steuerrelevanten Daten automatisch auf.',
  solutionSteps: [
    { icon: '📊', title: 'Daten sammeln', description: 'Taskey sammelt alle steuerrelevanten Daten automatisch im Hintergrund.' },
    { icon: '📤', title: 'Export erstellen', description: 'Mit einem Klick einen vollständigen Export für den Steuerberater generieren.' },
    { icon: '📧', title: 'Direkt senden', description: 'Export per E-Mail direkt an den Steuerberater übermitteln.' },
  ],
  ctaText: 'Jetzt Steuerberater-Vorbereitung vereinfachen',
  featureHighlights: [
    { icon: '📊', title: 'Export-Format', description: 'Export im passenden Format für reibungslose Übernahme.' },
    { icon: '📋', title: 'Komplette Unterlagen', description: 'Stundennachweise, Rechnungen und Belege in einem Export.' },
    { icon: '📅', title: 'Periodengerecht', description: 'Daten nach Monaten, Quartalen oder Jahren exportieren.' },
    { icon: '📸', title: 'Belegerfassung', description: 'Alle Belege digital erfasst und dem Export beigefügt.' },
    { icon: '✅', title: 'Vollständigkeitsprüfung', description: 'Taskey warnt, wenn Daten fehlen oder unvollständig sind.' },
    { icon: '💰', title: 'Kosten sparen', description: 'Weniger Aufwand für den Steuerberater = niedrigere Rechnung.' },
  ],
  closingHeadline: 'Schluss mit Steuerberater-Panik.',
  closingText: 'Taskey hat Ihre Unterlagen immer bereit – für stressfreie Steuerberater-Termine.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
