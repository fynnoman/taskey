"use client";

import { motion } from "motion/react";
import { springs, staggerChild, staggerParent } from "./motion";
import { useLanguage } from "@/context/LanguageContext";

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

type Copy = {
  totalMarginLabel: string;
  totalMarginSub: string;
  warningLabel: string;
  warningValue: string;
  warningSub: string;
  liveLabel: string;
  liveValue: string;
  liveSub: string;
  overviewEyebrow: string;
  overviewSub: string;
  contractSum: string;
  costLabel: string;
  progressSuffix: string;
  rows: Row[];
};

const CONTENT_BY_LANG: Record<"de" | "en" | "fr", Copy> = {
  de: {
    totalMarginLabel: "Gesamt-Marge",
    totalMarginSub: "Ø aus 3 Objekten",
    warningLabel: "Warnung",
    warningValue: "1 Objekt",
    warningSub: "Personalkosten 18% ↑",
    liveLabel: "In Echtzeit",
    liveValue: "0,3 s",
    liveSub: "Update-Latenz",
    overviewEyebrow: "Objekt-Übersicht",
    overviewSub: "3 aktive Verträge · heute 14:07 Uhr",
    contractSum: "Vertragssumme",
    costLabel: "Kosten",
    progressSuffix: "% abgeschlossen",
    rows: [
      { name: "Bürogebäude Müller GmbH", sum: "38.500 €", cost: "26.120 €", progress: 68, delta: "+12,4%", deltaTone: "up", marginLabel: "4.773 € Marge" },
      { name: "Treppenhaus Hausverwaltung Krause", sum: "22.000 €", cost: "9.350 €", progress: 45, delta: "+8,2%", deltaTone: "up", marginLabel: "1.804 € Marge" },
      { name: "Klinikreinigung Waldklinik", sum: "51.200 €", cost: "43.280 €", progress: 82, delta: "−3,1%", deltaTone: "down", marginLabel: "−1.587 € Verlust", warning: "Achtung: Personalkosten 18% über Plan" },
    ],
  },
  en: {
    totalMarginLabel: "Total margin",
    totalMarginSub: "Avg across 3 sites",
    warningLabel: "Alert",
    warningValue: "1 site",
    warningSub: "Labour cost 18% ↑",
    liveLabel: "Real time",
    liveValue: "0.3 s",
    liveSub: "Update latency",
    overviewEyebrow: "Site overview",
    overviewSub: "3 active contracts · today 14:07",
    contractSum: "Contract sum",
    costLabel: "Cost",
    progressSuffix: "% completed",
    rows: [
      { name: "Office building Müller GmbH", sum: "€38,500", cost: "€26,120", progress: 68, delta: "+12.4%", deltaTone: "up", marginLabel: "€4,773 margin" },
      { name: "Stairwell property manager Krause", sum: "€22,000", cost: "€9,350", progress: 45, delta: "+8.2%", deltaTone: "up", marginLabel: "€1,804 margin" },
      { name: "Clinical cleaning Waldklinik", sum: "€51,200", cost: "€43,280", progress: 82, delta: "−3.1%", deltaTone: "down", marginLabel: "−€1,587 loss", warning: "Warning: labour cost 18% over plan" },
    ],
  },
  fr: {
    totalMarginLabel: "Marge totale",
    totalMarginSub: "Moy. sur 3 sites",
    warningLabel: "Alerte",
    warningValue: "1 site",
    warningSub: "Coût main-d’œuvre 18% ↑",
    liveLabel: "En temps réel",
    liveValue: "0,3 s",
    liveSub: "Latence de mise à jour",
    overviewEyebrow: "Vue des sites",
    overviewSub: "3 contrats actifs · aujourd’hui 14h07",
    contractSum: "Montant du contrat",
    costLabel: "Coût",
    progressSuffix: "% réalisé",
    rows: [
      { name: "Immeuble de bureaux Müller GmbH", sum: "38 500 €", cost: "26 120 €", progress: 68, delta: "+12,4%", deltaTone: "up", marginLabel: "4 773 € de marge" },
      { name: "Cage d’escalier Gestion Krause", sum: "22 000 €", cost: "9 350 €", progress: 45, delta: "+8,2%", deltaTone: "up", marginLabel: "1 804 € de marge" },
      { name: "Nettoyage clinique Waldklinik", sum: "51 200 €", cost: "43 280 €", progress: 82, delta: "−3,1%", deltaTone: "down", marginLabel: "−1 587 € de perte", warning: "Attention : coût main-d’œuvre 18 % au-dessus du plan" },
    ],
  },
};

/**
 * Standalone dashboard mock for the "Live-Margen" section.
 * Pure presentation, animates in with stagger when visible.
 */
export default function DashboardMarge() {
  const { language } = useLanguage();
  const c = CONTENT_BY_LANG[language];
  const ROWS = c.rows;
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
        <KpiCard label={c.totalMarginLabel} value="+9,8%" sub={c.totalMarginSub} tone="ok" />
        <KpiCard label={c.warningLabel} value={c.warningValue} sub={c.warningSub} tone="warn" />
        <KpiCard label={c.liveLabel} value={c.liveValue} sub={c.liveSub} tone="info" />
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
          <div className="tk-eyebrow">{c.overviewEyebrow}</div>
          <div style={{ fontSize: "13px", color: "var(--tk-ink-muted)", marginTop: "2px" }}>
            {c.overviewSub}
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
            <ObjectRow row={row} contractSumLabel={c.contractSum} costLabel={c.costLabel} progressSuffix={c.progressSuffix} />
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

function ObjectRow({ row, contractSumLabel, costLabel, progressSuffix }: { row: Row; contractSumLabel: string; costLabel: string; progressSuffix: string }) {
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
            {contractSumLabel}: {row.sum}
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
        <span>{costLabel}: {row.cost}</span>
        <span>{row.progress}{progressSuffix}</span>
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
