import type { Metadata } from "next";
import LandingPageTemplate, {
  type LandingPageProps,
} from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy, type Locale } from "@/lib/i18n-metadata";

const path = "/vergleich/blink-alternative";

const COPY: PageCopy = {
  de: {
    title:
      "Blink Alternative für Gebäudereinigung | Was Taskey anders macht | Taskey",
    description:
      "Blink-Alternative für Reinigungsbetriebe: Taskey kombiniert NFC, Einsatzplanung, Rechnungen und Auftraggeber-Portal – speziell für Gebäudereinigung im DACH-Raum.",
    ogTitle: "Blink Alternative für Gebäudereinigung | Taskey",
    ogDescription:
      "Was Taskey anders macht als Blink: NFC nativ, Auftraggeber-Portal, DACH-Fokus, deutsche Server.",
    twitterTitle: "Blink Alternative für Gebäudereinigung | Taskey",
    twitterDescription: "NFC nativ, Auftraggeber-Portal, DACH-Fokus.",
  },
  en: {
    title:
      "Blink Alternative for Building Cleaning | What Taskey Does Differently | Taskey",
    description:
      "Blink alternative for cleaning companies: Taskey combines NFC, scheduling, invoicing and a client portal – purpose-built for building cleaning in the DACH region.",
    ogTitle: "Blink Alternative for Building Cleaning | Taskey",
    ogDescription:
      "What Taskey does differently from Blink: native NFC, client portal, DACH focus, German servers.",
    twitterTitle: "Blink Alternative for Building Cleaning | Taskey",
    twitterDescription: "Native NFC, client portal, DACH focus.",
  },
  fr: {
    title:
      "Alternative à Blink pour le nettoyage de bâtiments | Ce que Taskey fait différemment | Taskey",
    description:
      "Alternative à Blink pour les entreprises de nettoyage : Taskey combine NFC, planification, facturation et portail client – conçu pour le nettoyage de bâtiments dans la région DACH.",
    ogTitle: "Alternative à Blink pour le nettoyage de bâtiments | Taskey",
    ogDescription:
      "Ce que Taskey fait différemment de Blink : NFC natif, portail client, focus DACH, serveurs allemands.",
    twitterTitle: "Alternative à Blink pour le nettoyage de bâtiments | Taskey",
    twitterDescription: "NFC natif, portail client, focus DACH.",
  },
};

type PageContent = Omit<LandingPageProps, "path">;

