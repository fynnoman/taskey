"use client";

import { useMemo, useState } from "react";
import {
  berechnePersonalbedarf,
  type PersonalbedarfInput,
} from "@/lib/rechner/personalbedarf";
import {
  LEISTUNG_QM_PRO_STUNDE,
  type Reinigungsart,
} from "@/lib/rechner/reinigungskosten";
import EmailCapture, {
  type EmailCaptureLabels,
} from "@/components/rechner/EmailCapture";

export type ReinigungsartOption = { value: Reinigungsart; label: string };

export type PersonalbedarfLabels = {
  inputs: {
    quadratmeter: string;
    reinigungsart: string;
    reinigungenProMonat: string;
    leistungQmProStunde: string;
    leistungHint: string;
    wochenarbeitszeit: string;
    produktivStundenProMonat: string;
    produktivHint: string;
    stundensatz: string;
  };
  hints: {
    formula: string;
    proMonat: string;
    proWoche: string;
    vzaeHint: string;
  };
  ergebnis: {
    heading: string;
    stundenProReinigung: string;
    stundenProMonat: string;
    stundenProWoche: string;
    vollzeitAequivalente: string;
    personalkostenProMonat: string;
  };
  cta: {
    primary: string;
    secondary: string;
    disclaimer: string;
  };
  currency: string;
  currencySymbol: string;
  locale: "de" | "en" | "fr";
  handoffUrl: string;
  reinigungsartOptions: ReinigungsartOption[];
  emailCapture?: EmailCaptureLabels;
};

const DEFAULTS: PersonalbedarfInput = {
  quadratmeter: 1200,
  reinigungsart: "unterhaltsreinigung",
  reinigungenProMonat: 20,
  leistungQmProStunde: undefined,
  wochenarbeitszeitStunden: 39,
  produktivStundenProMonatProVzk: 135,
  stundensatz: 32,
};

