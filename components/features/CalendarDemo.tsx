"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Interaktive Kalender-Demo für die Features-Seite.
 * Wochen-Grid: 5 Werktage × 4 Objekte. Klick auf Slot weist aktiven Mitarbeiter zu
 * (oder entfernt Zuweisung). Konflikte (derselbe Mitarbeiter gleichzeitig belegt)
 * werden rot markiert. Live-Stats unten: freie Slots, Auslastung, Konflikte.
 */

type Lang = "de" | "en" | "fr";

type Employee = { id: string; short: string; name: string; color: string };
type Property = { id: string; name: string; sub: string };
type SlotKey = `${string}_${string}`; // "objId_dayId"

type Copy = {
  chip: string;
  title: string;
  intro: string;
  daysLong: [string, string, string, string, string];
  daysShort: [string, string, string, string, string];
  slotEmpty: string;
  employeesLabel: string;
  hint: string;
  legendActive: string;
  legendConflict: string;
  legendFree: string;
  statFree: string;
  statAssigned: string;
  statConflict: string;
  reset: string;
  clickHint: string;
  properties: Property[];
  employees: Employee[];
  presets: Record<SlotKey, string>; // pre-populated assignments (employee id)
};

const EMPLOYEE_COLORS = {
  anna: "#6366f1",
  mehmet: "#0ea5e9",
  daniel: "#f59e0b",
  klara: "#ec4899",
};

const DE_COPY: Copy = {
  chip: "Wochenplaner · interaktiv",
  title: "Wählen Sie einen Mitarbeiter, klicken Sie in den Plan.",
  intro:
    "Vier Objekte, fünf Werktage. Wählen Sie einen Mitarbeiter oben und klicken Sie in einen Slot, um ihn dort einzusetzen. Nochmal klicken macht ihn frei. Konflikte (derselbe Kopf zweimal am selben Tag) werden rot markiert — genau wie in Taskey.",
  daysLong: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"],
  daysShort: ["Mo", "Di", "Mi", "Do", "Fr"],
  slotEmpty: "Frei",
  employeesLabel: "Team",
  hint: "Beispiel-Werte, keine Kunden-Daten.",
  legendActive: "Zugewiesen",
  legendConflict: "Konflikt",
  legendFree: "Frei",
  statFree: "Freie Slots",
  statAssigned: "Auslastung",
  statConflict: "Konflikte",
  reset: "Zurücksetzen",
  clickHint: "Klicken Sie in einen Slot, um den ausgewählten Mitarbeiter einzusetzen — oder ihn dort wieder zu entfernen.",
  properties: [
    { id: "kaiserstr", name: "Bürohaus Kaiserstraße 12", sub: "Unterhaltsreinigung · 2× pro Woche" },
    { id: "lindenhof", name: "Wohnanlage Lindenhof", sub: "Treppenhaus · täglich" },
    { id: "kraus", name: "Praxis Dr. Kraus", sub: "Sonderreinigung · Do" },
    { id: "sonnenfeld", name: "Wohnpark Sonnenfeld", sub: "Winterdienst · nach Bedarf" },
  ],
  employees: [
    { id: "anna", short: "A", name: "Anna", color: EMPLOYEE_COLORS.anna },
    { id: "mehmet", short: "M", name: "Mehmet", color: EMPLOYEE_COLORS.mehmet },
    { id: "daniel", short: "D", name: "Daniel", color: EMPLOYEE_COLORS.daniel },
    { id: "klara", short: "K", name: "Klara", color: EMPLOYEE_COLORS.klara },
  ],
  presets: {
    kaiserstr_0: "anna",
    kaiserstr_2: "mehmet",
    lindenhof_0: "daniel",
    lindenhof_1: "daniel",
    lindenhof_2: "daniel",
    lindenhof_3: "daniel",
    lindenhof_4: "daniel",
    kraus_3: "klara",
    sonnenfeld_1: "mehmet",
  },
};

