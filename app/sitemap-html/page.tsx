import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Übersicht aller Seiten auf Taskey.de",
  robots: {
    index: true,
    follow: true,
  },
};

export default function SitemapPage() {
  const pages = [
    {
      title: "Startseite",
      url: "/",
      description: "Die Nr. 1 Dienstleistungssoftware für effiziente Betriebe",
    },
    {
      title: "Was ist Taskey?",
      url: "/was-ist-taskey",
      description: "Erfahren Sie mehr über Taskey und unsere Mission",
    },
    {
      title: "Features",
      url: "/features",
      description: "Alle Funktionen und Features im Überblick",
    },
    {
      title: "Live Demo",
      url: "/demo",
      description: "Testen Sie Taskey in unserer interaktiven Demo",
    },
    {
      title: "Preise",
      url: "/pricing",
      description: "Transparente Preise für jede Betriebsgröße",
    },
    {
      title: "Über uns",
      url: "/about",
      description: "Lernen Sie das Team hinter Taskey kennen",
    },
    {
      title: "Rollen & Berechtigungen",
      url: "/rollen",
      description: "Flexible Rollenverwaltung für Ihr Team",
    },
    {
      title: "Enterprise",
      url: "/enterprise",
      description: "Taskey für große Unternehmen",
    },
    {
      title: "Premium Manager",
      url: "/premium-manager",
      description: "Erweiterte Management-Funktionen",
    },
  ];

  const legalPages = [
    {
      title: "Impressum",
      url: "/impressum",
      description: "Rechtliche Informationen und Kontaktdaten",
    },
    {
      title: "Datenschutz",
      url: "/datenschutz",
      description: "Datenschutzerklärung und DSGVO-Informationen",
    },
    {
      title: "AGB",
      url: "/agb",
      description: "Allgemeine Geschäftsbedingungen",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sitemap
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Übersicht aller Seiten auf Taskey.de
          </p>

          {/* XML Sitemap Link */}
          <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Für Suchmaschinen:</strong>
            </p>
            <Link
              href="/sitemap.xml"
              className="text-blue-900 hover:text-blue-700 underline font-mono text-sm"
            >
              https://www.taskey.de/sitemap.xml
            </Link>
          </div>

          {/* Main Pages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Hauptseiten
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pages.map((page) => (
                <Link
                  key={page.url}
                  href={page.url}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-gray-200 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {page.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {page.description}
                  </p>
                  <span className="text-xs text-blue-900 font-mono">
                    {page.url === "/" ? "/" : page.url}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Legal Pages */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Rechtliches
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {legalPages.map((page) => (
                <Link
                  key={page.url}
                  href={page.url}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-gray-200 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {page.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {page.description}
                  </p>
                  <span className="text-xs text-blue-900 font-mono">
                    {page.url}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