export default function PersonalbedarfRechner({
  labels,
}: {
  labels: PersonalbedarfLabels;
}) {
  const [state, setState] = useState<PersonalbedarfInput>({
    ...DEFAULTS,
    reinigungsart: labels.reinigungsartOptions[0]?.value ?? "unterhaltsreinigung",
  });

  const setField = <K extends keyof PersonalbedarfInput>(
    key: K,
    value: PersonalbedarfInput[K]
  ) => setState((prev) => ({ ...prev, [key]: value }));

  const ergebnis = useMemo(() => berechnePersonalbedarf(state), [state]);

  const fmtCurrency = useMemo(
    () =>
      new Intl.NumberFormat(labels.locale, {
        style: "currency",
        currency: labels.currency,
        maximumFractionDigits: 2,
      }),
    [labels.locale, labels.currency]
  );

  const fmtNumber = useMemo(
    () =>
      new Intl.NumberFormat(labels.locale, {
        maximumFractionDigits: 1,
      }),
    [labels.locale]
  );

  const handoffHref = useMemo(() => {
    const params = new URLSearchParams({
      source: "rechner-personalbedarf",
      lang: labels.locale,
      qm: String(state.quadratmeter),
      reinigungsart: state.reinigungsart,
      freq: String(state.reinigungenProMonat),
      wochenstd: String(state.wochenarbeitszeitStunden),
      produktiv_monat: String(state.produktivStundenProMonatProVzk),
      stundensatz: String(state.stundensatz),
      stunden_monat: String(ergebnis.stundenProMonat),
      vzae: String(ergebnis.vollzeitAequivalente),
      personalkosten_monat: String(ergebnis.personalkostenProMonat),
    });
    const sep = labels.handoffUrl.includes("?") ? "&" : "?";
    return `${labels.handoffUrl}${sep}${params.toString()}`;
  }, [
    labels.handoffUrl,
    labels.locale,
    state,
    ergebnis.stundenProMonat,
    ergebnis.vollzeitAequivalente,
    ergebnis.personalkostenProMonat,
  ]);

  const emailRows = useMemo(
    () => [
      { label: labels.ergebnis.vollzeitAequivalente, value: `${fmtNumber.format(ergebnis.vollzeitAequivalente)} ${labels.hints.vzaeHint}` },
      { label: labels.ergebnis.stundenProReinigung, value: `${fmtNumber.format(ergebnis.stundenProReinigung)} h` },
      { label: labels.ergebnis.stundenProMonat, value: `${fmtNumber.format(ergebnis.stundenProMonat)} h` },
      { label: labels.ergebnis.stundenProWoche, value: `${fmtNumber.format(ergebnis.stundenProWoche)} h` },
      { label: labels.ergebnis.personalkostenProMonat, value: fmtCurrency.format(ergebnis.personalkostenProMonat) },
      { label: labels.inputs.quadratmeter, value: `${state.quadratmeter} m²` },
      { label: labels.inputs.reinigungenProMonat, value: String(state.reinigungenProMonat) },
      { label: labels.inputs.wochenarbeitszeit, value: `${state.wochenarbeitszeitStunden} h` },
      { label: labels.inputs.produktivStundenProMonat, value: `${state.produktivStundenProMonatProVzk} h` },
      { label: labels.inputs.stundensatz, value: fmtCurrency.format(state.stundensatz) },
    ],
    [labels, ergebnis, state, fmtCurrency, fmtNumber]
  );

  const emailHeadline = `${fmtNumber.format(ergebnis.vollzeitAequivalente)} ${labels.hints.vzaeHint}`;

  return (
    <div className="grid gap-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <NumberField
            label={labels.inputs.quadratmeter}
            value={state.quadratmeter}
            onChange={(v) => setField("quadratmeter", v)}
            suffix="m²"
            min={0}
            step={10}
          />
          <SelectField
            label={labels.inputs.reinigungsart}
            value={state.reinigungsart}
            onChange={(v) => {
              setField("reinigungsart", v as Reinigungsart);
              setField("leistungQmProStunde", undefined);
            }}
            options={labels.reinigungsartOptions}
          />
          <NumberField
            label={labels.inputs.reinigungenProMonat}
            value={state.reinigungenProMonat}
            onChange={(v) => setField("reinigungenProMonat", v)}
            min={0}
            step={1}
          />
          <NumberField
            label={labels.inputs.leistungQmProStunde}
            value={
              state.leistungQmProStunde ??
              LEISTUNG_QM_PRO_STUNDE[state.reinigungsart]
            }
            onChange={(v) => setField("leistungQmProStunde", v)}
            suffix="m²/h"
            min={1}
            step={5}
            hint={labels.inputs.leistungHint}
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
            label={labels.inputs.produktivStundenProMonat}
            value={state.produktivStundenProMonatProVzk}
            onChange={(v) => setField("produktivStundenProMonatProVzk", v)}
            suffix="h"
            min={1}
            step={5}
            hint={labels.inputs.produktivHint}
          />
          <NumberField
            label={labels.inputs.stundensatz}
            value={state.stundensatz}
            onChange={(v) => setField("stundensatz", v)}
            suffix={labels.currencySymbol}
            min={0}
            step={0.5}
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
            {labels.ergebnis.vollzeitAequivalente}
          </div>
          <div className="mt-2 text-3xl font-semibold text-slate-900">
            {fmtNumber.format(ergebnis.vollzeitAequivalente)}
            <span className="ml-1 text-sm font-normal text-slate-500">
              {labels.hints.vzaeHint}
            </span>
          </div>
          <div className="mt-1 text-sm text-slate-600">
            {fmtNumber.format(ergebnis.stundenProMonat)} h {labels.hints.proMonat}
          </div>
          <div className="mt-1 text-sm text-slate-500">
            {fmtNumber.format(ergebnis.stundenProWoche)} h {labels.hints.proWoche}
          </div>
        </div>

        <dl className="mt-5 space-y-2 text-sm text-slate-700">
          <Row
            label={labels.ergebnis.stundenProReinigung}
            value={`${fmtNumber.format(ergebnis.stundenProReinigung)} h`}
          />
          <Row
            label={labels.ergebnis.stundenProMonat}
            value={`${fmtNumber.format(ergebnis.stundenProMonat)} h`}
          />
          <Row
            label={labels.ergebnis.personalkostenProMonat}
            value={fmtCurrency.format(ergebnis.personalkostenProMonat)}
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
      {labels.emailCapture ? (
        <EmailCapture
          labels={labels.emailCapture}
          rechnerType="personalbedarf"
          headline={emailHeadline}
          rows={emailRows}
        />
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
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
