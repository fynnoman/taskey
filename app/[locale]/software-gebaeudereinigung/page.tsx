import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import TestimonialReviews from "@/components/schema/TestimonialReviews";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/software-gebaeudereinigung";

const META_COPY: PageCopy = {
  de: {
    title: "Software für Gebäudereinigung 2026 – All-in-One Branchensoftware",
    description:
      "Software für Gebäudereinigung 2026: NFC-Objektnachweis, Zeiterfassung, Einsatzplanung, Rechnungen, Live-Margen, DATEV – in einer App. DSGVO, Made in Germany, 30 Tage kostenlos.",
  },
  en: {
    title: "Building Cleaning Software 2026 – All-in-one Industry Software",
    description:
      "Building cleaning software 2026: NFC site proof, time tracking, scheduling, invoicing, live margins, DATEV — in one app. GDPR-compliant, Made in Germany, 30-day free trial.",
  },
  fr: {
    title: "Logiciel pour le nettoyage de bâtiments 2026 – Solution métier tout-en-un",
    description:
      "Logiciel pour le nettoyage de bâtiments 2026 : justificatif NFC sur site, pointage, planification, factures, marges en direct, DATEV — dans une seule app. Conforme RGPD, Made in Germany, 30 jours d’essai gratuit.",
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
    schemaName: "Taskey – Software für Gebäudereinigung",
    schemaSubCategory: "Branchensoftware Gebäudereinigung",
    schemaDescription:
      "All-in-One Software für Gebäudereinigung mit Einsatzplanung, NFC-Objektnachweis, Zeiterfassung, Angeboten, Rechnungen, Live-Margen und DATEV-Export. Für Unterhaltsreinigung, Glas-, Industrie- und Klinikreinigung.",
    schemaOfferDescription: "30 Tage kostenlos testen, danach ab 119 € pro Monat",
    schemaFeatures: [
      "Einsatzplanung Gebäudereinigung",
      "NFC-Objektnachweis",
      "Mobile Zeiterfassung (Mindestlohn-konform)",
      "Angebote & Rechnungen",
      "DATEV-Export",
      "Live-Margen pro Objekt",
      "Qualitätskontrolle & Checklisten",
      "Auftraggeber-Portal (Taskey Share)",
      "DSGVO-konform, Made in Germany",
    ],
    inLanguage: "de-DE",
  },
  en: {
    schemaName: "Taskey – Software for Building Cleaning",
    schemaSubCategory: "Industry software for building cleaning",
    schemaDescription:
      "All-in-one software for building cleaning with workforce scheduling, NFC proof of service, time tracking, quotes, invoices, live margins and DATEV export. For maintenance, glass, industrial and hospital cleaning.",
    schemaOfferDescription: "Try 30 days free, then from EUR 119 per month",
    schemaFeatures: [
      "Workforce scheduling for building cleaning",
      "NFC proof of service",
      "Mobile time tracking (minimum-wage compliant)",
      "Quotes & invoices",
      "DATEV export",
      "Live margins per site",
      "Quality control & checklists",
      "Client portal (Taskey Share)",
      "DSGVO-compliant, Made in Germany",
    ],
    inLanguage: "en-US",
  },
  fr: {
    schemaName: "Taskey – Logiciel pour le nettoyage de bâtiments",
    schemaSubCategory: "Logiciel métier nettoyage de bâtiments",
    schemaDescription:
      "Logiciel tout-en-un pour le nettoyage de bâtiments : planification, justificatif NFC, pointage, devis, factures, marges en direct et export DATEV. Pour nettoyage d’entretien, vitres, industriel et hospitalier.",
    schemaOfferDescription: "30 jours d’essai gratuit, puis à partir de 119 € par mois",
    schemaFeatures: [
      "Planification nettoyage de bâtiments",
      "Justificatif NFC d’intervention",
      "Pointage mobile (conforme salaire minimum)",
      "Devis & factures",
      "Export DATEV",
      "Marges en direct par site",
      "Contrôle qualité & check-lists",
      "Portail donneur d’ordre (Taskey Share)",
      "Conforme DSGVO, Made in Germany",
    ],
    inLanguage: "fr-FR",
  },
} as const;

