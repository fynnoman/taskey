/**
 * Vollkosten-Kalkulation für einen Reinigungsmitarbeiter pro Jahr.
 *
 * Antwortet auf die Frage: "Was kostet mich ein Reinigungsmitarbeiter
 * tatsächlich pro Jahr?" — inklusive Lohnnebenkosten, Sonderzahlungen,
 * vermögenswirksamer Leistungen, Arbeitskleidung und weiterer Personalposten,
 * die im Bruttolohn oft nicht sichtbar sind.
 *
 * Der Rechner ist bewusst getrennt vom Stundenverrechnungssatz-Rechner:
 * dort geht es um den Preis pro produktiver Stunde für den Kunden, hier um
 * die reine Personalkosten-Sicht aus AG-Perspektive pro Kopf.
 */

export type LohnkostenInput = {
  bruttolohnProStunde: number;
  wochenarbeitszeitStunden: number;
  lohnnebenkostenProzent: number;
  weihnachtsgeldEuro: number;
  urlaubsgeldEuro: number;
  vermoegensLeistungenProMonat: number;
  arbeitskleidungProJahr: number;
  fortbildungProJahr: number;
  sonstigesProJahr: number;
};

export type LohnkostenErgebnis = {
  jahresBruttolohn: number;
  lohnnebenkostenJahr: number;
  sonderzahlungenJahr: number;
  weitereKostenJahr: number;
  gesamtkostenJahr: number;
  gesamtkostenMonat: number;
  kostenProSollstunde: number;
  aufschlagProzent: number;
  sollstundenProJahr: number;
};

/**
 * Formel-Kette:
 *  1. Sollstunden/Jahr     = Wochenarbeitszeit × 52
 *  2. Jahresbruttolohn     = Bruttolohn × Sollstunden
 *  3. Lohnnebenkosten/Jahr = Jahresbruttolohn × Nebenkosten-%
 *  4. Sonderzahlungen/Jahr = Weihnachtsgeld + Urlaubsgeld
 *                            + VL × 12 (VL sind AG-Anteil, hier vereinfacht)
 *  5. Weitere Kosten/Jahr  = Arbeitskleidung + Fortbildung + Sonstiges
 *  6. Gesamtkosten/Jahr    = Summe aller Positionen
 *  7. Aufschlag %          = (Gesamt / Jahresbruttolohn − 1) × 100
 */
export function berechneLohnkosten(input: LohnkostenInput): LohnkostenErgebnis {
  const sollstundenProJahr = Math.max(input.wochenarbeitszeitStunden, 0) * 52;
  const jahresBruttolohn =
    Math.max(input.bruttolohnProStunde, 0) * sollstundenProJahr;

  const lohnnebenkostenJahr =
    jahresBruttolohn * Math.max(input.lohnnebenkostenProzent, 0) / 100;

  const sonderzahlungenJahr =
    Math.max(input.weihnachtsgeldEuro, 0) +
    Math.max(input.urlaubsgeldEuro, 0) +
    Math.max(input.vermoegensLeistungenProMonat, 0) * 12;

  const weitereKostenJahr =
    Math.max(input.arbeitskleidungProJahr, 0) +
    Math.max(input.fortbildungProJahr, 0) +
    Math.max(input.sonstigesProJahr, 0);

  const gesamtkostenJahr =
    jahresBruttolohn + lohnnebenkostenJahr + sonderzahlungenJahr + weitereKostenJahr;

  const gesamtkostenMonat = gesamtkostenJahr / 12;

  const kostenProSollstunde =
    sollstundenProJahr > 0 ? gesamtkostenJahr / sollstundenProJahr : 0;

  const aufschlagProzent =
    jahresBruttolohn > 0
      ? (gesamtkostenJahr / jahresBruttolohn - 1) * 100
      : 0;

  return {
    jahresBruttolohn: round2(jahresBruttolohn),
    lohnnebenkostenJahr: round2(lohnnebenkostenJahr),
    sonderzahlungenJahr: round2(sonderzahlungenJahr),
    weitereKostenJahr: round2(weitereKostenJahr),
    gesamtkostenJahr: round2(gesamtkostenJahr),
    gesamtkostenMonat: round2(gesamtkostenMonat),
    kostenProSollstunde: round2(kostenProSollstunde),
    aufschlagProzent: round2(aufschlagProzent),
    sollstundenProJahr: round2(sollstundenProJahr),
  };
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}
