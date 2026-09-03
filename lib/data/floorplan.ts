/**
 * Demo-Daten für die interaktive Grundriss-Sektion auf der Startseite.
 *
 * Reinigungsstatus je Raum:
 *  clean      , grün  · bereits gereinigt
 *  progress   , orange · gerade in Bearbeitung
 *  failed     , rot   · nicht durchgeführt / Problem
 *  pending    , weiß  · steht noch an
 *
 * Alle Namen und Zeiten sind Beispieldaten.
 */

export type CleaningStatus = "clean" | "progress" | "failed" | "pending";

export type RoomEvent = {
  employee: string;
  action: string;
  at: string;
};

export type RoomKey =
  | "empfang"
  | "foyer"
  | "wc_damen_eg"
  | "wc_herren_eg"
  | "wc_damen_low"
  | "wc_herren_low"
  | "cafeteria"
  | "cafeteria_kueche";

export type Room = {
  id: RoomKey;
  name: string;
  suffix?: string;
  status: CleaningStatus;
  lastClean?: string;
  lastCleanBy?: string;
  nextScheduled?: string;
  openTasks?: number;
  taskTitle?: string;
  taskPriority?: "hoch" | "mittel" | "niedrig";
  events: RoomEvent[];
};

export type FloorKey = "3og" | "2og" | "1og" | "eg" | "ug";

export type Floor = {
  id: FloorKey;
  label: string;
  short: string;
  done: number;
  total: number;
  activeCount: number;
  openTasks: number;
  rooms: Record<RoomKey, Room>;
};

const roomsEG: Record<RoomKey, Room> = {
  empfang: {
    id: "empfang",
    name: "Empfang",
    status: "clean",
    lastClean: "Heute · 07:12",
    lastCleanBy: "M. Weber",
    nextScheduled: "Morgen · 07:00",
    events: [
      { employee: "M. Weber", action: "Unterhaltsreinigung abgeschlossen", at: "Heute · 07:12" },
      { employee: "S. Roshdy", action: "Sichtkontrolle", at: "Gestern · 18:03" },
    ],
  },
  foyer: {
    id: "foyer",
    name: "Foyer",
    status: "clean",
    lastClean: "Heute · 07:24",
    lastCleanBy: "M. Weber",
    nextScheduled: "Heute · 13:00",
    events: [
      { employee: "M. Weber", action: "Unterhaltsreinigung + Bodenpflege", at: "Heute · 07:24" },
      { employee: "T. Nguyen", action: "Mülleimer geleert", at: "Gestern · 21:11" },
    ],
  },
  wc_damen_eg: {
    id: "wc_damen_eg",
    name: "WC Damen",
    suffix: "EG",
    status: "progress",
    lastClean: "Gestern · 20:40",
    lastCleanBy: "T. Nguyen",
    nextScheduled: "Heute · 08:50",
    events: [
      { employee: "S. Roshdy", action: "Reinigung gestartet", at: "Heute · 08:38" },
      { employee: "T. Nguyen", action: "Endreinigung", at: "Gestern · 20:40" },
    ],
  },
  wc_herren_eg: {
    id: "wc_herren_eg",
    name: "WC Herren",
    suffix: "EG",
    status: "failed",
    lastClean: "Gestern · 20:52",
    lastCleanBy: "T. Nguyen",
    nextScheduled: "Heute · 09:15",
    openTasks: 1,
    taskTitle: "Sofortreinigung erforderlich · Meldung Hausmeister",
    taskPriority: "hoch",
    events: [
      { employee: "System", action: "Meldung eingegangen · Foto beigefügt", at: "Heute · 08:42" },
      { employee: "T. Nguyen", action: "Endreinigung", at: "Gestern · 20:52" },
    ],
  },
  wc_damen_low: {
    id: "wc_damen_low",
    name: "WC Damen",
    status: "pending",
    lastClean: "Gestern · 21:04",
    lastCleanBy: "T. Nguyen",
    nextScheduled: "Heute · 09:30",
    events: [
      { employee: "T. Nguyen", action: "Endreinigung abgeschlossen", at: "Gestern · 21:04" },
    ],
  },
  wc_herren_low: {
    id: "wc_herren_low",
    name: "WC Herren",
    status: "pending",
    lastClean: "Gestern · 21:12",
    lastCleanBy: "T. Nguyen",
    nextScheduled: "Heute · 09:35",
    events: [
      { employee: "T. Nguyen", action: "Endreinigung abgeschlossen", at: "Gestern · 21:12" },
    ],
  },
  cafeteria: {
    id: "cafeteria",
    name: "Cafeteria",
    status: "clean",
    lastClean: "Heute · 06:42",
    lastCleanBy: "M. Al-Karim",
    nextScheduled: "Heute · 15:00",
    events: [
      { employee: "M. Al-Karim", action: "Grundreinigung + Bodenpflege", at: "Heute · 06:42" },
      { employee: "S. Roshdy", action: "Zwischenreinigung", at: "Gestern · 14:20" },
    ],
  },
  cafeteria_kueche: {
    id: "cafeteria_kueche",
    name: "Cafeteria Küche",
    status: "clean",
    lastClean: "Heute · 06:20",
    lastCleanBy: "M. Al-Karim",
    nextScheduled: "Heute · 15:15",
    events: [
      { employee: "M. Al-Karim", action: "Reinigung + Freigabe Küche", at: "Heute · 06:20" },
      { employee: "System", action: "Messwert: Konzentration 2,1 %", at: "Heute · 06:22" },
    ],
  },
};

