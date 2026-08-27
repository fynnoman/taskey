import React from "react";

// Review-Schema für SERP-Sterne / AI-Citations.
// Quelle der Testimonials: components/home/Branchen.tsx (Kunden-Stimmen, vom Inhaber als echt bestätigt).
// Bei Änderungen an Texten/Personen in Branchen.tsx hier synchron halten.

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
};

const ANON_COMPANY = "Reinigungsbetrieb (anonymisiert)";

const testimonials: Testimonial[] = [
  {
    quote:
      "Seit Taskey wissen wir auf die Minute genau, wer wo geputzt hat – und unsere Auftraggeber bekommen den Nachweis automatisch.",
    name: "M. W.",
    role: "Geschäftsführer",
    company: ANON_COMPANY,
    location: "Stuttgart",
  },
  {
    quote:
      "Die NFC-Tags an den Objekten haben uns die Diskussionen über Stundenzettel komplett erspart. Jede Minute revisionssicher dokumentiert.",
    name: "S. K.",
    role: "Objektleiterin",
    company: ANON_COMPANY,
    location: "München",
  },
  {
    quote:
      "Vorher 4 Tools, jetzt eines. Allein bei den Lizenzen sparen wir über 600 € im Monat – und das Team kommt endlich klar.",
    name: "T. R.",
    role: "Inhaber",
    company: ANON_COMPANY,
    location: "Köln",
  },
  {
    quote:
      "Unsere Reinigungskräfte erfassen Mängel direkt mit Foto in der App. Das Büro reagiert sofort statt am Monatsende.",
    name: "A. H.",
    role: "Betriebsleitung",
    company: ANON_COMPANY,
    location: "Hamburg",
  },
  {
    quote:
      "Die Auftraggeber-Freigabe per Link ist ein echter Gamechanger. Hotels und Verwalter sehen den Status live – ohne Mail-Pingpong.",
    name: "D. B.",
    role: "Geschäftsführer",
    company: ANON_COMPANY,
    location: "Frankfurt",
  },
  {
    quote:
      "Wir haben uns jahrelang vor der Digitalisierung gedrückt. Mit Taskey waren wir nach 2 Wochen produktiv – und das Team liebt es.",
    name: "P. L.",
    role: "Inhaberin",
    company: ANON_COMPANY,
    location: "Wien",
  },
  {
    quote:
      "Live-Margen pro Objekt – das hatten wir vorher nirgendwo. Jetzt sehen wir sofort, welcher Auftrag rechnet und welcher nicht.",
    name: "M. Y.",
    role: "Operations Manager",
    company: ANON_COMPANY,
    location: "Berlin",
  },
  {
    quote:
      "Schichtplanung für 30 Reinigungskräfte ging vorher per Excel und Chat. Heute klicke ich 10 Minuten und der Plan steht.",
    name: "L. M.",
    role: "Disposition",
    company: ANON_COMPANY,
    location: "Innsbruck",
  },
];

export default function TestimonialReviews() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": testimonials.map((t) => ({
      "@type": "Review",
      itemReviewed: {
        "@type": "SoftwareApplication",
        name: "Taskey",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android, Web",
        url: "https://www.taskeyapp.com",
      },
      author: {
        "@type": "Person",
        name: t.name,
        jobTitle: t.role,
        worksFor: {
          "@type": "Organization",
          name: t.company,
          address: {
            "@type": "PostalAddress",
            addressLocality: t.location,
          },
        },
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: t.quote,
      publisher: {
        "@type": "Organization",
        name: "Taskey",
        url: "https://www.taskeyapp.com",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
