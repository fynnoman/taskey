import type { Metadata } from "next";
import LandingPageTemplate, {
  type LandingPageProps,
} from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";

const path = "/vergleich/zvoove-alternative";

const COPY: PageCopy = {
  de: {
    title: "Zvoove Alternative | Warum Reinigungsfirmen zu Taskey wechseln | Taskey",
    description:
      "Zvoove-Alternative für Reinigungsbetriebe: Taskey kombiniert NFC-Zeiterfassung, Einsatzplanung und Live-Margen in einer App – ohne Komplexität, ab 71 €.",
    ogTitle: "Zvoove Alternative | Warum Reinigungsfirmen zu Taskey wechseln | Taskey",
    ogDescription:
      "Taskey vs. Zvoove: einfacher, günstiger, mit NFC und Auftraggeber-Portal. Speziell für Gebäudereinigung.",
    twitterTitle: "Zvoove Alternative | Warum Reinigungsfirmen zu Taskey wechseln | Taskey",
    twitterDescription: "Einfacher, günstiger, mit NFC und Auftraggeber-Portal.",
  },
  en: {
    title: "Zvoove Alternative | Why Cleaning Companies Switch to Taskey | Taskey",
    description:
      "Zvoove alternative for cleaning companies: Taskey combines NFC time tracking, scheduling and live margins in one app – without the complexity, from €71.",
    ogTitle: "Zvoove Alternative | Why Cleaning Companies Switch to Taskey | Taskey",
    ogDescription:
      "Taskey vs. Zvoove: simpler, cheaper, with NFC and a client portal. Purpose-built for building cleaning.",
    twitterTitle: "Zvoove Alternative | Why Cleaning Companies Switch to Taskey | Taskey",
    twitterDescription: "Simpler, cheaper, with NFC and a client portal.",
  },
  fr: {
    title: "Alternative à Zvoove | Pourquoi les entreprises de nettoyage passent à Taskey | Taskey",
    description:
      "Alternative à Zvoove pour les entreprises de nettoyage : Taskey combine pointage NFC, planification et marges en direct dans une seule app – sans la complexité, dès 71 €.",
    ogTitle: "Alternative à Zvoove | Pourquoi les entreprises de nettoyage passent à Taskey | Taskey",
    ogDescription:
      "Taskey vs. Zvoove : plus simple, moins cher, avec NFC et portail client. Conçu pour le nettoyage de bâtiments.",
    twitterTitle: "Alternative à Zvoove | Pourquoi les entreprises de nettoyage passent à Taskey | Taskey",
    twitterDescription: "Plus simple, moins cher, avec NFC et portail client.",
  },
};

type PageContent = Omit<LandingPageProps, "path">;