const CONTENT: Record<Locale, PageContent> = {
  de: {
    title: "Blink Alternative",
    eyebrow: "Vergleich · Blink",
    h1: "Blink Alternative für Gebäudereinigung —",
    h1Accent: "was Taskey anders macht.",
    lead: "Blink ist eine starke Plattform für deskless workers – Taskey ist die spezialisierte All-in-One-Lösung für Gebäudereinigung im DACH-Raum. Mit nativer NFC-Zeiterfassung, Auftraggeber-Portal, deutscher DSGVO-Compliance und einer Bedienung, die auch ohne Schulung sitzt.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Vergleich", url: "https://www.taskeyapp.com/vergleich/blink-alternative" },
      { name: "Blink Alternative", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Worauf es Reinigungsfirmen ankommt",
        heading: "Eine generische Worker-App reicht nicht.",
        body: [
          "Blink ist großartig, wenn Sie hauptsächlich Kommunikation, News und einen App-basierten Zugang für Frontline-Mitarbeitende suchen. Für die Spezial-Anforderungen einer Reinigungsfirma reicht das aber nicht: Sie brauchen NFC-Zeiterfassung, Objektakten, Rundgang-Nachweise, Marge pro Auftrag, DATEV-Export und ein Auftraggeber-Portal.",
          "Genau hier ist Taskey gebaut: nicht als generische Worker-Plattform mit Reinigungs-Plugin, sondern als All-in-One-Lösung speziell für Gebäudereiniger.",
        ],
      },
      {
        eyebrow: "Direkter Vergleich",
        heading: "Was Taskey kann, was Blink nicht out-of-the-box bietet.",
        bullets: [
          "Native NFC-Zeiterfassung mit GPS und Offline-Sync",
          "Objektakten mit Sonderwünschen und Fotos pro Objekt",
          "Live-Margen pro Auftrag in Echtzeit",
          "Auftraggeber-Zugang (Taskey Share) mit eigenem Login",
          "Angebote, Wartungsverträge, Rechnungen",
          "DATEV-Export im deutschen Standardformat",
          "Server in Deutschland, AVV inkl., DACH-fokussiert",
          "Done-for-You Setup in 48 Stunden",
        ],
      },
      {
        eyebrow: "Was Blink besser kann",
        heading: "Ehrlich: wann Blink die richtige Wahl ist.",
        body: [
          "Wenn Sie eine breite Belegschaft jenseits der Reinigung haben (z.B. Pflege, Logistik, Einzelhandel) und vor allem Kommunikation und Engagement im Vordergrund stehen, ist Blink gut aufgestellt. Auch für sehr große internationale Konzerne mit eigenen Customizing-Teams ist Blink stark.",
          "Wenn Ihr Geschäft aber Gebäudereinigung im DACH-Raum ist und Sie eine fertige Lösung statt einer Plattform wollen, sparen Sie mit Taskey Monate an Setup und mehrere tausend Euro an Customizing.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "Wechsel von Blink: kein Datenverlust.",
        body: [
          "Mitarbeiterstammdaten, Objektzuordnungen und Zeitlogs werden – soweit aus Blink exportierbar – in Taskey importiert. Alles, was nicht direkt aus Blink kommt, wird im Done-for-You Setup mit Ihnen erfasst.",
          "In der Übergangsphase können beide Systeme parallel laufen, damit kein Einsatz durchs Raster fällt. Nach 2–4 Wochen ist die Umstellung abgeschlossen.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hat Blink eine eigene NFC-Zeiterfassung?",
        answer:
          "Blink ist primär eine Worker-Engagement- und Kommunikationsplattform. NFC-Zeiterfassung ist kein nativer Kernbestandteil – bei Taskey ist sie das Herzstück.",
      },
      {
        question: "Welche Sprachen unterstützt Taskey für meine Reinigungskräfte?",
        answer:
          "Taskey ist auf Deutsch, Türkisch, Russisch, Polnisch, Englisch und Französisch verfügbar – die typischen Sprachen in deutschen Reinigungsbetrieben.",
      },
      {
        question: "Kann ich aus Blink direkt in Taskey importieren?",
        answer:
          "Wenn Blink einen Export der Stammdaten erlaubt, importieren wir diese im Done-for-You Setup. Andernfalls erfassen wir gemeinsam mit Ihnen die Kerndaten – das dauert üblicherweise wenige Stunden.",
      },
      {
        question: "Gibt es bei Taskey ebenfalls Mitarbeiter-Kommunikation?",
        answer:
          "Ja. Team-Chat, Push-Benachrichtigungen, Aushänge und individuelle Mitarbeiter-News sind enthalten – fokussiert auf den Reinigungsalltag.",
      },
      {
        question: "Sind die Daten DSGVO-konform in Deutschland gespeichert?",
        answer:
          "Ja. Alle Daten liegen auf deutschen Servern, AVV wird automatisch mit dem Vertrag bereitgestellt, und der Datenschutzbeauftragte ist erreichbar.",
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
        description: "Wie Taskey im Vergleich zur klassischen ERP-Lösung steht.",
      },
      {
        href: "/vergleich/fortytools-alternative",
        label: "Fortytools Alternative",
        description: "Direkter Vergleich mit Fortytools für Reinigungsbetriebe.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "NFC Zeiterfassung im Detail",
        description: "Warum NFC der Kern jeder modernen Reinigungs-App ist.",
      },
    ],
  },
  en: {
    title: "Blink Alternative",
    eyebrow: "Comparison · Blink",
    h1: "Blink alternative for building cleaning —",
    h1Accent: "what Taskey does differently.",
    lead: "Blink is a strong platform for deskless workers – Taskey is the specialised all-in-one solution for building cleaning in the DACH region. With native NFC time tracking, a client portal, German DSGVO compliance and a UX that works without training.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Comparison", url: "https://www.taskeyapp.com/vergleich/blink-alternative" },
      { name: "Blink Alternative", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "What matters to cleaning companies",
        heading: "A generic worker app is not enough.",
        body: [
          "Blink is great if you mainly need communication, news and an app-based access for frontline staff. But that is not enough for the specific requirements of a cleaning company: you need NFC time tracking, site files, walkthrough proofs, margin per job, DATEV export and a client portal.",
          "That is exactly what Taskey is built for: not as a generic worker platform with a cleaning plugin, but as an all-in-one solution purpose-built for building cleaners.",
        ],
      },
      {
        eyebrow: "Head-to-head",
        heading: "What Taskey does that Blink does not offer out of the box.",
        bullets: [
          "Native NFC time tracking with GPS and offline sync",
          "Site files with special requests and photos per site",
          "Live margins per job in real time",
          "Client access (Taskey Share) with its own login",
          "Quotes, maintenance contracts, invoices",
          "DATEV export in the German standard format",
          "Servers in Germany, DPA included, DACH-focused",
          "Done-for-You setup in 48 hours",
        ],
      },
      {
        eyebrow: "Where Blink is stronger",
        heading: "Honestly: when Blink is the right choice.",
        body: [
          "If you run a broad workforce beyond cleaning (e.g. care, logistics, retail) and your priority is communication and engagement, Blink is well positioned. Blink is also strong for very large international corporates with their own customisation teams.",
          "But if your business is building cleaning in the DACH region and you want a finished solution rather than a platform, Taskey saves you months of setup and several thousand euros in customisation.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "Switching from Blink: no data loss.",
        body: [
          "Employee master data, site assignments and time logs are imported into Taskey – as far as Blink allows export. Anything that does not come directly from Blink is captured together with you during the Done-for-You setup.",
          "During the transition both systems can run in parallel so no shift falls through the cracks. After 2–4 weeks the switch is complete.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Blink have its own NFC time tracking?",
        answer:
          "Blink is primarily a worker engagement and communication platform. NFC time tracking is not a native core component – at Taskey it is the heart of the product.",
      },
      {
        question: "Which languages does Taskey support for my cleaners?",
        answer:
          "Taskey is available in German, Turkish, Russian, Polish, English and French – the typical languages in German cleaning companies.",
      },
      {
        question: "Can I import directly from Blink into Taskey?",
        answer:
          "If Blink allows an export of your master data, we import it during the Done-for-You setup. Otherwise we capture the core data together with you – that usually takes a few hours.",
      },
      {
        question: "Does Taskey also offer employee communication?",
        answer:
          "Yes. Team chat, push notifications, postings and individual employee news are included – focused on the cleaning workday.",
      },
      {
        question: "Is data stored DSGVO-compliant in Germany?",
        answer:
          "Yes. All data is on German servers, the DPA is automatically provided with the contract and the data protection officer is reachable.",
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
        description: "How Taskey compares to the classic ERP solution.",
      },
      {
        href: "/vergleich/fortytools-alternative",
        label: "Fortytools Alternative",
        description: "Head-to-head with fortytools for cleaning companies.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "NFC time tracking in detail",
        description: "Why NFC is the core of any modern cleaning app.",
      },
    ],
  },
  fr: {
    title: "Alternative à Blink",
    eyebrow: "Comparatif · Blink",
    h1: "Alternative à Blink pour le nettoyage de bâtiments —",
    h1Accent: "ce que Taskey fait différemment.",
    lead: "Blink est une plateforme solide pour les travailleurs sans bureau – Taskey est la solution tout-en-un spécialisée pour le nettoyage de bâtiments dans la région DACH. Avec pointage NFC natif, portail client, conformité DSGVO allemande et une prise en main qui fonctionne sans formation.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Comparatif", url: "https://www.taskeyapp.com/vergleich/blink-alternative" },
      { name: "Alternative à Blink", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Ce qui compte pour les entreprises de nettoyage",
        heading: "Une application worker générique ne suffit pas.",
        body: [
          "Blink est excellent si vous cherchez principalement de la communication, des actualités et un accès via application pour les équipes terrain. Mais cela ne couvre pas les exigences spécifiques d'une entreprise de nettoyage : pointage NFC, dossiers de site, preuves de tournée, marge par mission, export DATEV et portail client.",
          "C'est exactement pour cela que Taskey est conçu : pas comme une plateforme worker générique avec un plug-in de nettoyage, mais comme une solution tout-en-un dédiée aux entreprises de nettoyage de bâtiments.",
        ],
      },
      {
        eyebrow: "Comparatif direct",
        heading: "Ce que Taskey offre et que Blink ne propose pas out-of-the-box.",
        bullets: [
          "Pointage NFC natif avec GPS et synchronisation hors ligne",
          "Dossiers de site avec demandes particulières et photos par site",
          "Marges en direct par mission, en temps réel",
          "Accès donneur d'ordre (Taskey Share) avec son propre identifiant",
          "Devis, contrats de maintenance, factures",
          "Export DATEV au format standard allemand",
          "Serveurs en Allemagne, contrat de sous-traitance inclus, focus DACH",
          "Mise en place Done-for-You en 48 heures",
        ],
      },
      {
        eyebrow: "Là où Blink est plus fort",
        heading: "Franchement : quand Blink est le bon choix.",
        body: [
          "Si vous avez une main-d'œuvre large au-delà du nettoyage (par ex. soins, logistique, retail) et que la priorité est la communication et l'engagement, Blink est bien positionné. Blink est également solide pour les très grands groupes internationaux disposant de leurs propres équipes de personnalisation.",
          "Mais si votre activité est le nettoyage de bâtiments dans la région DACH et que vous voulez une solution finie plutôt qu'une plateforme, Taskey vous fait gagner des mois de mise en place et plusieurs milliers d'euros de personnalisation.",
        ],
      },
      {
        eyebrow: "Migration",
        heading: "Quitter Blink : sans perte de données.",
        body: [
          "Les données employés, affectations de site et logs de temps sont importés dans Taskey – dans la mesure où Blink permet l'export. Tout ce qui ne provient pas directement de Blink est saisi avec vous lors de la mise en place Done-for-You.",
          "Pendant la transition, les deux systèmes peuvent fonctionner en parallèle afin qu'aucune intervention ne soit oubliée. Après 2 à 4 semaines, la bascule est terminée.",
        ],
      },
    ],
    faqs: [
      {
        question: "Blink dispose-t-il de son propre pointage NFC ?",
        answer:
          "Blink est avant tout une plateforme d'engagement et de communication des travailleurs. Le pointage NFC n'en est pas un composant natif central – chez Taskey, il en constitue le cœur.",
      },
      {
        question: "Quelles langues Taskey prend-il en charge pour mes agents de nettoyage ?",
        answer:
          "Taskey est disponible en allemand, turc, russe, polonais, anglais et français – les langues typiques dans les entreprises de nettoyage allemandes.",
      },
      {
        question: "Puis-je importer directement depuis Blink vers Taskey ?",
        answer:
          "Si Blink autorise l'export des données de base, nous les importons lors de la mise en place Done-for-You. Sinon, nous saisissons les données clés avec vous – cela prend généralement quelques heures.",
      },
      {
        question: "Taskey propose-t-il aussi de la communication employés ?",
        answer:
          "Oui. Chat d'équipe, notifications push, affichages et actualités individuelles pour les employés sont inclus – orientés sur le quotidien du nettoyage.",
      },
      {
        question: "Les données sont-elles stockées en Allemagne conformément au DSGVO ?",
        answer:
          "Oui. Toutes les données sont sur des serveurs allemands, le contrat de sous-traitance est fourni automatiquement avec le contrat et le délégué à la protection des données est joignable.",
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
        description: "Comment Taskey se compare à la solution ERP classique.",
      },
      {
        href: "/vergleich/fortytools-alternative",
        label: "Alternative à fortytools",
        description: "Comparaison directe avec fortytools pour les entreprises de nettoyage.",
      },
      {
        href: "/nfc-zeiterfassung",
        label: "Le pointage NFC en détail",
        description: "Pourquoi le NFC est au cœur de toute application de nettoyage moderne.",
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
