import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Taskey - Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
};

export default function DatenschutzPage() {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Verantwortlicher</h2>
            <p className="mb-2">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="font-semibold">
              Fynn - Luca Schulz<br />
              Schulz & Stosse GbR<br />
              In der Acht 44<br />
              66333 Völklingen<br />
              E-Mail: fynnschulzonline@gmail.com<br />
              Telefon: 015168488999
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Personenbezogene Daten werden 
              auf dieser Website ausschließlich im Rahmen der gesetzlichen Bestimmungen der Datenschutz-Grundverordnung 
              (DSGVO) sowie weiterer einschlägiger Datenschutzgesetze verarbeitet.
            </p>
            <p>
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Erhebung und Speicherung personenbezogener Daten beim Besuch der Website</h2>
            <p className="mb-3">
              Beim Aufrufen unserer Website werden durch den Browser automatisch folgende Informationen 
              an unseren Server übermittelt:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Zeitzonendifferenz zur GMT</li>
              <li>Inhalt der Anforderung</li>
              <li>Zugriffsstatus / HTTP-Statuscode</li>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="mt-3">Diese Daten werden temporär in Logfiles gespeichert.</p>
            
            <p className="mt-4"><strong>Zweck der Verarbeitung:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Gewährleistung eines reibungslosen Verbindungsaufbaus</li>
              <li>Systemsicherheit und -stabilität</li>
              <li>technische Administration</li>
            </ul>
            
            <p className="mt-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, werden die von Ihnen 
              übermittelten Daten verarbeitet (z. B. Name, E-Mail-Adresse, Nachricht).
            </p>
            <p className="mt-3">
              <strong>Zweck der Verarbeitung:</strong> Bearbeitung Ihrer Anfrage und Kommunikation.
            </p>
            <p className="mt-3">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) 
              oder Art. 6 Abs. 1 lit. f DSGVO
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Newsletter / Wartelisten (falls genutzt)</h2>
            <p>
              Sofern Sie sich für einen Newsletter oder eine Warteliste anmelden, verarbeiten wir Ihre 
              E-Mail-Adresse und ggf. weitere freiwillige Angaben.
            </p>
            <p className="mt-3">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
            </p>
            <p className="mt-3">Die Einwilligung kann jederzeit widerrufen werden.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies und ähnliche Technologien</h2>
            <p className="mb-3">
              Unsere Website verwendet Cookies und ähnliche Technologien. Cookies sind kleine Textdateien, die auf Ihrem Endgerät 
              gespeichert werden und bestimmte Einstellungen und Daten zum Austausch mit unserem System über Ihren Browser speichern.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">Cookie-Kategorien</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technisch notwendige Cookies</h4>
                <p className="mb-2">
                  Diese Cookies sind für den Betrieb der Website zwingend erforderlich und können nicht deaktiviert werden.
                </p>
                <p className="text-sm">
                  <strong>Zweck:</strong> Seitennavigation, Speicherung Ihrer Cookie-Auswahl, Systemstabilität<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO, § 25 Abs. 2 TTDSG<br />
                  <strong>Einwilligung erforderlich:</strong> Nein
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Funktionale Cookies</h4>
                <p className="mb-2">
                  Diese Cookies ermöglichen erweiterte Funktionen wie Spracheinstellungen oder regionale Präferenzen.
                </p>
                <p className="text-sm">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG<br />
                  <strong>Einwilligung erforderlich:</strong> Ja<br />
                  <strong>Speicherdauer:</strong> Bis zu 12 Monate
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Analyse- und Statistik-Cookies</h4>
                <p className="mb-2">
                  Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen. Die Auswertung erfolgt anonym oder pseudonym.
                </p>
                <p className="text-sm">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG<br />
                  <strong>Einwilligung erforderlich:</strong> Ja<br />
                  <strong>Speicherdauer:</strong> Bis zu 14 Monate
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Marketing- und Tracking-Cookies</h4>
                <p className="mb-2">
                  Diese Cookies werden verwendet, um Besuchern relevante Inhalte anzuzeigen und die Wirksamkeit von Marketingmaßnahmen zu messen.
                </p>
                <p className="text-sm">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG<br />
                  <strong>Einwilligung erforderlich:</strong> Ja
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Externe Inhalte</h4>
                <p className="mb-2">
                  Externe Inhalte von Drittanbietern (z. B. Videos, Karten) können Cookies setzen.
                </p>
                <p className="text-sm">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG<br />
                  <strong>Einwilligung erforderlich:</strong> Ja
                </p>
              </div>
            </div>

            <p className="mt-4 bg-blue-50 p-4 rounded-lg">
              <strong>Cookie-Einstellungen verwalten:</strong><br />
              Sie können Ihre Cookie-Einwilligung jederzeit über den Link "Cookie-Einstellungen" in der Fußzeile unserer Website ändern oder widerrufen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Analyse- und Tracking-Tools</h2>
            <p className="mb-3">
              Sofern Analyse-Tools (z. B. Google Analytics, Plausible, etc.) eingesetzt werden, erfolgt 
              dies nur nach Ihrer Einwilligung.
            </p>
            <p className="mb-2">Verarbeitete Daten können sein:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP-Adresse (gekürzt/anonymisiert)</li>
              <li>Nutzungsverhalten</li>
              <li>Seitenaufrufe</li>
            </ul>
            <p className="mt-3">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Hosting</h2>
            <p>Die Website wird bei einem externen Hosting-Anbieter betrieben.</p>
            <p className="mt-3">
              <strong>Verarbeitete Daten:</strong> alle im Rahmen des Websitebetriebs anfallenden Daten.
            </p>
            <p className="mt-3">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
            </p>
            <p className="mt-3">
              Mit dem Hosting-Anbieter besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Weitergabe von Daten</h2>
            <p className="mb-2">Eine Weitergabe personenbezogener Daten erfolgt nur, wenn:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sie ausdrücklich eingewilligt haben</li>
              <li>eine gesetzliche Verpflichtung besteht</li>
              <li>dies zur Vertragsabwicklung erforderlich ist</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke 
              erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Rechte der betroffenen Personen</h2>
            <p className="mb-2">Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Datensicherheit</h2>
            <p>
              Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre Daten gegen 
              Verlust, Missbrauch oder unbefugten Zugriff zu schützen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
