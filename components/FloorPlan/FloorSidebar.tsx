"use client";

import type { Floor, FloorKey } from "@/lib/data/floorplan";

export function FloorSidebar({
  floors,
  activeId,
  onSelect,
}: {
  floors: Floor[];
  activeId: FloorKey;
  onSelect: (id: FloorKey) => void;
}) {
  return (
    <aside
      className="rounded-[20px] bg-white border border-[color:var(--fp-border)] p-3.5 flex flex-col gap-1.5 w-full"
      style={{ boxShadow: "0 1px 2px rgba(15,23,42,0.03), 0 12px 40px -22px rgba(15,23,42,0.18)" }}
    >
      <header className="flex items-center gap-2 px-3 pt-2 pb-3">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
          <rect x="2.5" y="4" width="11" height="9" rx="1" stroke="#8A8F98" strokeWidth="1.2" />
          <line x1="2.5" y1="7.5" x2="13.5" y2="7.5" stroke="#8A8F98" strokeWidth="1.2" />
          <line x1="2.5" y1="10.5" x2="13.5" y2="10.5" stroke="#8A8F98" strokeWidth="1.2" />
        </svg>
        <span className="text-[11px] font-semibold tracking-[0.14em] text-[#8A8F98] uppercase">
          Stockwerke
        </span>
      </header>

      <ul className="flex flex-col gap-1">
        {floors.map((floor) => {
          const isActive = floor.id === activeId;
          return (
            <li key={floor.id}>
              <button
                type="button"
                onClick={() => onSelect(floor.id)}
                className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
                  isActive
                    ? "bg-[color:var(--fp-blue-soft)]"
                    : "hover:bg-[#F5F6F8]"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {isActive ? (
                  <span
                    aria-hidden
                    className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r-full bg-[color:var(--fp-blue)]"
                  />
                ) : null}

                <span
                  className={`grid place-items-center h-11 w-11 rounded-full text-[15px] font-semibold shrink-0 transition-colors ${
                    isActive
                      ? "bg-[color:var(--fp-blue)] text-white"
                      : "bg-[#F1F3F5] text-[#4B5563]"
                  }`}
                >
                  {floor.short}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-[15px] font-semibold ${isActive ? "text-[#0F1116]" : "text-[#202124]"}`}>
                      {floor.label}
                    </span>
                    {floor.openTasks > 0 ? (
                      <span
                        className="grid place-items-center h-5 min-w-5 px-1 rounded-full bg-[color:var(--fp-red)] text-white text-[10.5px] font-semibold"
                        aria-label={`${floor.openTasks} offene Aufgabe`}
                      >
                        {floor.openTasks}
                      </span>
                    ) : null}
                  </div>
                  <div className="text-[12px] text-[#8A8F98] mt-0.5 flex items-center gap-2">
                    <span>{floor.done}/{floor.total}</span>
                    {floor.activeCount > 0 ? (
                      <span className="flex items-center gap-1 text-[#B45309]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--fp-orange)]" />
                        {floor.activeCount} aktiv
                      </span>
                    ) : null}
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
