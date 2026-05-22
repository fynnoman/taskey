import EnterpriseClient from "./enterprise-client";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const enterpriseFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ab wann lohnt sich der Enterprise-Tarif?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Enterprise ist sinnvoll ab etwa 50 Mitarbeitenden oder mehreren Standorten – immer dann, wenn Standard-Tarife an Grenzen stoßen oder spezielle Anforderungen an SSO, API oder dedizierten Support bestehen.",
      },
    },
    {
      "@type": "Question",
      "name": "Welche Integrationen sind im Enterprise-Tarif möglich?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Wir realisieren maßgeschneiderte Schnittstellen zu ERP-Systemen (SAP, Microsoft Dynamics), Lohnbuchhaltung (DATEV, Lexware), Asset-Management und Property-Management-Systemen. SSO über SAML 2.0 und OIDC ist Standard.",
      },
    },
    {
      "@type": "Question",
      "name": "Gibt es ein Service Level Agreement (SLA)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Ja. Enterprise-Kunden erhalten ein individuelles SLA mit garantierter Verfügbarkeit, Reaktionszeiten und Eskalationsstufen. Üblicherweise 99,9 % Uptime und Reaktionszeit innerhalb von 4 Stunden an Werktagen.",
      },
    },
    {
      "@type": "Question",
      "name": "Wie lange dauert ein Enterprise-Onboarding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Je nach Komplexität und gewünschten Integrationen 2 bis 6 Wochen. Wir starten mit Workshops vor Ort, übernehmen die Datenmigration und schulen Multiplikatoren (Train-the-Trainer).",
      },
    },
    {
      "@type": "Question",
      "name": "Werden meine Daten DSGVO-konform in Deutschland gespeichert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Ja. Alle Daten liegen ausschließlich auf deutschen Servern. Der Auftragsverarbeitungsvertrag (AVV) ist Standard. Auf Wunsch stellen wir Pen-Test-Berichte und ein Sicherheits-Whitepaper bereit.",
      },
    },
    {
      "@type": "Question",
      "name": "Bekomme ich einen festen Ansprechpartner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Ja. Jeder Enterprise-Kunde erhält einen dedizierten Account-Manager, der Ihren Betrieb kennt und proaktiv mitdenkt – kein anonymes Ticket-System, sondern eine echte Partnerschaft.",
      },
    },
  ],
};

export default function EnterprisePage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: "Home", url: "https://www.taskeyapp.com" },
        { name: "Enterprise", url: "https://www.taskeyapp.com/enterprise" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enterpriseFaqSchema) }}
      />
      <EnterpriseClient />
      <EnterpriseFaqSection />
    </>
  );
}

function EnterpriseFaqSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 text-white py-20 md:py-28">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[72px] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-cyan-300 mb-4">
          Häufige Fragen zu Enterprise
        </p>
        <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-10">
          Was Inhaber großer Betriebe wissen wollen.
        </h2>
        <div className="space-y-4">
          {enterpriseFaqSchema.mainEntity.map((faq) => (
            <details key={faq.name} className="group rounded-2xl bg-white/[0.03] border border-white/10 p-6">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base md:text-lg font-bold">
                <span>{faq.name}</span>
                <span className="text-cyan-300 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-4 text-white/70 leading-relaxed text-sm md:text-base">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
