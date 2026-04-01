import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Angaben von Taskey.',
};

export default function ImpressumPage() {
  return (
    <main className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 DDG</h2>
          <p>
            Schulz &amp; Stosse GbR<br />
            Taskey<br />
            In der Acht 44<br />
            66333 Völklingen<br />
            Deutschland
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Kontakt</h2>
          <p>
            Telefon: +49 151 68488999<br />
            E-Mail: fynn@taskeyapp.com
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE458914838
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Redaktionell verantwortlich gemäß § 18 MStV</h2>
          <p>
            Fynn-Luca Schulz<br />
            In der Acht 44<br />
            66333 Völklingen
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </main>
  );
}
