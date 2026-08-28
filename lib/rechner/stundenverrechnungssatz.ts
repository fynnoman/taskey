/**
 * Stundenverrechnungssatz-Kalkulation für die Gebäudereinigung.
 *
 * Reine Funktion, keine Side-Effects, keine i18n. Der View bindet
 * Beschriftungen und Formatierung.
 *
 * Ziel: aus Bruttolohn, Lohnnebenkosten, bezahlten Ausfallzeiten (Urlaub,
 * Krankheit, Feiertag), Unproduktivanteil und monatlichen Overhead-Kosten
 * den kostendeckenden und den empfohlenen Stundenverrechnungssatz für die
 * produktive Arbeitsstunde herleiten.
 *
 * Der Ansatz folgt der Vollkosten-Logik: Der AG bezahlt den Lohn für alle
 * Sollstunden (2028h bei 39h/Woche), produktiv sind aber nur die Stunden
 * abzüglich Urlaub, Krankheit, Feiertag und unproduktiver Anteile.
 */

export type StundenverrechnungssatzInput = {
  bruttolohnProStunde: number;
  wochenarbeitszeitStunden: number;
  urlaubstage: number;
  krankheitstage: number;
  feiertageProJahr: number;
  unproduktivProzent: number;
  lohnnebenkostenProzent: number;
  materialProMonat: number;
  fahrzeugProMonat: number;
  verwaltungProMonat: number;
  versicherungProMonat: number;
  zielmargeProzent: number;
};

export type StundenverrechnungssatzErgebnis = {
  bezahlteStundenProJahr: number;
  produktiveStundenProJahr: number;
  ausfallStundenProJahr: number;
  jahresPersonalkosten: number;
  overheadProJahr: number;
  personalkostenProProduktiverStunde: number;
  overheadProProduktiverStunde: number;
  mindestStundensatz: number;
  personalvollkostenStundensatz: number;
  kostendeckenderStundensatz: number;
  empfohlenerStundensatz: number;
  zielmargeEuroProStunde: number;
};

/**
 * Berechnet Vollkosten und Verrechnungssätze pro produktiver Arbeitsstunde.
 *
 * Formel-Kette:
 *  1. Sollstunden/Jahr        = Wochenarbeitszeit × 52
 *  2. Ausfallstunden/Jahr     = (Urlaub + Krankheit + Feiertag) × Tagesstunden
 *                               + Unproduktiv-Anteil auf Restzeit
 *  3. Produktivstunden/Jahr   = Sollstunden − Ausfallstunden
 *  4. Jahres-Personalkosten   = Bruttolohn × Sollstunden × (1 + Nebenkosten)
 *  5. Overhead/Jahr           = (Material + Fahrzeug + Verwaltung + Versicherung) × 12
 *  6. Personal/prod. Stunde   = Jahres-Personalkosten / Produktivstunden
 *  7. Overhead/prod. Stunde   = Overhead-Jahr / Produktivstunden
 *  8. Kostendeckend           = Personal + Overhead
 *  9. Empfohlen               = Kostendeckend / (1 − Zielmarge)
 * 10. Mindestsatz             = reiner Bruttolohn × Sollstunden / Produktivstunden
 * 11. Personalvollkosten-Satz = Personal-Anteil ohne Overhead
 */
export function berechneStundenverrechnungssatz(
  input: StundenverrechnungssatzInput
): StundenverrechnungssatzErgebnis {
  const tagesstunden =
    input.wochenarbeitszeitStunden > 0 ? input.wochenarbeitszeitStunden / 5 : 8;

  const sollstundenProJahr = Math.max(input.wochenarbeitszeitStunden, 0) * 52;

  const urlaubStunden = Math.max(input.urlaubstage, 0) * tagesstunden;
  const krankheitStunden = Math.max(input.krankheitstage, 0) * tagesstunden;
  const feiertagStunden = Math.max(input.feiertageProJahr, 0) * tagesstunden;

  const bezahlteAnwesenheitJahr =
    sollstundenProJahr - urlaubStunden - krankheitStunden - feiertagStunden;
  const unproduktivQuote = clampPercent(input.unproduktivProzent) / 100;
  const unproduktivStunden = Math.max(bezahlteAnwesenheitJahr, 0) * unproduktivQuote;

  const ausfallStundenProJahr =
    urlaubStunden + krankheitStunden + feiertagStunden + unproduktivStunden;

  const produktiveStundenProJahr = Math.max(
    sollstundenProJahr - ausfallStundenProJahr,
    0
  );

  const lohnnebenkostenFaktor = 1 + Math.max(input.lohnnebenkostenProzent, 0) / 100;
  const jahresPersonalkosten =
    Math.max(input.bruttolohnProStunde, 0) *
    sollstundenProJahr *
    lohnnebenkostenFaktor;

  const overheadProJahr =
    (Math.max(input.materialProMonat, 0) +
      Math.max(input.fahrzeugProMonat, 0) +
      Math.max(input.verwaltungProMonat, 0) +
      Math.max(input.versicherungProMonat, 0)) *
    12;

  const personalkostenProProduktiverStunde =
    produktiveStundenProJahr > 0
      ? jahresPersonalkosten / produktiveStundenProJahr
      : 0;

  const overheadProProduktiverStunde =
    produktiveStundenProJahr > 0 ? overheadProJahr / produktiveStundenProJahr : 0;

  const mindestStundensatz =
    produktiveStundenProJahr > 0
      ? (Math.max(input.bruttolohnProStunde, 0) * sollstundenProJahr) /
        produktiveStundenProJahr
      : 0;

  const personalvollkostenStundensatz = personalkostenProProduktiverStunde;
  const kostendeckenderStundensatz =
    personalkostenProProduktiverStunde + overheadProProduktiverStunde;

  const marge = clampPercent(input.zielmargeProzent) / 100;
  const empfohlenerStundensatz =
    marge < 1 ? kostendeckenderStundensatz / (1 - marge) : kostendeckenderStundensatz;

  const zielmargeEuroProStunde = empfohlenerStundensatz - kostendeckenderStundensatz;

  return {
    bezahlteStundenProJahr: round2(sollstundenProJahr),
    produktiveStundenProJahr: round2(produktiveStundenProJahr),
    ausfallStundenProJahr: round2(ausfallStundenProJahr),
    jahresPersonalkosten: round2(jahresPersonalkosten),
    overheadProJahr: round2(overheadProJahr),
    personalkostenProProduktiverStunde: round2(personalkostenProProduktiverStunde),
    overheadProProduktiverStunde: round2(overheadProProduktiverStunde),
    mindestStundensatz: round2(mindestStundensatz),
    personalvollkostenStundensatz: round2(personalvollkostenStundensatz),
    kostendeckenderStundensatz: round2(kostendeckenderStundensatz),
    empfohlenerStundensatz: round2(empfohlenerStundensatz),
    zielmargeEuroProStunde: round2(zielmargeEuroProStunde),
  };
}

function clampPercent(value: number): number {
  if (!Number.isFinite(value)) return 0;
  if (value < 0) return 0;
  if (value > 95) return 95;
  return value;
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}
