import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Kundenkommunikation Baufirma – Taskey',
  description: 'Kundenkommunikation in der Baufirma professionalisieren. Taskey zentralisiert alle Nachrichten, Statusupdates und Dokumente.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/kundenkommunikation-baufirma' },
};

const data: LandingPageData = {
  badge: 'Kundenkommunikation',
  headline: 'Kundenkommunikation für',
  headlineHighlight: 'Baufirmen',
  subheadline: 'Professionell, transparent und zentral dokumentiert.',
  heroDescription: 'Kunden wollen wissen, wie ihr Projekt voranschreitet. Taskey macht Ihre Kundenkommunikation professionell und effizient – alles an einem Ort.',
  painPoints: [
    { icon: '📱', text: 'Kundenanfragen per WhatsApp, E-Mail, Telefon – nichts ist zentral.' },
    { icon: '❓', text: 'Kunden fragen ständig nach dem Status – kosten Sie wertvolle Zeit.' },
    { icon: '📝', text: 'Absprachen werden mündlich getroffen und gehen verloren.' },
    { icon: '⚠️', text: 'Missverständnisse führen zu Reklamationen und Nacharbeiten.' },
  ],
  solutionTitle: 'Transparente Kommunikation schafft Vertrauen',
  solutionDescription: 'Taskey gibt Ihren Kunden den Einblick, den sie brauchen – ohne dass Sie ständig erreichbar sein müssen.',
  solutionSteps: [
    { icon: '📊', title: 'Status aktualisieren', description: 'Projektstatus in Taskey aktualisieren – der Kunde sieht es sofort.' },
    { icon: '📸', title: 'Fortschritt dokumentieren', description: 'Fotos und Berichte teilen, damit der Kunde den Baufortschritt sieht.' },
    { icon: '📋', title: 'Absprachen festhalten', description: 'Alle Vereinbarungen digital dokumentieren – verbindlich und nachvollziehbar.' },
  ],
  ctaText: 'Jetzt Kundenkommunikation verbessern',
  featureHighlights: [
    { icon: '📊', title: 'Statusupdates', description: 'Automatische Benachrichtigungen bei Projektfortschritt.' },
    { icon: '📸', title: 'Baufortschritt teilen', description: 'Fotos und Berichte direkt mit dem Kunden teilen.' },
    { icon: '📋', title: 'Dokumentierte Absprachen', description: 'Alle Vereinbarungen schriftlich festgehalten.' },
    { icon: '📁', title: 'Dokumentenaustausch', description: 'Pläne, Angebote und Rechnungen sicher teilen.' },
    { icon: '📧', title: 'E-Mail-Integration', description: 'Alle Kundenkommunikation zentral in Taskey dokumentiert.' },
    { icon: '⭐', title: 'Professioneller Auftritt', description: 'Machen Sie einen erstklassigen Eindruck bei Ihren Kunden.' },
  ],
  closingHeadline: 'Zufriedene Kunden durch Transparenz.',
  closingText: 'Taskey macht Ihre Kundenkommunikation professionell – für mehr Vertrauen und Weiterempfehlungen.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
