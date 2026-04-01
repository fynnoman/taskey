import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Aufträge digital verwalten Handwerk | Taskey',
  description: 'Aufträge im Handwerk digital verwalten: Anlegen, zuweisen, tracken und abrechnen. Schluss mit Papierkram. Jetzt 14 Tage kostenlos testen!',
  alternates: { canonical: 'https://taskey.de/loesungen/auftraege-digital-verwalten-handwerk' },
};

const data: LandingPageData = {
  badge: 'Aufträge digital',
  headline: 'Aufträge digital verwalten –',
  headlineHighlight: 'endlich papierlos.',
  subheadline: 'Vom Anruf des Kunden bis zur bezahlten Rechnung – alles digital.',
  heroDescription: 'Taskey digitalisiert deinen gesamten Auftragsprozess: Anfrage, Angebot, Auftrag, Ausführung, Abnahme, Abrechnung – alles in einem System.',
  painPoints: [
    { icon: '📝', text: 'Aufträge stehen auf Zetteln, in Mails und auf dem Whiteboard.' },
    { icon: '🗂️', text: 'Wichtige Informationen sind verstreut – keiner findet was.' },
    { icon: '📞', text: 'Das Büro ruft den Monteur an, der Monteur ruft den Chef an – Stille Post.' },
    { icon: '💸', text: 'Aufträge werden vergessen, Kunden springen ab.' },
  ],
  solutionTitle: 'Der digitale Auftragsweg.',
  solutionDescription: 'Von der Anfrage bis zur Bezahlung – ein durchgängiger digitaler Prozess.',
  solutionSteps: [
    { icon: '📱', title: 'Auftrag digital anlegen', description: 'Erstelle Aufträge in Sekunden – per App oder am PC. Alle Infos an einem Ort.' },
    { icon: '👥', title: 'Digital zuweisen', description: 'Weise dem Team den Auftrag zu – es wird sofort per Push benachrichtigt.' },
    { icon: '✅', title: 'Digital abschließen', description: 'Fotos, Unterschrift, Stunden – alles digital dokumentiert und archiviert.' },
  ],
  ctaText: 'Aufträge digitalisieren',
  featureHighlights: [
    { icon: '📱', title: 'Von überall', description: 'Aufträge anlegen und verwalten – am PC, Tablet oder Handy.' },
    { icon: '📸', title: 'Foto-Dokumentation', description: 'Fotos direkt zum Auftrag – mit Zeitstempel und GPS.' },
    { icon: '✍️', title: 'Digitale Unterschrift', description: 'Kunden unterschreiben auf dem Handy – rechtssicher.' },
    { icon: '📊', title: 'Live-Status', description: 'Jeder sieht den aktuellen Stand des Auftrags in Echtzeit.' },
    { icon: '🔍', title: 'Schnelle Suche', description: 'Finde jeden Auftrag in Sekunden – auch von vor 2 Jahren.' },
    { icon: '📄', title: 'Automatische Doku', description: 'Alle Dokumente zum Auftrag werden automatisch erstellt.' },
  ],
  closingHeadline: 'Digital. Übersichtlich. Einfach.',
  closingText: 'Starte jetzt und mach deinen Betrieb papierlos.',
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
