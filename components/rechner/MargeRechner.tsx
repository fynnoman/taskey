"use client";

import { useMemo, useState } from "react";
import { berechneMarge, type MargeInput } from "@/lib/rechner/marge";
import EmailCapture, {
  type EmailCaptureLabels,
} from "@/components/rechner/EmailCapture";

export type MargeLabels = {
  inputs: {
    verkaufspreis: string;
    gesamtkosten: string;
    zielmarge: string;
  };
  hints: {
    formula: string;
    plus10: string;
    minus10: string;
  };
  ergebnis: {
    heading: string;
    aktuelleMargeEuro: string;
    aktuelleMargeProzent: string;
    empfohlenerPreis: string;
    differenzZumZielpreis: string;
    deckungsbeitragProEuro: string;
    szenarien: string;
    szenarioPreis: string;
    szenarioMarge: string;
  };
  cta: {
    primary: string;
    secondary: string;
    disclaimer: string;
  };
  emailCapture?: EmailCaptureLabels;
  currency: string;
  currencySymbol: string;
  locale: "de" | "en" | "fr";
  handoffUrl: string;
};

const DEFAULTS: MargeInput = {
  verkaufspreis: 2400,
  gesamtkosten: 2000,
  zielmargeProzent: 20,
};

export default function MargeRechner({ labels }: { labels: MargeLabels }) {
  const [state, setState] = useState<MargeInput>(DEFAULTS);

  const setField = <K extends keyof MargeInput>(
    key: K,
    value: MargeInput[K]
  ) => setState((prev) => ({ ...prev, [key]: value }));

  const ergebnis = useMemo(() => berechneMarge(state), [state]);

  const fmtCurrency = useMemo(
    () =>
      new Intl.NumberFormat(labels.locale, {
        style: "currency",
        currency: labels.currency,
        maximumFractionDigits: 2,
      }),
    [labels.locale, labels.currency]
  );

  const fmtPercent = useMemo(
    () =>
      new Intl.NumberFormat(labels.locale, {
        maximumFractionDigits: 1,
      }),
    [labels.locale]
  );

  const handoffHref = useMemo(() => {
    const params = new URLSearchParams({
      source: "rechner-marge",
      lang: labels.locale,
      preis: String(state.verkaufspreis),
      kosten: String(state.gesamtkosten),
      zielmarge: String(state.zielmargeProzent),
      marge_prozent: String(ergebnis.aktuelleMargeProzent),
      marge_euro: String(ergebnis.aktuelleMargeEuro),
      empfohlen_preis: String(ergebnis.empfohlenerPreisFuerZielmarge),
    });
    const sep = labels.handoffUrl.includes("?") ? "&" : "?";
    return `${labels.handoffUrl}${sep}${params.toString()}`;
  }, [
    labels.handoffUrl,
    labels.locale,
    state,
    ergebnis.aktuelleMargeProzent,
    ergebnis.aktuelleMargeEuro,
    ergebnis.empfohlenerPreisFuerZielmarge,
  ]);

  const emailRows = useMemo(
    () => [
      { label: labels.ergebnis.aktuelleMargeEuro, value: fmtCurrency.format(ergebnis.aktuelleMargeEuro) },
      { label: labels.ergebnis.aktuelleMargeProzent, value: `${fmtPercent.format(ergebnis.aktuelleMargeProzent)} %` },
      { label: labels.ergebnis.empfohlenerPreis, value: fmtCurrency.format(ergebnis.empfohlenerPreisFuerZielmarge) },
      { label: labels.ergebnis.differenzZumZielpreis, value: fmtCurrency.format(ergebnis.differenzZumZielpreis) },
      { label: labels.hints.plus10, value: `${fmtCurrency.format(ergebnis.szenarioPlus10Prozent.preis)} → ${fmtPercent.format(ergebnis.szenarioPlus10Prozent.margeProzent)} %` },
      { label: labels.hints.minus10, value: `${fmtCurrency.format(ergebnis.szenarioMinus10Prozent.preis)} → ${fmtPercent.format(ergebnis.szenarioMinus10Prozent.margeProzent)} %` },
      { label: labels.inputs.verkaufspreis, value: fmtCurrency.format(state.verkaufspreis) },
      { label: labels.inputs.gesamtkosten, value: fmtCurrency.format(state.gesamtkosten) },
      { label: labels.inputs.zielmarge, value: `${state.zielmargeProzent} %` },
    ],
    [labels, ergebnis, state, fmtCurrency, fmtPercent]
  );

  const emailHeadline = `${fmtPercent.format(ergebnis.aktuelleMargeProzent)} %`;

  return (
    <div className="grid gap-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <NumberField
              label={labels.inputs.verkaufspreis}
              value={state.verkaufspreis}
              onChange={(v) => setField("verkaufspreis", v)}
              suffix={labels.currencySymbol}
              min={0}
              step={10}
            />
            <NumberField
              label={labels.inputs.gesamtkosten}
              value={state.gesamtkosten}
              onChange={(v) => setField("gesamtkosten", v)}
              suffix={labels.currencySymbol}
              min={0}
              step={10}
            />
            <NumberField
              label={labels.inputs.zielmarge}
              value={state.zielmargeProzent}
              onChange={(v) => setField("zielmargeProzent", v)}
              suffix="%"
              min={0}
              max={90}
              step={1}
            />
          </div>
          <p className="mt-6 text-xs text-slate-500">{labels.hints.formula}</p>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {labels.ergebnis.heading}
          </h3>

          <div className="mt-4 rounded-xl bg-white p-5 ring-1 ring-slate-200">
            <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {labels.ergebnis.aktuelleMargeProzent}
            </div>
            <div className="mt-2 text-3xl font-semibold text-slate-900">
              {fmtPercent.format(ergebnis.aktuelleMargeProzent)} %
            </div>
            <div className="mt-1 text-sm text-slate-600">
              {fmtCurrency.format(ergebnis.aktuelleMargeEuro)}{" "}
              {labels.ergebnis.aktuelleMargeEuro}
            </div>
          </div>

          <dl className="mt-5 space-y-2 text-sm text-slate-700">
            <Row
              label={labels.ergebnis.empfohlenerPreis}
              value={fmtCurrency.format(ergebnis.empfohlenerPreisFuerZielmarge)}
              emphasize
            />
            <Row
              label={labels.ergebnis.differenzZumZielpreis}
              value={fmtCurrency.format(ergebnis.differenzZumZielpreis)}
            />
            <Row
              label={labels.ergebnis.deckungsbeitragProEuro}
              value={`${fmtPercent.format(ergebnis.deckungsbeitragProEuro * 100)} %`}
            />
          </dl>

          <div className="mt-6 rounded-xl bg-white p-4 ring-1 ring-slate-200">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {labels.ergebnis.szenarien}
            </p>
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <div className="text-slate-500 text-xs">{labels.hints.plus10}</div>
                <div className="text-slate-900 tabular-nums">
                  {fmtCurrency.format(ergebnis.szenarioPlus10Prozent.preis)} →{" "}
                  {fmtPercent.format(ergebnis.szenarioPlus10Prozent.margeProzent)} %
                </div>
              </div>
              <div>
                <div className="text-slate-500 text-xs">{labels.hints.minus10}</div>
                <div className="text-slate-900 tabular-nums">
                  {fmtCurrency.format(ergebnis.szenarioMinus10Prozent.preis)} →{" "}
                  {fmtPercent.format(ergebnis.szenarioMinus10Prozent.margeProzent)} %
                </div>
              </div>
            </div>
          </div>

          <a
            href={handoffHref}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            rel="nofollow"
          >
            {labels.cta.primary}
          </a>
          <p className="mt-3 text-center text-xs text-slate-500">
            {labels.cta.secondary}
          </p>
          <p className="mt-4 text-xs text-slate-400">{labels.cta.disclaimer}</p>
        </aside>
      </div>

      {labels.emailCapture ? (
        <EmailCapture
          labels={labels.emailCapture}
          rechnerType="marge"
          headline={emailHeadline}
          rows={emailRows}
        />
      ) : null}
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  suffix,
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <div className="relative">
        <input
          type="number"
          value={Number.isFinite(value) ? value : 0}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            const raw = e.target.value;
            if (raw === "") {
              onChange(0);
              return;
            }
            const parsed = Number(raw);
            onChange(Number.isFinite(parsed) ? parsed : 0);
          }}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 pr-12 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
        {suffix ? (
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-slate-500">
            {suffix}
          </span>
        ) : null}
      </div>
    </label>
  );
}

function Row({
  label,
  value,
  emphasize,
}: {
  label: string;
  value: string;
  emphasize?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline justify-between border-b border-slate-200 pb-2 last:border-b-0 last:pb-0 ${
        emphasize ? "font-semibold text-slate-900" : ""
      }`}
    >
      <dt className="text-sm">{label}</dt>
      <dd className="text-sm tabular-nums">{value}</dd>
    </div>
  );
}
