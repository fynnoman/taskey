"use client";

import { useMemo, useState } from "react";
import {
  berechneReinigungskosten,
  LEISTUNG_QM_PRO_STUNDE,
  type Objektart,
  type Reinigungsart,
  type ReinigungskostenInput,
} from "@/lib/rechner/reinigungskosten";
import EmailCapture, {
  type EmailCaptureLabels,
} from "@/components/rechner/EmailCapture";

export type ReinigungsartOption = { value: Reinigungsart; label: string };
export type ObjektartOption = { value: Objektart; label: string };

export type ReinigungskostenLabels = {
  inputs: {
    objektart: string;
    quadratmeter: string;
    reinigungsart: string;
    reinigungenProMonat: string;
    leistungQmProStunde: string;
    leistungHint: string;
    stundensatz: string;
    materialkosten: string;
    fahrtkosten: string;
    sonstigeKosten: string;
    zielmarge: string;
  };
  hints: {
    formula: string;
    perReinigung: string;
    perMonat: string;
    perQuadratmeter: string;
  };
  ergebnis: {
    heading: string;
    arbeitsstunden: string;
    personalkosten: string;
    materialkosten: string;
    fahrtkosten: string;
    gesamtkosten: string;
    zielmargeEuro: string;
    empfohlenerPreis: string;
    preisProQm: string;
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
  objektartOptions: ObjektartOption[];
  reinigungsartOptions: ReinigungsartOption[];
  emailCapture?: EmailCaptureLabels;
};

const DEFAULTS: Omit<ReinigungskostenInput, "objektart" | "reinigungsart"> = {
  quadratmeter: 800,
  reinigungenProMonat: 20,
  leistungQmProStunde: undefined,
  stundensatz: 32,
  materialkostenProReinigung: 6,
  fahrtkostenProReinigung: 8,
  sonstigeKostenProMonat: 0,
  zielmargeProzent: 20,
};

export default function ReinigungskostenRechner({
  labels,
}: {
  labels: ReinigungskostenLabels;
}) {
  const [objektart, setObjektart] = useState<Objektart>(
    labels.objektartOptions[0]?.value ?? "buero"
  );
  const [reinigungsart, setReinigungsart] = useState<Reinigungsart>(
    labels.reinigungsartOptions[0]?.value ?? "unterhaltsreinigung"
  );
  const [quadratmeter, setQuadratmeter] = useState<number>(DEFAULTS.quadratmeter);
  const [reinigungenProMonat, setReinigungenProMonat] = useState<number>(
    DEFAULTS.reinigungenProMonat
  );
  const [leistungQmProStunde, setLeistungQmProStunde] = useState<number | undefined>(
    undefined
  );
  const [stundensatz, setStundensatz] = useState<number>(DEFAULTS.stundensatz);
  const [materialkosten, setMaterialkosten] = useState<number>(
    DEFAULTS.materialkostenProReinigung
  );
  const [fahrtkosten, setFahrtkosten] = useState<number>(
    DEFAULTS.fahrtkostenProReinigung
  );
  const [sonstigeKosten, setSonstigeKosten] = useState<number>(
    DEFAULTS.sonstigeKostenProMonat
  );
  const [zielmarge, setZielmarge] = useState<number>(DEFAULTS.zielmargeProzent);

  const ergebnis = useMemo(
    () =>
      berechneReinigungskosten({
        objektart,
        quadratmeter,
        reinigungsart,
        reinigungenProMonat,
        leistungQmProStunde,
        stundensatz,
        materialkostenProReinigung: materialkosten,
        fahrtkostenProReinigung: fahrtkosten,
        sonstigeKostenProMonat: sonstigeKosten,
        zielmargeProzent: zielmarge,
      }),
    [
      objektart,
      quadratmeter,
      reinigungsart,
      reinigungenProMonat,
      leistungQmProStunde,
      stundensatz,
      materialkosten,
      fahrtkosten,
      sonstigeKosten,
      zielmarge,
    ]
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
        maximumFractionDigits: 1,
      }),
    [labels.locale]
  );

  const handoffHref = useMemo(() => {
    const params = new URLSearchParams({
      source: "rechner-reinigungskosten",
      lang: labels.locale,
      objektart,
      reinigungsart,
      qm: String(quadratmeter),
      freq: String(reinigungenProMonat),
      stundensatz: String(stundensatz),
      material: String(materialkosten),
      fahrt: String(fahrtkosten),
      sonstige: String(sonstigeKosten),
      marge: String(zielmarge),
      preis_monat: String(ergebnis.empfohlenerPreisProMonat),
      preis_reinigung: String(ergebnis.empfohlenerPreisProReinigung),
      kosten_monat: String(ergebnis.gesamtkostenProMonat),
      stunden_monat: String(ergebnis.arbeitsstundenProMonat),
    });
    const sep = labels.handoffUrl.includes("?") ? "&" : "?";
    return `${labels.handoffUrl}${sep}${params.toString()}`;
  }, [
    labels.handoffUrl,
    labels.locale,
    objektart,
    reinigungsart,
    quadratmeter,
    reinigungenProMonat,
    stundensatz,
    materialkosten,
    fahrtkosten,
    sonstigeKosten,
    zielmarge,
    ergebnis.empfohlenerPreisProMonat,
    ergebnis.empfohlenerPreisProReinigung,
    ergebnis.gesamtkostenProMonat,
    ergebnis.arbeitsstundenProMonat,
  ]);

  const emailRows = useMemo(
    () => [
      { label: labels.ergebnis.empfohlenerPreis, value: `${fmtCurrency.format(ergebnis.empfohlenerPreisProMonat)} ${labels.hints.perMonat}` },
      { label: labels.ergebnis.empfohlenerPreis, value: `${fmtCurrency.format(ergebnis.empfohlenerPreisProReinigung)} ${labels.hints.perReinigung}` },
      { label: labels.ergebnis.arbeitsstunden, value: `${fmtNumber.format(ergebnis.arbeitsstundenProMonat)} h` },
      { label: labels.ergebnis.personalkosten, value: fmtCurrency.format(ergebnis.personalkostenProMonat) },
      { label: labels.ergebnis.materialkosten, value: fmtCurrency.format(ergebnis.materialkostenProMonat) },
      { label: labels.ergebnis.fahrtkosten, value: fmtCurrency.format(ergebnis.fahrtkostenProMonat) },
      { label: labels.ergebnis.gesamtkosten, value: fmtCurrency.format(ergebnis.gesamtkostenProMonat) },
      { label: labels.ergebnis.zielmargeEuro, value: fmtCurrency.format(ergebnis.zielmargeEuro) },
      { label: labels.inputs.quadratmeter, value: `${quadratmeter} m²` },
      { label: labels.inputs.reinigungenProMonat, value: String(reinigungenProMonat) },
      { label: labels.inputs.stundensatz, value: `${fmtCurrency.format(stundensatz)}` },
      { label: labels.inputs.zielmarge, value: `${zielmarge} %` },
    ],
    [labels, ergebnis, quadratmeter, reinigungenProMonat, stundensatz, zielmarge, fmtCurrency, fmtNumber]
  );

  const emailHeadline = `${fmtCurrency.format(ergebnis.empfohlenerPreisProMonat)} ${labels.hints.perMonat}`;

  return (
    <div className="grid gap-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField
            label={labels.inputs.objektart}
            value={objektart}
            onChange={(v) => setObjektart(v as Objektart)}
            options={labels.objektartOptions}
          />
          <SelectField
            label={labels.inputs.reinigungsart}
            value={reinigungsart}
            onChange={(v) => {
              setReinigungsart(v as Reinigungsart);
              setLeistungQmProStunde(undefined);
            }}
            options={labels.reinigungsartOptions}
          />
          <NumberField
            label={labels.inputs.quadratmeter}
            value={quadratmeter}
            onChange={setQuadratmeter}
            suffix="m²"
            min={0}
            step={10}
          />
          <NumberField
            label={labels.inputs.reinigungenProMonat}
            value={reinigungenProMonat}
            onChange={setReinigungenProMonat}
            min={0}
            step={1}
          />
          <NumberField
            label={labels.inputs.leistungQmProStunde}
            value={leistungQmProStunde ?? LEISTUNG_QM_PRO_STUNDE[reinigungsart]}
            onChange={(v) => setLeistungQmProStunde(v)}
            suffix="m²/h"
            min={1}
            step={5}
            hint={labels.inputs.leistungHint}
          />
          <NumberField
            label={labels.inputs.stundensatz}
            value={stundensatz}
            onChange={setStundensatz}
            suffix={labels.currencySymbol}
            min={0}
            step={0.5}
          />
          <NumberField
            label={labels.inputs.materialkosten}
            value={materialkosten}
            onChange={setMaterialkosten}
            suffix={labels.currencySymbol}
            min={0}
            step={0.5}
          />
          <NumberField
            label={labels.inputs.fahrtkosten}
            value={fahrtkosten}
            onChange={setFahrtkosten}
            suffix={labels.currencySymbol}
            min={0}
            step={0.5}
          />
          <NumberField
            label={labels.inputs.sonstigeKosten}
            value={sonstigeKosten}
            onChange={setSonstigeKosten}
            suffix={labels.currencySymbol}
            min={0}
            step={1}
          />
          <NumberField
            label={labels.inputs.zielmarge}
            value={zielmarge}
            onChange={setZielmarge}
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
            {labels.ergebnis.empfohlenerPreis}
          </div>
          <div className="mt-2 text-3xl font-semibold text-slate-900">
            {fmtCurrency.format(ergebnis.empfohlenerPreisProMonat)}
            <span className="ml-1 text-sm font-normal text-slate-500">
              {labels.hints.perMonat}
            </span>
          </div>
          <div className="mt-1 text-sm text-slate-600">
            {fmtCurrency.format(ergebnis.empfohlenerPreisProReinigung)}{" "}
            {labels.hints.perReinigung}
          </div>
          <div className="mt-1 text-sm text-slate-500">
            {fmtCurrency.format(ergebnis.preisProQuadratmeter)}{" "}
            {labels.hints.perQuadratmeter}
          </div>
        </div>

        <dl className="mt-5 space-y-2 text-sm text-slate-700">
          <Row
            label={labels.ergebnis.arbeitsstunden}
            value={`${fmtNumber.format(ergebnis.arbeitsstundenProMonat)} h`}
          />
          <Row
            label={labels.ergebnis.personalkosten}
            value={fmtCurrency.format(ergebnis.personalkostenProMonat)}
          />
          <Row
            label={labels.ergebnis.materialkosten}
            value={fmtCurrency.format(ergebnis.materialkostenProMonat)}
          />
          <Row
            label={labels.ergebnis.fahrtkosten}
            value={fmtCurrency.format(ergebnis.fahrtkostenProMonat)}
          />
          <Row
            label={labels.ergebnis.gesamtkosten}
            value={fmtCurrency.format(ergebnis.gesamtkostenProMonat)}
            emphasize
          />
          <Row
            label={labels.ergebnis.zielmargeEuro}
            value={fmtCurrency.format(ergebnis.zielmargeEuro)}
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
          rechnerType="reinigungskosten"
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
