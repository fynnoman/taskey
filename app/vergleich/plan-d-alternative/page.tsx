import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";

const path = "/vergleich/plan-d-alternative";

export const metadata: Metadata = {
  title:
    "Plan-D Alternative | Moderne Cloud-Software statt Desktop-ERP | Taskey",
  description:
    "Plan-D-Alternative für Gebäudereiniger: Taskey ersetzt das klassische Desktop-ERP durch eine moderne Cloud-App mit NFC-Zeiterfassung, Live-Margen und Auftraggeber-Portal – ab 71 €/Monat, ohne Setup-Kosten, täglich kündbar.",
  alternates: { canonical: `https://www.taskeyapp.com${path}` },
  openGraph: {
    title: "Plan-D Alternative | Moderne Cloud statt Desktop-ERP | Taskey",
    description:
      "Cloud statt Desktop, NFC nativ, Live-Margen, kein Setup-Aufwand, täglich kündbar – ab 71 €/Monat.",
    url: `https://www.taskeyapp.com${path}`,
    type: "article",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Vergleich Plan-D vs. Taskey für Gebäudereinigung" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan-D Alternative | Taskey",
    description: "Moderne Cloud-Software statt Desktop-ERP – ab 71 €/Monat.",
    images: ["/opengraph-image"],
  },
};

