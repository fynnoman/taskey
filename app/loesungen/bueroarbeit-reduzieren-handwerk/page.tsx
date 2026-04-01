import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Büroarbeit reduzieren Handwerk – Taskey',
  description: 'Büroarbeit im Handwerk reduzieren. Taskey automatisiert Verwaltungsaufgaben und gibt Ihnen mehr Zeit für produktive Arbeit.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/bueroarbeit-reduzieren-handwerk' },
};

const data: LandingPageData = {
  badge: 'Weniger Büroarbeit',
  headline: 'Büroarbeit im',
  headlineHighlight: 'Handwerk reduzieren',
  subheadline: 'Mehr Zeit für die Arbeit, die Geld verdient.',
  heroDescription: 'Als Handwerker wollen Sie arbeiten, nicht verwalten. Taskey automatisiert den Papierkram und gibt Ihnen die Zeit zurück, die Sie für produktive Arbeit brauchen.',
  painPoints: [
    { icon: '📋', text: 'Abende und Wochenenden mit Büroarbeit verbringen statt mit der Familie.' },
    { icon: '📊', text: 'Stundenzettel abtippen, Rechnungen schreiben, Angebote erstellen – kein Ende.' },
    { icon: '💸', text: 'Büroarbeit verdient kein Geld – sie kostet nur Zeit.' },
    { icon: '😓', text: 'Verwaltung frisst die Energie, die für gute Arbeit gebraucht wird.' },
  ],
  solutionTitle: 'Verwaltung auf Autopilot',
  solutionDescription: 'Taskey automatisiert die Aufgaben, die Sie abends noch erledigen müssen.',
  solutionSteps: [
    { icon: '⏱️', title: 'Zeiten automatisch erfassen', description: 'Keine Stundenzettel mehr abtippen – alles geht automatisch.' },
    { icon: '🧾', title: 'Rechnungen generieren', description: 'Aus erfassten Leistungen automatisch Rechnungen erstellen.' },
    { icon: '📤', title: 'Berichte exportieren', description: 'Steuerberater-Unterlagen und Reports auf Knopfdruck.' },
  ],
  ctaText: 'Jetzt Büroarbeit reduzieren',
  featureHighlights: [
    { icon: '⏱️', title: 'Automatische Zeiterfassung', description: 'Stundenzettel digitalisieren – nie wieder abtippen.' },
    { icon: '🧾', title: 'Automatische Rechnungen', description: 'Rechnungen aus Leistungsdaten generieren – ein Klick.' },
    { icon: '📋', title: 'Digitale Aufträge', description: 'Aufträge digital verwalten statt auf Papier.' },
    { icon: '📤', title: 'Ein-Klick-Exporte', description: 'Alle Berichte und Unterlagen sofort exportieren.' },
    { icon: '📸', title: 'Digitale Dokumentation', description: 'Fotos und Berichte direkt auf der Baustelle erstellen.' },
    { icon: '🔄', title: 'Automatische Workflows', description: 'Wiederkehrende Aufgaben automatisieren und nie vergessen.' },
  ],
  closingHeadline: 'Weniger Büro. Mehr Handwerk.',
  closingText: 'Taskey gibt Ihnen die Abende zurück – durch automatisierte Verwaltung.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
