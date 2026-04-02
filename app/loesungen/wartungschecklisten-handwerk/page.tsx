import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Wartungschecklisten Handwerk – Taskey',
  description: 'Wartungschecklisten für Handwerksbetriebe digital erstellen. Taskey stellt sicher, dass keine Wartungsschritte vergessen werden.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/wartungschecklisten-handwerk' },
};

const data: LandingPageData = {
  badge: 'Wartungschecklisten',
  headline: 'Wartungschecklisten im',
  headlineHighlight: 'Handwerk',
  subheadline: 'Digital, standardisiert und lückenlos.',
  heroDescription: 'Wartungsarbeiten brauchen Systematik. Taskey gibt Ihren Mitarbeitern digitale Checklisten, die sicherstellen, dass kein Schritt vergessen wird.',
  painPoints: [
    { text: 'Wartungsschritte werden vergessen – Reklamationen sind die Folge.' },
    { text: 'Papier-Checklisten werden nicht ausgefüllt oder gehen verloren.' },
    { text: 'Keine standardisierten Prozesse – jeder macht es anders.' },
    { text: 'Keine Nachweise über durchgeführte Wartungen.' },
  ],
  solutionTitle: 'Digitale Checklisten für fehlerfreie Wartung',
  solutionDescription: 'Taskey führt Ihre Mitarbeiter Schritt für Schritt durch jede Wartung.',
  solutionSteps: [
    { title: 'Checkliste erstellen', description: 'Wartungsschritte als digitale Checkliste definieren.' },
    { title: 'Abarbeiten', description: 'Mitarbeiter haken jeden Schritt auf dem Smartphone ab.' },
    { title: 'Dokumentieren', description: 'Erledigte Wartung automatisch dokumentiert und archiviert.' },
  ],
  ctaText: 'Jetzt Wartungen standardisieren',
  featureHighlights: [
    { title: 'Individuelle Checklisten', description: 'Checklisten für jede Anlage und jeden Wartungstyp erstellen.' },
    { title: 'Mobile Bearbeitung', description: 'Checklisten direkt auf dem Smartphone abarbeiten.' },
    { title: 'Foto-Pflicht', description: 'Bei bestimmten Schritten Fotos als Nachweis verlangen.' },
    { title: 'Wartungserinnerungen', description: 'Automatisch an fällige Wartungen erinnert werden.' },
    { title: 'Wartungshistorie', description: 'Alle durchgeführten Wartungen chronologisch dokumentiert.' },
    { title: 'Vollständigkeitsprüfung', description: 'Sicherstellen, dass alle Schritte erledigt wurden.' },
  ],
  closingHeadline: 'Wartung ohne Vergessen.',
  closingText: 'Taskey macht Ihre Wartungsprozesse standardisiert und nachweisbar.',
  relatedLinks: [
      {
          href: '/loesungen/sicherheitschecklisten-baustelle',
          label: 'Sicherheitschecklisten',
          description: 'Neben Wartung auch Sicherheitsprüfungen mit Checklisten abdecken.'
      },
      {
          href: '/loesungen/checklisten-reinigung-digital',
          label: 'Checklisten Reinigung',
          description: 'Digitale Checklisten auch für Reinigungsprozesse nutzen.'
      },
      {
          href: '/loesungen/werkzeugverwaltung-handwerk',
          label: 'Werkzeugverwaltung',
          description: 'Wartungstermine für Werkzeuge und Geräte im Blick behalten.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
