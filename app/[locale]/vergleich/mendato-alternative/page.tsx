import type { Metadata } from "next";
import LandingPageTemplate, {
  type LandingPageProps,
} from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";

const path = "/vergleich/mendato-alternative";

const COPY: PageCopy = {
  de: {
    title: "Mendato Alternative | Taskey im direkten Vergleich | Taskey",
    description:
      "Mendato-Alternative: Taskey bietet NFC-Zeiterfassung, Live-Margen, Auftraggeber-Portal und DATEV-Export in einer App. Speziell für Gebäudereinigung im DACH-Raum.",
    ogTitle: "Mendato Alternative | Taskey im direkten Vergleich | Taskey",
    ogDescription:
      "NFC, Live-Margen, Auftraggeber-Portal und DATEV-Export – speziell für Gebäudereinigung.",
    twitterTitle: "Mendato Alternative | Taskey im direkten Vergleich",
    twitterDescription: "Speziell für Gebäudereinigung – mit nativer NFC-Zeiterfassung.",
  },
  en: {
    title: "Mendato Alternative | Taskey Head-to-Head | Taskey",
    description:
      "Mendato alternative: Taskey offers NFC time tracking, live margins, a client portal and DATEV export in one app. Purpose-built for building cleaning in the DACH region.",
    ogTitle: "Mendato Alternative | Taskey Head-to-Head | Taskey",
    ogDescription:
      "NFC, live margins, client portal and DATEV export – purpose-built for building cleaning.",
    twitterTitle: "Mendato Alternative | Taskey Head-to-Head",
    twitterDescription: "Purpose-built for building cleaning – with native NFC time tracking.",
  },
  fr: {
    title: "Alternative à Mendato | Taskey en comparatif direct | Taskey",
    description:
      "Alternative à Mendato : Taskey propose pointage NFC, marges en direct, portail client et export DATEV dans une seule app. Conçu pour le nettoyage de bâtiments dans la région DACH.",
    ogTitle: "Alternative à Mendato | Taskey en comparatif direct | Taskey",
    ogDescription:
      "NFC, marges en direct, portail client et export DATEV – conçu pour le nettoyage de bâtiments.",
    twitterTitle: "Alternative à Mendato | Taskey en comparatif direct",
    twitterDescription: "Conçu pour le nettoyage de bâtiments – avec pointage NFC natif.",
  },
};

type PageContent = Omit<LandingPageProps, "path">;