const CONTENT: Record<Locale, PageContent> = {
  de: {
    title: "Zvoove Alternative",
    eyebrow: "Vergleich · Zvoove",
    h1: "Zvoove Alternative:",
    h1Accent: "warum Reinigungsfirmen zu Taskey wechseln.",
    lead: "Zvoove ist eine etablierte ERP-Lösung – aber für viele Reinigungsbetriebe zu komplex, zu teuer und zu langsam in der Einführung. Taskey bietet eine fokussierte, moderne All-in-One-Plattform speziell für Gebäudereinigung – mit NFC-Zeiterfassung, Live-Margen und Auftraggeber-Portal.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Vergleich", url: "https://www.taskeyapp.com/vergleich/zvoove-alternative" },
      { name: "Zvoove Alternative", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Wann Sie wechseln sollten",
        heading: "Drei typische Wechsel-Auslöser.",
        intro:
          "Reinigungsbetriebe, die von Zvoove zu Taskey wechseln, nennen meist eine dieser drei Gründe.",
        subsections: [
          {
            heading: "1. Zu lange Einarbeitung",
            body:
              "Bei Zvoove dauert die Einführung mit Schulung, Customizing und Datenmigration oft Monate. Taskey ist nach 48 Stunden produktiv – mit Done-for-You Setup durch unser Team.",
          },
          {
            heading: "2. Keine echte NFC-Zeiterfassung",
            body:
              "Taskey ist von Grund auf für NFC-Workflows gebaut: wetterfeste Tags am Objekt, Smartphone-Tap, GPS-Verifikation. Kein Add-on, kein separates Modul.",
          },
          {
            heading: "3. Zu hohe Fixkosten",
            body:
              "ERP-Systeme der Zvoove-Kategorie haben oft hohe Setup-Kosten, Modulpreise und User-Lizenzen. Taskey startet bei 71 € pro Monat inkl. unbegrenzter Mitarbeiterzahl.",
          },
        ],
      },
      {
        eyebrow: "Direkter Vergleich",
        heading: "Taskey vs. Zvoove – die wichtigsten Unterschiede.",
        bullets: [
          "Fokus: Taskey speziell für Gebäudereinigung – Zvoove deckt viele Branchen ab",
          "Einführung: 48 Stunden mit Done-for-You vs. mehrere Monate Customizing",
          "Preis: ab 71 €/Monat vs. mehrtausend Euro Setup + Modulkosten",
          "NFC: nativ integriert vs. optionales Modul oder Eigenbau",
          "Auftraggeber-Portal: in jedem Tarif vs. kostenpflichtige Erweiterung",
          "Mobile App: einfach, mehrsprachig, ohne Schulung – vs. Schulungsbedarf",
          "Kündbarkeit: täglich vs. Jahresverträge",
        ],
      },
      {
        eyebrow: "Was Zvoove besser kann",
        heading: "Ehrliche Worte: wann Zvoove sinnvoller ist.",
        body: [
          "Zvoove ist ein vollwertiges ERP. Wenn Sie ein Großunternehmen mit komplexen Buchhaltungs-Workflows, internationalen Standorten und sehr individuellen Geschäftsprozessen sind, kann Zvoove die richtige Wahl sein – mit dem entsprechenden Preisschild und Schulungsaufwand.",
          "Taskey ist bewusst fokussiert: All-in-One für die Gebäudereinigung im DACH-Raum. Wenn Sie keine 30-seitige Anforderungsliste haben, sondern einfach 'eine Software, die endlich funktioniert', liegen Sie bei uns richtiger.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "Wie der Umstieg konkret abläuft.",
        body: [
          "Wir nehmen Ihren Datenexport aus Zvoove (Objekte, Mitarbeitende, Verträge, offene Rechnungen) entgegen und importieren ihn in Ihren Taskey-Account. Die Migration übernimmt unser Team – Sie müssen nichts abtippen.",
          "Parallel-Betrieb: Sie können beide Systeme in den ersten 2–4 Wochen parallel nutzen, bis alle Kolonnen umgestellt sind. Erst dann beenden Sie den Zvoove-Vertrag.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kann ich meine Daten aus Zvoove zu Taskey migrieren?",
        answer:
          "Ja. Unser Team importiert Objekte, Mitarbeitende, Verträge und offene Rechnungen aus Ihrem Zvoove-Export für Sie – kostenfrei beim Done-for-You Setup.",
      },
      {
        question: "Ist Taskey wirklich günstiger als Zvoove?",
        answer:
          "In der Regel ja, deutlich. Taskey startet bei 71 € pro Monat ohne Setup-Kosten. Zvoove-Setups liegen oft im fünfstelligen Bereich. Im Detail kommt es auf Ihre Anforderungen an – ein Vergleichsangebot machen wir Ihnen gerne.",
      },
      {
        question: "Was, wenn Taskey wider Erwarten doch nicht passt?",
        answer:
          "Taskey ist täglich kündbar. Sie bekommen Ihre Daten als Export jederzeit zurück. Kein Lock-in, keine Strafgebühr.",
      },
      {
        question: "Bietet Taskey auch eine API wie Zvoove?",
        answer:
          "Ja, im Enterprise-Tarif. Schnittstellen zu DATEV, Lexware, sevDesk und weiteren sind möglich – ebenso individuelle Integrationen.",
      },
      {
        question: "Wie lange dauert der Wechsel von Zvoove zu Taskey realistisch?",
        answer:
          "Mit Done-for-You Setup ist Ihr Betrieb in 48 Stunden auf Taskey live. Den Parallelbetrieb können Sie 2–4 Wochen laufen lassen, um sicherzustellen, dass nichts vergessen wurde.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Software für Gebäudereinigung",
        description: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
      },
      {
        href: "/vergleich/blink-alternative",
        label: "Blink Alternative",
        description: "Wie Taskey im Vergleich zu Blink für Gebäudereinigung abschneidet.",
      },
      {
        href: "/vergleich/mendato-alternative",
        label: "Mendato Alternative",
        description: "Direkter Vergleich Taskey vs. Mendato für Reinigungsbetriebe.",
      },
      {
        href: "/features",
        label: "Alle Taskey-Funktionen",
        description: "NFC, Einsatzplanung, Margen, DATEV – im Detail.",
      },
    ],
  },
  en: {
    title: "Zvoove Alternative",
    eyebrow: "Comparison · Zvoove",
    h1: "Zvoove alternative:",
    h1Accent: "why cleaning companies switch to Taskey.",
    lead: "Zvoove is an established ERP solution – but for many cleaning companies too complex, too expensive and too slow to roll out. Taskey offers a focused, modern all-in-one platform purpose-built for building cleaning – with NFC time tracking, live margins and a client portal.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Comparison", url: "https://www.taskeyapp.com/vergleich/zvoove-alternative" },
      { name: "Zvoove Alternative", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "When you should switch",
        heading: "Three typical triggers for switching.",
        intro:
          "Cleaning companies that move from Zvoove to Taskey usually name one of these three reasons.",
        subsections: [
          {
            heading: "1. Onboarding takes too long",
            body:
              "With Zvoove, the rollout with training, customisation and data migration often takes months. Taskey is productive after 48 hours – with a Done-for-You setup by our team.",
          },
          {
            heading: "2. No real NFC time tracking",
            body:
              "Taskey is built for NFC workflows from the ground up: weatherproof tags at the site, smartphone tap, GPS verification. No add-on, no separate module.",
          },
          {
            heading: "3. Fixed costs that are too high",
            body:
              "ERP systems in the Zvoove category often come with high setup costs, module prices and user licences. Taskey starts at €71 per month including unlimited employees.",
          },
        ],
      },
      {
        eyebrow: "Head-to-head",
        heading: "Taskey vs. Zvoove – the key differences.",
        bullets: [
          "Focus: Taskey purpose-built for building cleaning – Zvoove covers many industries",
          "Rollout: 48 hours with Done-for-You vs. several months of customisation",
          "Price: from €71/month vs. several thousand euros setup + module costs",
          "NFC: natively integrated vs. optional module or DIY",
          "Client portal: in every plan vs. paid extension",
          "Mobile app: simple, multilingual, no training – vs. training required",
          "Cancellation: any day vs. annual contracts",
        ],
      },
      {
        eyebrow: "Where Zvoove is stronger",
        heading: "Honest words: when Zvoove makes more sense.",
        body: [
          "Zvoove is a full-blown ERP. If you are a large enterprise with complex accounting workflows, international locations and very individual business processes, Zvoove can be the right choice – with the corresponding price tag and training effort.",
          "Taskey is deliberately focused: all-in-one for building cleaning in the DACH region. If you do not have a 30-page requirements list and just want 'a software that finally works', you are in the right place with us.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "How the switch works in practice.",
        body: [
          "We take your data export from Zvoove (sites, employees, contracts, open invoices) and import it into your Taskey account. Our team handles the migration – you do not have to retype anything.",
          "Parallel operation: you can use both systems side by side for the first 2–4 weeks, until all teams are migrated. Only then do you end the Zvoove contract.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I migrate my data from Zvoove to Taskey?",
        answer:
          "Yes. Our team imports sites, employees, contracts and open invoices from your Zvoove export for you – free of charge as part of the Done-for-You setup.",
      },
      {
        question: "Is Taskey really cheaper than Zvoove?",
        answer:
          "Usually yes, significantly. Taskey starts at €71 per month with no setup cost. Zvoove setups often land in the five-figure range. In detail it depends on your requirements – we are happy to make a comparison offer.",
      },
      {
        question: "What if Taskey unexpectedly does not fit?",
        answer:
          "Taskey is cancellable any day. You get your data back as an export at any time. No lock-in, no penalty fee.",
      },
      {
        question: "Does Taskey also have an API like Zvoove?",
        answer:
          "Yes, on the Enterprise plan. Interfaces to DATEV, Lexware, sevDesk and others are possible – as are individual integrations.",
      },
      {
        question: "Realistically, how long does the switch from Zvoove to Taskey take?",
        answer:
          "With the Done-for-You setup your business is live on Taskey within 48 hours. You can run the parallel operation for 2–4 weeks to make sure nothing has been forgotten.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Software for building cleaning",
        description: "All-in-one industry software: scheduling, NFC proof, time tracking, quotes, invoices, live margins.",
      },
      {
        href: "/vergleich/blink-alternative",
        label: "Blink Alternative",
        description: "How Taskey compares to Blink for building cleaning.",
      },
      {
        href: "/vergleich/mendato-alternative",
        label: "Mendato Alternative",
        description: "Head-to-head Taskey vs. Mendato for cleaning companies.",
      },
      {
        href: "/features",
        label: "All Taskey features",
        description: "NFC, scheduling, margins, DATEV – in detail.",
      },
    ],
  },
  fr: {
    title: "Alternative à Zvoove",
    eyebrow: "Comparatif · Zvoove",
    h1: "Alternative à Zvoove :",
    h1Accent: "pourquoi les entreprises de nettoyage passent à Taskey.",
    lead: "Zvoove est une solution ERP établie – mais, pour de nombreuses entreprises de nettoyage, trop complexe, trop coûteuse et trop lente à déployer. Taskey propose une plateforme tout-en-un, ciblée et moderne, dédiée au nettoyage de bâtiments – avec pointage NFC, marges en direct et portail client.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Comparatif", url: "https://www.taskeyapp.com/vergleich/zvoove-alternative" },
      { name: "Alternative à Zvoove", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Quand vous devriez basculer",
        heading: "Trois déclencheurs typiques de bascule.",
        intro:
          "Les entreprises de nettoyage qui passent de Zvoove à Taskey évoquent généralement l'une de ces trois raisons.",
        subsections: [
          {
            heading: "1. Une mise en route trop longue",
            body:
              "Chez Zvoove, le déploiement avec formation, personnalisation et migration des données prend souvent des mois. Taskey est productif en 48 heures – grâce à la mise en place Done-for-You par notre équipe.",
          },
          {
            heading: "2. Pas de véritable pointage NFC",
            body:
              "Taskey est conçu de zéro pour les workflows NFC : tags résistants aux intempéries sur site, tap smartphone, vérification GPS. Pas d'add-on, pas de module séparé.",
          },
          {
            heading: "3. Des coûts fixes trop élevés",
            body:
              "Les ERP de la catégorie Zvoove impliquent souvent des coûts de mise en place importants, des prix de modules et des licences utilisateurs. Taskey démarre à 71 € par mois avec un nombre illimité d'employés.",
          },
        ],
      },
      {
        eyebrow: "Comparatif direct",
        heading: "Taskey vs. Zvoove – les différences clés.",
        bullets: [
          "Focus : Taskey dédié au nettoyage de bâtiments – Zvoove couvre de nombreux secteurs",
          "Déploiement : 48 heures avec Done-for-You vs. plusieurs mois de personnalisation",
          "Prix : dès 71 €/mois vs. plusieurs milliers d'euros de setup + coûts de modules",
          "NFC : intégré nativement vs. module optionnel ou solution maison",
          "Portail donneur d'ordre : inclus dans chaque formule vs. extension payante",
          "Application mobile : simple, multilingue, sans formation – vs. formation requise",
          "Résiliation : au jour le jour vs. engagements annuels",
        ],
      },
      {
        eyebrow: "Là où Zvoove est plus fort",
        heading: "Paroles honnêtes : quand Zvoove est plus pertinent.",
        body: [
          "Zvoove est un ERP à part entière. Si vous êtes une grande entreprise avec des workflows comptables complexes, des sites internationaux et des processus métiers très spécifiques, Zvoove peut être le bon choix – avec le tarif et l'effort de formation correspondants.",
          "Taskey est volontairement ciblé : tout-en-un pour le nettoyage de bâtiments dans la région DACH. Si vous n'avez pas un cahier des charges de 30 pages mais cherchez simplement « un logiciel qui fonctionne enfin », vous êtes plutôt à la bonne adresse chez nous.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "Comment la bascule se déroule concrètement.",
        body: [
          "Nous récupérons votre export Zvoove (sites, employés, contrats, factures ouvertes) et l'importons dans votre compte Taskey. La migration est prise en charge par notre équipe – vous n'avez rien à ressaisir.",
          "Fonctionnement en parallèle : vous pouvez utiliser les deux systèmes en parallèle pendant les 2 à 4 premières semaines, jusqu'à ce que toutes les équipes soient migrées. Vous résiliez ensuite seulement le contrat Zvoove.",
        ],
      },
    ],
    faqs: [
      {
        question: "Puis-je migrer mes données de Zvoove vers Taskey ?",
        answer:
          "Oui. Notre équipe importe sites, employés, contrats et factures ouvertes depuis votre export Zvoove – gratuitement dans le cadre de la mise en place Done-for-You.",
      },
      {
        question: "Taskey est-il vraiment moins cher que Zvoove ?",
        answer:
          "En règle générale oui, nettement. Taskey démarre à 71 € par mois sans frais de setup. Les setups Zvoove atteignent souvent un montant à cinq chiffres. Dans le détail, cela dépend de vos besoins – nous vous établissons volontiers une comparaison chiffrée.",
      },
      {
        question: "Et si Taskey ne convient finalement pas ?",
        answer:
          "Taskey est résiliable au jour le jour. Vous récupérez vos données sous forme d'export à tout moment. Aucun verrouillage, aucune pénalité.",
      },
      {
        question: "Taskey propose-t-il aussi une API comme Zvoove ?",
        answer:
          "Oui, dans la formule Enterprise. Des interfaces vers DATEV, Lexware, sevDesk et d'autres sont possibles – tout comme des intégrations sur mesure.",
      },
      {
        question: "Combien de temps prend réellement la bascule de Zvoove à Taskey ?",
        answer:
          "Avec la mise en place Done-for-You, votre entreprise est en ligne sur Taskey en 48 heures. Vous pouvez faire tourner les deux systèmes en parallèle pendant 2 à 4 semaines pour vous assurer que rien n'a été oublié.",
      },
    ],
    related: [
      {
        href: "/software-gebaeudereinigung",
        label: "Logiciel pour le nettoyage de bâtiments",
        description: "Logiciel métier tout-en-un : planification, preuve NFC, pointage, devis, factures, marges en direct.",
      },
      {
        href: "/vergleich/blink-alternative",
        label: "Alternative à Blink",
        description: "Comment Taskey se compare à Blink pour le nettoyage de bâtiments.",
      },
      {
        href: "/vergleich/mendato-alternative",
        label: "Alternative à Mendato",
        description: "Comparaison directe Taskey vs. Mendato pour les entreprises de nettoyage.",
      },
      {
        href: "/features",
        label: "Toutes les fonctionnalités Taskey",
        description: "NFC, planification, marges, DATEV – en détail.",
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
