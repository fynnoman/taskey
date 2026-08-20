import Link from "next/link";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/StructuredData";

// Server-rendered comparison / "beste Software"-answer page.
// Answer-first (TL;DR box), real HTML table (no JS), FAQ + JSON-LD.

const SITE = "https://www.taskeyapp.com";

export type ComparisonRow = {
  provider: string;
  focus: string;
  audience: string;
  nfc: string;
  datev: string;
  priceFrom: string;
  gdpr: string;
  isTaskey?: boolean;
};

export type ProviderBlock = {
  question: string;
  answer: string;
};

export type Faq = { q: string; a: string };
export type InternalLink = { href: string; label: string };

export type ComparisonPageProps = {
  path: string;
  breadcrumbLabel: string;
  eyebrow: string;
  h1: string;
  tldr: string;
  updated?: string;
  intro?: string;
  rows: ComparisonRow[];
  providerBlocks: ProviderBlock[];
  faqs: Faq[];
  internalLinks: InternalLink[];
};

export default function ComparisonPage({
  path,
  breadcrumbLabel,
  eyebrow,
  h1,
  tldr,
  updated,
  intro,
  rows,
  providerBlocks,
  faqs,
  internalLinks,
}: ComparisonPageProps) {
  const pageUrl = `${SITE}${path}`;
  const crumbs = [
    { name: "Startseite", url: SITE },
    { name: "Vergleich", url: `${SITE}/vergleich/software-gebaeudereinigung` },
    { name: breadcrumbLabel, url: pageUrl },
  ];

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <BreadcrumbJsonLd crumbs={crumbs} id="ld-breadcrumb-vergleich" />
      <FaqJsonLd items={faqs} id="ld-faq-vergleich" />

      <article className="mx-auto max-w-4xl px-5 py-14 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--foreground-muted)]">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:underline">
                Startseite
              </Link>
              <span aria-hidden> / </span>
            </li>
            <li>
              <Link href="/vergleich/software-gebaeudereinigung" className="hover:underline">
                Vergleich
              </Link>
              <span aria-hidden> / </span>
            </li>
            <li aria-current="page" className="text-[var(--foreground)]">
              {breadcrumbLabel}
            </li>
          </ol>
        </nav>

        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{h1}</h1>
        {updated ? (
          <p className="mt-3 text-sm text-[var(--foreground-muted)]">
            Zuletzt aktualisiert: {updated}
          </p>
        ) : null}

        <section
          aria-label="Direkte Antwort"
          className="mt-8 rounded-2xl border border-[var(--border-soft)] bg-[var(--section-alt)] p-6 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
            Kurzantwort
          </p>
          <p className="mt-2 text-lg leading-relaxed text-[var(--foreground)]">{tldr}</p>
        </section>

        {intro ? (
          <section className="mt-10 space-y-4 text-base leading-relaxed text-[var(--foreground)]">
            <p>{intro}</p>
          </section>
        ) : null}

        <section className="mt-12" aria-labelledby="vergleichstabelle">
          <h2 id="vergleichstabelle" className="text-2xl font-semibold">
            Vergleichstabelle: Software für Gebäudereinigung im Überblick
          </h2>
          <p className="mt-2 text-sm text-[var(--foreground-muted)]">
            Alle Angaben nach Herstellerinformationen, Stand {updated ?? "2026"}. Preise ab
            (Einstiegs-Tarif, ohne Mehrwertsteuer, ohne objektbezogene Zusatzkosten).
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[var(--border-strong)] bg-white">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead className="bg-[var(--section-alt)] text-left">
                <tr>
                  <th scope="col" className="border-b border-[var(--border-strong)] px-4 py-3 font-semibold">
                    Anbieter
                  </th>
                  <th scope="col" className="border-b border-[var(--border-strong)] px-4 py-3 font-semibold">
                    Fokus
                  </th>
                  <th scope="col" className="border-b border-[var(--border-strong)] px-4 py-3 font-semibold">
                    Zielgruppe
                  </th>
                  <th scope="col" className="border-b border-[var(--border-strong)] px-4 py-3 font-semibold">
                    NFC-Nachweis
                  </th>
                  <th scope="col" className="border-b border-[var(--border-strong)] px-4 py-3 font-semibold">
                    DATEV
                  </th>
                  <th scope="col" className="border-b border-[var(--border-strong)] px-4 py-3 font-semibold">
                    Preis ab
                  </th>
                  <th scope="col" className="border-b border-[var(--border-strong)] px-4 py-3 font-semibold">
                    DSGVO / Serverstandort
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.provider}
                    className={row.isTaskey ? "bg-[var(--section-alt)] font-medium" : "bg-white"}
                  >
                    <th
                      scope="row"
                      className="border-b border-[var(--border-strong)] px-4 py-3 text-left font-semibold text-[var(--foreground)]"
                    >
                      {row.provider}
                    </th>
                    <td className="border-b border-[var(--border-strong)] px-4 py-3">{row.focus}</td>
                    <td className="border-b border-[var(--border-strong)] px-4 py-3">{row.audience}</td>
                    <td className="border-b border-[var(--border-strong)] px-4 py-3">{row.nfc}</td>
                    <td className="border-b border-[var(--border-strong)] px-4 py-3">{row.datev}</td>
                    <td className="border-b border-[var(--border-strong)] px-4 py-3">{row.priceFrom}</td>
                    <td className="border-b border-[var(--border-strong)] px-4 py-3">{row.gdpr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14 space-y-10">
          {providerBlocks.map((block) => (
            <div key={block.question}>
              <h2 className="text-2xl font-semibold">{block.question}</h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--foreground)]">
                {block.answer}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-14" aria-labelledby="faq">
          <h2 id="faq" className="text-2xl font-semibold">
            Häufige Fragen
          </h2>
          <div className="mt-4 divide-y divide-[var(--border-strong)] rounded-2xl border border-[var(--border-strong)] bg-white">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-5">
                <summary className="cursor-pointer list-none text-base font-semibold text-[var(--foreground)]">
                  {faq.q}
                </summary>
                <p className="mt-3 text-base leading-relaxed text-[var(--foreground-muted)]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="weiterlesen">
          <h2 id="weiterlesen" className="text-2xl font-semibold">
            Weiterlesen bei Taskey
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {internalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl border border-[var(--border-strong)] bg-white px-4 py-3 text-sm font-medium text-[var(--accent)] hover:border-[var(--accent)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-[var(--border-soft)] bg-[var(--section-alt)] p-8 text-center">
          <h2 className="text-2xl font-semibold">Taskey selbst testen</h2>
          <p className="mt-3 text-base text-[var(--foreground-muted)]">
            Kostenlosen Account erstellen, keine Kreditkarte. Einrichtung in unter 10 Minuten,
            optional Done-for-You-Setup in 48 Stunden.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://signup.taskeyapp.com"
              className="rounded-full bg-[var(--cta)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--accent-strong)]"
            >
              Kostenlosen Account erstellen
            </a>
            <Link
              href="/pricing"
              className="rounded-full border border-[var(--border-strong)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--accent)]"
            >
              Preise ansehen
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