const CONTENT = {
  de: {
    title: "Software für Gebäudereinigung",
    eyebrow: "Pillar · Branchensoftware",
    h1: "Software für Gebäudereinigung:",
    h1Accent: "alles in einem System statt fünf Abos.",
    lead: "Taskey ist die Software, mit der Gebäudereinigungsbetriebe Einsatzplanung, NFC-Objektnachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen und DATEV in einer einzigen Branchensoftware abbilden. Made in Germany, DSGVO-konform, ab dem ersten Tag einsatzbereit – egal ob Unterhaltsreinigung, Glas-, Industrie- oder Klinikreinigung.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Software für Gebäudereinigung",
    sec1Eyebrow: "Problem",
    sec1Heading: "Warum klassische Software in der Gebäudereinigung scheitert.",
    sec1Intro:
      "Die meisten Reinigungsbetriebe arbeiten heute mit einem Flickenteppich aus Excel, WhatsApp, einem Buchhaltungs-Tool, einer separaten Zeiterfassung und einer Cloud für Dokumente. Eine echte Software für Gebäudereinigung muss diesen Flickenteppich ersetzen – nicht erweitern.",
    sec1Body1:
      "In der Gebäudereinigung gibt es keine zwei gleichen Objekte. Tarife sind unterschiedlich, Schichten verschieben sich kurzfristig, Krankmeldungen kommen am Sonntagabend, Auftraggeber verlangen tagesaktuelle Nachweise. Klassische Branchensoftware ist auf den Industriebetrieb oder den Handwerksbetrieb zugeschnitten – und passt deshalb nie zu hundert Prozent.",
    sec1Body2:
      "Spezialisierte Reinigungssoftware löst zwar einzelne Probleme – etwa die Zeiterfassung oder die Einsatzplanung – verkauft aber jedes Modul einzeln. Das Ergebnis: fünf monatliche Abos, vier Logins, drei nicht miteinander verbundene Datenbanken. Eine moderne Software für Gebäudereinigung bündelt diese Module in einem System.",
    sec1Body3:
      "Taskey wurde von Grund auf für Gebäudereinigungsfirmen gebaut. Jede Funktion – vom NFC-Tag am Objekt bis zum DATEV-Export – ist auf den Alltag einer Reinigungsfirma optimiert.",
    sec1Bullet1: "Tool-Chaos: 4–6 Abos für Aufgaben, die zusammengehören",
    sec1Bullet2: "Datenbruch zwischen Disposition, Nachweis und Rechnung",
    sec1Bullet3: "Keine Live-Sicht auf Marge pro Objekt",
    sec1Bullet4: "Nachweise an Auftraggeber kosten 4–8 Bürostunden pro Woche",
    sec1Bullet5: "Mitarbeiter im Feld arbeiten ohne digitale Plan- und Routenführung",
    sec2Eyebrow: "Lösung",
    sec2Heading: "Was eine echte Software für Gebäudereinigung können muss.",
    sec2Intro:
      "Taskey verbindet alle Module, die ein Reinigungsbetrieb täglich braucht, in einer durchgehenden Datenbasis. Einmal angelegt, fließt jedes Objekt automatisch in Planung, Nachweis, Stundenzettel, Rechnung und Auswertung.",
    sec2Sub1Heading: "Einsatzplanung für Gebäudereinigung",
    sec2Sub1Body:
      "Drag-and-drop-Planung für Touren, Kolonnen und Vertretungen. Mitarbeitende sehen ihren Tagesplan live auf dem Smartphone, Disposition sieht in Echtzeit, welche Objekte besetzt sind und welche nicht. Kurzfristige Umplanungen brauchen statt zehn Anrufen einen einzigen Tap.",
    sec2Sub2Heading: "NFC-Objektnachweis – das Killer-Feature",
    sec2Sub2Body:
      "Ein wetterfester NFC-Tag pro Objekt. Mitarbeitende halten ihr Smartphone beim Eintreffen und Verlassen kurz an den Tag – Zeit, Ort und Person werden manipulationssicher dokumentiert. Damit erfüllen Gebäudereinigungsfirmen Auftraggeberforderungen nach lückenlosem Nachweis ohne Excel-Listen oder Anrufe.",
    sec2Sub3Heading: "Mobile Zeiterfassung",
    sec2Sub3Body:
      "Aus dem NFC-Scan wird automatisch der gesetzeskonforme Stundenzettel. GPS-gestützt, mit automatischen Pausen, mehrsprachig, offline-fähig und Mindestlohn-konform nach §17 MiLoG.",
    sec2Sub4Heading: "Angebote, Rechnungen, DATEV",
    sec2Sub4Body:
      "Pro Objekt kalkulieren, wiederkehrende Rechnungen automatisch versenden, Mahnwesen ohne Word-Vorlagen, Export im DATEV-Standardformat für die Lohnbuchhaltung. Steuerberater bekommen alles auf Knopfdruck.",
    sec2Sub5Heading: "Live-Margen pro Objekt",
    sec2Sub5Body:
      "Die wichtigste Kennzahl in der Gebäudereinigung ist die Marge pro Objekt – nicht der Umsatz. Taskey berechnet sie in Echtzeit aus Angebot, geleisteten Stunden, Materialeinsatz und Sonderkosten. Inhaber wissen jeden Morgen, welche Objekte Geld verdienen und welche nicht.",
    sec2Sub6Heading: "Qualitätskontrolle & Checklisten",
    sec2Sub6Body:
      "Digitale Reinigungs-Checklisten, Foto-Doku, Mängelaufnahme und Kundenfeedback direkt aus der Mitarbeiter-App. Qualitätsprobleme werden sichtbar, bevor der Auftraggeber sie meldet.",
    sec2Sub7Heading: "Taskey Share – Auftraggeber-Portal",
    sec2Sub7Body:
      "Auftraggeber bekommen einen eigenen, schlanken Login. Sie sehen Nachweise, Rechnungen, Qualitätsdaten und können Sonderaufträge anfordern – ohne den Umweg über Mails und PDF-Anhänge. Ein klares Differenzierungsmerkmal gegen Wettbewerber.",
    sec2Sub8Heading: "DSGVO & Made in Germany",
    sec2Sub8Body:
      "Hosting in Deutschland, deutscher Support, AVV automatisch hinterlegt. Mitarbeiterdaten, Stundenzettel und Objektnachweise bleiben in der EU. Keine US-Cloud, kein Datenrisiko bei Audits.",
    sec3Eyebrow: "Reinigungsarten",
    sec3Heading: "Eine Software für jede Reinigungsart.",
    sec3Intro:
      "Taskey ist als Software für Gebäudereinigung speziell auf die unterschiedlichen Reinigungsarten und Objekttypen ausgelegt. Spezielle Checklisten, Tarifmodelle und Workflows decken jede Spezialisierung ab – vom Einzelobjekt bis zu mehreren hundert Liegenschaften.",
    sec3Bullet1: "Unterhaltsreinigung – wiederkehrende Touren, Schlüsselverwaltung, Vertretungen",
    sec3Bullet2: "Glasreinigung – Höhenarbeit, Sicherheitsnachweise, intervallbasierte Planung",
    sec3Bullet3: "Industriereinigung – Maschinenreinigung, Sonderschichten, hohe Stundenkontingente",
    sec3Bullet4: "Klinik- und Praxisreinigung – Hygiene-Protokolle, RKI-konforme Checklisten",
    sec3Bullet5: "Bauendreinigung – Projektphasen, Sonderkalkulation, Foto-Doku für Abnahme",
    sec3Bullet6: "Hotel-Housekeeping – Zimmerstatus, Roomboy/Roomgirl-Workflows",
    sec3Bullet7: "Sonderreinigung – Einsatzplanung auf Zuruf, Notdienst, Sonderkosten",
    sec3Bullet8: "Bürohausreinigung, Schulreinigung, Treppenhausreinigung, Außenanlagen",
    sec4Eyebrow: "Skalierung",
    sec4Heading: "Vom 1-Mann-Betrieb bis zur Mehrobjekt-Gebäudereinigungsfirma.",
    sec4Body1:
      "Die Software für Gebäudereinigung ist vom 1-Mann-Betrieb bis zu Enterprise-Strukturen mit mehreren hundert Objekten skalierbar. Kleine Betriebe profitieren besonders von der All-in-One-Logik: weniger Tools, weniger Abos, mehr Zeit für das Kerngeschäft. Größere Reinigungsfirmen nutzen Mehrmandantenfähigkeit, Rollen- und Rechtekonzepte und API-Schnittstellen.",
    sec4Body2:
      "Migration aus Excel oder einer Alt-Software ist Teil des Onboardings: Kunden, Objekte, Mitarbeiter und Verträge übernimmt das Taskey-Team per CSV-Import kostenfrei. Die Software ist nach Registrierung in unter zehn Minuten einsatzbereit; die komplette Ersteinrichtung übernimmt auf Wunsch das Onboarding-Team in 48 Stunden.",
    sec4Body3:
      "Inhaberinnen und Inhaber sehen den ROI in den ersten Wochen: weniger Bürostunden, keine Streitfälle mit Auftraggebern über Anwesenheit, schnellere Rechnungslegung. Die Software für Gebäudereinigung amortisiert sich in der Regel innerhalb eines Quartals.",
    sec5Eyebrow: "Vergleich",
    sec5Heading: "Ohne Taskey vs. mit Taskey – im Alltag einer Reinigungsfirma.",
    sec5Intro:
      "So verändert sich der Alltag, wenn eine Reinigungsfirma vom Excel-Flickenteppich auf eine echte Branchensoftware Gebäudereinigung umstellt.",
    sec5Bullet1: "Stundenzettel auf Papier → NFC-Nachweis automatisch digital",
    sec5Bullet2: "Disposition per WhatsApp → Einsatzplan live in der App, dokumentiert",
    sec5Bullet3: "Streit mit Auftraggebern → lückenloser Nachweis pro Objekt",
    sec5Bullet4: "Rechnungen 2 Wochen später → mit einem Klick aus den Stunden",
    sec5Bullet5: "Kein Überblick über Marge → Live-Marge pro Objekt sichtbar",
    sec5Bullet6: "Schlüssel- und Objektinfos im Kopf des Chefs → in der App des Teams",
    sec5Bullet7: "Vier Abos für vier Tools → eine Software, ein Login, ein Preis",
    sec6Eyebrow: "Garantie",
    sec6Heading: "Sie sehen alles vorher. In einem kostenlosen Call, persönlich, ohne Verkaufsdruck.",
    sec6Intro:
      "Sie müssen Taskey nicht blind einkaufen. Bevor Sie sich entscheiden, gehen wir die gesamte Software in einem unverbindlichen Termin Schritt für Schritt mit Ihnen durch – am Beispiel Ihres eigenen Betriebs, Ihrer Objekte und Ihrer Reinigungsarten.",
    sec6Body1:
      "In rund 30 Minuten zeigen wir Ihnen jedes Modul live: Wie Sie ein Objekt anlegen, einen Einsatz planen, den NFC-Nachweis verproben, Stundenzettel exportieren und die Live-Marge pro Objekt ablesen. Sie fragen, wir zeigen – nichts wird beschönigt, nichts ausgespart.",
    sec6Body2:
      "Wenn Taskey für Ihren Betrieb nicht passt, sagen wir Ihnen das offen. Wenn es passt, übernimmt unser Onboarding-Team die komplette Ersteinrichtung in 48 Stunden – inklusive Stammdaten-Migration aus Excel oder Alt-Software. Die ersten 30 Tage sind kostenlos. Ohne Kreditkarte. Ohne automatische Verlängerung.",
    sec6Bullet1: "30 Minuten Live-Demo, individuell auf Ihren Reinigungsbetrieb zugeschnitten",
    sec6Bullet2: "Wir gehen alle Module einmal vollständig mit Ihnen durch – nicht nur die schönen",
    sec6Bullet3: "Ehrliche Einschätzung, ob Taskey für Ihre Objekte und Reinigungsarten passt",
    sec6Bullet4: "Kostenlos, unverbindlich, keine versteckten Verkaufs-Tricks",
    sec6Bullet5: "Bei Passung: 48-Stunden-Onboarding inkl. Datenmigration + 30 Tage kostenlos testen",
    faq1Q: "Was ist die beste Software für Gebäudereinigung?",
    faq1A:
      "Die beste Software für Gebäudereinigung deckt alle Kernprozesse einer Reinigungsfirma in einem System ab: Einsatzplanung, mobile Zeiterfassung, NFC-Objektnachweis, Angebote, Rechnungen, DATEV-Export und Live-Margen pro Objekt. Taskey ist die einzige Branchensoftware für Gebäudereinigung, die diese Module gebündelt anbietet – statt sie als einzelne Abos zu verkaufen. DSGVO-konform, gehostet in Deutschland, ab dem ersten Tag einsatzbereit.",
    faq2Q: "Welche Software nutzen Gebäudereinigungsfirmen?",
    faq2A:
      "Gebäudereinigungsfirmen nutzen heute meist eine Kombination aus Zeiterfassung, Einsatzplanung, Buchhaltungs-Tool und Office-Anwendungen. Genau dieses Tool-Chaos löst Taskey auf: eine Software für Gebäudereinigung, in der Disposition, Nachweis, Abrechnung und Reporting durchgehend miteinander verbunden sind. So spart eine durchschnittliche Reinigungsfirma 4–8 Bürostunden pro Woche.",
    faq3Q: "Was kostet eine Software für Gebäudereinigung?",
    faq3A:
      "Taskey startet als Software für Gebäudereinigung mit dem Beginner-Tarif ab 119 € pro Monat (zzgl. 4,40 € pro aktivem Objekt). Es gibt feste Monatspreise statt versteckter Modulkosten. Die ersten 30 Tage sind kostenlos – ohne Kreditkarte, ohne automatische Verlängerung. Volle Preise auf der Pricing-Seite.",
    faq4Q: "Welche Reinigungsarten deckt die Software ab?",
    faq4A:
      "Taskey ist als Software für Gebäudereinigung speziell auf Unterhaltsreinigung, Glasreinigung, Grundreinigung, Industriereinigung, Klinik- und Praxisreinigung, Bauendreinigung, Hotel-Housekeeping sowie Sonderreinigung ausgelegt. Spezielle Checklisten, Objekttypen und Tarifmodelle decken jede Reinigungsart ab.",
    faq5Q: "Ist die Software DSGVO-konform und Made in Germany?",
    faq5A:
      "Ja. Taskey wird in Deutschland entwickelt und gehostet, ist vollständig DSGVO-konform, ein Auftragsverarbeitungsvertrag (AVV) wird automatisch bereitgestellt. Mitarbeiterdaten, Stundenzettel und Objektnachweise bleiben in der EU. Es gibt keinen Datenabfluss in die USA.",
    faq6Q: "Funktioniert die Software auch für kleine Reinigungsfirmen?",
    faq6A:
      "Ja. Die Software für Gebäudereinigung ist vom 1-Mann-Betrieb bis zu Enterprise-Strukturen mit mehreren hundert Objekten skalierbar. Kleine Betriebe profitieren besonders von der All-in-One-Logik: weniger Tools, weniger Abos, mehr Zeit für das Kerngeschäft.",
    faq7Q: "Wie funktioniert der NFC-Objektnachweis?",
    faq7A:
      "An jedem Objekt wird ein NFC-Tag angebracht. Mitarbeitende halten ihr Smartphone beim Eintreffen und Verlassen kurz an den Tag – Zeit, Ort und Person werden manipulationssicher dokumentiert. Damit erfüllt jede Gebäudereinigungsfirma Auftraggeberforderungen nach lückenlosem Nachweis ohne Excel-Listen.",
    faq8Q: "Kann man Daten aus der bisherigen Software übernehmen?",
    faq8A:
      "Ja. Kunden, Objekte, Mitarbeitende und Verträge lassen sich über CSV-Import übernehmen. Das Taskey-Team begleitet die Migration kostenfrei, damit der Wechsel von Excel oder einer Alt-Software ohne Datenverlust läuft.",
    faq9Q: "Gibt es eine App für Mitarbeiter im Außendienst?",
    faq9A:
      "Ja. Die Taskey-Mitarbeiter-App für iOS und Android zeigt Einsatzpläne, Routen, Checklisten und ermöglicht NFC-Nachweis, Foto-Dokumentation und Krankmeldung direkt vom Smartphone. Auch ohne Internetverbindung nutzbar – Daten synchronisieren später automatisch.",
    faq10Q: "Wie schnell ist die Software einsatzbereit?",
    faq10A:
      "Die Software für Gebäudereinigung ist nach Registrierung in unter zehn Minuten einsatzbereit. Erste Objekte, Mitarbeitende und Aufträge lassen sich in einer Stunde anlegen. Optional übernimmt das Taskey-Onboarding-Team die komplette Ersteinrichtung in 48 Stunden – inklusive Stammdatenmigration aus Excel oder Alt-Software.",
    rel1Label: "Zeiterfassung Gebäudereinigung",
    rel1Desc: "Mindestlohn-konforme Arbeitszeiterfassung per NFC, GPS und Offline-Sync.",
    rel2Label: "NFC-Zeiterfassung im Detail",
    rel2Desc: "Wie der NFC-Tag funktioniert, was er kostet und wie er am Objekt angebracht wird.",
    rel3Label: "Einsatzplanung Reinigung",
    rel3Desc: "Touren, Kolonnen und Vertretungen – planbar per Drag-and-drop.",
    rel4Label: "Leistungsnachweis Gebäudereinigung",
    rel4Desc: "Aus dem NFC-Scan wird automatisch der Nachweis für den Auftraggeber.",
    rel5Label: "Software für kleine Reinigungsfirmen",
    rel5Desc: "Speziell für Betriebe mit 1–15 Mitarbeitenden und überschaubarem Objekt-Portfolio.",
    rel6Label: "Anbietervergleich 2026",
    rel6Desc: "8 Software für Gebäudereinigung im Direktvergleich – Funktionen, Preise, Stärken, Schwächen.",
    rel7Label: "Taskey vs. zvoove",
    rel7Desc: "Wie Taskey gegen den Marktführer für Gebäudereinigungssoftware abschneidet.",
  },
  en: {
    title: "Software for Building Cleaning",
    eyebrow: "Pillar · Industry software",
    h1: "Software for building cleaning:",
    h1Accent: "everything in one system instead of five subscriptions.",
    lead: "Taskey is the software that lets building cleaning companies cover scheduling, NFC proof of service, time tracking, quotes, invoices, live margins and DATEV in a single piece of industry software. Made in Germany, DSGVO-compliant, ready from day one – whether maintenance, glass, industrial or hospital cleaning.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Software for Building Cleaning",
    sec1Eyebrow: "Problem",
    sec1Heading: "Why classic software fails in building cleaning.",
    sec1Intro:
      "Most cleaning operations work today with a patchwork of Excel, WhatsApp, an accounting tool, a separate time tracker and a cloud for documents. Real software for building cleaning has to replace that patchwork – not extend it.",
    sec1Body1:
      "In building cleaning, no two sites are alike. Pay rates differ, shifts shift at short notice, sick calls arrive on a Sunday evening, clients demand same-day proof. Classic industry software is designed for industrial operations or trade workshops – and therefore never fits one hundred percent.",
    sec1Body2:
      "Specialised cleaning software does solve isolated problems – time tracking or scheduling, for example – but sells every module separately. The result: five monthly subscriptions, four logins, three databases that don’t talk to each other. Modern software for building cleaning bundles these modules into one system.",
    sec1Body3:
      "Taskey is built from the ground up for building cleaning companies. Every feature – from the NFC tag on the site to the DATEV export – is optimised for the everyday life of a cleaning operation.",
    sec1Bullet1: "Tool chaos: 4–6 subscriptions for tasks that belong together",
    sec1Bullet2: "Data gaps between dispatch, proof of service and invoicing",
    sec1Bullet3: "No live view of margin per site",
    sec1Bullet4: "Proof of service to clients costs 4–8 office hours per week",
    sec1Bullet5: "Field staff working without digital plan or route guidance",
    sec2Eyebrow: "Solution",
    sec2Heading: "What real software for building cleaning has to do.",
    sec2Intro:
      "Taskey connects every module a cleaning operation needs daily on a single, continuous data foundation. Once created, every site flows automatically into scheduling, proof, timesheets, invoices and reporting.",
    sec2Sub1Heading: "Scheduling for building cleaning",
    sec2Sub1Body:
      "Drag-and-drop scheduling for routes, crews and replacements. Staff see their daily plan live on the smartphone, dispatch sees in real time which sites are covered and which are not. Last-minute changes need a single tap instead of ten phone calls.",
    sec2Sub2Heading: "NFC proof of service – the killer feature",
    sec2Sub2Body:
      "A weatherproof NFC tag per site. Staff hold their smartphone to the tag on arrival and departure – time, place and person are documented in a tamper-proof way. That lets building cleaning companies satisfy client demands for complete proof without Excel lists or phone calls.",
    sec2Sub3Heading: "Mobile time tracking",
    sec2Sub3Body:
      "The NFC scan automatically becomes a legally compliant timesheet. GPS-supported, with automatic breaks, multilingual, offline-capable and minimum-wage compliant under §17 MiLoG.",
    sec2Sub4Heading: "Quotes, invoices, DATEV",
    sec2Sub4Body:
      "Cost out per site, send recurring invoices automatically, dunning without Word templates, export in DATEV standard format for payroll. Tax advisors get everything at the press of a button.",
    sec2Sub5Heading: "Live margins per site",
    sec2Sub5Body:
      "The most important number in building cleaning is the margin per site – not revenue. Taskey calculates it in real time from the quote, hours worked, material use and special costs. Every morning, owners know which sites earn money and which don’t.",
    sec2Sub6Heading: "Quality control & checklists",
    sec2Sub6Body:
      "Digital cleaning checklists, photo documentation, defect recording and customer feedback straight from the employee app. Quality issues become visible before the client reports them.",
    sec2Sub7Heading: "Taskey Share – client portal",
    sec2Sub7Body:
      "Clients get their own lean login. They see proof of service, invoices, quality data and can request special jobs – without the detour via emails and PDF attachments. A clear differentiator against competitors.",
    sec2Sub8Heading: "DSGVO & Made in Germany",
    sec2Sub8Body:
      "Hosting in Germany, German support, DPA already in place. Employee data, timesheets and proofs stay in the EU. No US cloud, no data risk in audits.",
    sec3Eyebrow: "Cleaning types",
    sec3Heading: "One software for every type of cleaning.",
    sec3Intro:
      "Taskey is designed as software for building cleaning specifically around the different cleaning types and site types. Dedicated checklists, pricing models and workflows cover every specialisation – from a single site to several hundred properties.",
    sec3Bullet1: "Maintenance cleaning – recurring routes, key management, replacements",
    sec3Bullet2: "Glass cleaning – work at height, safety proofs, interval-based scheduling",
    sec3Bullet3: "Industrial cleaning – machine cleaning, special shifts, high hour budgets",
    sec3Bullet4: "Hospital and practice cleaning – hygiene protocols, RKI-compliant checklists",
    sec3Bullet5: "Post-construction cleaning – project phases, special calculation, photo doc for hand-over",
    sec3Bullet6: "Hotel housekeeping – room status, roomboy/roomgirl workflows",
    sec3Bullet7: "Special cleaning – ad-hoc scheduling, emergency service, special costs",
    sec3Bullet8: "Office building cleaning, school cleaning, staircase cleaning, outdoor areas",
    sec4Eyebrow: "Scaling",
    sec4Heading: "From a one-person operation to a multi-site cleaning company.",
    sec4Body1:
      "The software for building cleaning scales from a one-person operation up to enterprise structures with several hundred sites. Small operations benefit especially from the all-in-one logic: fewer tools, fewer subscriptions, more time for the core business. Larger cleaning companies use multi-tenant capabilities, role and permission concepts and API integrations.",
    sec4Body2:
      "Migration from Excel or legacy software is part of onboarding: customers, sites, staff and contracts are imported by the Taskey team via CSV at no charge. The software is ready to use in less than ten minutes after registration; on request, the onboarding team handles the full initial setup within 48 hours.",
    sec4Body3:
      "Owners see ROI within the first weeks: fewer office hours, no disputes with clients about attendance, faster invoicing. The software for building cleaning typically pays for itself within one quarter.",
    sec5Eyebrow: "Comparison",
    sec5Heading: "Without Taskey vs. with Taskey – in the daily life of a cleaning company.",
    sec5Intro:
      "This is how daily life changes when a cleaning company moves from the Excel patchwork to real industry software for building cleaning.",
    sec5Bullet1: "Paper timesheets → NFC proof automatically digital",
    sec5Bullet2: "Dispatch by WhatsApp → schedule live in the app, documented",
    sec5Bullet3: "Disputes with clients → complete proof per site",
    sec5Bullet4: "Invoices two weeks late → with one click from the hours",
    sec5Bullet5: "No overview of margin → live margin per site visible",
    sec5Bullet6: "Key and site information in the boss’s head → in the team’s app",
    sec5Bullet7: "Four subscriptions for four tools → one software, one login, one price",
    sec6Eyebrow: "Guarantee",
    sec6Heading: "You see everything beforehand. In a free call, in person, without sales pressure.",
    sec6Intro:
      "You don’t have to buy Taskey blindly. Before you decide, we go through the entire software with you step by step in a no-obligation appointment – using your own operation, your sites and your cleaning types as examples.",
    sec6Body1:
      "In around 30 minutes we show you every module live: how to set up a site, plan an assignment, test the NFC proof, export timesheets and read the live margin per site. You ask, we show – nothing is sugar-coated, nothing left out.",
    sec6Body2:
      "If Taskey is not right for your operation, we say so openly. If it fits, our onboarding team handles the complete initial setup within 48 hours – including master data migration from Excel or legacy software. The first 30 days are free. No credit card. No automatic renewal.",
    sec6Bullet1: "30 minutes of live demo, tailored to your cleaning operation",
    sec6Bullet2: "We walk through every module with you once in full – not just the nice ones",
    sec6Bullet3: "Honest assessment of whether Taskey fits your sites and cleaning types",
    sec6Bullet4: "Free, no commitment, no hidden sales tricks",
    sec6Bullet5: "If it fits: 48-hour onboarding incl. data migration + 30 days free trial",
    faq1Q: "What is the best software for building cleaning?",
    faq1A:
      "The best software for building cleaning covers all the core processes of a cleaning company in one system: scheduling, mobile time tracking, NFC proof of service, quotes, invoices, DATEV export and live margins per site. Taskey is the only industry software for building cleaning that offers these modules bundled – instead of selling them as separate subscriptions. DSGVO-compliant, hosted in Germany, ready from day one.",
    faq2Q: "What software do building cleaning companies use?",
    faq2A:
      "Today, building cleaning companies typically use a combination of time tracking, scheduling, an accounting tool and office applications. Taskey resolves exactly this tool chaos: one piece of software for building cleaning where dispatch, proof, invoicing and reporting are continuously connected. An average cleaning company saves 4–8 office hours per week this way.",
    faq3Q: "What does software for building cleaning cost?",
    faq3A:
      "Taskey, as software for building cleaning, starts with the Beginner plan from EUR 119 per month (plus EUR 4.40 per active site). It has fixed monthly prices instead of hidden module costs. The first 30 days are free – no credit card, no automatic renewal. Full prices on the pricing page.",
    faq4Q: "Which types of cleaning does the software cover?",
    faq4A:
      "Taskey is designed as software for building cleaning specifically for maintenance cleaning, glass cleaning, deep cleaning, industrial cleaning, hospital and practice cleaning, post-construction cleaning, hotel housekeeping and special cleaning. Dedicated checklists, site types and pricing models cover every cleaning type.",
    faq5Q: "Is the software DSGVO-compliant and Made in Germany?",
    faq5A:
      "Yes. Taskey is developed and hosted in Germany, fully DSGVO-compliant, and a data processing agreement (DPA) is provided automatically. Employee data, timesheets and proofs of service stay in the EU. There is no data flow to the USA.",
    faq6Q: "Does the software also work for small cleaning companies?",
    faq6A:
      "Yes. The software for building cleaning scales from a one-person operation up to enterprise structures with several hundred sites. Small operations benefit especially from the all-in-one logic: fewer tools, fewer subscriptions, more time for the core business.",
    faq7Q: "How does the NFC proof of service work?",
    faq7A:
      "An NFC tag is attached to every site. Staff hold their smartphone to the tag on arrival and departure – time, place and person are documented in a tamper-proof way. That lets every building cleaning company satisfy client demands for complete proof without Excel lists.",
    faq8Q: "Can data be imported from previous software?",
    faq8A:
      "Yes. Customers, sites, staff and contracts can be imported via CSV. The Taskey team accompanies the migration at no charge so the switch from Excel or legacy software runs without data loss.",
    faq9Q: "Is there an app for field staff?",
    faq9A:
      "Yes. The Taskey staff app for iOS and Android shows schedules, routes and checklists, and enables NFC proof, photo documentation and sick calls directly from the smartphone. Usable even without internet – data syncs automatically later.",
    faq10Q: "How quickly is the software ready to use?",
    faq10A:
      "The software for building cleaning is ready to use in less than ten minutes after registration. Initial sites, staff and jobs can be created within an hour. On request, the Taskey onboarding team handles the complete initial setup within 48 hours – including master data migration from Excel or legacy software.",
    rel1Label: "Time Tracking for Building Cleaning",
    rel1Desc: "Minimum-wage compliant working time tracking via NFC, GPS and offline sync.",
    rel2Label: "NFC time tracking in detail",
    rel2Desc: "How the NFC tag works, what it costs and how it is attached to the site.",
    rel3Label: "Scheduling for Cleaning",
    rel3Desc: "Routes, crews and replacements – planable via drag-and-drop.",
    rel4Label: "Proof of Service – Building Cleaning",
    rel4Desc: "The NFC scan automatically becomes the proof for the client.",
    rel5Label: "Software for Small Cleaning Companies",
    rel5Desc: "Designed for operations with 1–15 staff and a manageable site portfolio.",
    rel6Label: "Vendor Comparison 2026",
    rel6Desc: "8 software for building cleaning compared directly – features, prices, strengths, weaknesses.",
    rel7Label: "Taskey vs. zvoove",
    rel7Desc: "How Taskey stacks up against the market leader for building cleaning software.",
  },
  fr: {
    title: "Logiciel pour le nettoyage de bâtiments",
    eyebrow: "Pillar · Logiciel métier",
    h1: "Logiciel pour le nettoyage de bâtiments :",
    h1Accent: "tout dans un seul système plutôt que cinq abonnements.",
    lead: "Taskey est le logiciel avec lequel les entreprises de nettoyage de bâtiments gèrent planification, justificatif NFC, pointage, devis, factures, marges en direct et DATEV dans un unique logiciel métier. Made in Germany, conforme DSGVO, prêt dès le premier jour – que ce soit nettoyage d’entretien, vitres, industriel ou hospitalier.",
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Logiciel pour le nettoyage de bâtiments",
    sec1Eyebrow: "Problème",
    sec1Heading: "Pourquoi les logiciels classiques échouent dans le nettoyage.",
    sec1Intro:
      "La plupart des entreprises de nettoyage travaillent aujourd’hui avec un patchwork d’Excel, WhatsApp, un outil de compta, un pointage séparé et un cloud pour les documents. Un vrai logiciel pour le nettoyage de bâtiments doit remplacer ce patchwork – pas l’élargir.",
    sec1Body1:
      "Dans le nettoyage de bâtiments, deux sites ne se ressemblent jamais. Les tarifs diffèrent, les plannings bougent à la dernière minute, les arrêts maladie tombent un dimanche soir, les donneurs d’ordre exigent des justificatifs le jour même. Les logiciels métiers classiques sont conçus pour l’industrie ou l’artisanat – et ne collent donc jamais à 100 %.",
    sec1Body2:
      "Les logiciels de nettoyage spécialisés résolvent des problèmes isolés – par exemple le pointage ou la planification – mais vendent chaque module à part. Résultat : cinq abonnements mensuels, quatre identifiants, trois bases de données qui ne communiquent pas. Un logiciel moderne pour le nettoyage de bâtiments rassemble ces modules dans un seul système.",
    sec1Body3:
      "Taskey est construit de fond en comble pour les entreprises de nettoyage. Chaque fonction – du tag NFC sur le site à l’export DATEV – est optimisée pour le quotidien d’une entreprise de nettoyage.",
    sec1Bullet1: "Chaos d’outils : 4 à 6 abonnements pour des tâches qui vont ensemble",
    sec1Bullet2: "Rupture de données entre dispatch, justificatif et facture",
    sec1Bullet3: "Pas de vision en direct de la marge par site",
    sec1Bullet4: "Les justificatifs aux donneurs d’ordre coûtent 4 à 8 heures de bureau par semaine",
    sec1Bullet5: "Les agents sur le terrain travaillent sans plan ni itinéraire numérique",
    sec2Eyebrow: "Solution",
    sec2Heading: "Ce que doit faire un vrai logiciel pour le nettoyage de bâtiments.",
    sec2Intro:
      "Taskey relie tous les modules dont une entreprise de nettoyage a besoin chaque jour sur une base de données continue. Une fois créé, chaque site alimente automatiquement la planification, le justificatif, la feuille d’heures, la facture et le reporting.",
    sec2Sub1Heading: "Planification pour le nettoyage de bâtiments",
    sec2Sub1Body:
      "Planification glisser-déposer pour tournées, équipes et remplacements. Les agents voient leur planning du jour en direct sur le smartphone, le dispatch voit en temps réel quels sites sont couverts et lesquels non. Les ajustements de dernière minute prennent un tap au lieu de dix appels.",
    sec2Sub2Heading: "Justificatif NFC – la fonction clé",
    sec2Sub2Body:
      "Un tag NFC résistant aux intempéries par site. Les agents approchent leur smartphone à l’arrivée et au départ – l’heure, le lieu et la personne sont documentés de façon infalsifiable. Les entreprises de nettoyage répondent ainsi aux exigences des donneurs d’ordre en matière de justificatif complet, sans listes Excel ni appels.",
    sec2Sub3Heading: "Pointage mobile",
    sec2Sub3Body:
      "Le scan NFC devient automatiquement une feuille d’heures conforme. Avec GPS, pauses automatiques, multilingue, hors-ligne et conforme au salaire minimum (§17 MiLoG).",
    sec2Sub4Heading: "Devis, factures, DATEV",
    sec2Sub4Body:
      "Calculer par site, envoyer automatiquement les factures récurrentes, gérer les relances sans modèles Word, exporter au format standard DATEV pour la paie. Les experts-comptables reçoivent tout d’un clic.",
    sec2Sub5Heading: "Marges en direct par site",
    sec2Sub5Body:
      "L’indicateur clé du nettoyage de bâtiments est la marge par site – pas le chiffre d’affaires. Taskey la calcule en temps réel à partir du devis, des heures effectuées, du matériel et des frais spéciaux. Chaque matin, les dirigeants savent quels sites gagnent de l’argent et lesquels non.",
    sec2Sub6Heading: "Contrôle qualité & check-lists",
    sec2Sub6Body:
      "Check-lists de nettoyage numériques, photos, relevés de défauts et retours clients directement depuis l’app agent. Les problèmes de qualité deviennent visibles avant que le donneur d’ordre les signale.",
    sec2Sub7Heading: "Taskey Share – portail donneur d’ordre",
    sec2Sub7Body:
      "Les donneurs d’ordre disposent d’un identifiant épuré dédié. Ils voient justificatifs, factures, données qualité et peuvent demander des prestations exceptionnelles – sans passer par mails et pièces jointes PDF. Un avantage clair contre la concurrence.",
    sec2Sub8Heading: "DSGVO & Made in Germany",
    sec2Sub8Body:
      "Hébergement en Allemagne, support en allemand, DPA déjà en place. Données salariés, feuilles d’heures et justificatifs restent dans l’UE. Pas de cloud US, pas de risque en audit.",
    sec3Eyebrow: "Types de nettoyage",
    sec3Heading: "Un logiciel pour chaque type de nettoyage.",
    sec3Intro:
      "Taskey est conçu comme un logiciel pour le nettoyage de bâtiments spécifiquement pensé pour les différents types de nettoyage et de sites. Des check-lists, modèles de tarif et workflows dédiés couvrent chaque spécialité – du site unique à plusieurs centaines d’établissements.",
    sec3Bullet1: "Nettoyage d’entretien – tournées récurrentes, gestion des clés, remplacements",
    sec3Bullet2: "Nettoyage de vitres – travail en hauteur, justificatifs de sécurité, planification par intervalles",
    sec3Bullet3: "Nettoyage industriel – nettoyage machines, équipes spéciales, gros volumes d’heures",
    sec3Bullet4: "Nettoyage hospitalier et cabinet – protocoles d’hygiène, check-lists conformes RKI",
    sec3Bullet5: "Nettoyage fin de chantier – phases de projet, calcul spécial, photos pour réception",
    sec3Bullet6: "Housekeeping hôtelier – statut chambres, workflows roomboy/roomgirl",
    sec3Bullet7: "Nettoyage spécial – planification à la demande, service d’urgence, frais spéciaux",
    sec3Bullet8: "Bureaux, écoles, cages d’escalier, espaces extérieurs",
    sec4Eyebrow: "Mise à l’échelle",
    sec4Heading: "Du travailleur indépendant à l’entreprise multi-sites.",
    sec4Body1:
      "Le logiciel pour le nettoyage de bâtiments s’adapte du travailleur indépendant aux structures d’entreprise avec plusieurs centaines de sites. Les petites structures profitent particulièrement de la logique tout-en-un : moins d’outils, moins d’abonnements, plus de temps pour le cœur de métier. Les grandes entreprises utilisent multi-tenant, rôles et permissions et intégrations API.",
    sec4Body2:
      "La migration depuis Excel ou un logiciel ancien fait partie de l’onboarding : clients, sites, agents et contrats sont importés gratuitement par l’équipe Taskey en CSV. Le logiciel est prêt en moins de dix minutes après l’inscription ; sur demande, l’équipe d’onboarding prend en charge toute la configuration initiale en 48 heures.",
    sec4Body3:
      "Les dirigeants voient le retour sur investissement dès les premières semaines : moins d’heures de bureau, plus de litiges avec les donneurs d’ordre sur la présence, facturation plus rapide. Le logiciel pour le nettoyage de bâtiments s’amortit en règle générale en un trimestre.",
    sec5Eyebrow: "Comparatif",
    sec5Heading: "Sans Taskey vs. avec Taskey – au quotidien d’une entreprise de nettoyage.",
    sec5Intro:
      "Voilà comment le quotidien change quand une entreprise de nettoyage passe du patchwork Excel à un vrai logiciel métier de nettoyage de bâtiments.",
    sec5Bullet1: "Feuilles d’heures papier → justificatif NFC automatiquement numérique",
    sec5Bullet2: "Dispatch via WhatsApp → planning en direct dans l’app, documenté",
    sec5Bullet3: "Litiges avec donneurs d’ordre → justificatif complet par site",
    sec5Bullet4: "Factures 2 semaines plus tard → en un clic depuis les heures",
    sec5Bullet5: "Aucune vue sur la marge → marge en direct par site visible",
    sec5Bullet6: "Infos clés et sites dans la tête du chef → dans l’app de l’équipe",
    sec5Bullet7: "Quatre abonnements pour quatre outils → un logiciel, un identifiant, un prix",
    sec6Eyebrow: "Garantie",
    sec6Heading: "Vous voyez tout au préalable. Dans un appel gratuit, en personne, sans pression commerciale.",
    sec6Intro:
      "Vous n’avez pas à acheter Taskey à l’aveugle. Avant de décider, nous parcourons tout le logiciel avec vous, étape par étape, lors d’un rendez-vous sans engagement – sur l’exemple de votre propre entreprise, de vos sites et de vos types de nettoyage.",
    sec6Body1:
      "En une trentaine de minutes, nous vous montrons chaque module en direct : comment créer un site, planifier une intervention, tester le justificatif NFC, exporter des feuilles d’heures et lire la marge en direct par site. Vous demandez, nous montrons – rien n’est enjolivé, rien n’est éludé.",
    sec6Body2:
      "Si Taskey ne convient pas à votre activité, nous vous le disons franchement. Si ça colle, notre équipe d’onboarding prend en charge toute la configuration initiale en 48 heures – migration des données depuis Excel ou un ancien logiciel comprise. Les 30 premiers jours sont gratuits. Sans carte bancaire. Sans reconduction automatique.",
    sec6Bullet1: "30 minutes de démo en direct, taillée sur mesure pour votre entreprise de nettoyage",
    sec6Bullet2: "Nous parcourons chaque module une fois en entier avec vous – pas seulement les plus séduisants",
    sec6Bullet3: "Évaluation honnête de l’adéquation à vos sites et types de nettoyage",
    sec6Bullet4: "Gratuit, sans engagement, sans astuce commerciale cachée",
    sec6Bullet5: "En cas d’adéquation : onboarding en 48 h avec migration + 30 jours d’essai gratuit",
    faq1Q: "Quel est le meilleur logiciel pour le nettoyage de bâtiments ?",
    faq1A:
      "Le meilleur logiciel pour le nettoyage de bâtiments couvre tous les processus clés d’une entreprise de nettoyage dans un seul système : planification, pointage mobile, justificatif NFC, devis, factures, export DATEV et marges en direct par site. Taskey est le seul logiciel métier de nettoyage à proposer ces modules en bundle – plutôt qu’en abonnements séparés. Conforme DSGVO, hébergé en Allemagne, prêt dès le premier jour.",
    faq2Q: "Quel logiciel utilisent les entreprises de nettoyage de bâtiments ?",
    faq2A:
      "Aujourd’hui, les entreprises de nettoyage utilisent généralement une combinaison de pointage, planification, outil comptable et bureautique. C’est ce chaos d’outils que Taskey supprime : un logiciel pour le nettoyage de bâtiments où dispatch, justificatif, facturation et reporting sont reliés de bout en bout. Une entreprise de nettoyage moyenne économise ainsi 4 à 8 heures de bureau par semaine.",
    faq3Q: "Combien coûte un logiciel pour le nettoyage de bâtiments ?",
    faq3A:
      "En tant que logiciel pour le nettoyage de bâtiments, Taskey démarre à 119 € par mois avec le tarif Beginner (plus 4,40 € par site actif). Les prix mensuels sont fixes – pas de coûts de module cachés. Les 30 premiers jours sont gratuits – sans carte bancaire, sans reconduction. Tarifs complets sur la page de prix.",
    faq4Q: "Quels types de nettoyage le logiciel couvre-t-il ?",
    faq4A:
      "Taskey est conçu comme logiciel pour le nettoyage de bâtiments spécifiquement pour le nettoyage d’entretien, vitres, grand nettoyage, industriel, hospitalier et cabinet, fin de chantier, housekeeping hôtelier et nettoyage spécial. Check-lists, types de site et modèles de tarif dédiés couvrent chaque type de nettoyage.",
    faq5Q: "Le logiciel est-il conforme DSGVO et Made in Germany ?",
    faq5A:
      "Oui. Taskey est développé et hébergé en Allemagne, totalement conforme DSGVO, et un contrat de sous-traitance (DPA) est fourni automatiquement. Données salariés, feuilles d’heures et justificatifs restent dans l’UE. Aucun flux de données vers les États-Unis.",
    faq6Q: "Le logiciel fonctionne-t-il aussi pour les petites entreprises de nettoyage ?",
    faq6A:
      "Oui. Le logiciel pour le nettoyage de bâtiments s’adapte du travailleur indépendant aux structures d’entreprise avec plusieurs centaines de sites. Les petites structures profitent particulièrement de la logique tout-en-un : moins d’outils, moins d’abonnements, plus de temps pour le cœur de métier.",
    faq7Q: "Comment fonctionne le justificatif NFC ?",
    faq7A:
      "Un tag NFC est apposé à chaque site. Les agents approchent leur smartphone à l’arrivée et au départ – l’heure, le lieu et la personne sont documentés de façon infalsifiable. Chaque entreprise de nettoyage satisfait ainsi aux exigences des donneurs d’ordre en matière de justificatif complet, sans listes Excel.",
    faq8Q: "Peut-on reprendre les données d’un ancien logiciel ?",
    faq8A:
      "Oui. Clients, sites, agents et contrats peuvent être importés en CSV. L’équipe Taskey accompagne la migration gratuitement pour que le passage d’Excel ou d’un ancien logiciel se fasse sans perte de données.",
    faq9Q: "Existe-t-il une app pour les agents de terrain ?",
    faq9A:
      "Oui. L’app Taskey pour agents (iOS et Android) montre plannings, itinéraires, check-lists et permet justificatif NFC, photo et arrêt maladie directement depuis le smartphone. Utilisable même sans connexion – les données se synchronisent automatiquement plus tard.",
    faq10Q: "À quelle vitesse le logiciel est-il opérationnel ?",
    faq10A:
      "Le logiciel pour le nettoyage de bâtiments est opérationnel en moins de dix minutes après l’inscription. Les premiers sites, agents et contrats se créent en une heure. Sur demande, l’équipe d’onboarding Taskey prend en charge toute la configuration initiale en 48 heures – migration des données depuis Excel ou ancien logiciel comprise.",
    rel1Label: "Pointage Nettoyage de bâtiments",
    rel1Desc: "Saisie du temps de travail conforme au salaire minimum via NFC, GPS et synchro hors ligne.",
    rel2Label: "Pointage NFC en détail",
    rel2Desc: "Comment le tag NFC fonctionne, combien il coûte et comment il est apposé sur le site.",
    rel3Label: "Planification Nettoyage",
    rel3Desc: "Tournées, équipes et remplacements – planifiables en glisser-déposer.",
    rel4Label: "Justificatif d’intervention – Nettoyage",
    rel4Desc: "Le scan NFC devient automatiquement le justificatif pour le donneur d’ordre.",
    rel5Label: "Logiciel pour petites entreprises de nettoyage",
    rel5Desc: "Pensé pour les structures de 1 à 15 agents et un portefeuille de sites maîtrisé.",
    rel6Label: "Comparatif fournisseurs 2026",
    rel6Desc: "8 logiciels pour le nettoyage de bâtiments comparés – fonctions, prix, forces, faiblesses.",
    rel7Label: "Taskey vs. zvoove",
    rel7Desc: "Comment Taskey se positionne face au leader du marché des logiciels de nettoyage.",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "250",
      bestRating: "5",
      worstRating: "1",
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
          href: "/zeiterfassung-gebaeudereinigung",
          label: c.rel1Label,
          description: c.rel1Desc,
        },
        {
          href: "/nfc-zeiterfassung",
          label: c.rel2Label,
          description: c.rel2Desc,
        },
        {
          href: "/einsatzplanung-reinigung",
          label: c.rel3Label,
          description: c.rel3Desc,
        },
        {
          href: "/leistungsnachweis-gebaeudereinigung",
          label: c.rel4Label,
          description: c.rel4Desc,
        },
        {
          href: "/software-kleine-reinigungsfirma",
          label: c.rel5Label,
          description: c.rel5Desc,
        },
        {
          href: "/vergleich/software-gebaeudereinigung",
          label: c.rel6Label,
          description: c.rel6Desc,
        },
        {
          href: "/vergleich/zvoove-alternative",
          label: c.rel7Label,
          description: c.rel7Desc,
        },
      ]}
    />
    </>
  );
}
