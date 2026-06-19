import type { Metadata } from "next";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const META: PageCopy = {
  de: {
    title: "Datenschutzerklärung",
    description:
      "Datenschutzerklärung von Taskey - Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  },
  en: {
    title: "Privacy policy",
    description:
      "Taskey privacy policy – information on the processing of personal data in accordance with the GDPR.",
  },
  fr: {
    title: "Politique de confidentialité",
    description:
      "Politique de confidentialité de Taskey – informations sur le traitement des données personnelles conformément au RGPD.",
  },
};

const CONTENT = {
  de: {
    pageTitle: "Datenschutzerklärung",
    translationNote: "",
    dfsaBadge: "Offizielles Dokument",
    dfsaTitle: "DFSA – Datenschutz-Folgenabschätzung",
    dfsaSubtitle: "Vollständiges Dokument als PDF herunterladen",
    dfsaButton: "PDF öffnen",

    sec1Title: "1. Verantwortlicher",
    sec1Intro: "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
    sec1Name: "Fynn - Luca Schulz",
    sec1Company: "Schulz & Stosse GbR",
    sec1Street: "In der Acht 44",
    sec1City: "66333 Völklingen",
    sec1Email: "E-Mail: fynn@taskeyapp.com",
    sec1Phone: "Telefon: 015168488999",

    sec2Title: "2. Allgemeines zur Datenverarbeitung",
    sec2P1:
      "Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Personenbezogene Daten werden auf dieser Website ausschließlich im Rahmen der gesetzlichen Bestimmungen der Datenschutz-Grundverordnung (DSGVO) sowie weiterer einschlägiger Datenschutzgesetze verarbeitet.",
    sec2P2:
      "Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",

    sec3Title: "3. Erhebung und Speicherung personenbezogener Daten beim Besuch der Website",
    sec3Intro:
      "Beim Aufrufen unserer Website werden durch den Browser automatisch folgende Informationen an unseren Server übermittelt:",
    sec3List: [
      "IP-Adresse",
      "Datum und Uhrzeit der Anfrage",
      "Zeitzonendifferenz zur GMT",
      "Inhalt der Anforderung",
      "Zugriffsstatus / HTTP-Statuscode",
      "Browsertyp und -version",
      "Betriebssystem",
      "Referrer-URL",
    ],
    sec3AfterList: "Diese Daten werden temporär in Logfiles gespeichert.",
    sec3PurposeLabel: "Zweck der Verarbeitung:",
    sec3PurposeList: [
      "Gewährleistung eines reibungslosen Verbindungsaufbaus",
      "Systemsicherheit und -stabilität",
      "technische Administration",
    ],
    sec3LegalLabel: "Rechtsgrundlage:",
    sec3LegalValue: "Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)",

    sec4Title: "4. Kontaktaufnahme",
    sec4P1:
      "Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, werden die von Ihnen übermittelten Daten verarbeitet (z. B. Name, E-Mail-Adresse, Nachricht).",
    sec4PurposeLabel: "Zweck der Verarbeitung:",
    sec4PurposeValue: "Bearbeitung Ihrer Anfrage und Kommunikation.",
    sec4LegalLabel: "Rechtsgrundlage:",
    sec4LegalValue:
      "Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO",

    sec5Title: "5. Newsletter / Wartelisten (falls genutzt)",
    sec5P1:
      "Sofern Sie sich für einen Newsletter oder eine Warteliste anmelden, verarbeiten wir Ihre E-Mail-Adresse und ggf. weitere freiwillige Angaben.",
    sec5LegalLabel: "Rechtsgrundlage:",
    sec5LegalValue: "Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)",
    sec5Revocable: "Die Einwilligung kann jederzeit widerrufen werden.",

    sec6Title: "6. Cookies und ähnliche Technologien",
    sec6Intro:
      "Unsere Website verwendet Cookies und ähnliche Technologien. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und bestimmte Einstellungen und Daten zum Austausch mit unserem System über Ihren Browser speichern.",
    sec6CatTitle: "Cookie-Kategorien",

    sec6Cat1Title: "Technisch notwendige Cookies",
    sec6Cat1Body:
      "Diese Cookies sind für den Betrieb der Website zwingend erforderlich und können nicht deaktiviert werden.",
    sec6Cat1Purpose: "Zweck:",
    sec6Cat1PurposeValue: "Seitennavigation, Speicherung Ihrer Cookie-Auswahl, Systemstabilität",
    sec6Cat1Legal: "Rechtsgrundlage:",
    sec6Cat1LegalValue: "Art. 6 Abs. 1 lit. f DSGVO, § 25 Abs. 2 TTDSG",
    sec6Cat1Consent: "Einwilligung erforderlich:",
    sec6Cat1ConsentValue: "Nein",

    sec6Cat2Title: "Funktionale Cookies",
    sec6Cat2Body:
      "Diese Cookies ermöglichen erweiterte Funktionen wie Spracheinstellungen oder regionale Präferenzen.",
    sec6Cat2Legal: "Rechtsgrundlage:",
    sec6Cat2LegalValue: "Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG",
    sec6Cat2Consent: "Einwilligung erforderlich:",
    sec6Cat2ConsentValue: "Ja",
    sec6Cat2Duration: "Speicherdauer:",
    sec6Cat2DurationValue: "Bis zu 12 Monate",

    sec6Cat3Title: "Analyse- und Statistik-Cookies",
    sec6Cat3Body:
      "Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen. Die Auswertung erfolgt anonym oder pseudonym.",
    sec6Cat3Legal: "Rechtsgrundlage:",
    sec6Cat3LegalValue: "Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG",
    sec6Cat3Consent: "Einwilligung erforderlich:",
    sec6Cat3ConsentValue: "Ja",
    sec6Cat3Duration: "Speicherdauer:",
    sec6Cat3DurationValue: "Bis zu 14 Monate",

    sec6Cat4Title: "Marketing- und Tracking-Cookies",
    sec6Cat4Body:
      "Diese Cookies werden verwendet, um Besuchern relevante Inhalte anzuzeigen und die Wirksamkeit von Marketingmaßnahmen zu messen.",
    sec6Cat4Legal: "Rechtsgrundlage:",
    sec6Cat4LegalValue: "Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG",
    sec6Cat4Consent: "Einwilligung erforderlich:",
    sec6Cat4ConsentValue: "Ja",

    sec6Cat5Title: "Externe Inhalte",
    sec6Cat5Body:
      "Externe Inhalte von Drittanbietern (z. B. Videos, Karten) können Cookies setzen.",
    sec6Cat5Legal: "Rechtsgrundlage:",
    sec6Cat5LegalValue: "Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG",
    sec6Cat5Consent: "Einwilligung erforderlich:",
    sec6Cat5ConsentValue: "Ja",

    sec6ManageLabel: "Cookie-Einstellungen verwalten:",
    sec6ManageBody:
      "Sie können Ihre Cookie-Einwilligung jederzeit über den Link “Cookie-Einstellungen” in der Fußzeile unserer Website ändern oder widerrufen.",

    sec7Title: "7. Analyse- und Tracking-Tools",
    sec7P1:
      "Sofern Analyse-Tools (z. B. Google Analytics, Plausible, etc.) eingesetzt werden, erfolgt dies nur nach Ihrer Einwilligung.",
    sec7ListIntro: "Verarbeitete Daten können sein:",
    sec7List: [
      "IP-Adresse (gekürzt/anonymisiert)",
      "Nutzungsverhalten",
      "Seitenaufrufe",
    ],
    sec7LegalLabel: "Rechtsgrundlage:",
    sec7LegalValue: "Art. 6 Abs. 1 lit. a DSGVO",

    sec8Title: "8. Hosting",
    sec8P1: "Die Website wird bei einem externen Hosting-Anbieter betrieben.",
    sec8DataLabel: "Verarbeitete Daten:",
    sec8DataValue: "alle im Rahmen des Websitebetriebs anfallenden Daten.",
    sec8LegalLabel: "Rechtsgrundlage:",
    sec8LegalValue: "Art. 6 Abs. 1 lit. f DSGVO",
    sec8AVV:
      "Mit dem Hosting-Anbieter besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.",

    sec9Title: "9. Weitergabe von Daten",
    sec9Intro: "Eine Weitergabe personenbezogener Daten erfolgt nur, wenn:",
    sec9List: [
      "Sie ausdrücklich eingewilligt haben",
      "eine gesetzliche Verpflichtung besteht",
      "dies zur Vertragsabwicklung erforderlich ist",
    ],

    sec10Title: "10. Speicherdauer",
    sec10P1:
      "Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.",

    sec11Title: "11. Rechte der betroffenen Personen",
    sec11Intro: "Sie haben jederzeit das Recht auf:",
    sec11List: [
      "Auskunft (Art. 15 DSGVO)",
      "Berichtigung (Art. 16 DSGVO)",
      "Löschung (Art. 17 DSGVO)",
      "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      "Datenübertragbarkeit (Art. 20 DSGVO)",
      "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
    ],

    sec12Title: "12. Beschwerderecht",
    sec12P1:
      "Sie haben das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.",

    sec13Title: "13. Datensicherheit",
    sec13P1:
      "Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Verlust, Missbrauch oder unbefugten Zugriff zu schützen.",

    sec14Title: "14. Änderungen dieser Datenschutzerklärung",
    sec14P1: "Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen.",
    sec14Stand: "Stand:",
    dateLocale: "de-DE",
  },
  en: {
    pageTitle: "Privacy policy",
    translationNote:
      "This document is a translation for convenience. The legally binding version is the German original.",
    dfsaBadge: "Official document",
    dfsaTitle: "DPIA – Data Protection Impact Assessment",
    dfsaSubtitle: "Download the full document as PDF",
    dfsaButton: "Open PDF",

    sec1Title: "1. Controller",
    sec1Intro: "The controller responsible for data processing on this website is:",
    sec1Name: "Fynn - Luca Schulz",
    sec1Company: "Schulz & Stosse GbR",
    sec1Street: "In der Acht 44",
    sec1City: "66333 Völklingen",
    sec1Email: "Email: fynn@taskeyapp.com",
    sec1Phone: "Phone: 015168488999",

    sec2Title: "2. General information on data processing",
    sec2P1:
      "We take the protection of your personal data very seriously. Personal data is processed on this website exclusively within the framework of the legal provisions of the General Data Protection Regulation (DSGVO) and other applicable data protection laws.",
    sec2P2:
      "Personal data is any data with which you can be personally identified.",

    sec3Title: "3. Collection and storage of personal data when visiting the website",
    sec3Intro:
      "When you access our website, the following information is automatically transmitted to our server by your browser:",
    sec3List: [
      "IP address",
      "Date and time of the request",
      "Time zone difference from GMT",
      "Content of the request",
      "Access status / HTTP status code",
      "Browser type and version",
      "Operating system",
      "Referrer URL",
    ],
    sec3AfterList: "This data is stored temporarily in log files.",
    sec3PurposeLabel: "Purpose of processing:",
    sec3PurposeList: [
      "Ensuring a smooth connection setup",
      "System security and stability",
      "Technical administration",
    ],
    sec3LegalLabel: "Legal basis:",
    sec3LegalValue: "Art. 6 Abs. 1 lit. f DSGVO (legitimate interest)",

    sec4Title: "4. Contacting us",
    sec4P1:
      "If you contact us via the contact form, email or phone, the data you submit will be processed (e.g. name, email address, message).",
    sec4PurposeLabel: "Purpose of processing:",
    sec4PurposeValue: "Handling your enquiry and communication.",
    sec4LegalLabel: "Legal basis:",
    sec4LegalValue:
      "Art. 6 Abs. 1 lit. b DSGVO (pre-contractual measures) or Art. 6 Abs. 1 lit. f DSGVO",

    sec5Title: "5. Newsletter / waiting lists (where used)",
    sec5P1:
      "If you sign up for a newsletter or a waiting list, we will process your email address and, where applicable, other voluntary information.",
    sec5LegalLabel: "Legal basis:",
    sec5LegalValue: "Art. 6 Abs. 1 lit. a DSGVO (consent)",
    sec5Revocable: "Consent can be withdrawn at any time.",

    sec6Title: "6. Cookies and similar technologies",
    sec6Intro:
      "Our website uses cookies and similar technologies. Cookies are small text files that are stored on your device and save certain settings and data for exchange with our system via your browser.",
    sec6CatTitle: "Cookie categories",

    sec6Cat1Title: "Strictly necessary cookies",
    sec6Cat1Body:
      "These cookies are essential for the operation of the website and cannot be disabled.",
    sec6Cat1Purpose: "Purpose:",
    sec6Cat1PurposeValue: "Site navigation, storage of your cookie selection, system stability",
    sec6Cat1Legal: "Legal basis:",
    sec6Cat1LegalValue: "Art. 6 Abs. 1 lit. f DSGVO, § 25 Abs. 2 TTDSG",
    sec6Cat1Consent: "Consent required:",
    sec6Cat1ConsentValue: "No",

    sec6Cat2Title: "Functional cookies",
    sec6Cat2Body:
      "These cookies enable advanced features such as language settings or regional preferences.",
    sec6Cat2Legal: "Legal basis:",
    sec6Cat2LegalValue: "Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG",
    sec6Cat2Consent: "Consent required:",
    sec6Cat2ConsentValue: "Yes",
    sec6Cat2Duration: "Storage duration:",
    sec6Cat2DurationValue: "Up to 12 months",

    sec6Cat3Title: "Analytics and statistics cookies",
    sec6Cat3Body:
      "These cookies help us understand how visitors use our website. The evaluation is carried out anonymously or pseudonymously.",
    sec6Cat3Legal: "Legal basis:",
    sec6Cat3LegalValue: "Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG",
    sec6Cat3Consent: "Consent required:",
    sec6Cat3ConsentValue: "Yes",
    sec6Cat3Duration: "Storage duration:",
    sec6Cat3DurationValue: "Up to 14 months",

    sec6Cat4Title: "Marketing and tracking cookies",
    sec6Cat4Body:
      "These cookies are used to show visitors relevant content and to measure the effectiveness of marketing activities.",
    sec6Cat4Legal: "Legal basis:",
    sec6Cat4LegalValue: "Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG",
    sec6Cat4Consent: "Consent required:",
    sec6Cat4ConsentValue: "Yes",

    sec6Cat5Title: "External content",
    sec6Cat5Body:
      "External content from third parties (e.g. videos, maps) may set cookies.",
    sec6Cat5Legal: "Legal basis:",
    sec6Cat5LegalValue: "Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG",
    sec6Cat5Consent: "Consent required:",
    sec6Cat5ConsentValue: "Yes",

    sec6ManageLabel: "Managing cookie settings:",
    sec6ManageBody:
      "You can change or withdraw your cookie consent at any time via the “Cookie settings” link in the footer of our website.",

    sec7Title: "7. Analytics and tracking tools",
    sec7P1:
      "If analytics tools (e.g. Google Analytics, Plausible, etc.) are used, this is done only with your consent.",
    sec7ListIntro: "Processed data may include:",
    sec7List: [
      "IP address (truncated/anonymised)",
      "Usage behaviour",
      "Page views",
    ],
    sec7LegalLabel: "Legal basis:",
    sec7LegalValue: "Art. 6 Abs. 1 lit. a DSGVO",

    sec8Title: "8. Hosting",
    sec8P1: "The website is operated by an external hosting provider.",
    sec8DataLabel: "Processed data:",
    sec8DataValue: "all data arising in connection with the operation of the website.",
    sec8LegalLabel: "Legal basis:",
    sec8LegalValue: "Art. 6 Abs. 1 lit. f DSGVO",
    sec8AVV:
      "A data processing agreement pursuant to Art. 28 DSGVO is in place with the hosting provider.",

    sec9Title: "9. Disclosure of data",
    sec9Intro: "Personal data is only disclosed if:",
    sec9List: [
      "you have expressly consented",
      "there is a legal obligation",
      "this is necessary for the performance of a contract",
    ],

    sec10Title: "10. Storage period",
    sec10P1:
      "Personal data is only stored for as long as is necessary for the respective purposes or as required by statutory retention periods.",

    sec11Title: "11. Rights of data subjects",
    sec11Intro: "You have the right at any time to:",
    sec11List: [
      "Access (Art. 15 DSGVO)",
      "Rectification (Art. 16 DSGVO)",
      "Erasure (Art. 17 DSGVO)",
      "Restriction of processing (Art. 18 DSGVO)",
      "Data portability (Art. 20 DSGVO)",
      "Objection to processing (Art. 21 DSGVO)",
    ],

    sec12Title: "12. Right of complaint",
    sec12P1:
      "You have the right to lodge a complaint with a competent data protection supervisory authority.",

    sec13Title: "13. Data security",
    sec13P1:
      "We use appropriate technical and organisational measures to protect your data against loss, misuse or unauthorised access.",

    sec14Title: "14. Changes to this privacy policy",
    sec14P1: "We reserve the right to adapt this privacy policy as required.",
    sec14Stand: "As of:",
    dateLocale: "en-US",
  },
  fr: {
    pageTitle: "Politique de confidentialité",
    translationNote:
      "Ce document est une traduction de courtoisie. Seule la version originale allemande fait foi.",
    dfsaBadge: "Document officiel",
    dfsaTitle: "AIPD – Analyse d'impact relative à la protection des données",
    dfsaSubtitle: "Télécharger le document complet en PDF",
    dfsaButton: "Ouvrir le PDF",

    sec1Title: "1. Responsable du traitement",
    sec1Intro: "Le responsable du traitement des données sur ce site est :",
    sec1Name: "Fynn - Luca Schulz",
    sec1Company: "Schulz & Stosse GbR",
    sec1Street: "In der Acht 44",
    sec1City: "66333 Völklingen",
    sec1Email: "E-mail : fynn@taskeyapp.com",
    sec1Phone: "Téléphone : 015168488999",

    sec2Title: "2. Informations générales sur le traitement des données",
    sec2P1:
      "Nous prenons très au sérieux la protection de vos données personnelles. Les données personnelles sont traitées sur ce site exclusivement dans le cadre des dispositions légales du Règlement général sur la protection des données (DSGVO) et des autres lois applicables en matière de protection des données.",
    sec2P2:
      "Les données personnelles sont toutes les données permettant de vous identifier personnellement.",

    sec3Title: "3. Collecte et conservation des données personnelles lors de la visite du site",
    sec3Intro:
      "Lorsque vous consultez notre site, votre navigateur transmet automatiquement les informations suivantes à notre serveur :",
    sec3List: [
      "Adresse IP",
      "Date et heure de la requête",
      "Décalage horaire par rapport à GMT",
      "Contenu de la requête",
      "Statut d'accès / code d'état HTTP",
      "Type et version du navigateur",
      "Système d'exploitation",
      "URL de référence",
    ],
    sec3AfterList: "Ces données sont stockées temporairement dans des fichiers journaux.",
    sec3PurposeLabel: "Finalité du traitement :",
    sec3PurposeList: [
      "Garantir l'établissement d'une connexion fluide",
      "Sécurité et stabilité du système",
      "Administration technique",
    ],
    sec3LegalLabel: "Base juridique :",
    sec3LegalValue: "Art. 6 Abs. 1 lit. f DSGVO (intérêt légitime)",

    sec4Title: "4. Prise de contact",
    sec4P1:
      "Lorsque vous nous contactez via le formulaire de contact, par e-mail ou par téléphone, les données que vous transmettez sont traitées (par ex. nom, adresse e-mail, message).",
    sec4PurposeLabel: "Finalité du traitement :",
    sec4PurposeValue: "Traitement de votre demande et communication.",
    sec4LegalLabel: "Base juridique :",
    sec4LegalValue:
      "Art. 6 Abs. 1 lit. b DSGVO (mesures précontractuelles) ou Art. 6 Abs. 1 lit. f DSGVO",

    sec5Title: "5. Newsletter / listes d'attente (le cas échéant)",
    sec5P1:
      "Si vous vous inscrivez à une newsletter ou à une liste d'attente, nous traitons votre adresse e-mail et, le cas échéant, d'autres informations facultatives.",
    sec5LegalLabel: "Base juridique :",
    sec5LegalValue: "Art. 6 Abs. 1 lit. a DSGVO (consentement)",
    sec5Revocable: "Le consentement peut être retiré à tout moment.",

    sec6Title: "6. Cookies et technologies similaires",
    sec6Intro:
      "Notre site utilise des cookies et des technologies similaires. Les cookies sont de petits fichiers texte stockés sur votre appareil qui enregistrent certains paramètres et données pour les échanger avec notre système via votre navigateur.",
    sec6CatTitle: "Catégories de cookies",

    sec6Cat1Title: "Cookies strictement nécessaires",
    sec6Cat1Body:
      "Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés.",
    sec6Cat1Purpose: "Finalité :",
    sec6Cat1PurposeValue:
      "Navigation sur le site, enregistrement de votre choix de cookies, stabilité du système",
    sec6Cat1Legal: "Base juridique :",
    sec6Cat1LegalValue: "Art. 6 Abs. 1 lit. f DSGVO, § 25 Abs. 2 TTDSG",
    sec6Cat1Consent: "Consentement requis :",
    sec6Cat1ConsentValue: "Non",

    sec6Cat2Title: "Cookies fonctionnels",
    sec6Cat2Body:
      "Ces cookies permettent des fonctionnalités avancées telles que les paramètres de langue ou les préférences régionales.",
    sec6Cat2Legal: "Base juridique :",
    sec6Cat2LegalValue: "Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG",
    sec6Cat2Consent: "Consentement requis :",
    sec6Cat2ConsentValue: "Oui",
    sec6Cat2Duration: "Durée de conservation :",
    sec6Cat2DurationValue: "Jusqu'à 12 mois",

    sec6Cat3Title: "Cookies d'analyse et de statistiques",
    sec6Cat3Body:
      "Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site. L'évaluation est effectuée de manière anonyme ou pseudonyme.",
    sec6Cat3Legal: "Base juridique :",
    sec6Cat3LegalValue: "Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG",
    sec6Cat3Consent: "Consentement requis :",
    sec6Cat3ConsentValue: "Oui",
    sec6Cat3Duration: "Durée de conservation :",
    sec6Cat3DurationValue: "Jusqu'à 14 mois",

    sec6Cat4Title: "Cookies marketing et de suivi",
    sec6Cat4Body:
      "Ces cookies sont utilisés pour afficher aux visiteurs des contenus pertinents et mesurer l'efficacité des actions marketing.",
    sec6Cat4Legal: "Base juridique :",
    sec6Cat4LegalValue: "Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG",
    sec6Cat4Consent: "Consentement requis :",
    sec6Cat4ConsentValue: "Oui",

    sec6Cat5Title: "Contenus externes",
    sec6Cat5Body:
      "Les contenus externes de tiers (par ex. vidéos, cartes) peuvent déposer des cookies.",
    sec6Cat5Legal: "Base juridique :",
    sec6Cat5LegalValue: "Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG",
    sec6Cat5Consent: "Consentement requis :",
    sec6Cat5ConsentValue: "Oui",

    sec6ManageLabel: "Gérer les paramètres des cookies :",
    sec6ManageBody:
      "Vous pouvez modifier ou retirer votre consentement aux cookies à tout moment via le lien “Paramètres des cookies” dans le pied de page de notre site.",

    sec7Title: "7. Outils d'analyse et de suivi",
    sec7P1:
      "Si des outils d'analyse (par ex. Google Analytics, Plausible, etc.) sont utilisés, cela n'a lieu qu'avec votre consentement.",
    sec7ListIntro: "Les données traitées peuvent inclure :",
    sec7List: [
      "Adresse IP (tronquée/anonymisée)",
      "Comportement d'utilisation",
      "Pages consultées",
    ],
    sec7LegalLabel: "Base juridique :",
    sec7LegalValue: "Art. 6 Abs. 1 lit. a DSGVO",

    sec8Title: "8. Hébergement",
    sec8P1: "Le site est exploité par un prestataire d'hébergement externe.",
    sec8DataLabel: "Données traitées :",
    sec8DataValue: "toutes les données liées à l'exploitation du site.",
    sec8LegalLabel: "Base juridique :",
    sec8LegalValue: "Art. 6 Abs. 1 lit. f DSGVO",
    sec8AVV:
      "Un contrat de sous-traitance conformément à l'Art. 28 DSGVO a été conclu avec le prestataire d'hébergement.",

    sec9Title: "9. Transmission des données",
    sec9Intro: "Les données personnelles ne sont transmises que si :",
    sec9List: [
      "vous y avez expressément consenti",
      "une obligation légale existe",
      "cela est nécessaire à l'exécution du contrat",
    ],

    sec10Title: "10. Durée de conservation",
    sec10P1:
      "Les données personnelles ne sont conservées que pendant la durée nécessaire aux finalités correspondantes ou imposée par les délais légaux de conservation.",

    sec11Title: "11. Droits des personnes concernées",
    sec11Intro: "Vous avez à tout moment le droit de :",
    sec11List: [
      "Accès (Art. 15 DSGVO)",
      "Rectification (Art. 16 DSGVO)",
      "Effacement (Art. 17 DSGVO)",
      "Limitation du traitement (Art. 18 DSGVO)",
      "Portabilité des données (Art. 20 DSGVO)",
      "Opposition au traitement (Art. 21 DSGVO)",
    ],

    sec12Title: "12. Droit de réclamation",
    sec12P1:
      "Vous avez le droit de déposer une réclamation auprès d'une autorité compétente de contrôle de la protection des données.",

    sec13Title: "13. Sécurité des données",
    sec13P1:
      "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées afin de protéger vos données contre la perte, l'utilisation abusive ou l'accès non autorisé.",

    sec14Title: "14. Modifications de la présente politique de confidentialité",
    sec14P1:
      "Nous nous réservons le droit d'adapter la présente politique de confidentialité si nécessaire.",
    sec14Stand: "Dernière mise à jour :",
    dateLocale: "fr-FR",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: META,
    locale: pickLocale(locale),
    path: "/datenschutz",
  });
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = pickLocale(locale);
  const c = CONTENT[l];

  return (
    <main className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">{c.pageTitle}</h1>

        {/* DFSA PDF Download */}
        <div className="mb-10 flex items-center gap-4 p-5 rounded-2xl border-2 border-blue-900/20 bg-blue-50">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-blue-800 font-semibold uppercase tracking-wide mb-0.5">{c.dfsaBadge}</p>
            <p className="text-slate-900 font-bold text-lg leading-tight">{c.dfsaTitle}</p>
            <p className="text-slate-500 text-sm mt-0.5">{c.dfsaSubtitle}</p>
          </div>
          <a
            href="/taskey-datenschutz.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 bg-blue-900 text-white text-sm font-bold rounded-xl hover:bg-blue-800 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {c.dfsaButton}
          </a>
        </div>

        <div className="prose prose-lg max-w-none text-slate-700 space-y-8">
          {c.translationNote ? (
            <p className="text-sm text-slate-500 italic">{c.translationNote}</p>
          ) : null}

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec1Title}</h2>
            <p className="mb-2">{c.sec1Intro}</p>
            <p className="font-semibold">
              {c.sec1Name}<br />
              {c.sec1Company}<br />
              {c.sec1Street}<br />
              {c.sec1City}<br />
              {c.sec1Email}<br />
              {c.sec1Phone}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec2Title}</h2>
            <p>
              {c.sec2P1}
            </p>
            <p>
              {c.sec2P2}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec3Title}</h2>
            <p className="mb-3">
              {c.sec3Intro}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              {c.sec3List.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3">{c.sec3AfterList}</p>

            <p className="mt-4"><strong>{c.sec3PurposeLabel}</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              {c.sec3PurposeList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="mt-4">
              <strong>{c.sec3LegalLabel}</strong> {c.sec3LegalValue}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec4Title}</h2>
            <p>
              {c.sec4P1}
            </p>
            <p className="mt-3">
              <strong>{c.sec4PurposeLabel}</strong> {c.sec4PurposeValue}
            </p>
            <p className="mt-3">
              <strong>{c.sec4LegalLabel}</strong> {c.sec4LegalValue}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec5Title}</h2>
            <p>
              {c.sec5P1}
            </p>
            <p className="mt-3">
              <strong>{c.sec5LegalLabel}</strong> {c.sec5LegalValue}
            </p>
            <p className="mt-3">{c.sec5Revocable}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec6Title}</h2>
            <p className="mb-3">
              {c.sec6Intro}
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-4">{c.sec6CatTitle}</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">{c.sec6Cat1Title}</h4>
                <p className="mb-2">
                  {c.sec6Cat1Body}
                </p>
                <p className="text-sm">
                  <strong>{c.sec6Cat1Purpose}</strong> {c.sec6Cat1PurposeValue}<br />
                  <strong>{c.sec6Cat1Legal}</strong> {c.sec6Cat1LegalValue}<br />
                  <strong>{c.sec6Cat1Consent}</strong> {c.sec6Cat1ConsentValue}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">{c.sec6Cat2Title}</h4>
                <p className="mb-2">
                  {c.sec6Cat2Body}
                </p>
                <p className="text-sm">
                  <strong>{c.sec6Cat2Legal}</strong> {c.sec6Cat2LegalValue}<br />
                  <strong>{c.sec6Cat2Consent}</strong> {c.sec6Cat2ConsentValue}<br />
                  <strong>{c.sec6Cat2Duration}</strong> {c.sec6Cat2DurationValue}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">{c.sec6Cat3Title}</h4>
                <p className="mb-2">
                  {c.sec6Cat3Body}
                </p>
                <p className="text-sm">
                  <strong>{c.sec6Cat3Legal}</strong> {c.sec6Cat3LegalValue}<br />
                  <strong>{c.sec6Cat3Consent}</strong> {c.sec6Cat3ConsentValue}<br />
                  <strong>{c.sec6Cat3Duration}</strong> {c.sec6Cat3DurationValue}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">{c.sec6Cat4Title}</h4>
                <p className="mb-2">
                  {c.sec6Cat4Body}
                </p>
                <p className="text-sm">
                  <strong>{c.sec6Cat4Legal}</strong> {c.sec6Cat4LegalValue}<br />
                  <strong>{c.sec6Cat4Consent}</strong> {c.sec6Cat4ConsentValue}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">{c.sec6Cat5Title}</h4>
                <p className="mb-2">
                  {c.sec6Cat5Body}
                </p>
                <p className="text-sm">
                  <strong>{c.sec6Cat5Legal}</strong> {c.sec6Cat5LegalValue}<br />
                  <strong>{c.sec6Cat5Consent}</strong> {c.sec6Cat5ConsentValue}
                </p>
              </div>
            </div>

            <p className="mt-4 bg-blue-50 p-4 rounded-lg">
              <strong>{c.sec6ManageLabel}</strong><br />
              {c.sec6ManageBody}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec7Title}</h2>
            <p className="mb-3">
              {c.sec7P1}
            </p>
            <p className="mb-2">{c.sec7ListIntro}</p>
            <ul className="list-disc pl-6 space-y-1">
              {c.sec7List.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3">
              <strong>{c.sec7LegalLabel}</strong> {c.sec7LegalValue}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec8Title}</h2>
            <p>{c.sec8P1}</p>
            <p className="mt-3">
              <strong>{c.sec8DataLabel}</strong> {c.sec8DataValue}
            </p>
            <p className="mt-3">
              <strong>{c.sec8LegalLabel}</strong> {c.sec8LegalValue}
            </p>
            <p className="mt-3">
              {c.sec8AVV}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec9Title}</h2>
            <p className="mb-2">{c.sec9Intro}</p>
            <ul className="list-disc pl-6 space-y-1">
              {c.sec9List.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec10Title}</h2>
            <p>
              {c.sec10P1}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec11Title}</h2>
            <p className="mb-2">{c.sec11Intro}</p>
            <ul className="list-disc pl-6 space-y-1">
              {c.sec11List.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec12Title}</h2>
            <p>
              {c.sec12P1}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec13Title}</h2>
            <p>
              {c.sec13P1}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec14Title}</h2>
            <p>
              {c.sec14P1}
            </p>
            <p className="mt-4 text-sm text-slate-600">
              {c.sec14Stand} {new Date().toLocaleDateString(c.dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
