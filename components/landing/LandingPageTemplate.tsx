'use client';

import Link from 'next/link';
import CommunicationUSP from '@/components/CommunicationUSP';
import AllInOneUSP from '@/components/AllInOneUSP';

export interface PainPoint {
  text: string;
}

export interface SolutionStep {
  title: string;
  description: string;
}

export interface RelatedLink {
  href: string;
  label: string;
  description: string;
}

export interface LandingPageData {
  badge: string;
  headline: string;
  headlineHighlight: string;
  subheadline: string;
  heroDescription: string;
  painPoints: PainPoint[];
  solutionTitle: string;
  solutionDescription: string;
  solutionSteps: SolutionStep[];
  ctaText: string;
  featureHighlights: { title: string; description: string }[];
  closingHeadline: string;
  closingText: string;
  relatedLinks?: RelatedLink[];
}

export default function LandingPageTemplate({ data }: { data: LandingPageData }) {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative bg-gray-950 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 70% 20%, #1e40af 0%, transparent 50%), radial-gradient(circle at 30% 80%, #1e3a8a 0%, transparent 40%)' }} />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            {data.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
            {data.headline}{' '}
            <span className="text-blue-400">{data.headlineHighlight}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-bold mb-4 max-w-3xl">
            {data.subheadline}
          </p>

          <p className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed">
            {data.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-600/25 text-lg"
            >
              {data.ctaText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <p className="text-gray-600 text-sm mt-5">Keine Kreditkarte · 3 Monate kostenlos · Sofort startklar</p>
          <p className="text-gray-500 text-xs mt-2">Flexible Abrechnung: Monatlich kündbar oder jährlich mit 13% Rabatt</p>
        </div>
      </section>

      <CommunicationUSP variant="compact" />
      <AllInOneUSP variant="compact" />

      {/* Pain Points */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-black text-red-500 uppercase tracking-widest mb-3">Das Problem</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              Kommt Ihnen das bekannt vor?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {data.painPoints.map((pain, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-red-50/50 border border-red-100 rounded-xl p-5">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">{pain.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-3">Die Lösung</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
              {data.solutionTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {data.solutionDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.solutionSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center mb-5">
                  <span className="text-white font-black text-sm">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">Warum Taskey</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              Alles, was Ihr Betrieb braucht
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.featureHighlights.map((feat, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-blue-900 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      {data.relatedLinks && data.relatedLinks.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-sm font-black text-gray-500 uppercase tracking-widest mb-3">Das könnte Sie auch interessieren</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                Verwandte Themen
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {data.relatedLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-lg font-black text-gray-900 group-hover:text-blue-900 transition-colors mb-2">
                    {link.label}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{link.description}</p>
                  <span className="text-blue-600 text-sm font-bold group-hover:text-blue-800 transition-colors inline-flex items-center gap-1">
                    Mehr erfahren
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social Proof Bar */}
      <section className="py-10 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-black text-white">600+</p>
              <p className="text-gray-500 text-sm mt-1">Branchen</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">DSGVO</p>
              <p className="text-gray-500 text-sm mt-1">Konform</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">100%</p>
              <p className="text-gray-500 text-sm mt-1">Made in Germany</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">3 Monate</p>
              <p className="text-gray-500 text-sm mt-1">Kostenlos testen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
            {data.closingHeadline}
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            {data.closingText}
          </p>

          <Link
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-900 hover:bg-blue-800 text-white font-black px-10 py-5 rounded-2xl transition-all hover:scale-105 shadow-lg text-xl"
          >
            Jetzt kostenlos starten
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <p className="text-gray-500 text-sm mt-4">Keine Kreditkarte · Kein Risiko · Sofort loslegen</p>
        </div>
      </section>
    </main>
  );
}
