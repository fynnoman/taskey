'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

// SVG icon paths for benefits (static, no translation needed)
const benefitIcons = [
  <svg key="b1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="b2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="b3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  <svg key="b4" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  <svg key="b5" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
  <svg key="b6" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
];

export default function PartnerschaftenPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnerModels = [
    {
      id: 'empfehlung',
      title: t('partner.model1.title'),
      subtitle: t('partner.model1.subtitle'),
      description: t('partner.model1.desc'),
      highlights: [t('partner.model1.h1'), t('partner.model1.h2'), t('partner.model1.h3')],
    },
    {
      id: 'integration',
      title: t('partner.model2.title'),
      subtitle: t('partner.model2.subtitle'),
      description: t('partner.model2.desc'),
      highlights: [t('partner.model2.h1'), t('partner.model2.h2'), t('partner.model2.h3')],
    },
    {
      id: 'vertrieb',
      title: t('partner.model3.title'),
      subtitle: t('partner.model3.subtitle'),
      description: t('partner.model3.desc'),
      highlights: [t('partner.model3.h1'), t('partner.model3.h2'), t('partner.model3.h3')],
    },
  ];

  const steps = [
    { step: '01', title: t('partner.step1.title'), description: t('partner.step1.desc') },
    { step: '02', title: t('partner.step2.title'), description: t('partner.step2.desc') },
    { step: '03', title: t('partner.step3.title'), description: t('partner.step3.desc') },
    { step: '04', title: t('partner.step4.title'), description: t('partner.step4.desc') },
  ];

  const benefits = [
    { title: t('partner.benefit1.title'), description: t('partner.benefit1.desc'), icon: benefitIcons[0] },
    { title: t('partner.benefit2.title'), description: t('partner.benefit2.desc'), icon: benefitIcons[1] },
    { title: t('partner.benefit3.title'), description: t('partner.benefit3.desc'), icon: benefitIcons[2] },
    { title: t('partner.benefit4.title'), description: t('partner.benefit4.desc'), icon: benefitIcons[3] },
    { title: t('partner.benefit5.title'), description: t('partner.benefit5.desc'), icon: benefitIcons[4] },
    { title: t('partner.benefit6.title'), description: t('partner.benefit6.desc'), icon: benefitIcons[5] },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    partnerType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/send-partner-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', partnerType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative bg-gray-950 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Partnerprogramm
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              {t('partner.hero.title')}<br />
              <span className="text-blue-400">{t('partner.hero.title.highlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-bold mb-4 max-w-3xl">
              {t('partner.hero.subtitle')}
            </p>
            <p className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed">
              {t('partner.hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-600/25 text-lg"
              >
                Jetzt Partner werden
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#modelle"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all border border-white/10 text-lg"
              >
                {t('partner.hero.cta2')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vertrauens-Statement */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Image src="/logoblue.png" alt="Taskey Logo" width={80} height={80} className="mx-auto" sizes="80px" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
            {t('partner.trust.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('partner.trust.desc')}
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">{t('partner.benefits.badge')}</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              {t('partner.benefits.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner-Modelle */}
      <section id="modelle" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-3">{t('partner.models.badge')}</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
              {t('partner.models.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('partner.models.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerModels.map((model) => (
              <div key={model.id} className="bg-gray-50 rounded-2xl border border-gray-100 p-7 flex flex-col">
                <h3 className="text-xl font-black text-gray-900 mb-1">{model.title}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-4">{model.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{model.description}</p>
                <ul className="space-y-2.5 mt-auto">
                  {model.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* So funktioniert's */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">{t('partner.steps.badge')}</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              {t('partner.steps.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center mb-4">
                  <span className="text-white font-black text-sm">{s.step}</span>
                </div>
                <h3 className="font-black text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-black text-white">600+</p>
              <p className="text-gray-500 text-sm mt-1">{t('partner.social.industries')}</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">DSGVO</p>
              <p className="text-gray-500 text-sm mt-1">{t('partner.social.compliant')}</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">100%</p>
              <p className="text-gray-500 text-sm mt-1">Made in Germany</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">{t('partner.social.permanent')}</p>
              <p className="text-gray-500 text-sm mt-1">{t('partner.social.revenue')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Partner */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">{t('partner.partners.badge')}</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
              {t('partner.partners.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('partner.partners.note')}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="flex flex-col items-center gap-4 bg-gray-50 rounded-2xl border border-gray-100 px-10 py-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Image
                src="https://cdn.vars-development.com/logos/enterprise/mg-geba%CC%88udeservice.png.avif"
                alt="MG Gebäudeservice"
                width={160}
                height={60}
                className="object-contain"
              />
              <p className="text-gray-900 font-bold text-lg">MG Gebäudeservice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktformular */}
      <section id="kontakt" className="py-20 md:py-28 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">{t('partner.contact.badge')}</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
              {t('partner.contact.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              {t('partner.contact.subtitle')}
            </p>
          </div>

          {status === 'success' ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">{t('partner.contact.success.title')}</h3>
              <p className="text-gray-600">{t('partner.contact.success.desc')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1.5">{t('partner.contact.name')}</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900"
                    placeholder={t('partner.contact.name.placeholder')}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-1.5">{t('partner.contact.company')}</label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900"
                    placeholder={t('partner.contact.company.placeholder')}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1.5">{t('partner.contact.email')}</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900"
                    placeholder={t('partner.contact.email.placeholder')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1.5">{t('partner.contact.phone')}</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900"
                    placeholder="+49 ..."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="partnerType" className="block text-sm font-bold text-gray-700 mb-1.5">{t('partner.contact.model')}</label>
                <select
                  id="partnerType"
                  value={formData.partnerType}
                  onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 bg-white"
                >
                  <option value="">{t('partner.contact.model.placeholder')}</option>
                  <option value="Empfehlungspartner">{t('partner.contact.model.empfehlung')}</option>
                  <option value="Integrationspartner">{t('partner.contact.model.integration')}</option>
                  <option value="Vertriebspartner">{t('partner.contact.model.vertrieb')}</option>
                  <option value="Noch unsicher">{t('partner.contact.model.unsicher')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1.5">{t('partner.contact.message')}</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 resize-none"
                  placeholder={t('partner.contact.message.placeholder')}
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm font-medium">
                  {t('partner.contact.error')}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 disabled:bg-blue-900/50 text-white font-black px-8 py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg text-lg"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    {t('partner.contact.submit')}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </>
                )}
              </button>
              <p className="text-center text-gray-500 text-sm">
                {t('partner.contact.emailDirect')} <a href="mailto:fynn@taskeyapp.com" className="text-blue-900 hover:underline font-medium">fynn@taskeyapp.com</a>
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
