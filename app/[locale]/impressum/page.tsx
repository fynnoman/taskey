import type { Metadata } from "next";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const META: PageCopy = {
  de: {
    title: "Impressum",
    description: "Impressum und rechtliche Angaben von Taskey.",
  },
  en: {
    title: "Legal notice",
    description: "Legal notice and company information for Taskey.",
  },
  fr: {
    title: "Mentions légales",
    description: "Mentions légales et informations sur la société pour Taskey.",
  },
};

const CONTENT = {
  de: {
    pageTitle: "Impressum",
    translationNote: "",
    sec1Title: "Angaben gemäß § 5 DDG",
    companyLine1: "Schulz & Stosse GbR",
    companyLine2: "Taskey",
    addrStreet: "In der Acht 44",
    addrCity: "66333 Völklingen",
    addrCountry: "Deutschland",
    sec2Title: "Kontakt",
    contactPhoneLabel: "Telefon: +49 151 68488999",
    contactEmailLabel: "E-Mail: fynn@taskeyapp.com",
    sec3Title: "Umsatzsteuer-ID",
    vatIntro: "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:",
    vatId: "DE458914838",
    sec4Title: "Redaktionell verantwortlich gemäß § 18 MStV",
    editorName: "Fynn-Luca Schulz",
    editorStreet: "In der Acht 44",
    editorCity: "66333 Völklingen",
    sec5Title: "Verbraucherstreitbeilegung / Universalschlichtungsstelle",
    sec5Body:
      "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
  },
  en: {
    pageTitle: "Legal notice",
    translationNote:
      "This document is a translation for convenience. The legally binding version is the German original.",
    sec1Title: "Information pursuant to § 5 DDG",
    companyLine1: "Schulz & Stosse GbR",
    companyLine2: "Taskey",
    addrStreet: "In der Acht 44",
    addrCity: "66333 Völklingen",
    addrCountry: "Germany",
    sec2Title: "Contact",
    contactPhoneLabel: "Phone: +49 151 68488999",
    contactEmailLabel: "Email: fynn@taskeyapp.com",
    sec3Title: "VAT ID",
    vatIntro: "VAT identification number pursuant to § 27 a Umsatzsteuergesetz:",
    vatId: "DE458914838",
    sec4Title: "Editorially responsible pursuant to § 18 MStV",
    editorName: "Fynn-Luca Schulz",
    editorStreet: "In der Acht 44",
    editorCity: "66333 Völklingen",
    sec5Title: "Consumer dispute resolution / Universal arbitration board",
    sec5Body:
      "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
  },
  fr: {
    pageTitle: "Mentions légales",
    translationNote:
      "Ce document est une traduction de courtoisie. Seule la version originale allemande fait foi.",
    sec1Title: "Informations conformément au § 5 DDG",
    companyLine1: "Schulz & Stosse GbR",
    companyLine2: "Taskey",
    addrStreet: "In der Acht 44",
    addrCity: "66333 Völklingen",
    addrCountry: "Allemagne",
    sec2Title: "Contact",
    contactPhoneLabel: "Téléphone : +49 151 68488999",
    contactEmailLabel: "E-mail : fynn@taskeyapp.com",
    sec3Title: "Numéro de TVA",
    vatIntro: "Numéro d'identification à la TVA conformément au § 27 a Umsatzsteuergesetz :",
    vatId: "DE458914838",
    sec4Title: "Responsable de la publication conformément au § 18 MStV",
    editorName: "Fynn-Luca Schulz",
    editorStreet: "In der Acht 44",
    editorCity: "66333 Völklingen",
    sec5Title: "Règlement des litiges de consommation / Organisme universel de conciliation",
    sec5Body:
      "Nous ne sommes ni disposés ni tenus de participer à une procédure de règlement des litiges devant un organisme de conciliation des consommateurs.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: META,
    locale: pickLocale(locale),
    path: "/impressum",
  });
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = pickLocale(locale);
  const c = CONTENT[l];

  return (
    <main className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">{c.pageTitle}</h1>

        <div className="prose prose-lg max-w-none text-slate-700">
          {c.translationNote ? (
            <p className="text-sm text-slate-500 italic mb-6">{c.translationNote}</p>
          ) : null}

          <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.sec1Title}</h2>
          <p>
            {c.companyLine1}<br />
            {c.companyLine2}<br />
            {c.addrStreet}<br />
            {c.addrCity}<br />
            {c.addrCountry}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">{c.sec2Title}</h2>
          <p>
            {c.contactPhoneLabel}<br />
            {c.contactEmailLabel}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">{c.sec3Title}</h2>
          <p>
            {c.vatIntro}<br />
            {c.vatId}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">{c.sec4Title}</h2>
          <p>
            {c.editorName}<br />
            {c.editorStreet}<br />
            {c.editorCity}
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">{c.sec5Title}</h2>
          <p>
            {c.sec5Body}
          </p>
        </div>
      </div>
    </main>
  );
}
