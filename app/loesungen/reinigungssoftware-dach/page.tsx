import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Reinigungssoftware DACH – Die Nr. 1 für Gebäudereiniger | Taskey',
  description: 'Die führende Reinigungssoftware für Gebäudereiniger in Deutschland, Österreich und der Schweiz. NFC-Nachweise, Zeiterfassung, Einsatzplanung. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/reinigungssoftware-dach' },
};

const data: LandingPageData = {
  badge: 'DACH-Raum',
  headline: 'Reinigungssoftware –',
  headlineHighlight: 'speziell für den DACH-Raum.',
  subheadline: 'Deutschland, Österreich, Schweiz – eine Software für alle Anforderungen.',
  heroDescription: 'Taskey ist die Reinigungssoftware, die den DACH-Markt versteht: DSGVO-konform, mehrsprachig, mit LexOffice- und Sage-Anbindung – Made in Germany.',
  painPoints: [
    { text: 'Internationale Reinigungssoftware versteht den DACH-Markt nicht.' },
    { text: 'DSGVO-Konformitaet ist bei auslaendischen Anbietern unsicher.' },
    { text: 'Mehrsprachige Teams brauchen eine App in ihrer Sprache.' },
    { text: 'Buchhaltungssoftware wie LexOffice oder Sage muss angebunden sein.' },
  ],
  solutionTitle: 'Made in Germany. Für den DACH-Raum.',
  solutionDescription: 'DSGVO-konform, deutsche Server, mehrsprachig, lokale Integrationen.',
  solutionSteps: [
    { title: 'DSGVO-konform', description: 'Deutsche Server, verschluesselte Daten, volle DSGVO-Konformitaet – ohne Kompromisse.' },
    { title: 'Mehrsprachig', description: 'App in Deutsch, Englisch und Franzoesisch – perfekt für multinationale Teams.' },
    { title: 'Lokale Integrationen', description: 'LexOffice, Sage und weitere DACH-Buchhaltungssysteme direkt angebunden.' },
  ],
  ctaText: 'Jetzt kostenlos testen',
  featureHighlights: [
    { title: 'Deutsche Server', description: 'Alle Daten auf deutschen Servern gespeichert.' },
    { title: 'DSGVO-konform', description: 'Volle Konformitaet mit europaeischen Datenschutzgesetzen.' },
    { title: 'LexOffice-Anbindung', description: 'Rechnungen und Buchhaltung direkt synchronisieren.' },
    { title: 'Sage-Integration', description: 'Nahtlose Anbindung an Sage Buchhaltung.' },
    { title: 'Mehrsprachige App', description: 'Deutsch, Englisch, Franzoesisch – weitere Sprachen folgen.' },
    { title: 'Deutscher Support', description: 'Deutschsprachiger Support aus Deutschland.' },
  ],
  closingHeadline: 'Die Reinigungssoftware für den DACH-Raum.',
  closingText: 'Teste Taskey 3 Monate kostenlos und erlebe Software, die deinen Markt versteht.',
  relatedLinks: [
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Leistungsnachweis', description: 'NFC-basierte Nachweise – das Herzstück von Taskey.' },
    { href: '/loesungen/arbeitszeiterfassung-reinigungsfirma', label: 'Zeiterfassung Reinigung', description: 'Arbeitszeiten per NFC erfassen.' },
    { href: '/loesungen/einsatzplanung-gebäudereinigung', label: 'Einsatzplanung', description: 'Teams optimal auf Objekte verteilen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
