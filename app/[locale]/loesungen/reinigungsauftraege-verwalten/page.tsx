import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";
import { NEWSLETTER_LABELS } from "@/lib/newsletter-labels";

const path = "/loesungen/reinigungsauftraege-verwalten";

const NEWSLETTER_SOURCE_LABELS: Record<Locale, string> = {
  de: "Ratgeber Reinigungsaufträge verwalten",
  en: "Guide Manage cleaning contracts",
  fr: "Guide Gérer les contrats",
};

const COPY: PageCopy = {
  de: {
    title: "Reinigungsaufträge verwalten | Angebot, Auftrag, Abrechnung | Taskey",
    description:
      "Reinigungsaufträge sauber verwalten: vom Angebot über den laufenden Auftrag bis zur Abrechnung. Status, Fristen, Wiederkehrer und Sonderleistungen im Griff. Ohne Excel-Chaos.",
    ogTitle: "Reinigungsaufträge verwalten | Taskey",
    ogDescription:
      "Angebot, Auftrag und Abrechnung mit Status und Fristen zentral im Griff.",
    twitterTitle: "Reinigungsaufträge verwalten | Taskey",
    twitterDescription:
      "Angebot, Auftrag und Abrechnung zentral im Griff.",
  },
  en: {
    title: "Manage cleaning contracts | Quote, order, invoicing | Taskey",
    description:
      "Manage cleaning contracts cleanly: from quote through running contract to invoicing. Status, deadlines, recurring services and specials under control. Without spreadsheet chaos.",
    ogTitle: "Manage cleaning contracts | Taskey",
    ogDescription:
      "Quote, order and invoicing with status and deadlines centrally under control.",
    twitterTitle: "Manage cleaning contracts | Taskey",
    twitterDescription:
      "Quote, order and invoicing centrally under control.",
  },
  fr: {
    title: "Gérer les contrats de nettoyage | Devis, commande, facturation | Taskey",
    description:
      "Gérez proprement les contrats de nettoyage: du devis au contrat en cours jusqu'à la facturation. Statuts, échéances, prestations récurrentes et spéciales maîtrisés. Sans chaos Excel.",
    ogTitle: "Gérer les contrats de nettoyage | Taskey",
    ogDescription:
      "Devis, commande et facturation avec statut et échéances centralement maîtrisés.",
    twitterTitle: "Gérer les contrats de nettoyage | Taskey",
    twitterDescription:
      "Devis, commande et facturation centralement maîtrisés.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Reinigungsaufträge verwalten mit Taskey",
  en: "Manage cleaning contracts with Taskey",
  fr: "Gérer les contrats de nettoyage avec Taskey",
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
    title: "Reinigungsaufträge verwalten",
    eyebrow: "Ratgeber · Auftragsverwaltung",
    h1: "Reinigungsaufträge verwalten —",
    h1Accent: "vom Angebot bis zur Abrechnung.",
    lead: "Ein Reinigungsauftrag lebt länger als eine Rechnung. Er beginnt mit dem Angebot, läuft über Monate oder Jahre und endet oft mit einer Nachverhandlung. Wer das sauber verwaltet, verliert weniger Umsatz durch verpasste Fristen und Reklamationen.",
    answer: "Ein Reinigungsauftrag wird effizient verwaltet, wenn Angebot, Vertrag, Einsatzplan, Nachweise, Reklamationen und Rechnungen in einem System an einem gemeinsamen Objekt-Datensatz hängen, statt in vier Tools und drei E-Mail-Ordnern verteilt zu sein.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Reinigungsaufträge verwalten", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Lebenszyklus",
        heading: "Der Reinigungsauftrag hat mehr als eine Zeile.",
        body: [
          "Ein Reinigungsauftrag beginnt lange vor dem ersten Einsatz. Anfrage, Aufmaß, Kalkulation, Angebot, Verhandlung, Vertragsabschluss. Erst dann folgt der operative Teil: Einsatzplanung, Nachweis, Rechnung. Und häufig kommt am Ende oder mitten drin: Nachverhandlung, Reklamation, Sonderleistungen, Vertragsverlängerung oder Kündigung.",
          "Wer diese Phasen in getrennten Systemen führt, verliert regelmäßig den Überblick. Angebot in Word, Vertrag im Ordner, Einsatzplan in Excel, Rechnung im Buchhaltungsprogramm, Reklamation im Chat. Jede Übergabe zwischen Systemen ist eine Fehlerquelle.",
        ],
        bullets: [
          "Anfrage und Aufmaß",
          "Kalkulation und Angebot",
          "Vertragsabschluss mit Konditionen",
          "Einsatzplanung und Nachweis",
          "Rechnung und Zahlungseingang",
          "Reklamation, Nachverhandlung, Verlängerung",
        ],
      },
      {
        eyebrow: "Status",
        heading: "Statusverwaltung als operative Grundlage.",
        body: [
          "Der wichtigste Hebel für die Auftragsverwaltung ist ein sauberer Status pro Auftrag. Ist die Kalkulation freigegeben? Wurde das Angebot verschickt? Wurde der Vertrag unterschrieben? Läuft der Auftrag operativ sauber? Steht eine Rechnung offen? Diese Statusfragen sind auf einen Blick beantwortbar oder eben nicht.",
          "Ohne Statuslogik entsteht der klassische Auftragsverlust in der Handoff-Lücke. Angebot geschrieben, keine Rückmeldung, kein Follow-up. Vertrag geschickt, keine Unterschrift, kein Nachhaken. In einer sauberen Auftragsverwaltung wird ein Auftrag mit stehen gebliebenem Status automatisch sichtbar.",
        ],
        bullets: [
          "Klarer Status pro Auftrag, jederzeit sichtbar",
          "Frühwarnung bei stehen gebliebenem Status",
          "Fristen und Follow-ups automatisch",
          "Übergaben zwischen Vertrieb und Betrieb sauber",
        ],
      },
      {
        eyebrow: "Wiederkehrer",
        heading: "Wiederkehrende Aufträge brauchen andere Logik.",
        body: [
          "Ein Wartungsauftrag Unterhaltsreinigung läuft nicht einmal, sondern monatlich oder wöchentlich. Aus Sicht der Auftragsverwaltung ist das ein Dauerauftrag mit vielen Einzelabrufen. Rechnung, Nachweis, Reklamation beziehen sich immer auf einen konkreten Zeitraum, nicht auf den Auftrag als Ganzes.",
          "Dazu kommen Sonderleistungen: Grundreinigung zweimal pro Jahr, Fensterputz vier Mal pro Jahr, Bauendreinigung einmalig. Sauber verwaltet gehören diese als separate Auftragspositionen zum Dauerauftrag, mit eigener Kalkulation, eigenem Nachweis und eigener Abrechnung.",
        ],
        bullets: [
          "Dauerauftrag mit vielen Einzelabrufen",
          "Sonderleistungen als eigene Positionen",
          "Rechnung pro Zeitraum, nicht pro Auftrag",
          "Preisanpassung und Indexierung dokumentiert",
        ],
      },
      {
        eyebrow: "Digital",
        heading: "Wie Taskey Aufträge zentral führt.",
        body: [
          "In Taskey ist ein Reinigungsauftrag eine Akte mit Zeitstrahl. Angebot, Vertrag, Einsatzplan, Nachweise, Rechnungen und Reklamationen sind chronologisch sichtbar. Der aktuelle Status ist auf einen Blick da. Bei wiederkehrenden Aufträgen zeigt die Historie jeden Einsatz mit Nachweis.",
          "Der Vertrieb sieht bei Neuanfragen bestehende Aufträge des gleichen Kunden. Der Betrieb sieht bei jedem Einsatz die Auftragsdetails. Die Buchhaltung sieht die Rechnungspositionen für den nächsten Abrechnungslauf. Die Objektleitung sieht Auslastung und Reklamationen. Kein System-Wechsel dazwischen.",
        ],
        bullets: [
          "Auftrag als Akte mit Zeitstrahl",
          "Vertrieb, Betrieb, Buchhaltung greifen auf denselben Datenstand zu",
          "Statuswarnung bei Stillstand",
          "Wiederkehrende Aufträge mit Historie pro Einsatz",
          "Sonderleistungen als separate Positionen",
        ],
      },
    ],
    faqs: [
      {
        question: "Was gehört in einen Reinigungsauftrag?",
        answer:
          "Auftraggeber, Objekt, Vertragsdaten, Leistungsverzeichnis mit Frequenzen, Sonderleistungen, Konditionen, Ansprechpartner, Zahlungsbedingungen und die Historie aller Einsätze, Rechnungen und Reklamationen. Bei wiederkehrenden Aufträgen zusätzlich die einzelnen Abrufe.",
      },
      {
        question: "Wie verwalte ich einen Wartungsauftrag Unterhaltsreinigung?",
        answer:
          "Als Dauerauftrag mit vielen Einzelabrufen. Der Auftrag definiert Konditionen, Leistungsverzeichnis, Frequenzen und Preise. Jeder Einsatz wird als Abruf gegen den Auftrag geführt, mit eigenem Nachweis und eigener Zeitzuordnung. Rechnungen laufen pro Monat oder pro Quartal.",
      },
      {
        question: "Wie behalte ich bei mehreren Aufträgen den Überblick?",
        answer:
          "Mit einem Statussystem pro Auftrag und einer zentralen Übersicht. Filter nach Status, Kunde, Objektleitung oder Frist zeigen, wo Handlung nötig ist. Aufträge in kritischen Status wie 'Angebot verschickt, keine Reaktion' werden automatisch sichtbar.",
      },
      {
        question: "Wie hänge ich Angebot und Auftrag zusammen?",
        answer:
          "Aus einer angenommenen Angebotskalkulation entsteht der Auftrag mit den gleichen Konditionen. Änderungen im Angebot sind bis zur Annahme möglich, danach werden sie als Nachtrag geführt. So bleibt die Historie sauber, ohne dass alte Angebote überschrieben werden.",
      },
      {
        question: "Wie verwalte ich Sonderleistungen zum Auftrag?",
        answer:
          "Als separate Auftragspositionen zum Dauerauftrag. Grundreinigung, Bauendreinigung oder Fensterputz haben eigene Kalkulation, eigenen Nachweis und eigene Abrechnung. Zugeordnet zum gleichen Auftraggeber und Objekt, aber unabhängig vom laufenden Wartungsauftrag.",
      },
      {
        question: "Wie hilft Taskey bei der Auftragsverwaltung?",
        answer:
          "Taskey führt den Reinigungsauftrag als Akte mit Zeitstrahl: Angebot, Vertrag, Einsätze, Rechnungen, Reklamationen chronologisch. Status auf einen Blick, Frühwarnung bei Stillstand, Wiederkehrer und Sonderleistungen separat verwaltet. Vertrieb, Betrieb und Buchhaltung im gleichen System.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Software für Gebäudereinigung",
        description: "Auftrag, Objekt, Einsatzplan und Rechnung in einem System.",
      },
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Reinigungsobjekte verwalten",
        description: "Objektstammdaten als Grundlage für Aufträge.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Reinigungskosten-Rechner",
        description: "Aus dem Aufmaß zur belastbaren Kalkulation.",
      },
      {
        href: "/rechner/marge-gebaeudereinigung",
        label: "Marge-Rechner",
        description: "Marge pro Auftrag prüfen und Zielpreis ermitteln.",
      },
      {
        href: "/features/kalkulation",
        label: "Objektkalkulation in Taskey",
        description: "Wie Kalkulation und Auftrag zusammenlaufen.",
      },
    ],
  },
  en: {
    title: "Manage cleaning contracts",
    eyebrow: "Guide · Contract management",
    h1: "Manage cleaning contracts —",
    h1Accent: "from quote to invoicing.",
    lead: "A cleaning contract lives longer than an invoice. It starts with a quote, runs for months or years, and often ends with a renegotiation. Anyone who manages this cleanly loses less revenue to missed deadlines and complaints.",
    answer: "A cleaning contract is managed efficiently when quote, contract, schedule, proof of service, complaints and invoices all live on one shared site record in one system, not across four tools and three email folders.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Manage cleaning contracts", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Lifecycle",
        heading: "A cleaning contract has more than one line.",
        body: [
          "A cleaning contract starts long before the first visit. Enquiry, site measurement, calculation, quote, negotiation, contract signing. Only then follows the operational part: dispatching, proof, invoicing. And often at the end or in the middle: renegotiation, complaint, specials, extension or termination.",
          "Running these phases in separate systems loses the thread regularly. Quote in Word, contract in a folder, dispatch in Excel, invoice in the accounting software, complaint in chat. Every handover between systems is an error source.",
        ],
        bullets: [
          "Enquiry and site measurement",
          "Calculation and quote",
          "Contract signing with conditions",
          "Dispatching and proof",
          "Invoice and payment",
          "Complaint, renegotiation, extension",
        ],
      },
      {
        eyebrow: "Status",
        heading: "Status management as operational foundation.",
        body: [
          "The biggest lever for contract management is a clean status per contract. Is the calculation approved? Was the quote sent? Was the contract signed? Does the contract run cleanly operationally? Is an invoice outstanding? These are answered at a glance or not at all.",
          "Without status logic, the classic contract loss happens in the handoff gap. Quote sent, no reply, no follow-up. Contract sent, no signature, no chase. In clean contract management, a contract stuck in a status becomes visible automatically.",
        ],
        bullets: [
          "Clear status per contract, always visible",
          "Early warning for stalled status",
          "Deadlines and follow-ups automatic",
          "Handovers between sales and operations clean",
        ],
      },
      {
        eyebrow: "Recurring",
        heading: "Recurring contracts need different logic.",
        body: [
          "A maintenance cleaning contract does not run once, but monthly or weekly. From the contract management perspective, it is an ongoing contract with many individual calls. Invoice, proof, complaint always refer to a specific period, not to the contract as a whole.",
          "On top come specials: deep cleaning twice a year, glass cleaning four times a year, post-construction cleaning once. Cleanly managed, they belong as separate line items to the ongoing contract, with their own calculation, proof and invoicing.",
        ],
        bullets: [
          "Ongoing contract with many individual calls",
          "Specials as separate line items",
          "Invoice per period, not per contract",
          "Price adjustment and indexation documented",
        ],
      },
      {
        eyebrow: "Digital",
        heading: "How Taskey runs contracts centrally.",
        body: [
          "In Taskey, a cleaning contract is a record with a timeline. Quote, contract, dispatch plan, proofs, invoices and complaints are visible chronologically. The current status is at a glance. On recurring contracts, the history shows every visit with proof.",
          "Sales sees existing contracts of the same client on new enquiries. Operations sees contract details on every visit. Accounting sees invoice line items for the next billing run. Account management sees utilisation and complaints. No system switch in between.",
        ],
        bullets: [
          "Contract as record with timeline",
          "Sales, operations, accounting access the same state",
          "Status warning on stall",
          "Recurring contracts with history per visit",
          "Specials as separate line items",
        ],
      },
    ],
    faqs: [
      {
        question: "What belongs in a cleaning contract?",
        answer:
          "Client, site, contract data, service catalogue with frequencies, specials, conditions, contacts, payment terms and the history of all visits, invoices and complaints. On recurring contracts, additionally the individual calls.",
      },
      {
        question: "How do I manage a maintenance cleaning contract?",
        answer:
          "As an ongoing contract with many individual calls. The contract defines conditions, catalogue, frequencies and prices. Each visit is booked as a call against the contract, with its own proof and time assignment. Invoices run monthly or quarterly.",
      },
      {
        question: "How do I keep track with multiple contracts?",
        answer:
          "With a status system per contract and a central overview. Filters by status, client, account manager or deadline show where action is needed. Contracts in critical status like 'quote sent, no reply' become visible automatically.",
      },
      {
        question: "How do quote and contract connect?",
        answer:
          "An accepted quote calculation becomes the contract with the same conditions. Changes to the quote are possible until acceptance, thereafter they are tracked as amendments. History stays clean without overwriting old quotes.",
      },
      {
        question: "How do I manage specials for a contract?",
        answer:
          "As separate line items on the ongoing contract. Deep cleaning, post-construction or glass have their own calculation, proof and invoicing. Attached to the same client and site but independent of the ongoing maintenance contract.",
      },
      {
        question: "How does Taskey help with contract management?",
        answer:
          "Taskey runs the cleaning contract as a record with timeline: quote, contract, visits, invoices, complaints chronologically. Status at a glance, early warning on stall, recurring and specials managed separately. Sales, operations and accounting in the same system.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Cleaning company software",
        description: "Contract, site, dispatch and invoicing in one system.",
      },
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Manage cleaning sites",
        description: "Site master data as basis for contracts.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Cleaning cost calculator",
        description: "From site measurement to defensible calculation.",
      },
      {
        href: "/rechner/marge-gebaeudereinigung",
        label: "Margin calculator",
        description: "Check margin per contract and derive target price.",
      },
      {
        href: "/features/kalkulation",
        label: "Site calculation in Taskey",
        description: "How calculation and contract connect.",
      },
    ],
  },
  fr: {
    title: "Gérer les contrats de nettoyage",
    eyebrow: "Guide · Gestion des contrats",
    h1: "Gérer les contrats de nettoyage —",
    h1Accent: "du devis à la facturation.",
    lead: "Un contrat de nettoyage vit plus longtemps qu'une facture. Il commence par un devis, court sur des mois ou des années et se termine souvent par une renégociation. Qui gère cela proprement perd moins de chiffre pour échéances manquées et réclamations.",
    answer: "Un contrat de nettoyage est géré efficacement quand devis, contrat, planning, preuves, réclamations et factures sont rattachés à une fiche site commune dans un seul système, au lieu de quatre outils et trois dossiers e-mail.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen" },
      { name: "Gérer les contrats de nettoyage", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Cycle de vie",
        heading: "Un contrat de nettoyage a plus d'une ligne.",
        body: [
          "Un contrat de nettoyage commence bien avant la première intervention. Demande, métré, calcul, devis, négociation, signature. Ce n'est qu'après que suit la partie opérationnelle: planification, justificatif, facturation. Et souvent en fin ou milieu: renégociation, réclamation, prestations spéciales, prolongation ou résiliation.",
          "Gérer ces phases dans des systèmes séparés perd le fil régulièrement. Devis dans Word, contrat dans un classeur, planification dans Excel, facture dans la comptabilité, réclamation dans le chat. Chaque transition entre systèmes est une source d'erreur.",
        ],
        bullets: [
          "Demande et métré",
          "Calcul et devis",
          "Signature avec conditions",
          "Planification et justificatif",
          "Facture et encaissement",
          "Réclamation, renégociation, prolongation",
        ],
      },
      {
        eyebrow: "Statut",
        heading: "La gestion des statuts comme base opérationnelle.",
        body: [
          "Le levier principal pour la gestion des contrats est un statut propre par contrat. La calculation est-elle validée? Le devis a-t-il été envoyé? Le contrat est-il signé? Le contrat tourne-t-il proprement? Une facture est-elle en attente? Ces questions se répondent d'un coup d'œil ou pas du tout.",
          "Sans logique de statut, la perte classique arrive dans le trou de transition. Devis envoyé, pas de réponse, pas de relance. Contrat envoyé, pas de signature, pas de suivi. En gestion propre, un contrat bloqué dans un statut devient visible automatiquement.",
        ],
        bullets: [
          "Statut clair par contrat, toujours visible",
          "Alerte précoce en cas de blocage",
          "Échéances et relances automatiques",
          "Transitions entre commercial et opérations propres",
        ],
      },
      {
        eyebrow: "Récurrent",
        heading: "Les contrats récurrents ont une autre logique.",
        body: [
          "Un contrat d'entretien courant ne tourne pas une fois, mais mensuellement ou hebdomadairement. Du point de vue de la gestion, c'est un contrat continu avec de nombreux appels individuels. Facture, justificatif, réclamation se rapportent toujours à une période spécifique, pas au contrat dans son ensemble.",
          "Viennent s'ajouter les spéciales: remise en état deux fois par an, vitrerie quatre fois par an, fin de chantier ponctuelle. Proprement gérées, elles font partie du contrat continu comme lignes séparées, avec propre calculation, justificatif et facturation.",
        ],
        bullets: [
          "Contrat continu avec de nombreux appels",
          "Spéciales comme lignes séparées",
          "Facture par période, pas par contrat",
          "Ajustement prix et indexation documentés",
        ],
      },
      {
        eyebrow: "Digital",
        heading: "Comment Taskey gère les contrats centralement.",
        body: [
          "Dans Taskey, un contrat de nettoyage est une fiche avec une chronologie. Devis, contrat, plan, justificatifs, factures et réclamations sont visibles chronologiquement. Le statut actuel est visible d'un coup d'œil. Sur les contrats récurrents, l'historique montre chaque intervention avec justificatif.",
          "Le commercial voit les contrats existants du même client sur nouvelles demandes. L'opération voit les détails du contrat sur chaque intervention. La compta voit les lignes de facture pour le prochain traitement. L'encadrement voit taux d'occupation et réclamations. Aucun changement de système entre.",
        ],
        bullets: [
          "Contrat comme fiche avec chronologie",
          "Commercial, opérations, compta accèdent au même état",
          "Alerte de statut en cas de blocage",
          "Contrats récurrents avec historique par intervention",
          "Spéciales comme lignes séparées",
        ],
      },
    ],
    faqs: [
      {
        question: "Que contient un contrat de nettoyage?",
        answer:
          "Donneur d'ordre, site, données contractuelles, catalogue de prestations avec fréquences, spéciales, conditions, interlocuteurs, conditions de paiement et historique de toutes les interventions, factures et réclamations. Sur contrats récurrents, également les appels individuels.",
      },
      {
        question: "Comment gérer un contrat d'entretien courant?",
        answer:
          "Comme contrat continu avec de nombreux appels individuels. Le contrat définit conditions, catalogue, fréquences et prix. Chaque intervention est enregistrée comme appel contre le contrat, avec propre justificatif et attribution horaire. Factures mensuelles ou trimestrielles.",
      },
      {
        question: "Comment garder vue avec plusieurs contrats?",
        answer:
          "Avec un système de statut par contrat et une vue centrale. Filtres par statut, client, encadrant ou échéance montrent où agir. Contrats en statut critique comme 'devis envoyé, sans réponse' deviennent visibles automatiquement.",
      },
      {
        question: "Comment lier devis et contrat?",
        answer:
          "Un devis accepté devient le contrat avec les mêmes conditions. Les modifications sont possibles jusqu'à acceptation, ensuite suivies comme avenants. Historique reste propre sans écraser les anciens devis.",
      },
      {
        question: "Comment gérer les spéciales?",
        answer:
          "Comme lignes séparées sur le contrat continu. Remise en état, fin de chantier ou vitrerie ont propre calculation, justificatif et facturation. Rattachées au même client et site mais indépendantes du contrat d'entretien.",
      },
      {
        question: "Comment Taskey aide-t-il à la gestion des contrats?",
        answer:
          "Taskey gère le contrat comme fiche avec chronologie: devis, contrat, interventions, factures, réclamations chronologiquement. Statut d'un coup d'œil, alerte de blocage, récurrents et spéciales gérés séparément. Commercial, opérations et compta dans le même système.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Logiciel pour société de nettoyage",
        description: "Contrat, site, planification et facturation dans un système.",
      },
      {
        href: "/loesungen/reinigungsobjekte-verwalten",
        label: "Gérer les sites de nettoyage",
        description: "Données maîtres comme base des contrats.",
      },
      {
        href: "/rechner/reinigungskosten",
        label: "Calculateur de coûts de nettoyage",
        description: "Du métré à la calculation défendable.",
      },
      {
        href: "/rechner/marge-gebaeudereinigung",
        label: "Calculateur de marge",
        description: "Vérifier la marge par contrat et déduire le prix cible.",
      },
      {
        href: "/features/kalkulation",
        label: "Calcul par site dans Taskey",
        description: "Comment calcul et contrat s'articulent.",
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
      sections={c.sections as unknown as import("@/components/landing/LandingPageTemplate").LandingSection[]}
      faqs={c.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      related={[...c.related] as { href: string; label: string; description?: string }[]}
      newsletter={{
        source: path,
        sourceLabel: NEWSLETTER_SOURCE_LABELS[l],
        labels: NEWSLETTER_LABELS[l],
      }}
    />
  );
}
