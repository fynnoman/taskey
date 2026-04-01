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
    { icon: '❌', text: 'Wartungsschritte werden vergessen – Reklamationen sind die Folge.' },
    { icon: '📝', text: 'Papier-Checklisten werden nicht ausgefüllt oder gehen verloren.' },
    { icon: '📋', text: 'Keine standardisierten Prozesse – jeder macht es anders.' },
    { icon: '📊', text: 'Keine Nachweise über durchgeführte Wartungen.' },
  ],
  solutionTitle: 'Digitale Checklisten für fehlerfreie Wartung',
  solutionDescription: 'Taskey führt Ihre Mitarbeiter Schritt für Schritt durch jede Wartung.',
  solutionSteps: [
    { icon: '📋', title: 'Checkliste erstellen', description: 'Wartungsschritte als digitale Checkliste definieren.' },
    { icon: '✅', title: 'Abarbeiten', description: 'Mitarbeiter haken jeden Schritt auf dem Smartphone ab.' },
    { icon: '📤', title: 'Dokumentieren', description: 'Erledigte Wartung automatisch dokumentiert und archiviert.' },
  ],
  ctaText: 'Jetzt Wartungen standardisieren',
  featureHighlights: [
    { icon: '📋', title: 'Individuelle Checklisten', description: 'Checklisten für jede Anlage und jeden Wartungstyp erstellen.' },
    { icon: '📱', title: 'Mobile Bearbeitung', description: 'Checklisten direkt auf dem Smartphone abarbeiten.' },
    { icon: '📸', title: 'Foto-Pflicht', description: 'Bei bestimmten Schritten Fotos als Nachweis verlangen.' },
    { icon: '🔔', title: 'Wartungserinnerungen', description: 'Automatisch an fällige Wartungen erinnert werden.' },
    { icon: '📊', title: 'Wartungshistorie', description: 'Alle durchgeführten Wartungen chronologisch dokumentiert.' },
    { icon: '✅', title: 'Vollständigkeitsprüfung', description: 'Sicherstellen, dass alle Schritte erledigt wurden.' },
  ],
  closingHeadline: 'Wartung ohne Vergessen.',
  closingText: 'Taskey macht Ihre Wartungsprozesse standardisiert und nachweisbar.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
