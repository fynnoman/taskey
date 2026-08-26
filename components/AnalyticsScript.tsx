'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

/**
 * Umami-Analytics wird ausschließlich dann geladen, wenn die Besucherin über den
 * Cookie-Banner den Kategorien "analytics" zugestimmt hat. Ohne Zustimmung
 * gelangt kein Request an mission-control.vars-development.com.
 * Der Banner (components/CookieConsent.tsx) sendet ein "taskey-cookie-consent-changed"
 * CustomEvent nach jedem Speichern, damit die Entscheidung sofort greift ohne Reload.
 */
export default function AnalyticsScript() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const check = () => {
      try {
        const raw = localStorage.getItem('taskey-cookie-consent');
        if (!raw) {
          setAllowed(false);
          return;
        }
        const prefs = JSON.parse(raw) as { analytics?: boolean };
        setAllowed(!!prefs.analytics);
      } catch {
        setAllowed(false);
      }
    };

    check();
    window.addEventListener('storage', check);
    window.addEventListener('taskey-cookie-consent-changed', check as EventListener);
    return () => {
      window.removeEventListener('storage', check);
      window.removeEventListener('taskey-cookie-consent-changed', check as EventListener);
    };
  }, []);

  if (!allowed) return null;

  return (
    <Script
      src="https://mission-control.vars-development.com/umami/script.js"
      data-website-id="15a75075-86a0-4e36-8cd2-7cd83d860d5c"
      strategy="afterInteractive"
    />
  );
}
