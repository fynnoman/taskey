import type { Metadata } from "next";
import LandingPageTemplate, {
  type LandingPageProps,
} from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";

const path = "/vergleich/fortytools-alternative";

const COPY: PageCopy = {
  de: {
    title:
      "Fortytools Alternative | Moderne Lösung für Reinigungsbetriebe | Taskey",
    description:
      "Fortytools-Alternative für Reinigungsfirmen: Taskey kombiniert NFC-Zeiterfassung, Einsatzplanung und Live-Margen in einer App – ab 71 €/Monat, täglich kündbar.",
    ogTitle: "Fortytools Alternative | Moderne Lösung für Reinigungsbetriebe | Taskey",
    ogDescription:
      "NFC-Zeiterfassung, Einsatzplanung, Live-Margen – speziell für Gebäudereinigung im DACH-Raum.",
    twitterTitle: "Fortytools Alternative | Moderne Lösung | Taskey",
    twitterDescription: "NFC, Einsatzplanung und Live-Margen – speziell für Gebäudereinigung.",
  },
  en: {
    title:
      "fortytools Alternative | Modern Solution for Cleaning Companies | Taskey",
    description:
      "fortytools alternative for cleaning companies: Taskey combines NFC time tracking, scheduling and live margins in one app – from €71/month, cancel any day.",
    ogTitle: "fortytools Alternative | Modern Solution for Cleaning Companies | Taskey",
    ogDescription:
      "NFC time tracking, scheduling, live margins – purpose-built for building cleaning in the DACH region.",
    twitterTitle: "fortytools Alternative | Modern Solution | Taskey",
    twitterDescription: "NFC, scheduling and live margins – purpose-built for building cleaning.",
  },
  fr: {
    title:
      "Alternative à fortytools | Solution moderne pour entreprises de nettoyage | Taskey",
    description:
      "Alternative à fortytools pour les entreprises de nettoyage : Taskey combine pointage NFC, planification et marges en direct dans une seule app – dès 71 €/mois, résiliable au jour le jour.",
    ogTitle: "Alternative à fortytools | Solution moderne pour entreprises de nettoyage | Taskey",
    ogDescription:
      "Pointage NFC, planification, marges en direct – conçu pour le nettoyage de bâtiments dans la région DACH.",
    twitterTitle: "Alternative à fortytools | Solution moderne | Taskey",
    twitterDescription: "NFC, planification et marges en direct – conçu pour le nettoyage de bâtiments.",
  },
};

type PageContent = Omit<LandingPageProps, "path">;

