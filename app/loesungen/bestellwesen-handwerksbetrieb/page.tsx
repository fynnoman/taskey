import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Bestellwesen Handwerksbetrieb – Taskey',
  description: 'Bestellwesen im Handwerksbetrieb digitalisieren. Taskey optimiert Ihre Bestellprozesse – von der Anforderung bis zur Lieferung.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/bestellwesen-handwerksbetrieb' },
};

const data: LandingPageData = {
  badge: 'Bestellwesen',
  headline: 'Bestellwesen im',
  headlineHighlight: 'Handwerksbetrieb',
  subheadline: 'digitalisieren und optimieren.',
  heroDescription: 'Vom Materialbedarf auf der Baustelle bis zur Bestellung beim Lieferanten – Taskey digitalisiert Ihren gesamten Bestellprozess.',
  painPoints: [
    { icon: '📞', text: 'Bestellungen per Telefon oder Zuruf – nichts dokumentiert.' },
    { icon: '📦', text: 'Doppelbestellungen oder vergessene Bestellungen sind an der Tagesordnung.' },
    { icon: '💸', text: 'Keine Preisvergleiche – immer beim erstbesten Lieferanten bestellen.' },
    { icon: '📊', text: 'Materialkosten explodieren ohne Kontrolle.' },
  ],
  solutionTitle: 'Bestellungen digital verwalten',
  solutionDescription: 'Taskey bringt Ordnung in Ihr Bestellwesen.',
  solutionSteps: [
    { icon: '📱', title: 'Bedarf melden', description: 'Mitarbeiter melden Materialbedarf direkt über die App.' },
    { icon: '✅', title: 'Freigabe erteilen', description: 'Bestellanforderungen prüfen und mit einem Klick freigeben.' },
    { icon: '📦', title: 'Lieferung verfolgen', description: 'Bestellstatus und Liefertermine im Blick behalten.' },
  ],
  ctaText: 'Jetzt Bestellwesen digitalisieren',
  featureHighlights: [
    { icon: '📱', title: 'Mobile Bedarfsmeldung', description: 'Materialbedarf direkt von der Baustelle per App melden.' },
    { icon: '✅', title: 'Freigabeprozess', description: 'Bestellungen erst nach Freigabe auslösen – volle Kostenkontrolle.' },
    { icon: '📋', title: 'Lieferantenverzeichnis', description: 'Alle Lieferanten mit Kontaktdaten und Konditionen hinterlegt.' },
    { icon: '📊', title: 'Kostenauswertung', description: 'Materialkosten pro Projekt und Lieferant analysieren.' },
    { icon: '📦', title: 'Lieferverfolgung', description: 'Status jeder Bestellung von Anforderung bis Lieferung.' },
    { icon: '📁', title: 'Bestellhistorie', description: 'Alle vergangenen Bestellungen für Nachbestellungen abrufbar.' },
  ],
  closingHeadline: 'Bestellungen – kontrolliert und effizient.',
  closingText: 'Taskey macht Ihr Bestellwesen transparent und spart Materialkosten.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
