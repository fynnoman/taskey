import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import AnswerBox from "@/components/AnswerBox";
import { ServiceJsonLd } from "@/components/StructuredData";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/oepnv";

const ANSWER_COPY = {
  de: {
    q: "Software für Reinigung im ÖPNV: was leistet sie?",
    a: "Sie sichert Reinigungsleistungen in Bahnhöfen, U-Bahnen und Verkehrsanlagen manipulationssicher ab. Per NFC-Tag am Standort werden An- und Abmeldung, Fotodokumentation und Plan-vs.-Ist-Vergleich pro Station erfasst. Mängel gehen als Ticket direkt an die Zentrale, Reports laufen auf Knopfdruck. DSGVO-konform, Server in Deutschland, Enterprise mit SSO und SLA.",
  },
  en: {
    q: "Cleaning software for public transport: what does it do?",
    a: "It secures cleaning services at stations, metros and transit sites against manipulation. NFC tags on-site capture check-in and check-out, photo documentation and plan-vs.-actual per station. Defects flow to headquarters as tickets, reports run at the push of a button. GDPR-compliant, servers in Germany, Enterprise with SSO and SLA.",
  },
  fr: {
    q: "Logiciel de nettoyage pour les transports publics : à quoi sert-il ?",
    a: "Il sécurise les prestations de nettoyage dans les gares, métros et sites de transport contre toute falsification. Un tag NFC sur site capture le pointage, la documentation photo et le comparatif planifié/réel par station. Les anomalies partent en tickets au siège, les rapports en un clic. Conforme RGPD, serveurs en Allemagne, Enterprise avec SSO et SLA.",
  },
} as const;

const SERVICE_COPY = {
  de: {
    name: "Reinigungssoftware für ÖPNV und Verkehrsbetriebe",
    description:
      "Manipulationssichere Nachweisführung für Reinigungsleistungen in Bahnhöfen, U-Bahnen und Verkehrsanlagen: NFC-Stempelung pro Standort, Fotodokumentation, Plan-vs.-Ist-Vergleich, Ticket-Funktion für Mängel und Reports auf Knopfdruck. DSGVO-konform, gehostet in Deutschland.",
    audienceType: "Verkehrsbetriebe und ÖPNV-Reinigungsdienstleister",
  },
  en: {
    name: "Cleaning software for public transport operators",
    description:
      "Tamper-proof proof of service for cleaning at stations, metros and transit sites: NFC check-in per location, photo documentation, plan-vs-actual, ticket function for defects and one-click reports. GDPR-compliant, hosted in Germany.",
    audienceType: "Public Transport Operators and Transit Cleaning Contractors",
  },
  fr: {
    name: "Logiciel de nettoyage pour les exploitants de transports publics",
    description:
      "Preuves de service infalsifiables pour le nettoyage dans les gares, métros et sites de transport : pointage NFC par site, documentation photo, planifié vs. réel, fonction ticket pour anomalies et rapports en un clic. Conforme RGPD, hébergé en Allemagne.",
    audienceType: "Exploitants de transports publics et prestataires de nettoyage",
  },
} as const;

