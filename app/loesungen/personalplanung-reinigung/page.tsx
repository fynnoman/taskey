import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Personalplanung Reinigung – Mitarbeiter optimal einsetzen | Taskey',
  description: 'Personalplanung für Reinigungsunternehmen: Mitarbeiter auf Objekte verteilen, Verfügbarkeiten verwalten, Vertretungen planen. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/personalplanung-reinigung' },
};

const data: LandingPageData = {
  badge: 'Personalplanung',
  headline: 'Personalplanung –',
  headlineHighlight: 'die richtige Kraft am richtigen Objekt.',
  subheadline: 'Wer arbeitet wann wo? Taskey plant automatisch.',
  heroDescription: 'Reinigungsunternehmen mit 20+ Mitarbeitern verlieren Stunden mit der Personalplanung. Taskey automatisiert Zuweisung, Vertretung und Kommunikation.',
  painPoints: [
    { text: 'Personalplanung per WhatsApp und Excel ist fehleranfaellig.' },
    { text: 'Krankheitsausfaelle führen zu Chaos – wer uebernimmt?' },
    { text: 'Mitarbeiter wissen nicht, wo sie morgen arbeiten sollen.' },
    { text: 'Ueberplanung oder Unterbesetzung bei schwankender Auslastung.' },
  ],
  solutionTitle: 'Automatische Personalplanung. Kein Chaos.',
  solutionDescription: 'Mitarbeiter zuweisen, Vertretungen planen, Teams informieren – automatisch.',
  solutionSteps: [
    { title: 'Verfügbarkeit erfassen', description: 'Mitarbeiter tragen Verfügbarkeiten und Urlaub in der App ein.' },
    { title: 'Automatisch zuweisen', description: 'Taskey schlaegt die optimale Besetzung pro Objekt vor.' },
    { title: 'Vertretung planen', description: 'Bei Krankheit automatisch verfügbare Vertretung vorschlagen und benachrichtigen.' },
  ],
  ctaText: 'Personalplanung digitalisieren',
  featureHighlights: [
    { title: 'Verfügbarkeits-Manager', description: 'Urlaub, Krankheit, Teilzeit – alle Verfügbarkeiten im Blick.' },
    { title: 'Automatische Zuweisung', description: 'KI-gestützte Vorschlaege für die optimale Besetzung.' },
    { title: 'Vertretungspool', description: 'Verfügbare Springer sofort identifizieren und einsetzen.' },
    { title: 'Push-Benachrichtigungen', description: 'Mitarbeiter werden sofort über Änderungen informiert.' },
    { title: 'Ueberstunden-Tracker', description: 'Arbeitszeitkonten automatisch führen und Ueberstunden vermeiden.' },
    { title: 'Qualifikationen', description: 'Mitarbeiter nach Qualifikation den richtigen Objekten zuweisen.' },
  ],
  closingHeadline: 'Personalplanung. Automatisch. Stressfrei.',
  closingText: 'Teste Taskey 3 Monate kostenlos und plane dein Personal ohne Chaos.',
  relatedLinks: [
    { href: '/loesungen/schichtplanung-reinigungsunternehmen', label: 'Schichtplanung', description: 'Schichten planen und Mitarbeiter zuweisen.' },
    { href: '/loesungen/tagesplanung-reinigungskräfte', label: 'Tagesplanung', description: 'Tägliche Einsätze optimal planen.' },
    { href: '/loesungen/einsatzplanung-gebäudereinigung', label: 'Einsatzplanung', description: 'Teams auf Objekte verteilen.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
