import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Nachunternehmer koordinieren Software – Taskey',
  description: 'Nachunternehmer auf Baustellen koordinieren. Taskey gibt Ihnen den Überblick über alle Subunternehmer und ihre Leistungen.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/nachunternehmer-koordinieren-software' },
};

const data: LandingPageData = {
  badge: 'Nachunternehmer',
  headline: 'Nachunternehmer',
  headlineHighlight: 'koordinieren',
  subheadline: 'Alle Subs im Blick – auf jeder Baustelle.',
  heroDescription: 'Je mehr Nachunternehmer auf einer Baustelle, desto wichtiger die Koordination. Taskey hilft Ihnen, alle Subunternehmer zu managen – Einsätze, Leistungen, Abrechnung.',
  painPoints: [
    { icon: '📞', text: 'Endlose Telefonate und E-Mails zur Koordination der Nachunternehmer.' },
    { icon: '📋', text: 'Kein Überblick, welcher Sub wann wo arbeitet.' },
    { icon: '⚖️', text: 'Streitigkeiten über erbrachte Leistungen und Abrechnungen.' },
    { icon: '📂', text: 'Verträge, Nachweise und Zertifikate nicht griffbereit.' },
  ],
  solutionTitle: 'Alle Nachunternehmer zentral verwalten',
  solutionDescription: 'Taskey bringt Ordnung in Ihre Nachunternehmer-Verwaltung.',
  solutionSteps: [
    { icon: '👥', title: 'Subs anlegen', description: 'Alle Nachunternehmer mit Kontaktdaten, Verträgen und Zertifikaten erfassen.' },
    { icon: '📋', title: 'Einsätze planen', description: 'Nachunternehmer den Baustellen und Zeiträumen zuordnen.' },
    { icon: '✅', title: 'Leistungen prüfen', description: 'Erbrachte Leistungen dokumentieren und für die Abrechnung freigeben.' },
  ],
  ctaText: 'Jetzt Nachunternehmer managen',
  featureHighlights: [
    { icon: '👥', title: 'Sub-Datenbank', description: 'Alle Nachunternehmer mit Bewertung und Qualifikationen.' },
    { icon: '📋', title: 'Einsatzplanung', description: 'Subs den Baustellen zuweisen und Einsätze koordinieren.' },
    { icon: '📄', title: 'Vertragsverwaltung', description: 'Alle Verträge und Konditionen zentral hinterlegt.' },
    { icon: '✅', title: 'Leistungsabnahme', description: 'Erbrachte Leistungen prüfen und dokumentieren.' },
    { icon: '📊', title: 'Kostenübersicht', description: 'Kosten pro Nachunternehmer und Projekt im Blick.' },
    { icon: '📁', title: 'Dokumentenmanagement', description: 'Zertifikate, Versicherungen und Nachweise verwalten.' },
  ],
  closingHeadline: 'Nachunternehmer – endlich im Griff.',
  closingText: 'Taskey macht die Koordination Ihrer Nachunternehmer einfach und transparent.',
  relatedLinks: [
      {
          href: '/loesungen/subunternehmer-einsatzplanung',
          label: 'Einsatzplanung',
          description: 'Nachunternehmer gezielt auf Projekte einplanen.'
      },
      {
          href: '/loesungen/nachunternehmer-dokumentation',
          label: 'Dokumentation',
          description: 'Alle Nachunternehmerleistungen lückenlos dokumentieren.'
      },
      {
          href: '/loesungen/baustellen-koordinieren-tool',
          label: 'Baustellen koordinieren',
          description: 'Nachunternehmer nahtlos in die Baustellenkoordination einbinden.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
