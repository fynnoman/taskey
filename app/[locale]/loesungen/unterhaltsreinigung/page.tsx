import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/loesungen/unterhaltsreinigung";

const COPY: PageCopy = {
  de: {
    title:
      "Software für Unterhaltsreinigung | Planung, Nachweis, Abrechnung | Taskey",
    description:
      "Reinigungssoftware für Unterhaltsreinigung: wiederkehrende Touren, NFC-Nachweise pro Objekt, automatische Abrechnung und Auftraggeber-Portal. Made in Germany.",
    ogTitle:
      "Software für Unterhaltsreinigung | Planung, Nachweis, Abrechnung | Taskey",
    ogDescription:
      "Wiederkehrende Touren, NFC-Nachweise pro Objekt, automatische Abrechnung und Auftraggeber-Portal.",
    twitterTitle: "Software für Unterhaltsreinigung | Taskey",
    twitterDescription:
      "Touren, Nachweise und Abrechnung für die Unterhaltsreinigung.",
  },
  en: {
    title:
      "Maintenance cleaning software | Planning, proof, invoicing | Taskey",
    description:
      "Cleaning software for maintenance cleaning: recurring tours, NFC proof per site, automated invoicing and a client portal. Made in Germany.",
    ogTitle:
      "Maintenance cleaning software | Planning, proof, invoicing | Taskey",
    ogDescription:
      "Recurring tours, NFC proof per site, automated invoicing and a client portal.",
    twitterTitle: "Maintenance cleaning software | Taskey",
    twitterDescription:
      "Tours, proof and invoicing for maintenance cleaning.",
  },
  fr: {
    title:
      "Logiciel pour le nettoyage d’entretien | Planification, preuve, facturation | Taskey",
    description:
      "Logiciel de nettoyage pour le nettoyage d’entretien : tournées récurrentes, preuves NFC par site, facturation automatique et portail client. Made in Germany.",
    ogTitle:
      "Logiciel pour le nettoyage d’entretien | Planification, preuve, facturation | Taskey",
    ogDescription:
      "Tournées récurrentes, preuves NFC par site, facturation automatique et portail client.",
    twitterTitle: "Logiciel pour le nettoyage d’entretien | Taskey",
    twitterDescription:
      "Tournées, preuves et facturation pour le nettoyage d’entretien.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Software für Unterhaltsreinigung mit Taskey",
  en: "Maintenance cleaning software with Taskey",
  fr: "Logiciel pour le nettoyage d’entretien avec Taskey",
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
    title: "Unterhaltsreinigung",
    eyebrow: "Branche · Unterhaltsreinigung",
    h1: "Software für Unterhaltsreinigung —",
    h1Accent: "Planung, Nachweis, Abrechnung.",
    lead: "Unterhaltsreinigung lebt von wiederkehrenden Touren, dünnen Margen und Auftraggebern, die hohe Erwartungen an die Dokumentation haben. Taskey automatisiert genau diese drei Punkte: Schichten und Touren planen, jeden Einsatz per NFC nachweisen, jede Leistung sauber abrechnen.",
    answer: "Taskey plant wiederkehrende Reinigungstouren, weist jeden Einsatz per NFC am Objekt nach und rechnet Leistungen automatisch ab, damit dünne Margen nicht durch Papierarbeit weiter schrumpfen.",
    serviceName: "Software für Unterhaltsreinigung",
    serviceDescription: "Branchensoftware für Unterhaltsreiniger: Schicht- und Tourenplanung, NFC-Objektnachweis, Auftraggeber-Portal und automatisierte Abrechnung wiederkehrender Leistungen.",
    audienceType: "Gebäudereinigungsbetriebe mit Fokus Unterhaltsreinigung im DACH-Raum",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen/unterhaltsreinigung" },
      { name: "Unterhaltsreinigung", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Alltag",
        heading: "Drei Schichten pro Tag, 40 Objekte, 12 Mitarbeitende.",
        body: [
          "Typische Unterhaltsreinigung in Deutschland: morgens vor 8 Uhr Büros, mittags Treppenhäuser in Wohnanlagen, abends Schulen oder Kitas. Jeder Auftrag hat seine eigenen Sonderwünsche, Schlüsselregelungen und Abrechnungsmodalitäten.",
          "Excel und Chats halten das nicht aus. Taskey macht den Plan in der App live für jedes Teammitglied sichtbar – inklusive Wegbeschreibung, Schlüsselübergabe-Protokoll und individueller Aufgabenliste pro Objekt.",
        ],
        bullets: [
          "Wiederkehrende Touren pro Woche, Monat oder individuell",
          "Schichten morgens / mittags / abends parallel",
          "Vertretungen mit Vorschlagsalgorithmus",
          "Pro Objekt: Sonderwünsche, Notizen, Fotos, Schlüsselbestand",
        ],
      },
      {
        eyebrow: "Nachweis",
        heading: "NFC-Tag am Eingang löst die Chat-Beweispflicht ab.",
        body: [
          "In der Unterhaltsreinigung kommt der Auftraggeber selten persönlich vorbei – er sieht nicht, ob Sie gereinigt haben oder nicht. Damit Sie Reklamationen mit Daten statt mit Worten begegnen, dokumentiert Taskey jeden Einsatz automatisch.",
          "Ein wetterfester NFC-Tag im Treppenhaus oder am Schlüsselkasten reicht. Der Tap der Reinigungskraft erzeugt einen Zeitstempel, GPS-Punkt und Mitarbeiter-Nachweis – auf Wunsch mit Foto.",
        ],
      },
      {
        eyebrow: "Auftraggeber-Portal",
        heading: "Live-Status für Hausverwaltungen und Facility-Manager.",
        body: [
          "Mit Taskey Share bekommt jeder Auftraggeber – etwa die Hausverwaltung – einen eigenen Login. Er sieht in Echtzeit, wann sein Treppenhaus gereinigt wurde, wer dort war und ob es Beanstandungen gibt.",
          "Das senkt die Anrufe in Ihrem Büro drastisch und bringt Ihnen messbar bessere Vertragsverlängerungen. Hausverwaltungen lieben Transparenz – und genau die liefert Taskey.",
        ],
      },
      {
        eyebrow: "Abrechnung",
        heading: "Vom Einsatz zur Rechnung in zwei Klicks.",
        body: [
          "Aus den NFC-Buchungen und dem Einsatzplan erzeugt Taskey automatisch die Abrechnungsgrundlage – als Pauschal-Wartungsvertrag, nach Stunden oder pro Einsatz. Sammelrechnungen für Verwalter mit vielen Objekten sind in zwei Klicks erstellt.",
          "DATEV-Export für die Lohnbuchhaltung gibt es in den höheren Tarifen direkt mit dazu. Ihr Steuerberater bekommt eine fertige Datei – keine Rückfragen.",
        ],
      },
    ],
    faqs: [
      {
        question: "Wie behält Taskey den Überblick bei 50+ Unterhaltsreinigungs-Verträgen?",
        answer:
          "Jedes Objekt ist ein eigener Datensatz mit Vertrag, Sonderwünschen, Schlüsseln und Touren. Sie filtern, gruppieren und sortieren nach Auftraggeber, Postleitzahl, Reinigungstyp oder Marge.",
      },
      {
        question: "Funktioniert das auch für Reinigung in Wohnanlagen ohne Hausverwalter vor Ort?",
        answer:
          "Ja, sogar besonders gut. Der NFC-Tag im Treppenhaus oder am Briefkasten ist der zentrale Nachweis – kein Hausmeister muss anwesend sein, kein Stempel auf Papier nötig.",
      },
      {
        question: "Kann ich Wartungsverträge mit festen monatlichen Pauschalen abbilden?",
        answer:
          "Ja. Sie hinterlegen pro Objekt eine monatliche Pauschale, ggf. plus Sonderleistungen nach Aufwand. Taskey erzeugt automatisch die monatliche Rechnung.",
      },
      {
        question: "Wie geht Taskey mit Schlüsseln um?",
        answer:
          "Pro Objekt hinterlegen Sie den Schlüsselbestand. NFC-Tags am Schlüsselkasten dokumentieren Entnahme und Rückgabe. Sie wissen jederzeit, welcher Schlüssel wo ist.",
      },
      {
        question: "Was, wenn ich Sonderaufträge zwischen den festen Touren habe?",
        answer:
          "Sie planen den Sonderauftrag mit einem Klick zusätzlich ein. Mitarbeiter sehen ihn in der App, Auftraggeber sieht ihn separat im Portal – alles sauber getrennt von der wiederkehrenden Tour.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Software für Gebäudereinigung",
        description: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Einsatzplanung Reinigung",
        description: "Wiederkehrende Touren in Sekunden planen und umplanen.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "NFC Zeiterfassung",
        description: "Der zentrale Nachweis-Workflow in der Unterhaltsreinigung.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Leistungsnachweis Gebäudereinigung",
        description: "Wie Reklamationen mit harten Daten verschwinden.",
      },
    ],
  },
  en: {
    title: "Maintenance cleaning",
    eyebrow: "Industry · Maintenance cleaning",
    h1: "Maintenance cleaning software —",
    h1Accent: "planning, proof, invoicing.",
    lead: "Maintenance cleaning lives off recurring tours, thin margins and clients with high expectations on documentation. Taskey automates precisely those three points: plan shifts and tours, prove every job via NFC, invoice every service cleanly.",
    answer: "Taskey plans recurring cleaning tours, proves every job via NFC on-site and invoices services automatically so thin margins are not eaten further by paperwork.",
    serviceName: "Maintenance cleaning software",
    serviceDescription: "Industry software for maintenance cleaning companies: shift and tour planning, NFC on-site proof, client portal and automated recurring invoicing.",
    audienceType: "Commercial cleaning companies focused on maintenance cleaning in DACH",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen/unterhaltsreinigung" },
      { name: "Maintenance cleaning", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Daily reality",
        heading: "Three shifts a day, 40 sites, 12 employees.",
        body: [
          "Typical maintenance cleaning in Germany: offices before 8 a.m., stairwells in housing complexes around midday, schools or daycares in the evening. Every contract has its own special requests, key arrangements and billing terms.",
          "Excel and chats can’t keep up. Taskey puts the plan live in the app for every team member – including directions, key handover record and an individual task list per site.",
        ],
        bullets: [
          "Recurring tours weekly, monthly or individually",
          "Morning / midday / evening shifts in parallel",
          "Substitutions with suggestion algorithm",
          "Per site: special requests, notes, photos, key inventory",
        ],
      },
      {
        eyebrow: "Proof",
        heading: "NFC tag at the entrance replaces chat evidence.",
        body: [
          "In maintenance cleaning, the client rarely shows up in person – they can’t see whether you cleaned or not. So that you can answer complaints with data instead of words, Taskey documents every job automatically.",
          "A weatherproof NFC tag in the stairwell or on the key box is enough. The cleaner’s tap creates a timestamp, GPS point and employee proof – with a photo if desired.",
        ],
      },
      {
        eyebrow: "Client portal",
        heading: "Live status for property managers and facility managers.",
        body: [
          "With Taskey Share, every client – such as the property manager – gets their own login. They see in real time when their stairwell was cleaned, who was there and whether there are any complaints.",
          "This drastically cuts the calls coming into your office and gives you measurably better contract renewals. Property managers love transparency – and that is exactly what Taskey delivers.",
        ],
      },
      {
        eyebrow: "Invoicing",
        heading: "From job to invoice in two clicks.",
        body: [
          "From the NFC entries and the schedule, Taskey automatically generates the billing basis – as a flat maintenance contract, by the hour or per job. Collective invoices for managers with many sites are created in two clicks.",
          "DATEV export for payroll is included directly in the higher plans. Your tax adviser gets a ready-made file – no follow-up queries.",
        ],
      },
    ],
    faqs: [
      {
        question: "How does Taskey stay on top of 50+ maintenance-cleaning contracts?",
        answer:
          "Each site is its own record with contract, special requests, keys and tours. You filter, group and sort by client, postal code, cleaning type or margin.",
      },
      {
        question: "Does it also work for cleaning in housing complexes without an on-site manager?",
        answer:
          "Yes, especially well. The NFC tag in the stairwell or on the letterbox is the central proof – no caretaker needs to be present, no paper stamp required.",
      },
      {
        question: "Can I model maintenance contracts with fixed monthly flat rates?",
        answer:
          "Yes. Per site you set a monthly flat rate, optionally plus extra services on an effort basis. Taskey generates the monthly invoice automatically.",
      },
      {
        question: "How does Taskey handle keys?",
        answer:
          "Per site you record the key inventory. NFC tags on the key box document removal and return. You always know which key is where.",
      },
      {
        question: "What about ad hoc jobs between the fixed tours?",
        answer:
          "You schedule the ad hoc job as an extra with one click. Employees see it in the app, the client sees it separately in the portal – cleanly separated from the recurring tour.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Building services software",
        description: "All-in-one industry software: scheduling, NFC proof, time tracking, quotes, invoices, live margins.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Cleaning scheduling",
        description: "Plan and replan recurring tours in seconds.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "NFC time tracking",
        description: "The central proof workflow in maintenance cleaning.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Service proof for cleaning",
        description: "How complaints disappear with hard data.",
      },
    ],
  },
  fr: {
    title: "Nettoyage d’entretien",
    eyebrow: "Secteur · Nettoyage d’entretien",
    h1: "Logiciel pour le nettoyage d’entretien —",
    h1Accent: "planification, preuve, facturation.",
    lead: "Le nettoyage d’entretien vit de tournées récurrentes, de marges serrées et de donneurs d’ordres aux fortes attentes en matière de documentation. Taskey automatise précisément ces trois points : planifier les équipes et les tournées, prouver chaque intervention par NFC, facturer chaque prestation proprement.",
    answer: "Taskey planifie les tournées de nettoyage récurrentes, prouve chaque intervention par NFC sur site et facture automatiquement, pour que les marges serrées ne soient pas rognées par la paperasse.",
    serviceName: "Logiciel pour le nettoyage d’entretien",
    serviceDescription: "Logiciel métier pour le nettoyage d’entretien : planification des équipes et des tournées, preuve NFC sur site, portail client et facturation récurrente automatisée.",
    audienceType: "Entreprises de propreté axées sur le nettoyage d’entretien dans la zone DACH",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen/unterhaltsreinigung" },
      { name: "Nettoyage d’entretien", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Au quotidien",
        heading: "Trois équipes par jour, 40 sites, 12 collaborateurs.",
        body: [
          "Le nettoyage d’entretien typique en Allemagne : des bureaux avant 8 h, des cages d’escalier d’immeubles le midi, des écoles ou crèches le soir. Chaque contrat a ses propres demandes, ses règles de clés et ses modalités de facturation.",
          "Excel et les chats ne tiennent pas la charge. Taskey rend le plan visible en direct dans l’application pour chaque membre de l’équipe – avec itinéraire, protocole de remise de clés et liste de tâches individuelle par site.",
        ],
        bullets: [
          "Tournées récurrentes hebdomadaires, mensuelles ou personnalisées",
          "Équipes matin / midi / soir en parallèle",
          "Remplacements avec algorithme de propositions",
          "Par site : demandes spéciales, notes, photos, inventaire des clés",
        ],
      },
      {
        eyebrow: "Preuve",
        heading: "Le tag NFC à l’entrée remplace la preuve par chat.",
        body: [
          "En nettoyage d’entretien, le donneur d’ordres passe rarement en personne – il ne voit pas si vous avez nettoyé ou non. Pour que vous répondiez aux réclamations avec des données plutôt qu’avec des mots, Taskey documente chaque intervention automatiquement.",
          "Un tag NFC résistant aux intempéries dans la cage d’escalier ou sur la boîte à clés suffit. Le tap de l’agent génère un horodatage, un point GPS et une preuve collaborateur – avec photo en option.",
        ],
      },
      {
        eyebrow: "Portail client",
        heading: "Statut en direct pour syndics et facility managers.",
        body: [
          "Avec Taskey Share, chaque donneur d’ordres – par exemple le syndic – obtient son propre accès. Il voit en temps réel quand sa cage d’escalier a été nettoyée, qui y est intervenu et s’il y a des réclamations.",
          "Cela réduit drastiquement les appels à votre bureau et vous apporte de meilleurs renouvellements de contrats, de manière mesurable. Les syndics adorent la transparence – c’est exactement ce que Taskey livre.",
        ],
      },
      {
        eyebrow: "Facturation",
        heading: "De l’intervention à la facture en deux clics.",
        body: [
          "À partir des pointages NFC et du planning, Taskey génère automatiquement la base de facturation – en forfait de contrat de maintenance, à l’heure ou par intervention. Les factures groupées pour les gestionnaires de nombreux sites se créent en deux clics.",
          "L’export DATEV pour la paie est inclus directement dans les offres supérieures. Votre comptable reçoit un fichier prêt à l’emploi – sans questions de retour.",
        ],
      },
    ],
    faqs: [
      {
        question: "Comment Taskey garde-t-il le cap avec plus de 50 contrats de nettoyage d’entretien ?",
        answer:
          "Chaque site est une fiche dédiée avec contrat, demandes spéciales, clés et tournées. Vous filtrez, regroupez et triez par donneur d’ordres, code postal, type de nettoyage ou marge.",
      },
      {
        question: "Cela fonctionne-t-il aussi pour des immeubles d’habitation sans gestionnaire sur place ?",
        answer:
          "Oui, et même particulièrement bien. Le tag NFC dans la cage d’escalier ou sur la boîte aux lettres est la preuve centrale – pas besoin d’un concierge présent, ni de tampon papier.",
      },
      {
        question: "Puis-je modéliser des contrats de maintenance avec forfaits mensuels fixes ?",
        answer:
          "Oui. Par site, vous définissez un forfait mensuel, plus éventuellement des prestations supplémentaires au temps passé. Taskey génère automatiquement la facture mensuelle.",
      },
      {
        question: "Comment Taskey gère-t-il les clés ?",
        answer:
          "Par site, vous renseignez l’inventaire des clés. Les tags NFC sur la boîte à clés documentent la sortie et la restitution. Vous savez à tout moment où se trouve chaque clé.",
      },
      {
        question: "Et si j’ai des prestations ponctuelles entre les tournées fixes ?",
        answer:
          "Vous planifiez la prestation supplémentaire en un clic. Les collaborateurs la voient dans l’application, le donneur d’ordres la voit séparément dans le portail – proprement distincte de la tournée récurrente.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Logiciel pour le nettoyage de bâtiments",
        description: "Logiciel métier tout-en-un : planification, preuve NFC, pointage, devis, factures, marges en direct.",
      },
      {
        href: "/einsatzplanung-reinigung",
        label: "Planification d’interventions de nettoyage",
        description: "Planifier et replanifier des tournées récurrentes en quelques secondes.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "Pointage NFC",
        description: "Le workflow central de preuve dans le nettoyage d’entretien.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Justificatif de prestations de nettoyage",
        description: "Comment les réclamations disparaissent avec des données solides.",
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

  return (
    <LandingPageTemplate
      path={path}
      title={c.title}
      eyebrow={c.eyebrow}
      h1={c.h1}
      h1Accent={c.h1Accent}
      lead={c.lead}
      answerBlock={c.answer}
      breadcrumbs={[...c.breadcrumbs] as { name: string; url: string }[]}
      sections={c.sections as any}
      faqs={c.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      related={[...c.related] as { href: string; label: string; description?: string }[]}
      service={{
        name: c.serviceName,
        description: c.serviceDescription,
        serviceType: "Maintenance cleaning management software",
        areaServed: ["DE", "AT", "CH"],
        audienceType: c.audienceType,
      }}
    />
  );
}
