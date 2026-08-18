"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { springs } from "./motion";

type Status = "done" | "active" | "open";
type Room = { name: string; status: Status };

const FLOORS: { label: string; rooms: Room[] }[] = [
  {
    label: "EG",
    rooms: [
      { name: "Lobby", status: "done" },
      { name: "Empfang", status: "done" },
      { name: "Büro 1", status: "active" },
      { name: "Sanitär", status: "open" },
      { name: "Konferenz", status: "done" },
      { name: "Flur", status: "active" },
    ],
  },
  {
    label: "1. OG",
    rooms: [
      { name: "Open Office", status: "done" },
      { name: "Büro 2", status: "active" },
      { name: "Meeting", status: "open" },
      { name: "Phone 1", status: "done" },
      { name: "Küche", status: "active" },
      { name: "Flur", status: "open" },
    ],
  },
  {
    label: "2. OG",
    rooms: [
      { name: "Büro 3", status: "active" },
      { name: "Lounge", status: "done" },
      { name: "Phone 2", status: "open" },
      { name: "Sanitär", status: "done" },
      { name: "Flur", status: "active" },
      { name: "Konferenz", status: "open" },
    ],
  },
];

const STATUS_STYLE: Record<Status, { bg: string; color: string; dot: string; label: string }> = {
  done:   { bg: "rgba(16, 185, 129, 0.14)", color: "#047857", dot: "#10b981", label: "Erledigt" },
  active: { bg: "rgba(37, 99, 235, 0.14)",  color: "#1d4ed8", dot: "#2563eb", label: "In Arbeit" },
  open:   { bg: "rgba(148, 163, 184, 0.20)", color: "#475569", dot: "#94a3b8", label: "Offen" },
};

/**
 * Interactive-looking demo of the Auftraggeber-Portal.
 * Non-functional beyond the floor tab switch — this is a marketing preview.
 */
export default function PortalDemo() {
  const [floorIdx, setFloorIdx] = useState(0);
  const floor = FLOORS[floorIdx];

  return (
    <div
      style={{
        borderRadius: "var(--tk-radius-shell)",
        padding: "clamp(20px, 3vw, 32px)",
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.92) 0%, rgba(238, 242, 247, 0.9) 100%)",
        border: "1px solid rgba(15, 23, 42, 0.06)",
        boxShadow: "0 40px 100px -40px rgba(15,23,42,0.35)",
      }}
    >
      {/* header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "18px",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "3px 10px",
              borderRadius: "999px",
              background: "rgba(37, 99, 235, 0.12)",
              color: "var(--tk-accent-strong)",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Demo
          </span>
          <div
            style={{
              marginTop: "8px",
              fontSize: "clamp(18px, 2.4vw, 22px)",
              fontWeight: 600,
              color: "var(--tk-ink)",
              letterSpacing: "-0.01em",
            }}
          >
            Bürogebäude Müller GmbH · Live-Übersicht
          </div>
        </div>
        <button
          type="button"
          style={{
            padding: "10px 16px",
            borderRadius: "999px",
            background: "var(--tk-accent)",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
          }}
        >
          Ticket erstellen
        </button>
      </div>

      {/* legend */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "18px" }}>
        {(Object.keys(STATUS_STYLE) as Status[]).map((s) => (
          <div
            key={s}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "var(--tk-ink-muted)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                background: STATUS_STYLE[s].dot,
              }}
            />
            {STATUS_STYLE[s].label}
          </div>
        ))}
      </div>

      {/* floor selector */}
      <div
        style={{
          display: "inline-flex",
          padding: "4px",
          borderRadius: "999px",
          background: "rgba(15, 23, 42, 0.05)",
          marginBottom: "20px",
          gap: "2px",
        }}
      >
        <span
          className="tk-eyebrow"
          style={{
            padding: "0 12px",
            display: "inline-flex",
            alignItems: "center",
            color: "var(--tk-ink-muted)",
          }}
        >
          Stockwerk
        </span>
        {FLOORS.map((f, i) => (
          <button
            key={f.label}
            type="button"
            onClick={() => setFloorIdx(i)}
            style={{
              position: "relative",
              padding: "8px 16px",
              borderRadius: "999px",
              border: "none",
              background: "transparent",
              color: i === floorIdx ? "#fff" : "var(--tk-ink)",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              zIndex: 1,
            }}
          >
            {i === floorIdx && (
              <motion.span
                layoutId="floorPill"
                transition={springs.snappy}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "999px",
                  background: "var(--tk-ink)",
                  zIndex: -1,
                }}
              />
            )}
            {f.label}
          </button>
        ))}
      </div>

      {/* room grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-3"
        key={floor.label}
      >
        {floor.rooms.map((room, i) => (
          <motion.div
            key={`${floor.label}-${room.name}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springs.snappy, delay: i * 0.04 }}
            style={{
              padding: "14px 16px",
              borderRadius: "var(--tk-radius-card)",
              background: STATUS_STYLE[room.status].bg,
              color: STATUS_STYLE[room.status].color,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                background: STATUS_STYLE[room.status].dot,
              }}
            />
            {room.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
