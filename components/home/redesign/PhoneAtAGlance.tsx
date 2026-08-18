"use client";

import { motion } from "motion/react";
import { springs } from "./motion";

type Row = { label: string; value: string; tone: "ok" | "warn" | "info" };

const ROWS: Row[] = [
  { label: "Teams im Einsatz", value: "12 aktiv · alle in Zeit", tone: "ok" },
  { label: "Marge diesen Monat", value: "+5,4 % über Ziel", tone: "ok" },
  { label: "Postfach", value: "beantwortet · 3 Anfragen bewertet", tone: "info" },
  { label: "Ausschreibungen", value: "2 passende · vorbewertet", tone: "info" },
];

/**
 * Phone-shaped glass surface showing a "everything green" dashboard.
 * Purely presentational — used inside AufEinenBlick section.
 */
export default function PhoneAtAGlance() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: -2 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={springs.soft}
      style={{
        width: "min(320px, 82vw)",
        aspectRatio: "9 / 19",
        borderRadius: "44px",
        padding: "10px",
        background: "linear-gradient(160deg, #1e293b 0%, #0f172a 60%, #020617 100%)",
        boxShadow:
          "0 40px 90px -30px rgba(15, 23, 42, 0.55), 0 8px 24px -8px rgba(15, 23, 42, 0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "36px",
          background: "linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%)",
          padding: "22px 18px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Status bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "13px",
            color: "#0f172a",
            fontWeight: 600,
            opacity: 0.7,
          }}
        >
          <span>9:41</span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "11px",
              padding: "3px 8px",
              borderRadius: "999px",
              background: "rgba(16, 185, 129, 0.12)",
              color: "#047857",
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

        <div>
          <div className="tk-eyebrow" style={{ color: "#64748b" }}>
            Heute
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#0b1220",
              marginTop: "2px",
            }}
          >
            alles im grünen Bereich
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
          {ROWS.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ ...springs.base, delay: 0.1 + i * 0.08 }}
              style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(15, 23, 42, 0.06)",
                borderRadius: "14px",
                padding: "10px 12px",
                display: "flex",
                flexDirection: "column",
                gap: "3px",
                boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#64748b",
                }}
              >
                {row.label}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color:
                    row.tone === "ok"
                      ? "#047857"
                      : row.tone === "warn"
                        ? "#b45309"
                        : "#0f172a",
                }}
              >
                {row.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Home indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "88px",
            height: "4px",
            borderRadius: "999px",
            background: "rgba(15, 23, 42, 0.35)",
          }}
        />
      </div>
    </motion.div>
  );
}