const rooms1OG: Record<RoomKey, Room> = {
  empfang: {
    id: "empfang",
    name: "Servicebereich",
    status: "clean",
    lastClean: "Heute · 07:05",
    lastCleanBy: "M. Weber",
    events: [{ employee: "M. Weber", action: "Sichtreinigung", at: "Heute · 07:05" }],
  },
  foyer: {
    id: "foyer",
    name: "Wartezone",
    status: "clean",
    lastClean: "Heute · 07:32",
    lastCleanBy: "M. Weber",
    events: [{ employee: "M. Weber", action: "Bodenpflege", at: "Heute · 07:32" }],
  },
  wc_damen_eg: {
    id: "wc_damen_eg",
    name: "WC Damen",
    suffix: "1. OG",
    status: "clean",
    lastClean: "Heute · 08:14",
    lastCleanBy: "T. Nguyen",
    events: [{ employee: "T. Nguyen", action: "Reinigung + Nachbestückung", at: "Heute · 08:14" }],
  },
  wc_herren_eg: {
    id: "wc_herren_eg",
    name: "WC Herren",
    suffix: "1. OG",
    status: "failed",
    lastClean: "Heute · 08:16",
    lastCleanBy: "T. Nguyen",
    openTasks: 1,
    taskTitle: "Papierspender defekt · Nachbestellung ausgelöst",
    taskPriority: "mittel",
    events: [
      { employee: "System", action: "Defektmeldung Papierspender", at: "Heute · 09:05" },
      { employee: "T. Nguyen", action: "Reinigung abgeschlossen", at: "Heute · 08:16" },
    ],
  },
  wc_damen_low: {
    id: "wc_damen_low",
    name: "Teeküche",
    status: "clean",
    lastClean: "Heute · 07:44",
    lastCleanBy: "S. Roshdy",
    events: [{ employee: "S. Roshdy", action: "Oberflächen + Spüle", at: "Heute · 07:44" }],
  },
  wc_herren_low: {
    id: "wc_herren_low",
    name: "Kopierraum",
    status: "pending",
    lastClean: "Gestern · 20:00",
    lastCleanBy: "T. Nguyen",
    events: [{ employee: "T. Nguyen", action: "Grundreinigung", at: "Gestern · 20:00" }],
  },
  cafeteria: {
    id: "cafeteria",
    name: "Großraumbüro Nord",
    status: "clean",
    lastClean: "Heute · 06:58",
    lastCleanBy: "M. Al-Karim",
    events: [{ employee: "M. Al-Karim", action: "Unterhaltsreinigung", at: "Heute · 06:58" }],
  },
  cafeteria_kueche: {
    id: "cafeteria_kueche",
    name: "Serverraum",
    status: "clean",
    lastClean: "Gestern · 22:10",
    lastCleanBy: "M. Al-Karim",
    events: [{ employee: "M. Al-Karim", action: "Trockenreinigung", at: "Gestern · 22:10" }],
  },
};

