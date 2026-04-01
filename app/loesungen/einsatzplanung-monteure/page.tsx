import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Einsatzplanung Monteure | Taskey',
  description: 'Einsatzplanung für Monteure: Aufträge zuweisen, Routen planen, Einsätze koordinieren. Digital & mobil. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://taskey.de/loesungen/einsatzplanung-monteure' },
};

const data: LandingPageData = {
  badge: 'Einsatzplanung',
  headline: 'Monteure einplanen –',
  headlineHighlight: 'digital & konfliktfrei.',
  subheadline: 'Welcher Monteur fährt zu welchem Kunden? Taskey zeigt es allen – in Echtzeit.',
  heroDescription: 'Plane deine Monteure effizient auf Aufträge, vermeide Doppelbelegungen und informiere das Team automatisch per App.',
  painPoints: [
    { icon: '📋', text: 'Die Einsatzplanung hängt am Whiteboard – niemand sieht sie unterwegs.' },
    { icon: '📞', text: 'Monteure rufen morgens an: Wo muss ich hin? Was soll ich mitnehmen?' },
    { icon: '🔄', text: 'Umplanungen bei Notfällen dauern ewig und erreichen nicht alle.' },
    { icon: '🗺️', text: 'Fahrtstrecken sind nicht optimiert – unnötige Kilometer kosten Geld.' },
  ],
  solutionTitle: 'Einsatzplanung, die mitdenkt.',
  solutionDescription: 'Plane, ändere, informiere – alles in einem System.',
  solutionSteps: [
    { icon: '📋', title: 'Einsätze planen', description: 'Weise Monteure Aufträgen zu – mit Uhrzeit, Material und Kundenadresse.' },
    { icon: '📱', title: 'Sofort informiert', description: 'Monteure sehen ihren Einsatzplan morgens in der App – mit Navigation zum Kunden.' },
    { icon: '🔄', title: 'Flexibel umplanen', description: 'Änderungen kommen sofort auf alle Handys – kein Anruf nötig.' },
  ],
  ctaText: 'Einsatzplanung starten',
  featureHighlights: [
    { icon: '📅', title: 'Tages- & Wochenansicht', description: 'Plane Einsätze für heute oder die ganze Woche voraus.' },
    { icon: '🗺️', title: 'Kartenansicht', description: 'Sieh alle Einsatzorte auf einer Karte – optimiere Routen.' },
    { icon: '📱', title: 'Mobile Einsatzliste', description: 'Monteure sehen alles auf dem Handy – mit Navigation.' },
    { icon: '⚠️', title: 'Konflikterkennung', description: 'Warnung bei Doppelbuchungen oder zu vielen Einsätzen.' },
    { icon: '📸', title: 'Einsatz-Dokumentation', description: 'Fotos, Notizen und Zeiten direkt vom Einsatzort.' },
    { icon: '📊', title: 'Auslastung pro Monteur', description: 'Sieh, wer über- und wer unterlastet ist.' },
  ],
  closingHeadline: 'Monteure planen. Ohne Chaos.',
  closingText: 'Starte jetzt und erlebe, wie einfach Einsatzplanung sein kann.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
