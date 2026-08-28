/**
 * Margen-Kalkulation für die Gebäudereinigung.
 *
 * Zwei Antworten in einem Rechner:
 *  A) Was ist meine Marge, wenn ich zum Preis X mit Kosten Y liefere?
 *  B) Welchen Preis brauche ich, um bei Kosten Y die Zielmarge Z zu erreichen?
 *
 * Zusätzlich Sensitivitätswerte für Preisänderungen um +/- 10 Prozent, weil
 * die reale Verhandlung meist um wenige Prozentpunkte geht.
 */

export type MargeInput = {
  verkaufspreis: number;
  gesamtkosten: number;
  zielmargeProzent: number;
};

export type MargeErgebnis = {
  aktuelleMargeEuro: number;
  aktuelleMargeProzent: number;
  empfohlenerPreisFuerZielmarge: number;
  differenzZumZielpreis: number;
  deckungsbeitragProEuro: number;
  szenarioPlus10Prozent: SzenarioErgebnis;
  szenarioMinus10Prozent: SzenarioErgebnis;
};

export type SzenarioErgebnis = {
  preis: number;
  margeEuro: number;
  margeProzent: number;
};

/**
 * Formel-Kette:
 *  1. aktuelle Marge €     = Preis − Kosten
 *  2. aktuelle Marge %     = (Preis − Kosten) / Preis × 100
 *  3. empfohlener Preis    = Kosten / (1 − Zielmarge)
 *  4. Diff zum Zielpreis   = empfohlener Preis − aktueller Preis
 *  5. Deckungsbeitrag/€    = Marge € / Preis (0..1)
 *  6. Szenarien +/- 10 %   = gleiche Formel mit angepasstem Preis
 */
export function berechneMarge(input: MargeInput): MargeErgebnis {
  const preis = Math.max(input.verkaufspreis, 0);
  const kosten = Math.max(input.gesamtkosten, 0);

  const aktuelleMargeEuro = preis - kosten;
  const aktuelleMargeProzent = preis > 0 ? (aktuelleMargeEuro / preis) * 100 : 0;

  const zielMarge = clampMarge(input.zielmargeProzent) / 100;
  const empfohlenerPreisFuerZielmarge =
    zielMarge < 1 && kosten > 0 ? kosten / (1 - zielMarge) : preis;

  const differenzZumZielpreis = empfohlenerPreisFuerZielmarge - preis;

  const deckungsbeitragProEuro = preis > 0 ? aktuelleMargeEuro / preis : 0;

  const szenarioPlus10Prozent = szenario(preis * 1.1, kosten);
  const szenarioMinus10Prozent = szenario(preis * 0.9, kosten);

  return {
    aktuelleMargeEuro: round2(aktuelleMargeEuro),
    aktuelleMargeProzent: round2(aktuelleMargeProzent),
    empfohlenerPreisFuerZielmarge: round2(empfohlenerPreisFuerZielmarge),
    differenzZumZielpreis: round2(differenzZumZielpreis),
    deckungsbeitragProEuro: round4(deckungsbeitragProEuro),
    szenarioPlus10Prozent,
    szenarioMinus10Prozent,
  };
}

function szenario(preis: number, kosten: number): SzenarioErgebnis {
  const marge = preis - kosten;
  return {
    preis: round2(preis),
    margeEuro: round2(marge),
    margeProzent: round2(preis > 0 ? (marge / preis) * 100 : 0),
  };
}

function clampMarge(value: number): number {
  if (!Number.isFinite(value)) return 0;
  if (value < 0) return 0;
  if (value > 95) return 95;
  return value;
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

function round4(value: number): number {
  return Math.round(value * 10000) / 10000;
}