const rooms2OG: Record<RoomKey, Room> = {
  empfang: {
    id: "empfang",
    name: "Vorzimmer",
    status: "clean",
    lastClean: "Heute · 07:08",
    lastCleanBy: "M. Weber",
    events: [{ employee: "M. Weber", action: "Sichtreinigung", at: "Heute · 07:08" }],
  },
  foyer: {
    id: "foyer",
    name: "Konferenz Nord",
    status: "clean",
    lastClean: "Heute · 07:22",
    lastCleanBy: "M. Weber",
    events: [{ employee: "M. Weber", action: "Konferenzraum-Reinigung", at: "Heute · 07:22" }],
  },
  wc_damen_eg: {
    id: "wc_damen_eg",
    name: "WC Damen",
    suffix: "2. OG",
    status: "clean",
    lastClean: "Heute · 08:20",
    lastCleanBy: "T. Nguyen",
    events: [{ employee: "T. Nguyen", action: "Reinigung", at: "Heute · 08:20" }],
  },
  wc_herren_eg: {
    id: "wc_herren_eg",
    name: "WC Herren",
    suffix: "2. OG",
    status: "clean",
    lastClean: "Heute · 08:22",
    lastCleanBy: "T. Nguyen",
    events: [{ employee: "T. Nguyen", action: "Reinigung", at: "Heute · 08:22" }],
  },
  wc_damen_low: {
    id: "wc_damen_low",
    name: "Konferenz Süd",
    status: "pending",
    lastClean: "Gestern · 19:40",
    lastCleanBy: "M. Weber",
    events: [{ employee: "M. Weber", action: "Bestuhlung + Reinigung", at: "Gestern · 19:40" }],
  },
  wc_herren_low: {
    id: "wc_herren_low",
    name: "Loungebereich",
    status: "clean",
    lastClean: "Heute · 07:50",
    lastCleanBy: "M. Weber",
    events: [{ employee: "M. Weber", action: "Unterhaltsreinigung", at: "Heute · 07:50" }],
  },
  cafeteria: {
    id: "cafeteria",
    name: "Großraumbüro Ost",
    status: "clean",
    lastClean: "Heute · 06:55",
    lastCleanBy: "M. Al-Karim",
    events: [{ employee: "M. Al-Karim", action: "Bodenpflege", at: "Heute · 06:55" }],
  },
  cafeteria_kueche: {
    id: "cafeteria_kueche",
    name: "Archiv",
    status: "pending",
    lastClean: "Vor 3 Tagen",
    lastCleanBy: "M. Al-Karim",
    events: [{ employee: "M. Al-Karim", action: "Wochenreinigung", at: "Vor 3 Tagen" }],
  },
};

const rooms3OG: Record<RoomKey, Room> = {
  empfang: {
    id: "empfang",
    name: "Empfang GF",
    status: "clean",
    lastClean: "Heute · 06:48",
    lastCleanBy: "M. Weber",
    events: [{ employee: "M. Weber", action: "Detailreinigung", at: "Heute · 06:48" }],
  },
  foyer: {
    id: "foyer",
    name: "Aufenthalt GF",
    status: "clean",
    lastClean: "Heute · 07:02",
    lastCleanBy: "M. Weber",
    events: [{ employee: "M. Weber", action: "Reinigung + Pflanzenpflege", at: "Heute · 07:02" }],
  },
  wc_damen_eg: {
    id: "wc_damen_eg",
    name: "WC Damen",
    suffix: "3. OG",
    status: "progress",
    lastClean: "Gestern · 19:14",
    lastCleanBy: "T. Nguyen",
    events: [
      { employee: "S. Roshdy", action: "Reinigung gestartet", at: "Heute · 08:45" },
      { employee: "T. Nguyen", action: "Endreinigung", at: "Gestern · 19:14" },
    ],
  },
  wc_herren_eg: {
    id: "wc_herren_eg",
    name: "WC Herren",
    suffix: "3. OG",
    status: "clean",
    lastClean: "Heute · 08:04",
    lastCleanBy: "T. Nguyen",
    events: [{ employee: "T. Nguyen", action: "Reinigung", at: "Heute · 08:04" }],
  },
  wc_damen_low: {
    id: "wc_damen_low",
    name: "Sitzungssaal",
    status: "pending",
    lastClean: "Gestern · 18:00",
    lastCleanBy: "M. Weber",
    events: [{ employee: "M. Weber", action: "Vorbereitung Sitzung", at: "Gestern · 18:00" }],
  },
  wc_herren_low: {
    id: "wc_herren_low",
    name: "Vorstandsbereich",
    status: "clean",
    lastClean: "Heute · 07:15",
    lastCleanBy: "M. Weber",
    events: [{ employee: "M. Weber", action: "Detailreinigung", at: "Heute · 07:15" }],
  },
  cafeteria: {
    id: "cafeteria",
    name: "Bibliothek",
    status: "clean",
    lastClean: "Heute · 06:36",
    lastCleanBy: "M. Al-Karim",
    events: [{ employee: "M. Al-Karim", action: "Trockenreinigung", at: "Heute · 06:36" }],
  },
  cafeteria_kueche: {
    id: "cafeteria_kueche",
    name: "Küche GF",
    status: "clean",
    lastClean: "Heute · 06:15",
    lastCleanBy: "M. Al-Karim",
    events: [{ employee: "M. Al-Karim", action: "Küchenreinigung + Freigabe", at: "Heute · 06:15" }],
  },
};

