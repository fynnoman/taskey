import type { Metadata } from "next";
import dynamic from "next/dynamic";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import TestimonialReviews from "@/components/schema/TestimonialReviews";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const LiveMargen = dynamic(() => import("@/components/home/LiveMargen"));
const AblaufSection = dynamic(() => import("@/components/home/AblaufSection"));
const FeaturePreview = dynamic(() => import("@/components/home/FeaturePreview"));

const path = "/reinigungssoftware";

const META_COPY: PageCopy = {
  de: {
    title: "Reinigungssoftware 2026: Ratgeber, Auswahl und Vergleich | Taskey",
    description:
      "Reinigungssoftware 2026 verstehen und richtig auswählen. Welche Module ein Reinigungsbetrieb wirklich braucht, worauf es bei Auswahl, DSGVO und Preis ankommt. Ratgeber der Taskey Redaktion. Kostenloser Account, ohne Kreditkarte.",
  },
  en: {
    title: "Cleaning Software 2026: Buyer Guide, Selection and Comparison | Taskey",
    description:
      "Understand and choose cleaning software the right way in 2026. Which modules a cleaning company actually needs, what to look for on GDPR and pricing. Guide by the Taskey editorial team. Free account, no credit card.",
  },
  fr: {
    title: "Logiciel de nettoyage 2026 : guide, sélection et comparatif | Taskey",
    description:
      "Comprendre et choisir un logiciel de nettoyage en 2026. Quels modules une entreprise de nettoyage a vraiment besoin, ce qui compte sur RGPD et prix. Guide de la rédaction Taskey. Compte gratuit, sans carte bancaire.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: META_COPY,
    locale: pickLocale(locale),
    path,
    type: "article",
    image: "/feature-zeiterfassung.webp",
  });
}

const SCHEMA_COPY = {
  de: {
    schemaName: "Taskey Reinigungssoftware",
    schemaSubCategory: "Reinigungssoftware Ratgeber und Branchensoftware",
    schemaDescription:
      "Reinigungssoftware als All in One System: Einsatzplanung, NFC Objektnachweis, Zeiterfassung, Angebote, Rechnungen, Live Margen und DATEV Export. Ratgeber, Auswahlkriterien und passende Module für Reinigungsbetriebe jeder Größe.",
    schemaOfferDescription: "Kostenlosen Account erstellen, danach ab 119 € pro Monat",
    schemaFeatures: [
      "Einsatzplanung",
      "NFC Objektnachweis",
      "Mobile Zeiterfassung",
      "Angebote und Rechnungen",
      "DATEV Export",
      "Live Margen pro Objekt",
      "Qualitätskontrolle und Checklisten",
      "Auftraggeber Portal (Taskey Share)",
      "DSGVO konform, Made in Germany",
    ],
    inLanguage: "de-DE",
  },
  en: {
    schemaName: "Taskey Cleaning Software",
    schemaSubCategory: "Cleaning software guide and industry software",
    schemaDescription:
      "Cleaning software as an all in one system: scheduling, NFC proof of service, time tracking, quotes, invoices, live margins and DATEV export. Guide, selection criteria and matching modules for cleaning operations of any size.",
    schemaOfferDescription: "Create your free account, then from EUR 119 per month",
    schemaFeatures: [
      "Scheduling",
      "NFC proof of service",
      "Mobile time tracking",
      "Quotes and invoices",
      "DATEV export",
      "Live margins per site",
      "Quality control and checklists",
      "Client portal (Taskey Share)",
      "GDPR compliant, Made in Germany",
    ],
    inLanguage: "en-US",
  },
  fr: {
    schemaName: "Taskey Logiciel de nettoyage",
    schemaSubCategory: "Guide logiciel de nettoyage et logiciel métier",
    schemaDescription:
      "Logiciel de nettoyage tout en un : planification, justificatif NFC, pointage, devis, factures, marges en direct et export DATEV. Guide, critères de sélection et modules adaptés aux entreprises de nettoyage de toute taille.",
    schemaOfferDescription: "Créez votre compte gratuit, puis à partir de 119 € par mois",
    schemaFeatures: [
      "Planification",
      "Justificatif NFC",
      "Pointage mobile",
      "Devis et factures",
      "Export DATEV",
      "Marges en direct par site",
      "Contrôle qualité et check-lists",
      "Portail donneur d’ordre (Taskey Share)",
      "Conforme RGPD, Made in Germany",
    ],
    inLanguage: "fr-FR",
  },
} as const;

