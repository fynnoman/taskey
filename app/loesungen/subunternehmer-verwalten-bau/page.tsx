import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Subunternehmer verwalten Bau | Taskey',
  description: 'Subunternehmer am Bau verwalten: Einsätze koordinieren, Leistungen dokumentieren, Abrechnungen vorbereiten. Jetzt kostenlos testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/subunternehmer-verwalten-bau' },
};

const data: LandingPageData = {
  badge: 'Subunternehmer',
  headline: 'Subunternehmer –',
  headlineHighlight: 'koordiniert statt chaotisch.',
  subheadline: 'Einsätze planen, Leistungen dokumentieren und sauber abrechnen – für alle Nachunternehmer.',
  heroDescription: 'Taskey hilft dir, Subunternehmer professionell zu managen: Einsätze zuweisen, Zeiten erfassen, Leistungen dokumentieren und Abrechnungen vorbereiten.',
  painPoints: [
    { text: 'Subunternehmer-Koordination läuft über Anrufe und WhatsApp.' },
    { text: 'Leistungsnachweise kommen verspätet und unvollständig.' },
    { text: 'Abrechnungen stimmen nicht – Stunden und Leistungen sind unklar.' },
    { text: 'Bei Mängeln fehlt die Dokumentation, wer was wann gemacht hat.' },
  ],
  solutionTitle: 'Subunternehmer professionell managen.',
  solutionDescription: 'Zuweisen, dokumentieren, abrechnen – transparent für alle Seiten.',
  solutionSteps: [
    { title: 'Subunternehmer einladen', description: 'Lade Subunternehmer in Taskey ein – sie sehen ihre zugewiesenen Aufträge und Baustellen.' },
    { title: 'Zeiten & Leistungen', description: 'Subunternehmer erfassen ihre Zeiten und dokumentieren Leistungen direkt in der App.' },
    { title: 'Sauber abrechnen', description: 'Automatische Stundenübersichten und Leistungsnachweise für die Abrechnung.' },
  ],
  ctaText: 'Subunternehmer digital managen',
  featureHighlights: [
    { title: 'Subunternehmer-Portal', description: 'Eigener Zugang für Subunternehmer – nur ihre Aufträge sichtbar.' },
    { title: 'Zeiterfassung', description: 'Subunternehmer erfassen ihre Zeiten per App.' },
    { title: 'Leistungsdokumentation', description: 'Fotos und Berichte als Leistungsnachweis.' },
    { title: 'Leistungsnachweise', description: 'Automatische Leistungsnachweise für die Abrechnung.' },
    { title: 'Mängel zuordnen', description: 'Mängel dem verantwortlichen Subunternehmer zuweisen.' },
    { title: 'Kostenübersicht', description: 'Fremdleistungskosten pro Projekt im Überblick.' },
  ],
  closingHeadline: 'Subunternehmer? Im Griff.',
  closingText: 'Teste Taskey und manage deine Subunternehmer professionell.',
  relatedLinks: [
      {
          href: '/loesungen/subunternehmer-einsatzplanung',
          label: 'Subunternehmer-Einsatzplanung',
          description: 'Subunternehmer gezielt auf Baustellen und Projekte einplanen.'
      },
      {
          href: '/loesungen/nachunternehmer-dokumentation',
          label: 'Nachunternehmer-Dokumentation',
          description: 'Leistungen und Qualität von Subunternehmern dokumentieren.'
      },
      {
          href: '/loesungen/fremdleistungen-abrechnen-bau',
          label: 'Fremdleistungen abrechnen',
          description: 'Subunternehmerleistungen sauber abrechnen.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
