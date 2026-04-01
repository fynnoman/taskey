import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Zeiterfassung Handwerk – Automatisch & digital | Taskey',
  description: 'Zeiterfassung für Handwerksbetriebe: Automatisch per GPS, NFC oder App. Stundennachweise digital, DSGVO-konform. Jetzt 14 Tage kostenlos testen!',
  alternates: { canonical: 'https://taskey.de/loesungen/zeiterfassung-handwerk' },
};

const data: LandingPageData = {
  badge: 'Zeiterfassung Handwerk',
  headline: 'Zeiterfassung für Handwerker –',
  headlineHighlight: 'automatisch statt Zettelwirtschaft.',
  subheadline: 'Deine Mitarbeiter stempeln per App, NFC-Tag oder GPS. Du hast alle Stunden sofort im Blick.',
  heroDescription: 'Schluss mit unlesbaren Stundenzetteln, Excel-Chaos und fehlenden Nachweisen. Taskey erfasst Arbeitszeiten automatisch – auf der Baustelle, in der Werkstatt, beim Kunden.',
  painPoints: [
    { icon: '📝', text: 'Stundenzettel kommen erst Freitag – halb unleserlich, halb vergessen.' },
    { icon: '⏰', text: 'Überstunden werden falsch berechnet, Mitarbeiter beschweren sich.' },
    { icon: '📊', text: 'Excel-Tabellen kosten dich Stunden – jede Woche aufs Neue.' },
    { icon: '⚖️', text: 'Bei einer Prüfung fehlen lückenlose Arbeitszeitnachweise.' },
  ],
  solutionTitle: 'Taskey macht Zeiterfassung unsichtbar einfach.',
  solutionDescription: 'Deine Mitarbeiter stempeln mit einem Tap – du hast sofort alle Daten.',
  solutionSteps: [
    { icon: '📱', title: 'App starten, einstempeln', description: 'Ein Tap auf dem Handy reicht. Oder NFC-Tag an der Baustelle scannen. GPS-Position wird automatisch erfasst.' },
    { icon: '📋', title: 'Alles automatisch dokumentiert', description: 'Stunden, Pausen, Überstunden – alles wird automatisch berechnet und ist sofort abrufbar.' },
    { icon: '📤', title: 'Export zum Steuerberater', description: 'Monatliche Stundenübersichten als PDF oder CSV. Direkt weiterleiten, ohne Nacharbeit.' },
  ],
  ctaText: '14 Tage kostenlos testen',
  featureHighlights: [
    { icon: '📍', title: 'GPS-Zeitstempel', description: 'Jeder Stempelvorgang wird mit GPS-Position dokumentiert – lückenlos und rechtssicher.' },
    { icon: '🏷️', title: 'NFC-Stempeluhr', description: 'NFC-Tags an der Baustelle = kontaktloses Einstempeln ohne App-Eingabe.' },
    { icon: '⏱️', title: 'Automatische Pausenberechnung', description: 'Gesetzliche Pausen werden automatisch berücksichtigt und korrekt abgezogen.' },
    { icon: '📊', title: 'Überstunden-Übersicht', description: 'Alle Überstunden auf einen Blick – pro Mitarbeiter, pro Woche, pro Monat.' },
    { icon: '🔒', title: 'DSGVO-konform', description: 'Alle Daten auf deutschen Servern. Datenschutz nach höchsten Standards.' },
    { icon: '💼', title: 'Steuerberater-Export', description: 'Fertige Reports für DATEV & Co. Kein manuelles Abtippen mehr.' },
  ],
  closingHeadline: 'Nie wieder Stundenzettel sortieren.',
  closingText: 'Starte jetzt mit digitaler Zeiterfassung – in 5 Minuten eingerichtet, sofort einsatzbereit.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
