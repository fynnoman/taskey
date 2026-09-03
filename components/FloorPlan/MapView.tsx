"use client";

/**
 * Placeholder-„Karten"-Ansicht. Zeigt ein sehr reduziertes Straßenraster
 * und einen Gebäude-Marker. Kein externes Karten-SDK, damit die Sektion
 * cookielos und ohne Third-Party bleibt.
 */
export function MapView() {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 1400 620"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-label="Gebäude-Standort (Beispieldaten)"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M60 0L0 0 0 60" stroke="#E8EAED" strokeWidth="1" fill="none" />
          </pattern>
          <pattern id="fine" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="0.6" cy="0.6" r="0.6" fill="#EDEFF2" />
          </pattern>
        </defs>

        <rect width="1400" height="620" fill="var(--fp-bg)" />
        <rect width="1400" height="620" fill="url(#fine)" />
        <rect width="1400" height="620" fill="url(#grid)" opacity="0.7" />

        {/* Straßen */}
        <g stroke="#DDE1E7" strokeWidth="16" fill="none">
          <line x1="0" y1="200" x2="1400" y2="200" />
          <line x1="0" y1="440" x2="1400" y2="440" />
          <line x1="480" y1="0" x2="480" y2="620" />
          <line x1="1000" y1="0" x2="1000" y2="620" />
        </g>
        <g stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="14 12" fill="none" opacity="0.9">
          <line x1="0" y1="200" x2="1400" y2="200" />
          <line x1="0" y1="440" x2="1400" y2="440" />
          <line x1="480" y1="0" x2="480" y2="620" />
          <line x1="1000" y1="0" x2="1000" y2="620" />
        </g>

        {/* Nachbargebäude */}
        <g fill="#EEF1F5" stroke="#DDE1E7">
          <rect x="80"  y="80"  width="220" height="80" rx="6" />
          <rect x="80"  y="480" width="180" height="90" rx="6" />
          <rect x="600" y="80"  width="260" height="90" rx="6" />
          <rect x="1100" y="80" width="240" height="90" rx="6" />
          <rect x="580"  y="480" width="220" height="90" rx="6" />
          <rect x="1080" y="480" width="220" height="90" rx="6" />
        </g>

        {/* Unser Gebäude */}
        <g>
          <rect
            x="600" y="260" width="320" height="140" rx="6"
            fill="var(--fp-blue-soft)"
            stroke="var(--fp-blue)"
            strokeWidth="2"
          />
          <text
            x="760" y="335"
            textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--fp-blue)"
            fontFamily="-apple-system, Inter, system-ui, sans-serif"
          >
            Verwaltungsgebäude Süd
          </text>

          {/* Marker */}
          <g transform="translate(760, 260)">
            <path
              d="M0 -34 C -12 -34 -20 -25 -20 -14 C -20 -3 -6 12 0 18 C 6 12 20 -3 20 -14 C 20 -25 12 -34 0 -34 Z"
              fill="var(--fp-blue)"
            />
            <circle cx="0" cy="-16" r="6" fill="#fff" />
          </g>
        </g>

        {/* Legende */}
        <g transform="translate(60, 540)">
          <rect x="0" y="0" width="240" height="46" rx="12" fill="#FFFFFF" stroke="#E8EAED" />
          <rect x="14" y="14" width="18" height="18" rx="3" fill="var(--fp-blue-soft)" stroke="var(--fp-blue)" />
          <text x="42" y="27" fontSize="13" fill="#202124" fontFamily="-apple-system, Inter, system-ui, sans-serif">Verwaltungsgebäude Süd</text>
        </g>
      </svg>

      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="pointer-events-auto rounded-2xl bg-white/80 backdrop-blur-md border border-[color:var(--fp-border)] px-5 py-3 text-[13px] text-[#4B5563]" style={{ boxShadow: "0 8px 30px -10px rgba(15,23,42,0.2)" }}>
          Kartenansicht, Beispiel, kein externes Karten-SDK
        </div>
      </div>
    </div>
  );
}
