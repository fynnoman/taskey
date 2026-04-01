import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'CRM für Handwerker – Taskey',
  description: 'CRM speziell für Handwerksbetriebe. Taskey verwaltet Ihre Kunden, Aufträge und Kommunikation an einem Ort – einfach und übersichtlich.',
  alternates: { canonical: 'https://www.taskey.de/loesungen/crm-fuer-handwerker' },
};

const data: LandingPageData = {
  badge: 'CRM für Handwerker',
  headline: 'Kundenverwaltung für',
  headlineHighlight: 'Handwerker',
  subheadline: 'Alle Kunden, Aufträge und Kontakte an einem Ort.',
  heroDescription: 'Vergessen Sie Excel-Listen und Zettelwirtschaft. Taskey ist das CRM, das Handwerker wirklich brauchen – einfach, schnell und ohne Schnickschnack.',
  painPoints: [
    { icon: '📂', text: 'Kundendaten verstreut in Excel, Outlook und auf Zetteln.' },
    { icon: '❓', text: 'Keine Ahnung, wann der letzte Kontakt mit dem Kunden war.' },
    { icon: '📞', text: 'Kundenanfragen gehen unter oder werden vergessen.' },
    { icon: '🔄', text: 'Wiederkehrende Kunden werden nicht systematisch betreut.' },
  ],
  solutionTitle: 'Das CRM, das Handwerker verdienen',
  solutionDescription: 'Taskey ist kein kompliziertes Enterprise-CRM – sondern genau das, was Sie brauchen.',
  solutionSteps: [
    { icon: '👤', title: 'Kunden anlegen', description: 'Alle Kundendaten zentral erfassen – Adresse, Ansprechpartner, Besonderheiten.' },
    { icon: '📋', title: 'Aufträge verknüpfen', description: 'Jeden Auftrag dem Kunden zuordnen – mit kompletter Historie.' },
    { icon: '📊', title: 'Überblick behalten', description: 'Umsatz pro Kunde, offene Angebote und letzter Kontakt auf einen Blick.' },
  ],
  ctaText: 'Jetzt Kunden besser betreuen',
  featureHighlights: [
    { icon: '👤', title: 'Kundenprofile', description: 'Alle Infos zu einem Kunden auf einer Seite – Kontaktdaten, Aufträge, Notizen.' },
    { icon: '📋', title: 'Auftragshistorie', description: 'Alle vergangenen und aktuellen Aufträge eines Kunden einsehen.' },
    { icon: '💰', title: 'Umsatzübersicht', description: 'Umsatz pro Kunde und Zeitraum – erkennen Sie Ihre besten Kunden.' },
    { icon: '📝', title: 'Notizen & Kontakte', description: 'Gesprächsnotizen und Kontakthistorie für jeden Kunden festhalten.' },
    { icon: '🔔', title: 'Wiedervorlagen', description: 'Erinnerungen für Follow-ups und wiederkehrende Wartungsaufträge.' },
    { icon: '📤', title: 'Schnellkontakt', description: 'Direkt aus dem Kundenprofil anrufen, E-Mail senden oder Angebot erstellen.' },
  ],
  closingHeadline: 'Kundenpflege – einfach gemacht.',
  closingText: 'Mit Taskey behalten Sie alle Kunden im Blick und verpassen keine Chance mehr.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
