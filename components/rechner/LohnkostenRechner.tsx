"use client";

import { useMemo, useState } from "react";
import {
  berechneLohnkosten,
  type LohnkostenInput,
} from "@/lib/rechner/lohnkosten";
import EmailCapture, {
  type EmailCaptureLabels,
} from "@/components/rechner/EmailCapture";

export type LohnkostenLabels = {
  inputs: {
    bruttolohn: string;
    wochenarbeitszeit: string;
    lohnnebenkosten: string;
    weihnachtsgeld: string;
    urlaubsgeld: string;
    vermoegensLeistungen: string;
    arbeitskleidung: string;
    fortbildung: string;
    sonstiges: string;
  };
  hints: {
    formula: string;
    proJahr: string;
    proMonat: string;
    proStunde: string;
    aufschlag: string;
  };
  ergebnis: {
    heading: string;
    jahresBruttolohn: string;
    lohnnebenkostenJahr: string;
    sonderzahlungenJahr: string;
    weitereKostenJahr: string;
    gesamtkostenJahr: string;
    gesamtkostenMonat: string;
    kostenProSollstunde: string;
    aufschlagProzent: string;
  };
  cta: {
    primary: string;
    secondary: string;
    disclaimer: string;
  };
  emailCapture: EmailCaptureLabels;
  currency: string;
  currencySymbol: string;
  locale: "de" | "en" | "fr";
  handoffUrl: string;
};

const DEFAULTS: LohnkostenInput = {
  bruttolohnProStunde: 15,
  wochenarbeitszeitStunden: 39,
  lohnnebenkostenProzent: 22,
  weihnachtsgeldEuro: 0,
  urlaubsgeldEuro: 0,
  vermoegensLeistungenProMonat: 0,
  arbeitskleidungProJahr: 120,
  fortbildungProJahr: 0,
  sonstigesProJahr: 0,
};

