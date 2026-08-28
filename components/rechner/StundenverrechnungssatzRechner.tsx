"use client";

import { useMemo, useState } from "react";
import {
  berechneStundenverrechnungssatz,
  type StundenverrechnungssatzInput,
} from "@/lib/rechner/stundenverrechnungssatz";
import CalculatorGate, {
  type GateLabels,
} from "@/components/rechner/CalculatorGate";

export type StundenverrechnungssatzLabels = {
  inputs: {
    bruttolohn: string;
    wochenarbeitszeit: string;
    urlaubstage: string;
    krankheitstage: string;
    feiertageProJahr: string;
    unproduktivProzent: string;
    lohnnebenkosten: string;
    materialProMonat: string;
    fahrzeugProMonat: string;
    verwaltungProMonat: string;
    versicherungProMonat: string;
    zielmarge: string;
  };
  hints: {
    formula: string;
    proStunde: string;
    proJahr: string;
    produktivStunden: string;
  };
  ergebnis: {
    heading: string;
    mindestsatz: string;
    personalvollkosten: string;
    kostendeckend: string;
    empfohlen: string;
    zielmargeEuro: string;
    produktiveStunden: string;
    jahresPersonalkosten: string;
    overheadJahr: string;
  };
  currency: string;
  currencySymbol: string;
  locale: "de" | "en" | "fr";
  gate: GateLabels;
};

const DEFAULTS: StundenverrechnungssatzInput = {
  bruttolohnProStunde: 15,
  wochenarbeitszeitStunden: 39,
  urlaubstage: 30,
  krankheitstage: 10,
  feiertageProJahr: 11,
  unproduktivProzent: 8,
  lohnnebenkostenProzent: 22,
  materialProMonat: 400,
  fahrzeugProMonat: 350,
  verwaltungProMonat: 900,
  versicherungProMonat: 120,
  zielmargeProzent: 15,
};

