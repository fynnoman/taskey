import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rechtliches – AGB & SLA',
  description: 'Allgemeine Geschäftsbedingungen, Nutzungsbedingungen und Service Level Agreements für Taskey – Schulz & Stosse GbR.',
};

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Rechtliches
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hier finden Sie alle relevanten Geschäftsbedingungen, Nutzungsbedingungen und Service Level Agreements für Taskey.
          </p>
          <p className="text-sm text-gray-400 mt-3">Schulz &amp; Stosse GbR · Stand: März 2026</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {/* 1 — Endkunden / Bauherren */}
          <a
            href="https://cdn.vars-development.com/compliance/client/germany/AGB.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-400 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
              <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
              ENDKUNDEN
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Nutzungsbedingungen &amp; AGB</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Für Endkunden und Bauherren – Nutzungsbedingungen für das Taskey Share Portal und allgemeine Geschäftsbedingungen.
            </p>
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm group-hover:gap-3 transition-all">
              Dokument öffnen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </div>
          </a>

          {/* 2 — Firmenkunden */}
          <div className="relative bg-white rounded-2xl border-2 border-gray-200 p-8">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
              FIRMENKUNDEN
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">AGB &amp; SLA für Unternehmen</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Für Firmen, die Taskey kaufen – ausführliche Geschäftsbedingungen (B2B) und Service Level Agreement.
            </p>
            <div className="space-y-3">
              <a
                href="https://cdn.vars-development.com/compliance/companies/germany/AGB.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center justify-between bg-gray-50 hover:bg-gray-900 rounded-xl px-4 py-3 transition-all duration-300 border border-gray-200 hover:border-gray-900"
              >
                <div>
                  <span className="text-sm font-bold text-gray-900 group-hover/link:text-white transition-colors">AGB (B2B)</span>
                  <span className="block text-xs text-gray-500 group-hover/link:text-gray-400 transition-colors">Allgemeine Geschäftsbedingungen</span>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover/link:text-white transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <a
                href="https://cdn.vars-development.com/compliance/companies/germany/SLA.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center justify-between bg-gray-50 hover:bg-blue-900 rounded-xl px-4 py-3 transition-all duration-300 border border-gray-200 hover:border-blue-900"
              >
                <div>
                  <span className="text-sm font-bold text-gray-900 group-hover/link:text-white transition-colors">SLA</span>
                  <span className="block text-xs text-gray-500 group-hover/link:text-blue-200 transition-colors">Service Level Agreement &amp; Verfügbarkeit</span>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover/link:text-white transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>

          {/* 3 — Mitarbeiter */}
          <a
            href="https://cdn.vars-development.com/compliance/employees/germany/AGB.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl border-2 border-gray-200 hover:border-purple-400 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
              <svg className="w-7 h-7 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
              MITARBEITER
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">AGB für Mitarbeiter</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Für Mitarbeiter der Firmen – Geschäftsbedingungen zur Nutzung der Taskey App im Arbeitsalltag.
            </p>
            <div className="flex items-center gap-2 text-purple-700 font-bold text-sm group-hover:gap-3 transition-all">
              Dokument öffnen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </div>
          </a>

        </div>

        {/* Info Footer */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
          <div className="flex items-start gap-4">
            <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-sm text-gray-700 font-semibold mb-1">Schulz &amp; Stosse GbR</p>
              <p className="text-sm text-gray-600">In der Acht 44, 66333 Völklingen, Deutschland</p>
              <p className="text-sm text-gray-500 mt-2">Bei Fragen zu unseren Geschäftsbedingungen erreichen Sie uns unter <a href="mailto:fynn@taskeyapp.com" className="text-blue-700 hover:underline font-medium">fynn@taskeyapp.com</a></p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