const roomsUG: Record<RoomKey, Room> = {
  empfang: {
    id: "empfang",
    name: "Portierloge",
    status: "clean",
    lastClean: "Heute · 05:40",
    lastCleanBy: "M. Weber",
    events: [{ employee: "M. Weber", action: "Sichtreinigung", at: "Heute · 05:40" }],
  },
  foyer: {
    id: "foyer",
    name: "Tiefgarage Zone A",
    status: "pending",
    lastClean: "Vor 2 Tagen",
    lastCleanBy: "M. Al-Karim",
    events: [{ employee: "M. Al-Karim", action: "Kehrmaschine", at: "Vor 2 Tagen" }],
  },
  wc_damen_eg: {
    id: "wc_damen_eg",
    name: "Personal-Umkleide D",
    status: "clean",
    lastClean: "Heute · 06:00",
    lastCleanBy: "T. Nguyen",
    events: [{ employee: "T. Nguyen", action: "Reinigung + Nachbestückung", at: "Heute · 06:00" }],
  },
  wc_herren_eg: {
    id: "wc_herren_eg",
    name: "Personal-Umkleide H",
    status: "clean",
    lastClean: "Heute · 06:04",
    lastCleanBy: "T. Nguyen",
    events: [{ employee: "T. Nguyen", action: "Reinigung + Nachbestückung", at: "Heute · 06:04" }],
  },
  wc_damen_low: {
    id: "wc_damen_low",
    name: "Technikraum",
    status: "pending",
    lastClean: "Vor 5 Tagen",
    lastCleanBy: "M. Al-Karim",
    events: [{ employee: "M. Al-Karim", action: "Trockenreinigung", at: "Vor 5 Tagen" }],
  },
  wc_herren_low: {
    id: "wc_herren_low",
    name: "Lagerraum",
    status: "pending",
    lastClean: "Vor 4 Tagen",
    lastCleanBy: "M. Al-Karim",
    events: [{ employee: "M. Al-Karim", action: "Grundreinigung", at: "Vor 4 Tagen" }],
  },
  cafeteria: {
    id: "cafeteria",
    name: "Fahrradkeller",
    status: "clean",
    lastClean: "Heute · 05:55",
    lastCleanBy: "M. Al-Karim",
    events: [{ employee: "M. Al-Karim", action: "Kehrreinigung", at: "Heute · 05:55" }],
  },
  cafeteria_kueche: {
    id: "cafeteria_kueche",
    name: "Müllraum",
    status: "clean",
    lastClean: "Heute · 05:30",
    lastCleanBy: "M. Al-Karim",
    events: [{ employee: "M. Al-Karim", action: "Desinfektion + Leerung", at: "Heute · 05:30" }],
  },
};

function summary(rooms: Record<RoomKey, Room>) {
  const list = Object.values(rooms);
  const total = list.length;
  const done = list.filter((r) => r.status === "clean").length;
  const activeCount = list.filter((r) => r.status === "progress").length;
  const openTasks = list.reduce((sum, r) => sum + (r.openTasks ?? 0), 0);
  return { total, done, activeCount, openTasks };
}

export const FLOORS: Floor[] = [
  { id: "3og", label: "3. OG", short: "3", rooms: rooms3OG, ...summary(rooms3OG) },
  { id: "2og", label: "2. OG", short: "2", rooms: rooms2OG, ...summary(rooms2OG) },
  { id: "1og", label: "1. OG", short: "1", rooms: rooms1OG, ...summary(rooms1OG) },
  { id: "eg",  label: "EG",    short: "E", rooms: roomsEG,  ...summary(roomsEG)  },
  { id: "ug",  label: "UG",    short: "U", rooms: roomsUG,  ...summary(roomsUG)  },
];

export const STATUS_META: Record<CleaningStatus, { label: string; hint: string; color: string; fill: string }> = {
  clean:    { label: "Gereinigt",         hint: "Erledigt",         color: "#22C55E", fill: "rgba(34,197,94,0.18)"  },
  progress: { label: "In Bearbeitung",    hint: "Läuft gerade",     color: "#F59E0B", fill: "rgba(245,158,11,0.20)" },
  failed:   { label: "Nicht durchgeführt",hint: "Offene Aufgabe",   color: "#F43F5E", fill: "rgba(244,63,94,0.18)"  },
  pending:  { label: "Steht noch an",     hint: "Geplant",          color: "#8A8F98", fill: "rgba(255,255,255,0)"   },
};