export default function LohnkostenRechner({
  labels,
}: {
  labels: LohnkostenLabels;
}) {
  const [state, setState] = useState<LohnkostenInput>(DEFAULTS);

  const setField = <K extends keyof LohnkostenInput>(
    key: K,
    value: LohnkostenInput[K]
  ) => setState((prev) => ({ ...prev, [key]: value }));

  const ergebnis = useMemo(() => berechneLohnkosten(state), [state]);

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
      source: "rechner-lohnkosten",
      lang: labels.locale,
      bruttolohn: String(state.bruttolohnProStunde),
      wochenstd: String(state.wochenarbeitszeitStunden),
      nebenkosten: String(state.lohnnebenkostenProzent),
      weihnachtsgeld: String(state.weihnachtsgeldEuro),
      urlaubsgeld: String(state.urlaubsgeldEuro),
      vl: String(state.vermoegensLeistungenProMonat),
      kleidung: String(state.arbeitskleidungProJahr),
      fortbildung: String(state.fortbildungProJahr),
      sonstiges: String(state.sonstigesProJahr),
      gesamt_jahr: String(ergebnis.gesamtkostenJahr),
      kosten_stunde: String(ergebnis.kostenProSollstunde),
      aufschlag: String(ergebnis.aufschlagProzent),
    });
    const sep = labels.handoffUrl.includes("?") ? "&" : "?";
    return `${labels.handoffUrl}${sep}${params.toString()}`;
  }, [
    labels.handoffUrl,
    labels.locale,
    state,
    ergebnis.gesamtkostenJahr,
    ergebnis.kostenProSollstunde,
    ergebnis.aufschlagProzent,
  ]);

  const emailRows = useMemo(
    () => [
      { label: labels.ergebnis.jahresBruttolohn, value: fmtCurrency.format(ergebnis.jahresBruttolohn) },
      { label: labels.ergebnis.lohnnebenkostenJahr, value: fmtCurrency.format(ergebnis.lohnnebenkostenJahr) },
      { label: labels.ergebnis.sonderzahlungenJahr, value: fmtCurrency.format(ergebnis.sonderzahlungenJahr) },
      { label: labels.ergebnis.weitereKostenJahr, value: fmtCurrency.format(ergebnis.weitereKostenJahr) },
      { label: labels.ergebnis.gesamtkostenJahr, value: fmtCurrency.format(ergebnis.gesamtkostenJahr) },
      { label: labels.ergebnis.gesamtkostenMonat, value: fmtCurrency.format(ergebnis.gesamtkostenMonat) },
      { label: labels.ergebnis.kostenProSollstunde, value: `${fmtCurrency.format(ergebnis.kostenProSollstunde)} ${labels.hints.proStunde}` },
      { label: labels.ergebnis.aufschlagProzent, value: `${fmtPercent.format(ergebnis.aufschlagProzent)} %` },
      { label: labels.inputs.bruttolohn, value: `${fmtCurrency.format(state.bruttolohnProStunde)} ${labels.hints.proStunde}` },
      { label: labels.inputs.wochenarbeitszeit, value: `${state.wochenarbeitszeitStunden} h` },
      { label: labels.inputs.lohnnebenkosten, value: `${fmtPercent.format(state.lohnnebenkostenProzent)} %` },
    ],
    [labels, ergebnis, state, fmtCurrency, fmtPercent]
  );

  const emailHeadline = `${fmtCurrency.format(ergebnis.gesamtkostenJahr)} ${labels.hints.proJahr}`;

  return (
    <div className="grid gap-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <NumberField
              label={labels.inputs.bruttolohn}
              value={state.bruttolohnProStunde}
              onChange={(v) => setField("bruttolohnProStunde", v)}
              suffix={labels.currencySymbol}
              min={0}
              step={0.25}
            />
            <NumberField
              label={labels.inputs.wochenarbeitszeit}
              value={state.wochenarbeitszeitStunden}
              onChange={(v) => setField("wochenarbeitszeitStunden", v)}
              suffix="h"
              min={0}
              step={0.5}
            />
            <NumberField
              label={labels.inputs.lohnnebenkosten}
              value={state.lohnnebenkostenProzent}
              onChange={(v) => setField("lohnnebenkostenProzent", v)}
              suffix="%"
              min={0}
              max={80}
              step={0.5}
            />
            <NumberField
              label={labels.inputs.weihnachtsgeld}
              value={state.weihnachtsgeldEuro}
              onChange={(v) => setField("weihnachtsgeldEuro", v)}
              suffix={labels.currencySymbol}
              min={0}
              step={50}
            />
            <NumberField
              label={labels.inputs.urlaubsgeld}
              value={state.urlaubsgeldEuro}
              onChange={(v) => setField("urlaubsgeldEuro", v)}
              suffix={labels.currencySymbol}
              min={0}
              step={50}
            />
            <NumberField
              label={labels.inputs.vermoegensLeistungen}
              value={state.vermoegensLeistungenProMonat}
              onChange={(v) => setField("vermoegensLeistungenProMonat", v)}
              suffix={labels.currencySymbol}
              min={0}
              step={5}
            />
            <NumberField
              label={labels.inputs.arbeitskleidung}
              value={state.arbeitskleidungProJahr}
              onChange={(v) => setField("arbeitskleidungProJahr", v)}
              suffix={labels.currencySymbol}
              min={0}
              step={10}
            />
            <NumberField
              label={labels.inputs.fortbildung}
              value={state.fortbildungProJahr}
              onChange={(v) => setField("fortbildungProJahr", v)}
              suffix={labels.currencySymbol}
              min={0}
              step={50}
            />
            <NumberField
              label={labels.inputs.sonstiges}
              value={state.sonstigesProJahr}
              onChange={(v) => setField("sonstigesProJahr", v)}
              suffix={labels.currencySymbol}
              min={0}
              step={50}
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
              {labels.ergebnis.gesamtkostenJahr}
            </div>
            <div className="mt-2 text-3xl font-semibold text-slate-900">
              {fmtCurrency.format(ergebnis.gesamtkostenJahr)}
              <span className="ml-1 text-sm font-normal text-slate-500">
                {labels.hints.proJahr}
              </span>
            </div>
            <div className="mt-1 text-sm text-slate-600">
              {fmtCurrency.format(ergebnis.gesamtkostenMonat)}{" "}
              {labels.hints.proMonat}
            </div>
            <div className="mt-1 text-sm text-slate-500">
              {labels.hints.aufschlag}: {fmtPercent.format(ergebnis.aufschlagProzent)} %
            </div>
          </div>

          <dl className="mt-5 space-y-2 text-sm text-slate-700">
            <Row
              label={labels.ergebnis.jahresBruttolohn}
              value={fmtCurrency.format(ergebnis.jahresBruttolohn)}
            />
            <Row
              label={labels.ergebnis.lohnnebenkostenJahr}
              value={fmtCurrency.format(ergebnis.lohnnebenkostenJahr)}
            />
            <Row
              label={labels.ergebnis.sonderzahlungenJahr}
              value={fmtCurrency.format(ergebnis.sonderzahlungenJahr)}
            />
            <Row
              label={labels.ergebnis.weitereKostenJahr}
              value={fmtCurrency.format(ergebnis.weitereKostenJahr)}
            />
            <Row
              label={labels.ergebnis.kostenProSollstunde}
              value={`${fmtCurrency.format(ergebnis.kostenProSollstunde)} ${labels.hints.proStunde}`}
              emphasize
            />
          </dl>

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

      <EmailCapture
        labels={labels.emailCapture}
        rechnerType="lohnkosten"
        headline={emailHeadline}
        rows={emailRows}
      />
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
  hint,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  hint?: string;
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
      {hint ? <span className="mt-1 block text-xs text-slate-500">{hint}</span> : null}
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