const COPY: PageCopy = {
  de: {
    title:
      "Software für Reinigung im ÖPNV | Bahnhöfe, U-Bahn, Verkehrsanlagen | Taskey",
    description:
      "Reinigungssoftware für Verkehrsbetriebe: manipulationssichere An- und Abmeldung, Fotodoku mit Audit-Trail, Plan vs. Ist je Bahnhof, Ticket-Funktion für Mängel und Reports auf Knopfdruck. DSGVO-konform, Server in Deutschland.",
    ogTitle:
      "Software für Reinigung im ÖPNV | Bahnhöfe, U-Bahn, Verkehrsanlagen | Taskey",
    ogDescription:
      "Manipulationssichere An- und Abmeldung, Fotodoku mit Audit-Trail, Plan vs. Ist je Bahnhof, Ticket-Funktion und Reports auf Knopfdruck.",
    twitterTitle: "Software für Reinigung im ÖPNV | Taskey",
    twitterDescription:
      "Manipulationssichere Nachweise, Fotodoku und Reports für Verkehrsbetriebe.",
  },
  en: {
    title:
      "Cleaning software for public transport | Stations, metro, transit sites | Taskey",
    description:
      "Cleaning software for transit operators: tamper-proof check in and out, photo documentation with audit trail, plan vs. actual per station, ticket function for defects and one-click reports. DSGVO-compliant, servers in Germany.",
    ogTitle:
      "Cleaning software for public transport | Stations, metro, transit sites | Taskey",
    ogDescription:
      "Tamper-proof check in and out, photo documentation with audit trail, plan vs. actual per station, ticket function and one-click reports.",
    twitterTitle: "Cleaning software for public transport | Taskey",
    twitterDescription:
      "Tamper-proof proof of service, photo documentation and reports for transit operators.",
  },
  fr: {
    title:
      "Logiciel de nettoyage pour les transports publics | Gares, métro, sites de transport | Taskey",
    description:
      "Logiciel de nettoyage pour les exploitants de transports publics : pointage infalsifiable, documentation photo avec piste d’audit, planifié contre réel par station, fonction ticket pour anomalies et rapports en un clic. Conforme DSGVO, serveurs en Allemagne.",
    ogTitle:
      "Logiciel de nettoyage pour les transports publics | Gares, métro, sites de transport | Taskey",
    ogDescription:
      "Pointage infalsifiable, documentation photo avec piste d’audit, planifié contre réel par station, fonction ticket et rapports en un clic.",
    twitterTitle: "Logiciel de nettoyage pour les transports publics | Taskey",
    twitterDescription:
      "Preuves infalsifiables, documentation photo et rapports pour les exploitants de transport.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Software für Reinigung im ÖPNV mit Taskey",
  en: "Cleaning software for public transport with Taskey",
  fr: "Logiciel de nettoyage pour les transports publics avec Taskey",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = pickLocale(locale);
  const meta = buildMetadata({
    copyByLocale: COPY,
    locale: l,
    path,
    type: "article",
  });
  if (meta.openGraph && Array.isArray(meta.openGraph.images)) {
    meta.openGraph.images = [
      { url: "/opengraph-image", width: 1200, height: 630, alt: OG_ALT[l] },
    ];
  }
  return meta;
}

const CONTENT = {
  de: {
    title: "Reinigung im ÖPNV und in Verkehrsanlagen",
    eyebrow: "Branche · ÖPNV & Verkehrsbetriebe",
    h1: "Software für die Reinigung im ÖPNV,",
    h1Accent: "manipulationssicher nachgewiesen.",
    lead: "Verkehrsbetriebe erwarten heute von jedem Reinigungsdienstleister eine lückenlose, digitale Nachweisführung. Taskey liefert genau diese Grundlage: manipulationssichere An und Abmeldung, Foto und Leistungsnachweis pro Bahnhof, klare Berichte für die Auftraggeber und eine App, die das Personal ohne Schulung bedient.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "ÖPNV und Verkehrsbetriebe", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Anforderungen",
        heading: "Was Verkehrsbetriebe heute vom Reinigungsdienstleister erwarten.",
        body: [
          "Öffentliche Verkehrsunternehmen bereiten die vertraglichen Anforderungen an Reinigungsleistungen neu auf. Im Zentrum steht die Frage, ob der beauftragte Dienstleister jede Leistung digital, nachvollziehbar und gegen nachträgliche Änderung geschützt dokumentieren kann.",
          "Taskey bildet genau diese Anforderungen ab. Die Software wurde für Reinigungsunternehmen entwickelt, die in komplexen Objektstrukturen arbeiten, etwa Bahnhöfe, U und S Bahn Stationen, Bushöfe, Betriebshöfe und Verwaltungsgebäude.",
        ],
        bullets: [
          "Manipulationssichere persönliche An und Abmeldung des Personals",
          "Abgleich zwischen Einsatzplan und tatsächlicher Leistungserbringung",
          "Nachvollziehbare, gegen Manipulation geschützte Fotodokumentation",
          "Vollständiger Audit Trail nachträglicher Änderungen",
          "Übersicht je Bahnhof oder Anlage inklusive Abweichungen",
          "Ticket Funktion für Mängel und Beschwerden",
        ],
      },
      {
        eyebrow: "An und Abmeldung",
        heading: "Persönlicher Nachweis vor Ort, ohne Umwege.",
        body: [
          "Jede Mitarbeiterin und jeder Mitarbeiter meldet sich am jeweiligen Einsatzort per NFC Tag oder QR Code an und wieder ab. Die App bindet den Nachweis an das persönliche Gerät, den Zeitstempel und die Position der Station. So entsteht ein Nachweis, der weder pauschal noch aus der Ferne generiert werden kann.",
          "Für Bahnhöfe und Verkehrsanlagen mit vielen Zugangspunkten lassen sich Tags pro Bereich, Ebene oder Bahnsteig anbringen. Das Ergebnis ist eine präzise Zuordnung von Person, Ort und Zeit.",
        ],
        bullets: [
          "NFC Tag oder QR Code je Station, Bereich oder Bahnsteig",
          "Automatischer Zeitstempel und Gerätebindung",
          "Sperre für Doppel Anmeldungen und ferngesteuerte Buchungen",
          "Optionaler Positions Check zur Absicherung",
        ],
      },
      {
        eyebrow: "Plan vs. Ist",
        heading: "Was geplant war und was tatsächlich erledigt wurde.",
        body: [
          "Für jede Station und jeden Reinigungsintervall stellt Taskey den Soll Plan der geplanten Leistungen dem Ist Zustand gegenüber. Auftraggeber sehen auf einen Blick, wo Leistungen fristgerecht erbracht wurden, wo Abweichungen bestehen und welche Ursachen hinterlegt sind.",
          "Die Ansicht kann pro Bahnhof, pro Vertragsobjekt oder als Übersicht über alle Anlagen gefiltert werden. Abweichungen werden farblich hervorgehoben und lassen sich direkt aus der Ansicht heraus kommentieren oder in ein Ticket überführen.",
        ],
      },
      {
        eyebrow: "Fotodokumentation",
        heading: "Bilder mit Beweiskraft, nicht nur mit Optik.",
        body: [
          "Fotos werden direkt in der App aufgenommen. Jedes Bild ist an Auftrag, Station, Zeitpunkt und Nutzer gebunden. Ein späteres Ersetzen, Nachschieben oder Bearbeiten außerhalb der App wird durch Prüfsummen und interne Speicherung erkennbar gemacht.",
          "Wo gewünscht, kann Taskey den Vorher Nachher Nachweis erzwingen, zum Beispiel bei Grundreinigungen, Sonderreinigungen nach Ereignissen oder festgelegten Sichtprüfungspunkten.",
        ],
        bullets: [
          "Aufnahme direkt in der App, keine externen Uploads",
          "Prüfsummen und interner Bildspeicher, Manipulationen werden sichtbar",
          "Vorher und Nachher Foto Pflicht optional aktivierbar",
          "Alle Fotos abrufbar pro Station und pro Reinigungszyklus",
        ],
      },
      {
        eyebrow: "Audit Trail",
        heading: "Jede nachträgliche Änderung bleibt sichtbar.",
        body: [
          "Kein Nachweis wird still überschrieben. Wird eine Zeit, ein Foto oder ein Kommentar nachträglich angepasst, protokolliert Taskey Zeitpunkt, Nutzer, alten Wert und neuen Wert. Auftraggeber können den Verlauf einer Position vollständig einsehen.",
          "Damit sind sowohl unbeabsichtigte Korrekturen als auch bewusste Änderungen jederzeit nachvollziehbar. Für die vertragliche Prüfung bedeutet das Rechtssicherheit auf beiden Seiten.",
        ],
      },
      {
        eyebrow: "Übersicht je Bahnhof",
        heading: "Ein Objekt, eine klare Sicht.",
        body: [
          "Jede Station erhält eine eigene Ansicht mit dem aktuellen Reinigungsstand, den letzten Einsätzen, offenen Aufgaben, gemeldeten Mängeln und den zugewiesenen Mitarbeitenden. Die gleiche Ansicht steht der Objektleitung des Reinigungsunternehmens und dem Auftraggeber zur Verfügung, jeweils in der passenden Rolle.",
          "So arbeiten Vertragspartner mit identischer Datenbasis. Rückfragen, Diskussionen über Leistungen und Abrechnungsprüfungen werden deutlich schneller.",
        ],
      },
      {
        eyebrow: "Reports und Downloads",
        heading: "Berichte auf Knopfdruck, im Layout des Auftraggebers.",
        body: [
          "Monatsreports, Vertragsreports und ad hoc Auswertungen werden aus Taskey direkt als PDF oder Excel exportiert. Enthalten sind Leistungen, Abweichungen, Fotos, Audit Trail und Ticket Verlauf. Das Layout kann an das Corporate Design des Auftraggebers angepasst werden.",
          "Wiederkehrende Reports lassen sich automatisieren und per E Mail an definierte Empfänger senden. Manuelles Zusammenstellen entfällt.",
        ],
      },
      {
        eyebrow: "Ticket Funktion",
        heading: "Mängel und Beschwerden strukturiert bearbeiten.",
        body: [
          "Jede Beobachtung vor Ort, jede Meldung des Auftraggebers und jede Beschwerde eines Fahrgastes kann als Ticket erfasst werden. Tickets sind einer Station, einem Bereich und optional einem Zuständigen zugeordnet und werden mit Foto, Kategorie und Fristsetzung angelegt.",
          "Der Bearbeitungsstand ist für Auftraggeber transparent einsehbar. Rückmeldungen zu offenen Meldungen entfallen, weil der Status jederzeit in der Ansicht steht.",
        ],
      },
      {
        eyebrow: "Bedienung",
        heading: "Weniger Klicks, mehr Zeit für die eigentliche Arbeit.",
        body: [
          "Die App wurde für Reinigungspersonal entwickelt, das schnell arbeitet und nicht dokumentieren möchte. An und Abmeldung erfolgt per NFC oder QR in Sekunden. Aufgaben, Fotos und Kommentare sind auf dem Startbildschirm der jeweiligen Station sichtbar. Sprachumschaltung, große Bedienelemente und ein reduziertes Design sorgen für Sicherheit im Alltag.",
          "Neue Mitarbeitende sind ohne Schulung produktiv. Für Objektleitung und Auftraggeber steht das Web Backend mit Filtern, Reports und Rollen zur Verfügung.",
        ],
      },
      {
        eyebrow: "Referenzen und Einsatzgebiete",
        heading: "Verkehrsanlagen, Bahnhöfe und komplexe Objektstrukturen.",
        body: [
          "Taskey ist bei Reinigungsunternehmen im Einsatz, die Verkehrsanlagen, Bahnhöfe, Betriebshöfe, Verwaltungsgebäude und komplexe Liegenschaften betreuen. Auf Anfrage senden wir aktuelle Referenzangaben und einen ausgefüllten Fragebogen zu Ihren technischen Anforderungen.",
          "Sie planen ein Vergabeverfahren oder eine Marktanalyse und benötigen technische Unterlagen zur Prüfung. Wir bereiten diese kurzfristig auf.",
        ],
      },
      {
        eyebrow: "Datenschutz",
        heading: "DSGVO konform, Server in Deutschland.",
        body: [
          "Alle personenbezogenen Daten werden verschlüsselt auf Servern in Deutschland verarbeitet. Ein Auftragsverarbeitungsvertrag steht im Account bereit. Rollen und Rechte sind fein granular pro Person, Objekt und Auftraggeber steuerbar.",
          "Der Zugriff auf Nachweise ist auf berechtigte Personen begrenzt, die Speicherung erfolgt revisionssicher und getrennt je Vertragsverhältnis.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Wie stellt Taskey sicher, dass die An und Abmeldung nicht pauschal oder aus der Ferne erfolgt?",
        answer:
          "Jede Buchung setzt einen physischen NFC Tap oder QR Scan am Einsatzort voraus, kombiniert mit persönlichem Login und Zeitstempel. Optional wird zusätzlich die Geräteposition abgeglichen. Pauschale oder ferngesteuerte Buchungen werden erkannt und protokolliert.",
      },
      {
        question: "Können Fotos nachträglich getauscht oder bearbeitet werden?",
        answer:
          "Fotos werden direkt in der App aufgenommen und intern gespeichert. Jede Datei erhält eine Prüfsumme. Ein Austausch außerhalb der App ist technisch erkennbar und wird im Audit Trail markiert.",
      },
      {
        question:
          "Wie sieht der Auftraggeber, ob Leistungen wie geplant erbracht wurden?",
        answer:
          "Der Auftraggeber erhält eine eigene Ansicht mit Plan Ist Vergleich pro Bahnhof und Zeitraum. Abweichungen sind farblich markiert und mit Ursache, Kommentar und Foto hinterlegt.",
      },
      {
        question: "Werden nachträgliche Änderungen sichtbar dokumentiert?",
        answer:
          "Ja. Jede Änderung an Zeit, Foto oder Kommentar wird protokolliert. Alter Wert, neuer Wert, Zeitpunkt und Nutzer bleiben dauerhaft sichtbar.",
      },
      {
        question: "Gibt es eine Ticket Funktion für Mängel und Beschwerden?",
        answer:
          "Ja. Tickets können pro Station und Bereich erfasst werden, mit Kategorie, Foto, Frist und Zuständigen. Der Bearbeitungsstand ist für den Auftraggeber transparent.",
      },
      {
        question: "Wie aufwendig ist die Bedienung für das Reinigungspersonal?",
        answer:
          "Die App ist auf minimale Bedienung ausgelegt. An und Abmeldung, Foto und Aufgaben erledigt das Personal in wenigen Sekunden je Einsatz. Eine Schulung ist in der Regel nicht erforderlich.",
      },
      {
        question:
          "Ist Taskey bei Verkehrsbetrieben oder in vergleichbaren Objektstrukturen im Einsatz?",
        answer:
          "Ja. Taskey wird von Reinigungsunternehmen mit Verkehrsanlagen und komplexen Liegenschaften eingesetzt. Aktuelle Referenzangaben stellen wir auf Anfrage zur Verfügung.",
      },
      {
        question: "Wo werden die Daten verarbeitet?",
        answer:
          "Ausschließlich auf Servern in Deutschland. Taskey ist DSGVO konform. Ein Auftragsverarbeitungsvertrag ist im Account verfügbar.",
      },
    ],
    related: [
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Leistungsnachweis Gebäudereinigung",
        description:
          "Audit fester Nachweis pro Einsatz mit Foto, Zeit und Personenbezug.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "NFC Zeiterfassung",
        description:
          "Manipulationssichere An und Abmeldung per NFC Tag am Einsatzort.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Einsatzplanung Reinigung",
        description:
          "Planung, Schichten und Objektzuordnung als Grundlage für den Plan Ist Vergleich.",
      },
      {
        href: "/pricing#enterprise",
        label: "Enterprise für Verkehrsbetriebe",
        description:
          "SSO, API und SLA für Verträge mit Verkehrsunternehmen und Betreibern.",
      },
    ],
  },
  en: {
    title: "Cleaning in public transport and transit sites",
    eyebrow: "Industry · Public transport & operators",
    h1: "Cleaning software for public transport,",
    h1Accent: "tamper-proof and audit-ready.",
    lead: "Transit operators now expect every cleaning contractor to provide gap-free digital proof of service. Taskey delivers exactly that foundation: tamper-proof check in and out, photo and service proof per station, clean reports for clients and an app that field staff use without training.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Public transport and operators", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Requirements",
        heading: "What transit operators expect from their cleaning provider today.",
        body: [
          "Public transport organisations are reshaping the contractual requirements for cleaning services. Central to this is whether the contractor can document every service digitally, transparently and safely against later modification.",
          "Taskey covers exactly these requirements. The software was built for cleaning companies working in complex site structures such as railway stations, metro and suburban rail stations, bus depots, operator yards and administrative buildings.",
        ],
        bullets: [
          "Tamper-proof personal check in and out for field staff",
          "Comparison between planned schedule and delivered service",
          "Traceable, tamper-protected photo documentation",
          "Complete audit trail for all later changes",
          "Overview per station or site including deviations",
          "Ticket function for defects and complaints",
        ],
      },
      {
        eyebrow: "Check in and out",
        heading: "Personal proof on site, without shortcuts.",
        body: [
          "Every employee checks in and out at the site via NFC tag or QR code. The app ties the proof to the personal device, the timestamp and the station location. The result is a proof of presence that cannot be generated in bulk or from off site.",
          "For stations and transit sites with many access points, tags can be placed per area, level or platform. This provides a precise mapping of person, location and time.",
        ],
        bullets: [
          "NFC tag or QR code per station, area or platform",
          "Automatic timestamp and device binding",
          "Block against double check-ins and remote bookings",
          "Optional position check as an extra safeguard",
        ],
      },
      {
        eyebrow: "Plan vs. actual",
        heading: "What was planned and what was actually delivered.",
        body: [
          "For every station and cleaning cycle, Taskey compares the target plan of scheduled services against the actual state. Clients see at a glance where services were delivered on time, where deviations exist and which reasons are logged.",
          "The view can be filtered per station, per contract site or as an overview across all sites. Deviations are highlighted and can be commented on directly, or turned into a ticket.",
        ],
      },
      {
        eyebrow: "Photo documentation",
        heading: "Images with evidentiary weight, not just visuals.",
        body: [
          "Photos are captured directly in the app. Each image is bound to the job, station, timestamp and user. Any later replacement, insertion or editing outside the app is made visible through checksums and internal storage.",
          "Where required, Taskey can enforce before and after proof, for example for deep cleans, incident-based special cleaning or predefined inspection points.",
        ],
        bullets: [
          "Capture directly in the app, no external uploads",
          "Checksums and internal image storage, tampering becomes visible",
          "Optional before and after photo requirement",
          "All photos retrievable per station and cleaning cycle",
        ],
      },
      {
        eyebrow: "Audit trail",
        heading: "Every later change stays visible.",
        body: [
          "No proof is quietly overwritten. When a time, a photo or a comment is changed later, Taskey logs the timestamp, user, previous value and new value. Clients can view the complete history of a position.",
          "This makes both unintended corrections and intentional changes traceable at any time. For contract review this means legal certainty for both sides.",
        ],
      },
      {
        eyebrow: "Per station view",
        heading: "One site, one clear view.",
        body: [
          "Every station has its own view with the current cleaning state, recent jobs, open tasks, reported defects and assigned staff. The same view is available to the cleaning company’s site manager and to the client, each in the appropriate role.",
          "Contract partners work on identical data. Follow-up questions, service disputes and invoice checks become much faster.",
        ],
      },
      {
        eyebrow: "Reports and downloads",
        heading: "Reports at the touch of a button, in the client’s layout.",
        body: [
          "Monthly reports, contract reports and ad hoc analyses are exported from Taskey directly as PDF or Excel. They contain services, deviations, photos, audit trail and ticket history. The layout can be tailored to the client’s corporate design.",
          "Recurring reports can be automated and delivered by email to defined recipients. Manual compilation is no longer required.",
        ],
      },
      {
        eyebrow: "Ticket function",
        heading: "Handle defects and complaints in a structured way.",
        body: [
          "Every observation on site, every client message and every passenger complaint can be captured as a ticket. Tickets are tied to a station and area, optionally with an assignee, and created with photo, category and due date.",
          "The processing state is transparent for the client. Follow-up on open reports becomes unnecessary because the status is always in the view.",
        ],
      },
      {
        eyebrow: "Usability",
        heading: "Fewer clicks, more time for the actual work.",
        body: [
          "The app is built for cleaning staff who work quickly and do not want to spend time on documentation. Check in and out happens in seconds via NFC or QR. Tasks, photos and comments are visible on the station home screen. Language switching, large controls and a reduced design provide safety in day-to-day work.",
          "New staff are productive without training. For site managers and clients, the web back office provides filters, reports and roles.",
        ],
      },
      {
        eyebrow: "References and use cases",
        heading: "Transit sites, stations and complex site structures.",
        body: [
          "Taskey is used by cleaning companies that manage transit sites, stations, operator yards, administrative buildings and complex properties. On request we send current reference information and a completed questionnaire on your technical requirements.",
          "If you are preparing a tender or a market analysis and need technical documents for review, we can provide them quickly.",
        ],
      },
      {
        eyebrow: "Data protection",
        heading: "DSGVO-compliant, servers in Germany.",
        body: [
          "All personal data is processed encrypted on servers in Germany. A data processing agreement is available in the account. Roles and permissions are fine-grained per person, site and client.",
          "Access to proofs is restricted to authorised persons, storage is audit-proof and separated per contract relationship.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "How does Taskey ensure that check in and out is not done in bulk or remotely?",
        answer:
          "Every booking requires a physical NFC tap or QR scan at the site, combined with personal login and timestamp. Optionally the device position is verified. Bulk or remote bookings are detected and logged.",
      },
      {
        question: "Can photos be swapped or edited later?",
        answer:
          "Photos are captured directly in the app and stored internally. Each file has a checksum. External swapping is technically detectable and flagged in the audit trail.",
      },
      {
        question:
          "How does the client see whether services were delivered as planned?",
        answer:
          "The client gets their own view with a plan vs. actual comparison per station and period. Deviations are highlighted and enriched with reason, comment and photo.",
      },
      {
        question: "Are later changes visibly documented?",
        answer:
          "Yes. Every change to a time, photo or comment is logged. Previous value, new value, timestamp and user remain permanently visible.",
      },
      {
        question: "Is there a ticket function for defects and complaints?",
        answer:
          "Yes. Tickets can be created per station and area with category, photo, due date and assignee. The processing state is transparent for the client.",
      },
      {
        question: "How simple is the app for cleaning staff?",
        answer:
          "The app is built for minimal interaction. Check in and out, photo and tasks take seconds per job. Training is usually not required.",
      },
      {
        question:
          "Is Taskey used by transit operators or in comparable site structures?",
        answer:
          "Yes. Taskey is used by cleaning companies working on transit sites and complex properties. Current reference information is provided on request.",
      },
      {
        question: "Where is the data processed?",
        answer:
          "Exclusively on servers in Germany. Taskey is DSGVO-compliant. A data processing agreement is available in the account.",
      },
    ],
    related: [
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Service proof for cleaning",
        description:
          "Audit-proof evidence per job with photo, time and personal reference.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "NFC time tracking",
        description:
          "Tamper-proof check in and out via NFC tag at the site.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Cleaning schedule and dispatch",
        description:
          "Scheduling, shifts and site allocation as the basis for plan vs. actual.",
      },
      {
        href: "/pricing#enterprise",
        label: "Enterprise for transit operators",
        description:
          "SSO, API and SLA for contracts with public transport operators.",
      },
    ],
  },
  fr: {
    title: "Nettoyage dans les transports publics et sites de transport",
    eyebrow: "Secteur · Transports publics & exploitants",
    h1: "Logiciel de nettoyage pour les transports publics,",
    h1Accent: "avec preuves infalsifiables.",
    lead: "Les exploitants de transports publics attendent aujourd’hui de chaque prestataire de nettoyage une preuve de service numérique et sans faille. Taskey fournit exactement cette base : pointage infalsifiable, preuve photo et de prestation par station, rapports clairs pour les donneurs d’ordres et une application utilisable sans formation.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Transports publics et exploitants", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Exigences",
        heading: "Ce que les exploitants de transport attendent aujourd’hui d’un prestataire de nettoyage.",
        body: [
          "Les entreprises de transport public revoient les exigences contractuelles applicables aux prestations de nettoyage. La question centrale est de savoir si le prestataire peut documenter chaque prestation de manière numérique, traçable et protégée contre toute modification ultérieure.",
          "Taskey couvre précisément ces exigences. Le logiciel a été conçu pour les entreprises de nettoyage intervenant dans des structures complexes telles que gares, stations de métro et RER, dépôts de bus, dépôts d’exploitation et bâtiments administratifs.",
        ],
        bullets: [
          "Pointage personnel infalsifiable des collaborateurs",
          "Comparaison entre le plan d’intervention et la prestation réalisée",
          "Documentation photo traçable et protégée contre la manipulation",
          "Piste d’audit complète des modifications ultérieures",
          "Vue par station ou installation, écarts inclus",
          "Fonction ticket pour anomalies et réclamations",
        ],
      },
      {
        eyebrow: "Pointage",
        heading: "Une preuve personnelle sur site, sans détour.",
        body: [
          "Chaque collaborateur pointe son arrivée et son départ sur le site via un tag NFC ou un QR code. L’application lie la preuve à l’appareil personnel, à l’horodatage et à l’emplacement de la station. Il en résulte une preuve de présence qui ne peut ni être générée en masse ni à distance.",
          "Pour les gares et installations comportant de nombreux points d’accès, les tags peuvent être posés par zone, niveau ou quai. On obtient ainsi une correspondance précise entre la personne, le lieu et l’heure.",
        ],
        bullets: [
          "Tag NFC ou QR code par station, zone ou quai",
          "Horodatage automatique et liaison à l’appareil",
          "Blocage des doubles pointages et des saisies à distance",
          "Vérification de position optionnelle en garantie supplémentaire",
        ],
      },
      {
        eyebrow: "Planifié contre réel",
        heading: "Ce qui était prévu et ce qui a été effectivement livré.",
        body: [
          "Pour chaque station et chaque cycle de nettoyage, Taskey confronte le plan cible des prestations planifiées à l’état réel. Les donneurs d’ordres voient d’un coup d’œil où les prestations ont été livrées à temps, où il existe des écarts et quelles causes sont documentées.",
          "La vue peut être filtrée par station, par site contractuel ou en vue globale sur l’ensemble des installations. Les écarts sont mis en évidence et peuvent être commentés directement ou convertis en ticket.",
        ],
      },
      {
        eyebrow: "Documentation photo",
        heading: "Des images à valeur probante, pas seulement esthétiques.",
        body: [
          "Les photos sont prises directement dans l’application. Chaque image est liée à l’intervention, à la station, à l’heure et à l’utilisateur. Tout remplacement, ajout ou édition ultérieur en dehors de l’application est rendu visible par des sommes de contrôle et un stockage interne.",
          "Si vous le souhaitez, Taskey peut imposer une preuve avant et après, par exemple pour les nettoyages en profondeur, les nettoyages spéciaux après incidents ou les points de contrôle visuels définis.",
        ],
        bullets: [
          "Prise directement dans l’application, aucun téléversement externe",
          "Sommes de contrôle et stockage interne, toute manipulation devient visible",
          "Obligation photo avant et après, activable en option",
          "Toutes les photos consultables par station et par cycle de nettoyage",
        ],
      },
      {
        eyebrow: "Piste d’audit",
        heading: "Toute modification ultérieure reste visible.",
        body: [
          "Aucune preuve n’est écrasée silencieusement. Lorsqu’une heure, une photo ou un commentaire est modifié après coup, Taskey consigne l’horodatage, l’utilisateur, l’ancienne valeur et la nouvelle valeur. Les donneurs d’ordres peuvent consulter l’historique complet d’un poste.",
          "Les corrections involontaires comme les modifications intentionnelles restent donc traçables à tout moment. Pour la revue contractuelle, cela signifie une sécurité juridique des deux côtés.",
        ],
      },
      {
        eyebrow: "Vue par station",
        heading: "Un site, une vue claire.",
        body: [
          "Chaque station dispose de sa propre vue avec l’état de nettoyage actuel, les dernières interventions, les tâches ouvertes, les anomalies signalées et les collaborateurs affectés. La même vue est accessible à la direction d’exploitation du prestataire et au donneur d’ordres, chacun dans son rôle.",
          "Les partenaires contractuels travaillent ainsi sur une base de données identique. Les questions, les discussions sur les prestations et les contrôles de facturation sont nettement plus rapides.",
        ],
      },
      {
        eyebrow: "Rapports et téléchargements",
        heading: "Des rapports en un clic, dans la charte du donneur d’ordres.",
        body: [
          "Rapports mensuels, rapports contractuels et analyses ponctuelles sont exportés depuis Taskey en PDF ou Excel. Ils contiennent les prestations, les écarts, les photos, la piste d’audit et l’historique des tickets. La mise en page peut être adaptée à la charte graphique du donneur d’ordres.",
          "Les rapports récurrents peuvent être automatisés et envoyés par e-mail à des destinataires définis. Aucun montage manuel n’est nécessaire.",
        ],
      },
      {
        eyebrow: "Fonction ticket",
        heading: "Traiter anomalies et réclamations de manière structurée.",
        body: [
          "Chaque observation sur site, chaque message du donneur d’ordres et chaque réclamation d’un voyageur peut être enregistrée comme ticket. Les tickets sont rattachés à une station, à une zone et éventuellement à un responsable, et créés avec photo, catégorie et échéance.",
          "L’état de traitement est visible en toute transparence pour le donneur d’ordres. Les relances sur les tickets ouverts deviennent inutiles puisque le statut figure dans la vue.",
        ],
      },
      {
        eyebrow: "Ergonomie",
        heading: "Moins de clics, plus de temps pour le travail réel.",
        body: [
          "L’application est conçue pour un personnel de nettoyage rapide, qui ne souhaite pas passer de temps à documenter. Le pointage se fait en quelques secondes via NFC ou QR. Les tâches, photos et commentaires sont visibles sur l’écran d’accueil de la station. Changement de langue, éléments d’interface larges et design épuré assurent la sécurité au quotidien.",
          "Les nouveaux collaborateurs sont opérationnels sans formation. Pour la direction d’exploitation et les donneurs d’ordres, le back-office web fournit filtres, rapports et rôles.",
        ],
      },
      {
        eyebrow: "Références et cas d’usage",
        heading: "Sites de transport, gares et structures complexes.",
        body: [
          "Taskey est utilisé par des entreprises de nettoyage qui interviennent sur des sites de transport, des gares, des dépôts d’exploitation, des bâtiments administratifs et des sites complexes. Sur demande, nous transmettons des références actualisées et un questionnaire complété sur vos exigences techniques.",
          "Si vous préparez un appel d’offres ou une étude de marché et avez besoin de documents techniques, nous les préparons rapidement.",
        ],
      },
      {
        eyebrow: "Protection des données",
        heading: "Conforme DSGVO, serveurs en Allemagne.",
        body: [
          "Toutes les données personnelles sont traitées de manière chiffrée sur des serveurs en Allemagne. Un contrat de sous-traitance est disponible dans le compte. Les rôles et droits sont finement paramétrables par personne, par site et par donneur d’ordres.",
          "L’accès aux preuves est limité aux personnes autorisées, le stockage est infalsifiable et séparé par relation contractuelle.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "Comment Taskey empêche-t-il un pointage en masse ou à distance ?",
        answer:
          "Chaque saisie requiert un tap NFC physique ou un scan QR sur le site, associé à un login personnel et à un horodatage. La position de l’appareil peut être vérifiée en option. Les saisies en masse ou à distance sont détectées et journalisées.",
      },
      {
        question: "Les photos peuvent-elles être remplacées ou modifiées après coup ?",
        answer:
          "Les photos sont prises directement dans l’application et stockées en interne. Chaque fichier dispose d’une somme de contrôle. Tout remplacement externe est techniquement détectable et signalé dans la piste d’audit.",
      },
      {
        question:
          "Comment le donneur d’ordres voit-il si les prestations ont été livrées comme prévu ?",
        answer:
          "Le donneur d’ordres dispose de sa propre vue avec un comparatif plan vs. réel par station et période. Les écarts sont mis en évidence et enrichis de la cause, du commentaire et de la photo.",
      },
      {
        question: "Les modifications ultérieures sont-elles visiblement documentées ?",
        answer:
          "Oui. Toute modification d’une heure, d’une photo ou d’un commentaire est journalisée. Ancienne valeur, nouvelle valeur, horodatage et utilisateur restent visibles en permanence.",
      },
      {
        question: "Existe-t-il une fonction ticket pour anomalies et réclamations ?",
        answer:
          "Oui. Les tickets peuvent être créés par station et zone avec catégorie, photo, échéance et responsable. L’état de traitement est transparent pour le donneur d’ordres.",
      },
      {
        question: "Quel est le niveau d’ergonomie pour le personnel de nettoyage ?",
        answer:
          "L’application est conçue pour une interaction minimale. Pointage, photo et tâches se font en quelques secondes par intervention. Une formation n’est en règle générale pas nécessaire.",
      },
      {
        question:
          "Taskey est-il utilisé par des exploitants de transport ou dans des structures comparables ?",
        answer:
          "Oui. Taskey est utilisé par des entreprises de nettoyage intervenant sur des sites de transport et des sites complexes. Des références actualisées sont fournies sur demande.",
      },
      {
        question: "Où les données sont-elles traitées ?",
        answer:
          "Exclusivement sur des serveurs en Allemagne. Taskey est conforme DSGVO. Un contrat de sous-traitance est disponible dans le compte.",
      },
    ],
    related: [
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Justificatif de prestations de nettoyage",
        description:
          "Preuve résistant à l’audit par intervention, avec photo, heure et référence personnelle.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "Pointage NFC",
        description:
          "Pointage infalsifiable par tag NFC sur le site.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Planification des interventions",
        description:
          "Planning, équipes et affectation des sites comme base du plan vs. réel.",
      },
      {
        href: "/pricing#enterprise",
        label: "Enterprise pour exploitants de transport",
        description:
          "SSO, API et SLA pour les contrats avec les exploitants de transports publics.",
      },
    ],
  },
} as const;

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = pickLocale(locale);
  const c = CONTENT[l];
  const answer = ANSWER_COPY[l];
  const service = SERVICE_COPY[l];

  return (
    <>
      <AnswerBox question={answer.q} answer={answer.a} />
      <ServiceJsonLd
        name={service.name}
        description={service.description}
        audienceType={service.audienceType}
        url={`https://www.taskeyapp.com${path}`}
        id="ld-service-oepnv"
      />
      <LandingPageTemplate
        path={path}
        title={c.title}
        eyebrow={c.eyebrow}
        h1={c.h1}
        h1Accent={c.h1Accent}
        lead={c.lead}
        breadcrumbs={[...c.breadcrumbs] as { name: string; url: string }[]}
        sections={c.sections as any}
        faqs={c.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
        related={[...c.related] as { href: string; label: string; description?: string }[]}
      />
    </>
  );
}
