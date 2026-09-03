"use client";

import { useState } from "react";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Was ist eine Reinigungsapp?",
    a: "Eine Reinigungsapp bündelt Einsatzplanung, mobile Zeiterfassung, Leistungsnachweis, Angebote, Rechnungen und Auftraggeber-Kommunikation in einer einzigen mobilen Anwendung. Taskey ist eine solche Reinigungsapp, entwickelt für Reinigungsbetriebe im DACH-Raum. Alles läuft auf dem Handy, offline-fähig, mehrsprachig, DSGVO-konform.",
  },
  {
    q: "Was kostet die Reinigungsapp Taskey?",
    a: "Taskey startet mit einem kostenlosen Account (ohne Kreditkarte). Die bezahlten Tarife beginnen ab 69 € pro Monat für Einzelunternehmer, 119 € pro Monat für Kleinbetriebe und gehen bis 429 € pro Monat für größere Betriebe. Alle Kernfunktionen sind in jedem Tarif enthalten, es gibt keine versteckten Zusatzkosten pro Reinigungskraft.",
  },
  {
    q: "Funktioniert die Reinigungsapp auch offline?",
    a: "Ja. Taskey funktioniert vollständig offline. Zeitbuchungen, NFC-Scans und Fotos werden lokal gespeichert und automatisch synchronisiert, sobald wieder Netz verfügbar ist. Damit läuft die App auch in Kellern, Tiefgaragen und Objekten ohne Empfang.",
  },
  {
    q: "Ist die Reinigungsapp DSGVO-konform?",
    a: "Ja. Alle Daten liegen ausschließlich auf deutschen Servern, werden verschlüsselt übertragen und ein Auftragsverarbeitungsvertrag (AVV) wird bereitgestellt. Die NFC-Zeiterfassung erfüllt zusätzlich die Mindestlohn-Dokumentationspflicht nach §17 MiLoG.",
  },
  {
    q: "Können neue Reinigungskräfte die App ohne Schulung nutzen?",
    a: "Ja. Die Mitarbeiter-App ist bewusst so gestaltet, dass sie ohne Schulung funktioniert. Ein Antippen des NFC-Tags reicht, um Zeit und Standort zu erfassen. Die App ist mehrsprachig verfügbar (Deutsch, Türkisch, Russisch, Polnisch u.a.), so dass jede Kraft in der eigenen Sprache arbeitet.",
  },
];

export default function ReinigungsappFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-14">
          <span className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500 font-semibold">
            Häufige Fragen
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
            Alles, was Betriebe vor dem Wechsel zur Reinigungsapp fragen.
          </h2>
        </div>

        <ul className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-[15px] sm:text-base font-semibold text-slate-900 leading-snug">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 grid place-items-center h-7 w-7 rounded-full text-slate-400"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                      transition: "transform 200ms ease",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 1.5v11M1.5 7h11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                {isOpen ? (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-[14px] sm:text-[15px] leading-[1.6] text-slate-600">
                    {item.a}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
