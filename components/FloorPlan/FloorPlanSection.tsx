"use client";

import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FLOORS, type FloorKey, type RoomKey } from "@/lib/data/floorplan";
import { FloorSidebar } from "./FloorSidebar";
import { FloorSVG, ROOM_RECTS } from "./FloorSVG";
import { RoomTooltip } from "./RoomTooltip";
import { RoomDetail } from "./RoomDetail";
import { ZoomPill } from "./ZoomPill";
import { ViewToggle, type ViewMode } from "./ViewToggle";
import { MapView } from "./MapView";

const ZOOM_STOPS = [75, 100, 125, 150];

export function FloorPlanSection() {
  const [activeFloor, setActiveFloor] = useState<FloorKey>("eg");
  const [hoveredRoom, setHoveredRoom] = useState<RoomKey | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<RoomKey | null>(null);
  const [tipPos, setTipPos] = useState<{ x: number; y: number } | null>(null);
  const [zoom, setZoom] = useState(100);
  const [mode, setMode] = useState<ViewMode>("grundriss");

  const canvasRef = useRef<HTMLDivElement | null>(null);

  const floor = useMemo(
    () => FLOORS.find((f) => f.id === activeFloor)!,
    [activeFloor]
  );
  const hovered = hoveredRoom ? floor.rooms[hoveredRoom] : null;
  const selected = selectedRoom ? floor.rooms[selectedRoom] : null;

  const handleFloorSelect = (id: FloorKey) => {
    setActiveFloor(id);
    setHoveredRoom(null);
    setSelectedRoom(null);
  };

  const handleEnterRoom = (id: RoomKey) => {
    setHoveredRoom(id);
    if (!canvasRef.current) return;
    const rect = ROOM_RECTS[id];
    const wrap = canvasRef.current.getBoundingClientRect();
    // Convert SVG coordinates (viewBox 1400x620) into pixel coordinates
    const scaleX = wrap.width / 1400;
    const scaleY = wrap.height / 620;
    const x = (rect.x + rect.w / 2) * scaleX;
    const y = (rect.y + 8) * scaleY;
    setTipPos({ x, y });
  };

  const handleZoom = (delta: number) => {
    const idx = ZOOM_STOPS.indexOf(zoom);
    const next = idx >= 0 ? ZOOM_STOPS[Math.max(0, Math.min(ZOOM_STOPS.length - 1, idx + delta))] : 100;
    setZoom(next);
  };

  return (
    <section className="relative py-12 md:py-24" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 md:mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-[11px] font-semibold text-blue-700 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Live-Ansicht · Gebäude
          </span>
          <h2
            className="mt-4 font-black tracking-tight leading-[1.05] text-slate-900"
            style={{ fontSize: "clamp(1.6rem, 3.6vw, 2.8rem)" }}
          >
            Ein Klick auf jeden Raum. Ein Blick auf jede Leistung.
          </h2>
          <p className="mt-4 text-[0.98rem] md:text-[1rem] leading-[1.55] md:leading-[1.6] text-slate-500">
            Beispiel-Grundriss eines Verwaltungsgebäudes. Räume anklicken, Stockwerk wechseln, Aufgaben und Verlauf einsehen, grün heißt gereinigt, orange in Bearbeitung, rot offene Aufgabe, weiß steht noch an.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-[295px_1fr] gap-6 lg:gap-8">
          {/* Sidebar */}
          <FloorSidebar
            floors={FLOORS}
            activeId={activeFloor}
            onSelect={handleFloorSelect}
          />

          {/* Canvas */}
          <div className="flex flex-col gap-4">
            {/* Top-Bar: Legende links, Toggle rechts */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Legend />
              <ViewToggle mode={mode} onChange={setMode} />
            </div>

            {/* Äußerer Wrapper ohne overflow-hidden, der Tooltip darf über die
                Grundriss-Box hinausragen. Der innere Canvas kappt weiterhin den Zoom. */}
            <div className="relative">
              <div
                ref={canvasRef}
                className="relative rounded-[22px] bg-white border border-[color:var(--fp-border)] overflow-hidden"
                style={{
                  aspectRatio: "1400 / 620",
                  boxShadow: "0 1px 2px rgba(15,23,42,0.04), 0 20px 60px -28px rgba(15,23,42,0.28)",
                }}
                onMouseLeave={() => {
                  setHoveredRoom(null);
                  setTipPos(null);
                }}
              >
                <AnimatePresence mode="wait">
                  {mode === "grundriss" ? (
                    <motion.div
                      key={`plan-${activeFloor}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0"
                    >
                      <FloorSVG
                        rooms={floor.rooms}
                        activeRoom={hoveredRoom}
                        onEnterRoom={handleEnterRoom}
                        onLeaveRoom={() => {
                          setHoveredRoom(null);
                          setTipPos(null);
                        }}
                        onSelectRoom={(id) => setSelectedRoom(id)}
                        zoom={zoom}
                      />

                      {/* Detail-Panel (bleibt im Canvas) */}
                      <RoomDetail room={selected} onClose={() => setSelectedRoom(null)} />

                      {/* Zoom-Pill (nur Grundriss) */}
                      <div className="absolute top-4 right-4 z-20">
                        <ZoomPill
                          zoom={zoom}
                          onDec={() => handleZoom(-1)}
                          onInc={() => handleZoom(1)}
                          min={ZOOM_STOPS[0]}
                          max={ZOOM_STOPS[ZOOM_STOPS.length - 1]}
                        />
                      </div>

                      {/* Aktives Stockwerk oben links */}
                      <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-md border border-[color:var(--fp-border)] px-3 py-1.5 text-[12px] font-medium text-[#4B5563]" style={{ boxShadow: "0 2px 6px -1px rgba(15,23,42,0.06)" }}>
                        <span className="grid place-items-center h-5 w-5 rounded-full bg-[color:var(--fp-blue)] text-white text-[10.5px] font-semibold">
                          {floor.short}
                        </span>
                        {floor.label} · {floor.done}/{floor.total} erledigt
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="map"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0"
                    >
                      <MapView />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tooltip lebt außerhalb der overflow-hidden-Box, kann also
                  problemlos über den oberen Rand hinausragen. */}
              {mode === "grundriss" && hovered && tipPos ? (
                <div className="pointer-events-none absolute inset-0 z-30">
                  <RoomTooltip room={hovered} x={tipPos.x} y={tipPos.y} />
                </div>
              ) : null}
            </div>

            <p className="text-[12px] text-slate-500 flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--fp-red)]" />
              Beispieldaten · Alle Namen, Uhrzeiten und Räume sind erfunden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Legend() {
  const items = [
    { color: "#22C55E", label: "Gereinigt" },
    { color: "#F59E0B", label: "In Bearbeitung" },
    { color: "#F43F5E", label: "Offene Aufgabe" },
    { color: "#CBD2D9", label: "Steht noch an" },
  ];
  return (
    <div className="inline-flex flex-wrap items-center gap-4 rounded-full bg-white border border-[color:var(--fp-border)] px-4 py-2" style={{ boxShadow: "0 2px 6px -1px rgba(15,23,42,0.05)" }}>
      {items.map((i) => (
        <span key={i.label} className="inline-flex items-center gap-2 text-[12px] text-[#4B5563]">
          <span className="h-2 w-2 rounded-full" style={{ background: i.color }} />
          {i.label}
        </span>
      ))}
    </div>
  );
}
