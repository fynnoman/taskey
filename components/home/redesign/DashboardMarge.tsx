"use client";

import { motion } from "motion/react";
import { springs, staggerChild, staggerParent } from "./motion";

type Row = {
  name: string;
  sum: string;
  cost: string;
  progress: number;
  delta: string;
  deltaTone: "up" | "down";
  marginLabel: string;
  warning?: string;
};

const ROWS: Row[] = [
  {
    name: "Bürogebäude Müller GmbH",
    sum: "38.500 €",
    cost: "26.120 €",
    progress: 68,
    delta: "+12,4%",
    deltaTone: "up",
    marginLabel: "4.773 € Marge",
  },
  {
    name: "Treppenhaus Hausverwaltung Krause",
    sum: "22.000 €",
    cost: "9.350 €",
    progress: 45,
    delta: "+8,2%",
    deltaTone: "up",
    marginLabel: "1.804 € Marge",
  },
  {
    name: "Klinikreinigung Waldklinik",
    sum: "51.200 €",
    cost: "43.280 €",
    progress: 82,
    delta: "−3,1%",
    deltaTone: "down",
    marginLabel: "−1.587 € Verlust",
    warning: "Achtung: Personalkosten 18% über Plan",
  },
];

/**
 * Standalone dashboard mock for the "Live-Margen" section.
 * Pure presentation, animates in with stagger when visible.
 */
export default function DashboardMarge() {
  return (
    <div
      className="tk-glass-heavy"
      style={{
        borderRadius: "var(--tk-radius-shell)",
        padding: "clamp(20px, 3vw, 32px)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* KPI row */}
      <div
        className="grid grid-cols-3 gap-3 md:gap-4"
        style={{ marginBottom: "4px" }}
      >
        <KpiCard label="Gesamt-Marge" value="+9,8%" sub="Ø aus 3 Objekten" tone="ok" />
        <KpiCard label="Warnung" value="1 Objekt" sub="Personalkosten 18% ↑" tone="warn" />
        <KpiCard label="In Echtzeit" value="0,3 s" sub="Update-Latenz" tone="info" />
      </div>

      {/* Table header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          paddingTop: "8px",
          borderTop: "1px solid rgba(15, 23, 42, 0.06)",
        }}
      >
        <div>
          <div className="tk-eyebrow">Objekt-Übersicht</div>
          <div style={{ fontSize: "13px", color: "var(--tk-ink-muted)", marginTop: "2px" }}>
            3 aktive Verträge · heute 14:07 Uhr
          </div>
        </div>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "11px",
            padding: "4px 10px",
            borderRadius: "999px",
            background: "rgba(16, 185, 129, 0.12)",
            color: "#047857",
            fontWeight: 600,
            letterSpacing: "0.08em",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "999px",
              background: "#10b981",
              boxShadow: "0 0 0 4px rgba(16, 185, 129, 0.2)",
            }}
          />
          LIVE
        </span>
      </div>

      <motion.div
        {...staggerParent}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        {ROWS.map((row) => (
          <motion.div key={row.name} variants={staggerChild}>
            <ObjectRow row={row} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function KpiCard({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  tone: "ok" | "warn" | "info";
}) {
  const color = tone === "ok" ? "#047857" : tone === "warn" ? "#b45309" : "var(--tk-accent)";
  return (
    <div
      style={{
        borderRadius: "var(--tk-radius-card)",
        padding: "14px 16px",
        background: "rgba(255,255,255,0.55)",
        border: "1px solid rgba(15, 23, 42, 0.06)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
      }}
    >
      <div className="tk-eyebrow" style={{ color: "var(--tk-ink-muted)" }}>
        {label}
      </div>
      <div
        style={{
          marginTop: "6px",
          fontSize: "clamp(20px, 2.2vw, 26px)",
          fontWeight: 600,
          letterSpacing: "-0.01em",
          color,
        }}
      >
        {value}
      </div>
      <div style={{ marginTop: "2px", fontSize: "12px", color: "var(--tk-ink-muted)" }}>
        {sub}
      </div>
    </div>
  );
}

function ObjectRow({ row }: { row: Row }) {
  const good = row.deltaTone === "up";
  return (
    <div
      style={{
        borderRadius: "var(--tk-radius-card)",
        padding: "14px 16px",
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(15, 23, 42, 0.06)",
        boxShadow: "0 4px 18px -14px rgba(15,23,42,0.35)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "12px",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "var(--tk-ink)",
              letterSpacing: "-0.01em",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {row.name}
          </div>
          <div style={{ fontSize: "12px", color: "var(--tk-ink-muted)", marginTop: "2px" }}>
            Vertragssumme: {row.sum}
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "3px 8px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: 600,
              background: good ? "rgba(16, 185, 129, 0.12)" : "rgba(239, 68, 68, 0.12)",
              color: good ? "#047857" : "#b91c1c",
            }}
          >
            {row.delta}
          </span>
          <div
            style={{
              marginTop: "4px",
              fontSize: "13px",
              fontWeight: 600,
              color: good ? "#047857" : "#b91c1c",
            }}
          >
            {row.marginLabel}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "12px",
          color: "var(--tk-ink-muted)",
        }}
      >
        <span>Kosten: {row.cost}</span>
        <span>{row.progress}% abgeschlossen</span>
      </div>
      <div
        style={{
          marginTop: "6px",
          height: "6px",
          borderRadius: "999px",
          background: "rgba(15,23,42,0.06)",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${row.progress}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...springs.soft, delay: 0.1 }}
          style={{
            height: "100%",
            background: good
              ? "linear-gradient(90deg, #10b981, #34d399)"
              : "linear-gradient(90deg, #f97316, #ef4444)",
          }}
        />
      </div>

      {row.warning ? (
        <div
          style={{
            marginTop: "10px",
            fontSize: "12px",
            color: "#b45309",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span aria-hidden>▲</span>
          {row.warning}
        </div>
      ) : null}
    </div>
  );
}