export default function Page() {
  return (
    <LandingPageTemplate
      path={path}
      title="Plan-D Alternative"
      eyebrow="Vergleich · Plan-D"
      h1="Plan-D Alternative —"
      h1Accent="moderne Cloud-Software statt Desktop-ERP."
      lead="Plan-D ist eine in der Reinigungsbranche etablierte Lösung – aber konzeptionell aus einer anderen Software-Ära. Taskey ist die zeitgemäße Antwort: Cloud-nativ, mobile-first, mit NFC-Zeiterfassung von Haus aus, Live-Margen pro Auftrag, Auftraggeber-Portal und Done-for-You Setup in 48 Stunden statt mehreren Wochen Projekt. Ab 71 € pro Monat. Täglich kündbar. Ohne Setup-Pauschale."
      breadcrumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Vergleich", url: "https://www.taskeyapp.com/vergleich/plan-d-alternative" },
        { name: "Plan-D Alternative", url: `https://www.taskeyapp.com${path}` },
      ]}
      sections={[
        {
          eyebrow: "Was Wechsler immer wieder berichten",
          heading: "Warum Inhaber von Plan-D zu Taskey wechseln.",
          intro:
            "In Gesprächen mit Reinigungsfirmen, die Plan-D im Einsatz hatten, hören wir immer wieder dieselben Punkte. Wir behaupten nichts pauschal über Plan-D – das hier sind die Aussagen aus dem Feld.",
          bullets: [
            "Desktop-Software mit Server-Installation – Wartung, Updates, IT-Aufwand bleiben am Inhaber hängen",
            "Klassische, dichte Oberfläche – sieht aus wie aus den 2000ern, Mitarbeitende brauchen Tage Schulung",
            "Eigene Mitarbeiter-App fehlt oder ist nur als Zusatzmodul verfügbar",
            "Setup als Projekt mit Beratertagen – fünfstellige Anfangsinvestition keine Seltenheit",
            "Lange Vertragslaufzeiten – kein „heute starten, morgen kündigen“",
            "Reporting läuft über Excel-Export statt Live-Dashboard",
            "Auftraggeber-Portal nur als kostenpflichtiges Add-on – falls überhaupt verfügbar",
          ],
        },
        {
          eyebrow: "Direkter Vergleich",
          heading: "Was Taskey grundlegend anders macht.",
          intro:
            "Wir vergleichen hier die Architektur – nicht einzelne Features. Der Unterschied liegt im Konzept.",
          bullets: [
            "Cloud-nativ: Login im Browser oder App, keine Installation, automatische Updates",
            "Mobile-first: Die Mitarbeiter-App ist das Hauptinterface, nicht das Beiwerk",
            "NFC-Zeiterfassung in jedem Tarif – ein Tap am Objekt, Schluss mit Excel-Stundenzetteln",
            "Live-Margen pro Auftrag und Objekt – Sie sehen heute, ob die Reinigung von gestern profitabel war",
            "Auftraggeber-Portal (Taskey Share) ab Professional – ohne Aufpreis",
            "Done-for-You Setup in 48 h, im Tarif enthalten, keine Beratertage zu zahlen",
            "Täglich kündbar, transparente Monatspreise: 71 / 189 / 257 € + Objektpauschale",
            "Mehrsprachige App: DE/TR/RU/PL/EN/FR – Standard im deutschen Reinigungsbetrieb",
            "Server in Deutschland, AVV inkl., DSGVO-Compliance ab Tag 1",
          ],
        },
        {
          eyebrow: "Kosten ehrlich",
          heading: "Was Plan-D wirklich kostet – und was Taskey kostet.",
          body: [
            "Plan-D arbeitet typischerweise mit individuellen Angeboten: User-Lizenzen, Setup-Pauschale, Beratertage, Server-Infrastruktur, Update-Verträge. Was bei der Demo nach „überschaubar“ klingt, summiert sich im ersten Jahr regelmäßig auf einen fünfstelligen Betrag – plus laufende Lizenzkosten.",
            "Taskey: 71 € im Beginner, 189 € im Professional, 257 € im Business pro Monat. Plus 4,40 – 5,10 € pro aktivem Objekt. Setup ist im Preis enthalten. Mitarbeiteranzahl ist unbegrenzt. Sie können täglich kündigen. Wenn Sie zur kleinen oder mittleren Reinigungsfirma gehören, sparen Sie gegenüber Plan-D in der Regel mehrere tausend Euro pro Jahr.",
          ],
        },
        {
          eyebrow: "Wann Plan-D dennoch sinnvoll ist",
          heading: "Ehrliche Worte.",
          body: [
            "Plan-D hat einen breiten Funktionsumfang, der über die reine Reinigungs-Operative hinausgeht – etwa für sehr große Konzern-Betriebe mit mehreren Niederlassungen, eigener IT-Abteilung und individuellen Workflow-Anforderungen, die echtes Customizing erlauben.",
            "Wenn Sie eine eigene IT-Abteilung haben, mehrwöchige Implementierungsprojekte einplanen können und ein hochangepasstes System wollen, ist Plan-D eine valide Wahl.",
            "Wenn Ihr Ziel aber ist, dass die Frühschicht morgen früh um 5 Uhr einfach am NFC-Tag taggt und das Büro bis 10 Uhr alle Stunden, Margen und offenen Aufgaben sieht – ohne Beraterprojekt, ohne IT-Personal, ohne mehrere Wochen Vorlauf – dann ist Taskey die richtige Antwort.",
          ],
        },
        {
          eyebrow: "Migration",
          heading: "Was beim Wechsel von Plan-D passiert.",
          body: [
            "Wir übernehmen Stammdaten – Mitarbeitende, Objekte, Auftraggeber, Verträge – aus Ihrem Plan-D-Export. Stundenkonten, soweit Plan-D einen sauberen Export erlaubt, importieren wir ebenfalls. Was nicht direkt exportierbar ist, erfassen wir gemeinsam mit Ihnen im Done-for-You Setup.",
            "2–4 Wochen Parallelbetrieb: Sie führen die letzten Plan-D-Aufträge zu Ende, beginnen mit Taskey für alle neuen Aufträge. Danach sauberer Cut. Wir geben Ihnen einen Migrationsmonat als Übergangspuffer – während dieser Zeit zahlen Sie nur Taskey.",
            "Kein IT-Personal nötig. Kein eigener Server. Keine Beratertage. Wir setzen den Account auf und schulen Sie und Ihre Bürokraft – meist in einer halben Stunde.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Ist Taskey wirklich günstiger als Plan-D?",
          answer:
            "In nahezu allen Fällen für kleine und mittelgroße Reinigungsbetriebe: ja, deutlich. Plan-D-Setups liegen häufig im fünfstelligen Bereich plus laufende Lizenzkosten. Taskey startet bei 71 € im Monat ohne Setup-Pauschale, mit unbegrenzter Mitarbeiterzahl. Den verbindlichen Vergleich machen wir gerne im Gespräch – mit Ihrem konkreten Plan-D-Angebot als Grundlage.",
        },
        {
          question: "Kann ich Daten aus Plan-D übernehmen?",
          answer:
            "Ja. Plan-D erlaubt Exports der Kerndaten – Mitarbeitende, Objekte, Verträge, teilweise Stunden. Wir lesen diese Exporte ein und ordnen sie den neuen Taskey-Strukturen zu. Das ist Teil des Done-for-You Setups und kostet Sie keinen Cent extra.",
        },
        {
          question: "Brauche ich für Taskey eine IT-Abteilung wie bei Plan-D?",
          answer:
            "Nein. Taskey läuft komplett in der Cloud – kein Server, keine Installation, keine Updates, keine Wartung. Ihre Bürokraft loggt sich im Browser ein, Ihre Reinigungskräfte nutzen die App auf ihrem Smartphone. IT-Aufwand auf Ihrer Seite: null.",
        },
        {
          question: "Hat Plan-D nicht einen größeren Funktionsumfang?",
          answer:
            "Plan-D hat mehr historisch gewachsene Funktionen, ja. Die Frage ist, ob Sie diese Funktionen tatsächlich nutzen. Die meisten Reinigungsbetriebe nutzen erfahrungsgemäß 20 – 30 % der Plan-D-Funktionen – zahlen aber für 100 %. Taskey fokussiert auf die Funktionen, die im Reinigungsalltag wirklich gebraucht werden, und macht diese dafür modern und schnell bedienbar.",
        },
        {
          question: "Was passiert, wenn ich Plan-D parallel weiterlaufen lassen will?",
          answer:
            "Können Sie. In der Migrationsphase laufen beide Systeme nebeneinander, damit kein Einsatz durchs Raster fällt. Nach 2 – 4 Wochen ist Taskey die alleinige Quelle der Wahrheit, und Sie kündigen Plan-D regulär zum nächstmöglichen Termin.",
        },
        {
          question: "Gibt es bei Taskey auch einen DATEV-Export?",
          answer:
            "Ja. Im Tarif Business enthalten, kein Aufpreis. Das DATEV-Standardformat geht direkt zur Steuerkanzlei – ohne Excel-Krücke dazwischen.",
        },
        {
          question: "Wie schnell sind meine Mitarbeitenden produktiv?",
          answer:
            "30 Minuten Einführung reichen in der Regel. Die App ist bewusst minimalistisch und in den typischen Sprachen des deutschen Reinigungsbetriebs verfügbar (Deutsch, Türkisch, Russisch, Polnisch). Der Wechsel von Plan-D-Stundenzetteln zum NFC-Tap am Objekt ist für die Kräfte typischerweise eine Erleichterung – nicht eine Hürde.",
        },
      ]}
      related={[
        {
          href: "/vergleich/zvoove-alternative",
          label: "Zvoove Alternative",
          description: "Vergleich gegen die klassische ERP-Lösung im Branchenumfeld.",
        },
        {
          href: "/vergleich/mendato-alternative",
          label: "Mendato Alternative",
          description: "Wie Taskey gegen Mendato für Reinigungsbetriebe abschneidet.",
        },
        {
          href: "/vergleich/fortytools-alternative",
          label: "Fortytools Alternative",
          description: "Spezialisiert auf Reinigung statt generischer Handwerkersoftware.",
        },
        {
          href: "/pricing",
          label: "Taskey-Preise",
          description: "Beginner ab 71 €, Professional ab 189 €, Business ab 257 € pro Monat.",
        },
      ]}
    />
  );
}
