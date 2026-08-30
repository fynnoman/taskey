export default function ReinigungsappFeatures() {
  return (
    <section className="relative bg-[var(--background)] text-[var(--foreground)] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--cta)]/60" aria-hidden="true" />
            <span className="text-[10px] font-black tracking-[0.28em] uppercase text-[var(--cta)]">
              Warum eine neue Reinigungsapp
            </span>
            <span className="w-8 h-px bg-[var(--cta)]/60" aria-hidden="true" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05] mb-6 text-[var(--foreground)]">
            Wir haben Branchensoftware
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              neu gedacht.
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-[var(--foreground-muted)] leading-relaxed">
            Statt eine weitere Software im gewohnten Stil zu bauen, haben wir den Ansatz grundlegend überdacht. Mehr Klarheit im Design, mehr Effizienz in den Abläufen, mehr Intuitivität in der Bedienung. Ergänzt um KI-Funktionen, die dort ansetzen, wo Standardsysteme aufhören.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          <Pillar
            index="01"
            title="Style"
            body="Eine Oberfläche, die man gerne aufmacht. Reduziert, aber nicht kalt. Ihre Mitarbeiter wollen sie nutzen, statt sie zu ignorieren."
          />
          <Pillar
            index="02"
            title="Effizienz"
            body="Weniger Klicks für dieselbe Aufgabe. Der Alltag im Reinigungsbetrieb ist schnell, die App muss mithalten."
          />
          <Pillar
            index="03"
            title="Intuitivität"
            body="Ohne Schulung nutzbar. Neue Reinigungskräfte sind in Minuten produktiv, nicht in Wochen."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <FeatureCard
            tag="Zeiterfassung"
            title="NFC-Zeiterfassung, Mindestlohn-konform"
            body="Mitarbeiter halten das Handy an den NFC-Tag am Objekt. Fertig. Kein manuelles Nachtragen, keine Diskussion über Zeiten."
          />
          <FeatureCard
            tag="Einsatzplanung"
            title="Der Plan schreibt sich fast von selbst"
            body="Objekte, Teams und Verfügbarkeiten kommen zusammen. Sie ordnen zu, die App verteilt die Details."
          />
          <FeatureCard
            tag="Abrechnung"
            title="Von der Zeitbuchung zur Rechnung in Minuten"
            body="Erfasste Stunden werden zu Positionen, Positionen zu Rechnungen. DATEV-Export inklusive."
          />
          <FeatureCard
            tag="Live-Margen"
            title="Sie sehen pro Objekt, wo verdient wird"
            body="Umsatz, Lohnkosten und Marge pro Auftrag in Echtzeit. Sie steuern nach Zahlen statt nach Bauchgefühl."
          />
          <FeatureCard
            tag="Kundenportal"
            title="Ihr Auftraggeber sieht selbst nach"
            body="Nachweise, Qualitätskontrollen und Kommunikation im eigenen Portal. Keine E-Mail-Ping-Pong-Runden mehr."
          />
          <FeatureCard
            tag="Ausschreibungen"
            title="Passende Aufträge finden Sie zuerst"
            body="Öffentliche und private Ausschreibungen aus Ihrer Region, gefiltert nach dem, was zu Ihrem Betrieb passt."
          />
        </div>
      </div>
    </section>
  );
}

function Pillar({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative p-8 md:p-10 rounded-[1.75rem] bg-white border border-[var(--border-strong)] shadow-xl shadow-slate-900/5">
      <span className="block text-xs font-black tracking-[0.28em] uppercase text-[var(--cta)] mb-6">
        {index}
      </span>
      <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4 text-[var(--foreground)]">
        {title}
      </h3>
      <p className="text-sm md:text-base text-[var(--foreground-muted)] leading-relaxed">
        {body}
      </p>
    </div>
  );
}

function FeatureCard({
  tag,
  title,
  body,
}: {
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative p-6 md:p-8 rounded-[1.25rem] bg-white border border-[var(--border-strong)] hover:border-[var(--cta)]/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-6 h-px bg-[var(--cta)]/60" aria-hidden="true" />
        <span className="text-[10px] font-black tracking-[0.28em] uppercase text-[var(--cta)]">
          {tag}
        </span>
      </div>
      <h3 className="text-lg md:text-xl font-black leading-tight mb-3 text-[var(--foreground)]">
        {title}
      </h3>
      <p className="text-sm md:text-base text-[var(--foreground-muted)] leading-relaxed">
        {body}
      </p>
    </div>
  );
}