export default function StundenverrechnungssatzRechner({
  labels,
}: {
  labels: StundenverrechnungssatzLabels;
}) {
  const [state, setState] = useState<StundenverrechnungssatzInput>(DEFAULTS);

  const setField = <K extends keyof StundenverrechnungssatzInput>(
    key: K,
    value: StundenverrechnungssatzInput[K]
  ) => setState((prev) => ({ ...prev, [key]: value }));

  const ergebnis = useMemo(
    () => berechneStundenverrechnungssatz(state),
    [state]
  );

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
        maximumFractionDigits: 0,
      }),
    [labels.locale]
  );

  const emailRows = useMemo(
    () => [
      { label: labels.ergebnis.empfohlen, value: `${fmtCurrency.format(ergebnis.empfohlenerStundensatz)} ${labels.hints.proStunde}` },
      { label: labels.ergebnis.kostendeckend, value: `${fmtCurrency.format(ergebnis.kostendeckenderStundensatz)} ${labels.hints.proStunde}` },
      { label: labels.ergebnis.personalvollkosten, value: `${fmtCurrency.format(ergebnis.personalvollkostenStundensatz)} ${labels.hints.proStunde}` },
      { label: labels.ergebnis.mindestsatz, value: `${fmtCurrency.format(ergebnis.mindestStundensatz)} ${labels.hints.proStunde}` },
      { label: labels.ergebnis.zielmargeEuro, value: fmtCurrency.format(ergebnis.zielmargeEuroProStunde) },
      { label: labels.ergebnis.produktiveStunden, value: `${fmtNumber.format(ergebnis.produktiveStundenProJahr)} h` },
      { label: labels.ergebnis.jahresPersonalkosten, value: fmtCurrency.format(ergebnis.jahresPersonalkosten) },
      { label: labels.ergebnis.overheadJahr, value: fmtCurrency.format(ergebnis.overheadProJahr) },
      { label: labels.inputs.bruttolohn, value: `${fmtCurrency.format(state.bruttolohnProStunde)} ${labels.hints.proStunde}` },
      { label: labels.inputs.wochenarbeitszeit, value: `${state.wochenarbeitszeitStunden} h` },
      { label: labels.inputs.lohnnebenkosten, value: `${state.lohnnebenkostenProzent} %` },
      { label: labels.inputs.zielmarge, value: `${state.zielmargeProzent} %` },
    ],
    [labels, ergebnis, state, fmtCurrency, fmtNumber]
  );

  const emailHeadline = `${fmtCurrency.format(ergebnis.empfohlenerStundensatz)} ${labels.hints.proStunde}`;

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
            label={labels.inputs.urlaubstage}
            value={state.urlaubstage}
            onChange={(v) => setField("urlaubstage", v)}
            min={0}
            step={1}
          />
          <NumberField
            label={labels.inputs.krankheitstage}
            value={state.krankheitstage}
            onChange={(v) => setField("krankheitstage", v)}
            min={0}
            step={1}
          />
          <NumberField
            label={labels.inputs.feiertageProJahr}
            value={state.feiertageProJahr}
            onChange={(v) => setField("feiertageProJahr", v)}
            min={0}
            step={1}
          />
          <NumberField
            label={labels.inputs.unproduktivProzent}
            value={state.unproduktivProzent}
            onChange={(v) => setField("unproduktivProzent", v)}
            suffix="%"
            min={0}
            max={80}
            step={1}
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
            label={labels.inputs.materialProMonat}
            value={state.materialProMonat}
            onChange={(v) => setField("materialProMonat", v)}
            suffix={labels.currencySymbol}
            min={0}
            step={10}
          />
          <NumberField
            label={labels.inputs.fahrzeugProMonat}
            value={state.fahrzeugProMonat}
            onChange={(v) => setField("fahrzeugProMonat", v)}
            suffix={labels.currencySymbol}
            min={0}
            step={10}
          />
          <NumberField
            label={labels.inputs.verwaltungProMonat}
            value={state.verwaltungProMonat}
            onChange={(v) => setField("verwaltungProMonat", v)}
            suffix={labels.currencySymbol}
            min={0}
            step={10}
          />
          <NumberField
            label={labels.inputs.versicherungProMonat}
            value={state.versicherungProMonat}
            onChange={(v) => setField("versicherungProMonat", v)}
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

      <CalculatorGate
        labels={labels.gate}
        rechnerType="stundenverrechnungssatz"
        headline={emailHeadline}
        rows={emailRows}
      >
        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          {labels.ergebnis.heading}
        </h3>

        <div className="mt-4 rounded-xl bg-white p-5 ring-1 ring-slate-200">
          <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {labels.ergebnis.empfohlen}
          </div>
          <div className="mt-2 text-3xl font-semibold text-slate-900">
            {fmtCurrency.format(ergebnis.empfohlenerStundensatz)}
            <span className="ml-1 text-sm font-normal text-slate-500">
              {labels.hints.proStunde}
            </span>
          </div>
          <div className="mt-1 text-sm text-slate-600">
            {labels.ergebnis.zielmargeEuro}:{" "}
            {fmtCurrency.format(ergebnis.zielmargeEuroProStunde)}
          </div>
        </div>

        <dl className="mt-5 space-y-2 text-sm text-slate-700">
          <Row
            label={labels.ergebnis.mindestsatz}
            value={fmtCurrency.format(ergebnis.mindestStundensatz)}
          />
          <Row
            label={labels.ergebnis.personalvollkosten}
            value={fmtCurrency.format(ergebnis.personalvollkostenStundensatz)}
          />
          <Row
            label={labels.ergebnis.kostendeckend}
            value={fmtCurrency.format(ergebnis.kostendeckenderStundensatz)}
            emphasize
          />
          <Row
            label={labels.ergebnis.produktiveStunden}
            value={`${fmtNumber.format(ergebnis.produktiveStundenProJahr)} h`}
          />
          <Row
            label={labels.ergebnis.jahresPersonalkosten}
            value={fmtCurrency.format(ergebnis.jahresPersonalkosten)}
          />
          <Row
            label={labels.ergebnis.overheadJahr}
            value={fmtCurrency.format(ergebnis.overheadProJahr)}
          />
        </dl>

        </aside>
      </CalculatorGate>
      </div>
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
