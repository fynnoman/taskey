'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

// Metadata will be set via head tags
if (typeof window !== 'undefined') {
  document.title = "Alle Funktionen im Überblick | Taskey Reinigungssoftware";
}

interface Feature {
  id: string;
  name: string;
  description: string;
  image: string;
  detailedInfo?: string;
}

interface Category {
  id: string;
  name: string;
  features: Feature[];
}

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState('nfc');
  const [activeFeature, setActiveFeature] = useState('digitale-anlagenakte');
  const { t } = useLanguage();

  const categories: Category[] = [
    {
      id: 'nfc',
      name: 'NFC-Aufkleber',
      features: [
        {
          id: 'digitale-objektakte',
          name: 'Digitale Objektakte',
          description: 'Einmal kleben. Immer wissen, was zu tun ist. Sie kleben einen kleinen NFC-Aufkleber am Eingang jedes Reinigungsobjekts auf. Ihr Team haelt beim Ankommen kurz das Handy dran – und sieht sofort, was heute zu tun ist.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• NFC-Aufkleber am Objekt anbringen (wetterfest, haelt 5+ Jahre)\n• Reinigungskraft scannt beim Ankommen mit dem Handy\n• Sie sieht sofort: heutige Aufgaben, Sonderwuensche, letzte Reinigung, wichtige Fotos\n• Alle Infos bleiben am Objekt – auch wenn die Reinigungskraft wechselt\n• Speziell entwickelt für Gebäudereiniger',
        },
        {
          id: 'leistungsnachweis',
          name: 'Leistungsnachweis per Scan',
          description: 'Jeder Scan wird mit Uhrzeit und Standort gespeichert. Wenn ein Auftraggeber fragt, ob Ihr Team da war – haben Sie die Antwort schwarz auf weiss.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Zeitstempel + GPS-Standort bei jedem Scan\n• Nachweis, den kein Auftraggeber anzweifeln kann\n• Beispiel: "Unser Team war am 14.04. um 06:14 Uhr am Eingang Ihres Gebäudes."\n• Perfekt für Versicherungsfaelle und Haftungsfragen\n• Lückenlose Dokumentation ohne Papier',
        },
        {
          id: 'rundgang-kontrolle',
          name: 'Rundgang-Kontrolle für grosse Objekte',
          description: 'Mehrere Etagen, verschiedene Bereiche? Ihre Reinigungskraft scannt sich in jedem Bereich ein und aus. So wissen Sie genau, was erledigt ist.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• NFC-Aufkleber an jedem Bereich oder jeder Etage\n• Automatisches Protokoll: wer, wann, wo?\n• Lückenloser Nachweis für Mehretagen-Gebäude\n• Keine vergessenen Bereiche mehr\n• Perfekt für Buerogebäude, Kliniken, Hotels',
        },
        {
          id: 'materialverwaltung',
          name: 'Material- und Lagerverwaltung',
          description: 'Kleben Sie einen NFC-Aufkleber an den Putzwagen oder ins Lager. Ihr Team scannt und meldet: Reinigungsmittel fast leer oder Saugmaschine defekt.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• NFC-Aufkleber am Lager oder Putzwagen\n• Bestand per Scan dokumentieren\n• Benachrichtigung bei knappem Material\n• Keine Notfall-Bestellungen mehr\n• Sie können sofort reagieren',
        },
        {
          id: 'wartungsmanagement',
          name: 'Wartung von Reinigungsmaschinen',
          description: 'Jede Nutzung Ihrer Scheuersaugmaschine oder Ihres Hochdruckreinigers wird erfasst. Bei faelligem Service bekommen Sie automatisch einen Hinweis.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• NFC-Aufkleber auf der Maschine\n• Automatische Zaehlung der Einsätze\n• Benachrichtigung bei faelliger Wartung\n• Vermeidung teurer Ausfaelle\n• Verlängerte Lebensdauer Ihrer Geräte',
        },
        {
          id: 'schluesselverwaltung',
          name: 'Schluesselverwaltung',
          description: 'Welcher Schluessel gehört zu welchem Objekt? Wer hat ihn zuletzt? Bei Verlust wissen Sie sofort Bescheid.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Digitaler Schluessel-Eintrag pro Objekt\n• Wer hat den Schluessel zuletzt gehabt?\n• Wo ist er hinterlegt?\n• Bei Verlust sofort nachvollziehbar\n• Keine Excel-Listen oder Zettel mehr',
        },
        {
          id: 'qualitätspruefung',
          name: 'Qualitätspruefung an Ort und Stelle',
          description: 'Nach der Reinigung: Foto machen, Bericht abschicken, Unterschrift einholen. Alles direkt am Objekt, alles gespeichert.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Fotos nach der Reinigung direkt hochladen\n• Abschlussbericht mit einem Klick erstellen\n• Digitale Unterschrift vom Kunden einholen\n• Alles automatisch dem Objekt zugeordnet\n• Bei Reklamationen haben Sie die Belege',
        },
      ],
    },
    {
      id: 'kalender',
      name: 'Kalender',
      features: [
        {
          id: 'projektplanung',
          name: 'Projektplanung',
          description: 'Planen Sie Ihre Projekte effizient im Kalender. Übersicht über alle Projektphasen und Meilensteine.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Projekte mit Start- und Enddatum anlegen\n• Mitarbeiter sehen sofort anstehende Aufgaben\n• Detaillierte Projektseite mit allen Infos\n• Bilder, Aufgaben und Zeitpläne\n• Klar strukturiert und jederzeit abrufbar',
        },
        {
          id: 'terminplanung',
          name: 'Terminplanung',
          description: 'Verwalten Sie alle Termine zentral. Automatische Synchronisation mit allen Geräten.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Zentrale Übersicht aller Termine\n• Urlaube, Krankmeldungen, Abwesenheiten\n• Chef sieht sofort, wer verfügbar ist\n• Mitarbeiter wissen genau, welche Tage belegt sind\n• Keine Telefonkette oder Missverständnisse',
        },
        {
          id: 'erinnerungen',
          name: 'Automatische Erinnerungen',
          description: 'Erhalten Sie rechtzeitig Benachrichtigungen zu anstehenden Terminen. Immer pünktlich beim Kunden.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Automatische Erinnerung an Termine und Aufgaben\n• Benachrichtigung für Mitarbeiter und Chefs\n• Keine verpassten Deadlines mehr\n• Läuft zuverlässig im Hintergrund\n• Team konzentriert sich auf die Arbeit',
        },
      ],
    },
    {
      id: 'gps',
      name: 'GPS',
      features: [
        {
          id: 'gesamtkarte',
          name: 'Gesamtkarte',
          description: 'Überblick über alle aktiven Aufträge und Einsatzorte auf einer Karte. Kein Dauertracking — nur der letzte relevante Auftrag je Mitarbeiter.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Karte zeigt letzten bekannten Auftragseinsatzort\n• Kein Dauerstandort-Tracking der Mitarbeiter\n• Sofort sehen, bei welchem Kunden wer zuletzt war\n• Detailansicht mit Auftragsinformationen\n• Datenschutzkonform & transparent für das Team',
        },
        {
          id: 'mitarbeiter-roadmap',
          name: 'Mitarbeiter-Roadmap',
          description: 'Sehen Sie welche Aufträge Ihr Team heute abgearbeitet hat. Kein Echtzeit-Tracking — nur die besuchten Einsatzorte.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Tagesübersicht: welche Einsatzorte wurden besucht?\n• Zeigt den letzten bekannten Auftragseinsatzort\n• Kein kontinuierliches GPS-Tracking im Hintergrund\n• Reihenfolge und Zeiten automatisch dokumentiert\n• Transparent & datenschutzkonform',
        },
        {
          id: 'routenplanung',
          name: 'Routenplanung',
          description: 'Planen Sie effiziente Routen für Ihre Mitarbeiter. Sparen Sie Zeit und Kosten.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Automatische empfohlene Route zum Einsatzort\n• Schnell und ohne Umwege\n• Zeit- und Kostenersparnis\n• Weniger Stress für Mitarbeiter\n• Reibungslose Abläufe im Team',
        },
        {
          id: 'standortdokumentation',
          name: 'Auftragsbezogene Standortdokumentation',
          description: 'Automatische Dokumentation der besuchten Einsatzorte — nur während aktiver Aufträge, nicht dauerhaft.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Standort wird nur beim Start/Ende eines Auftrags erfasst\n• Kein permanentes Tracking im Hintergrund\n• Stoppt automatisch bei Pause oder Auftragsende\n• Faire, transparente Dokumentation für das Team\n• DSGVO-konform & ohne Dauerüberwachung',
        },
      ],
    },
    {
      id: 'mitarbeiter',
      name: 'Mitarbeiter',
      features: [
        {
          id: 'informationen',
          name: 'Informationen',
          description: 'Alle Mitarbeiterdaten zentral verwaltet. Qualifikationen, Kontakte und Verfügbarkeiten.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Zentrale Verwaltung aller Mitarbeiterdaten\n• Startdatum, Kontakte, Position, Verantwortlichkeiten\n• Transparente Effizienz-Auswertung\n• Arbeitszeiten und wirtschaftlicher Beitrag\n• Faires, objektives Bild der Teamleistung',
        },
        {
          id: 'aufgabenmanagement',
          name: 'Aufgabenmanagement',
          description: 'Weisen Sie Aufgaben zu und verfolgen Sie den Fortschritt. Klare Kommunikation im Team.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Aufgaben Mitarbeitern oder Teams zuordnen\n• Führungsrolle für Kolonnen festlegen\n• Nicht jeder muss alle Details eingeben\n• Klare Strukturen und weniger Aufwand\n• Bessere Organisation im Alltag',
        },
        {
          id: 'verwaltung',
          name: 'Einfach Anlegen / Löschen',
          description: 'Mitarbeiter schnell hinzufügen oder entfernen. Intuitive Verwaltung in wenigen Klicks.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Neue Mitarbeiter in Sekunden anlegen\n• Daten bearbeiten oder Accounts entfernen\n• Übersichtlich und flexibel\n• Jederzeit aktuell\n• Kein Verwaltungschaos',
        },
      ],
    },
    {
      id: 'projekte',
      name: 'Projekte',
      features: [
        {
          id: 'zeitspanne',
          name: 'Zeitspanne',
          description: 'Definieren Sie Start und Ende Ihrer Projekte. Behalten Sie Deadlines im Blick.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Geplante Zeitspanne zuweisen (z.B. 100 Stunden)\n• System zeigt automatisch Zeitrahmen-Status\n• Erkennen ob Nachjustierung nötig ist\n• Transparente Planung\n• Optimale Ressourcenverteilung',
        },
        {
          id: 'fortschritt',
          name: 'Fortschritt',
          description: 'Verfolgen Sie den Projektfortschritt in Echtzeit. Visuelle Darstellung des Status.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Automatische Sammlung geleisteter Stunden\n• Übersichtliche Darstellung\n• Jederzeit sehen, wie viel geschafft wurde\n• Nähe zum Projektabschluss erkennen\n• Messbar, nachvollziehbar, steuerbar',
        },
        {
          id: 'buchhaltungsmanager',
          name: 'Buchhaltungsmanager',
          description: 'Alle projektbezogenen Kosten und Einnahmen im Überblick. Perfekt für die Abrechnung.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Umsatz, Budget, Kosten in Echtzeit\n• Aktueller Gewinn visuell dargestellt\n• Belege erscheinen automatisch im Projekt\n• Fehlerfreie Buchhaltung, enorme Zeitersparnis',
        },
        {
          id: 'galerie',
          name: 'Galerie',
          description: 'Dokumentieren Sie Ihr Projekt mit Fotos. Automatische Zuordnung und Archivierung.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Eigene Galerie für alle Projektbilder\n• Bilder bearbeiten und Markierungen setzen\n• Bereiche hervorheben (erledigt/offen)\n• Ideal für Dokumentation und Nachweise\n• Perfekt für Kundenkommunikation',
        },
        {
          id: 'belege',
          name: 'Belege & Ausgaben',
          description: 'Erfassen Sie alle Belege digital. Keine verlorenen Quittungen mehr.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Gescannte Belege sofort im Projekt\n• Alle Ausgaben klar strukturiert\n• Kategorien, Beträge, Upload-Zeitpunkte\n• Optional: Direktübertragung zur Buchhaltung\n• Keine verlorenen Quittungen mehr',
        },
        {
          id: 'aufträge',
          name: 'Aufträge',
          description: 'Verwalten Sie alle Aufträge innerhalb eines Projekts. Strukturiert und übersichtlich.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Projekte in mehrere Aufträge aufteilen\n• Z.B. Haussanierung → "Steckdosen verlegen"\n• Alle Aufträge in eigenem Tab sichtbar\n• Einzeln planbar, bearbeitbar, auswertbar\n• Komplexe Projekte leicht kontrollierbar',
        },
      ],
    },
    {
      id: 'aufträge',
      name: 'Aufträge',
      features: [
        {
          id: 'informationen',
          name: 'Informationen',
          description: 'Alle wichtigen Auftragsinformationen auf einen Blick. Kunde, Adresse, Beschreibung.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Alle wichtigen Details (Beschreibung, Materialien)\n• Anforderungen und besondere Hinweise\n• Übersichtlich dargestellt\n• Mitarbeiter wissen genau, was zu tun ist\n• Keine Rückfragen oder Missverständnisse',
        },
        {
          id: 'mitarbeiter',
          name: 'Mitarbeiter',
          description: 'Weisen Sie Mitarbeiter zu Aufträgen zu. Optimale Ressourcenplanung.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Alle beteiligten Mitarbeiter sichtbar\n• Arbeitszeiten pro Mitarbeiter\n• Automatisch berechnete Lohnkosten\n• Volle Transparenz\n• Realistische Kostenschätzung',
        },
        {
          id: 'zeiterfassung',
          name: 'Zeiterfassung',
          description: 'Erfassen Sie Arbeitszeiten direkt am Auftrag. Automatische Zuordnung.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Automatische Arbeitszeiterfassung beim Start\n• Parallel zur Einsatzstandort-Dokumentation\n• Bei "Pause" wird alles gestoppt\n• Faire und eindeutige Erfassung\n• Keine manuelle Nachbearbeitung',
        },
        {
          id: 'besorgungsfahrten',
          name: 'Besorgungsfahrten',
          description: 'Dokumentieren Sie Materialfahrten. Kilometerabrechnung inklusive.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Besorgungsfahrt mit einem Klick starten\n• Standort wird weiterhin dokumentiert\n• Klar vom Kundeneinsatz getrennt\n• Chef entscheidet über Vergütung\n• Flexibel und transparent',
        },
        {
          id: 'pause',
          name: 'Pause',
          description: 'Erfassen Sie Pausen gesetzeskonform. Automatische Berechnung.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Klick auf "Pause" stoppt Arbeitszeit\n• Standortaktualisierung wird gestoppt\n• Ruhezeiten korrekt erfasst\n• Eindeutig vom aktiven Auftrag getrennt\n• Gesetzeskonform dokumentiert',
        },
        {
          id: 'abschluss',
          name: 'Auftrag Beenden + Abschlussbericht',
          description: 'Schließen Sie Aufträge mit einem detaillierten Bericht ab. Professionelle Dokumentation.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Schriftlich oder per Sprachfunktion erstellen\n• Beschreibung, Zeitaufwand, Einsatzorte\n• Fotos und digitale Kundensignatur\n• Automatisch als PDF erzeugt\n• Sofort im Dashboard mit Exportfunktion',
        },
        {
          id: 'galerie',
          name: 'Galerie',
          description: 'Fotodokumentation des Auftrags. Vorher-Nachher-Bilder für den Kunden.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Eigene Galerie für jeden Auftrag\n• Bilder hochladen und markieren\n• Bereiche hervorheben ("hier fehlt noch...")\n• Direkt in Abschlussbericht einbauen\n• Saubere Dokumentation und Kommunikation',
        },
        {
          id: 'buchhaltungsmanager',
          name: 'Buchhaltungsmanager',
          description: 'Alle Kosten und Belege zum Auftrag. Direkt abrechnungsfertig.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Kosten, Kategorien, Budget, Gewinn\n• Gescannte Belege übersichtlich\n• Alle finanziellen Daten auf einen Blick\n• Abrechnungsfertig',
        },
        {
          id: 'roadmap',
          name: 'Mitarbeiter-Roadmap',
          description: 'Sehen Sie die Route zum Auftragsort. GPS-Navigation integriert.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Automatische Roadmap am Tagesende\n• Startpunkt, Zwischenschritte, Einsatzorte\n• Arbeitsende dokumentiert\n• Klar visualisiert\n• Keine manuelle Eingabe nötig',
        },
      ],
    },
    {
      id: 'kunden',
      name: 'Kunden',
      features: [
        {
          id: 'informationen',
          name: 'Informationen',
          description: 'Alle Kundendaten zentral gespeichert. Kontakte, Adressen und Auftragshistorie.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Zentrale Speicherung aller Kundendaten\n• Namen, Adressen, Kontaktinformationen\n• Individuelle Hinweise zu jedem Kunden\n• Schneller Zugriff für Chefs und Bürokräfte\n• Perfekt für klare Kommunikation',
        },
      ],
    },
    {
      id: 'zeiterfassung',
      name: 'Zeiterfassung',
      features: [
        {
          id: 'zeitmanager',
          name: 'Zeitmanager',
          description: 'Vollständige Verwaltung aller Arbeitszeiten. Erfassung, Auswertung und Abrechnung in einem Tool.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Alle Arbeitsstunden an einem Ort\n• Wer hat wie lange gearbeitet?\n• Inklusive Pausen, Besorgungsfahrten, Einsätze\n• Automatische Erfassung und Aktualisierung\n• Keine manuelle Nachbearbeitung nötig',
        },
      ],
    },
    {
      id: 'rentabilitaet',
      name: 'Buchhaltung',
      features: [
        {
          id: 'buchhaltung',
          name: 'Rentabilität',
          description: 'Ihr digitaler Buchhalter. Automatische Auswertungen und Berichte für Ihre Buchhaltung.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Wirtschaftlichkeit von Projekten und Aufträgen\n• Automatische Sammlung: Umsätze, Kosten, Budgets\n• Rentabilität jedes Mitarbeiters analysiert\n• Klare, objektive Bewertung\n• Bessere Entscheidungen für effizientere Steuerung',
        },
      ],
    },
    {
      id: 'urlaub-krank',
      name: 'Urlaubs-/Krankmeldungen',
      features: [
        {
          id: 'mitarbeiter',
          name: 'Mitarbeiter',
          description: 'Übersicht über alle Mitarbeiter und deren Abwesenheiten. Wer ist wann verfügbar?',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Direkte Auswahl und Verwaltung\n• Alle Abwesenheiten auf einen Blick\n• Urlaub, Krankheit, sonstige Ausfälle\n• Schnelle Übersicht pro Person\n• Jederzeit wissen, wer verfügbar ist',
        },
        {
          id: 'status',
          name: 'Status',
          description: 'Aktueller Status aller Urlaubs- und Krankmeldungen. Genehmigt oder in Bearbeitung?',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Status einfach setzen\n• Krank, arbeitsfähig, im Urlaub\n• Andere interne Kategorien möglich\n• Jederzeit klar: Wer ist verfügbar?\n• Transparente Übersicht',
        },
        {
          id: 'planung',
          name: 'Planung + Kalender',
          description: 'Planen Sie Abwesenheiten im Voraus. Kalenderansicht für bessere Übersicht.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Automatische Verknüpfung mit Kalender\n• Überschneidungen sofort erkennen\n• Freie Tage und verfügbare Kapazitäten\n• Zentrale und transparente Organisation\n• Bessere Planung für alle',
        },
      ],
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeCategory);
  const currentFeature = currentCategory?.features.find((f) => f.id === activeFeature);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              {t('featuresPage.hero.badge')}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              {t('featuresPage.hero.title')} <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{t('featuresPage.hero.title.highlight')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              {t('featuresPage.hero.subtitle')}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">{t('featuresPage.hero.stat1')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">{t('featuresPage.hero.stat2')}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">{t('featuresPage.hero.stat3')}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="py-10 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick Navigation Buttons - Silber-Blau-Spektrum */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="/pricing"
                className="group bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-slate-600/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-50">{t('featuresPage.nav.pricing')}</h3>
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p className="text-slate-200 text-sm">{t('featuresPage.nav.pricing.desc')}</p>
              </a>

              <a
                href="/pricing#nfc-tags"
                className="group bg-gradient-to-br from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-sky-400/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{t('featuresPage.nav.nfc')}</h3>
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform text-sky-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p className="text-sky-50 text-sm">{t('featuresPage.nav.nfc.desc')}</p>
              </a>

              <a
                href="/premium-manager"
                className="group bg-gradient-to-br from-slate-600 to-blue-700 hover:from-slate-500 hover:to-blue-600 text-white rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-slate-500/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-50">{t('featuresPage.nav.manager')}</h3>
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p className="text-slate-100 text-sm">{t('featuresPage.nav.manager.desc')}</p>
              </a>
            </div>
          </div>

          {/* Important Note Box */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t('featuresPage.note.title')}
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="leading-relaxed">
                      {t('featuresPage.note.intro')}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <h4 className="font-bold text-blue-900">{t('featuresPage.note.dashboard.title')}</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          {t('featuresPage.note.dashboard.desc')}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-cyan-100">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <h4 className="font-bold text-cyan-600">{t('featuresPage.note.app.title')}</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          {t('featuresPage.note.app.desc')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Tabs - Silber-Blau-Spektrum */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 border-b border-slate-200 pb-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setActiveFeature(category.features[0].id);
                }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base whitespace-nowrap ${
                  activeCategory === category.id
                    ? category.id === 'nfc' 
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-xl'
                      : 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-xl'
                    : 'bg-gradient-to-br from-slate-50 to-gray-100 text-slate-700 hover:from-slate-100 hover:to-gray-200 border border-slate-200 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <div className="grid md:grid-cols-12 gap-8">
            {/* Feature List - Redesigned Sidebar */}
            <div className="md:col-span-4">
              <div className="sticky top-24 space-y-3">
                {/* Sidebar Header - Dunkelste Grautöne (slate-800/900) */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 sm:p-6 mb-4 shadow-xl border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-slate-700/60 backdrop-blur-xl rounded-xl flex items-center justify-center border border-slate-600/40 shadow-lg">
                      <svg className="w-5 h-5 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-50 text-lg">{t('featuresPage.sidebar.title')}</h3>
                      <p className="text-slate-300 text-sm">{currentCategory?.features.length} {t('featuresPage.sidebar.count')}</p>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
                </div>

                {/* Feature Items */}
                {currentCategory?.features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`group w-full text-left rounded-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                      activeFeature === feature.id
                        ? 'bg-gradient-to-br from-slate-700 to-slate-800 shadow-2xl border border-slate-600/50'
                        : 'bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 shadow-md hover:shadow-xl border border-gray-200/80'
                    }`}
                  >
                    <div className="p-5">
                      <div className="flex items-start gap-4">
                        {/* Number Badge - Mittlere Grautöne */}
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                          activeFeature === feature.id
                            ? 'bg-slate-600/60 text-slate-100 border border-slate-500/40 shadow-md'
                            : 'bg-gray-200 text-gray-700 group-hover:bg-gray-300 border border-gray-300'
                        }`}>
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                        
                        {/* Feature Name */}
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-bold text-lg mb-1 transition-colors ${
                            activeFeature === feature.id
                              ? 'text-slate-50'
                              : 'text-gray-900 group-hover:text-gray-950'
                          }`}>
                            {feature.name}
                          </h3>
                          
                          {/* Active Indicator - Hellere slate Töne */}
                          {activeFeature === feature.id && (
                            <div className="flex items-center gap-2 mt-2">
                              <div className="h-1 flex-1 bg-gradient-to-r from-slate-500 via-slate-400 to-transparent rounded-full"></div>
                              <span className="text-xs text-slate-300 font-semibold">{t('featuresPage.sidebar.active')}</span>
                            </div>
                          )}
                          
                          {/* Hover Arrow - Dunkle gray Töne */}
                          {activeFeature !== feature.id && (
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                              <span className="text-xs text-gray-600 font-semibold flex items-center gap-1">
                                {t('featuresPage.sidebar.more')}
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Details */}
            <div className="md:col-span-8">
              {currentFeature && (
                <div className="space-y-6">
                  {/* Main Feature Card */}
                  <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-slate-200/60">
                    <div className="mb-8">
                      <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
                        {currentFeature.name}
                      </h2>
                      <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                        {currentFeature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Feature Description Box - Elegant Gray Design */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 rounded-3xl shadow-2xl">
                    {/* Subtle Glow Effects */}
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-slate-600/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-[120px]"></div>
                    
                    <div className="relative p-5 sm:p-8 md:p-12">
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                        <div className="flex-shrink-0 hidden sm:block">
                          <div className="w-14 h-14 bg-slate-700/40 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-slate-600/30 shadow-lg">
                            <svg className="w-7 h-7 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 flex flex-wrap items-center gap-3">
                            {t('featuresPage.detail.howItWorks')}
                            <span className="inline-flex items-center px-4 py-1.5 bg-slate-700/40 backdrop-blur-xl border border-slate-600/40 rounded-full text-sm font-semibold text-slate-300 shadow-lg">
                              {t('featuresPage.detail.label')}
                            </span>
                          </h3>
                          <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-slate-200 leading-relaxed text-lg whitespace-pre-line">
                              {currentFeature.detailedInfo || currentFeature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Tips Section - Elegant Gray */}
                  {'detailedInfo' in currentFeature && currentFeature.detailedInfo && (
                    <div className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-3xl border border-slate-300/50 p-5 sm:p-8 shadow-xl">
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 mb-3 text-xl">{t('featuresPage.detail.goodToKnow')}</h4>
                          <p className="text-slate-700 leading-relaxed text-lg">
                            {t('featuresPage.detail.goodToKnow.text')}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Onboarding Teaser */}
        <div className="relative mt-16 mb-12 mx-4 sm:mx-6 lg:mx-8 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-blue-950 border border-white/10">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
          <div className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-black mb-4 uppercase tracking-wide">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                Done-for-You Onboarding
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3">
                {t('featuresPage.onboarding.title')} <span className="text-cyan-400">{t('featuresPage.onboarding.title.highlight')}</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                {t('featuresPage.onboarding.desc')}
              </p>
              <div className="flex flex-wrap gap-4 mt-5">
                {['Import Ihrer Mitarbeiter und Objekte', 'Einrichtung Ihrer Reinigungsvertraege', 'NFC-Aufkleber vorbereiten', 'Schulung Ihres Teams'].map((tag, i) => (
                  <span key={i} className="text-xs text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 text-center">
              <p className="text-gray-500 text-xs mb-3">{t('featuresPage.onboarding.priceNote')}</p>
              <p className="text-gray-300 text-sm font-semibold mb-4">{t('featuresPage.onboarding.forCustomers')}</p>
              <a
                href="/pricing#onboarding"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 font-black px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg text-sm"
              >
                {t('featuresPage.onboarding.cta')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Demo Request Section - Modern Redesign */}
        <div className="relative mt-32 mb-20 overflow-hidden">
          {/* Gradient Background with Mesh Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
          
          {/* Subtle Blur Effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-28">
            <div className="text-center">
              {/* Logo with Glow Effect */}
              <div className="mb-12 relative">
                <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>
                <Image 
                  src="/843B6B8E-CED8-4FF8-8C63-B354140A7BC5e5e1f940b1a8d4df34c43ec444a293f3116e09c2a98dcecd8e8882d3099b7c2d.png" 
                  alt="Taskey Logo" 
                  width={160}
                  height={160}
                  className="h-40 w-auto mx-auto relative z-10"
                  sizes="160px"
                  quality={90}
                  loading="lazy"
                />
              </div>
              
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 px-6 py-2.5 rounded-full text-sm font-bold mb-8 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                14 TAGE KOSTENLOS TESTEN
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                {t('featuresPage.cta.title')}
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {t('featuresPage.cta.title.highlight')}
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                {t('featuresPage.cta.subtitle')}
              </p>

              {/* Features Grid - New Design */}
              <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                {[
                  { 
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                    text: "15-Minuten-Demo", 
                    subtext: "Kurz und konkret" 
                  },
                  { 
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
                    text: "Auf Ihren Betrieb zugeschnitten", 
                    subtext: "Wir zeigen Ihnen genau, was passt" 
                  },
                  { 
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                    text: "Sofort loslegen", 
                    subtext: "Keine Verpflichtung" 
                  }
                ].map((feature, index) => (
                  <div key={index} className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <div className="text-cyan-400 mb-3 flex justify-center">{feature.icon}</div>
                      <div className="text-white font-bold text-lg mb-1">{feature.text}</div>
                      <div className="text-gray-400 text-sm">{feature.subtext}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons - Improved */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <Link 
                  href="https://signup.vars-development.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl shadow-xl overflow-hidden w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">{t('featuresPage.cta.trial')}</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>

                <a 
                  href="tel:+4915168488999" 
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-2xl border border-white/20 hover:border-white/40 transition-all hover:scale-105 w-full sm:w-auto"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t('featuresPage.cta.call')}
                </a>
              </div>

              {/* Trust indicators - New Style */}
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-8 text-gray-300 text-xs sm:text-sm">
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('featuresPage.cta.noCreditCard')}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('featuresPage.cta.freeTrial')}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('featuresPage.cta.cancelAnytime')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20 pb-12 sm:pb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('featuresPage.faq.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('featuresPage.faq.subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Wie funktioniert die automatische Zeiterfassung?",
                answer: "Ihr Mitarbeiter scannt beim Ankommen am Objekt den NFC-Aufkleber – Taskey startet automatisch die Zeiterfassung. Beim Verlassen scannt er nochmal, und die Zeit wird gestoppt. Pausen werden automatisch abgezogen. Keine Stundenzettel mehr, keine Korrekturen am Monatsende."
              },
              {
                question: "Funktioniert die App auch für Mitarbeiter ohne Deutschkenntnisse?",
                answer: "Ja. Die App ist auf Tuerkisch, Russisch, Polnisch und mehreren weiteren Sprachen verfügbar. Ihre Mitarbeiter stellen einmal ihre Sprache ein – und die gesamte App zeigt alles in ihrer Muttersprache an."
              },
              {
                question: "Wie weise ich gegenueber meinem Auftraggeber nach, dass wir da waren?",
                answer: "Jeder NFC-Scan wird automatisch mit Uhrzeit und genauem Standort gespeichert. Bei Diskussionen haben Sie den Beleg schwarz auf weiss: 'Unser Team war am 14.04. um 06:14 Uhr am Eingang Ihres Gebäudes.' Das nimmt jedem Streit die Grundlage."
              },
              {
                question: "Erfüllt Taskey die gesetzliche Mindestlohn-Dokumentation?",
                answer: "Ja. Taskey dokumentiert automatisch Beginn, Ende und Dauer jeder Arbeitszeit – genau so, wie es das Mindestlohngesetz vorschreibt. Sie können die Daten jederzeit als PDF exportieren, falls der Zoll prüft."
              },
              {
                question: "Was mache ich mit Schluesseln für Objekte?",
                answer: "Sie legen jedem Objekt einen digitalen Schluessel-Eintrag an. Ihr Team sieht in der App, welcher Schluessel zu welchem Objekt gehört, wer ihn zuletzt hatte und wo er hinterlegt ist. Bei Verlust wissen Sie sofort, wer zuletzt damit unterwegs war."
              },
              {
                question: "Funktioniert die App auch ohne Internet, z.B. in Tiefgaragen?",
                answer: "Ja. Die App speichert alles auf dem Handy und schickt die Daten automatisch, sobald wieder Empfang da ist. Ihr Team kann also auch im Keller eines Gebäudes ganz normal arbeiten."
              },
              {
                question: "Kann ich meine bestehenden Objekte und Mitarbeiter übernehmen?",
                answer: "Ja. Wir importieren Ihre Excel-Listen oder andere Dateien komplett für Sie. Sie müssen nichts selbst eintippen. Das ist Teil unseres kostenlosen Einrichtungs-Service."
              },
              {
                question: "Gibt es eine Verbindung zu LexOffice oder Sage für die Buchhaltung?",
                answer: "Ja. Taskey schickt Arbeitszeiten, Rechnungen und Belege automatisch an LexOffice, Sage oder DATEV. Ihr Steuerberater freut sich, weil er saubere Daten bekommt."
              },
              {
                question: "Wie schnell kann ich loslegen?",
                answer: "In den meisten Faellen läuft alles in 2-5 Tagen. Wir importieren Ihre Daten, richten die NFC-Aufkleber vor und schulen Ihr Team per Video-Session. Danach können Sie direkt starten."
              },
              {
                question: "Was kostet Taskey?",
                answer: "Drei Pakete – Professional, Business und Enterprise. Sie zahlen eine Grundgebühr plus einen kleinen Preis pro Objekt. Mitarbeiter sind unbegrenzt, egal wie viele Sie beschaeftigen. Alle Preise sehen Sie auf unserer Preise-Seite."
              }
            ].map((faq, index) => (
              <details 
                key={index} 
                className="bg-white rounded-lg shadow-md group"
              >
                <summary className="flex justify-between items-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 rounded-lg transition">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg pr-4">
                    {faq.question}
                  </h3>
                  <svg 
                    className="w-6 h-6 text-blue-900 transform group-open:rotate-180 transition-transform flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* CTA at the end */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              {t('featuresPage.faq.contact')}
            </p>
            <a 
              href="mailto:info@taskeyapp.com" 
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all"
            >
              {t('featuresPage.faq.contact')}
            </a>
          </div>


        </div>
      </div>

      {/* Footer spacer */}
    </main>
  );
}
