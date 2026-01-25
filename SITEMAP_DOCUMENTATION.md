# Sitemap Dokumentation

## Übersicht

Die Taskey-Website verfügt über zwei Sitemap-Varianten:

### 1. XML Sitemap (für Suchmaschinen)
**URL:** `https://www.taskey.de/sitemap.xml`

- Automatisch generiert durch Next.js `app/sitemap.ts`
- Wird von Google, Bing und anderen Suchmaschinen gecrawlt
- Enthält alle öffentlichen Seiten mit Metadaten (Priority, Change Frequency)
- Bereits in `robots.txt` referenziert

**Verwendung:**
- Wird automatisch von Suchmaschinen gefunden
- In Google Search Console eingetragen
- Keine manuelle Wartung erforderlich

### 2. HTML Sitemap (für Besucher)
**URL:** `https://www.taskey.de/sitemap-view`

- Menschenfreundliche Übersicht aller Seiten
- Schönes Design mit Beschreibungen
- Kategorisiert in Hauptseiten und Rechtliches
- Link zur XML-Sitemap enthalten

**Features:**
- ✅ Übersichtliche Kategorisierung
- ✅ Beschreibung jeder Seite
- ✅ Direkt klickbare Links
- ✅ SEO-optimiert
- ✅ Responsive Design

### Zugriff

Die HTML-Sitemap ist über mehrere Wege erreichbar:

1. **Direkter Link:** `/sitemap-view`
2. **Footer:** Link "Sitemap" im Footer (alle Seiten)
3. **Sitemap XML:** Verweis auf XML-Version

### Struktur

```
app/
├── sitemap.ts              # XML Sitemap Generator (Next.js built-in)
└── sitemap-view/
    ├── page.tsx           # HTML Sitemap Seite
    └── route.ts           # Optional: Custom XML Route (nicht verwendet)
```

### Wartung

**Neue Seite hinzufügen:**

1. In `app/sitemap.ts` hinzufügen:
```typescript
{
  url: `${baseUrl}/neue-seite`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
}
```

2. In `app/sitemap-view/page.tsx` hinzufügen:
```typescript
{
  title: "Neue Seite",
  url: "/neue-seite",
  description: "Beschreibung der neuen Seite",
}
```

### SEO-Vorteile

- ✅ Bessere Indexierung durch Suchmaschinen
- ✅ Klare Seitenstruktur
- ✅ Benutzerfreundliche Navigation
- ✅ Interne Verlinkung verbessert
- ✅ PageSpeed Score optimiert

### Links

- **Footer:** "Sitemap" und "Sitemap XML" Links hinzugefügt
- **robots.txt:** Referenziert `/sitemap.xml`
- **Metadata:** SEO-optimiert mit Titel und Beschreibung

