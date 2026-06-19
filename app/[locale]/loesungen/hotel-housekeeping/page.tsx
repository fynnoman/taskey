import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/loesungen/hotel-housekeeping";

const COPY: PageCopy = {
  de: {
    title:
      "Hotel Housekeeping Software | Zimmer, Touren, Live-Status | Taskey",
    description:
      "Hotel Housekeeping Software: Zimmer-Touren in Echtzeit zuweisen, Live-Status pro Zimmer, NFC-Nachweise, Wäsche- und Material-Logs. DSGVO und Made in Germany.",
    ogTitle: "Hotel Housekeeping Software | Zimmer, Touren, Live-Status | Taskey",
    ogDescription:
      "Zimmer-Touren in Echtzeit zuweisen, Live-Status pro Zimmer, NFC-Nachweise und Material-Logs.",
    twitterTitle: "Hotel Housekeeping Software | Taskey",
    twitterDescription: "Zimmer, Touren und Live-Status für das Housekeeping.",
  },
  en: {
    title: "Hotel housekeeping software | Rooms, tours, live status | Taskey",
    description:
      "Hotel housekeeping software: assign room tours in real time, live status per room, NFC proof, laundry and supply logs. DSGVO and Made in Germany.",
    ogTitle: "Hotel housekeeping software | Rooms, tours, live status | Taskey",
    ogDescription:
      "Assign room tours in real time, live status per room, NFC proof and supply logs.",
    twitterTitle: "Hotel housekeeping software | Taskey",
    twitterDescription: "Rooms, tours and live status for housekeeping.",
  },
  fr: {
    title:
      "Logiciel de housekeeping hôtelier | Chambres, tournées, statut en direct | Taskey",
    description:
      "Logiciel de housekeeping hôtelier : affectation des tournées de chambres en temps réel, statut en direct par chambre, preuves NFC, journaux de linge et consommables. DSGVO et Made in Germany.",
    ogTitle: "Logiciel de housekeeping hôtelier | Chambres, tournées, statut en direct | Taskey",
    ogDescription:
      "Affecter les tournées de chambres en temps réel, statut en direct par chambre, preuves NFC et journaux de consommables.",
    twitterTitle: "Logiciel de housekeeping hôtelier | Taskey",
    twitterDescription: "Chambres, tournées et statut en direct pour le housekeeping.",
  },
};

