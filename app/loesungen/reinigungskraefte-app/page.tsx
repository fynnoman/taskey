import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Reinigungskraefte App – Die mobile App fuer dein Team | Taskey',
  description: 'Mobile App fuer Reinigungskraefte: Einsaetze sehen, NFC scannen, Checklisten abarbeiten, Fotos hochladen. Kinderleicht & mehrsprachig. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/reinigungskraefte-app' },
};

const data: LandingPageData = {
  badge: 'Mitarbeiter-App',
  headline: 'Die App, die dein Team –',
  headlineHighlight: 'vom ersten Tag an versteht.',
  subheadline: 'Kinderleicht, mehrsprachig, offline-faehig – fuer jede Reinigungskraft.',
  heroDescription: 'Deine Mitarbeiter brauchen keine Schulung. Die Taskey App ist so einfach, dass jeder sie sofort bedienen kann – in Deutsch, Englisch oder Franzoesisch.',
  painPoints: [
    { text: 'Viele Reinigungskraefte sprechen kein Deutsch – herkoemmliche Software ist unverstaendlich.' },
    { text: 'Komplizierte Apps werden von Mitarbeitern nicht genutzt.' },
    { text: 'Ohne Internetempfang im Keller funktioniert nichts.' },
    { text: 'Mitarbeiter muessen staendig im Buero anrufen, um Infos zu bekommen.' },
  ],
  solutionTitle: 'Eine App. Drei Sprachen. Null Schulung.',
  solutionDescription: 'Intuitiv, mehrsprachig und offline-faehig – perfekt fuer Reinigungsteams.',
  solutionSteps: [
    { title: 'App herunterladen', description: 'iOS oder Android – in 2 Minuten installiert und eingeloggt.' },
    { title: 'Sprache waehlen', description: 'Deutsch, Englisch oder Franzoesisch – die App passt sich an.' },
    { title: 'Loslegen', description: 'Einsaetze sehen, NFC scannen, Checkliste abhaken – fertig.' },
  ],
  ctaText: 'App jetzt testen',
  featureHighlights: [
    { title: 'Mehrsprachig', description: 'Deutsch, Englisch, Franzoesisch – weitere Sprachen folgen.' },
    { title: 'Offline-faehig', description: 'Funktioniert auch ohne Internet – synchronisiert spaeter.' },
    { title: 'NFC-Scan', description: 'Handy an den Tag halten – fertig.' },
    { title: 'Checklisten', description: 'Aufgaben abhaken – visuell und einfach.' },
    { title: 'Fotodokumentation', description: 'Fotos hochladen direkt aus der App.' },
    { title: 'Push-Nachrichten', description: 'Aenderungen und neue Einsaetze sofort erfahren.' },
  ],
  closingHeadline: 'Die App fuer Reinigungskraefte. Einfach. Fertig.',
  closingText: 'Teste Taskey 14 Tage kostenlos und gib deinem Team eine App, die wirklich funktioniert.',
  relatedLinks: [
    { href: '/loesungen/nfc-leistungsnachweis-reinigung', label: 'NFC Leistungsnachweis', description: 'NFC-Scans direkt aus der App.' },
    { href: '/loesungen/checklisten-reinigung-digital', label: 'Checklisten', description: 'Digitale Checklisten in der Mitarbeiter-App.' },
    { href: '/loesungen/arbeitszeiterfassung-reinigungsfirma', label: 'Zeiterfassung', description: 'Zeiten per App erfassen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
