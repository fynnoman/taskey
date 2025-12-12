'use client';

import { useState, useEffect } from 'react';

type CookiePreferences = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  external: boolean;
};

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
    external: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('taskey-cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('taskey-cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('taskey-cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      external: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    savePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      external: false,
    });
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Main Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-4">
          {/* Banner Content */}
          <div className="bg-white rounded-lg shadow-xl max-w-5xl mx-auto border-2 border-gray-200">
            <div className="p-4 sm:p-6">
              <div className="mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Cookie-Einstellungen
                </h2>
                
                <div className="text-gray-700 space-y-2 sm:space-y-3 text-xs sm:text-sm leading-relaxed">
                  <p>
                    Wir verwenden auf unserer Website Cookies und ähnliche Technologien, um den technischen Betrieb 
                    der Website sicherzustellen, grundlegende Funktionen bereitzustellen und – sofern Sie ausdrücklich 
                    einwilligen – das Nutzungsverhalten auszuwerten sowie Inhalte zu optimieren.
                  </p>
                  
                  <p>
                    <strong>Technisch notwendige Cookies</strong> sind für den Betrieb der Website erforderlich und 
                    können nicht deaktiviert werden. Alle anderen Cookies werden nur mit Ihrer freiwilligen Einwilligung gesetzt.
                  </p>
                  
                  <p>
                    Weitere Informationen finden Sie in unseren{' '}
                    <a href="/datenschutz" className="text-blue-600 hover:underline font-semibold">
                      Datenschutzhinweisen
                    </a>.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2 sm:gap-3 mt-3 sm:mt-4">
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-blue-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md font-semibold hover:bg-blue-700 transition text-xs sm:text-sm"
                >
                  Alle Cookies akzeptieren
                </button>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 bg-gray-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md font-semibold hover:bg-gray-700 transition text-xs sm:text-sm"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex-1 bg-white text-gray-800 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md font-semibold border-2 border-gray-300 hover:bg-gray-50 transition text-xs sm:text-sm"
                  >
                    Anpassen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            {/* Settings Content */}
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full border-2 border-gray-200 max-h-[90vh] overflow-y-auto">
              <div className="p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Cookie-Einstellungen anpassen
                </h2>
                
                <p className="text-gray-700 mb-5 text-sm">
                  In den folgenden Einstellungen können Sie auswählen, welche Cookie-Kategorien Sie zulassen möchten.
                  Notwendige Cookies sind immer aktiviert, da sie für den sicheren Betrieb der Website erforderlich sind.
                </p>

                <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border-2 border-gray-200 rounded-lg p-5 bg-gray-50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        Notwendige Cookies
                      </h3>
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                        Immer aktiv
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="mt-1 w-5 h-5"
                    />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Notwendige Cookies ermöglichen grundlegende Funktionen dieser Website und sind für deren 
                    ordnungsgemäßen Betrieb zwingend erforderlich. Ohne diese Cookies kann die Website nicht 
                    korrekt dargestellt oder genutzt werden.
                  </p>
                  <p className="text-xs text-gray-600 mb-2">
                    <strong>Typische Einsatzbereiche:</strong> Seitenaufrufe und Navigation, Speicherung Ihrer 
                    Cookie-Auswahl, Schutz vor Missbrauch und Angriffen, Lastverteilung und Systemstabilität
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO, § 25 Abs. 2 Nr. 2 TTDSG
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border-2 border-gray-200 rounded-lg p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        Funktionale Cookies
                      </h3>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                      className="mt-1 w-5 h-5 accent-blue-600"
                    />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Funktionale Cookies ermöglichen erweiterte Funktionen und Personalisierungen, z. B. die 
                    Speicherung von Spracheinstellungen oder regionalen Präferenzen. Sie verbessern den 
                    Nutzungskomfort, sind jedoch nicht zwingend für den Betrieb der Website erforderlich.
                  </p>
                  <p className="text-xs text-gray-600 mb-2">
                    <strong>Typische Einsatzbereiche:</strong> Speicherung von Spracheinstellungen, 
                    Benutzerpräferenzen, Wiedererkennung von Einstellungen bei erneutem Besuch
                  </p>
                  <p className="text-xs text-gray-600 mb-2">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Speicherdauer:</strong> Bis zu 12 Monate
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border-2 border-gray-200 rounded-lg p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        Analyse- und Statistik-Cookies
                      </h3>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="mt-1 w-5 h-5 accent-blue-600"
                    />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Analyse- und Statistik-Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen. 
                    Dabei werden Informationen über Seitenaufrufe, Verweildauer, Klickpfade und technische 
                    Rahmenbedingungen erfasst. Die Auswertung erfolgt anonym oder pseudonym. Ziel ist es, die 
                    Benutzerfreundlichkeit, Performance und Inhalte unserer Website kontinuierlich zu verbessern.
                  </p>
                  <p className="text-xs text-gray-600 mb-2">
                    <strong>Typische Einsatzbereiche:</strong> Messung von Seitenaufrufen, Analyse von Nutzerströmen, 
                    Optimierung von Ladezeiten und Inhalten, Fehleranalyse
                  </p>
                  <p className="text-xs text-gray-600 mb-2">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Speicherdauer:</strong> Bis zu 14 Monate
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border-2 border-gray-200 rounded-lg p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        Marketing- und Tracking-Cookies
                      </h3>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="mt-1 w-5 h-5 accent-blue-600"
                    />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Marketing-Cookies werden verwendet, um Besuchern relevante Inhalte und Angebote anzuzeigen. 
                    Sie können auch dazu dienen, die Wirksamkeit von Marketingmaßnahmen zu messen und 
                    personalisierte Werbung auszuspielen. Dabei können Informationen über Ihr Nutzungsverhalten 
                    auch über verschiedene Websites hinweg verarbeitet werden.
                  </p>
                  <p className="text-xs text-gray-600 mb-2">
                    <strong>Typische Einsatzbereiche:</strong> Erfolgsmessung von Kampagnen, Anzeige relevanter 
                    Inhalte, Wiederansprache (Remarketing)
                  </p>
                  <p className="text-xs text-gray-600 mb-2">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Speicherdauer:</strong> Abhängig vom jeweiligen Anbieter
                  </p>
                </div>

                {/* External Content */}
                <div className="border-2 border-gray-200 rounded-lg p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        Externe Inhalte
                      </h3>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.external}
                      onChange={(e) => setPreferences({ ...preferences, external: e.target.checked })}
                      className="mt-1 w-5 h-5 accent-blue-600"
                    />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Externe Inhalte von Drittanbietern (z. B. Videos, Karten, Schriftarten) können Cookies oder 
                    ähnliche Technologien setzen. Beim Laden dieser Inhalte können personenbezogene Daten an die 
                    jeweiligen Anbieter übertragen werden. Diese Inhalte werden erst angezeigt, wenn Sie ausdrücklich einwilligen.
                  </p>
                  <p className="text-xs text-gray-600 mb-2">
                    <strong>Typische Einsatzbereiche:</strong> Eingebettete Videos (z. B. YouTube), Kartenmaterial 
                    (z. B. Google Maps), Externe Schriftarten
                  </p>
                  <p className="text-xs text-gray-600">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-gray-700">
                <p className="font-semibold mb-2">Widerruf & Änderung der Einwilligung</p>
                <p>
                  Sie können Ihre Cookie-Einwilligung jederzeit mit Wirkung für die Zukunft ändern oder widerrufen.
                  Hierfür steht Ihnen der Link „Cookie-Einstellungen" auf unserer Website dauerhaft zur Verfügung.
                  Ein Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung.
                </p>
              </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button
                    onClick={saveCustom}
                    className="flex-1 bg-blue-600 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition text-sm"
                  >
                    Auswahl speichern
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="flex-1 bg-gray-200 text-gray-800 px-5 py-2.5 rounded-md font-semibold hover:bg-gray-300 transition text-sm"
                  >
                    Zurück
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
