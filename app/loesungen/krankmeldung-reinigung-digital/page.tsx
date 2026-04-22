import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Krankmeldung Reinigung digital – Ausfaelle sofort managen | Taskey',
  description: 'Digitale Krankmeldung für Reinigungsunternehmen: Ausfaelle melden, Vertretung finden, Einsatzplan anpassen – alles in einer App.',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/krankmeldung-reinigung-digital' },
};

const data: LandingPageData = {
  badge: 'Krankmeldung',
  headline: 'Krankmeldung –',
  headlineHighlight: 'Ausfall erkannt. Vertretung organisiert.',
  subheadline: 'Mitarbeiter meldet sich krank? In Sekunden weißt du Bescheid und findest Ersatz.',
  heroDescription: 'In der Gebäudereinigung fuehrt jeder Ausfall sofort zu Problemen beim Kunden. Taskey macht Krankmeldungen digital und hilft dir, blitzschnell Vertretungen zu organisieren.',
  painPoints: [
    { text: 'Krankmeldungen kommen per Anruf um 5 Uhr morgens – Chaos beim Disponieren.' },
    { text: 'Niemand weiss, welcher Mitarbeiter als Vertretung verfügbar ist.' },
    { text: 'Objekte bleiben ungereinigt, weil Ausfaelle zu spaet bekannt werden.' },
    { text: 'Keine Dokumentation, wer wann krank war – für die Lohnabrechnung ein Problem.' },
  ],
  solutionTitle: 'Krankmeldung. Digital. Sofortige Reaktion.',
  solutionDescription: 'Taskey digitalisiert den gesamten Krankmeldungsprozess – von der Meldung bis zur Vertretung.',
  solutionSteps: [
    { title: 'Mitarbeiter meldet sich krank', description: 'Per App in einem Klick – Objektleiter und Disponent werden sofort benachrichtigt.' },
    { title: 'Verfügbare Vertretungen sehen', description: 'Taskey zeigt sofort, welche Mitarbeiter frei und qualifiziert sind.' },
    { title: 'Vertretung zuweisen', description: 'Ein Klick – die Vertretung bekommt den Einsatz in ihrer App.' },
  ],
  ctaText: 'Ausfallmanagement testen',
  featureHighlights: [
    { title: 'Ein-Klick-Krankmeldung', description: 'Mitarbeiter meldet sich in der App krank – keine Anrufe noetig.' },
    { title: 'Sofortige Benachrichtigung', description: 'Objektleiter und Disponent werden in Echtzeit informiert.' },
    { title: 'Vertretungssuche', description: 'Verfügbare und qualifizierte Mitarbeiter sofort sichtbar.' },
    { title: 'Automatische Umplanung', description: 'Einsatzplan wird automatisch angepasst.' },
    { title: 'Abwesenheits-Statistik', description: 'Ausfallquoten pro Mitarbeiter und Team im Blick.' },
    { title: 'Lohnabrechnung', description: 'Krankheitstage automatisch in der Lohnvorbereitung.' },
  ],
  closingHeadline: 'Krankmeldung. Sofort. Digital. Geloest.',
  closingText: 'Teste Taskey 3 Monate kostenlos und manage Ausfaelle stressfrei.',
  relatedLinks: [
    { href: '/loesungen/personalplanung-reinigung', label: 'Personalplanung', description: 'Personal effizient einplanen.' },
    { href: '/loesungen/schichtplanung-reinigungsunternehmen', label: 'Schichtplanung', description: 'Schichten und Vertretungen planen.' },
    { href: '/loesungen/einsatzplanung-gebäudereinigung', label: 'Einsatzplanung', description: 'Einsätze intelligent koordinieren.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