const EN_COPY: Copy = {
  chip: "Weekly planner · interactive",
  title: "Pick an employee, click into the plan.",
  intro:
    "Four sites, five working days. Pick an employee above and click a slot to assign them. Click again to remove. Conflicts (the same person twice on the same day) are marked red — just like in Taskey.",
  daysLong: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  daysShort: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  slotEmpty: "Free",
  employeesLabel: "Team",
  hint: "Sample values, no customer data.",
  legendActive: "Assigned",
  legendConflict: "Conflict",
  legendFree: "Free",
  statFree: "Free slots",
  statAssigned: "Load",
  statConflict: "Conflicts",
  reset: "Reset",
  clickHint: "Click a slot to assign the selected employee — or to remove them.",
  properties: [
    { id: "kaiserstr", name: "Office Kaiserstraße 12", sub: "General cleaning · 2× per week" },
    { id: "lindenhof", name: "Residential Lindenhof", sub: "Staircase · daily" },
    { id: "kraus", name: "Dr. Kraus practice", sub: "Special cleaning · Thu" },
    { id: "sonnenfeld", name: "Sonnenfeld residential park", sub: "Winter service · on demand" },
  ],
  employees: [
    { id: "anna", short: "A", name: "Anna", color: EMPLOYEE_COLORS.anna },
    { id: "mehmet", short: "M", name: "Mehmet", color: EMPLOYEE_COLORS.mehmet },
    { id: "daniel", short: "D", name: "Daniel", color: EMPLOYEE_COLORS.daniel },
    { id: "klara", short: "K", name: "Klara", color: EMPLOYEE_COLORS.klara },
  ],
  presets: {
    kaiserstr_0: "anna",
    kaiserstr_2: "mehmet",
    lindenhof_0: "daniel",
    lindenhof_1: "daniel",
    lindenhof_2: "daniel",
    lindenhof_3: "daniel",
    lindenhof_4: "daniel",
    kraus_3: "klara",
    sonnenfeld_1: "mehmet",
  },
};

const FR_COPY: Copy = {
  chip: "Planificateur hebdo · interactif",
  title: "Choisissez un employé, cliquez dans le plan.",
  intro:
    "Quatre sites, cinq jours ouvrés. Choisissez un employé en haut et cliquez sur un créneau pour l'y affecter. Un nouveau clic libère le créneau. Les conflits (la même personne deux fois le même jour) sont marqués en rouge — exactement comme dans Taskey.",
  daysLong: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
  daysShort: ["Lun", "Mar", "Mer", "Jeu", "Ven"],
  slotEmpty: "Libre",
  employeesLabel: "Équipe",
  hint: "Valeurs d'exemple, aucune donnée client.",
  legendActive: "Assigné",
  legendConflict: "Conflit",
  legendFree: "Libre",
  statFree: "Créneaux libres",
  statAssigned: "Charge",
  statConflict: "Conflits",
  reset: "Réinitialiser",
  clickHint: "Cliquez sur un créneau pour affecter l'employé sélectionné — ou pour le retirer.",
  properties: [
    { id: "kaiserstr", name: "Bureau Kaiserstraße 12", sub: "Nettoyage courant · 2× par semaine" },
    { id: "lindenhof", name: "Résidence Lindenhof", sub: "Cage d'escalier · tous les jours" },
    { id: "kraus", name: "Cabinet Dr. Kraus", sub: "Nettoyage spécial · Jeu" },
    { id: "sonnenfeld", name: "Parc résidentiel Sonnenfeld", sub: "Service hivernal · à la demande" },
  ],
  employees: [
    { id: "anna", short: "A", name: "Anna", color: EMPLOYEE_COLORS.anna },
    { id: "mehmet", short: "M", name: "Mehmet", color: EMPLOYEE_COLORS.mehmet },
    { id: "daniel", short: "D", name: "Daniel", color: EMPLOYEE_COLORS.daniel },
    { id: "klara", short: "K", name: "Klara", color: EMPLOYEE_COLORS.klara },
  ],
  presets: {
    kaiserstr_0: "anna",
    kaiserstr_2: "mehmet",
    lindenhof_0: "daniel",
    lindenhof_1: "daniel",
    lindenhof_2: "daniel",
    lindenhof_3: "daniel",
    lindenhof_4: "daniel",
    kraus_3: "klara",
    sonnenfeld_1: "mehmet",
  },
};

const COPY_BY_LANG: Record<Lang, Copy> = { de: DE_COPY, en: EN_COPY, fr: FR_COPY };

