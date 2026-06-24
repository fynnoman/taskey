import type { Metadata } from "next";
import LandingPageTemplate from "@/components/landing/LandingPageTemplate";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/leistungsnachweis-gebaeudereinigung";

const META_COPY: PageCopy = {
  de: {
    title:
      "Leistungsnachweis Gebäudereinigung | Digital & rechtssicher | Taskey",
    description:
      "Digitaler Leistungsnachweis für Gebäudereinigung: NFC, GPS, Fotos und Unterschriften – manipulationssicher dokumentiert. Schluss mit Reklamationen.",
  },
  en: {
    title:
      "Proof of Service for Building Cleaning | Digital & audit-proof | Taskey",
    description:
      "Digital proof of service for building cleaning: NFC, GPS, photos and signatures — tamper-proof documentation. End the dispute over what was actually cleaned.",
  },
  fr: {
    title:
      "Justificatif de prestation nettoyage | Numérique & opposable | Taskey",
    description:
      "Justificatif de prestation numérique pour le nettoyage de bâtiments : NFC, GPS, photos et signatures – documentation infalsifiable. Fini les réclamations.",
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
    image: "/opengraph-image",
  });
}

const CONTENT = {
  de: {
    title: "Leistungsnachweis Gebäudereinigung",
    eyebrow: "Pillar · Nachweis",
    h1: "Leistungsnachweis Gebäudereinigung —",
    h1Accent: "digital, manipulationssicher, rechtssicher.",
    lead: `„Wir waren da, ehrlich!“ reicht nicht. Bei jeder Reklamation, jedem Auftraggeber-Wechsel und jedem Vertragsende entscheidet ein Nachweis darüber, ob Sie bezahlt werden. Taskey dokumentiert jeden Einsatz automatisch: per NFC-Scan, GPS, Foto und – wenn nötig – mit digitaler Unterschrift.`,
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Leistungsnachweis Gebäudereinigung",
    sec1Eyebrow: "Warum überhaupt Nachweis?",
    sec1Heading: "Reklamationen kosten Geld. Nachweise nicht.",
    sec1Intro:
      "Im Gebäudereinigungs-Alltag tauchen Reklamationen genau dann auf, wenn der Auftraggeber selbst Druck hat – Audit-Termin, Mietwechsel, interner Streit. Wer dann keinen Nachweis hat, zahlt drauf.",
    sec1Body1:
      "Ein typischer Fall: Der Hausverwalter behauptet, das Treppenhaus sei am Dienstag nicht gereinigt worden. Ohne Nachweis bleiben Ihnen drei Optionen: a) die Reinigung kostenlos wiederholen, b) eine Gutschrift ausstellen oder c) sich auf einen Konflikt einlassen, der den Vertrag kosten kann.",
    sec1Body2:
      "Mit einem digitalen Leistungsnachweis ist der Fall in einer Minute geklärt: NFC-Scan um 6:32 Uhr, GPS-Punkt am Objekt, Mitarbeitername, Foto vom gereinigten Treppenhaus. Diskussion beendet.",
    sec1Bullet1: "Vermeidet Streit über erbrachte vs. abgerechnete Leistung",
    sec1Bullet2: "Schützt vor unberechtigten Gutschriften",
    sec1Bullet3: "Hilft bei Auftraggeber-Audits und ISO-Zertifizierungen",
    sec1Bullet4: "Ist Voraussetzung für viele öffentliche Ausschreibungen",
    sec2Eyebrow: "Wie Taskey nachweist",
    sec2Heading: "Vier Belege pro Einsatz – automatisch.",
    sec2Sub1Heading: "NFC-Scan am Objekt",
    sec2Sub1Body:
      "Der Mitarbeiter hält das Handy an den NFC-Tag. Zeitstempel + Tag-ID gehen in den Datensatz. Manipulation ausgeschlossen – der Tag ist physisch am Objekt.",
    sec2Sub2Heading: "GPS-Standort",
    sec2Sub2Body:
      "Im Moment des Scans wird der GPS-Punkt erfasst. Liegt er außerhalb des hinterlegten Objekt-Radius, wird der Eintrag markiert und gesondert geprüft.",
    sec2Sub3Heading: "Foto-Nachweis",
    sec2Sub3Body:
      "Optional pro Einsatz oder pro Bereich: Foto vorher/nachher, Fotos kritischer Stellen, Foto vom Reklamations-Fund. Alle Bilder mit Zeit, Ort und Mitarbeiter signiert.",
    sec2Sub4Heading: "Digitale Unterschrift",
    sec2Sub4Body:
      "Wo gewünscht: Hausmeister oder Auftraggeber unterschreibt direkt auf dem Smartphone-Display – etwa bei Sonderreinigung oder Abnahme. PDF wird automatisch erzeugt und versendet.",
    sec3Eyebrow: "Auftraggeber-Zugang",
    sec3Heading: "Vertrauen schaffen, statt nur reklamieren zu lassen.",
    sec3Body1:
      "Taskey Share gibt jedem Auftraggeber einen eigenen Login mit Echtzeit-Übersicht aller Einsätze für seine Objekte – inklusive Nachweisen, Beanstandungs-Funktion und Statistik.",
    sec3Body2:
      "Der Effekt: Auftraggeber sehen selbst, dass Sie liefern. Reklamationen entstehen seltener, weil das Vertrauen größer ist. Und wenn doch mal etwas zu klären ist, hat der Auftraggeber den Beleg vor sich – ohne Sie anrufen zu müssen.",
    sec3Body3:
      "Für Sie als Inhaber bedeutet das: weniger Rückfragen, höhere Verlängerungsrate bei Verträgen und bessere Verhandlungsposition bei Nachverhandlungen.",
    sec4Eyebrow: "Rechtssicherheit",
    sec4Heading: "Was vor Gericht zählt – und wie Taskey dort steht.",
    sec4Body1:
      "Digitale Nachweise sind in Deutschland grundsätzlich als Beweismittel zulässig (§371a ZPO), sofern sie manipulationssicher dokumentiert sind. Taskey erfüllt diese Anforderung durch versionierte Datensätze, kryptografische Signaturen jedes Eintrags und ein lückenloses Audit-Log jeder nachträglichen Änderung.",
    sec4Body2:
      "Im Streitfall können Sie alle relevanten Belege als signiertes PDF exportieren – mit Zeitstempel, Mitarbeiter, GPS, Foto und ggf. Unterschrift. Solche PDFs werden in Schiedsverfahren und vor Amtsgerichten regelmäßig akzeptiert.",
    faq1Q: "Ist ein digitaler Leistungsnachweis vor Gericht gültig?",
    faq1A:
      "Ja. Nach §371a ZPO sind digitale Belege grundsätzlich zulässig. Voraussetzung ist Manipulationssicherheit – die Taskey durch versionierte, kryptografisch signierte Datensätze und lückenloses Audit-Log erfüllt.",
    faq2Q: "Können meine Mitarbeitenden den Nachweis nachträglich ändern?",
    faq2A:
      "Nein. Mitarbeitende können einen Einsatz lediglich melden, wenn etwas Außergewöhnliches passiert (z.B. Schaden gefunden). Änderungen an Zeitstempeln und GPS-Daten sind technisch nur über Admin-Rolle möglich – mit voller Audit-Spur.",
    faq3Q: "Wie schickt der Auftraggeber eine Beanstandung?",
    faq3A:
      "Über den Taskey-Share-Login: Er klickt auf den jeweiligen Einsatz, fotografiert die beanstandete Stelle und gibt einen Kommentar ein. Sie sehen die Reklamation sofort und können direkt antworten oder einen Folge-Einsatz auslösen.",
    faq4Q: "Kann ich den Nachweis als PDF an meinen Auftraggeber schicken?",
    faq4A:
      "Ja. Pro Objekt, Zeitraum oder Auftrag exportieren Sie ein signiertes PDF mit allen Belegen, Fotos und Unterschriften. Auf Wunsch automatisch monatlich am Monatsersten per E-Mail.",
    faq5Q: "Wie lange werden die Nachweise gespeichert?",
    faq5A:
      "Standardmäßig über die gesamte gesetzliche Aufbewahrungsfrist (mind. 2 Jahre, in vielen Fällen 10 Jahre für steuerrelevante Unterlagen) – auch nach Ende der Geschäftsbeziehung mit dem Auftraggeber.",
    faq6Q: "Was passiert, wenn ein Auftraggeber Zugriff auf falsche Objekte hätte?",
    faq6A:
      "Jeder Auftraggeber-Login ist auf seine eigenen Objekte beschränkt. Er sieht weder andere Kunden noch Mitarbeiter-Stammdaten. Sie konfigurieren die Sichtbarkeit feingranular pro Rolle.",
    rel1Label: "Software für Gebäudereinigung",
    rel1Desc: "All-in-One Branchensoftware: Einsatzplanung, NFC-Nachweis, Zeiterfassung, Angebote, Rechnungen, Live-Margen.",
    rel2Label: "NFC Zeiterfassung",
    rel2Desc: "Aus jedem NFC-Tap wird automatisch ein Teil des Leistungsnachweises.",
    rel3Label: "Zeiterfassung Gebäudereinigung",
    rel3Desc: "Wie die Arbeitszeit lückenlos und gleichzeitig nachweissicher erfasst wird.",
    rel4Label: "Klinikreinigung",
    rel4Desc: "Wo der Nachweis besonders streng sein muss – und wie Taskey das löst.",
  },
  en: {
    title: "Proof of Service – Building Cleaning",
    eyebrow: "Pillar · Proof of Service",
    h1: "Proof of service for building cleaning —",
    h1Accent: "digital, tamper-proof, legally watertight.",
    lead: `“We were there, honestly!” isn’t enough. With every complaint, every client change and every contract ending, it’s the proof that decides whether you get paid. Taskey documents every assignment automatically: by NFC scan, GPS, photo and – when needed – with a digital signature.`,
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Proof of Service – Building Cleaning",
    sec1Eyebrow: "Why have proof at all?",
    sec1Heading: "Complaints cost money. Proof doesn’t.",
    sec1Intro:
      "In day-to-day building cleaning, complaints appear precisely when the client is under pressure themselves – audit due, change of tenant, internal dispute. If you don’t have proof at that point, you pay the price.",
    sec1Body1:
      "A typical case: the property manager claims the staircase wasn’t cleaned on Tuesday. Without proof you have three options: a) redo the cleaning for free, b) issue a credit note, or c) get into a conflict that may cost you the contract.",
    sec1Body2:
      "With digital proof of service, the case is resolved in a minute: NFC scan at 6:32 am, GPS point at the site, name of the cleaner, photo of the cleaned staircase. Discussion over.",
    sec1Bullet1: "Prevents disputes over delivered vs. invoiced work",
    sec1Bullet2: "Protects against unjustified credit notes",
    sec1Bullet3: "Supports client audits and ISO certifications",
    sec1Bullet4: "Is a requirement for many public tenders",
    sec2Eyebrow: "How Taskey proves it",
    sec2Heading: "Four pieces of evidence per assignment – automatically.",
    sec2Sub1Heading: "NFC scan at the site",
    sec2Sub1Body:
      "The employee holds their phone to the NFC tag. Timestamp + tag ID go into the record. Tampering is excluded – the tag is physically on the site.",
    sec2Sub2Heading: "GPS location",
    sec2Sub2Body:
      "At the moment of the scan, the GPS point is captured. If it’s outside the configured site radius, the entry is flagged and reviewed separately.",
    sec2Sub3Heading: "Photo evidence",
    sec2Sub3Body:
      "Optional per assignment or per area: before/after photos, photos of critical spots, photos of issues discovered. Every image is signed with time, place and employee.",
    sec2Sub4Heading: "Digital signature",
    sec2Sub4Body:
      "Where required: the caretaker or client signs directly on the smartphone display – for example for special cleaning or hand-overs. A PDF is generated and sent automatically.",
    sec3Eyebrow: "Client access",
    sec3Heading: "Build trust instead of inviting complaints.",
    sec3Body1:
      "Taskey Share gives every client their own login with a real-time overview of all assignments at their sites – including proof, complaints function and statistics.",
    sec3Body2:
      "The effect: clients see for themselves that you deliver. Complaints arise less often because trust is higher. And if something does need clarifying, the client has the evidence in front of them – without having to call you.",
    sec3Body3:
      "For you as the owner, this means: fewer follow-up questions, higher renewal rates on contracts and a better negotiating position when renegotiating.",
    sec4Eyebrow: "Legal certainty",
    sec4Heading: "What matters in court – and where Taskey stands.",
    sec4Body1:
      "Digital evidence is generally admissible in Germany (§371a ZPO), provided it is documented in a tamper-proof way. Taskey meets this requirement with versioned records, cryptographic signatures on every entry, and a complete audit log of every subsequent change.",
    sec4Body2:
      "In a dispute, you can export all relevant evidence as a signed PDF – with timestamp, employee, GPS, photo and, if applicable, signature. Such PDFs are regularly accepted in arbitration and before local courts.",
    faq1Q: "Is digital proof of service valid in court?",
    faq1A:
      "Yes. Under §371a ZPO, digital records are generally admissible. The precondition is tamper-proofing – which Taskey ensures through versioned, cryptographically signed records and a complete audit log.",
    faq2Q: "Can my staff change the proof afterwards?",
    faq2A:
      "No. Staff can only report an assignment if something unusual happens (e.g. damage found). Changes to timestamps and GPS data are only possible technically via the admin role – with a full audit trail.",
    faq3Q: "How does the client submit a complaint?",
    faq3A:
      "Via the Taskey Share login: they click on the assignment in question, photograph the problem area and add a comment. You see the complaint immediately and can reply directly or trigger a follow-up assignment.",
    faq4Q: "Can I send the proof as a PDF to my client?",
    faq4A:
      "Yes. By site, period or job you export a signed PDF with all evidence, photos and signatures. If you wish, automatically every month on the first of the month by email.",
    faq5Q: "How long is the proof stored?",
    faq5A:
      "By default for the entire statutory retention period (at least 2 years, in many cases 10 years for tax-relevant records) – even after the end of the business relationship with the client.",
    faq6Q: "What happens if a client had access to the wrong sites?",
    faq6A:
      "Every client login is restricted to their own sites. They see neither other customers nor employee master data. You configure visibility in fine detail per role.",
    rel1Label: "Software for Building Cleaning",
    rel1Desc: "All-in-one industry software: scheduling, NFC proof of service, time tracking, quotes, invoices, live margins.",
    rel2Label: "NFC Time Tracking",
    rel2Desc: "Every NFC tap automatically becomes part of the proof of service.",
    rel3Label: "Time Tracking for Building Cleaning",
    rel3Desc: "How working time is recorded fully and at the same time as proof.",
    rel4Label: "Hospital Cleaning",
    rel4Desc: "Where proof must be especially strict – and how Taskey solves it.",
  },
  fr: {
    title: "Justificatif d’intervention – Nettoyage de bâtiments",
    eyebrow: "Pillar · Justificatif",
    h1: "Justificatif d’intervention en nettoyage —",
    h1Accent: "numérique, infalsifiable, opposable.",
    lead: `« Nous y étions, parole ! » ne suffit pas. À chaque réclamation, à chaque changement de donneur d’ordre, à chaque fin de contrat, c’est un justificatif qui décide si vous serez payé. Taskey documente chaque intervention automatiquement : scan NFC, GPS, photo et – si besoin – signature numérique.`,
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Justificatif d’intervention – Nettoyage de bâtiments",
    sec1Eyebrow: "Pourquoi un justificatif ?",
    sec1Heading: "Les réclamations coûtent. Pas les justificatifs.",
    sec1Intro:
      "Dans le quotidien du nettoyage de bâtiments, les réclamations surviennent précisément quand le donneur d’ordre est lui-même sous pression – audit imminent, changement de locataire, conflit interne. Sans justificatif à ce moment-là, vous payez.",
    sec1Body1:
      "Cas typique : le gestionnaire affirme que la cage d’escalier n’a pas été nettoyée mardi. Sans justificatif, il vous reste trois options : a) refaire le nettoyage gratuitement, b) émettre un avoir, ou c) entrer en conflit, au risque de perdre le contrat.",
    sec1Body2:
      "Avec un justificatif d’intervention numérique, l’affaire est réglée en une minute : scan NFC à 6 h 32, point GPS sur le site, nom de l’agent, photo de la cage d’escalier nettoyée. Discussion close.",
    sec1Bullet1: "Évite les litiges sur le réalisé vs. le facturé",
    sec1Bullet2: "Protège contre des avoirs injustifiés",
    sec1Bullet3: "Soutient les audits clients et les certifications ISO",
    sec1Bullet4: "Indispensable pour de nombreux appels d’offres publics",
    sec2Eyebrow: "Comment Taskey justifie",
    sec2Heading: "Quatre preuves par intervention – automatiquement.",
    sec2Sub1Heading: "Scan NFC sur le site",
    sec2Sub1Body:
      "L’agent approche son téléphone du tag NFC. Horodatage + ID du tag sont enregistrés. Toute manipulation est exclue – le tag est physiquement fixé sur le site.",
    sec2Sub2Heading: "Localisation GPS",
    sec2Sub2Body:
      "Au moment du scan, le point GPS est capturé. S’il se trouve hors du rayon enregistré pour le site, l’entrée est marquée et contrôlée à part.",
    sec2Sub3Heading: "Preuve photo",
    sec2Sub3Body:
      "En option par intervention ou par zone : photos avant/après, photos de points critiques, photos d’éléments signalés. Toutes les images sont signées avec heure, lieu et agent.",
    sec2Sub4Heading: "Signature numérique",
    sec2Sub4Body:
      "Quand cela s’impose : le gardien ou le donneur d’ordre signe directement sur l’écran du smartphone – p. ex. lors d’un nettoyage spécial ou d’une réception. Le PDF est généré et envoyé automatiquement.",
    sec3Eyebrow: "Accès donneur d’ordre",
    sec3Heading: "Créer de la confiance plutôt que laisser réclamer.",
    sec3Body1:
      "Taskey Share offre à chaque donneur d’ordre son propre identifiant avec une vue en temps réel de toutes les interventions sur ses sites – justificatifs, fonction de réclamation et statistiques incluses.",
    sec3Body2:
      "L’effet : le donneur d’ordre constate lui-même que vous livrez. Les réclamations diminuent parce que la confiance augmente. Et s’il faut clarifier quelque chose, il a déjà la preuve sous les yeux – sans devoir vous appeler.",
    sec3Body3:
      "Pour vous dirigeant, cela signifie : moins de relances, un taux de renouvellement plus élevé sur les contrats, et une meilleure position de négociation.",
    sec4Eyebrow: "Sécurité juridique",
    sec4Heading: "Ce qui compte devant un tribunal – et où se place Taskey.",
    sec4Body1:
      "En Allemagne, les preuves numériques sont en principe recevables (§371a ZPO), à condition d’être documentées de manière infalsifiable. Taskey remplit cette exigence par des enregistrements versionnés, des signatures cryptographiques sur chaque entrée et un journal d’audit complet de toute modification ultérieure.",
    sec4Body2:
      "En cas de litige, vous exportez toutes les preuves pertinentes en PDF signé – avec horodatage, agent, GPS, photo et, le cas échéant, signature. De tels PDF sont régulièrement acceptés en arbitrage et devant les tribunaux d’instance.",
    faq1Q: "Un justificatif numérique est-il valable devant un tribunal ?",
    faq1A:
      "Oui. Selon le §371a ZPO, les preuves numériques sont en principe recevables. La condition est l’infalsifiabilité – que Taskey garantit par des enregistrements versionnés, cryptographiquement signés, et un journal d’audit complet.",
    faq2Q: "Mes agents peuvent-ils modifier le justificatif après coup ?",
    faq2A:
      "Non. Les agents peuvent uniquement signaler une intervention si quelque chose d’inhabituel survient (p. ex. dégât constaté). Les modifications d’horodatage ou de données GPS ne sont techniquement possibles qu’en rôle administrateur – avec une piste d’audit complète.",
    faq3Q: "Comment le donneur d’ordre envoie-t-il une réclamation ?",
    faq3A:
      "Via l’identifiant Taskey Share : il clique sur l’intervention concernée, photographie l’endroit signalé et ajoute un commentaire. Vous voyez la réclamation immédiatement et pouvez répondre ou déclencher une intervention de suivi.",
    faq4Q: "Puis-je envoyer le justificatif en PDF à mon donneur d’ordre ?",
    faq4A:
      "Oui. Par site, période ou contrat, vous exportez un PDF signé avec toutes les preuves, photos et signatures. Au besoin, automatiquement chaque mois, le 1er, par e-mail.",
    faq5Q: "Combien de temps les justificatifs sont-ils conservés ?",
    faq5A:
      "Par défaut pendant toute la durée légale de conservation (au moins 2 ans, souvent 10 ans pour les pièces fiscales) – y compris après la fin de la relation commerciale avec le donneur d’ordre.",
    faq6Q: "Que se passe-t-il si un donneur d’ordre avait accès à de mauvais sites ?",
    faq6A:
      "Chaque identifiant donneur d’ordre est limité à ses propres sites. Il ne voit ni les autres clients ni les fiches du personnel. Vous configurez la visibilité finement, rôle par rôle.",
    rel1Label: "Logiciel pour le nettoyage de bâtiments",
    rel1Desc: "Logiciel métier tout-en-un : planification, justificatif NFC, pointage, devis, factures, marges en direct.",
    rel2Label: "Pointage NFC",
    rel2Desc: "Chaque tap NFC devient automatiquement une partie du justificatif d’intervention.",
    rel3Label: "Pointage Nettoyage de bâtiments",
    rel3Desc: "Comment le temps de travail est saisi de façon exhaustive et opposable.",
    rel4Label: "Nettoyage hospitalier",
    rel4Desc: "Là où le justificatif doit être particulièrement rigoureux – et comment Taskey y répond.",
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
          body: [c.sec1Body1, c.sec1Body2],
          bullets: [c.sec1Bullet1, c.sec1Bullet2, c.sec1Bullet3, c.sec1Bullet4],
        },
        {
          eyebrow: c.sec2Eyebrow,
          heading: c.sec2Heading,
          subsections: [
            {
              heading: c.sec2Sub1Heading,
              body: c.sec2Sub1Body,
              image: "/sections/nfc-scan-objekt.png",
              imageAlt: c.sec2Sub1Heading,
            },
            { heading: c.sec2Sub2Heading, body: c.sec2Sub2Body },
            { heading: c.sec2Sub3Heading, body: c.sec2Sub3Body },
            { heading: c.sec2Sub4Heading, body: c.sec2Sub4Body },
          ],
        },
        {
          eyebrow: c.sec3Eyebrow,
          heading: c.sec3Heading,
          body: [c.sec3Body1, c.sec3Body2, c.sec3Body3],
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
          href: "/nfc-zeiterfassung",
          label: c.rel2Label,
          description: c.rel2Desc,
        },
        {
          href: "/zeiterfassung-gebaeudereinigung",
          label: c.rel3Label,
          description: c.rel3Desc,
        },
        {
          href: "/loesungen/klinikreinigung",
          label: c.rel4Label,
          description: c.rel4Desc,
        },
      ]}
    />
  );
}
