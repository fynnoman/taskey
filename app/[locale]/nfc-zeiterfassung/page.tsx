import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/nfc-zeiterfassung";

const META_COPY: PageCopy = {
  de: {
    title: "NFC Zeiterfassung für Reinigungsfirmen | Ein Tap, alles dokumentiert | Taskey",
    description:
      "NFC Zeiterfassung speziell für Reinigungsfirmen: wetterfeste Tags am Objekt, automatischer Check-in per Smartphone, GPS und Offline-Sync. DSGVO-konform.",
  },
  en: {
    title: "NFC Time Tracking for Cleaning Companies | One tap, fully documented | Taskey",
    description:
      "NFC time tracking built for cleaning companies: weatherproof tags on site, automatic smartphone check-in, GPS and offline sync. GDPR-compliant.",
  },
  fr: {
    title: "Pointage NFC pour entreprises de nettoyage | Un tap, tout est documenté | Taskey",
    description:
      "Pointage NFC pensé pour le nettoyage : badges résistants aux intempéries sur site, pointage smartphone automatique, GPS et synchronisation hors ligne. Conforme RGPD.",
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
    image: "/taskeycard.webp",
  });
}

const CONTENT = {
  de: {
    title: "NFC Zeiterfassung",
    eyebrow: "Pillar · NFC",
    h1: "NFC Zeiterfassung für Reinigungsfirmen —",
    h1Accent: "ein Tap, alles dokumentiert.",
    lead: "Stundenzettel sind tot. Mit NFC-Tags von Taskey halten Ihre Reinigungskräfte einfach das Smartphone an den Aufkleber am Objekt – Zeit, Standort, Mitarbeiter und Leistung werden automatisch protokolliert. Ohne App-Bedienung, ohne Passwort, ohne Schulung.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "NFC Zeiterfassung",
    sec1Eyebrow: "Wie es funktioniert",
    sec1Heading: "Drei Sekunden vom Tap zum Nachweis.",
    sec1Intro:
      "NFC (Near Field Communication) ist die gleiche Technik, die in jeder Bezahlkarte steckt. Ihr Mitarbeiter muss nicht einmal die App öffnen – das Handy erkennt den Tag automatisch und Taskey nimmt die Buchung vor.",
    sec1Sub1Heading: "1. Tag am Objekt anbringen",
    sec1Sub1Body:
      "Wetterfeste, manipulationssichere NFC-Aufkleber werden am Eingang, im Treppenhaus oder am Schlüsselkasten angebracht. Größe: ca. 3×5 cm. Hält über 5 Jahre, auch im Außenbereich.",
    sec1Sub2Heading: "2. Mitarbeiter hält Handy daran",
    sec1Sub2Body:
      "Ein kurzer Tap – das Smartphone erkennt den Tag, öffnet Taskey im Hintergrund und bucht die Zeit. Kein Passwort, keine App-Suche, keine Fingerabdruck-Eingabe nötig.",
    sec1Sub3Heading: "3. Taskey dokumentiert alles",
    sec1Sub3Body:
      "Zeitstempel, GPS-Standort, Mitarbeiter-ID, Objekt und Auftrag werden in einem manipulationssicheren Datensatz festgehalten. Sichtbar für Sie als Inhaber – nicht für die Konkurrenz.",
    sec1Sub4Heading: "4. Beim Verlassen erneut tappen",
    sec1Sub4Body:
      "Check-out mit demselben Tag. Die Differenz ist die abrechenbare Arbeitszeit. Pausen werden automatisch nach hinterlegtem Modell abgezogen.",
    sec2Eyebrow: "Was ein NFC-Tag mehr kann",
    sec2Heading: "Nicht nur Zeit – auch Schlüssel, Touren und Räume.",
    sec2Intro:
      "Ein Tag am Eingang erfasst die Anwesenheit am Objekt. Mit mehreren Tags differenzieren Sie auf Raum-, Etagen- oder Schlüsselebene – ohne Mehraufwand für Ihr Team.",
    sec2Bullet1: "Tag pro Etage: lückenloser Rundgang-Beleg",
    sec2Bullet2: "Tag am Schlüsselkasten: dokumentierte Schlüsselübergabe",
    sec2Bullet3: "Tag am Werkzeug oder Wagen: Inventarkontrolle",
    sec2Bullet4: "Tag am Sanitärbereich: separater Reinigungsnachweis für Auftraggeber",
    sec2Bullet5: "Tag am Mülltonnenraum: Entsorgungsprotokoll",
    sec2Bullet6: "Tag am Lagerraum: dokumentierter Materialverbrauch",
    sec3Eyebrow: "Hardware",
    sec3Heading: "Wetterfest, manipulationssicher, Made for Cleaning.",
    sec3Body1:
      "Taskey-NFC-Tags sind speziell für die Reinigungsbranche entwickelt. Sie überstehen Hochdruckreiniger, Frost, UV-Strahlung und Reinigungsmittel über Jahre. Beim Versuch, einen Tag abzulösen, wird der Sicherheitskleber zerstört – jede Manipulation ist sichtbar.",
    sec3Body2:
      "Die Tags sind weltweit eindeutig codiert und werden bei Auslieferung in Ihrem Taskey-Account vorregistriert. Sie kleben sie nur noch am Objekt fest – fertig. Pro Objekt brauchen Sie in der Regel zwischen einem und fünf Tags, je nach Größe und Detailgrad der Dokumentation.",
    sec3Body3:
      "Verloren oder beschädigt? Über den Account sperren Sie alte Tags und ordnen neue zu – in Minuten. Kein Hardware-Risiko, keine Lock-in-Falle.",
    sec3Bullet1: "ISO 14443 / NTAG 213/215 kompatibel",
    sec3Bullet2: "Funktioniert mit jedem aktuellen iPhone und Android-Smartphone",
    sec3Bullet3: "Lieferzeit 3–5 Werktage innerhalb DACH",
    sec3Bullet4: "Kein Stromanschluss, keine Wartung",
    sec4Eyebrow: "Datenschutz",
    sec4Heading: "DSGVO-konform: kein heimliches Tracking.",
    sec4Body1:
      "Taskey erfasst Standortdaten nur im Moment des Taps – nicht dauerhaft im Hintergrund. Ihre Mitarbeitenden werden nicht permanent geortet. Der GPS-Punkt dient ausschließlich dazu, zu bestätigen, dass die Buchung tatsächlich am hinterlegten Objekt stattfand.",
    sec4Body2:
      "Alle Daten liegen auf deutschen Servern, sind verschlüsselt übertragen und gespeichert, und der Auftragsverarbeitungsvertrag (AVV) liegt im Account zum Download bereit. Betriebsräte und Datenschutzbeauftragte erhalten ein vollständiges Konzept-Whitepaper auf Anfrage.",
    faq1Q: "Welche Smartphones unterstützen die NFC-Zeiterfassung von Taskey?",
    faq1A:
      "Alle iPhones ab iPhone 7 und nahezu alle Android-Smartphones der letzten 8 Jahre haben NFC eingebaut. Taskey läuft auf iOS 14+ und Android 9+.",
    faq2Q: "Was kosten die NFC-Tags?",
    faq2A:
      "Die ersten Tags pro Objekt sind in jedem Tarif inklusive. Weitere Tags sind günstig nachbestellbar – konkret abhängig von der Menge. Sprechen Sie uns für ein individuelles Angebot an.",
    faq3Q: "Können Mitarbeitende den Tag von zuhause aus tappen und sich so Stunden ergaunern?",
    faq3A:
      "Nein. Jeder Tap wird zusätzlich mit dem GPS-Standort des Smartphones verifiziert. Wenn der Tap nicht am hinterlegten Objekt-Standort erfolgt, wird der Eintrag automatisch markiert und Ihnen als Verdachtsfall angezeigt.",
    faq4Q: "Was passiert, wenn ein NFC-Tag beschädigt oder gestohlen wird?",
    faq4A:
      "Sie sperren den alten Tag in Ihrem Taskey-Account und ordnen einen neuen zu. Der alte Tag liefert keine gültigen Buchungen mehr. Die Historie bleibt vollständig erhalten.",
    faq5Q: "Brauche ich pro Mitarbeiter einen eigenen Tag?",
    faq5A:
      "Nein. Die NFC-Tags sind am Objekt angebracht, nicht am Mitarbeiter. Der Mitarbeiter wird über sein Smartphone identifiziert. Das ist günstiger und kommt mit Personalwechsel besser zurecht.",
    faq6Q: "Was unterscheidet NFC-Zeiterfassung von QR-Code-Scans?",
    faq6A:
      "NFC ist schneller (kein App-Öffnen, keine Kamera nötig), funktioniert auch bei Dunkelheit, Schmutz oder Kondenswasser und ist deutlich manipulationssicherer. QR-Codes können fotografiert und nachträglich gescannt werden – NFC-Tags physisch nicht.",
    rel1Label: "Software für Gebäudereinigung",
    rel1Desc: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
    rel2Label: "Zeiterfassung Gebäudereinigung (Übersicht)",
    rel2Desc: "Alle Wege, Arbeitszeit in der Reinigungsbranche rechtssicher zu erfassen.",
    rel3Label: "Leistungsnachweis Gebäudereinigung",
    rel3Desc: "Aus jedem NFC-Tap wird automatisch ein Nachweis für den Auftraggeber.",
    rel4Label: "Unterhaltsreinigung mit NFC",
    rel4Desc: "Wie NFC in wiederkehrenden Reinigungsverträgen den Alltag verändert.",
  },
  en: {
    title: "NFC Time Tracking",
    eyebrow: "Pillar · NFC",
    h1: "NFC time tracking for cleaning companies —",
    h1Accent: "one tap, everything documented.",
    lead: "Timesheets are dead. With Taskey NFC tags, your cleaning staff simply hold their smartphone to the sticker at the site – time, location, employee and service are logged automatically. No app interaction, no password, no training.",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "NFC Time Tracking",
    sec1Eyebrow: "How it works",
    sec1Heading: "Three seconds from tap to proof.",
    sec1Intro:
      "NFC (Near Field Communication) is the same technology in every payment card. Your employee doesn’t even need to open the app – the phone detects the tag automatically and Taskey logs the entry.",
    sec1Sub1Heading: "1. Place the tag at the site",
    sec1Sub1Body:
      "Weatherproof, tamper-evident NFC stickers are mounted at the entrance, in the staircase or on the key box. Size: approx. 3×5 cm. Lasts over 5 years, even outdoors.",
    sec1Sub2Heading: "2. The employee holds their phone to it",
    sec1Sub2Body:
      "A short tap – the smartphone recognises the tag, opens Taskey in the background and books the time. No password, no app search, no fingerprint required.",
    sec1Sub3Heading: "3. Taskey documents everything",
    sec1Sub3Body:
      "Timestamp, GPS location, employee ID, site and job are recorded in a tamper-proof entry. Visible to you as the owner – not to the competition.",
    sec1Sub4Heading: "4. Tap again on leaving",
    sec1Sub4Body:
      "Check-out with the same tag. The difference is the billable working time. Breaks are deducted automatically according to the configured model.",
    sec2Eyebrow: "What an NFC tag can do beyond time",
    sec2Heading: "Not just time – also keys, routes and rooms.",
    sec2Intro:
      "A tag at the entrance captures presence at the site. With several tags you differentiate at room, floor or key level – without extra effort for your team.",
    sec2Bullet1: "Tag per floor: complete proof of a round",
    sec2Bullet2: "Tag on the key box: documented handover of keys",
    sec2Bullet3: "Tag on tools or trolley: inventory control",
    sec2Bullet4: "Tag in the sanitary area: separate cleaning proof for the client",
    sec2Bullet5: "Tag at the bin room: waste-disposal log",
    sec2Bullet6: "Tag at the storeroom: documented material consumption",
    sec3Eyebrow: "Hardware",
    sec3Heading: "Weatherproof, tamper-evident, Made for Cleaning.",
    sec3Body1:
      "Taskey NFC tags are designed specifically for the cleaning industry. They withstand pressure washers, frost, UV radiation and cleaning agents for years. Any attempt to remove a tag destroys the security adhesive – every manipulation is visible.",
    sec3Body2:
      "The tags are globally unique and pre-registered in your Taskey account on delivery. You just stick them onto the site – done. As a rule you need between one and five tags per site, depending on size and the level of documentation detail.",
    sec3Body3:
      "Lost or damaged? You block old tags in the account and assign new ones – in minutes. No hardware risk, no lock-in.",
    sec3Bullet1: "ISO 14443 / NTAG 213/215 compatible",
    sec3Bullet2: "Works with every current iPhone and Android smartphone",
    sec3Bullet3: "Delivery time 3–5 working days within DACH",
    sec3Bullet4: "No power supply, no maintenance",
    sec4Eyebrow: "Data protection",
    sec4Heading: "DSGVO-compliant: no covert tracking.",
    sec4Body1:
      "Taskey records location data only at the moment of the tap – not permanently in the background. Your staff are not being constantly tracked. The GPS point serves exclusively to confirm that the entry actually took place at the configured site.",
    sec4Body2:
      "All data is hosted on German servers, encrypted in transit and at rest, and the data processing agreement (DPA) is available for download in your account. Works councils and data protection officers receive a complete concept whitepaper on request.",
    faq1Q: "Which smartphones support Taskey’s NFC time tracking?",
    faq1A:
      "All iPhones from iPhone 7 onwards and almost all Android smartphones from the last 8 years have NFC built in. Taskey runs on iOS 14+ and Android 9+.",
    faq2Q: "How much do the NFC tags cost?",
    faq2A:
      "The first tags per site are included in every plan. Additional tags can be reordered at a low price – the exact figure depends on volume. Talk to us for an individual quote.",
    faq3Q: "Could staff tap the tag from home to cheat their hours?",
    faq3A:
      "No. Every tap is additionally verified against the smartphone’s GPS location. If the tap doesn’t happen at the configured site, the entry is automatically flagged and shown to you as a suspicious case.",
    faq4Q: "What happens if an NFC tag is damaged or stolen?",
    faq4A:
      "You block the old tag in your Taskey account and assign a new one. The old tag stops producing valid entries. The history remains fully preserved.",
    faq5Q: "Do I need a separate tag per employee?",
    faq5A:
      "No. NFC tags are mounted on the site, not on the employee. The employee is identified via their smartphone. This is cheaper and copes better with staff turnover.",
    faq6Q: "What separates NFC time tracking from QR-code scans?",
    faq6A:
      "NFC is faster (no app to open, no camera needed), works in the dark, with dirt or condensation, and is far more tamper-resistant. QR codes can be photographed and scanned later – NFC tags physically can’t.",
    rel1Label: "Software for Building Cleaning",
    rel1Desc: "All-in-one industry software: scheduling, NFC proof of service, time tracking, quotes, invoices, live margins.",
    rel2Label: "Time Tracking for Building Cleaning (Overview)",
    rel2Desc: "All the ways to record working time in the cleaning industry in a legally watertight way.",
    rel3Label: "Proof of Service – Building Cleaning",
    rel3Desc: "Every NFC tap automatically becomes proof for the client.",
    rel4Label: "Maintenance Cleaning with NFC",
    rel4Desc: "How NFC changes everyday life in recurring cleaning contracts.",
  },
  fr: {
    title: "Pointage NFC",
    eyebrow: "Pillar · NFC",
    h1: "Pointage NFC pour les entreprises de nettoyage —",
    h1Accent: "un tap, tout est documenté.",
    lead: "Les feuilles d’heures sont mortes. Avec les tags NFC de Taskey, vos agents posent simplement leur smartphone sur l’autocollant du site – l’heure, le lieu, l’agent et la prestation sont enregistrés automatiquement. Sans manipulation d’app, sans mot de passe, sans formation.",
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Pointage NFC",
    sec1Eyebrow: "Comment ça marche",
    sec1Heading: "Trois secondes du tap au justificatif.",
    sec1Intro:
      "NFC (Near Field Communication) est la même technologie que dans toutes les cartes de paiement. Votre agent n’a même pas besoin d’ouvrir l’application – le téléphone détecte le tag automatiquement et Taskey enregistre la saisie.",
    sec1Sub1Heading: "1. Poser le tag sur le site",
    sec1Sub1Body:
      "Des autocollants NFC résistants aux intempéries et infalsifiables sont posés à l’entrée, dans la cage d’escalier ou sur la boîte à clés. Taille : env. 3×5 cm. Tient plus de 5 ans, même en extérieur.",
    sec1Sub2Heading: "2. L’agent y approche son téléphone",
    sec1Sub2Body:
      "Un court tap – le smartphone reconnaît le tag, ouvre Taskey en arrière-plan et enregistre le temps. Pas de mot de passe, pas de recherche d’app, pas d’empreinte digitale.",
    sec1Sub3Heading: "3. Taskey documente tout",
    sec1Sub3Body:
      "Horodatage, position GPS, ID agent, site et contrat sont consignés dans un enregistrement infalsifiable. Visible pour vous dirigeant – pas pour la concurrence.",
    sec1Sub4Heading: "4. Re-taper en partant",
    sec1Sub4Body:
      "Check-out avec le même tag. La différence est le temps de travail facturable. Les pauses sont déduites automatiquement selon le modèle paramétré.",
    sec2Eyebrow: "Ce qu’un tag NFC fait aussi",
    sec2Heading: "Pas seulement l’heure – aussi les clés, tournées et locaux.",
    sec2Intro:
      "Un tag à l’entrée enregistre la présence sur le site. Avec plusieurs tags, vous différenciez par pièce, étage ou clé – sans effort supplémentaire pour vos équipes.",
    sec2Bullet1: "Tag par étage : preuve complète de la ronde",
    sec2Bullet2: "Tag sur la boîte à clés : remise de clés documentée",
    sec2Bullet3: "Tag sur outil ou chariot : contrôle d’inventaire",
    sec2Bullet4: "Tag dans la zone sanitaire : justificatif de nettoyage dédié pour le client",
    sec2Bullet5: "Tag au local poubelles : journal d’évacuation",
    sec2Bullet6: "Tag au local de stockage : consommation de matériel documentée",
    sec3Eyebrow: "Matériel",
    sec3Heading: "Résistant aux intempéries, infalsifiable, Made for Cleaning.",
    sec3Body1:
      "Les tags NFC Taskey sont conçus spécifiquement pour le secteur du nettoyage. Ils résistent aux nettoyeurs haute pression, au gel, aux UV et aux produits d’entretien pendant des années. Toute tentative de les arracher détruit la colle de sécurité – chaque manipulation est visible.",
    sec3Body2:
      "Les tags sont identifiés de façon unique au niveau mondial et préenregistrés dans votre compte Taskey à la livraison. Il vous suffit de les coller sur le site – terminé. En général, il faut entre un et cinq tags par site, selon la taille et le niveau de détail souhaité.",
    sec3Body3:
      "Perdu ou endommagé ? Vous bloquez les anciens tags dans le compte et en attribuez de nouveaux – en quelques minutes. Aucun risque matériel, aucun verrouillage.",
    sec3Bullet1: "Compatible ISO 14443 / NTAG 213/215",
    sec3Bullet2: "Fonctionne avec tout iPhone et smartphone Android récent",
    sec3Bullet3: "Délai de livraison 3 à 5 jours ouvrés en DACH",
    sec3Bullet4: "Pas d’alimentation, aucune maintenance",
    sec4Eyebrow: "Protection des données",
    sec4Heading: "Conforme DSGVO : aucun tracking dissimulé.",
    sec4Body1:
      "Taskey ne saisit la position qu’au moment du tap – pas en continu en arrière-plan. Vos agents ne sont pas géolocalisés en permanence. Le point GPS sert uniquement à confirmer que la saisie a bien eu lieu sur le site enregistré.",
    sec4Body2:
      "Toutes les données sont hébergées sur des serveurs allemands, transmises et stockées chiffrées, et le contrat de sous-traitance (DPA) est disponible au téléchargement dans le compte. Comités d’entreprise et délégués à la protection des données reçoivent un livre blanc complet sur demande.",
    faq1Q: "Quels smartphones prennent en charge le pointage NFC de Taskey ?",
    faq1A:
      "Tous les iPhone à partir de l’iPhone 7 et la quasi-totalité des smartphones Android des 8 dernières années intègrent le NFC. Taskey fonctionne sous iOS 14+ et Android 9+.",
    faq2Q: "Combien coûtent les tags NFC ?",
    faq2A:
      "Les premiers tags par site sont inclus dans chaque formule. Les tags supplémentaires sont disponibles à un prix avantageux – selon la quantité. Contactez-nous pour une offre individuelle.",
    faq3Q: "Les agents peuvent-ils taper le tag depuis chez eux pour gonfler leurs heures ?",
    faq3A:
      "Non. Chaque tap est en plus vérifié avec la position GPS du smartphone. Si le tap n’a pas lieu sur le site enregistré, l’entrée est marquée automatiquement et présentée comme cas suspect.",
    faq4Q: "Que faire si un tag NFC est endommagé ou volé ?",
    faq4A:
      "Vous bloquez l’ancien tag dans votre compte Taskey et en attribuez un nouveau. L’ancien tag ne produit plus d’entrée valide. L’historique reste intégralement conservé.",
    faq5Q: "Faut-il un tag par agent ?",
    faq5A:
      "Non. Les tags NFC sont posés sur le site, pas sur l’agent. L’agent est identifié par son smartphone. C’est moins cher et plus adapté à la rotation du personnel.",
    faq6Q: "Quelle est la différence entre pointage NFC et scan QR ?",
    faq6A:
      "Le NFC est plus rapide (pas d’app à ouvrir, pas de caméra), fonctionne dans l’obscurité, avec saleté ou condensation, et est nettement plus infalsifiable. Les QR codes peuvent être photographiés et scannés après coup – les tags NFC physiquement non.",
    rel1Label: "Logiciel pour le nettoyage de bâtiments",
    rel1Desc: "Logiciel métier tout-en-un : planification, justificatif NFC, pointage, devis, factures, marges en direct.",
    rel2Label: "Pointage Nettoyage de bâtiments (vue d’ensemble)",
    rel2Desc: "Toutes les manières de saisir le temps de travail dans le nettoyage en toute sécurité juridique.",
    rel3Label: "Justificatif d’intervention – Nettoyage de bâtiments",
    rel3Desc: "Chaque tap NFC devient automatiquement un justificatif pour le donneur d’ordre.",
    rel4Label: "Nettoyage d’entretien avec NFC",
    rel4Desc: "Comment le NFC change le quotidien des contrats de nettoyage récurrents.",
  },
} as const;

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = CONTENT[pickLocale(locale)];
  return (
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
          subsections: [
            { heading: c.sec1Sub1Heading, body: c.sec1Sub1Body },
            { heading: c.sec1Sub2Heading, body: c.sec1Sub2Body },
            { heading: c.sec1Sub3Heading, body: c.sec1Sub3Body },
            { heading: c.sec1Sub4Heading, body: c.sec1Sub4Body },
          ],
        },
        {
          eyebrow: c.sec2Eyebrow,
          heading: c.sec2Heading,
          intro: c.sec2Intro,
          bullets: [
            c.sec2Bullet1,
            c.sec2Bullet2,
            c.sec2Bullet3,
            c.sec2Bullet4,
            c.sec2Bullet5,
            c.sec2Bullet6,
          ],
        },
        {
          eyebrow: c.sec3Eyebrow,
          heading: c.sec3Heading,
          body: [c.sec3Body1, c.sec3Body2, c.sec3Body3],
          bullets: [
            c.sec3Bullet1,
            c.sec3Bullet2,
            c.sec3Bullet3,
            c.sec3Bullet4,
          ],
        },
        {
          eyebrow: c.sec4Eyebrow,
          heading: c.sec4Heading,
          body: [c.sec4Body1, c.sec4Body2],
        },
      ]}
      faqs={[
        { question: c.faq1Q, answer: c.faq1A },
        { question: c.faq2Q, answer: c.faq2A },
        { question: c.faq3Q, answer: c.faq3A },
        { question: c.faq4Q, answer: c.faq4A },
        { question: c.faq5Q, answer: c.faq5A },
        { question: c.faq6Q, answer: c.faq6A },
      ]}
      related={[
        {
          href: "/software-gebaeudereinigung",
          label: c.rel1Label,
          description: c.rel1Desc,
        },
        {
          href: "/zeiterfassung-gebaeudereinigung",
          label: c.rel2Label,
          description: c.rel2Desc,
        },
        {
          href: "/leistungsnachweis-gebaeudereinigung",
          label: c.rel3Label,
          description: c.rel3Desc,
        },
        {
          href: "/loesungen/unterhaltsreinigung",
          label: c.rel4Label,
          description: c.rel4Desc,
        },
      ]}
    />
  );
}
