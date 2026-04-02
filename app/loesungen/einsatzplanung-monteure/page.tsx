import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Einsatzplanung Monteure | Taskey',
  description: 'Einsatzplanung für Monteure: Aufträge zuweisen, Routen planen, Einsätze koordinieren. Digital & mobil. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/einsatzplanung-monteure' },
};

const data: LandingPageData = {
  badge: 'Einsatzplanung',
  headline: 'Monteure einplanen –',
  headlineHighlight: 'digital & konfliktfrei.',
  subheadline: 'Welcher Monteur fährt zu welchem Kunden? Taskey zeigt es allen – in Echtzeit.',
  heroDescription: 'Plane deine Monteure effizient auf Aufträge, vermeide Doppelbelegungen und informiere das Team automatisch per App.',
  painPoints: [
    { text: 'Die Einsatzplanung hängt am Whiteboard – niemand sieht sie unterwegs.' },
    { text: 'Monteure rufen morgens an: Wo muss ich hin? Was soll ich mitnehmen?' },
    { text: 'Umplanungen bei Notfällen dauern ewig und erreichen nicht alle.' },
    { text: 'Fahrtstrecken sind nicht optimiert – unnötige Kilometer kosten Geld.' },
  ],
  solutionTitle: 'Einsatzplanung, die mitdenkt.',
  solutionDescription: 'Plane, ändere, informiere – alles in einem System.',
  solutionSteps: [
    { title: 'Einsätze planen', description: 'Weise Monteure Aufträgen zu – mit Uhrzeit, Material und Kundenadresse.' },
    { title: 'Sofort informiert', description: 'Monteure sehen ihren Einsatzplan morgens in der App – mit Navigation zum Kunden.' },
    { title: 'Flexibel umplanen', description: 'Änderungen kommen sofort auf alle Handys – kein Anruf nötig.' },
  ],
  ctaText: 'Einsatzplanung starten',
  featureHighlights: [
    { title: 'Tages- & Wochenansicht', description: 'Plane Einsätze für heute oder die ganze Woche voraus.' },
    { title: 'Kartenansicht', description: 'Sieh alle Einsatzorte auf einer Karte – optimiere Routen.' },
    { title: 'Mobile Einsatzliste', description: 'Monteure sehen alles auf dem Handy – mit Navigation.' },
    { title: 'Konflikterkennung', description: 'Warnung bei Doppelbuchungen oder zu vielen Einsätzen.' },
    { title: 'Einsatz-Dokumentation', description: 'Fotos, Notizen und Zeiten direkt vom Einsatzort.' },
    { title: 'Auslastung pro Monteur', description: 'Sieh, wer über- und wer unterlastet ist.' },
  ],
  closingHeadline: 'Monteure planen. Ohne Chaos.',
  closingText: 'Starte jetzt und erlebe, wie einfach Einsatzplanung sein kann.',
  relatedLinks: [
      {
          href: '/loesungen/disposition-handwerk-software',
          label: 'Disposition Handwerk',
          description: 'Monteure und Aufträge effizient disponieren.'
      },
      {
          href: '/loesungen/terminplanung-handwerker',
          label: 'Terminplanung',
          description: 'Termine koordinieren und Monteure passend zuordnen.'
      },
      {
          href: '/loesungen/mobile-zeiterfassung-monteure',
          label: 'Mobile Zeiterfassung',
          description: 'Eingesetzte Monteure erfassen ihre Zeiten direkt mobil.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
