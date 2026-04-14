import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Reinigungsfirma gruenden – Die richtige Software von Anfang an | Taskey',
  description: 'Reinigungsfirma gruenden? Mit Taskey startest du digital: Auftraege, Teams, Rechnungen, Leistungsnachweise – alles in einer App. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/reinigungsfirma-gruenden-software' },
};

const data: LandingPageData = {
  badge: 'Gruendung',
  headline: 'Reinigungsfirma gruenden –',
  headlineHighlight: 'von Anfang an digital.',
  subheadline: 'Starte dein Reinigungsunternehmen mit professioneller Software. Ohne Excel. Ohne Chaos.',
  heroDescription: 'Du gruendest eine Reinigungsfirma? Dann mach es von Tag 1 richtig. Taskey gibt dir alle Werkzeuge, die du brauchst – von der Auftragsplanung bis zur Rechnung.',
  painPoints: [
    { text: 'Als Gruender fehlt der Ueberblick ueber Auftraege, Mitarbeiter und Finanzen.' },
    { text: 'Excel-Listen werden schnell unuebersichtlich, wenn das Team waechst.' },
    { text: 'Kunden erwarten professionelle Nachweise – aber du hast kein System.' },
    { text: 'Ohne Software verpasst du Termine und verlierst Kunden.' },
  ],
  solutionTitle: 'Dein Reinigungsunternehmen. Professionell ab Tag 1.',
  solutionDescription: 'Taskey ist die All-in-One-Loesung fuer Reinigungsunternehmen – auch fuer Gruender erschwinglich und sofort einsatzbereit.',
  solutionSteps: [
    { title: 'Kostenlos starten', description: 'Registriere dich und richte dein Unternehmen in wenigen Minuten ein.' },
    { title: 'Erste Objekte anlegen', description: 'Erfasse deine ersten Kunden und Reinigungsobjekte.' },
    { title: 'Team einladen & loslegen', description: 'Lade Mitarbeiter ein, weise Auftraege zu – und wirke vom ersten Tag professionell.' },
  ],
  ctaText: 'Kostenlos starten',
  featureHighlights: [
    { title: 'Schneller Start', description: 'In 5 Minuten eingerichtet – keine IT-Kenntnisse noetig.' },
    { title: 'Guenstiger Einstieg', description: 'Faire Preise, die auch fuer Gruender funktionieren.' },
    { title: 'Professionelle Auftritte', description: 'Rechnungen, Nachweise und Berichte wie ein Profi.' },
    { title: 'Mitwachsend', description: 'Taskey waechst mit deinem Unternehmen – von 2 bis 200+ Mitarbeitern.' },
    { title: 'App fuer dein Team', description: 'Mitarbeiter bekommen sofort eine eigene App.' },
    { title: 'LexOffice-Anbindung', description: 'Buchhaltung direkt mit LexOffice verbunden.' },
  ],
  closingHeadline: 'Gruenden. Wachsen. Professionell wirken.',
  closingText: 'Teste Taskey 14 Tage kostenlos und starte dein Reinigungsunternehmen mit der richtigen Software.',
  relatedLinks: [
    { href: '/loesungen/reinigungssoftware-dach', label: 'Reinigungssoftware DACH', description: 'Die fuehrende Software im DACH-Raum.' },
    { href: '/loesungen/rechnung-schreiben-reinigungsfirma', label: 'Rechnungen', description: 'Professionelle Rechnungen schreiben.' },
    { href: '/loesungen/reinigungskraefte-app', label: 'Mitarbeiter-App', description: 'Die App fuer dein Reinigungsteam.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
