import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Projektmanagement kleine Baufirma | Taskey',
  description: 'Projektmanagement für kleine Baufirmen: Aufträge, Personal und Kosten im Griff. Einfach, digital, bezahlbar. Jetzt 14 Tage kostenlos testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/projektmanagement-kleine-baufirma' },
};

const data: LandingPageData = {
  badge: 'Kleine Baufirma',
  headline: 'Kleine Baufirma –',
  headlineHighlight: 'großes Projektmanagement.',
  subheadline: 'Du brauchst keine teure Enterprise-Software. Du brauchst Taskey.',
  heroDescription: 'Taskey gibt kleinen Baufirmen die gleichen Werkzeuge wie den Großen – nur einfacher, schneller und bezahlbar. Projekte planen, Personal einteilen, Kosten im Blick.',
  painPoints: [
    { icon: '💰', text: 'Enterprise-Software ist zu teuer und zu komplex für deinen Betrieb.' },
    { icon: '📊', text: 'Excel und Zettelwirtschaft reichen nicht mehr – aber was ist die Alternative?' },
    { icon: '🤯', text: 'Du managst alles im Kopf – bei 3+ Baustellen wird das unmöglich.' },
    { icon: '⏰', text: 'Abends sitzt du noch Stunden im Büro, um alles zusammenzutragen.' },
  ],
  solutionTitle: 'Projektmanagement, das zu dir passt.',
  solutionDescription: 'Nicht zu viel, nicht zu wenig – genau das, was eine kleine Baufirma braucht.',
  solutionSteps: [
    { icon: '📋', title: 'Projekte anlegen', description: 'Erstelle Projekte in Sekunden – mit Kunde, Adresse, Budget und Zeitplan.' },
    { icon: '👥', title: 'Team zuweisen', description: 'Plane dein Team über alle Baustellen – mit Kalenderansicht.' },
    { icon: '📊', title: 'Kosten im Blick', description: 'Sieh in Echtzeit, ob ein Projekt im Budget liegt oder nicht.' },
  ],
  ctaText: 'Jetzt kostenlos starten',
  featureHighlights: [
    { icon: '💰', title: 'Bezahlbar', description: 'Faire Preise für kleine Betriebe – keine versteckten Kosten.' },
    { icon: '📱', title: 'Einfach', description: 'In 5 Minuten eingerichtet. Keine IT-Abteilung nötig.' },
    { icon: '📊', title: 'Live-Kosten', description: 'Echtzeit-Übersicht über Stunden, Material und Marge pro Projekt.' },
    { icon: '📋', title: 'Alles in einem', description: 'Aufträge, Zeiten, Dokumente, Rechnungen – eine App für alles.' },
    { icon: '📸', title: 'Baudokumentation', description: 'Fotos, Notizen und Berichte direkt aus der App.' },
    { icon: '🇩🇪', title: 'Made in Germany', description: 'Deutsche Server, DSGVO-konform, deutscher Support.' },
  ],
  closingHeadline: 'Klein, aber digital.',
  closingText: 'Starte jetzt und manage deine Projekte wie die Großen – ohne deren Kosten.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
