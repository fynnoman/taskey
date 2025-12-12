# Taskey Website

Eine moderne Website für Taskey - die Dienstleistungssoftware Nr. 1 aus Deutschland für effiziente Betriebe.

## 🚀 Projekt-Übersicht

Diese Website präsentiert Taskey, eine umfassende Business-Management-Software für Handwerksbetriebe und Dienstleister. Die Website ist vollständig in deutscher Sprache und bietet:

- **Homepage** mit Hero-Section, Features, Testimonials, FAQ und Kontakt
- **Features-Seite** mit detaillierter Funktionsübersicht
- **Pricing-Seite** mit flexiblen Preispaketen und Vergleichstabelle
- **About-Seite** mit Unternehmensinfo, Mission und Werten
- Impressum, Datenschutz und AGB

## 🎨 Design

- **Farbschema**: Weiß (Haupt), Dunkelgrau, Dunkelblau (Akzent)
- **Framework**: Next.js 14 mit App Router
- **Styling**: Tailwind CSS
- **Responsive**: Mobile-First Design

## 🛠️ Installation & Start

Entwicklungsserver starten:

```bash
npm run dev
```

Die Website ist dann unter [http://localhost:3000](http://localhost:3000) verfügbar.

Build für Produktion:

```bash
npm run build
npm start
```

## 📁 Projektstruktur

```
/app
  /about          - Über uns Seite
  /features       - Funktionsübersicht
  /pricing        - Preise und Pakete
  /impressum      - Impressum
  /datenschutz    - Datenschutzerklärung
  /agb            - Allgemeine Geschäftsbedingungen
  page.tsx        - Homepage
  layout.tsx      - Root Layout

/components
  /home           - Homepage-Komponenten
    Hero.tsx
    FeaturePreview.tsx
    Testimonials.tsx
    BusinessSize.tsx
    AllFeatures.tsx
    FAQ.tsx
    Contact.tsx
  Header.tsx      - Hauptnavigation
  Footer.tsx      - Footer
```

## ✨ Features

- ✅ Responsive Design für alle Geräte
- ✅ Interaktive FAQ mit Dropdowns
- ✅ Pricing-Tabelle mit monatlich/quartalsweise/jährlich Toggle
- ✅ Moderne UI mit Tailwind CSS
- ✅ SEO-optimiert mit Next.js Metadata
- ✅ Schnelle Performance durch Next.js App Router

## 📝 Lizenz

© 2025 Taskey. Alle Rechte vorbehalten.
