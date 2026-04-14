import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Reinigungsfirma gründen – Die richtige Software von Anfang an | Taskey',
  description: 'Reinigungsfirma gründen? Mit Taskey startest du digital: Aufträge, Teams, Rechnungen, Leistungsnachweise – alles in einer App. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/reinigungsfirma-gruenden-software' },
};

const data: LandingPageData = {
  badge: 'Gruendung',
  headline: 'Reinigungsfirma gründen –',
  headlineHighlight: 'von Anfang an digital.',
  subheadline: 'Starte dein Reinigungsunternehmen mit professioneller Software. Ohne Excel. Ohne Chaos.',
  heroDescription: 'Du gruendest eine Reinigungsfirma? Dann mach es von Tag 1 richtig. Taskey gibt dir alle Werkzeuge, die du brauchst – von der Auftragsplanung bis zur Rechnung.',
  painPoints: [
    { text: 'Als Gründer fehlt der Überblick über Aufträge, Mitarbeiter und Finanzen.' },
    { text: 'Excel-Listen werden schnell unübersichtlich, wenn das Team waechst.' },
    { text: 'Kunden erwarten professionelle Nachweise – aber du hast kein System.' },
    { text: 'Ohne Software verpasst du Termine und verlierst Kunden.' },
  ],
  solutionTitle: 'Dein Reinigungsunternehmen. Professionell ab Tag 1.',
  solutionDescription: 'Taskey ist die All-in-One-Lösung für Reinigungsunternehmen – auch für Gründer erschwinglich und sofort einsatzbereit.',
  solutionSteps: [
    { title: 'Kostenlos starten', description: 'Registriere dich und richte dein Unternehmen in wenigen Minuten ein.' },
    { title: 'Erste Objekte anlegen', description: 'Erfasse deine ersten Kunden und Reinigungsobjekte.' },
    { title: 'Team einladen & loslegen', description: 'Lade Mitarbeiter ein, weise Aufträge zu – und wirke vom ersten Tag professionell.' },
  ],
  ctaText: 'Kostenlos starten',
  featureHighlights: [
    { title: 'Schneller Start', description: 'In 5 Minuten eingerichtet – keine IT-Kenntnisse noetig.' },
    { title: 'Guenstiger Einstieg', description: 'Faire Preise, die auch für Gründer funktionieren.' },
    { title: 'Professionelle Auftritte', description: 'Rechnungen, Nachweise und Berichte wie ein Profi.' },
    { title: 'Mitwachsend', description: 'Taskey waechst mit deinem Unternehmen – von 2 bis 200+ Mitarbeitern.' },
    { title: 'App für dein Team', description: 'Mitarbeiter bekommen sofort eine eigene App.' },
    { title: 'LexOffice-Anbindung', description: 'Buchhaltung direkt mit LexOffice verbunden.' },
  ],
  closingHeadline: 'Gründen. Wachsen. Professionell wirken.',
  closingText: 'Teste Taskey 14 Tage kostenlos und starte dein Reinigungsunternehmen mit der richtigen Software.',
  relatedLinks: [
    { href: '/loesungen/reinigungssoftware-dach', label: 'Reinigungssoftware DACH', description: 'Die führende Software im DACH-Raum.' },
    { href: '/loesungen/rechnung-schreiben-reinigungsfirma', label: 'Rechnungen', description: 'Professionelle Rechnungen schreiben.' },
    { href: '/loesungen/reinigungskräfte-app', label: 'Mitarbeiter-App', description: 'Die App für dein Reinigungsteam.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
