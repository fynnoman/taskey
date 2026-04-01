import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Subunternehmer verwalten Bau | Taskey',
  description: 'Subunternehmer am Bau verwalten: Einsätze koordinieren, Leistungen dokumentieren, Abrechnungen vorbereiten. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://www.taskey.de/loesungen/subunternehmer-verwalten-bau' },
};

const data: LandingPageData = {
  badge: 'Subunternehmer',
  headline: 'Subunternehmer –',
  headlineHighlight: 'koordiniert statt chaotisch.',
  subheadline: 'Einsätze planen, Leistungen dokumentieren und sauber abrechnen – für alle Nachunternehmer.',
  heroDescription: 'Taskey hilft dir, Subunternehmer professionell zu managen: Einsätze zuweisen, Zeiten erfassen, Leistungen dokumentieren und Abrechnungen vorbereiten.',
  painPoints: [
    { icon: '📞', text: 'Subunternehmer-Koordination läuft über Anrufe und WhatsApp.' },
    { icon: '📋', text: 'Leistungsnachweise kommen verspätet und unvollständig.' },
    { icon: '💰', text: 'Abrechnungen stimmen nicht – Stunden und Leistungen sind unklar.' },
    { icon: '⚖️', text: 'Bei Mängeln fehlt die Dokumentation, wer was wann gemacht hat.' },
  ],
  solutionTitle: 'Subunternehmer professionell managen.',
  solutionDescription: 'Zuweisen, dokumentieren, abrechnen – transparent für alle Seiten.',
  solutionSteps: [
    { icon: '👥', title: 'Subunternehmer einladen', description: 'Lade Subunternehmer in Taskey ein – sie sehen ihre zugewiesenen Aufträge und Baustellen.' },
    { icon: '📱', title: 'Zeiten & Leistungen', description: 'Subunternehmer erfassen ihre Zeiten und dokumentieren Leistungen direkt in der App.' },
    { icon: '📊', title: 'Sauber abrechnen', description: 'Automatische Stundenübersichten und Leistungsnachweise für die Abrechnung.' },
  ],
  ctaText: 'Subunternehmer digital managen',
  featureHighlights: [
    { icon: '👥', title: 'Subunternehmer-Portal', description: 'Eigener Zugang für Subunternehmer – nur ihre Aufträge sichtbar.' },
    { icon: '⏱️', title: 'Zeiterfassung', description: 'Subunternehmer erfassen ihre Zeiten per App.' },
    { icon: '📸', title: 'Leistungsdokumentation', description: 'Fotos und Berichte als Leistungsnachweis.' },
    { icon: '📄', title: 'Leistungsnachweise', description: 'Automatische Leistungsnachweise für die Abrechnung.' },
    { icon: '⚖️', title: 'Mängel zuordnen', description: 'Mängel dem verantwortlichen Subunternehmer zuweisen.' },
    { icon: '📊', title: 'Kostenübersicht', description: 'Fremdleistungskosten pro Projekt im Überblick.' },
  ],
  closingHeadline: 'Subunternehmer? Im Griff.',
  closingText: 'Teste Taskey und manage deine Subunternehmer professionell.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
