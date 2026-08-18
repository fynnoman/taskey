"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { springs } from "./motion";

const ITEMS: { q: string; a: string }[] = [
  {
    q: "Ist Taskey DSGVO-konform?",
    a: "Ja, Taskey ist vollständig DSGVO-konform. Alle Daten werden auf deutschen Servern gespeichert und verschlüsselt übertragen.",
  },
  {
    q: "Ist die App auch für Mitarbeiter ohne Deutschkenntnisse geeignet?",
    a: "Absolut. Taskey ist mehrsprachig (Deutsch, Türkisch, Russisch, Polnisch u.a.) und so einfach gestaltet, dass jeder Mitarbeiter sofort damit arbeiten kann, auch ohne Schulung.",
  },
  {
    q: "Wie funktioniert der Leistungsnachweis per NFC?",
    a: "Ihr Mitarbeiter hält das Handy an den NFC-Tag am Objekt oder Werkzeug. Taskey protokolliert automatisch Zeitstempel, GPS-Standort und Mitarbeiter. Sie haben den Nachweis schwarz auf weiß.",
  },
  {
    q: "Erfüllt Taskey die Mindestlohn-Dokumentationspflicht?",
    a: "Ja. Die automatische Zeiterfassung dokumentiert alle Arbeitszeiten Mindestlohn-konform. Keine manuellen Stundenzettel, keine Fehler. Alles digital und nachvollziehbar.",
  },
  {
    q: "Funktioniert die App auch in Kellern und Tiefgaragen (offline)?",
    a: "Ja, Taskey funktioniert vollständig offline. Alle Daten werden lokal gespeichert und automatisch synchronisiert, sobald wieder Netz vorhanden ist.",
  },
  {
    q: "Kann ich bestehende Objekte und Mitarbeiterdaten importieren?",
    a: "Ja, wir importieren alle Ihre Objekte, Mitarbeiter und Verträge für Sie, schlüsselfertig. Das ist unser Done-for-You Setup.",
  },
  {
    q: "Kann ich Daten exportieren?",
    a: "Ja, Taskey bietet umfangreiche Export-Funktionen. Zeitdaten und Abrechnungen können als PDF, CSV oder Excel exportiert werden.",
  },
  {
    q: "Wie schnell kann ich starten?",
    a: "Sofort nach der Registrierung. Mit unserem Done-for-You Setup ist Ihr kompletter Betrieb in 48 Stunden einsatzbereit.",
  },
  {
    q: "Wie funktioniert die Schlüsselverwaltung?",
    a: "Taskey dokumentiert, welcher Mitarbeiter Zugang zu welchem Objekt hat. Per NFC-Tag am Schlüsselkasten wird jede Entnahme und Rückgabe protokolliert.",
  },
  {
    q: "Was kostet Taskey?",
    a: "Taskey bietet flexible Preismodelle ab 69 € pro Monat, vom Soloselbstständigen bis zum Großbetrieb. Die Details finden Sie auf der Preisseite.",
  },
];

export default function FaqBoard() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {ITEMS.map((item, i) => {
        const open = openIdx === i;
        return (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...springs.base, delay: i * 0.03 }}
            style={{
              borderRadius: "var(--tk-radius-card)",
              background: open ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.7)",
              border: "1px solid rgba(15, 23, 42, 0.06)",
              boxShadow: open ? "0 20px 60px -30px rgba(15,23,42,0.35)" : "none",
              overflow: "hidden",
            }}
          >
            <button
              type="button"
              onClick={() => setOpenIdx(open ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                padding: "18px 20px",
                background: "transparent",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
                color: "var(--tk-ink)",
                fontSize: "clamp(15px, 1.5vw, 17px)",
                fontWeight: 500,
                letterSpacing: "-0.005em",
              }}
              aria-expanded={open}
            >
              <span style={{ flex: 1 }}>{item.q}</span>
              <motion.span
                animate={{ rotate: open ? 45 : 0 }}
                transition={springs.snappy}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "28px",
                  height: "28px",
                  borderRadius: "999px",
                  background: open ? "var(--tk-ink)" : "rgba(15, 23, 42, 0.06)",
                  color: open ? "#fff" : "var(--tk-ink-muted)",
                  fontSize: "16px",
                  flexShrink: 0,
                }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ ...springs.base }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      padding: "0 20px 20px 20px",
                      fontSize: "15px",
                      lineHeight: 1.6,
                      color: "var(--tk-ink-muted)",
                      maxWidth: "70ch",
                    }}
                  >
                    {item.a}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