const CONTENT: Record<Locale, PageContent> = {
  de: {
    title: "Mendato Alternative",
    eyebrow: "Vergleich · Mendato",
    h1: "Mendato Alternative —",
    h1Accent: "Taskey im direkten Vergleich.",
    lead: "Mendato bietet solide Branchensoftware für die Gebäudereinigung. Taskey verfolgt einen moderneren, fokussierteren Ansatz: All-in-One in einer App, ohne Modul-Aufpreise, mit nativer NFC-Zeiterfassung, Live-Margen und Auftraggeber-Portal – ab 71 € pro Monat.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Vergleich", url: "https://www.taskeyapp.com/vergleich/mendato-alternative" },
      { name: "Mendato Alternative", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Was Inhaber typischerweise nervt",
        heading: "Was Sie an Mendato womöglich frustriert.",
        intro:
          "In Gesprächen mit Inhabern, die von Mendato zu uns wechseln, hören wir immer wieder dieselben Punkte.",
        bullets: [
          "Modulpreise summieren sich – schwer kalkulierbar",
          "Klassische Desktop-Optik, fühlt sich an wie 2010",
          "Mitarbeiter-App nicht selbsterklärend, Schulung nötig",
          "Auftraggeber-Portal nur kostenpflichtig",
          "Setup und Migration dauern oft Wochen",
        ],
      },
      {
        eyebrow: "Direkter Vergleich",
        heading: "Was Taskey anders macht.",
        bullets: [
          "All-in-One zum Festpreis – ohne Modul-Add-ons",
          "Modernes UI, mobile-first, intuitive Bedienung",
          "Native NFC-Zeiterfassung in jedem Tarif",
          "Auftraggeber-Portal (Taskey Share) ab Professional",
          "Done-for-You Setup in 48 Stunden",
          "Täglich kündbar – kein Jahresvertrag",
          "Mehrsprachige App: DE/TR/RU/PL/EN/FR",
        ],
      },
      {
        eyebrow: "Wann Mendato dennoch sinnvoll ist",
        heading: "Ehrliche Worte.",
        body: [
          "Mendato hat einen großen Funktionsumfang, der über die Reinigung hinausgeht – etwa für Industrie- und Handwerksbetriebe mit komplexen Lager- und Materialprozessen. Wer das tatsächlich braucht, ist mit Mendato gut bedient.",
          "Wer aber eine fokussierte Lösung für die Gebäudereinigung sucht, die das Team morgen früh um 5 Uhr ohne Schulung bedienen kann, fährt mit Taskey schneller und günstiger.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "Was beim Wechsel passiert.",
        body: [
          "Wir übernehmen Stammdaten, Objektzuordnungen und Verträge aus Ihrem Mendato-Export. Stundenkonten und Lohndaten können – je nach Mendato-Konfiguration – ebenfalls importiert werden.",
          "Parallel-Betrieb für 2–4 Wochen, dann sauberer Cut. Sie zahlen während dieser Phase nur Taskey – wir geben Ihnen einen Migrationsmonat als Übergang.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kann ich Stundendaten aus Mendato übernehmen?",
        answer:
          "Ja, soweit ein Export aus Mendato möglich ist. Wir lesen die Daten ein und ordnen sie den neuen Taskey-Mitarbeitern und Objekten zu.",
      },
      {
        question: "Bietet Taskey wirklich alles, was ich aus Mendato kenne?",
        answer:
          "Die Kernfunktionen für Gebäudereinigung – Zeiterfassung, Einsatzplanung, Objektakte, Angebote, Rechnungen, DATEV-Export, Auftraggeber-Portal – ja. Sehr spezielle Industrie- oder Handwerksprozesse sind bewusst nicht abgebildet, weil Taskey auf Reinigung fokussiert ist.",
      },
      {
        question: "Was kostet ein Wechsel?",
        answer:
          "Das Done-for-You Setup ist im Tarif enthalten. Sie zahlen nur die Monatsgebühr ab 71 € – keine Setup-Pauschale.",
      },
      {
        question: "Habe ich Zugriff auf alte Daten, wenn ich Mendato kündige?",
        answer:
          "Wir empfehlen, eine vollständige Datensicherung aus Mendato zu ziehen, bevor Sie den Vertrag beenden. Den Import in Taskey übernehmen wir komplett.",
      },
      {
        question: "Wie schnell sind alle Mitarbeitenden produktiv?",
        answer:
          "Die meisten Teams sind nach einer 30-Minuten-Einführung produktiv. Die App ist so simpel gestaltet, dass keine Schulung im klassischen Sinne nötig ist.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Software für Gebäudereinigung",
        description: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
      },
      {
        href: "/vergleich/zvoove-alternative",
        label: "Zvoove Alternative",
        description: "Vergleich gegen die klassische ERP-Lösung im Branchenumfeld.",
      },
      {
        href: "/vergleich/fortytools-alternative",
        label: "Fortytools Alternative",
        description: "Wie Taskey gegen Fortytools für Reinigungsbetriebe abschneidet.",
      },
      {
        href: "/pricing",
        label: "Taskey-Preise",
        description: "Beginner ab 71 €, Professional ab 189 €, Business ab 257 € pro Monat.",
      },
    ],
  },
  en: {
    title: "Mendato Alternative",
    eyebrow: "Comparison · Mendato",
    h1: "Mendato alternative —",
    h1Accent: "Taskey head-to-head.",
    lead: "Mendato offers solid industry software for building cleaning. Taskey takes a more modern, more focused approach: all-in-one in a single app, no module surcharges, with native NFC time tracking, live margins and a client portal – from €71 per month.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Comparison", url: "https://www.taskeyapp.com/vergleich/mendato-alternative" },
      { name: "Mendato Alternative", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "What typically frustrates owners",
        heading: "What may frustrate you about Mendato.",
        intro:
          "In conversations with owners who switch from Mendato to us, we keep hearing the same points.",
        bullets: [
          "Module pricing adds up – hard to forecast",
          "Classic desktop look, feels like 2010",
          "Employee app is not self-explanatory, training needed",
          "Client portal only as a paid add-on",
          "Setup and migration often take weeks",
        ],
      },
      {
        eyebrow: "Head-to-head",
        heading: "What Taskey does differently.",
        bullets: [
          "All-in-one at a fixed price – no module add-ons",
          "Modern UI, mobile-first, intuitive operation",
          "Native NFC time tracking in every plan",
          "Client portal (Taskey Share) from Professional onwards",
          "Done-for-You setup in 48 hours",
          "Cancel any day – no annual contract",
          "Multilingual app: DE/TR/RU/PL/EN/FR",
        ],
      },
      {
        eyebrow: "When Mendato still makes sense",
        heading: "Honest words.",
        body: [
          "Mendato has a large feature scope that goes beyond cleaning – for example for industrial and trade businesses with complex warehouse and material processes. If you actually need that, Mendato will serve you well.",
          "But if you want a focused solution for building cleaning that your team can use at 5 a.m. tomorrow morning without training, Taskey is faster and cheaper.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "What happens when you switch.",
        body: [
          "We take over master data, site assignments and contracts from your Mendato export. Time accounts and payroll data can – depending on your Mendato configuration – also be imported.",
          "Parallel operation for 2–4 weeks, then a clean cut. During this phase you only pay Taskey – we give you a migration month as a transition.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I take time data from Mendato with me?",
        answer:
          "Yes, as far as an export from Mendato is possible. We read the data in and map it to the new Taskey employees and sites.",
      },
      {
        question: "Does Taskey really offer everything I know from Mendato?",
        answer:
          "The core functions for building cleaning – time tracking, scheduling, site files, quotes, invoices, DATEV export, client portal – yes. Very specialised industrial or trade processes are deliberately not covered, because Taskey is focused on cleaning.",
      },
      {
        question: "What does switching cost?",
        answer:
          "The Done-for-You setup is included in your plan. You only pay the monthly fee from €71 – no setup flat fee.",
      },
      {
        question: "Do I still have access to old data when I cancel Mendato?",
        answer:
          "We recommend taking a full data backup from Mendato before you end the contract. We handle the import into Taskey completely.",
      },
      {
        question: "How quickly are all employees productive?",
        answer:
          "Most teams are productive after a 30-minute introduction. The app is designed so simply that no traditional training is needed.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Software for building cleaning",
        description: "All-in-one industry software: scheduling, NFC proof, time tracking, quotes, invoices, live margins.",
      },
      {
        href: "/vergleich/zvoove-alternative",
        label: "Zvoove Alternative",
        description: "Compared with the classic ERP solution in the industry.",
      },
      {
        href: "/vergleich/fortytools-alternative",
        label: "Fortytools Alternative",
        description: "How Taskey stacks up against fortytools for cleaning companies.",
      },
      {
        href: "/pricing",
        label: "Taskey pricing",
        description: "Beginner from €71, Professional from €189, Business from €257 per month.",
      },
    ],
  },
  fr: {
    title: "Alternative à Mendato",
    eyebrow: "Comparatif · Mendato",
    h1: "Alternative à Mendato —",
    h1Accent: "Taskey en comparatif direct.",
    lead: "Mendato propose un logiciel métier solide pour le nettoyage de bâtiments. Taskey adopte une approche plus moderne et plus ciblée : tout-en-un dans une seule application, sans suppléments de modules, avec pointage NFC natif, marges en direct et portail client – dès 71 € par mois.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Comparatif", url: "https://www.taskeyapp.com/vergleich/mendato-alternative" },
      { name: "Alternative à Mendato", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Ce qui agace typiquement les dirigeants",
        heading: "Ce qui peut vous frustrer chez Mendato.",
        intro:
          "Dans nos échanges avec les dirigeants qui basculent de Mendato vers nous, nous entendons toujours les mêmes points.",
        bullets: [
          "Les prix des modules s'additionnent – difficile à anticiper",
          "Esthétique desktop classique, l'impression d'être en 2010",
          "Application employé peu intuitive, formation requise",
          "Portail donneur d'ordre uniquement payant",
          "Mise en place et migration prennent souvent des semaines",
        ],
      },
      {
        eyebrow: "Comparatif direct",
        heading: "Ce que Taskey fait différemment.",
        bullets: [
          "Tout-en-un à prix fixe – sans modules complémentaires",
          "Interface moderne, mobile-first, utilisation intuitive",
          "Pointage NFC natif dans chaque formule",
          "Portail donneur d'ordre (Taskey Share) à partir de Professional",
          "Mise en place Done-for-You en 48 heures",
          "Résiliable au jour le jour – sans engagement annuel",
          "Application multilingue : DE/TR/RU/PL/EN/FR",
        ],
      },
      {
        eyebrow: "Quand Mendato reste pertinent",
        heading: "Paroles honnêtes.",
        body: [
          "Mendato offre un large périmètre fonctionnel qui dépasse le nettoyage – par exemple pour des entreprises industrielles et artisanales avec des processus complexes de stockage et de matériel. Si vous en avez réellement besoin, Mendato vous servira bien.",
          "Mais si vous cherchez une solution ciblée pour le nettoyage de bâtiments que votre équipe puisse utiliser demain matin à 5 h sans formation, Taskey est plus rapide et moins cher.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "Ce qui se passe lors de la bascule.",
        body: [
          "Nous reprenons les données de base, affectations de site et contrats depuis votre export Mendato. Les comptes d'heures et données de paie peuvent – selon votre configuration Mendato – également être importés.",
          "Fonctionnement en parallèle pendant 2 à 4 semaines, puis bascule nette. Pendant cette phase, vous ne payez que Taskey – nous vous offrons un mois de migration comme période de transition.",
        ],
      },
    ],
    faqs: [
      {
        question: "Puis-je reprendre les données d'heures depuis Mendato ?",
        answer:
          "Oui, dans la mesure où Mendato autorise un export. Nous lisons les données et les associons aux nouveaux employés et sites Taskey.",
      },
      {
        question: "Taskey propose-t-il vraiment tout ce que je connais dans Mendato ?",
        answer:
          "Les fonctions essentielles pour le nettoyage de bâtiments – pointage, planification, dossier de site, devis, factures, export DATEV, portail client – oui. Des processus industriels ou artisanaux très spécifiques ne sont volontairement pas couverts, car Taskey est centré sur le nettoyage.",
      },
      {
        question: "Combien coûte la bascule ?",
        answer:
          "La mise en place Done-for-You est incluse dans la formule. Vous ne payez que la mensualité à partir de 71 € – pas de frais de setup.",
      },
      {
        question: "Aurai-je encore accès à mes anciennes données après avoir résilié Mendato ?",
        answer:
          "Nous recommandons de réaliser une sauvegarde complète des données depuis Mendato avant de mettre fin au contrat. Nous nous occupons entièrement de l'import dans Taskey.",
      },
      {
        question: "À quelle vitesse tous les employés sont-ils productifs ?",
        answer:
          "La plupart des équipes sont productives après une introduction de 30 minutes. L'application est conçue de manière si simple qu'aucune formation au sens classique n'est nécessaire.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Logiciel pour le nettoyage de bâtiments",
        description: "Logiciel métier tout-en-un : planification, preuve NFC, pointage, devis, factures, marges en direct.",
      },
      {
        href: "/vergleich/zvoove-alternative",
        label: "Alternative à Zvoove",
        description: "Comparaison face à la solution ERP classique du secteur.",
      },
      {
        href: "/vergleich/fortytools-alternative",
        label: "Alternative à fortytools",
        description: "Comment Taskey se positionne face à fortytools pour les entreprises de nettoyage.",
      },
      {
        href: "/pricing",
        label: "Tarifs Taskey",
        description: "Beginner dès 71 €, Professional dès 189 €, Business dès 257 € par mois.",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: COPY,
    locale: pickLocale(locale),
    path,
    type: "article",
    image: "/opengraph-image",
  });
}

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
      breadcrumbs={c.breadcrumbs}
      sections={c.sections}
      faqs={c.faqs}
      related={c.related}
    />
  );
}
