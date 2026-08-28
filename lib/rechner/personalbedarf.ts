/**
 * Personalbedarf-Kalkulation für Reinigungsobjekte.
 *
 * Reine Funktion. Gibt an, wie viele Arbeitsstunden ein Objekt pro Monat
 * benötigt, wie viele Vollzeitäquivalente daraus folgen und welche
 * Personalkosten damit verbunden sind.
 *
 * Der Rechner nutzt dieselben Leistungswerte (m²/h) wie der
 * Reinigungskosten-Rechner. Wer beide nutzt, erhält konsistente Ergebnisse.
 */

import {
  LEISTUNG_QM_PRO_STUNDE,
  type Reinigungsart,
} from "./reinigungskosten";

export type PersonalbedarfInput = {
  quadratmeter: number;
  reinigungsart: Reinigungsart;
  reinigungenProMonat: number;
  leistungQmProStunde?: number;
  wochenarbeitszeitStunden: number;
  produktivStundenProMonatProVzk: number;
  stundensatz: number;
};

export type PersonalbedarfErgebnis = {
  stundenProReinigung: number;
  stundenProMonat: number;
  stundenProWoche: number;
  vollzeitAequivalente: number;
  personalkostenProMonat: number;
  leistungQmProStundeUsed: number;
};

/**
 * Formel-Kette:
 *  1. Stunden pro Reinigung  = m² / Leistung(m²/h)
 *  2. Stunden pro Monat      = Stunden/Reinigung × Reinigungen/Monat
 *  3. Stunden pro Woche      = Stunden/Monat × 12 / 52
 *  4. VZÄ                    = Stunden/Monat / produktive Stunden/Monat pro Vollzeitkraft
 *  5. Personalkosten/Monat   = Stunden/Monat × Stundensatz
 */
export function berechnePersonalbedarf(
  input: PersonalbedarfInput
): PersonalbedarfErgebnis {
  const leistung =
    input.leistungQmProStunde && input.leistungQmProStunde > 0
      ? input.leistungQmProStunde
      : LEISTUNG_QM_PRO_STUNDE[input.reinigungsart];

  const stundenProReinigung =
    input.quadratmeter > 0 && leistung > 0
      ? input.quadratmeter / leistung
      : 0;

  const reinigungenProMonat = Math.max(input.reinigungenProMonat, 0);
  const stundenProMonat = stundenProReinigung * reinigungenProMonat;
  const stundenProWoche = (stundenProMonat * 12) / 52;

  const produktivProMonat = Math.max(input.produktivStundenProMonatProVzk, 1);
  const vollzeitAequivalente = stundenProMonat / produktivProMonat;

  const personalkostenProMonat =
    stundenProMonat * Math.max(input.stundensatz, 0);

  return {
    stundenProReinigung: round2(stundenProReinigung),
    stundenProMonat: round2(stundenProMonat),
    stundenProWoche: round2(stundenProWoche),
    vollzeitAequivalente: round2(vollzeitAequivalente),
    personalkostenProMonat: round2(personalkostenProMonat),
    leistungQmProStundeUsed: leistung,
  };
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}
