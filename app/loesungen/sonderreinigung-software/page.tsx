import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Sonderreinigung Software – Spezialaufträge verwalten | Taskey',
  description: 'Software für Sonderreinigung: Tatortreinigung, Brandschadensanierung, Wasserschaden, Graffitientfernung – planen, dokumentieren, abrechnen. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/sonderreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Sonderreinigung',
  headline: 'Sonderreinigung –',
  headlineHighlight: 'Spezialaufträge professionell managen.',
  subheadline: 'Tatort, Brand, Wasser, Graffiti – jeder Spezialfall dokumentiert.',
  heroDescription: 'Sonderreinigungen erfordern Spezialwissen, besondere Ausruestung und lückenlose Dokumentation. Taskey unterstützt dich bei jedem Schritt.',
  painPoints: [
    { text: 'Komplexe Aufträge mit verschiedenen Gefahrstoffen müssen genau dokumentiert werden.' },
    { text: 'Versicherungen verlangen detaillierte Nachweise und Protokolle.' },
    { text: 'Spezialgeräte müssen für jeden Auftrag eingeplant werden.' },
    { text: 'Kurzfristige Einsätze erfordern schnelle Reaktion und Koordination.' },
  ],
  solutionTitle: 'Spezialreinigung. Strukturiert. Nachweisbar.',
  solutionDescription: 'Jeder Spezialeinsatz mit Protokoll, Foto und Nachweis.',
  solutionSteps: [
    { title: 'Einsatz planen', description: 'Spezialgeräte, qualifiziertes Personal und Gefahrstoffprotokolle vorbereiten.' },
    { title: 'Dokumentieren', description: 'Fotos, Messwerte, Verfahren – alles wird in Echtzeit dokumentiert.' },
    { title: 'Nachweis für Versicherung', description: 'Lückenlose Dokumentation als Bericht für Versicherung oder Auftraggeber.' },
  ],
  ctaText: 'Sonderreinigung digitalisieren',
  featureHighlights: [
    { title: 'Gefahrstoffprotokolle', description: 'Digitale Gefahrstoff-Dokumentation pro Einsatz.' },
    { title: 'Schnelleinsatz-Modus', description: 'Kurzfristige Einsätze in Minuten planen und Teams benachrichtigen.' },
    { title: 'Versicherungsberichte', description: 'Professionelle Berichte für Versicherungen generieren.' },
    { title: 'Geräteverwaltung', description: 'Spezialgeräte tracken und Einsätzen zuweisen.' },
    { title: 'Messwert-Dokumentation', description: 'Feuchtigkeits-, Schadstoff- und andere Messwerte erfassen.' },
    { title: 'Fotodokumentation', description: 'Chronologische Fotodokumentation des gesamten Einsatzes.' },
  ],
  closingHeadline: 'Sonderreinigung. Professionell. Lückenlos dokumentiert.',
  closingText: 'Teste Taskey 3 Monate kostenlos und manage deine Sonderreinigungen digital.',
  relatedLinks: [
    { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten Reinigung', description: 'Spezialchecklisten für jeden Reinigungstyp.' },
    { href: '/loesungen/inventar-verwalten-reinigungsfirma', label: 'Inventar Reinigung', description: 'Spezialgeräte und Reinigungsmittel verwalten.' },
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Leistungsnachweis', description: 'Jeden Einsatz per NFC nachweisen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
