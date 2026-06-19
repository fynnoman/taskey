import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/loesungen/glasreinigung";

const COPY: PageCopy = {
  de: {
    title: "Software für Glasreinigung | Touren, Nachweise, Rechnungen | Taskey",
    description:
      "Reinigungssoftware für Glasreinigung: Tourenplanung, NFC-Nachweise pro Objekt, Rechnungen und Auftraggeber-Portal. DSGVO-konform, Made in Germany.",
    ogTitle: "Software für Glasreinigung | Touren, Nachweise, Rechnungen | Taskey",
    ogDescription:
      "Tourenplanung, NFC-Nachweise pro Objekt, Rechnungen und Auftraggeber-Portal für Glasreinigung.",
    twitterTitle: "Software für Glasreinigung | Taskey",
    twitterDescription: "Touren, Nachweise und Rechnungen für die Glasreinigung.",
  },
  en: {
    title: "Window cleaning software | Tours, proof, invoicing | Taskey",
    description:
      "Cleaning software for window cleaning: route planning, NFC proof per site, invoicing and a client portal. DSGVO-compliant, Made in Germany.",
    ogTitle: "Window cleaning software | Tours, proof, invoicing | Taskey",
    ogDescription:
      "Route planning, NFC proof per site, invoicing and a client portal for window cleaning.",
    twitterTitle: "Window cleaning software | Taskey",
    twitterDescription: "Tours, proof and invoicing for window cleaning.",
  },
  fr: {
    title: "Logiciel pour le nettoyage de vitres | Tournées, preuves, factures | Taskey",
    description:
      "Logiciel de nettoyage pour la vitrerie : planification des tournées, preuves NFC par site, factures et portail client. Conforme DSGVO, Made in Germany.",
    ogTitle: "Logiciel pour le nettoyage de vitres | Tournées, preuves, factures | Taskey",
    ogDescription:
      "Planification des tournées, preuves NFC par site, factures et portail client pour la vitrerie.",
    twitterTitle: "Logiciel pour le nettoyage de vitres | Taskey",
    twitterDescription: "Tournées, preuves et factures pour la vitrerie.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Software für Glasreinigung mit Taskey",
  en: "Window cleaning software with Taskey",
  fr: "Logiciel pour le nettoyage de vitres avec Taskey",
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
    title: "Glasreinigung",
    eyebrow: "Branche · Glasreinigung",
    h1: "Software für Glasreinigung —",
    h1Accent: "Touren, Nachweise, Rechnungen.",
    lead: "Glasreinigung ist Tourengeschäft: viele kleine Objekte, enge Zeitfenster, oft mehrere Kolonnen parallel. Taskey gibt Ihnen die Werkzeuge, um Touren effizient zu planen, jeden Glasfassaden-Einsatz nachweissicher zu dokumentieren und sofort abzurechnen.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen/glasreinigung" },
      { name: "Glasreinigung", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Tourenplanung",
        heading: "Die richtige Reihenfolge, der richtige Mitarbeiter, das richtige Werkzeug.",
        body: [
          "In der Glasreinigung entscheidet die Tourenplanung über die Marge. Wer pro Tag 12 Objekte schafft statt 8, verdient ein Drittel mehr – ohne Mehrarbeit. Taskey hilft Ihnen, Touren nach Postleitzahl, Höhenstufe und Werkzeug-Bedarf optimal zu schneiden.",
          "Jeder Mitarbeiter sieht seine Tour live auf dem Handy – inklusive Anfahrt, Sonderausrüstung (Leiter, Teleskopstange, Hubsteiger), Schlüsselregelung und individueller Aufgaben pro Objekt.",
        ],
        bullets: [
          "Tourenoptimierung nach PLZ und Höhe",
          "Werkzeug- und Materialliste pro Tour",
          "Mobile-First für unterwegs",
          "Live-Statusupdate jedes Stopps",
        ],
      },
      {
        eyebrow: "Nachweis",
        heading: "Vorher/Nachher-Foto pro Fassade.",
        body: [
          "Bei der Glasreinigung ist der visuelle Nachweis besonders wichtig. Taskey ermöglicht pro Einsatz Vorher-Nachher-Fotos, die direkt im Objekt-Datensatz hinterlegt werden – signiert mit Zeitstempel, GPS und Mitarbeiter.",
          "Plus: NFC-Tag am Hauseingang erfasst Ankunft und Abreise – mit Pausen, Material- und Werkzeug-Logs. So entsteht ein lückenloser Nachweis, der auch bei Streit über Reinigungs-Intervalle vor Gericht hält.",
        ],
      },
      {
        eyebrow: "Sicherheitsdokumentation",
        heading: "Arbeitsschutz und Höhe – sauber dokumentiert.",
        body: [
          "Reinigung in Höhe ist Arbeitsschutz-Thema. Taskey dokumentiert pro Einsatz, welche PSA verwendet wurde, ob die Sicherheits-Checkliste durchlaufen wurde und welche Höhenklassen betroffen waren.",
          "Im Fall einer BG-Prüfung haben Sie jeden Einsatz lückenlos dokumentiert – inklusive Schulungsstand der eingesetzten Mitarbeitenden.",
        ],
      },
      {
        eyebrow: "Abrechnung",
        heading: "Sofort-Rechnung am Objekt – kein Papier mehr.",
        body: [
          "Wenn Sie etwa bei privaten Kunden direkt nach dem Einsatz kassieren möchten, erzeugt Taskey vor Ort eine Rechnung als PDF und versendet sie per E-Mail oder Druck-PDF. Zahlungseingänge können automatisch verbucht werden.",
          "Bei größeren Auftraggebern erzeugen Sie Monats- oder Quartalsabrechnungen mit Sammelposten – ebenfalls automatisch aus den Einsatzdaten heraus.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kann Taskey auch Höhenklassen und Arbeitsschutz-Dokumentation abbilden?",
        answer:
          "Ja. Pro Einsatz oder pro Objekt hinterlegen Sie die relevante Höhenklasse, PSA-Anforderungen und Sicherheits-Checklisten. Die Dokumentation läuft mit jedem NFC-Tap automatisch mit.",
      },
      {
        question: "Geht das auch für Spezialaufträge wie Wintergärten oder Solarmodule?",
        answer:
          "Ja. Sie hinterlegen pro Objekt einen Reinigungstyp (Glasfassade, Wintergarten, Photovoltaik etc.) mit eigenen Vorgaben, Werkzeugen und Abrechnungsmodalitäten.",
      },
      {
        question: "Wie schaut die Tourenoptimierung aus?",
        answer:
          "Taskey schlägt eine sinnvolle Reihenfolge nach Postleitzahl, Höhenklasse und Werkzeug-Bedarf vor. Sie können die Tour per Drag-and-Drop manuell anpassen – die App berechnet Fahrtzeiten und Pausen.",
      },
      {
        question: "Können Privatkunden direkt am Objekt zahlen?",
        answer:
          "Mit der Sofort-Rechnung erzeugen Sie ein PDF, das der Kunde per E-Mail erhält. Zahlungseingänge per Überweisung können automatisch zugeordnet werden – Karten- oder Bargeldzahlung dokumentieren Sie als Vermerk.",
      },
      {
        question: "Sind Vorher-Nachher-Fotos manipulationssicher?",
        answer:
          "Ja. Fotos werden mit Zeitstempel, GPS-Position und Mitarbeiter-ID signiert und im Objekt-Datensatz versioniert abgelegt. Nachträgliche Änderungen sind nicht möglich.",
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
        description: "Touren in der Glasreinigung professionell planen und umplanen.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Leistungsnachweis Gebäudereinigung",
        description: "Vorher-Nachher-Fotos rechtssicher dokumentieren.",
      },
      {
        href: "/loesungen/industriereinigung",
        label: "Industriereinigung",
        description: "Wenn Höhe und Sicherheit besonders streng dokumentiert werden müssen.",
      },
    ],
  },
  en: {
    title: "Window cleaning",
    eyebrow: "Industry · Window cleaning",
    h1: "Window cleaning software —",
    h1Accent: "tours, proof, invoicing.",
    lead: "Window cleaning is route business: many small sites, tight time windows, often several crews in parallel. Taskey gives you the tools to plan tours efficiently, document every glass-facade job with hard evidence and invoice it immediately.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen/glasreinigung" },
      { name: "Window cleaning", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Route planning",
        heading: "The right order, the right person, the right tool.",
        body: [
          "In window cleaning, route planning decides your margin. Whoever covers 12 sites a day instead of 8 earns a third more – with no extra work. Taskey helps you cut routes optimally by postal code, height level and tool requirements.",
          "Every employee sees their tour live on the phone – including travel, special equipment (ladder, telescopic pole, lifting platform), key handling and individual tasks per site.",
        ],
        bullets: [
          "Route optimisation by postal code and height",
          "Tool and material list per route",
          "Mobile-first for the field",
          "Live status update for every stop",
        ],
      },
      {
        eyebrow: "Proof",
        heading: "Before/after photo for every façade.",
        body: [
          "In window cleaning, visual proof matters especially. Taskey lets you capture before/after photos per job, stored directly in the site record – signed with timestamp, GPS and operator.",
          "Plus: an NFC tag at the building entrance captures arrival and departure – with breaks, material and tool logs. The result is a seamless audit trail that holds up in court even when cleaning intervals are disputed.",
        ],
      },
      {
        eyebrow: "Safety documentation",
        heading: "Workplace safety and heights – cleanly documented.",
        body: [
          "Cleaning at heights is a safety matter. Taskey documents per job which PPE was used, whether the safety checklist was completed and which height classes were involved.",
          "If you are audited by the trade association (BG), you have every job documented seamlessly – including the training status of the workers deployed.",
        ],
      },
      {
        eyebrow: "Invoicing",
        heading: "Instant invoice on-site – no more paper.",
        body: [
          "Want to charge private customers directly after the job? Taskey generates an invoice as PDF on-site and sends it by email or as a print-PDF. Incoming payments can be reconciled automatically.",
          "For larger clients you generate monthly or quarterly invoices with collected items – also automatically from the job data.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Taskey map height classes and safety documentation?",
        answer:
          "Yes. Per job or per site you set the relevant height class, PPE requirements and safety checklists. Documentation is captured automatically with every NFC tap.",
      },
      {
        question: "Does it also work for specialised jobs like winter gardens or solar panels?",
        answer:
          "Yes. Per site you set a cleaning type (glass façade, winter garden, photovoltaics, etc.) with its own requirements, tools and billing conditions.",
      },
      {
        question: "What does route optimisation look like?",
        answer:
          "Taskey proposes a sensible sequence by postal code, height class and tool requirements. You can adjust the tour manually via drag-and-drop – the app recalculates driving times and breaks.",
      },
      {
        question: "Can private customers pay directly on-site?",
        answer:
          "With the instant invoice you generate a PDF that the customer receives by email. Incoming bank transfers can be matched automatically – card or cash payments are documented as a note.",
      },
      {
        question: "Are before/after photos tamper-proof?",
        answer:
          "Yes. Photos are signed with timestamp, GPS position and employee ID and are stored versioned in the site record. Later changes are not possible.",
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
        description: "Plan and replan window-cleaning tours professionally.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Service proof for cleaning",
        description: "Document before/after photos in a legally sound way.",
      },
      {
        href: "/loesungen/industriereinigung",
        label: "Industrial cleaning",
        description: "When height and safety must be documented especially strictly.",
      },
    ],
  },
  fr: {
    title: "Nettoyage de vitres",
    eyebrow: "Secteur · Nettoyage de vitres",
    h1: "Logiciel pour le nettoyage de vitres —",
    h1Accent: "tournées, preuves, factures.",
    lead: "Le nettoyage de vitres est un métier de tournée : beaucoup de petits sites, des créneaux serrés, souvent plusieurs équipes en parallèle. Taskey vous donne les outils pour planifier vos tournées efficacement, documenter chaque intervention de façade vitrée de manière probante et facturer immédiatement.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen/glasreinigung" },
      { name: "Nettoyage de vitres", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Planification des tournées",
        heading: "Le bon ordre, le bon collaborateur, le bon outil.",
        body: [
          "En vitrerie, la planification des tournées détermine la marge. Faire 12 sites par jour plutôt que 8, c’est un tiers de chiffre en plus – sans heures supplémentaires. Taskey vous aide à découper les tournées de façon optimale par code postal, niveau de hauteur et besoin en outillage.",
          "Chaque collaborateur voit sa tournée en direct sur son téléphone – y compris trajet, équipement spécial (échelle, perche télescopique, nacelle), gestion des clés et tâches individuelles par site.",
        ],
        bullets: [
          "Optimisation des tournées par code postal et hauteur",
          "Liste d’outils et de matériel par tournée",
          "Mobile-first pour le terrain",
          "Mise à jour de statut en direct à chaque arrêt",
        ],
      },
      {
        eyebrow: "Preuve",
        heading: "Photo avant/après par façade.",
        body: [
          "En vitrerie, la preuve visuelle est particulièrement importante. Taskey permet, par intervention, des photos avant/après archivées directement dans la fiche du site – signées avec horodatage, GPS et collaborateur.",
          "En plus : un tag NFC à l’entrée enregistre l’arrivée et le départ – avec pauses, journaux de matériel et d’outillage. Cela produit une preuve sans faille, qui tient devant un tribunal même en cas de litige sur les intervalles de nettoyage.",
        ],
      },
      {
        eyebrow: "Documentation de sécurité",
        heading: "Sécurité au travail et hauteur – proprement documentées.",
        body: [
          "Le nettoyage en hauteur relève de la sécurité au travail. Taskey documente, par intervention, les EPI utilisés, le respect de la check-list de sécurité et les classes de hauteur concernées.",
          "En cas de contrôle de la caisse professionnelle (BG), chaque intervention est documentée sans faille – y compris le niveau de formation des collaborateurs engagés.",
        ],
      },
      {
        eyebrow: "Facturation",
        heading: "Facture immédiate sur site – fini le papier.",
        body: [
          "Si vous souhaitez par exemple encaisser des clients particuliers directement après la prestation, Taskey génère sur place une facture au format PDF et l’envoie par e-mail ou en PDF à imprimer. Les paiements entrants peuvent être rapprochés automatiquement.",
          "Pour les donneurs d’ordres plus importants, vous générez des facturations mensuelles ou trimestrielles avec postes groupés – également automatiquement à partir des données d’intervention.",
        ],
      },
    ],
    faqs: [
      {
        question: "Taskey peut-il aussi gérer les classes de hauteur et la documentation de sécurité ?",
        answer:
          "Oui. Par intervention ou par site, vous définissez la classe de hauteur pertinente, les exigences d’EPI et les check-lists de sécurité. La documentation se fait automatiquement à chaque tap NFC.",
      },
      {
        question: "Cela fonctionne-t-il aussi pour des prestations spéciales comme les vérandas ou les panneaux solaires ?",
        answer:
          "Oui. Vous associez à chaque site un type de prestation (façade vitrée, véranda, photovoltaïque, etc.) avec ses propres exigences, outils et modalités de facturation.",
      },
      {
        question: "À quoi ressemble l’optimisation des tournées ?",
        answer:
          "Taskey propose un ordre cohérent selon le code postal, la classe de hauteur et le besoin en outillage. Vous pouvez ajuster la tournée manuellement par glisser-déposer – l’application recalcule les temps de trajet et de pause.",
      },
      {
        question: "Les particuliers peuvent-ils payer directement sur site ?",
        answer:
          "Avec la facture immédiate, vous générez un PDF que le client reçoit par e-mail. Les virements entrants peuvent être affectés automatiquement – les paiements par carte ou en espèces sont documentés sous forme de note.",
      },
      {
        question: "Les photos avant/après sont-elles infalsifiables ?",
        answer:
          "Oui. Les photos sont signées avec horodatage, position GPS et identifiant collaborateur, puis archivées de manière versionnée dans la fiche du site. Toute modification ultérieure est impossible.",
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
        description: "Planifier et replanifier des tournées de vitrerie de façon professionnelle.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Justificatif de prestations de nettoyage",
        description: "Documenter les photos avant/après de manière juridiquement solide.",
      },
      {
        href: "/loesungen/industriereinigung",
        label: "Nettoyage industriel",
        description: "Quand la hauteur et la sécurité doivent être documentées de façon particulièrement stricte.",
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
      breadcrumbs={[...c.breadcrumbs] as { name: string; url: string }[]}
      sections={c.sections as any}
      faqs={c.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      related={[...c.related] as { href: string; label: string; description?: string }[]}
    />
  );
}
