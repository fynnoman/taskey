'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const partnerModels = [
  {
    id: 'empfehlung',
    title: 'Empfehlungspartner',
    subtitle: 'Ideal für Berater, Branchenkenner & Netzwerker',
    description: 'Sie empfehlen Taskey an Betriebe in Ihrem Netzwerk und erhalten eine attraktive Umsatzbeteiligung – dauerhaft, solange der Kunde bei Taskey bleibt.',
    highlights: ['Prozentuale Umsatzbeteiligung', 'Kein technisches Know-how nötig', 'Persönlicher Partnerlink & Dashboard'],
  },
  {
    id: 'integration',
    title: 'Integrationspartner',
    subtitle: 'Ideal für Softwareanbieter & Systemhäuser',
    description: 'Sie integrieren Taskey in Ihre bestehende Lösung oder bieten es als Ergänzung an. Gemeinsam schaffen wir einen Mehrwert für Ihre Kunden.',
    highlights: ['API-Zugang & technischer Support', 'Co-Marketing Möglichkeiten', 'Gemeinsame Kundenbetreuung'],
  },
  {
    id: 'vertrieb',
    title: 'Vertriebspartner',
    subtitle: 'Ideal für Branchenverbände & Vertriebsorganisationen',
    description: 'Sie vertreiben Taskey aktiv in Ihrer Region oder Branche. Wir unterstützen Sie mit Schulungen, Material und einem exklusiven Provisionsmodell.',
    highlights: ['Exklusive Gebiets- oder Branchenrechte', 'Vertriebsschulungen & Materialien', 'Attraktives Provisionsmodell'],
  },
];

const benefits = [
  {
    title: 'Dauerhafte Einnahmen',
    description: 'Für jeden vermittelten Kunden erhalten Sie eine prozentuale Beteiligung – nicht einmalig, sondern dauerhaft.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Starkes Produkt',
    description: 'Taskey überzeugt mit 600+ Branchen, DSGVO-Konformität und Made-in-Germany-Qualität. Empfehlungen fallen leicht.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Persönlicher Ansprechpartner',
    description: 'Sie bekommen einen festen Ansprechpartner im Taskey-Team, der Sie bei allem unterstützt.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Transparentes Dashboard',
    description: 'Verfolgen Sie Ihre Empfehlungen, Conversions und Einnahmen in Echtzeit über Ihr Partner-Dashboard.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Marketing-Unterstützung',
    description: 'Wir stellen Ihnen Vertriebsmaterial, Landingpages und Co-Branding-Optionen zur Verfügung.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: 'Kein Risiko',
    description: 'Keine Kosten, keine Verpflichtungen. Sie verdienen nur, wenn Ihre Empfehlung erfolgreich ist.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
];

const steps = [
  { step: '01', title: 'Anfrage senden', description: 'Füllen Sie das Formular aus – wir melden uns innerhalb von 24 Stunden.' },
  { step: '02', title: 'Kennenlernen', description: 'Wir besprechen gemeinsam, welches Partnermodell am besten zu Ihnen passt.' },
  { step: '03', title: 'Loslegen', description: 'Sie erhalten Ihren Partnerlink, Zugang zum Dashboard und können sofort starten.' },
  { step: '04', title: 'Verdienen', description: 'Für jeden vermittelten Kunden erhalten Sie Ihre Beteiligung – dauerhaft.' },
];

export default function PartnerschaftenPage() {
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
        {/* Hintergrundbild */}
        <div className="absolute inset-0">
          <Image
            src="/hand.png"
            alt="Partnerschaft – gemeinsam wachsen"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
        </div>
        {/* Gradient-Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 70% 20%, #1e40af 0%, transparent 50%), radial-gradient(circle at 30% 80%, #1e3a8a 0%, transparent 40%)' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Partnerprogramm
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Gemeinsam<br />
              <span className="text-blue-400">wachsen.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-bold mb-4 max-w-3xl">
              Empfehlen Sie Taskey – und profitieren Sie dauerhaft von jeder erfolgreichen Vermittlung.
            </p>
            <p className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed">
              Ob Berater, Systemhaus oder Branchenverband: Werden Sie Teil unseres Partnernetzwerks und verdienen Sie mit, während Sie Betrieben helfen, digital durchzustarten.
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
                Partnermodelle ansehen
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
            Warum Betriebe Taskey empfehlen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Taskey wird bereits von Handwerkern, Baufirmen und Reinigungsunternehmen in ganz Deutschland eingesetzt. 
            Ein Produkt, das funktioniert – und sich einfach weiterempfehlen lässt.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">Ihre Vorteile</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              Das bekommen Sie als Partner
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
            <p className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-3">Partnermodelle</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
              Finden Sie das passende Modell
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Drei Wege, mit Taskey zusammenzuarbeiten – wählen Sie den, der am besten zu Ihnen passt.
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
            <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">In 4 Schritten</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              So einfach werden Sie Partner
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
              <p className="text-3xl font-black text-white">Dauerhaft</p>
              <p className="text-gray-500 text-sm mt-1">Umsatzbeteiligung</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktformular */}
      <section id="kontakt" className="py-20 md:py-28 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">Kontakt</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
              Jetzt Partnerschaft anfragen
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Füllen Sie das Formular aus – wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
            </p>
          </div>

          {status === 'success' ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Anfrage gesendet!</h3>
              <p className="text-gray-600">Vielen Dank für Ihr Interesse. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1.5">Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-1.5">Unternehmen</label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900"
                    placeholder="Ihr Unternehmen (optional)"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1.5">E-Mail *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1.5">Telefon *</label>
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
                <label htmlFor="partnerType" className="block text-sm font-bold text-gray-700 mb-1.5">Partnerschaftsmodell</label>
                <select
                  id="partnerType"
                  value={formData.partnerType}
                  onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 bg-white"
                >
                  <option value="">Bitte wählen (optional)</option>
                  <option value="Empfehlungspartner">Empfehlungspartner</option>
                  <option value="Integrationspartner">Integrationspartner</option>
                  <option value="Vertriebspartner">Vertriebspartner</option>
                  <option value="Noch unsicher">Noch unsicher – bitte beraten</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1.5">Ihre Nachricht</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 resize-none"
                  placeholder="Erzählen Sie uns kurz, wie Sie sich eine Zusammenarbeit vorstellen..."
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm font-medium">
                  Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
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
                    Partnerschaft anfragen
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </>
                )}
              </button>
              <p className="text-center text-gray-500 text-sm">
                Oder schreiben Sie uns direkt: <a href="mailto:fynn@taskeyapp.com" className="text-blue-900 hover:underline font-medium">fynn@taskeyapp.com</a>
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
