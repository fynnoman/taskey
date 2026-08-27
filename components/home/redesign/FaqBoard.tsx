"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { springs } from "./motion";
import { useLanguage } from "@/context/LanguageContext";

type FaqItem = { q: string; a: string };

const ITEMS_BY_LANG: Record<"de" | "en" | "fr", FaqItem[]> = {
  de: [
    { q: "Ist Taskey DSGVO-konform?", a: "Ja, Taskey ist vollständig DSGVO-konform. Alle Daten werden auf deutschen Servern gespeichert und verschlüsselt übertragen." },
    { q: "Ist die App auch für Mitarbeiter ohne Deutschkenntnisse geeignet?", a: "Absolut. Taskey ist mehrsprachig (Deutsch, Türkisch, Russisch, Polnisch u.a.) und so einfach gestaltet, dass jeder Mitarbeiter sofort damit arbeiten kann, auch ohne Schulung." },
    { q: "Wie funktioniert der Leistungsnachweis per NFC?", a: "Ihr Mitarbeiter hält das Handy an den NFC-Tag am Objekt oder Werkzeug. Taskey protokolliert automatisch Zeitstempel, GPS-Standort und Mitarbeiter. Sie haben den Nachweis schwarz auf weiß." },
    { q: "Erfüllt Taskey die Mindestlohn-Dokumentationspflicht?", a: "Ja. Die automatische Zeiterfassung dokumentiert alle Arbeitszeiten Mindestlohn-konform. Keine manuellen Stundenzettel, keine Fehler. Alles digital und nachvollziehbar." },
    { q: "Funktioniert die App auch in Kellern und Tiefgaragen (offline)?", a: "Ja, Taskey funktioniert vollständig offline. Alle Daten werden lokal gespeichert und automatisch synchronisiert, sobald wieder Netz vorhanden ist." },
    { q: "Kann ich bestehende Objekte und Mitarbeiterdaten importieren?", a: "Ja, wir importieren alle Ihre Objekte, Mitarbeiter und Verträge für Sie, schlüsselfertig. Das ist unser Done-for-You Setup." },
    { q: "Kann ich Daten exportieren?", a: "Ja, Taskey bietet umfangreiche Export-Funktionen. Zeitdaten und Abrechnungen können als PDF, CSV oder Excel exportiert werden." },
    { q: "Wie schnell kann ich starten?", a: "Sofort nach der Registrierung. Mit unserem Done-for-You Setup ist Ihr kompletter Betrieb in 48 Stunden einsatzbereit." },
    { q: "Wie funktioniert die Schlüsselverwaltung?", a: "Taskey dokumentiert, welcher Mitarbeiter Zugang zu welchem Objekt hat. Per NFC-Tag am Schlüsselkasten wird jede Entnahme und Rückgabe protokolliert." },
    { q: "Was kostet Taskey?", a: "Taskey bietet flexible Preismodelle ab 69 € pro Monat, vom Soloselbstständigen bis zum Großbetrieb. Die Details finden Sie auf der Preisseite." },
  ],
  en: [
    { q: "Is Taskey GDPR-compliant?", a: "Yes, Taskey is fully GDPR-compliant. All data is stored on German servers and transmitted encrypted." },
    { q: "Is the app usable for staff who don’t speak German?", a: "Absolutely. Taskey is multilingual (German, Turkish, Russian, Polish and more) and designed simply enough that any employee can start using it right away, without training." },
    { q: "How does the NFC proof of service work?", a: "Your employee holds their phone against the NFC tag on the site or tool. Taskey automatically records timestamp, GPS location and employee. You have the proof in black and white." },
    { q: "Does Taskey meet the minimum-wage documentation duty?", a: "Yes. Automatic time tracking documents all working times in a minimum-wage-compliant way. No manual timesheets, no errors. Everything digital and auditable." },
    { q: "Does the app work in basements and underground car parks (offline)?", a: "Yes, Taskey works fully offline. All data is stored locally and synchronised automatically as soon as the connection is back." },
    { q: "Can I import existing sites and employee data?", a: "Yes, we import all your sites, employees and contracts turnkey. That’s our Done-for-You setup." },
    { q: "Can I export data?", a: "Yes, Taskey offers rich export options. Time data and invoices can be exported as PDF, CSV or Excel." },
    { q: "How quickly can I get started?", a: "Right after signing up. With our Done-for-You setup, your entire operation is ready in 48 hours." },
    { q: "How does key management work?", a: "Taskey documents which employee has access to which site. NFC tags on the key cabinet log every pickup and return." },
    { q: "What does Taskey cost?", a: "Taskey offers flexible pricing from €69 per month, from solo operators up to large operations. Details are on the pricing page." },
  ],
  fr: [
    { q: "Taskey est-il conforme au RGPD ?", a: "Oui, Taskey est entièrement conforme au RGPD. Toutes les données sont stockées sur des serveurs en Allemagne et transmises de manière chiffrée." },
    { q: "L’app convient-elle à des collaborateurs qui ne parlent pas allemand ?", a: "Absolument. Taskey est multilingue (allemand, turc, russe, polonais et autres) et conçu de manière suffisamment simple pour que chaque collaborateur puisse l’utiliser immédiatement, sans formation." },
    { q: "Comment fonctionne la preuve de service par NFC ?", a: "Votre collaborateur approche son téléphone du tag NFC sur le site ou l’outil. Taskey enregistre automatiquement horodatage, position GPS et collaborateur. Vous avez la preuve noir sur blanc." },
    { q: "Taskey répond-il à l’obligation de documentation du salaire minimum ?", a: "Oui. Le pointage automatique documente tous les temps de travail conformément aux obligations. Pas de feuille manuelle, pas d’erreur. Tout est numérique et traçable." },
    { q: "L’app fonctionne-t-elle en sous-sol et en parkings (hors ligne) ?", a: "Oui, Taskey fonctionne entièrement hors ligne. Les données sont stockées localement et se synchronisent dès que la connexion revient." },
    { q: "Puis-je importer mes sites et collaborateurs existants ?", a: "Oui, nous importons vos sites, collaborateurs et contrats clés en main. C’est notre mise en place Done-for-You." },
    { q: "Puis-je exporter mes données ?", a: "Oui, Taskey propose des exports complets. Les temps et factures s’exportent en PDF, CSV ou Excel." },
    { q: "En combien de temps puis-je démarrer ?", a: "Dès l’inscription. Avec notre mise en place Done-for-You, toute votre entreprise est prête en 48 heures." },
    { q: "Comment fonctionne la gestion des clés ?", a: "Taskey documente quel collaborateur a accès à quel site. Un tag NFC sur l’armoire à clés enregistre chaque prise et remise." },
    { q: "Combien coûte Taskey ?", a: "Taskey propose des tarifs flexibles à partir de 69 € par mois, du travailleur indépendant à la grande entreprise. Les détails sont sur la page tarifs." },
  ],
};

export default function FaqBoard() {
  const { language } = useLanguage();
  const ITEMS = ITEMS_BY_LANG[language];
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
