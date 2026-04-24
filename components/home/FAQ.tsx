'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

/**
 * FAQ — Dark Revolut-Style Accordion:
 * Asymmetrisches 2-Spalten-Layout: links sticky Eyebrow + große Headline,
 * rechts elegantes Glass-Accordion. Kein klassisches Split-Card-Layout.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = [
    { question: t('faq.1.q'), answer: t('faq.1.a') },
    { question: t('faq.2.q'), answer: t('faq.2.a') },
    { question: t('faq.3.q'), answer: t('faq.3.a') },
    { question: t('faq.4.q'), answer: t('faq.4.a') },
    { question: t('faq.5.q'), answer: t('faq.5.a') },
    { question: t('faq.6.q'), answer: t('faq.6.a') },
    { question: t('faq.7.q'), answer: t('faq.7.a') },
    { question: t('faq.8.q'), answer: t('faq.8.a') },
    { question: t('faq.9.q'), answer: t('faq.9.a') },
    { question: t('faq.10.q'), answer: t('faq.10.a') },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white py-24 md:py-36 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Sticky Intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-cyan-300 mb-5">
                {t('faq.title') || 'Häufige Fragen'}
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-6 text-white">
                Alles,
                <br />
                <span className="text-white/40">was Sie</span>
                <br />
                wissen müssen.
              </h2>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-md">
                {t('faq.subtitle') ||
                  'Keine Lust zu lesen? Unser Team beantwortet Ihre Fragen auch persönlich – direkt per Chat.'}
              </p>
              <a
                href="mailto:hello@taskeyapp.com"
                className="inline-flex items-center gap-2 text-cyan-300 font-bold text-sm hover:text-cyan-200 transition-colors group"
              >
                Persönlich fragen
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="group">
                    <button
                      className="w-full py-5 md:py-6 text-left flex justify-between items-center gap-4 hover:text-cyan-300 transition-colors"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span
                        className={`font-bold text-base md:text-lg transition-colors ${
                          isOpen ? 'text-cyan-300' : 'text-white'
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                          isOpen
                            ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-300 rotate-45'
                            : 'border-white/20 text-white/60 group-hover:border-white/40'
                        }`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 pb-6 md:pb-7' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-white/70 leading-relaxed text-sm md:text-base max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
