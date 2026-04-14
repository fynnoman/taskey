import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Auftraggeber-Portal Reinigung – Transparenz für deine Kunden | Taskey',
  description: 'Auftraggeber-Portal für Gebäudereinigung: Kunden sehen Reinigungsnachweise, Leistungsberichte und Qualitätsdaten in Echtzeit. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/auftraggeber-portal-reinigung' },
};

const data: LandingPageData = {
  badge: 'Kundenportal',
  headline: 'Auftraggeber-Portal –',
  headlineHighlight: 'Transparenz, die Kunden bindet.',
  subheadline: 'Deine Kunden sehen in Echtzeit, was gereinigt wurde. Vertrauen durch Transparenz.',
  heroDescription: 'Auftraggeber wollen wissen, ob und wann gereinigt wurde. Mit dem Taskey Auftraggeber-Portal gibst du ihnen volle Transparenz – ohne Mehraufwand für dich.',
  painPoints: [
    { text: 'Kunden rufen an und fragen: Wurde heute gereinigt?' },
    { text: 'Leistungsnachweise per E-Mail versenden kostet Zeit.' },
    { text: 'Beschwerden, weil Kunden keine Einsicht in Reinigungsleistungen haben.' },
    { text: 'Kein professionelles Reporting für Auftraggeber.' },
  ],
  solutionTitle: 'Dein Kunde. Dein Portal. Volle Transparenz.',
  solutionDescription: 'Auftraggeber loggen sich ein und sehen alle Reinigungsnachweise, Berichte und Qualitätsdaten.',
  solutionSteps: [
    { title: 'Portal einrichten', description: 'Erstelle für jeden Auftraggeber einen eigenen Zugang in wenigen Klicks.' },
    { title: 'Automatische Nachweise', description: 'NFC-Scans, Checklisten und Fotos werden automatisch im Portal sichtbar.' },
    { title: 'Feedback einholen', description: 'Auftraggeber können direkt im Portal Feedback geben oder Sonderwuensche melden.' },
  ],
  ctaText: 'Kundenportal einrichten',
  featureHighlights: [
    { title: 'Echtzeit-Einblick', description: 'Auftraggeber sehen sofort, wenn gereinigt wurde.' },
    { title: 'Leistungsberichte', description: 'Wochen-/Monatsberichte automatisch generiert.' },
    { title: 'Feedback-Funktion', description: 'Kunden geben Feedback direkt im Portal.' },
    { title: 'Beschwerdemanagement', description: 'Reklamationen erfassen und nachverfolgen.' },
    { title: 'Individuelles Branding', description: 'Portal in deinem Firmendesign.' },
    { title: 'Dokumenten-Archiv', description: 'Vertraege, SLAs und Nachweise zentral abgelegt.' },
  ],
  closingHeadline: 'Auftraggeber. Zufrieden. Informiert. Gebunden.',
  closingText: 'Teste Taskey 14 Tage kostenlos und begeistere deine Auftraggeber mit einem professionellen Portal.',
  relatedLinks: [
    { href: '/loesungen/kundenfeedback-reinigung', label: 'Kundenfeedback', description: 'Feedback von Auftraggebern einholen.' },
    { href: '/loesungen/sla-tracking-reinigungsfirma', label: 'SLA-Tracking', description: 'Service-Level-Agreements überwachen.' },
    { href: '/loesungen/leistungsnachweis-gebäudereinigung', label: 'Leistungsnachweis', description: 'Digitale Leistungsnachweise.' },
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
