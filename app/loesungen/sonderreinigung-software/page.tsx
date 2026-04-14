import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Sonderreinigung Software – Spezialauftraege verwalten | Taskey',
  description: 'Software fuer Sonderreinigung: Tatortreinigung, Brandschadensanierung, Wasserschaden, Graffitientfernung – planen, dokumentieren, abrechnen. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/sonderreinigung-software' },
};

const data: LandingPageData = {
  badge: 'Sonderreinigung',
  headline: 'Sonderreinigung –',
  headlineHighlight: 'Spezialauftraege professionell managen.',
  subheadline: 'Tatort, Brand, Wasser, Graffiti – jeder Spezialfall dokumentiert.',
  heroDescription: 'Sonderreinigungen erfordern Spezialwissen, besondere Ausruestung und lueckenlose Dokumentation. Taskey unterstuetzt dich bei jedem Schritt.',
  painPoints: [
    { text: 'Komplexe Auftraege mit verschiedenen Gefahrstoffen muessen genau dokumentiert werden.' },
    { text: 'Versicherungen verlangen detaillierte Nachweise und Protokolle.' },
    { text: 'Spezialgeraete muessen fuer jeden Auftrag eingeplant werden.' },
    { text: 'Kurzfristige Einsaetze erfordern schnelle Reaktion und Koordination.' },
  ],
  solutionTitle: 'Spezialreinigung. Strukturiert. Nachweisbar.',
  solutionDescription: 'Jeder Spezialeinsatz mit Protokoll, Foto und Nachweis.',
  solutionSteps: [
    { title: 'Einsatz planen', description: 'Spezialgeraete, qualifiziertes Personal und Gefahrstoffprotokolle vorbereiten.' },
    { title: 'Dokumentieren', description: 'Fotos, Messwerte, Verfahren – alles wird in Echtzeit dokumentiert.' },
    { title: 'Nachweis fuer Versicherung', description: 'Lueckenlose Dokumentation als Bericht fuer Versicherung oder Auftraggeber.' },
  ],
  ctaText: 'Sonderreinigung digitalisieren',
  featureHighlights: [
    { title: 'Gefahrstoffprotokolle', description: 'Digitale Gefahrstoff-Dokumentation pro Einsatz.' },
    { title: 'Schnelleinsatz-Modus', description: 'Kurzfristige Einsaetze in Minuten planen und Teams benachrichtigen.' },
    { title: 'Versicherungsberichte', description: 'Professionelle Berichte fuer Versicherungen generieren.' },
    { title: 'Geraeteverwaltung', description: 'Spezialgeraete tracken und Einsaetzen zuweisen.' },
    { title: 'Messwert-Dokumentation', description: 'Feuchtigkeits-, Schadstoff- und andere Messwerte erfassen.' },
    { title: 'Fotodokumentation', description: 'Chronologische Fotodokumentation des gesamten Einsatzes.' },
  ],
  closingHeadline: 'Sonderreinigung. Professionell. Lueckenlos dokumentiert.',
  closingText: 'Teste Taskey 14 Tage kostenlos und manage deine Sonderreinigungen digital.',
  relatedLinks: [
    { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten Reinigung', description: 'Spezialchecklisten fuer jeden Reinigungstyp.' },
    { href: '/loesungen/inventar-verwalten-reinigungsfirma', label: 'Inventar Reinigung', description: 'Spezialgeraete und Reinigungsmittel verwalten.' },
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Leistungsnachweis', description: 'Jeden Einsatz per NFC nachweisen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