const OG_ALT: Record<"de" | "en" | "fr", string> = {
  de: "Hotel Housekeeping Software mit Taskey",
  en: "Hotel housekeeping software with Taskey",
  fr: "Logiciel de housekeeping hôtelier avec Taskey",
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
    title: "Hotel Housekeeping",
    eyebrow: "Branche · Hotel",
    h1: "Hotel Housekeeping Software —",
    h1Accent: "Zimmer, Touren, Live-Status.",
    lead: "In der Hotellerie zählt jede Minute zwischen Check-out und Check-in. Taskey gibt Housekeeping-Teams einen Live-Plan auf dem Handy: welches Zimmer ist frei, welches dringend, was wurde bereits erledigt – und die Rezeption sieht in Echtzeit, ob das Zimmer für den nächsten Gast bereit ist.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Lösungen", url: "https://www.taskeyapp.com/loesungen/hotel-housekeeping" },
      { name: "Hotel Housekeeping", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Workflow",
        heading: "Zimmer-Status in Echtzeit.",
        body: [
          "Jedes Zimmer hat in Taskey einen Status: Belegt, Check-out, In Reinigung, Bereit, Defekt. Das Housekeeping-Team aktualisiert den Status durch einen NFC-Tap an der Tür – die Rezeption sieht jede Änderung sofort.",
          "Das bedeutet: kein Anruf mehr ans Stockwerk, kein 'ist Zimmer 412 schon fertig?' über Funk – die Rezeption checkt den Gast direkt ein, sobald das Zimmer den Status 'Bereit' hat.",
        ],
        bullets: [
          "Live-Status pro Zimmer auf jedem Endgerät",
          "NFC-Tap an der Tür für Statuswechsel",
          "Rezeption sieht Bereit-Zimmer in Echtzeit",
          "Defekte werden direkt aus der App gemeldet",
        ],
      },
      {
        eyebrow: "Touren",
        heading: "Routen pro Housekeeping-Mitarbeiter, optimiert nach Auslastung.",
        body: [
          "Statt einer Papier-Liste pro Etage bekommt jeder Mitarbeiter seine persönliche Tour auf das Handy. Taskey berücksichtigt Auslastung, Sonderwünsche (Allergiker, VIP-Gäste, Re-Stay) und Stockwerks-Reihenfolge.",
          "Wenn sich kurzfristig etwas ändert – etwa weil ein Gast länger bleibt oder ein Last-Minute-Check-in eintrifft – passt sich die Tour automatisch an und der Mitarbeiter sieht die Änderung per Push.",
        ],
      },
      {
        eyebrow: "Wäsche und Material",
        heading: "Wäsche, Minibar, Amenities – ohne Excel.",
        body: [
          "Pro Zimmer dokumentieren Sie eingesetzte Wäschemenge, Minibar-Verbrauch und ausgegebene Amenities. Aus diesen Logs entstehen automatisch monatliche Verbrauchsberichte – für Einkauf und Controlling.",
          "Bei Auffälligkeiten (Wäscheverlust, ungewöhnlich hoher Verbrauch) bekommt die Hausdame eine Übersicht – ohne in Excel suchen zu müssen.",
        ],
      },
      {
        eyebrow: "PMS-Integration",
        heading: "Verbindung zu Ihrem Property Management System.",
        body: [
          "Taskey kann im Enterprise-Tarif mit Ihrem PMS (z.B. Apaleo, Mews, Protel) verbunden werden, sodass Check-outs und Check-ins automatisch in der Housekeeping-Planung berücksichtigt werden – ohne manuelles Update.",
          "Sprechen Sie uns an, wenn Sie ein konkretes PMS einsetzen – wir klären gemeinsam, was möglich ist.",
        ],
      },
    ],
    faqs: [
      {
        question: "Wie schnell sehe ich, ob ein Zimmer bereit für den nächsten Gast ist?",
        answer: "In Echtzeit. Sobald der Mitarbeiter den Status 'Bereit' setzt, sieht die Rezeption das Zimmer als verfügbar – ohne Telefonat, ohne Funk.",
      },
      {
        question: "Können Defekte oder Wartungsbedarf direkt gemeldet werden?",
        answer:
          "Ja. Aus der Reinigung heraus dokumentieren Mitarbeiter Defekte mit Foto und Beschreibung. Die Hausdame oder Haustechnik bekommt automatisch eine Benachrichtigung.",
      },
      {
        question: "Wie wird mit VIP- oder Stay-Over-Gästen umgegangen?",
        answer: "Pro Zimmer hinterlegen Sie Sonderwünsche (z.B. 'nur ohne Eintreten' für Stay-Over). Die App zeigt das dem Housekeeping vor dem Klopfen an.",
      },
      {
        question: "Lässt sich das mit unserem PMS verbinden?",
        answer:
          "Im Enterprise-Tarif ist eine PMS-Anbindung über API möglich – etwa mit Apaleo, Mews oder Protel. Sprechen Sie uns an, wir prüfen Ihre konkrete Konstellation.",
      },
      {
        question: "Geht das auch für kleine Hotels mit 20 Zimmern?",
        answer:
          "Ja. Taskey rechnet sich schon ab dem ersten Housekeeping-Mitarbeiter. Sie sparen Anrufe, Funkverkehr und Übergabe-Zeit.",
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
        description: "Touren live planen – auch wenn sich die Belegung ändert.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Leistungsnachweis Gebäudereinigung",
        description: "Nachweis pro Zimmer und Reinigungszyklus.",
      },
      {
        href: "/loesungen/klinikreinigung",
        label: "Klinikreinigung",
        description: "Verwandte Hygiene-Anforderungen für medizinische Reinigung.",
      },
    ],
  },
  en: {
    title: "Hotel housekeeping",
    eyebrow: "Industry · Hotel",
    h1: "Hotel housekeeping software —",
    h1Accent: "rooms, tours, live status.",
    lead: "In hospitality, every minute between check-out and check-in counts. Taskey gives housekeeping teams a live plan on their phone: which room is free, which is urgent, what has already been done – and reception sees in real time whether the room is ready for the next guest.",
    breadcrumbs: [
      { name: "Home", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen/hotel-housekeeping" },
      { name: "Hotel housekeeping", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Workflow",
        heading: "Room status in real time.",
        body: [
          "In Taskey, every room has a status: Occupied, Check-out, Cleaning, Ready, Faulty. The housekeeping team updates the status with an NFC tap at the door – reception sees every change instantly.",
          "That means: no more calling the floor, no more 'is room 412 done yet?' over the radio – reception checks the guest in directly as soon as the room hits 'Ready'.",
        ],
        bullets: [
          "Live status per room on every device",
          "NFC tap at the door to change status",
          "Reception sees ready rooms in real time",
          "Faults reported straight from the app",
        ],
      },
      {
        eyebrow: "Tours",
        heading: "Routes per housekeeper, optimised for occupancy.",
        body: [
          "Instead of a paper list per floor, every employee gets their personal tour on their phone. Taskey takes into account occupancy, special requests (allergy guests, VIPs, re-stays) and floor sequence.",
          "If something changes at short notice – a guest stays longer or a last-minute check-in arrives – the tour adapts automatically and the employee sees the change via push.",
        ],
      },
      {
        eyebrow: "Linen and supplies",
        heading: "Linen, minibar, amenities – without Excel.",
        body: [
          "Per room you document the linen used, minibar consumption and amenities handed out. From these logs, monthly consumption reports are generated automatically – for purchasing and controlling.",
          "When something stands out (linen losses, unusually high consumption), the head housekeeper gets an overview – without having to dig through Excel.",
        ],
      },
      {
        eyebrow: "PMS integration",
        heading: "Connect to your Property Management System.",
        body: [
          "On the Enterprise plan, Taskey can connect to your PMS (e.g. Apaleo, Mews, Protel) so that check-outs and check-ins are reflected automatically in housekeeping planning – with no manual update.",
          "Talk to us about your specific PMS – we will clarify together what is possible.",
        ],
      },
    ],
    faqs: [
      {
        question: "How fast do I see whether a room is ready for the next guest?",
        answer: "In real time. As soon as the employee sets the status to 'Ready', reception sees the room as available – no phone call, no radio.",
      },
      {
        question: "Can faults or maintenance needs be reported directly?",
        answer:
          "Yes. From the cleaning, employees document faults with a photo and description. The head housekeeper or maintenance team is notified automatically.",
      },
      {
        question: "How are VIP or stay-over guests handled?",
        answer: "Per room you set special requests (e.g. 'no entry' for stay-overs). The app shows this to housekeeping before they knock.",
      },
      {
        question: "Can this be connected to our PMS?",
        answer:
          "On the Enterprise plan, a PMS connection via API is possible – e.g. with Apaleo, Mews or Protel. Get in touch, we will assess your specific setup.",
      },
      {
        question: "Does this also work for small hotels with 20 rooms?",
        answer:
          "Yes. Taskey pays off from the very first housekeeper. You save phone calls, radio chatter and handover time.",
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
        description: "Plan tours live – even when occupancy changes.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Service proof for cleaning",
        description: "Proof per room and cleaning cycle.",
      },
      {
        href: "/loesungen/klinikreinigung",
        label: "Clinic cleaning",
        description: "Related hygiene requirements for medical cleaning.",
      },
    ],
  },
  fr: {
    title: "Housekeeping hôtelier",
    eyebrow: "Secteur · Hôtel",
    h1: "Logiciel de housekeeping hôtelier —",
    h1Accent: "chambres, tournées, statut en direct.",
    lead: "Dans l’hôtellerie, chaque minute entre le check-out et le check-in compte. Taskey donne aux équipes de housekeeping un plan en direct sur le téléphone : quelle chambre est libre, laquelle est urgente, ce qui a déjà été fait – et la réception voit en temps réel si la chambre est prête pour le prochain client.",
    breadcrumbs: [
      { name: "Accueil", url: "https://www.taskeyapp.com" },
      { name: "Solutions", url: "https://www.taskeyapp.com/loesungen/hotel-housekeeping" },
      { name: "Housekeeping hôtelier", url: `https://www.taskeyapp.com${path}` },
    ],
    sections: [
      {
        eyebrow: "Workflow",
        heading: "Statut des chambres en temps réel.",
        body: [
          "Dans Taskey, chaque chambre a un statut : Occupée, Check-out, En nettoyage, Prête, Défaut. L’équipe de housekeeping met à jour le statut par un tap NFC à la porte – la réception voit chaque changement immédiatement.",
          "Résultat : plus d’appel à l’étage, plus de « la 412 est-elle prête ? » par talkie-walkie – la réception accueille le client dès que la chambre passe au statut « Prête ».",
        ],
        bullets: [
          "Statut en direct par chambre sur n’importe quel appareil",
          "Tap NFC à la porte pour changer de statut",
          "La réception voit les chambres prêtes en temps réel",
          "Les défauts sont signalés directement depuis l’application",
        ],
      },
      {
        eyebrow: "Tournées",
        heading: "Itinéraires par femme/valet de chambre, optimisés selon le taux d’occupation.",
        body: [
          "Au lieu d’une feuille papier par étage, chaque collaborateur reçoit sa tournée personnelle sur son téléphone. Taskey tient compte du taux d’occupation, des demandes spéciales (allergies, VIP, re-stays) et de l’ordre des étages.",
          "Si quelque chose change à la dernière minute – un client prolonge son séjour, un check-in last minute arrive – la tournée s’adapte automatiquement et le collaborateur reçoit la mise à jour par notification.",
        ],
      },
      {
        eyebrow: "Linge et consommables",
        heading: "Linge, minibar, amenities – sans Excel.",
        body: [
          "Par chambre, vous documentez la quantité de linge utilisée, la consommation du minibar et les amenities distribués. Ces journaux génèrent automatiquement des rapports de consommation mensuels – pour les achats et le contrôle de gestion.",
          "En cas d’anomalies (perte de linge, consommation anormalement élevée), la gouvernante reçoit une vue d’ensemble – sans devoir fouiller dans Excel.",
        ],
      },
      {
        eyebrow: "Intégration PMS",
        heading: "Connexion à votre Property Management System.",
        body: [
          "Dans l’offre Enterprise, Taskey peut être connecté à votre PMS (p. ex. Apaleo, Mews, Protel), de sorte que les check-outs et check-ins soient pris en compte automatiquement dans la planification housekeeping – sans mise à jour manuelle.",
          "Parlez-nous-en si vous utilisez un PMS précis – nous clarifions ensemble ce qui est possible.",
        ],
      },
    ],
    faqs: [
      {
        question: "À quelle vitesse vois-je qu’une chambre est prête pour le prochain client ?",
        answer: "En temps réel. Dès que le collaborateur met le statut « Prête », la réception voit la chambre comme disponible – sans appel, sans talkie-walkie.",
      },
      {
        question: "Les défauts ou les besoins de maintenance peuvent-ils être signalés directement ?",
        answer:
          "Oui. Pendant le nettoyage, les collaborateurs documentent les défauts avec photo et description. La gouvernante ou la maintenance reçoit automatiquement une notification.",
      },
      {
        question: "Comment gérer les clients VIP ou en stay-over ?",
        answer: "Par chambre, vous renseignez des demandes spéciales (p. ex. « ne pas entrer » pour stay-over). L’application l’indique au housekeeping avant qu’il frappe.",
      },
      {
        question: "Peut-on connecter cela à notre PMS ?",
        answer:
          "Dans l’offre Enterprise, une connexion PMS via API est possible – p. ex. avec Apaleo, Mews ou Protel. Contactez-nous, nous évaluons votre configuration concrète.",
      },
      {
        question: "Cela fonctionne-t-il aussi pour les petits hôtels de 20 chambres ?",
        answer:
          "Oui. Taskey est rentable dès le premier collaborateur de housekeeping. Vous économisez appels, communications radio et temps de transmission.",
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
        description: "Planifier les tournées en direct – même quand le taux d’occupation change.",
      },
      {
        href: "/leistungsnachweis-gebaeudereinigung",
        label: "Justificatif de prestations de nettoyage",
        description: "Preuve par chambre et par cycle de nettoyage.",
      },
      {
        href: "/loesungen/klinikreinigung",
        label: "Nettoyage hospitalier",
        description: "Exigences d’hygiène apparentées pour le nettoyage médical.",
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
