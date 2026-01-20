import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Angaben von Taskey - Schulz & Stosse GbR.',
};

export default function ImpressumPage() {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            Schulz & Stosse GbR<br />
            In der Acht 44<br />
            66333 Völklingen<br />
            Deutschland
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Vertreten durch</h2>
          <p>Geschäftsführer: Fynn-Luca Schulz & Julian Stosse</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Kontakt</h2>
          <p>
            Telefon: +49 151 684 88999<br />
            E-Mail: fynn@vars-development.com
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
            DE458914838
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Fynn-Luca Schulz<br />
            Heiligenbornstraße 7<br />
            66359 Bous<br />
            Deutschland
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr" className="text-blue-900 hover:underline">
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p>
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </main>
  );
}
