import type { Metadata } from 'next';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';
import type { LandingPageData } from '@/components/landing/LandingPageTemplate';

export const metadata: Metadata = {
  title: 'Zeiterfassung Baustelle – GPS & NFC für den Bau | Taskey',
  description: 'Digitale Zeiterfassung auf der Baustelle: GPS-gestützt, NFC-Tags, automatische Stundennachweise. Für Baufirmen & Subunternehmer. Jetzt testen!',
  alternates: { canonical: 'https://www.taskeyapp.com/loesungen/zeiterfassung-baustelle' },
};

const data: LandingPageData = {
  badge: 'Zeiterfassung Baustelle',
  headline: 'Baustellenzeiten erfassen –',
  headlineHighlight: 'ohne Papier, ohne Stress.',
  subheadline: 'Wer war wann auf welcher Baustelle? Mit Taskey weißt du es sofort.',
  heroDescription: 'NFC-Tags am Baustelleneingang, GPS-Tracking in der App – deine Mitarbeiter stempeln automatisch ein und aus. Du hast in Echtzeit den Überblick über alle Baustellen.',
  painPoints: [
    { text: 'Keiner weiß, welcher Mitarbeiter gerade auf welcher Baustelle ist.' },
    { text: 'Stundenzettel werden erst am Ende der Woche ausgefüllt – nach Erinnerung.' },
    { text: 'Stunden werden falsch zugeordnet – die Nachkalkulation stimmt nie.' },
    { text: 'Bei Streitigkeiten fehlen Belege, wer wann vor Ort war.' },
  ],
  solutionTitle: 'Jede Baustelle. Jeder Mitarbeiter. In Echtzeit.',
  solutionDescription: 'Taskey zeigt dir live, wer wo arbeitet – und rechnet alles automatisch ab.',
  solutionSteps: [
    { title: 'NFC-Tag an der Baustelle', description: 'Klebe einen wetterfesten NFC-Tag an den Baustellencontainer. Mitarbeiter scannen beim Kommen und Gehen.' },
    { title: 'GPS-Protokollierung', description: 'Jeder Stempelvorgang wird mit GPS-Koordinaten gespeichert – Baustelle automatisch erkannt.' },
    { title: 'Stunden pro Baustelle', description: 'Automatische Aufteilung der Arbeitsstunden pro Baustelle – perfekt für die Nachkalkulation.' },
  ],
  ctaText: 'Jetzt Baustellenzeiten digitalisieren',
  featureHighlights: [
    { title: 'Live-Baustellenübersicht', description: 'Sieh auf einer Karte, wer gerade auf welcher Baustelle arbeitet.' },
    { title: 'NFC-Stempeluhr', description: 'Ein Scan am Tag reicht – kein Handy entsperren, keine App öffnen.' },
    { title: 'Automatische Zuordnung', description: 'Stunden werden automatisch der richtigen Baustelle zugewiesen.' },
    { title: 'Wetterfeste Tags', description: 'Unsere NFC-Tags halten Wind, Regen und Baustellenstaub stand.' },
    { title: 'Subunternehmer-Zeiten', description: 'Auch Subunternehmer können per App Zeiten erfassen und zuordnen.' },
    { title: 'Nahtloser Export', description: 'Stundenübersichten pro Baustelle als PDF – für Auftraggeber und Steuerberater.' },
  ],
  closingHeadline: 'Baustelle im Griff. Zeiten im System.',
  closingText: 'Teste Taskey 14 Tage kostenlos und erlebe, wie einfach Baustellenzeiterfassung sein kann.',
  relatedLinks: [
      {
          href: '/loesungen/zeiterfassung-handwerk',
          label: 'Zeiterfassung im Handwerk',
          description: 'Digitale Arbeitszeiterfassung für den gesamten Handwerksbetrieb – nicht nur auf der Baustelle.'
      },
      {
          href: '/loesungen/baustellen-koordinieren-tool',
          label: 'Baustellen koordinieren',
          description: 'Mehrere Baustellen gleichzeitig managen – mit klarer Übersicht über Teams und Einsätze.'
      },
      {
          href: '/loesungen/stundennachweise-digital',
          label: 'Stundennachweise digital',
          description: 'Automatische Stundennachweise pro Baustelle – für Auftraggeber und Steuerberater.'
      }
  ],
};

export default function Page() {
  return <LandingPageTemplate data={data} />;
}
