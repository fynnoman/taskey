import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nutzungsbedingungen',
  description: 'Nutzungsbedingungen für die Website Taskey - Rechtliche Hinweise zur Nutzung unserer Website.',
};

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Nutzungsbedingungen – Website Taskey
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p className="text-sm text-gray-600">
            Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Geltungsbereich</h2>
            <p>
              Diese Nutzungsbedingungen gelten für die Nutzung der Website Taskey durch Besucher und Nutzer.
            </p>
          </section>

          <hr className="border-gray-300 my-6" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Inhalte der Website</h2>
            <p>
              Die Website stellt Informationen über die Software Taskey, deren Funktionen sowie Unternehmensinformationen bereit.
            </p>
            <p>
              Alle Inhalte dienen ausschließlich der Information und stellen kein verbindliches Angebot dar.
            </p>
          </section>

          <hr className="border-gray-300 my-6" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Verfügbarkeit</h2>
            <p>
              Wir bemühen uns um eine möglichst unterbrechungsfreie Verfügbarkeit der Website, übernehmen jedoch keine Garantie dafür.
            </p>
          </section>

          <hr className="border-gray-300 my-6" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Geistiges Eigentum</h2>
            <p>
              Alle Inhalte dieser Website (Texte, Grafiken, Logos, Bilder, Konzepte) sind urheberrechtlich geschützt.
            </p>
            <p>
              Eine Vervielfältigung, Bearbeitung oder Weitergabe ist ohne vorherige schriftliche Zustimmung nicht gestattet.
            </p>
          </section>

          <hr className="border-gray-300 my-6" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Haftung für Inhalte</h2>
            <p>
              Die Inhalte der Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Haftung.
            </p>
          </section>

          <hr className="border-gray-300 my-6" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Haftung für externe Links</h2>
            <p>
              Unsere Website enthält Links zu externen Websites Dritter. Für deren Inhalte übernehmen wir keine Verantwortung.
            </p>
          </section>

          <hr className="border-gray-300 my-6" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Keine Beratung</h2>
            <p>
              Die auf der Website bereitgestellten Informationen stellen keine rechtliche, steuerliche oder betriebswirtschaftliche Beratung dar.
            </p>
          </section>

          <hr className="border-gray-300 my-6" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Missbräuchliche Nutzung</h2>
            <p className="mb-3">Eine missbräuchliche Nutzung der Website, insbesondere:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>automatisierte Zugriffe</li>
              <li>Scraping</li>
              <li>Manipulation</li>
              <li>Umgehung von Schutzmaßnahmen</li>
            </ul>
            <p className="mt-3">ist untersagt.</p>
          </section>

          <hr className="border-gray-300 my-6" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Änderungen</h2>
            <p>
              Wir behalten uns vor, Inhalte und Funktionen der Website jederzeit zu ändern oder einzustellen.
            </p>
          </section>

          <hr className="border-gray-300 my-6" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Anwendbares Recht</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland, soweit keine zwingenden gesetzlichen Vorschriften entgegenstehen.
            </p>
          </section>

          <hr className="border-gray-300 my-6" />

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Salvatorische Klausel</h2>
            <p>
              Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen unberührt.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