export default function CalendarDemo() {
  const { language } = useLanguage();
  const lang = (language ?? "de") as Lang;
  const t = COPY_BY_LANG[lang];

  const [assignments, setAssignments] = useState<Record<SlotKey, string>>({ ...t.presets });
  const [activeEmployee, setActiveEmployee] = useState<string>(t.employees[0].id);

  const conflicts = useMemo(() => {
    const byDayEmp: Record<string, number> = {};
    for (const key of Object.keys(assignments) as SlotKey[]) {
      const empId = assignments[key];
      const dayId = key.split("_")[1];
      const k = `${dayId}_${empId}`;
      byDayEmp[k] = (byDayEmp[k] ?? 0) + 1;
    }
    const conflictKeys = new Set<SlotKey>();
    for (const key of Object.keys(assignments) as SlotKey[]) {
      const empId = assignments[key];
      const dayId = key.split("_")[1];
      const k = `${dayId}_${empId}`;
      if (byDayEmp[k] > 1) conflictKeys.add(key);
    }
    return conflictKeys;
  }, [assignments]);

  const totalSlots = t.properties.length * 5;
  const assignedSlots = Object.keys(assignments).length;
  const freeSlots = totalSlots - assignedSlots;
  const loadPercent = Math.round((assignedSlots / totalSlots) * 100);
  const conflictCount = conflicts.size;

  const handleSlotClick = (propertyId: string, dayIndex: number) => {
    const key = `${propertyId}_${dayIndex}` as SlotKey;
    setAssignments((prev) => {
      const next = { ...prev };
      if (next[key] === activeEmployee) {
        delete next[key];
      } else {
        next[key] = activeEmployee;
      }
      return next;
    });
  };

  const resetAll = () => setAssignments({ ...t.presets });

  return (
    <div className="relative rounded-[28px] p-[1.5px] bg-gradient-to-br from-cyan-400/50 via-blue-500/30 to-purple-500/20 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
      <div className="relative rounded-[calc(28px-1.5px)] bg-white/95 backdrop-blur-md border border-blue-100 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 px-6 md:px-10 pt-8 md:pt-10 pb-6 border-b border-blue-100">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 border border-cyan-300 px-3 py-1 text-[10px] font-black tracking-[0.28em] uppercase text-blue-700 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              {t.chip}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
              {t.title}
            </h3>
            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
              {t.intro}
            </p>
          </div>
          <span className="text-[11px] font-mono text-slate-400 whitespace-nowrap">
            {t.hint}
          </span>
        </div>

        {/* Employee picker */}
        <div className="px-6 md:px-10 py-5 border-b border-blue-100 bg-slate-50/60">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[10px] font-black tracking-[0.28em] uppercase text-slate-500 mr-1">
                {t.employeesLabel}
              </span>
              {t.employees.map((emp) => {
                const isActive = activeEmployee === emp.id;
                return (
                  <button
                    key={emp.id}
                    type="button"
                    onClick={() => setActiveEmployee(emp.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold transition ${
                      isActive
                        ? "text-white shadow-md"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                    style={isActive ? { background: emp.color, borderColor: emp.color } : undefined}
                  >
                    <span
                      className={`grid place-items-center h-5 w-5 rounded-full text-[10px] font-black ${
                        isActive ? "bg-white/25 text-white" : "text-white"
                      }`}
                      style={isActive ? undefined : { background: emp.color }}
                    >
                      {emp.short}
                    </span>
                    {emp.name}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={resetAll}
              className="text-xs font-semibold text-slate-500 hover:text-blue-700 transition inline-flex items-center gap-1.5 self-start md:self-auto"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M9 3.5A3.5 3.5 0 1 0 10 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M9 1v2.5H6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.reset}
            </button>
          </div>
        </div>

        {/* Calendar grid */}
        <div className="px-3 md:px-6 py-6 overflow-x-auto">
          <div className="min-w-[720px] grid grid-cols-[200px_repeat(5,1fr)] gap-1.5">
            {/* Header row */}
            <div />
            {t.daysShort.map((d, i) => (
              <div key={d} className="text-center py-2">
                <p className="text-[10px] font-black tracking-[0.18em] uppercase text-slate-500">
                  {d}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">{t.daysLong[i]}</p>
              </div>
            ))}

            {/* Property rows */}
            {t.properties.map((prop) => (
              <ObjectRow
                key={prop.id}
                property={prop}
                dayCount={5}
                assignments={assignments}
                conflicts={conflicts}
                employees={t.employees}
                slotEmptyLabel={t.slotEmpty}
                onSlotClick={handleSlotClick}
                activeEmployee={activeEmployee}
              />
            ))}
          </div>
        </div>

        {/* Footer stats + hint */}
        <div className="px-6 md:px-10 py-5 border-t border-blue-100 bg-slate-50/60 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 justify-between">
          <div className="grid grid-cols-3 gap-3 md:gap-6 flex-1">
            <Stat label={t.statFree} value={String(freeSlots)} tone="neutral" />
            <Stat label={t.statAssigned} value={`${loadPercent}%`} tone="highlight" />
            <Stat
              label={t.statConflict}
              value={String(conflictCount)}
              tone={conflictCount > 0 ? "warn" : "good"}
            />
          </div>
          <p className="text-[12px] text-slate-500 leading-relaxed max-w-sm">{t.clickHint}</p>
        </div>
      </div>
    </div>
  );
}

function ObjectRow({
  property,
  dayCount,
  assignments,
  conflicts,
  employees,
  slotEmptyLabel,
  onSlotClick,
  activeEmployee,
}: {
  property: Property;
  dayCount: number;
  assignments: Record<SlotKey, string>;
  conflicts: Set<SlotKey>;
  employees: Employee[];
  slotEmptyLabel: string;
  onSlotClick: (propertyId: string, dayIndex: number) => void;
  activeEmployee: string;
}) {
  const empById = Object.fromEntries(employees.map((e) => [e.id, e]));
  return (
    <>
      <div className="px-3 py-3 flex flex-col justify-center bg-white rounded-lg border border-slate-200">
        <p className="text-[13px] font-black text-slate-900 leading-tight">{property.name}</p>
        <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{property.sub}</p>
      </div>
      {Array.from({ length: dayCount }).map((_, dayIdx) => {
        const key = `${property.id}_${dayIdx}` as SlotKey;
        const empId = assignments[key];
        const emp = empId ? empById[empId] : null;
        const isConflict = conflicts.has(key);
        const isActive = emp?.id === activeEmployee;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onSlotClick(property.id, dayIdx)}
            className={`relative h-[62px] rounded-lg border transition-all group text-left overflow-hidden ${
              emp
                ? isConflict
                  ? "border-rose-400 bg-rose-50 shadow-inner"
                  : "border-transparent shadow-sm"
                : "border-dashed border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300"
            }`}
            style={emp && !isConflict ? { background: `${emp.color}12`, borderColor: `${emp.color}40` } : undefined}
            aria-label={emp ? `${property.name}, ${emp.name}` : `${property.name}, ${slotEmptyLabel}`}
          >
            {emp ? (
              <div className="absolute inset-0 flex items-center gap-2 px-2.5">
                <span
                  className={`grid place-items-center h-7 w-7 rounded-full text-[11px] font-black text-white shrink-0 ${
                    isConflict ? "ring-2 ring-rose-500" : ""
                  } ${isActive ? "ring-2 ring-white ring-offset-1 ring-offset-slate-100" : ""}`}
                  style={{ background: emp.color }}
                >
                  {emp.short}
                </span>
                <div className="min-w-0 flex-1">
                  <p className={`text-[12px] font-bold leading-tight truncate ${isConflict ? "text-rose-800" : "text-slate-900"}`}>
                    {emp.name}
                  </p>
                  {isConflict ? (
                    <p className="text-[10px] font-semibold text-rose-700 uppercase tracking-wide">
                      ⚠ Konflikt
                    </p>
                  ) : null}
                </div>
              </div>
            ) : (
              <span className="absolute inset-0 flex items-center justify-center text-[11px] font-mono text-slate-300 group-hover:text-slate-500 transition">
                {slotEmptyLabel}
              </span>
            )}
          </button>
        );
      })}
    </>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "neutral" | "highlight" | "warn" | "good";
}) {
  const colorMap = {
    neutral: "text-slate-900",
    highlight: "text-blue-700",
    warn: "text-rose-700",
    good: "text-emerald-700",
  };
  return (
    <div className="flex flex-col">
      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">{label}</span>
      <span className={`text-2xl md:text-3xl font-black tabular-nums leading-tight ${colorMap[tone]}`}>
        {value}
      </span>
    </div>
  );
}
