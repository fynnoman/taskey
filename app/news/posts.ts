export type PostCategory = "Update" | "Feature" | "Release" | "Unternehmen" | "Geplant" | "Blog";

export interface Post {
  slug: string;
  category: PostCategory;
  date: string; // "13. März 2026"
  isoDate?: string; // "2026-03-13" for SEO
  title: string;
  summary: string;
  body: string; // plain text or markdown-style paragraphs separated by \n\n
  planned?: boolean; // true = "Geplant" badge, greyed out
  metaTitle?: string; // custom SEO title
  metaDescription?: string; // custom SEO description
}

// ─────────────────────────────────────────────────────────────
// NEU HIER OBEN EINFÜGEN – neuester Post kommt immer zuerst
// ─────────────────────────────────────────────────────────────
export const posts: Post[] = [
  {
    slug: "zeiterfassung-gebaeudereinigung-nfc",
    category: "Blog",
    date: "2. April 2026",
    isoDate: "2026-04-02",
    title: "Zeiterfassung in der Gebäudereinigung: Warum Zettel und Stechuhr ausgedient haben",
    metaTitle: "Zeiterfassung Gebäudereinigung: NFC-Stempeluhr statt Zettelchaos | Taskey",
    metaDescription: "Warum Stundenzettel in der Gebäudereinigung Geld kosten — und wie NFC-Zeiterfassung mit Taskey das Problem löst. Praxisguide für Reinigungsunternehmen.",
    summary:
      "Stundenzettel, Excel-Listen, unleserliche Notizen — Zeiterfassung in der Gebäudereinigung ist ein Albtraum. Mit NFC-Tags am Objekt stempeln Mitarbeiter in zwei Sekunden ein und aus. Automatisch, manipulationssicher, rechtssicher.",
    body: `Montag, 6:00 Uhr. Dein Team schwärmt aus. Vier Objekte, drei Schichten, zwölf Mitarbeiter. Am Ende des Tages liegt ein Stapel handgeschriebener Stundenzettel auf deinem Schreibtisch. Einer fehlt. Zwei sind unleserlich. Und bei einem stimmen die Zeiten hinten und vorne nicht.

Du sitzt abends noch eine Stunde dran, um alles in Excel zu übertragen. Dann nochmal eine Stunde, wenn der Steuerberater nachfragt. Und wenn ein Kunde wissen will, wann genau sein Objekt gereinigt wurde? Viel Glück.

Das ist kein Einzelfall. Das ist Alltag in der Gebäudereinigung. Und es kostet dich jeden Monat bares Geld.

**Das Problem ist nicht dein Team. Das Problem ist das System.**

Reinigungskräfte arbeiten dezentral. Sie sind morgens alleine im Bürogebäude, abends im Einkaufszentrum, nachts in der Produktionshalle. Es gibt keine zentrale Stechuhr, an der sich alle ein- und ausstempeln. Also wird improvisiert: WhatsApp-Nachrichten, Anrufe beim Chef, Zettel in der Jackentasche — oder es wird einfach gar nichts dokumentiert und am Monatsende aus dem Kopf geschrieben.

Das Ergebnis: Du hast keine belastbaren Daten. Nicht für die Lohnabrechnung, nicht für den Kunden, nicht für dich selbst. Du weißt nicht, ob Objekt A wirklich 3,5 Stunden dauert oder ob da eine halbe Stunde Puffer drinsteckt. Du kannst deine Margen nicht sauber kalkulieren. Und wenn mal jemand behauptet, er war da — hast du keinen Beweis.

Seit 2022 gilt die Pflicht zur elektronischen Arbeitszeiterfassung. Spätestens jetzt ist „machen wir irgendwie" keine Option mehr.

**NFC-Stempeluhr: Einstempeln in zwei Sekunden, direkt am Objekt**

Die Lösung ist einfacher als du denkst — und sie passt in eine Hosentasche.

So funktioniert es: Du klebst einen kleinen NFC-Tag an jedes Objekt. Türrahmen, Putzraum, Empfangstheke — egal wo. Dein Mitarbeiter kommt an, hält sein Smartphone dran, fertig. Eingestempelt. Standort, Uhrzeit, Objekt — alles automatisch erfasst. Beim Gehen nochmal dranhalten. Ausgestempelt.

Kein Stift. Kein Zettel. Keine App öffnen und manuell Zeiten eintippen. Handy ans Tag halten — das wars.

Die Daten landen in Echtzeit in deinem Taskey-Dashboard. Du siehst sofort, wer wo arbeitet, wie lange ein Objekt dauert und ob der Zeitplan eingehalten wird. Nicht morgen, nicht am Monatsende — jetzt.

**Was dir das konkret bringt**

Schluss mit Stundenzettel-Chaos. Alle Arbeitszeiten sind digital, sekundengenau und manipulationssicher dokumentiert. Kein Abtippen, kein Nachfragen, kein Rätselraten am Monatsende. Die Daten gehen direkt in die Lohnabrechnung.

Objekt-genaue Auswertung. Du siehst auf einen Blick, welches Objekt wie viel Zeit frisst. Wenn ein Auftrag regelmäßig länger dauert als kalkuliert, erkennst du das sofort — nicht erst, wenn die Marge weg ist. Das ist die Grundlage für saubere Nachkalkulation und bessere Angebote.

Nachweis gegenüber Kunden. Dein Auftraggeber will wissen, ob und wann gereinigt wurde? Du schickst ihm die Daten. Objektiv, digital, lückenlos. Das schafft Vertrauen und verhindert Diskussionen.

Rechtssicherheit. Elektronische Zeiterfassung ist Pflicht. Mit Taskey bist du abgesichert — ohne zusätzliche Hardware, ohne teure Terminals, ohne IT-Aufwand. Alles läuft übers Smartphone, das dein Team sowieso dabei hat.

**Warum klassische Zeiterfassungs-Tools in der Reinigung scheitern**

Es gibt hunderte Zeiterfassungs-Apps auf dem Markt. Die meisten sind für Bürojobs gebaut. Feste Arbeitsplätze, feste Teams, ein Standort.

In der Gebäudereinigung funktioniert das nicht. Dein Team wechselt täglich die Objekte. Manche Mitarbeiter sprechen wenig Deutsch. Manche sind technisch nicht affin. Und die meisten haben keine Lust, nach einer Schicht noch fünf Minuten in einer komplizierten App rumzutippen.

Genau deshalb setzt Taskey auf NFC. Die Hürde ist praktisch null. Smartphone ans Tag halten — mehr muss man nicht wissen. Kein Login, kein Navigieren durch Menüs, kein Tippaufwand. Das funktioniert für den 20-jährigen Studenten genauso wie für die erfahrene Reinigungskraft, die noch nie eine Business-App benutzt hat.

**Was Taskey anders macht**

Taskey ist keine reine Zeiterfassungs-App. Es ist die Einsatzplanung, Zeiterfassung, Auftragssteuerung und Dokumentation in einem System. Für dich heißt das: Du planst den Einsatz, dein Team stempelt per NFC ein und aus, die Zeiten fließen automatisch in die Aufträge, und du rechnest direkt ab.

Ein System. Kein Zusammenstückeln aus drei verschiedenen Tools, keinem Excel-Sheet und zwei WhatsApp-Gruppen.

Taskey ist komplett DSGVO-konform, Made in Germany, und läuft auf jedem Smartphone. Keine Installation von spezieller Hardware. Keine Schulung, die einen halben Tag dauert. Dein Team kann heute Nachmittag damit anfangen.

**Die Rechnung ist einfach**

Nehmen wir an, du hast 20 Mitarbeiter. Jeder braucht pro Tag 10 Minuten für Zettel ausfüllen, Zeiten notieren, WhatsApp-Updates schicken. Das sind über 30 Stunden pro Monat — nur für die Zeiterfassung. Dazu kommen deine eigenen Stunden fürs Einsammeln, Kontrollieren und Übertragen.

Mit NFC-Stempeln und automatischer Erfassung fällt das weg. Komplett. Die Zeit, die du sparst, ist bares Geld — oder besser: Zeit, die du in Akquise, Qualitätskontrolle oder einfach mal Feierabend stecken kannst.

**Starte ohne Risiko**

Taskey bietet ein Starter-Paket, mit dem du sofort loslegen kannst. NFC-Tags kosten ein paar Euro pro Stück und halten jahrelang. Die Einrichtung dauert keine Stunde.

Kein Vertrag über 24 Monate. Kein Verkaufsgespräch, das dir erst mal alles schönredet. Du buchst eine kostenlose Demo, siehst dir das System an, und entscheidest selbst.

Wenn du es leid bist, jeden Monat Stundenzetteln hinterherzulaufen — dann ist jetzt der richtige Zeitpunkt, das zu ändern.`,
  },
  {
    slug: "ki-auftragserkennung",
    category: "Geplant",
    date: "Demnächst",
    planned: true,
    title: "KI-Auftragserkennung: Fotos werden zu Aufträgen",
    summary:
      "Du fotografierst einen Schaden – Taskey erstellt automatisch einen Auftrag mit Beschreibung, Priorität und Zuweisung. Kein Tippen mehr.",
    body: `Wir arbeiten gerade an einem der größten Features, die wir je gebaut haben.

Die Idee ist simpel: Du machst ein Foto von einem Schaden, einer Baustelle oder einem Gerät – und Taskey erstellt daraus automatisch einen vollständigen Auftrag. Mit Beschreibung, vorgeschlagener Priorität, passendem Team und allem was dazugehört.

Das spart nicht nur Zeit. Es bedeutet, dass auch Mitarbeiter ohne viel Erfahrung mit der App sofort produktiv sind.

Wir testen das gerade intern und planen den ersten Beta-Rollout für Q2 2026.`,
  },
  {
    slug: "offline-modus",
    category: "Geplant",
    date: "Demnächst",
    planned: true,
    title: "Vollständiger Offline-Modus",
    summary:
      "Kein Netz auf der Baustelle? Kein Problem. Taskey arbeitet bald komplett offline – und synchronisiert sobald wieder Verbindung besteht.",
    body: `Einer der meistgewünschten Features aus unserer Community: ein echter Offline-Modus.

Nicht nur Lesen – sondern auch Aufträge erstellen, Zeiten stempeln, Checklisten abhaken. Alles lokal, alles synchronisiert sich automatisch wenn du wieder Netz hast.

Besonders für Betriebe mit Arbeit in Kellern, Tunneln oder auf Großbaustellen ist das ein Game-Changer. Wir arbeiten daran.`,
  },
  {
    slug: "nfc-tags-update",
    category: "Update",
    date: "12. März 2026",
    title: "NFC-Tags jetzt in jedem Tarif inklusive",
    summary:
      "Ab sofort sind NFC-Tags direkt in jeden Taskey-Tarif integriert – keine separaten Bestellungen mehr. Mitarbeiter checken Werkzeug, Maschinen und Fahrzeuge mit einem Tipp ein.",
    body: `Wir haben lange darüber nachgedacht wie wir NFC so einfach wie möglich machen können. Die Antwort war: einfach reinschmeißen.

Ab sofort bekommt jeder START-Kunde 3 NFC-Tags, jeder GROW-Kunde 15 Tags und jeder SCALE-Kunde 45 Tags – direkt inklusive, ohne Aufpreis.

Die Tags kommen per Post. Du klebst sie auf Maschinen, Werkzeugkisten oder Fahrzeuge. Deine Mitarbeiter halten ihr Handy ran – und alles wird automatisch geloggt. Wer hat was wann genommen. Wer hat zurückgebracht.

Kein Schwund mehr. Keine Diskussionen. Keine Zettelwirtschaft.`,
  },
  {
    slug: "taskey-16",
    category: "Release",
    date: "14. Februar 2026",
    title: "Taskey 1.6 – Fotogalerie & verbessertes GPS",
    summary:
      "Version 1.6 bringt eine vollständige Fotogalerie für Projekte und Aufträge sowie GPS-Tracking in Echtzeit.",
    body: `Taskey 1.6 ist live. Das sind die wichtigsten Neuerungen:

Fotogalerie: Jeder Auftrag und jedes Projekt hat jetzt eine eigene Bildergalerie. Vorher-Nachher Fotos, Schadensdokumentationen, Abnahmefotos – alles direkt am Auftrag gespeichert und für alle Beteiligten sichtbar.

GPS-Tracking: Das Echtzeit-Tracking wurde komplett überarbeitet. Die Karte ist schneller, die Positionen werden häufiger aktualisiert und du kannst jetzt Routenverläufe der letzten 7 Tage abrufen.

UI-Überarbeitung: Wir haben die Navigation in der App gestrafft. Weniger Klicks bis zur wichtigen Information.

Das Update rollt automatisch aus – du musst nichts tun.`,
  },
  {
    slug: "enterprise-launch",
    category: "Unternehmen",
    date: "20. Januar 2026",
    title: "Taskey Enterprise ist da",
    summary:
      "Für Betriebe mit 50+ Mitarbeitern oder individuellen Anforderungen: eigene Integrationen, dedizierter Support, maßgeschneiderte Workflows.",
    body: `Seit dem Start von Taskey haben wir immer wieder Anfragen von Betrieben bekommen, die über das hinausgehen was unsere Standard-Tarife bieten.

Große Teams. Spezielle Integrationen. Eigene Abrechnungssysteme. Komplexe Rollen-Strukturen.

Dafür gibt es jetzt Taskey Enterprise.

Was das bedeutet: Wir setzen uns mit dir zusammen, verstehen deinen Betrieb – und bauen dann die Version von Taskey, die du brauchst. Mit deinem Branding, deinen Workflows, deinen Schnittstellen.

Kein Einheitspaket. Keine Kompromisse.

Interesse? Meld dich einfach direkt bei uns.`,
  },
];
