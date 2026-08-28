/**
 * Reinigungskosten-Kalkulation.
 *
 * Reine Funktion, keine Side-Effects, keine i18n. Der Rechner-View bindet
 * Beschriftungen und Formatierung; hier lebt nur die Rechenlogik.
 *
 * Die Formel ist bewusst konservativ und transparent. Jede Annahme ist als
 * Konstante am Kopf der Datei sichtbar. Der aufrufende View kann jeden Wert
 * durch User-Input überschreiben.
 */

export type Reinigungsart =
  | "unterhaltsreinigung"
  | "glasreinigung"
  | "grundreinigung"
  | "bauendreinigung"
  | "industriereinigung"
  | "hotel-housekeeping"
  | "klinikreinigung";

export type Objektart =
  | "buero"
  | "praxis"
  | "hotel"
  | "schule"
  | "produktion"
  | "handel"
  | "wohnbau"
  | "sonstiges";

/**
 * Leistung in m² pro produktiver Arbeitsstunde. Marktübliche Richtwerte
 * für Deutschland, ohne Werbecharakter. Der Nutzer kann sie im Rechner
 * überschreiben; hier stehen sie als Startwerte.
 */
export const LEISTUNG_QM_PRO_STUNDE: Record<Reinigungsart, number> = {
  unterhaltsreinigung: 220,
  glasreinigung: 90,
  grundreinigung: 60,
  bauendreinigung: 40,
  industriereinigung: 150,
  "hotel-housekeeping": 120,
  klinikreinigung: 130,
};

export type ReinigungskostenInput = {
  objektart: Objektart;
  quadratmeter: number;
  reinigungsart: Reinigungsart;
  reinigungenProMonat: number;
  leistungQmProStunde?: number;
  stundensatz: number;
  materialkostenProReinigung: number;
  fahrtkostenProReinigung: number;
  sonstigeKostenProMonat: number;
  zielmargeProzent: number;
};

export type ReinigungskostenErgebnis = {
  arbeitsstundenProReinigung: number;
  arbeitsstundenProMonat: number;
  personalkostenProReinigung: number;
  personalkostenProMonat: number;
  materialkostenProMonat: number;
  fahrtkostenProMonat: number;
  gesamtkostenProReinigung: number;
  gesamtkostenProMonat: number;
  empfohlenerPreisProReinigung: number;
  empfohlenerPreisProMonat: number;
  preisProQuadratmeter: number;
  zielmargeEuro: number;
  leistungQmProStundeUsed: number;
};

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

/**
 * Kalkuliert Reinigungskosten und empfohlenen Angebotspreis.
 *
 * Formel-Kette (bewusst nachvollziehbar):
 *  1. Arbeitsstunden pro Reinigung  = m² / Leistung(m²/h)
 *  2. Personalkosten pro Reinigung  = Arbeitsstunden × Stundensatz
 *  3. Kosten pro Reinigung          = Personal + Material + Fahrt
 *  4. Kosten pro Monat              = Kosten/Reinigung × Reinigungen/Monat + sonstige/Monat
 *  5. Empfohlener Preis pro Monat   = Kosten/Monat / (1 − Zielmarge)
 *  6. Zielmarge in Euro             = Preis/Monat − Kosten/Monat
 */
export function berechneReinigungskosten(
  input: ReinigungskostenInput
): ReinigungskostenErgebnis {
  const leistung =
    input.leistungQmProStunde && input.leistungQmProStunde > 0
      ? input.leistungQmProStunde
      : LEISTUNG_QM_PRO_STUNDE[input.reinigungsart];

  const arbeitsstundenProReinigung =
    input.quadratmeter > 0 && leistung > 0 ? input.quadratmeter / leistung : 0;

  const personalkostenProReinigung =
    arbeitsstundenProReinigung * Math.max(input.stundensatz, 0);

  const gesamtkostenProReinigung =
    personalkostenProReinigung +
    Math.max(input.materialkostenProReinigung, 0) +
    Math.max(input.fahrtkostenProReinigung, 0);

  const reinigungenProMonat = Math.max(input.reinigungenProMonat, 0);

  const arbeitsstundenProMonat = arbeitsstundenProReinigung * reinigungenProMonat;
  const personalkostenProMonat = personalkostenProReinigung * reinigungenProMonat;
  const materialkostenProMonat =
    Math.max(input.materialkostenProReinigung, 0) * reinigungenProMonat;
  const fahrtkostenProMonat =
    Math.max(input.fahrtkostenProReinigung, 0) * reinigungenProMonat;

  const gesamtkostenProMonat =
    gesamtkostenProReinigung * reinigungenProMonat +
    Math.max(input.sonstigeKostenProMonat, 0);

  const marge = clampMarge(input.zielmargeProzent) / 100;
  const empfohlenerPreisProMonat =
    marge < 1 ? gesamtkostenProMonat / (1 - marge) : gesamtkostenProMonat;

  const empfohlenerPreisProReinigung =
    reinigungenProMonat > 0
      ? empfohlenerPreisProMonat / reinigungenProMonat
      : 0;

  const preisProQuadratmeter =
    input.quadratmeter > 0 && reinigungenProMonat > 0
      ? empfohlenerPreisProReinigung / input.quadratmeter
      : 0;

  const zielmargeEuro = empfohlenerPreisProMonat - gesamtkostenProMonat;

  return {
    arbeitsstundenProReinigung: round2(arbeitsstundenProReinigung),
    arbeitsstundenProMonat: round2(arbeitsstundenProMonat),
    personalkostenProReinigung: round2(personalkostenProReinigung),
    personalkostenProMonat: round2(personalkostenProMonat),
    materialkostenProMonat: round2(materialkostenProMonat),
    fahrtkostenProMonat: round2(fahrtkostenProMonat),
    gesamtkostenProReinigung: round2(gesamtkostenProReinigung),
    gesamtkostenProMonat: round2(gesamtkostenProMonat),
    empfohlenerPreisProReinigung: round2(empfohlenerPreisProReinigung),
    empfohlenerPreisProMonat: round2(empfohlenerPreisProMonat),
    preisProQuadratmeter: round2(preisProQuadratmeter),
    zielmargeEuro: round2(zielmargeEuro),
    leistungQmProStundeUsed: leistung,
  };
}

function clampMarge(value: number): number {
  if (!Number.isFinite(value)) return 0;
  if (value < 0) return 0;
  if (value > 95) return 95;
  return value;
}
