import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Support & Hilfe | Persönlicher Kontakt zum Taskey-Team | Taskey",
  description:
    "Direkter Draht zum Taskey-Team in Völklingen. E-Mail, Telefon und Hilfecenter für alle Fragen rund um Ihre Reinigungssoftware – Montag bis Freitag.",
  alternates: { canonical: "https://www.taskeyapp.com/support" },
  openGraph: {
    title: "Support & Hilfe | Persönlicher Kontakt zum Taskey-Team | Taskey",
    description:
      "Direkter Draht zum Taskey-Team in Völklingen. E-Mail, Telefon und Hilfecenter für alle Fragen rund um Ihre Reinigungssoftware.",
    url: "https://www.taskeyapp.com/support",
    type: "website",
    locale: "de_DE",
    siteName: "Taskey",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Taskey Support – persönlicher Kontakt für Reinigungssoftware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support & Hilfe | Persönlicher Kontakt zum Taskey-Team",
    description:
      "Direkter Draht zum Taskey-Team in Völklingen. E-Mail, Telefon und Hilfecenter.",
    images: ["/opengraph-image"],
  },
};

const supportFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie schnell antwortet der Taskey-Support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "In der Regel innerhalb weniger Stunden an Werktagen. Enterprise-Kunden haben einen dedizierten Account-Manager mit garantierten Reaktionszeiten per SLA.",
      },
    },
    {
      "@type": "Question",
      "name": "Bekomme ich Hilfe beim Onboarding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Ja. Mit unserem Done-for-You Setup importieren wir Ihre Objekte, Mitarbeiter und Verträge für Sie. Ihr Betrieb ist in 48 Stunden einsatzbereit – ohne Aufwand für Sie.",
      },
    },
    {
      "@type": "Question",
      "name": "Wo finde ich die NFC-Anleitung und Schulungsmaterial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Im Hilfecenter stellen wir Schritt-für-Schritt-Anleitungen und Kurzvideos zur Verfügung. Auf Wunsch übernehmen wir auch eine Live-Schulung für Ihr Team per Videocall.",
      },
    },
    {
      "@type": "Question",
      "name": "Gibt es Support auch in anderen Sprachen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Die Taskey-App ist auf Deutsch, Türkisch, Russisch, Polnisch und weiteren Sprachen verfügbar. Der Support für Inhaber und Verwaltung erfolgt auf Deutsch und Englisch.",
      },
    },
  ],
};

export default function SupportPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 overflow-hidden">
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", url: "https://www.taskeyapp.com" },
          { name: "Support", url: "https://www.taskeyapp.com/support" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(supportFaqSchema) }}
      />

      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-cyan-50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[80px] pointer-events-none" />

      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-slate-200 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase">
              Support
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.95] tracking-tight mb-6">
            Persönlicher Support
            <br />
            <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              für Reinigungsbetriebe.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Direkter Draht zum Team in Völklingen. Keine Tickets in einer Warteschlange,
            keine Hotline aus dem Ausland – Sie schreiben uns, wir antworten.
          </p>
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <a
            href="mailto:fynn@taskeyapp.com"
            className="group rounded-3xl bg-blue-50/70 border border-slate-200 hover:border-cyan-400 p-8 md:p-10 transition-colors"
          >
            <p className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-700 mb-4">
              E-Mail
            </p>
            <h2 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-blue-700 transition-colors">
              fynn@taskeyapp.com
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Schreiben Sie uns Ihre Frage – wir antworten in der Regel innerhalb weniger Stunden
              an Werktagen.
            </p>
          </a>

          <a
            href="tel:+4915168488999"
            className="group rounded-3xl bg-blue-50/70 border border-slate-200 hover:border-cyan-400 p-8 md:p-10 transition-colors"
          >
            <p className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-700 mb-4">
              Telefon
            </p>
            <h2 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-blue-700 transition-colors">
              +49 151 68488999
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Lieber direkt sprechen? Rufen Sie uns an. Montag bis Freitag von 9 bis 18 Uhr.
            </p>
          </a>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black mb-10 text-center">
            Häufige Fragen zum Support
          </h2>
          <div className="space-y-4">
            {supportFaqSchema.mainEntity.map((faq) => (
              <details
                key={faq.name}
                className="group rounded-2xl bg-blue-50/70 border border-slate-200 p-6"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base md:text-lg font-bold">
                  <span>{faq.name}</span>
                  <span className="text-blue-700 transition-transform group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-white via-blue-50 to-white border border-slate-200 p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-[56px] pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3">
                  Noch kein Taskey-Konto?
                </h2>
                <p className="text-slate-600 text-base md:text-lg">
                  Testen Sie Taskey 3 Monate kostenlos – keine Kreditkarte, jederzeit kündbar.
                </p>
              </div>
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-full hover:bg-blue-500 transition-colors whitespace-nowrap"
              >
                Jetzt starten
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