const CONTENT = {
  de: {
    title: "Reinigungssoftware",
    eyebrow: "Ratgeber · Reinigungssoftware",
    h1: "Reinigungssoftware:",
    h1Accent: "der Ratgeber für Betriebe, die Klarheit statt Tool Chaos wollen.",
    lead: "Reinigungssoftware ist heute keine reine Buchhaltungslösung mehr. Sie steuert Einsatzplanung, mobile Zeiterfassung, NFC Objektnachweis, Angebote, Rechnungen und die Marge pro Objekt in einem einzigen System. Dieser Ratgeber der Taskey Redaktion erklärt, worauf Inhaber und Verantwortliche in Reinigungsbetrieben bei Auswahl, Einführung und Preis einer modernen Reinigungssoftware achten sollten. Sachlich, praxisnah, ohne Marketinglack.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Reinigungssoftware",

    sec1Eyebrow: "Definition",
    sec1Heading: "Was Reinigungssoftware im Jahr 2026 wirklich bedeutet.",
    sec1Intro:
      "Reinigungssoftware bezeichnet eine Branchensoftware, mit der Reinigungsbetriebe alle wiederkehrenden Prozesse digital abbilden. Von der Angebotserstellung über die Einsatzplanung, die mobile Zeiterfassung, den Objektnachweis, die Qualitätskontrolle bis zur Rechnung und der DATEV Übergabe. Der zentrale Nutzen liegt nicht im einzelnen Modul, sondern in der durchgehenden Datenbasis.",
    sec1Body1:
      "Historisch hat die Branche sich Insellösungen zusammengekauft. Eine Excel Vorlage für die Kalkulation, ein Buchhaltungstool für die Rechnung, ein Chat für die Kommunikation, eine App für die Stundenerfassung, ein Cloud Ordner für Nachweise. Reinigungssoftware im modernen Sinn ersetzt genau diesen Flickenteppich. Alle Daten laufen in einem System zusammen, jede Änderung ist überall verfügbar.",
    sec1Body2:
      "Der wichtigste Unterschied zwischen einer Reinigungssoftware und einer klassischen ERP Software liegt im Objekt. Ein Reinigungsobjekt ist nicht nur ein Auftrag, sondern ein Ort mit Schlüsselverwaltung, Ansprechpartner, Sonderwünschen, Reinigungsintervallen, Nachweispflichten und einer eigenen Marge. Reinigungssoftware muss dieses Objekt als zentrale Datenstruktur begreifen.",
    sec1Body3:
      "Eine echte Reinigungssoftware verbindet operative Steuerung im Feld, gesetzeskonforme Dokumentation und betriebswirtschaftliche Auswertung. Wer nur eine Zeiterfassung sucht, kauft die Software zu klein. Wer nur die Buchhaltung optimieren will, kauft am eigentlichen Engpass vorbei.",
    sec1Bullet1: "Objektzentriertes Datenmodell statt Auftragslogik aus dem Handwerk",
    sec1Bullet2: "Verbindung von Feld, Büro und Auftraggeber in einem System",
    sec1Bullet3: "Automatische Nachweise statt manueller Excel Listen",
    sec1Bullet4: "Live Auswertungen zu Marge, Auslastung und Qualität",
    sec1Bullet5: "Rechtssichere Zeiterfassung nach §17 MiLoG",

    sec2Eyebrow: "Auswahlkriterien",
    sec2Heading: "8 Kriterien, an denen Sie gute Reinigungssoftware erkennen.",
    sec2Intro:
      "Reinigungssoftware am Markt gibt es viel. Die meisten Anbieter decken Teilbereiche gut ab, wenige denken den Betrieb ganzheitlich. Diese acht Kriterien helfen, eine belastbare Auswahl zu treffen und Fehlkäufe zu vermeiden.",
    sec2Sub1Heading: "1. All in One statt Modulschach",
    sec2Sub1Body:
      "Prüfen Sie, ob die Software Einsatzplanung, Zeiterfassung, Nachweise, Rechnungen und Auswertungen im gleichen System bereitstellt. Aufpreise pro Modul sind ein Warnsignal, weil sie mittelfristig zurück in den Flickenteppich führen.",
    sec2Sub2Heading: "2. Objektnachweis manipulationssicher",
    sec2Sub2Body:
      "Auftraggeber verlangen zunehmend lückenlose Nachweise. Reinigungssoftware sollte NFC oder GPS gestützte Nachweise erzeugen, die Ort, Zeit und Person eindeutig belegen. Alles andere gerät bei Reklamationen schnell unter Druck.",
    sec2Sub3Heading: "3. Zeiterfassung rechtssicher",
    sec2Sub3Body:
      "Die Zeiterfassung muss Mindestlohn konform arbeiten, Pausen automatisch berücksichtigen und mehrsprachig funktionieren. Reinigungsbetriebe beschäftigen häufig mehrsprachige Teams, dieser Punkt entscheidet über die Akzeptanz im Feld.",
    sec2Sub4Heading: "4. Einsatzplanung mit Drag and Drop",
    sec2Sub4Body:
      "Kurzfristige Umplanungen sind Alltag. Eine gute Reinigungssoftware zeigt Touren, Kolonnen und Vertretungen visuell und lässt Änderungen mit einem Tap fließen. Was per Chat und Anruf gelöst wird, ist teuer und fehleranfällig.",
    sec2Sub5Heading: "5. Live Marge pro Objekt",
    sec2Sub5Body:
      "Umsatz ist keine Steuergröße, die Marge pro Objekt schon. Reinigungssoftware sollte aus Angebot, gebuchten Stunden und Materialkosten die tatsächliche Marge pro Objekt live errechnen. Ohne diese Zahl steuert der Betrieb blind.",
    sec2Sub6Heading: "6. Auftraggeber Portal",
    sec2Sub6Body:
      "Ein schlanker Zugang für den Auftraggeber ist ein starkes Verkaufsargument. Reinigungssoftware wie Taskey stellt einen Kundenlogin bereit, in dem Nachweise, Qualitätsdaten und Sonderaufträge sichtbar sind. Kein Umweg über Mails.",
    sec2Sub7Heading: "7. DSGVO und Hosting in der EU",
    sec2Sub7Body:
      "Mitarbeiterdaten, Stundenzettel und Fotonachweise sind sensible Daten. Reinigungssoftware sollte in der EU gehostet sein, AVV automatisch bereitstellen und keinen Datenabfluss in Drittländer erlauben.",
    sec2Sub8Heading: "8. Fairer Preis und tägliche Kündbarkeit",
    sec2Sub8Body:
      "Lange Vertragslaufzeiten passen nicht mehr in die Realität kleiner und mittlerer Reinigungsbetriebe. Faire Reinigungssoftware bietet feste Monatspreise, keine versteckten Modulkosten und die Möglichkeit einer täglichen Kündigung.",

    sec3Eyebrow: "Anwendungsfelder",
    sec3Heading: "Für welche Betriebe sich Reinigungssoftware lohnt.",
    sec3Intro:
      "Reinigungssoftware lohnt sich früher als viele Inhaber vermuten. Schon ab dem ersten festen Objekt lassen sich Prozesse sinnvoll digitalisieren. Diese Betriebsgrößen und Reinigungsarten profitieren besonders stark.",
    sec3Bullet1: "Kleine Reinigungsfirmen ab einem Mitarbeitenden mit wiederkehrenden Objekten",
    sec3Bullet2: "Mittelständische Gebäudereinigung mit gemischtem Objektportfolio",
    sec3Bullet3: "Großbetriebe mit mehreren hundert Objekten und regionalen Standorten",
    sec3Bullet4: "Unterhaltsreinigung mit Touren, Kolonnen und Schlüsselverwaltung",
    sec3Bullet5: "Glasreinigung mit Höhenarbeit und intervallbasierten Aufträgen",
    sec3Bullet6: "Industriereinigung mit Sonderschichten und Maschinenreinigung",
    sec3Bullet7: "Klinik und Praxisreinigung mit Hygieneprotokollen",
    sec3Bullet8: "Bauendreinigung, Hotel Housekeeping, Sonderreinigung und Notdienst",

    sec4Eyebrow: "Nutzen",
    sec4Heading: "Was Reinigungssoftware messbar verändert.",
    sec4Body1:
      "Ein typischer Betrieb mit fünf bis fünfzehn Mitarbeitenden verbringt vor der Einführung acht bis zwölf Stunden pro Woche mit Stundenzetteln, Wochenplänen, Chat Antworten und Rechnungen. Nach der Einführung einer echten Reinigungssoftware sinken diese Bürostunden auf zwei bis drei pro Woche. Bei einem Inhaberstundensatz von 50 € entspricht das einer Zeitersparnis im Wert von etwa 18.000 € bis 24.000 € pro Jahr.",
    sec4Body2:
      "Der zweite Hebel liegt in der Marge. Reinigungssoftware macht sichtbar, welche Objekte tatsächlich Geld verdienen und welche stille Verlustbringer sind. Eine strukturierte Nachverhandlung von drei bis fünf schwachen Objekten pro Jahr steigert die durchschnittliche Marge in vielen Betrieben um fünf bis fünfzehn Prozent.",
    sec4Body3:
      "Der dritte Hebel ist die Auftraggeberbindung. Wer NFC Nachweise, digitale Qualitätsdokumentation und ein eigenes Kundenportal anbietet, hebt sich messbar von Wettbewerbern ab, die noch mit Papierlisten und Mail Anhängen arbeiten. Ausschreibungen werden häufiger gewonnen und Rahmenverträge halten länger.",

    sec5Eyebrow: "Bevor Sie kaufen",
    sec5Heading: "So vermeiden Sie den klassischen Fehlkauf bei Reinigungssoftware.",
    sec5Intro:
      "Fehlkäufe sind in der Branche üblich. Meist liegt es nicht an der Software, sondern an der Erwartung. Diese Punkte klären Betriebe im Vorfeld, damit die Auswahl belastbar wird.",
    sec5Bullet1: "Prozesse zuerst schriftlich festhalten, dann Software prüfen",
    sec5Bullet2: "Testphase mit einem echten Objekt statt Fantasie Daten",
    sec5Bullet3: "Migration aus Excel oder Alt Software im Kaufpreis klären",
    sec5Bullet4: "Support und Onboarding in Landessprache sicherstellen",
    sec5Bullet5: "Datenhoheit und Exportfähigkeit vertraglich vereinbaren",
    sec5Bullet6: "Preise pro Objekt und pro Mitarbeitendem sauber gegenrechnen",
    sec5Bullet7: "Live Demo verlangen, in der jedes Modul einmal gezeigt wird",

    sec6Eyebrow: "Empfehlung",
    sec6Heading: "Warum Taskey als Reinigungssoftware im Ratgeber prominent auftaucht.",
    sec6Intro:
      "Dieser Ratgeber wird von der Taskey Redaktion herausgegeben. Wir machen aus dieser Herkunft keinen Hehl. Taskey ist eine der wenigen All in One Reinigungssoftwares am deutschsprachigen Markt und die Grundlage der hier beschriebenen Kriterien. Trotzdem gilt: prüfen Sie in Ihrer eigenen Auswahl weitere Anbieter.",
    sec6Body1:
      "Taskey deckt alle acht Kriterien in einem System ab. Einsatzplanung per Drag and Drop, NFC Objektnachweis, Mindestlohn konforme Zeiterfassung, Angebote, Rechnungen mit DATEV Export, Live Margen pro Objekt, Auftraggeber Portal, EU Hosting und tägliche Kündbarkeit. Der Account ist kostenlos anzulegen. Ohne Kreditkarte, ohne automatische Verlängerung.",
    sec6Body2:
      "Wenn Sie Taskey als Reinigungssoftware ernsthaft prüfen möchten, empfehlen wir eine unverbindliche Live Demo. In rund 30 Minuten zeigt das Team jedes Modul am Beispiel Ihres eigenen Betriebs. Sie fragen, das Team zeigt. Wenn Taskey nicht passt, sagen wir das offen. Wenn es passt, übernimmt das Onboarding Team die Ersteinrichtung inklusive Datenmigration binnen 48 Stunden.",
    sec6Bullet1: "Alle acht Auswahlkriterien in einem System abgebildet",
    sec6Bullet2: "Kostenloser Account ohne Kreditkarte",
    sec6Bullet3: "30 Minuten Live Demo mit ehrlicher Einschätzung",
    sec6Bullet4: "48 Stunden Onboarding inklusive CSV Migration",
    sec6Bullet5: "Feste Monatspreise, täglich kündbar",

    faq1Q: "Was ist Reinigungssoftware?",
    faq1A:
      "Reinigungssoftware ist eine Branchensoftware, die alle wiederkehrenden Prozesse eines Reinigungsbetriebs digital abbildet. Sie deckt Einsatzplanung, mobile Zeiterfassung, NFC Objektnachweis, Angebote, Rechnungen, Qualitätskontrolle und Auswertungen in einem System ab. Moderne Reinigungssoftware wie Taskey verbindet Feld, Büro und Auftraggeber auf einer durchgehenden Datenbasis.",
    faq2Q: "Für welche Betriebe eignet sich Reinigungssoftware?",
    faq2A:
      "Reinigungssoftware eignet sich für Betriebe jeder Größe, vom Ein Personen Betrieb bis zur mehrstandortigen Gebäudereinigung. Der Nutzen setzt bereits ab dem ersten festen Objekt ein und wächst mit jeder zusätzlichen Mitarbeitenden. Besonders profitieren Betriebe mit wiederkehrenden Touren, mehreren Objekten oder anspruchsvollen Auftraggeberdokumentationen.",
    faq3Q: "Welche Module sollte eine gute Reinigungssoftware enthalten?",
    faq3A:
      "Eine gute Reinigungssoftware enthält Einsatzplanung, mobile Zeiterfassung, NFC oder GPS gestützten Objektnachweis, Angebote und Rechnungen, DATEV Export, Live Margen pro Objekt, digitale Qualitätskontrolle und ein Auftraggeber Portal. Alle Module sollten im gleichen System liegen und über eine durchgehende Datenbasis verbunden sein.",
    faq4Q: "Was kostet Reinigungssoftware im Monat?",
    faq4A:
      "Der Marktpreis für professionelle Reinigungssoftware liegt aktuell zwischen 80 € und 250 € pro Monat für kleine Betriebe. Taskey startet ab 119 € pro Monat mit festem Monatspreis, ohne versteckte Modulkosten, ohne Setup Gebühr. Faire Anbieter erlauben eine tägliche Kündigung und stellen den Account kostenlos zur Verfügung.",
    faq5Q: "Ist Reinigungssoftware DSGVO konform?",
    faq5A:
      "Reinigungssoftware sollte DSGVO konform arbeiten und in der EU gehostet sein. Anbieter wie Taskey stellen den Auftragsverarbeitungsvertrag automatisch bereit. Mitarbeiterdaten, Stundenzettel und Objektnachweise verlassen die EU nicht. Bei US Cloud Lösungen ist besondere Vorsicht geboten.",
    faq6Q: "Wie schnell ist Reinigungssoftware einsatzbereit?",
    faq6A:
      "Moderne Reinigungssoftware ist nach der Registrierung in unter zehn Minuten grundsätzlich einsatzbereit. Die vollständige Einrichtung mit allen Objekten, Mitarbeitenden und Verträgen dauert je nach Betriebsgröße einige Stunden. Taskey bietet ein 48 Stunden Onboarding inklusive kostenloser Datenmigration aus Excel oder Alt Software.",
    faq7Q: "Kann Reinigungssoftware auch für kleine Reinigungsfirmen sinnvoll sein?",
    faq7A:
      "Ja. Gerade kleine Reinigungsfirmen profitieren von einer echten Reinigungssoftware, weil sie das Tool Chaos aus Excel, Chat und Buchhaltungslösung ersetzt. Wichtig ist eine faire Preisstruktur mit tageweiser Kündigung und ohne Modulaufpreise. Taskey ist bereits ab einem Mitarbeitenden nutzbar.",
    faq8Q: "Wie unterscheidet sich Reinigungssoftware von einer ERP Software?",
    faq8A:
      "Klassische ERP Software denkt in Aufträgen, Reinigungssoftware denkt in Objekten. Ein Objekt ist Ort, Ansprechpartner, Schlüsselverwaltung, Nachweispflicht und Marge in einem. ERP Software bildet diese Struktur nicht ab. Deshalb greifen Reinigungsbetriebe zu spezialisierten Reinigungssoftwares statt zu generischer ERP Software.",
    faq9Q: "Welche Reinigungssoftware ist die beste?",
    faq9A:
      "Die beste Reinigungssoftware ist die, die alle Kernprozesse in einem System bündelt, DSGVO konform in der EU gehostet ist, faire Preise ohne Modulaufpreise bietet und tägliche Kündbarkeit erlaubt. Taskey erfüllt diese Kriterien und wird deshalb im Ratgeber prominent empfohlen. Wir empfehlen zusätzlich, zwei bis drei Anbieter live vergleichen zu lassen.",
    faq10Q: "Wie starte ich mit Reinigungssoftware?",
    faq10A:
      "Der einfachste Einstieg ist ein kostenloser Account bei einem Anbieter mit fairer Preisstruktur. Bei Taskey lässt sich der Account ohne Kreditkarte erstellen. Anschließend empfehlen wir eine 30 minütige Live Demo, in der jedes Modul am Beispiel Ihres Betriebs gezeigt wird. Die vollständige Einrichtung übernimmt das Onboarding Team in 48 Stunden.",

    rel1Label: "Software für Gebäudereinigung",
    rel1Desc: "Der ausführliche Produktpillar zur Branchensoftware für Gebäudereinigungsbetriebe.",
    rel2Label: "Software für kleine Reinigungsfirmen",
    rel2Desc: "Speziell für Betriebe mit 1 bis 15 Mitarbeitenden und überschaubarem Portfolio.",
    rel3Label: "Zeiterfassung Gebäudereinigung",
    rel3Desc: "Mindestlohn konforme Zeiterfassung mit NFC, GPS und Offline Sync.",
    rel4Label: "NFC Zeiterfassung im Detail",
    rel4Desc: "Wie der NFC Tag am Objekt funktioniert, was er kostet und wo er sitzt.",
    rel5Label: "Einsatzplanung Reinigung",
    rel5Desc: "Touren, Kolonnen und Vertretungen mit Drag and Drop planen.",
    rel6Label: "Leistungsnachweis Gebäudereinigung",
    rel6Desc: "Aus dem NFC Scan wird automatisch der Nachweis für den Auftraggeber.",
    rel7Label: "Anbietervergleich 2026",
    rel7Desc: "Acht Reinigungssoftwares im direkten Vergleich mit Funktionen und Preisen.",
  },
  en: {
    title: "Cleaning Software",
    eyebrow: "Guide · Cleaning Software",
    h1: "Cleaning software:",
    h1Accent: "the buyer guide for operations that want clarity, not tool chaos.",
    lead: "Cleaning software in 2026 is no longer a plain accounting tool. It controls scheduling, mobile time tracking, NFC proof of service, quotes, invoices and margin per site in a single system. This guide by the Taskey editorial team explains what owners and operations managers should look at when choosing, rolling out and pricing modern cleaning software. Straight to the point, close to reality, no marketing polish.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Cleaning Software",

    sec1Eyebrow: "Definition",
    sec1Heading: "What cleaning software really means in 2026.",
    sec1Intro:
      "Cleaning software is industry software that digitises every recurring process of a cleaning operation. From quoting to scheduling, mobile time tracking, proof of service, quality control, invoicing and DATEV handover. Its central value does not sit in a single module, it sits in a continuous data foundation.",
    sec1Body1:
      "Historically the industry built its stack from point tools. An Excel sheet for pricing, an accounting tool for invoicing, a chat for communication, an app for time tracking, a cloud folder for proofs. Modern cleaning software replaces exactly this patchwork. All data lives in one system, every change is available everywhere.",
    sec1Body2:
      "The most important difference between cleaning software and classic ERP software sits in the site. A cleaning site is not just an order, it is a place with key management, contact person, special requests, cleaning intervals, proof duties and its own margin. Cleaning software has to understand this site as its central data structure.",
    sec1Body3:
      "Real cleaning software connects field operations, legally compliant documentation and business analytics. Anyone buying just time tracking is buying too small. Anyone optimising only accounting is buying past the actual bottleneck.",
    sec1Bullet1: "Site centric data model instead of trade order logic",
    sec1Bullet2: "Connection between field, office and client in one system",
    sec1Bullet3: "Automatic proofs instead of manual Excel lists",
    sec1Bullet4: "Live analytics on margin, utilisation and quality",
    sec1Bullet5: "Legally compliant time tracking under §17 MiLoG",

    sec2Eyebrow: "Selection criteria",
    sec2Heading: "Eight criteria that separate good cleaning software from the rest.",
    sec2Intro:
      "The market for cleaning software is crowded. Most vendors cover parts of the process well, few think the whole operation through. These eight criteria help you make a solid choice and avoid a bad purchase.",
    sec2Sub1Heading: "1. All in one instead of module chess",
    sec2Sub1Body:
      "Check whether the software delivers scheduling, time tracking, proofs, invoices and analytics in the same system. Extra fees per module are a warning sign because they lead back into the patchwork mid term.",
    sec2Sub2Heading: "2. Tamper proof site verification",
    sec2Sub2Body:
      "Clients increasingly demand full proof. Cleaning software should create NFC or GPS based proofs that clearly document place, time and person. Anything less comes under pressure fast during complaints.",
    sec2Sub3Heading: "3. Legally compliant time tracking",
    sec2Sub3Body:
      "Time tracking has to be minimum wage compliant, handle breaks automatically and work in several languages. Cleaning operations often run multilingual teams, this point decides whether the field accepts the tool.",
    sec2Sub4Heading: "4. Scheduling with drag and drop",
    sec2Sub4Body:
      "Last minute changes are business as usual. Good cleaning software shows routes, crews and replacements visually and lets changes flow with a tap. What is solved by chat and calls is expensive and error prone.",
    sec2Sub5Heading: "5. Live margin per site",
    sec2Sub5Body:
      "Revenue is not a steering number, margin per site is. Cleaning software should compute margin live from quote, booked hours and material cost. Without that number the operation steers blind.",
    sec2Sub6Heading: "6. Client portal",
    sec2Sub6Body:
      "A lean client access point is a strong sales argument. Cleaning software such as Taskey provides a customer login for proofs, quality data and special jobs. No detour through email.",
    sec2Sub7Heading: "7. GDPR and EU hosting",
    sec2Sub7Body:
      "Employee data, timesheets and photo proofs are sensitive data. Cleaning software should be hosted in the EU, provide a DPA automatically and prevent any data outflow to third countries.",
    sec2Sub8Heading: "8. Fair pricing and daily cancellation",
    sec2Sub8Body:
      "Long term contracts no longer match the reality of small and mid sized cleaning operations. Fair cleaning software provides fixed monthly prices, no hidden module costs and the option of a daily cancellation.",

    sec3Eyebrow: "Use cases",
    sec3Heading: "Which operations benefit most from cleaning software.",
    sec3Intro:
      "Cleaning software pays off earlier than many owners think. Digital processes make sense from the first recurring site onwards. These company sizes and cleaning types benefit particularly.",
    sec3Bullet1: "Small cleaning companies from one staff member with recurring sites",
    sec3Bullet2: "Mid sized building cleaning with mixed site portfolios",
    sec3Bullet3: "Large operations with several hundred sites and regional branches",
    sec3Bullet4: "Maintenance cleaning with routes, crews and key management",
    sec3Bullet5: "Glass cleaning with work at height and interval based jobs",
    sec3Bullet6: "Industrial cleaning with special shifts and machine cleaning",
    sec3Bullet7: "Hospital and practice cleaning with hygiene protocols",
    sec3Bullet8: "Post construction cleaning, hotel housekeeping, special cleaning and emergency service",

    sec4Eyebrow: "Impact",
    sec4Heading: "What cleaning software changes measurably.",
    sec4Body1:
      "A typical operation with five to fifteen staff spends eight to twelve hours per week on timesheets, weekly plans, chat replies and invoicing before rollout. After introducing real cleaning software these office hours fall to two or three per week. At an owner rate of 50 € that equals a time saving worth 18,000 € to 24,000 € per year.",
    sec4Body2:
      "The second lever sits in margin. Cleaning software makes visible which sites actually earn money and which are silent loss makers. A structured renegotiation of three to five weak sites per year lifts the average margin in many operations by five to fifteen percent.",
    sec4Body3:
      "The third lever is client loyalty. Anyone offering NFC proofs, digital quality documentation and a dedicated client portal stands out measurably against competitors still working on paper and email. Tenders are won more often and framework contracts hold longer.",

    sec5Eyebrow: "Before you buy",
    sec5Heading: "How to avoid the classic bad purchase of cleaning software.",
    sec5Intro:
      "Bad purchases happen often in this industry. Usually not because of the software but because of the expectation. Clarifying these points up front makes the selection solid.",
    sec5Bullet1: "Document processes in writing first, then evaluate software",
    sec5Bullet2: "Run the trial on a real site instead of fantasy data",
    sec5Bullet3: "Clarify migration from Excel or legacy software in the pricing",
    sec5Bullet4: "Ensure support and onboarding in your language",
    sec5Bullet5: "Contractually agree on data ownership and export",
    sec5Bullet6: "Cleanly compare prices per site and per user",
    sec5Bullet7: "Ask for a live demo that shows every module once",

    sec6Eyebrow: "Recommendation",
    sec6Heading: "Why Taskey appears prominently as cleaning software in this guide.",
    sec6Intro:
      "This guide is published by the Taskey editorial team. We do not hide that fact. Taskey is one of the few all in one cleaning software products in the German speaking market and the basis for the criteria described here. Still, evaluate other vendors in your own selection process.",
    sec6Body1:
      "Taskey covers all eight criteria in one system. Drag and drop scheduling, NFC proof of service, minimum wage compliant time tracking, quotes, invoices with DATEV export, live margins per site, client portal, EU hosting and daily cancellation. The account is free to create. No credit card, no automatic renewal.",
    sec6Body2:
      "If you want to seriously evaluate Taskey as your cleaning software, we recommend a no obligation live demo. In around 30 minutes the team walks through every module using your own operation as the example. You ask, the team shows. If Taskey does not fit, we say so openly. If it fits, the onboarding team handles the initial setup including data migration within 48 hours.",
    sec6Bullet1: "All eight selection criteria covered in one system",
    sec6Bullet2: "Free account without credit card",
    sec6Bullet3: "30 minute live demo with honest assessment",
    sec6Bullet4: "48 hour onboarding including CSV migration",
    sec6Bullet5: "Fixed monthly prices, daily cancellation",

    faq1Q: "What is cleaning software?",
    faq1A:
      "Cleaning software is industry software that digitises every recurring process of a cleaning operation. It covers scheduling, mobile time tracking, NFC proof of service, quotes, invoices, quality control and analytics in one system. Modern cleaning software such as Taskey connects field, office and client on a continuous data foundation.",
    faq2Q: "Which operations should use cleaning software?",
    faq2A:
      "Cleaning software fits operations of any size, from one person operations to multi site building cleaning companies. The benefit starts with the first recurring site and grows with every additional staff member. Operations with recurring routes, several sites or demanding client documentation benefit especially.",
    faq3Q: "Which modules should good cleaning software include?",
    faq3A:
      "Good cleaning software includes scheduling, mobile time tracking, NFC or GPS based proof of service, quotes and invoices, DATEV export, live margins per site, digital quality control and a client portal. All modules should live in the same system and share a continuous data foundation.",
    faq4Q: "What does cleaning software cost per month?",
    faq4A:
      "Market prices for professional cleaning software currently range from 80 € to 250 € per month for small operations. Taskey starts at 119 € per month with a fixed monthly price, no hidden module costs and no setup fee. Fair vendors allow daily cancellation and provide the account for free.",
    faq5Q: "Is cleaning software GDPR compliant?",
    faq5A:
      "Cleaning software should be GDPR compliant and hosted in the EU. Vendors such as Taskey provide the data processing agreement automatically. Employee data, timesheets and site proofs do not leave the EU. Extra caution is warranted with US cloud vendors.",
    faq6Q: "How quickly is cleaning software ready to use?",
    faq6A:
      "Modern cleaning software is basically ready to use in less than ten minutes after registration. Full setup with all sites, staff and contracts takes a few hours depending on operation size. Taskey offers a 48 hour onboarding including free data migration from Excel or legacy software.",
    faq7Q: "Does cleaning software make sense for small cleaning companies?",
    faq7A:
      "Yes. Small cleaning companies benefit particularly because real cleaning software replaces the tool chaos of Excel, chat and accounting solutions. Fair pricing with daily cancellation and no module surcharges matters. Taskey is usable from one staff member onwards.",
    faq8Q: "How is cleaning software different from ERP software?",
    faq8A:
      "Classic ERP thinks in orders, cleaning software thinks in sites. A site is place, contact, key management, proof duty and margin at once. ERP does not model this structure. That is why cleaning operations use specialised cleaning software instead of generic ERP.",
    faq9Q: "Which cleaning software is the best?",
    faq9A:
      "The best cleaning software bundles all core processes in one system, is GDPR compliant and hosted in the EU, offers fair pricing without module surcharges and allows daily cancellation. Taskey fulfils these criteria and is therefore recommended prominently in this guide. We also recommend a live comparison of two or three vendors.",
    faq10Q: "How do I start with cleaning software?",
    faq10A:
      "The simplest entry point is a free account at a vendor with fair pricing. Taskey allows an account creation without credit card. We recommend a 30 minute live demo showing every module with your operation as the example. The onboarding team handles full setup within 48 hours.",

    rel1Label: "Software for Building Cleaning",
    rel1Desc: "The full product pillar on industry software for building cleaning operations.",
    rel2Label: "Software for Small Cleaning Companies",
    rel2Desc: "Designed for operations with 1 to 15 staff and a manageable portfolio.",
    rel3Label: "Time Tracking for Building Cleaning",
    rel3Desc: "Minimum wage compliant time tracking with NFC, GPS and offline sync.",
    rel4Label: "NFC Time Tracking in Detail",
    rel4Desc: "How the NFC tag on the site works, what it costs and where it sits.",
    rel5Label: "Scheduling for Cleaning",
    rel5Desc: "Plan routes, crews and replacements via drag and drop.",
    rel6Label: "Proof of Service for Building Cleaning",
    rel6Desc: "The NFC scan automatically becomes the proof for the client.",
    rel7Label: "Vendor Comparison 2026",
    rel7Desc: "Eight cleaning software products compared directly with features and pricing.",
  },
  fr: {
    title: "Logiciel de nettoyage",
    eyebrow: "Guide · Logiciel de nettoyage",
    h1: "Logiciel de nettoyage :",
    h1Accent: "le guide d’achat pour les entreprises qui veulent de la clarté et pas du chaos d’outils.",
    lead: "Un logiciel de nettoyage en 2026 n’est plus un simple outil comptable. Il pilote la planification, le pointage mobile, le justificatif NFC, les devis, les factures et la marge par site dans un seul système. Ce guide rédigé par l’équipe éditoriale Taskey explique ce que dirigeants et responsables d’exploitation doivent regarder lors du choix, du déploiement et du budget d’un logiciel de nettoyage moderne. Sans détour, proche du terrain, sans vernis marketing.",
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Logiciel de nettoyage",

    sec1Eyebrow: "Définition",
    sec1Heading: "Ce que signifie vraiment un logiciel de nettoyage en 2026.",
    sec1Intro:
      "Un logiciel de nettoyage est un logiciel métier qui digitalise tous les processus récurrents d’une entreprise de nettoyage. Du devis à la planification, au pointage mobile, au justificatif d’intervention, au contrôle qualité, à la facturation et à l’export DATEV. Sa valeur centrale ne vient pas d’un module isolé, elle vient d’une base de données continue.",
    sec1Body1:
      "Historiquement, la profession a bâti sa pile à partir d’outils isolés. Un fichier Excel pour la cotation, un outil comptable pour la facturation, un chat pour la communication, une app pour le pointage, un dossier cloud pour les justificatifs. Un logiciel de nettoyage moderne remplace exactement ce patchwork. Toutes les données vivent dans un seul système, chaque changement est disponible partout.",
    sec1Body2:
      "La différence la plus importante entre un logiciel de nettoyage et un ERP classique se situe dans le site. Un site de nettoyage n’est pas un simple ordre, c’est un lieu avec gestion des clés, contact, souhaits particuliers, intervalles, obligations de justificatif et marge propre. Un logiciel de nettoyage doit traiter ce site comme sa structure de données centrale.",
    sec1Body3:
      "Un vrai logiciel de nettoyage relie opération sur le terrain, documentation conforme et analyse financière. Qui n’achète qu’un pointage achète trop petit. Qui n’optimise que la comptabilité achète à côté du vrai point de blocage.",
    sec1Bullet1: "Modèle de données centré site plutôt que logique d’ordre artisanal",
    sec1Bullet2: "Lien entre terrain, bureau et donneur d’ordre dans un seul système",
    sec1Bullet3: "Justificatifs automatiques plutôt que listes Excel manuelles",
    sec1Bullet4: "Analyses en direct sur marge, taux d’occupation et qualité",
    sec1Bullet5: "Pointage conforme au salaire minimum (§17 MiLoG)",

    sec2Eyebrow: "Critères de sélection",
    sec2Heading: "Huit critères pour distinguer un bon logiciel de nettoyage.",
    sec2Intro:
      "L’offre de logiciels de nettoyage est vaste. La plupart couvrent bien des parties du processus, peu pensent l’exploitation dans son ensemble. Ces huit critères aident à faire un choix solide et à éviter un mauvais achat.",
    sec2Sub1Heading: "1. Tout en un plutôt que jeu d’échecs modulaire",
    sec2Sub1Body:
      "Vérifiez que le logiciel propose planification, pointage, justificatifs, factures et analyses dans le même système. Des coûts supplémentaires par module sont un signal d’alerte, car ils ramènent à moyen terme au patchwork.",
    sec2Sub2Heading: "2. Justificatif d’intervention infalsifiable",
    sec2Sub2Body:
      "Les donneurs d’ordre exigent de plus en plus des justificatifs complets. Le logiciel de nettoyage doit produire des justificatifs NFC ou GPS qui documentent clairement lieu, heure et personne. Tout le reste s’effondre vite en cas de réclamation.",
    sec2Sub3Heading: "3. Pointage conforme",
    sec2Sub3Body:
      "Le pointage doit être conforme au salaire minimum, gérer les pauses automatiquement et être multilingue. Les entreprises de nettoyage emploient souvent des équipes multilingues, ce point décide de l’acceptation sur le terrain.",
    sec2Sub4Heading: "4. Planification en glisser déposer",
    sec2Sub4Body:
      "Les ajustements de dernière minute sont la norme. Un bon logiciel de nettoyage montre tournées, équipes et remplacements visuellement et fluidifie les changements d’un tap. Ce qui se règle par chat et appels coûte cher et génère des erreurs.",
    sec2Sub5Heading: "5. Marge en direct par site",
    sec2Sub5Body:
      "Le chiffre d’affaires n’est pas un indicateur de pilotage, la marge par site oui. Le logiciel de nettoyage doit calculer la marge en direct à partir du devis, des heures effectuées et des matériaux. Sans ce chiffre, l’exploitation pilote à l’aveugle.",
    sec2Sub6Heading: "6. Portail donneur d’ordre",
    sec2Sub6Body:
      "Un accès dédié pour le donneur d’ordre est un fort argument commercial. Un logiciel de nettoyage comme Taskey fournit un identifiant client pour justificatifs, données qualité et prestations exceptionnelles. Fini le détour par les e mails.",
    sec2Sub7Heading: "7. RGPD et hébergement UE",
    sec2Sub7Body:
      "Données des salariés, feuilles d’heures et photos de justificatif sont sensibles. Le logiciel de nettoyage doit être hébergé dans l’UE, fournir automatiquement un DPA et empêcher tout flux vers des pays tiers.",
    sec2Sub8Heading: "8. Prix juste et résiliation quotidienne",
    sec2Sub8Body:
      "Les longs engagements ne correspondent plus à la réalité des petites et moyennes entreprises de nettoyage. Un logiciel de nettoyage équitable propose des prix mensuels fixes, aucun coût de module caché et une résiliation possible chaque jour.",

    sec3Eyebrow: "Cas d’usage",
    sec3Heading: "Quelles entreprises tirent le plus de valeur d’un logiciel de nettoyage.",
    sec3Intro:
      "Un logiciel de nettoyage devient rentable plus tôt que ne le pensent bien des dirigeants. Dès le premier site récurrent, les processus se digitalisent utilement. Ces tailles d’entreprises et types de nettoyage en profitent particulièrement.",
    sec3Bullet1: "Petites entreprises de nettoyage dès un salarié avec sites récurrents",
    sec3Bullet2: "Nettoyage de bâtiments moyen avec portefeuille de sites mixte",
    sec3Bullet3: "Grandes structures avec plusieurs centaines de sites et implantations régionales",
    sec3Bullet4: "Nettoyage d’entretien avec tournées, équipes et gestion des clés",
    sec3Bullet5: "Nettoyage de vitres avec travail en hauteur et contrats à intervalles",
    sec3Bullet6: "Nettoyage industriel avec équipes spéciales et nettoyage machines",
    sec3Bullet7: "Nettoyage hospitalier et cabinet avec protocoles d’hygiène",
    sec3Bullet8: "Nettoyage fin de chantier, housekeeping hôtelier, nettoyage spécial et urgences",

    sec4Eyebrow: "Impact",
    sec4Heading: "Ce qu’un logiciel de nettoyage change de façon mesurable.",
    sec4Body1:
      "Une entreprise typique de cinq à quinze salariés passe huit à douze heures par semaine sur feuilles d’heures, plannings hebdomadaires, réponses par chat et facturation avant déploiement. Après l’introduction d’un vrai logiciel de nettoyage, ces heures de bureau tombent à deux ou trois par semaine. À un taux dirigeant de 50 €, cela représente une économie de temps d’environ 18 000 € à 24 000 € par an.",
    sec4Body2:
      "Le deuxième levier est la marge. Un logiciel de nettoyage rend visible quels sites gagnent réellement de l’argent et lesquels sont des pertes silencieuses. Une renégociation structurée de trois à cinq sites faibles par an fait progresser la marge moyenne dans beaucoup d’entreprises de cinq à quinze pour cent.",
    sec4Body3:
      "Le troisième levier est la fidélité des donneurs d’ordre. Proposer justificatifs NFC, documentation qualité numérique et portail client dédié permet de se démarquer clairement de concurrents encore en mode papier et pièce jointe. Les appels d’offres se gagnent plus souvent et les contrats cadres durent plus longtemps.",

    sec5Eyebrow: "Avant d’acheter",
    sec5Heading: "Comment éviter le mauvais achat classique de logiciel de nettoyage.",
    sec5Intro:
      "Les mauvais achats sont fréquents dans la profession. Souvent pas à cause du logiciel, mais des attentes. Clarifier ces points en amont rend la sélection solide.",
    sec5Bullet1: "Formaliser les processus par écrit avant d’évaluer les logiciels",
    sec5Bullet2: "Réaliser le test sur un vrai site plutôt que sur des données fictives",
    sec5Bullet3: "Clarifier la migration Excel ou ancien logiciel dans le prix",
    sec5Bullet4: "S’assurer d’un support et d’un onboarding dans votre langue",
    sec5Bullet5: "Convenir contractuellement de la propriété et de l’export des données",
    sec5Bullet6: "Comparer proprement les prix par site et par utilisateur",
    sec5Bullet7: "Exiger une démo en direct montrant chaque module une fois",

    sec6Eyebrow: "Recommandation",
    sec6Heading: "Pourquoi Taskey apparaît en tête comme logiciel de nettoyage dans ce guide.",
    sec6Intro:
      "Ce guide est publié par l’équipe éditoriale Taskey. Nous ne le cachons pas. Taskey est l’un des rares logiciels de nettoyage tout en un du marché germanophone et sert de référence aux critères présentés ici. Malgré tout, évaluez d’autres fournisseurs dans votre propre processus.",
    sec6Body1:
      "Taskey couvre les huit critères dans un seul système. Planification en glisser déposer, justificatif NFC, pointage conforme au salaire minimum, devis, factures avec export DATEV, marges en direct par site, portail donneur d’ordre, hébergement UE et résiliation quotidienne. Le compte est gratuit à créer. Sans carte bancaire, sans reconduction automatique.",
    sec6Body2:
      "Si vous voulez évaluer sérieusement Taskey comme logiciel de nettoyage, nous recommandons une démo en direct sans engagement. En une trentaine de minutes, l’équipe parcourt chaque module en s’appuyant sur votre propre exploitation. Vous demandez, l’équipe montre. Si Taskey ne colle pas, nous le disons franchement. Si ça colle, l’équipe d’onboarding prend en charge la configuration initiale, migration des données comprise, en 48 heures.",
    sec6Bullet1: "Les huit critères de sélection couverts dans un seul système",
    sec6Bullet2: "Compte gratuit sans carte bancaire",
    sec6Bullet3: "Démo en direct de 30 minutes avec évaluation honnête",
    sec6Bullet4: "Onboarding en 48 heures avec migration CSV incluse",
    sec6Bullet5: "Prix mensuel fixe, résiliation quotidienne",

    faq1Q: "Qu’est-ce qu’un logiciel de nettoyage ?",
    faq1A:
      "Un logiciel de nettoyage est un logiciel métier qui digitalise tous les processus récurrents d’une entreprise de nettoyage. Il couvre planification, pointage mobile, justificatif NFC, devis, factures, contrôle qualité et analyses dans un seul système. Un logiciel de nettoyage moderne comme Taskey relie terrain, bureau et donneur d’ordre sur une base de données continue.",
    faq2Q: "À quelles entreprises s’adresse un logiciel de nettoyage ?",
    faq2A:
      "Un logiciel de nettoyage convient à toutes les tailles d’entreprises, du travailleur indépendant au groupe multi sites. Le bénéfice démarre au premier site récurrent et croît avec chaque salarié supplémentaire. Les entreprises avec tournées récurrentes, plusieurs sites ou documentation exigée par les donneurs d’ordre en profitent particulièrement.",
    faq3Q: "Quels modules doit contenir un bon logiciel de nettoyage ?",
    faq3A:
      "Un bon logiciel de nettoyage contient planification, pointage mobile, justificatif d’intervention NFC ou GPS, devis et factures, export DATEV, marges en direct par site, contrôle qualité numérique et portail donneur d’ordre. Tous les modules doivent partager le même système et une base de données continue.",
    faq4Q: "Combien coûte un logiciel de nettoyage par mois ?",
    faq4A:
      "Les prix du marché pour un logiciel de nettoyage professionnel vont actuellement de 80 € à 250 € par mois pour les petites entreprises. Taskey démarre à 119 € par mois avec un prix mensuel fixe, sans coûts de module cachés ni frais d’installation. Les fournisseurs équitables autorisent une résiliation quotidienne et proposent le compte gratuitement.",
    faq5Q: "Un logiciel de nettoyage est-il conforme RGPD ?",
    faq5A:
      "Un logiciel de nettoyage doit être conforme RGPD et hébergé dans l’UE. Des fournisseurs comme Taskey fournissent automatiquement le contrat de sous traitance. Données salariés, feuilles d’heures et justificatifs ne quittent pas l’UE. Prudence particulière avec les fournisseurs cloud américains.",
    faq6Q: "En combien de temps un logiciel de nettoyage est-il opérationnel ?",
    faq6A:
      "Un logiciel de nettoyage moderne est opérationnel de base en moins de dix minutes après inscription. La configuration complète avec sites, salariés et contrats prend quelques heures selon la taille. Taskey propose un onboarding en 48 heures avec migration gratuite des données depuis Excel ou un ancien logiciel.",
    faq7Q: "Un logiciel de nettoyage est-il utile aux petites entreprises ?",
    faq7A:
      "Oui. Les petites entreprises de nettoyage en tirent particulièrement profit, car un vrai logiciel de nettoyage remplace le chaos d’outils Excel, chat et comptabilité. Un prix équitable avec résiliation quotidienne et sans surcoût de module est important. Taskey est utilisable dès un salarié.",
    faq8Q: "En quoi un logiciel de nettoyage diffère-t-il d’un ERP ?",
    faq8A:
      "L’ERP classique pense en ordres, un logiciel de nettoyage pense en sites. Un site est à la fois lieu, contact, gestion des clés, obligation de justificatif et marge. L’ERP ne modélise pas cette structure. C’est pourquoi les entreprises de nettoyage utilisent des logiciels spécialisés plutôt qu’un ERP générique.",
    faq9Q: "Quel est le meilleur logiciel de nettoyage ?",
    faq9A:
      "Le meilleur logiciel de nettoyage regroupe tous les processus clés dans un système unique, est conforme RGPD et hébergé dans l’UE, propose des prix justes sans surcoût de module et permet une résiliation quotidienne. Taskey remplit ces critères et est donc recommandé en tête de ce guide. Nous recommandons également de comparer en direct deux ou trois fournisseurs.",
    faq10Q: "Comment démarrer avec un logiciel de nettoyage ?",
    faq10A:
      "L’entrée la plus simple est un compte gratuit chez un fournisseur au prix équitable. Taskey permet la création de compte sans carte bancaire. Nous recommandons ensuite une démo en direct de 30 minutes présentant chaque module sur votre exploitation. L’équipe d’onboarding prend en charge la configuration complète en 48 heures.",

    rel1Label: "Logiciel pour le nettoyage de bâtiments",
    rel1Desc: "Le pilier produit détaillé sur le logiciel métier pour le nettoyage de bâtiments.",
    rel2Label: "Logiciel pour petites entreprises de nettoyage",
    rel2Desc: "Conçu pour les structures de 1 à 15 agents et un portefeuille maîtrisé.",
    rel3Label: "Pointage Nettoyage de bâtiments",
    rel3Desc: "Pointage conforme au salaire minimum avec NFC, GPS et synchro hors ligne.",
    rel4Label: "Pointage NFC en détail",
    rel4Desc: "Comment le tag NFC fonctionne, ce qu’il coûte et où il est posé.",
    rel5Label: "Planification Nettoyage",
    rel5Desc: "Planifier tournées, équipes et remplacements en glisser déposer.",
    rel6Label: "Justificatif d’intervention Nettoyage",
    rel6Desc: "Le scan NFC devient automatiquement le justificatif pour le donneur d’ordre.",
    rel7Label: "Comparatif fournisseurs 2026",
    rel7Desc: "Huit logiciels de nettoyage comparés directement, fonctions et prix.",
  },
} as const;

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = pickLocale(locale);
  const c = CONTENT[loc];
  const sc = SCHEMA_COPY[loc];

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: sc.schemaName,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: sc.schemaSubCategory,
    operatingSystem: "Web, iOS, Android",
    url: `https://www.taskeyapp.com${path}`,
    description: sc.schemaDescription,
    offers: {
      "@type": "Offer",
      price: "119",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "119",
        priceCurrency: "EUR",
        unitText: "MONTH",
      },
      availability: "https://schema.org/InStock",
      url: "https://signup.taskeyapp.com",
      description: sc.schemaOfferDescription,
    },
    author: {
      "@type": "Organization",
      name: "Schulz & Stosse GbR",
      url: "https://www.taskeyapp.com",
    },
    featureList: sc.schemaFeatures,
    inLanguage: sc.inLanguage,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <TestimonialReviews />
      <FeaturePreview />
      <LiveMargen />
      <AblaufSection />
      <LandingPageTemplate
        path={path}
        title={c.title}
        eyebrow={c.eyebrow}
        h1={c.h1}
        h1Accent={c.h1Accent}
        lead={c.lead}
        breadcrumbs={[
          { name: c.breadcrumbHome, url: "https://www.taskeyapp.com" },
          { name: c.breadcrumbCurrent, url: `https://www.taskeyapp.com${path}` },
        ]}
        sections={[
          {
            eyebrow: c.sec1Eyebrow,
            heading: c.sec1Heading,
            intro: c.sec1Intro,
            body: [c.sec1Body1, c.sec1Body2, c.sec1Body3],
            bullets: [
              c.sec1Bullet1,
              c.sec1Bullet2,
              c.sec1Bullet3,
              c.sec1Bullet4,
              c.sec1Bullet5,
            ],
          },
          {
            eyebrow: c.sec2Eyebrow,
            heading: c.sec2Heading,
            intro: c.sec2Intro,
            subsections: [
              { heading: c.sec2Sub1Heading, body: c.sec2Sub1Body },
              { heading: c.sec2Sub2Heading, body: c.sec2Sub2Body },
              { heading: c.sec2Sub3Heading, body: c.sec2Sub3Body },
              { heading: c.sec2Sub4Heading, body: c.sec2Sub4Body },
              { heading: c.sec2Sub5Heading, body: c.sec2Sub5Body },
              { heading: c.sec2Sub6Heading, body: c.sec2Sub6Body },
              { heading: c.sec2Sub7Heading, body: c.sec2Sub7Body },
              { heading: c.sec2Sub8Heading, body: c.sec2Sub8Body },
            ],
          },
          {
            eyebrow: c.sec3Eyebrow,
            heading: c.sec3Heading,
            intro: c.sec3Intro,
            bullets: [
              c.sec3Bullet1,
              c.sec3Bullet2,
              c.sec3Bullet3,
              c.sec3Bullet4,
              c.sec3Bullet5,
              c.sec3Bullet6,
              c.sec3Bullet7,
              c.sec3Bullet8,
            ],
          },
          {
            eyebrow: c.sec4Eyebrow,
            heading: c.sec4Heading,
            body: [c.sec4Body1, c.sec4Body2, c.sec4Body3],
          },
          {
            eyebrow: c.sec5Eyebrow,
            heading: c.sec5Heading,
            intro: c.sec5Intro,
            bullets: [
              c.sec5Bullet1,
              c.sec5Bullet2,
              c.sec5Bullet3,
              c.sec5Bullet4,
              c.sec5Bullet5,
              c.sec5Bullet6,
              c.sec5Bullet7,
            ],
          },
          {
            eyebrow: c.sec6Eyebrow,
            heading: c.sec6Heading,
            intro: c.sec6Intro,
            body: [c.sec6Body1, c.sec6Body2],
            bullets: [
              c.sec6Bullet1,
              c.sec6Bullet2,
              c.sec6Bullet3,
              c.sec6Bullet4,
              c.sec6Bullet5,
            ],
          },
        ]}
        faqs={[
          { question: c.faq1Q, answer: c.faq1A },
          { question: c.faq2Q, answer: c.faq2A },
          { question: c.faq3Q, answer: c.faq3A },
          { question: c.faq4Q, answer: c.faq4A },
          { question: c.faq5Q, answer: c.faq5A },
          { question: c.faq6Q, answer: c.faq6A },
          { question: c.faq7Q, answer: c.faq7A },
          { question: c.faq8Q, answer: c.faq8A },
          { question: c.faq9Q, answer: c.faq9A },
          { question: c.faq10Q, answer: c.faq10A },
        ]}
        related={[
          {
            href: "/software-gebaeudereinigung",
            label: c.rel1Label,
            description: c.rel1Desc,
          },
          {
            href: "/software-kleine-reinigungsfirma",
            label: c.rel2Label,
            description: c.rel2Desc,
          },
          {
            href: "/zeiterfassung-gebaeudereinigung",
            label: c.rel3Label,
            description: c.rel3Desc,
          },
          {
            href: "/nfc-zeiterfassung",
            label: c.rel4Label,
            description: c.rel4Desc,
          },
          {
            href: "/einsatzplanung-reinigung",
            label: c.rel5Label,
            description: c.rel5Desc,
          },
          {
            href: "/leistungsnachweis-gebaeudereinigung",
            label: c.rel6Label,
            description: c.rel6Desc,
          },
        ]}
      />
    </>
  );
}