const CONTENT: Record<Locale, PageContent> = {
  de: {
    title: "Fortytools Alternative",
    eyebrow: "Vergleich · Fortytools",
    h1: "Fortytools Alternative —",
    h1Accent: "die moderne Lösung für Reinigungsbetriebe.",
    lead: "Fortytools ist eine breit aufgestellte Handwerker-Software. Taskey ist speziell für die Gebäudereinigung gebaut: NFC-Zeiterfassung, Live-Margen pro Objekt, Auftraggeber-Portal und DATEV-Export – ohne Module für Branchen, die Sie nicht brauchen.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Vergleich", url: "https://www.taskeyapp.com/vergleich/fortytools-alternative" },
      { name: "Fortytools Alternative", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Branchen-Fokus",
        heading: "Generischer Handwerk vs. spezialisierter Reinigungs-Fokus.",
        body: [
          "Fortytools bedient eine breite Palette von Handwerksbetrieben – vom Maler über den Schreiner bis zur Reinigung. Das hat Vorteile (viel Flexibilität), aber auch Nachteile: Funktionen, die für Ihren Betrieb irrelevant sind, machen die Oberfläche unübersichtlich und treiben den Preis.",
          "Taskey ist konsequent auf Gebäudereinigung zugeschnitten. Sie sehen nur, was Reinigungsbetriebe brauchen – kein Material-Modul für Holzbearbeitung, keine Aufmaß-Funktionen für Tapezierer.",
        ],
      },
      {
        eyebrow: "Direkter Vergleich",
        heading: "Was bei Taskey von Haus aus drin ist.",
        bullets: [
          "NFC-Zeiterfassung mit GPS und Offline-Sync (nativ, kein Add-on)",
          "Live-Margen pro Auftrag in Echtzeit",
          "Auftraggeber-Portal mit eigenem Login",
          "Objektakten mit Sonderwünschen, Fotos und Schlüsseldokumentation",
          "Rundgang-Kontrolle per Tag pro Etage",
          "Mehrsprachige Mitarbeiter-App",
          "Done-for-You Setup in 48 Stunden",
          "Täglich kündbar",
        ],
      },
      {
        eyebrow: "Wann Fortytools dennoch passt",
        heading: "Ehrlich: wo Fortytools überlegen ist.",
        body: [
          "Wenn Ihr Betrieb mehrere Gewerke gleichzeitig anbietet (z.B. Reinigung + Hausmeisterservice + kleine Renovierungen) und Sie wirklich eine einheitliche Plattform für all das suchen, kann Fortytools die richtige Wahl sein.",
          "Wenn Sie aber zu 80 % oder mehr in der Gebäudereinigung tätig sind, sparen Sie mit Taskey Komplexität, Schulungszeit und Geld.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "So läuft der Wechsel ab.",
        body: [
          "Aus Fortytools exportieren Sie Stammdaten zu Kunden, Mitarbeitenden und Verträgen. Wir importieren diese in Taskey und richten den Account ein. Für 2–4 Wochen können Sie beide Tools parallel nutzen, bevor Sie Fortytools final beenden.",
          "Offene Rechnungen aus Fortytools laufen wie gehabt weiter – Taskey beginnt mit neuen Aufträgen und Einsätzen ab Go-Live-Datum.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hat Fortytools auch eine native NFC-Zeiterfassung für Reinigung?",
        answer:
          "Fortytools bietet GPS-basierte und manuelle Zeiterfassung. NFC-Workflows sind nicht so tief integriert wie bei Taskey, wo NFC der zentrale Workflow im Reinigungsalltag ist.",
      },
      {
        question: "Was kostet Taskey im Vergleich zu Fortytools?",
        answer:
          "Taskey startet bei 71 € pro Monat inkl. unbegrenzter Mitarbeiterzahl plus 4,40 € pro aktivem Objekt. Fortytools ist je nach Modulauswahl ähnlich oder teurer. Ein verbindlicher Vergleich hängt von Ihrer Betriebsgröße ab – sprechen Sie uns an.",
      },
      {
        question: "Kann ich die Migration selbst durchführen?",
        answer:
          "Sie können – wir übernehmen es aber im Done-for-You Setup für Sie. Das spart Ihnen einen halben Arbeitstag und vermeidet Migrationsfehler.",
      },
      {
        question: "Was ist mit DATEV-Schnittstelle in beiden Tools?",
        answer:
          "Beide bieten einen DATEV-Export. Bei Taskey ist er in jedem Tarif ab Business enthalten – ohne Aufpreis. Format: DATEV-Standard, direkter Import beim Steuerberater.",
      },
      {
        question: "Werden Mitarbeitende mit der Umstellung zurechtkommen?",
        answer:
          "Ja. Die Taskey-App ist bewusst minimalistisch und mehrsprachig. Die meisten Reinigungskräfte sind nach dem ersten Tap am NFC-Tag produktiv.",
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
        description: "Wenn Sie eher ERP-Lösungen evaluieren.",
      },
      {
        href: "/vergleich/blink-alternative",
        label: "Blink Alternative",
        description: "Wenn Sie eine Frontline-Worker-Plattform vergleichen.",
      },
      {
        href: "/loesungen/unterhaltsreinigung",
        label: "Unterhaltsreinigung",
        description: "Die wichtigste Branche, für die Taskey entwickelt wurde.",
      },
    ],
  },
  en: {
    title: "fortytools Alternative",
    eyebrow: "Comparison · fortytools",
    h1: "fortytools alternative —",
    h1Accent: "the modern solution for cleaning companies.",
    lead: "fortytools is a broadly positioned software for the trades. Taskey is purpose-built for building cleaning: NFC time tracking, live margins per site, a client portal and DATEV export – without modules for industries you do not need.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Comparison", url: "https://www.taskeyapp.com/vergleich/fortytools-alternative" },
      { name: "fortytools Alternative", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Industry focus",
        heading: "Generic trades vs. specialised cleaning focus.",
        body: [
          "fortytools serves a broad range of trades – from painters to carpenters to cleaners. That brings advantages (lots of flexibility), but also drawbacks: features that are irrelevant for your business clutter the interface and push up the price.",
          "Taskey is consistently tailored to building cleaning. You only see what cleaning companies need – no materials module for woodworking, no measurement features for wallpaperers.",
        ],
      },
      {
        eyebrow: "Head-to-head",
        heading: "What is included with Taskey out of the box.",
        bullets: [
          "NFC time tracking with GPS and offline sync (native, no add-on)",
          "Live margins per job in real time",
          "Client portal with its own login",
          "Site files with special requests, photos and key documentation",
          "Walkthrough checks via tag per floor",
          "Multilingual employee app",
          "Done-for-You setup in 48 hours",
          "Cancel any day",
        ],
      },
      {
        eyebrow: "When fortytools is still a fit",
        heading: "Honestly: where fortytools is stronger.",
        body: [
          "If your business covers several trades at the same time (e.g. cleaning + caretaking + small renovations) and you really need one unified platform for all of it, fortytools can be the right choice.",
          "But if you are 80 % or more focused on building cleaning, Taskey saves you complexity, training time and money.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "How the switch works.",
        body: [
          "From fortytools you export master data on customers, employees and contracts. We import them into Taskey and set up your account. For 2–4 weeks you can run both tools in parallel before you finally end fortytools.",
          "Open invoices from fortytools continue as before – Taskey starts with new jobs and assignments from the go-live date.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does fortytools also have native NFC time tracking for cleaning?",
        answer:
          "fortytools offers GPS-based and manual time tracking. NFC workflows are not as deeply integrated as in Taskey, where NFC is the central workflow in everyday cleaning work.",
      },
      {
        question: "What does Taskey cost compared to fortytools?",
        answer:
          "Taskey starts at €71 per month including unlimited employees plus €4.40 per active site. fortytools is similar or more expensive depending on the modules you choose. A binding comparison depends on the size of your business – get in touch.",
      },
      {
        question: "Can I do the migration myself?",
        answer:
          "You can – but we take care of it for you in the Done-for-You setup. That saves you half a working day and avoids migration errors.",
      },
      {
        question: "What about the DATEV interface in both tools?",
        answer:
          "Both offer a DATEV export. With Taskey it is included from Business upwards – at no extra cost. Format: DATEV standard, ready for direct import at your tax advisor.",
      },
      {
        question: "Will my staff cope with the switch?",
        answer:
          "Yes. The Taskey app is deliberately minimalistic and multilingual. Most cleaners are productive after the first tap on an NFC tag.",
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
        description: "If you are rather evaluating ERP solutions.",
      },
      {
        href: "/vergleich/blink-alternative",
        label: "Blink Alternative",
        description: "If you are comparing a frontline worker platform.",
      },
      {
        href: "/loesungen/unterhaltsreinigung",
        label: "Maintenance cleaning",
        description: "The most important segment Taskey was built for.",
      },
    ],
  },
  fr: {
    title: "Alternative à fortytools",
    eyebrow: "Comparatif · fortytools",
    h1: "Alternative à fortytools —",
    h1Accent: "la solution moderne pour les entreprises de nettoyage.",
    lead: "fortytools est un logiciel artisan généraliste. Taskey est conçu spécifiquement pour le nettoyage de bâtiments : pointage NFC, marges en direct par site, portail client et export DATEV – sans modules pour des métiers dont vous n'avez pas besoin.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Comparatif", url: "https://www.taskeyapp.com/vergleich/fortytools-alternative" },
      { name: "Alternative à fortytools", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Focus métier",
        heading: "Artisan généraliste vs. focus nettoyage spécialisé.",
        body: [
          "fortytools s'adresse à une large palette d'entreprises artisanales – du peintre au menuisier en passant par le nettoyage. Cela présente des avantages (beaucoup de flexibilité) mais aussi des inconvénients : les fonctions inutiles pour votre activité encombrent l'interface et font monter le prix.",
          "Taskey est résolument taillé pour le nettoyage de bâtiments. Vous ne voyez que ce dont une entreprise de nettoyage a besoin – pas de module matériaux pour le travail du bois, pas de fonctions de métré pour la pose de papier peint.",
        ],
      },
      {
        eyebrow: "Comparatif direct",
        heading: "Ce qui est inclus chez Taskey de base.",
        bullets: [
          "Pointage NFC avec GPS et synchronisation hors ligne (natif, sans add-on)",
          "Marges en direct par mission en temps réel",
          "Portail donneur d'ordre avec son propre identifiant",
          "Dossiers de site avec demandes particulières, photos et documentation des clés",
          "Contrôle de tournée par tag à chaque étage",
          "Application mobile multilingue",
          "Mise en place Done-for-You en 48 heures",
          "Résiliable au jour le jour",
        ],
      },
      {
        eyebrow: "Quand fortytools reste pertinent",
        heading: "Franchement : là où fortytools est supérieur.",
        body: [
          "Si votre entreprise propose plusieurs métiers en parallèle (par ex. nettoyage + conciergerie + petites rénovations) et que vous cherchez réellement une plateforme unifiée pour tout cela, fortytools peut être le bon choix.",
          "Mais si 80 % ou plus de votre activité est le nettoyage de bâtiments, Taskey vous fait gagner en simplicité, en temps de formation et en argent.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "Comment se déroule la bascule.",
        body: [
          "Depuis fortytools, vous exportez les données de base : clients, employés, contrats. Nous les importons dans Taskey et configurons le compte. Pendant 2 à 4 semaines, vous pouvez utiliser les deux outils en parallèle avant d'arrêter définitivement fortytools.",
          "Les factures ouvertes dans fortytools continuent comme avant – Taskey démarre avec les nouvelles missions et interventions à partir de la date de go-live.",
        ],
      },
    ],
    faqs: [
      {
        question: "fortytools dispose-t-il aussi d'un pointage NFC natif pour le nettoyage ?",
        answer:
          "fortytools propose un pointage GPS et manuel. Les workflows NFC ne sont pas aussi profondément intégrés que chez Taskey, où le NFC est le workflow central au quotidien.",
      },
      {
        question: "Combien coûte Taskey par rapport à fortytools ?",
        answer:
          "Taskey démarre à 71 € par mois avec un nombre illimité d'employés, plus 4,40 € par site actif. fortytools est similaire ou plus cher selon les modules choisis. Une comparaison ferme dépend de la taille de votre entreprise – contactez-nous.",
      },
      {
        question: "Puis-je faire la migration moi-même ?",
        answer:
          "Vous le pouvez – mais nous nous en chargeons pour vous dans la mise en place Done-for-You. Cela vous épargne une demi-journée et évite les erreurs de migration.",
      },
      {
        question: "Qu'en est-il de l'interface DATEV dans les deux outils ?",
        answer:
          "Les deux proposent un export DATEV. Chez Taskey, il est inclus à partir de la formule Business – sans surcoût. Format : standard DATEV, import direct chez l'expert-comptable.",
      },
      {
        question: "Mes employés s'adapteront-ils au changement ?",
        answer:
          "Oui. L'application Taskey est volontairement minimaliste et multilingue. La plupart des agents sont productifs dès le premier tap sur un tag NFC.",
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
        description: "Si vous évaluez plutôt des solutions ERP.",
      },
      {
        href: "/vergleich/blink-alternative",
        label: "Alternative à Blink",
        description: "Si vous comparez une plateforme frontline worker.",
      },
      {
        href: "/loesungen/unterhaltsreinigung",
        label: "Nettoyage d'entretien",
        description: "Le segment principal pour lequel Taskey a été conçu.",
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
