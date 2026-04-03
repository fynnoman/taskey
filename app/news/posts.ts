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
  heroImage?: string; // optional hero image path (e.g. "/images/blog/xyz.jpg")
}

// ─────────────────────────────────────────────────────────────
// NEU HIER OBEN EINFÜGEN – neuester Post kommt immer zuerst
// ─────────────────────────────────────────────────────────────
export const posts: Post[] = [
  {
    slug: "mg-gebaeudeservice-duesseldorf-case-study",
    category: "Blog",
    date: "2. April 2026",
    isoDate: "2026-04-02",
    title: "Wir wollten endlich Zahlen statt Bauchgefühl — Wie MG Gebäudeservice seine Prozesse digitalisiert hat",
    metaTitle: "MG Gebäudeservice Düsseldorf: Digitalisierung mit Taskey | Case Study",
    metaDescription: "Wie MG Gebäudeservice aus Düsseldorf mit 30 Mitarbeitern die Zeiterfassung, Einsatzplanung und Dokumentation mit Taskey digitalisiert hat. Echte Ergebnisse nach zwei Wochen.",
    summary:
      "30 Mitarbeiter, Stundenzettel auf Papier, Einsatzplanung per WhatsApp — MG Gebäudeservice aus Düsseldorf hat den Schritt vom analogen Betrieb zum datengetriebenen Unternehmen gemacht. Eine Case Study über NFC-Zeiterfassung, Echtzeit-Überblick und messbare Ergebnisse.",
    heroImage: "/095818D7-E56D-4784-AB51-A0EC8E9E85D5.png",
    body: `MG Gebäudeservice gehört zu den etablierten Gebäudereinigern in Düsseldorf. 30 Mitarbeiter, ein breit aufgestelltes Objektportfolio — von Bürokomplexen über Arztpraxen bis hin zu Produktionshallen. Der Betrieb läuft, die Kunden sind zufrieden, das Team ist eingespielt.

Aber wie in vielen gewachsenen Unternehmen der Branche steckten auch bei MG Gebäudeservice viele Abläufe noch in analogen Strukturen. Stundenzettel auf Papier, Einsatzkoordination über Messenger-Gruppen, Auswertungen per Excel. Nicht weil es an Professionalität fehlte — sondern weil es jahrelang funktioniert hat.

„Uns war klar, dass wir an einem Punkt sind, wo wir das nächste Level nur mit besseren Daten erreichen. Die Frage war nie ob wir digitalisieren, sondern womit", sagt Mikolaj.

Was fehlte, war kein Wille zur Veränderung — sondern ein System, das zum operativen Alltag einer Reinigungsfirma passt. Eins, das die Mitarbeiter draußen ohne Schulung bedienen können. Das dem Innendienst sofort zeigt, welches Objekt wirtschaftlich läuft und wo nachgesteuert werden muss. Und das nicht erst beim Steuerberater Wochen später Klarheit schafft, sondern in Echtzeit.

MG Gebäudeservice hat sich für Taskey entschieden — und den Schritt vom gut geführten Betrieb zum datengetriebenen Unternehmen gemacht.

## Die Herausforderung im Detail

Auf dem Papier lief bei MG Gebäudeservice alles rund. In der Praxis kosteten drei Dinge jeden Tag unnötig Zeit und Nerven.

**Dokumente suchen statt arbeiten**

Angebot von vor drei Monaten? Irgendwo in den E-Mails. Reinigungsprotokoll vom letzten Freitag? Vielleicht im Messenger-Verlauf, vielleicht in der Cloud, vielleicht ausgedruckt im Ordner. Wer in einem wachsenden Betrieb Informationen über fünf verschiedene Kanäle verteilt hat, kennt das: Man weiß, dass das Dokument existiert — man weiß nur nicht mehr wo.

„Wenn ein Kunde angerufen hat und eine Rechnung oder ein Angebot brauchte, habe ich teilweise 15 Minuten gesucht. Nicht weil wir unorganisiert sind, sondern weil alles in verschiedenen Systemen lag", sagt Gian Luca.

Mit Taskey liegt jetzt alles an einem Ort. Angebote, Rechnungen, Objektdaten, Einsatzhistorie — ein Klick im Dashboard, fertig. Kein Scrollen durch E-Mail-Verläufe, kein Durchwühlen von Ordnern.

**Angebote schneller raus, Aufträge schneller rein**

Jedes Angebot, das einen Tag zu spät rausgeht, ist ein Auftrag, den jemand anderes bekommt. Bei MG Gebäudeservice lief die Angebotserstellung bisher manuell — Kalkulation in Excel, Formatierung in Word, Versand per E-Mail. Funktioniert, aber dauert.

Das Ziel war klar: Angebote sollen in Minuten raus, nicht in Stunden. Mit hinterlegten Kalkulationsgrundlagen, professionellem Layout und direktem Versand aus dem System. Weniger Aufwand im Büro, schnellere Reaktionszeit beim Kunden.

**Echtzeit-Überblick statt Blindflug**

Das war der eigentliche Gamechanger. Abends auf dem Sofa das Handy rausholen und sofort sehen: Objekt Citypark wird gerade gereinigt, Schicht hat um 19:30 Uhr angefangen, Mitarbeiterin Frau Müller ist vor Ort. Objekt Medicum ist schon fertig, Reinigung hat 2,5 Stunden gedauert — genau wie kalkuliert.

Vorher war das eine Blackbox. Man hat morgens den Plan gemacht und gehofft, dass alles läuft. Ob tatsächlich gereinigt wurde, wann und von wem — das wusste man erst, wenn die Zettel kamen. Oder wenn der Kunde sich beschwert hat.

„Ich muss heute niemandem mehr hinterhertelefonieren. Ich öffne die App und sehe alles. Welcher Mitarbeiter ist wo, wie lange dauert das Objekt, stimmt der Zeitplan. Das gibt mir eine Ruhe, die ich vorher nicht hatte", sagt Mikolaj.

Für die Kunden von MG Gebäudeservice bedeutet das: lückenlose Dokumentation, jederzeit abrufbar. Für die Geschäftsführung bedeutet es: Kontrolle ohne Mikromanagement. Und für das Team bedeutet es: klare Strukturen, weniger Rückfragen, mehr Eigenverantwortung.

## Die Lösung — Taskey im Einsatz

Die Umstellung bei MG Gebäudeservice war keine monatelange IT-Migration. Es war ein Nachmittag.

**NFC-Tags an jedem Objekt und jedem Raum**

An den Objekten und in den einzelnen Räumen und Bereichen wurden NFC-Tags angebracht — kleine Aufkleber, kaum sichtbar, praktisch unzerstörbar. Das Prinzip ist denkbar einfach: Mitarbeiter kommt an, hält das Smartphone ans Tag, eingecheckt. Raum fertig, nächstes Tag scannen, weiter zum nächsten Bereich.

Kein Zettel, kein Anruf, keine App-Eingabe. Handy dranhalten — das wars.

Für MG Gebäudeservice hat das zwei Dinge auf einmal gelöst. Erstens: Die Zeiterfassung läuft automatisch, sekundengenau und manipulationssicher. Zweitens — und das war der eigentliche Mehrwert — entsteht eine lückenlose Dokumentation auf Raum-Ebene. Nicht nur „Objekt Citypark wurde gereinigt", sondern „Empfangsbereich fertig um 19:47, Großraumbüro 2. OG fertig um 20:23, Sanitäranlagen fertig um 20:41."

„Wenn ein Kunde fragt, ob ein bestimmter Bereich gereinigt wurde, muss ich nicht mehr meinen Mitarbeiter anrufen. Ich schaue ins Dashboard und habe die Antwort in drei Sekunden", sagt Gian Luca.

**Auftragsplanung? Erledigt sich von selbst**

Vorher sah die Einsatzplanung bei MG Gebäudeservice so aus: Excel-Tabelle mit Schichtplänen, Änderungen per WhatsApp durchgeben, hoffen dass jeder die aktuelle Version hat. Bei Krankheit oder Ausfall: Telefon-Rallye.

Mit Taskey ist die gesamte Auftragsplanung digital. Objekte anlegen, Mitarbeiter zuweisen, Schichtzeiten definieren — alles im System. Änderungen kommen in Echtzeit auf dem Handy des Mitarbeiters an. Kein Hin-und-Her, keine veralteten Pläne, kein „Ich wusste nicht, dass ich heute dort sein soll."

Das spart nicht nur Zeit in der Verwaltung. Es eliminiert eine komplette Fehlerquelle. Wenn der Plan digital ist und jeder Mitarbeiter ihn live auf dem Smartphone hat, gibt es keine Missverständnisse mehr.

**Alles in einem System**

Angebote erstellen, Einsätze planen, Zeiten erfassen, Objekte dokumentieren, Rechnungen schreiben — bei MG Gebäudeservice läuft das jetzt über ein einziges Dashboard. Keine fünf verschiedenen Tools, kein Excel als Brücke dazwischen.

Für die Geschäftsführung bedeutet das: eine Quelle der Wahrheit. Für das Büro-Team bedeutet das: weniger Handgriffe, weniger Fehler. Und für die Mitarbeiter draußen bedeutet das: eine App, die sie in zwei Minuten verstanden haben.

## Die Ergebnisse nach zwei Wochen

Zwei Wochen. Mehr hat es nicht gebraucht, um die ersten Unterschiede deutlich zu spüren.

**Zeiterfassung: Von Stunden auf Sekunden**

Vorher hat das Einsammeln, Kontrollieren und Übertragen der Stundenzettel bei MG Gebäudeservice rund 8–10 Stunden pro Monat gekostet — verteilt auf das Büro-Team und die Geschäftsführung. Mit NFC-Stempeln an den Objekten ist dieser Aufwand auf nahezu null gefallen. Die Zeiten landen automatisch im System, sekundengenau und ohne manuellen Eingriff.

**Einsatzplanung: 3 Stunden pro Woche gespart**

Die manuelle Koordination über Excel und WhatsApp hat vorher gut 3 Stunden pro Woche verschlungen — Schichtpläne bauen, Änderungen kommunizieren, Rückfragen beantworten. Seit die Planung digital über Taskey läuft, reichen 20 Minuten. Änderungen kommen in Echtzeit auf dem Handy der Mitarbeiter an, Rückfragen sind fast komplett weggefallen.

**Kundenkommunikation: Vom Bauchgefühl zur Dokumentation**

Wenn ein Auftraggeber heute fragt, ob und wann ein bestimmtes Objekt gereinigt wurde, hat MG Gebäudeservice die Antwort in Sekunden. Kein Telefonieren, kein Nachfragen beim Team. Das Dashboard zeigt Zeitstempel, Mitarbeiter und Raum-Ebene — lückenlos und digital. Für einen Betrieb, der auf Vertrauen und Zuverlässigkeit setzt, ist das ein echter Wettbewerbsvorteil.

**Die Zahlen auf einen Blick**

|||
|Zeiterfassung (Admin/Monat)|~10 Stunden|< 30 Minuten|
|Einsatzplanung (pro Woche)|~3 Stunden|~20 Minuten|
|Dokumentensuche pro Vorfall|10–15 Minuten|< 30 Sekunden|
|Kundennachweis bei Rückfragen|Telefon-Rallye|3 Klicks im Dashboard|
|Onboarding Mitarbeiter (App)|—|< 5 Minuten|

## Fazit

MG Gebäudeservice ist kein Betrieb, der vorher schlecht aufgestellt war. Im Gegenteil: 30 Mitarbeiter, fester Kundenstamm, guter Ruf in Düsseldorf. Aber wie in vielen Unternehmen dieser Größe waren die Abläufe an einem Punkt, an dem analoges Arbeiten mehr Energie gekostet hat als es gebracht hat.

Zwei Wochen mit Taskey haben gereicht, um die täglichen Reibungsverluste spürbar zu reduzieren. Keine verlorenen Stundenzettel mehr, keine WhatsApp-Koordination, keine Sucherei nach Dokumenten. Stattdessen: ein System, das dem Chef in Echtzeit zeigt, wo der Betrieb steht — und das die Mitarbeiter draußen in zwei Minuten verstanden haben.

Gian Luca von MG Gebäudeservice bringt es auf den Punkt:

> „Taskey hat unsere internen Abläufe grundlegend verändert — von der Zeiterfassung über die Einsatzplanung bis hin zur Dokumentation. Aber was mich persönlich am meisten überzeugt hat, ist die Wirkung nach außen. Unsere Kunden sehen, dass wir professionell arbeiten. Wenn ein Auftraggeber eine Frage hat, können wir innerhalb von Sekunden eine lückenlose Dokumentation vorlegen. Das schafft Vertrauen auf einem ganz anderen Niveau. Taskey gibt uns die Möglichkeit, unseren Kunden ein umfassendes Qualitätsmanagement zu bieten — und genau das unterscheidet uns heute von vielen Mitbewerbern. Ich kann Taskey jedem Betrieb empfehlen, der nicht nur intern besser werden will, sondern auch nach außen zeigen möchte, was er leistet."`,
  },
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
