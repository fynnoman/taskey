'use client';

import { useState, useMemo } from 'react';
import DemoBookingModal from '../DemoBookingModal';

export default function Branchen() {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Categorized branches with umbrella terms (Überbegriffe)
  const branchenCategories: { [key: string]: string[] } = {
    "Reinigungsdienste": [
      "Reinigungsunternehmen",
      "Gebäudereinigung",
      "Haushaltsreinigung",
      "Industriereinigung",
      "Poolreinigung",
      "Kaminreinigung",
      "Teppichreinigung",
      "Dachrinnenreinigung",
      "Terrassenreinigung",
      "Wintergartenreinigung",
      "Großküchenreinigung",
      "Fassadenreinigung",
      "Photovoltaik-Reinigung",
      "Dachbodenreinigung",
      "Lüftungskanalreinigung",
      "Hausfassadenreinigung",
      "Großküchenlüftungsreinigung",
      "Hochdruckreinigungsteam",
      "Spezialreinigung (Graffiti/Öl)",
      "Elektronikreinigung nach Brand"
    ],
    "Garten- und Landschaftsbau": [
      "Garten- und Landschaftsbau",
      "Baumpflege",
      "Grünflächenpflege",
      "Friedhofsgärtner",
      "Landschaftsplanung",
      "Gartenpflege privat",
      "Kommunale Grünpflege",
      "Straßenbegleitgrünpflege",
      "Grünflächenbewässerung",
      "Fassadenbegrünung",
      "Bewässerungsanlagenbau",
      "Bewässerungstechniker",
      "Tropfbewässerungsinstallateure",
      "Bewässerungsbrunnenbau"
    ],
    "Elektroinstallationen": [
      "Elektroinstallationen",
      "Netzwerkinstallation",
      "Smart-Home-Installationen",
      "E-Check-Dienstleister",
      "Blitzschutzinstallation",
      "Blitzschutzprüfung",
      "Elektrothermografie",
      "Kabelfehlerortung",
      "Steckdosen-Prüfservice",
      "Maschinenverkabelung",
      "Schaltschrankbau vor Ort",
      "Smart-Meter-Installation",
      "Mobile Baustrominstallation",
      "Baustromverteilung",
      "Alarmanlagen-Installateure",
      "Videoüberwachungstechnik",
      "Sicherheitsscanner-Installation"
    ],
    "Sanitär- und Heizungsbau": [
      "Sanitär- und Heizungsbau",
      "Rohrreinigungsdienste",
      "Heizungsnotdienst",
      "Pelletheizungs-Service",
      "Ölheizungsteams",
      "Gasleitungsprüfung",
      "Warmwassertechnik",
      "Trinkwasserhygieneprüfer",
      "Legionellenprüfung",
      "Filterwechsel-Service",
      "Rohrsanierungsteams",
      "Epoxidharz-Rohrsanierung",
      "Rohrfräsdienst",
      "Abflusswartung",
      "Rückstauklappen-Service",
      "Heizungsoptimierung",
      "Gasnetz-Wartung",
      "Kanalreparaturdienste",
      "Kanalspülung"
    ],
    "Bau- und Handwerksdienste": [
      "Trockenbau",
      "Malerbetriebe",
      "Dachdecker",
      "Fliesenleger",
      "Maurerbetriebe",
      "Straßenbau",
      "Tiefbau",
      "Hochbauunternehmen",
      "Fassadenbau",
      "Gerüstbau",
      "Pflasterbetriebe",
      "Sanierungsbetriebe",
      "Asbestsanierung",
      "Baustellen-Logistik",
      "Bauüberwachung",
      "Bauleitungsteams",
      "Straßensanierungsdienste",
      "Asphaltierungsteams",
      "Hallenbau",
      "Stahlhallenmontage",
      "Containerbau"
    ],
    "Fenster- und Türenbau": [
      "Fenster- und Türenbau",
      "Rolladenreparatur",
      "Markisenmontage",
      "Brandschutztürenprüfung",
      "Fluchttürenwartung"
    ],
    "Metallbau und Schlosserei": [
      "Metallbau",
      "Schlossereiteams",
      "Stahlbau",
      "Aluminiumverarbeitung",
      "Metallrecycling mobil",
      "Metallfrässervice vor Ort"
    ],
    "Schreinereien und Tischlerei": [
      "Schreinereien / Tischler",
      "Schreinermontage",
      "Möbelmontage",
      "Möbelmontagefirmen",
      "Küchenmontage",
      "Möbeltransporte",
      "Möbelreparatur vor Ort"
    ],
    "Bodenleger": [
      "Parkett- und Bodenleger",
      "Fliesenleger",
      "Estrichleger",
      "Bodenversiegelung",
      "Industriebodeninstallation",
      "Hallenbodensanierung",
      "Teppichfliesenmontage",
      "Vinylbodenmontage",
      "Laminatverleger",
      "PVC-Bodenservice",
      "Bodenreparaturdienst",
      "Teppichverleger mobil",
      "Parkettschädenreparatur",
      "Kunstraseninstallation"
    ],
    "Photovoltaik und Solar": [
      "Solar- und Photovoltaikmontage",
      "Photovoltaik-Reinigung",
      "Photovoltaik-Besichtigungen",
      "Photovoltaik-Gutachterdienste",
      "Photovoltaik-String-Messung",
      "PV-Gutachter",
      "PV-Planungsteams",
      "Solarthermie-Installateure",
      "Solarcarport-Installation",
      "Balkonkraftwerk-Montage",
      "Yacht-Solaranlagentechnik"
    ],
    "Gebäudetechnik": [
      "Gebäudetechnik",
      "Haustechnikbetriebe",
      "Gebäudewartung",
      "Gebäudediagnostik",
      "Gebäudekontrollen",
      "Gebäudesicherheitschecks",
      "Gebäudethermografie",
      "Klimaservice für Bürogebäude"
    ],
    "Kamin- und Ofenbau": [
      "Kamin- & Ofenbauer",
      "Kaminreinigung"
    ],
    "Statik und Prüfdienste": [
      "Statikbüros",
      "Prüfstatiker",
      "Prüfdienste (TÜV-ähnlich)",
      "Qualitätsprüfung",
      "Brandschutzprüfer",
      "Sicherheitsprüfungen",
      "Technische Prüfdienste",
      "Bauforensik",
      "Baustoffprüfstellen",
      "Prüf- & Messdienste",
      "Mess- & Kalibrierdienste"
    ],
    "Lieferdienste": [
      "Paket- & Lieferdienste",
      "Kurierfahrer",
      "Transporthelfer",
      "Abhol- & Bringdienste",
      "Baustofflieferanten",
      "Bauholzlieferanten"
    ],
    "Hausmeisterservices": [
      "Hausmeisterservices",
      "Hausmeister großer Objekte",
      "Seniorenheim-Hausmeisterdienste",
      "Pflegedienst-Hausmeisterservice",
      "Supermarkt-Hausmeisterdienste"
    ],
    "Winterdienste": [
      "Winterdienste"
    ],
    "Schlüsseldienste": [
      "Schlüsseldienste"
    ],
    "Pool- und Wassertechnik": [
      "Poolservice",
      "Poolreinigung",
      "Pooltechnikservice",
      "Naturpool-Bauer",
      "Teichbau",
      "Teichsanierung",
      "Whirlpoolinstallation",
      "Whirlpool-Reparatur"
    ],
    "Umzugsservices": [
      "Umzugsservices",
      "Entrümpelungsdienste",
      "Maschinenumzüge"
    ],
    "Schädlingsbekämpfung": [
      "Schädlingsbekämpfer",
      "Schädlingsmonitoring",
      "Wespen-Notdienst",
      "Tierfallenservice",
      "Taubenschutz-Montage",
      "Insektennetz-Montage",
      "Marderschutz-Service"
    ],
    "Sicherheitsdienste": [
      "Sicherheitsdienste",
      "Privater Sicherheitsdienst",
      "Baustellenbewachung",
      "Event-Sicherheitsauflagenprüfer",
      "Event-Sicherheitsinspektionen"
    ],
    "Catering und Event": [
      "Catering-Lieferteams",
      "Grill-Catering-Teams",
      "Foodtrucks",
      "Event-Aufbau & Technik",
      "Messebauer",
      "Großevent-Logistik",
      "Festival-Aufbau",
      "Konzertbühnenmontage",
      "Tournee-Logistik",
      "Eventdekoration",
      "Marktstandaufbau",
      "Promotionteams",
      "Event-WC-Service"
    ],
    "Klimaanlagen und Kältetechnik": [
      "Klimaanlagen-Service",
      "Kälte- und Lüftungstechniker",
      "Kältetechnik-Großanlagen",
      "Kälteanlagenprüfung",
      "Klimaanlagenvermietung"
    ],
    "Brandschutz": [
      "Brandschutzservice",
      "Brandschutzbeauftragte",
      "Brandschutzberatung",
      "Brandschutzabschottung",
      "Brandschutztürenprüfung",
      "Brandschutzschulungen",
      "Löschanlagenservice",
      "Entrauchungsanlagenprüfung"
    ],
    "Aufzugswartung": [
      "Aufzugswartung"
    ],
    "Maschinenservice": [
      "Maschinenservice",
      "Außendienst-Servicetechniker",
      "Roboterwartung",
      "Robotermontage",
      "Schweißroboter-Setup",
      "Roboterschutzzaun-Montage",
      "Verpackungsmaschinenservice",
      "CNC-Maschinenprüfung",
      "Landwirtschaftliche Maschinenreparatur",
      "Baumaschinenprüfung",
      "Baumaschinenlackierung",
      "Baumaschinenvermietung",
      "Recyclingmaschinenmontage",
      "Sortieranlagen-Service"
    ],
    "IT-Support": [
      "IT-Onsite-Support",
      "Mobile IT-Einrichtung",
      "Mobile Serverinstallation",
      "Mobile Kassensysteme"
    ],
    "Telekommunikation": [
      "Telekom-Techniker",
      "Funkmast-Wartung",
      "Glasfaserausbau",
      "Kabelverlegung",
      "Telekommunikationsausbau"
    ],
    "Medizintechnik": [
      "Medizintechnik-Service",
      "Krankenhaus-Technikservice",
      "Medizinproduktinstallation",
      "Labortechnik-Aufbau",
      "OP-Technik-Wartung",
      "Zahnmedizintechnik-Wartung",
      "Medikationsschrank-Installation",
      "Autoklavenservice",
      "Dampfsterilisationsservices"
    ],
    "Hygiene-Services": [
      "Hygiene-Services",
      "Hygieneaudits",
      "Hygiene-Spezialteams",
      "Desinfektionsservice"
    ],
    "Forstwirtschaft": [
      "Forstwirtschaft",
      "Baumpflege",
      "Baumkontrolleure",
      "Sturmholz-Beseitigung",
      "Forstschutzteams",
      "Wurzelfräsen-Service",
      "Heckenrückschnittdienste"
    ],
    "Landwirtschaft": [
      "Landwirtschaft",
      "Agrartechnik-Service",
      "Hof- & Stallservice",
      "Agrarfahrzeug-Service",
      "Schäferdienste",
      "Bienenpflegebetriebe"
    ],
    "Natursteinbetriebe": [
      "Natursteinbetriebe",
      "Stein- und Mauerrestaurierung",
      "Steinversiegelung",
      "Steinbruch-Service"
    ],
    "Tierpflege": [
      "Tierpflege mobil",
      "Kleintierbetreuung mobil",
      "Hundetrainer mobil"
    ],
    "Umwelttechnik": [
      "Umwelttechnik",
      "Bodengutachter",
      "Recyclingbetriebe",
      "Kompostierungsanlagen",
      "Umweltgutachten",
      "Schadstoffmessung",
      "Luftqualitätstechnik"
    ],
    "Wasserwirtschaft": [
      "Wasserwirtschaft",
      "Kanaldienstleister",
      "Gewässerpflege",
      "Wasserbrunnenbau",
      "Zisternenbau",
      "Kläranlagenservice",
      "Kläranlageninstallation",
      "Regenrückhaltebecken-Service",
      "Regenwassersystemtechnik",
      "Stadtentwässerung",
      "Wasserzählerwechsel",
      "Hochwasserschutz"
    ],
    "Wildtiermanagement": [
      "Wildtiermanagement",
      "Jagd- & Revierdienste",
      "Wildzaunbau",
      "Spechtlochreparatur"
    ],
    "Immobilienverwaltung": [
      "Immobilienverwaltung",
      "Facility Management",
      "Hausverwaltungen",
      "Wohnungsgenossenschaften",
      "Projektentwickler",
      "Makler mit Sanierungsteams",
      "Objektbetreuung",
      "Leerstandsmanagement"
    ],
    "Energieberatung": [
      "Energieberater",
      "Energieaudits",
      "Energieversorger",
      "Energietechnik-Großanlagen",
      "Energiekostenmessung"
    ],
    "Thermografie und Inspektionen": [
      "Thermografie",
      "Immobilieninspektionen",
      "Rohrkamera-Inspektionen",
      "Feuchtigkeitsmessung",
      "Elektrothermografie",
      "Drohneninspektionen",
      "Dachinspektionsdrohnen",
      "Fassadeninspektionsdrohnen",
      "Windkraftinspektionsdrohnen"
    ],
    "Home-Staging": [
      "Home-Staging"
    ],
    "Renovierung und Sanierung": [
      "Renovierungsservices",
      "Badrenovierungsteams",
      "Sanierungsbetriebe",
      "Asbestsanierung",
      "Rohrsanierungsteams"
    ],
    "Notfall-Reparaturdienste": [
      "Notfall-Reparaturdienste",
      "Heizungsnotdienst",
      "Wespen-Notdienst",
      "Hydraulikschlauch-Notdienst",
      "Notstromservice"
    ],
    "Industriemontage": [
      "Industriemontage",
      "Industrieanlagenbau",
      "Industrielle Teilmontage",
      "Industriekletterer"
    ],
    "Maschinenbau": [
      "Maschinenbau-Service",
      "Produktionswartung",
      "Maschineninbetriebnahme",
      "Motoreninstandsetzung mobil"
    ],
    "Logistik": [
      "Lagerlogistik",
      "Hafenlogistik",
      "Flughafen-Bodenservice",
      "Baustellen-Logistik"
    ],
    "Pipeline und Rohrleitungen": [
      "Pipeline-Wartung",
      "Pumpenwartung",
      "Pumpensumpfreinigung",
      "Pumpentransportteams",
      "Tiefpumpeninstallation",
      "Betonpumpenwartung"
    ],
    "Verkehrstechnik": [
      "Verkehrstechnik",
      "Bahninstandhaltung",
      "Gleisbau",
      "Ampeltechnik",
      "Verkehrsleittechnik",
      "Verkehrssicherungsdienste",
      "Verkehrsspiegelmontage"
    ],
    "Stadtwerke": [
      "Stadtwerke",
      "Stromzählerdienst",
      "Fernwärmetechnik"
    ],
    "SPS und Steuerungstechnik": [
      "SPS-Programmierer",
      "SPS-Diagnose"
    ],
    "Kranservice": [
      "Kranservice",
      "Kranprüfung"
    ],
    "Montage": [
      "Montagepartner",
      "Montagepartner für Hersteller",
      "Montageüberwachung",
      "Fertiggaragen-Montage",
      "Fertighaus-Teams",
      "Tiny-House-Montage",
      "Betonfertigteile-Montage",
      "Großküchenmontage",
      "Fördertechnik-Installationen",
      "Förderband-Montage",
      "Förderbandservice",
      "Förderbandanlagenmontage",
      "Sensorinstallationen",
      "Carport-Montageteams",
      "LED-Wand-Installation",
      "Ladesäulenmontage",
      "Batteriespeichermontage"
    ],
    "Technische Betriebsdienste": [
      "Technische Betriebsdienste"
    ],
    "Baugutachten": [
      "Baugutachten",
      "Baudokumentation",
      "Baustellendokumentation"
    ],
    "Projektmanagement": [
      "Projektmanagementbüros",
      "Bauzeitenmanagement",
      "Instandhaltungsplanung",
      "Handwerkerkoordination"
    ],
    "Qualitätsmanagement": [
      "Qualitätsmanagement",
      "Qualitätsprüfung",
      "Industrielle Abnahmen"
    ],
    "Wartungsverträge": [
      "Wartungsverträge"
    ],
    "Objektgutachten": [
      "Objektgutachten"
    ],
    "Abfallmanagement": [
      "Abfallgutachter",
      "Abfallcontainer-Service",
      "Metallcontainer-Wartung",
      "Elektroschrott-Abholung",
      "Müllpressenwartung",
      "Kompaktorenservice",
      "Containerpressenservice"
    ],
    "Sicherheitskoordination": [
      "Sicherheits- & Gesundheitskoordination",
      "Sicherheitsbeleuchtungstest"
    ],
    "Mobile Dienste": [
      "Seniorenbetreuung mobil",
      "Mobile Friseure",
      "Mobile Nageldesigner",
      "Mobile Autopflege",
      "Mobile KFZ-Mechaniker",
      "Mobile Lackierer",
      "Mobile Schweißteams",
      "Mobile Medientechnik",
      "Mobile Smart-Lock-Installateure",
      "Mobile Sanitärstation-Wartung",
      "Mobile Containerdienste",
      "Mobile Schulungsanbieter",
      "Mobile Labordienstleister",
      "Mobile Greenscreen-Studios",
      "Mobile Erste-Hilfe-Kurse"
    ],
    "Hausaufsicht": [
      "Hausaufsicht während Urlaub",
      "Hauscheck-Dienste",
      "Hausnotrufdienste"
    ],
    "Handyman": [
      "Handyman-Dienstleister"
    ],
    "Haushaltsorganisation": [
      "Haushaltsorganisation"
    ],
    "Fensterputzer": [
      "Fensterputzer"
    ],
    "Zaun- und Carportbau": [
      "Zaunmontage",
      "Zaunbau mobil",
      "Wildzaunbau",
      "Zaunanlagenbau",
      "Carportbau"
    ],
    "Terrassenbau": [
      "Terrassenbau"
    ],
    "Verpackungsservices": [
      "Verpackungsservices mobil"
    ],
    "Produktionslinien": [
      "Produktionslinien-Support"
    ],
    "Kunststoffverarbeitung": [
      "Kunststoffverarbeitung"
    ],
    "Werkzeuginstandhaltung": [
      "Werkzeuginstandhaltung",
      "Werkzeuglieferdienste"
    ],
    "Fertigungstechnik": [
      "Fertigungstechnikservice"
    ],
    "Abfüllanlagen": [
      "Abfüllanlagen-Service"
    ],
    "Chemietechnik": [
      "Chemietechnik-Wartung"
    ],
    "Laborgeräte": [
      "Laborgerätewartung",
      "Betonlabor"
    ],
    "Reinraumservice": [
      "Reinraumservice",
      "Reinraumtechnik-Service",
      "Isolationsraumtechnik"
    ],
    "Hydraulik und Pneumatik": [
      "Hydraulikservice",
      "Pneumatikservice"
    ],
    "Walzwerksupport": [
      "Walzwerksupport"
    ],
    "Lackierdienste": [
      "Industrielle Lackierdienste",
      "Asphaltspritzservice"
    ],
    "KFZ-Service": [
      "Reifenwechsel mobil",
      "Autoglas-Service",
      "Smart-Repair",
      "Caravan-Wartung",
      "Reifenservice LKW",
      "LKW-Reparatur mobil",
      "Trailerwartung",
      "Kühltransporter-Service",
      "Fuhrparkpflege",
      "Mietwagenflottenservice",
      "Autowaschstraßenservice"
    ],
    "Bootspflege": [
      "Bootspflege mobil",
      "Bootstechnik-Service",
      "Yachtausrüstung",
      "Schiffsmotorenservice",
      "Hafeninstandsetzung"
    ],
    "Fahrradreparatur": [
      "Fahrradreparatur mobil",
      "E-Bike-Service"
    ],
    "Mähroboter": [
      "Mähroboter-Service"
    ],
    "Photobooth": [
      "Photobooth-Aufbau"
    ],
    "Drohnenflugdienste": [
      "Drohnenflugdienste",
      "Drohnen-Landvermessung",
      "Drohnenrettung"
    ],
    "Kanal-TV-Inspektion": [
      "Kanal-TV-Inspektion"
    ],
    "Straßenbeleuchtung": [
      "Straßenbeleuchtungsdienst"
    ],
    "Bauhofdienste": [
      "Bauhofdienste",
      "Bauhofarbeiten"
    ],
    "Straßenschilder": [
      "Straßenschilder-Montage",
      "Schildermontage"
    ],
    "Straßenmarkierung": [
      "Straßenmarkierungsdienste",
      "Parkplatzmarkierer"
    ],
    "Parkplatzservice": [
      "Parkplatzservice"
    ],
    "Tunnelwartung": [
      "Tunnelwartung",
      "Brückeninspektion"
    ],
    "Leitungsdokumentation": [
      "Leitungsdokumentation",
      "Vermessungstechnik"
    ],
    "Tattoo-Studios": [
      "Tattoo-Studios mit Außendienst"
    ],
    "Feuerwehr-Service": [
      "Feuerwehr-Nachrüstservice"
    ],
    "Smart-Lock-Systeme": [
      "Smart-Lock-Systeme"
    ],
    "Ladesäulen": [
      "Ladesäulenmontage",
      "Ladesäulenwartung"
    ],
    "Saunabau": [
      "Saunabau",
      "Outdoor-Saunabau",
      "Dampfbadinstallation"
    ],
    "Seiltechnik": [
      "Seiltechnikteams"
    ],
    "Bergungsdienste": [
      "Bergungsdienste"
    ],
    "Notfalltechnik": [
      "Notfalltechnik"
    ],
    "Strahlenschutztechnik": [
      "Strahlenschutztechnik"
    ],
    "Spezialmontage": [
      "Spezialmontage für Kunst"
    ],
    "Bühnenbau": [
      "Bühnenbau",
      "Bühnentechnik-Monteure",
      "Setbau",
      "Szenenbildbau"
    ],
    "Filmtechnik": [
      "Filmset-Aufbauteams",
      "Filmtechnikmontage",
      "Kameratechnikservice",
      "Requisitentransportteams"
    ],
    "Tontechnik": [
      "Tontechnikservice",
      "Tonmischtechnik mobil"
    ],
    "Lichttechnik": [
      "Lichttechnikservice",
      "Lichtsetzungsservice",
      "Leuchtreklameinstallation"
    ],
    "Wasserschaden": [
      "Wasserschaden-Notdienst",
      "Wasserschadentrocknung"
    ],
    "Brandschaden": [
      "Brandschadensanierer",
      "Brandschadensanierungsteam",
      "Rußentfernung"
    ],
    "Windkraft": [
      "Windkraftanlagenwartung",
      "Windrad-Installateure",
      "Turbinenwartung"
    ],
    "Baustellenabsicherung": [
      "Baustellenabsicherung"
    ],
    "Ölabscheider": [
      "Ölabscheiderwartung",
      "Fettabscheiderreinigung",
      "Fettabscheiderservice"
    ],
    "Geruchsneutralisation": [
      "Geruchsneutralisationsservice",
      "Geruchsneutralisation",
      "Professionelle Geruchsbekämpfung"
    ],
    "Denkmalpflege": [
      "Denkmalpflege"
    ],
    "Modulhaus": [
      "Modulhaus-Bauer"
    ],
    "Wintergartenbau": [
      "Wintergartenbau"
    ],
    "Platzwart": [
      "Platzwartservices",
      "Sportstättenwartung",
      "Spielplatzprüfer",
      "Spielplatzbau"
    ],
    "Holzbau": [
      "Holzzuschnittdienste",
      "Blockhausbauer",
      "Holzhausbauer",
      "Baumhäuserbauer",
      "Holzschutzservice"
    ],
    "Wärmepumpen": [
      "Luft-Wasser-Wärmepumpen-Service",
      "Erdwärmetechnik",
      "Wärmepumpendiagnose"
    ],
    "Zeltbau": [
      "Zeltbau",
      "Veranstaltungszelte-Service"
    ],
    "Feuerwerk": [
      "Feuerwerksteams",
      "Pyrotechnik-Service"
    ],
    "Großbildschirm": [
      "Großbildschirmtechniker"
    ],
    "Ausstellungsbau": [
      "Ausstellungsbau",
      "Museumsinstallationsteams"
    ],
    "Kunsttransport": [
      "Kunsttransportunternehmen",
      "Kunstrestauratoren vor Ort"
    ],
    "Graffitischutz": [
      "Graffitischutzbeschichtung"
    ],
    "Fassadenschutz": [
      "Fassadenhydrophobierung"
    ],
    "Asphaltservice": [
      "Asphaltmischanlagenservice"
    ],
    "Schlagloch": [
      "Schlaglochreparaturteams"
    ],
    "Straßenpfosten": [
      "Straßenpollermontage",
      "Leitplankenmontage"
    ],
    "Straßengräben": [
      "Straßengräbenpflege",
      "Randstreifenmähen"
    ],
    "Unkrautbekämpfung": [
      "Unkrautbeseitigung mobil",
      "Thermische Unkrautentfernung",
      "Wildwuchs-Entfernung"
    ],
    "Schimmel": [
      "Schimmelbeseitigung"
    ],
    "Notstromaggregat": [
      "Notstromaggregat-Checks"
    ],
    "USV": [
      "USV-Wartung"
    ],
    "Batteriespeicher": [
      "Batteriespeicherwartung"
    ],
    "Drainageservice": [
      "Drainageservice"
    ],
    "Fundamentabdichtung": [
      "Fundamentabdichtungsteams",
      "Mauertrockenlegung"
    ],
    "Estrich": [
      "Estrichtrocknung"
    ],
    "Bautrocknung": [
      "Bautrocknung"
    ],
    "Ölbindemittel": [
      "Ölbindemittel-Entfernung"
    ],
    "Restauration": [
      "Sofort-Restaurationsdienste"
    ],
    "Einbruch": [
      "Einbruchschadensanierung"
    ],
    "Dokumentenrettung": [
      "Dokumentenrettung"
    ],
    "Inventarsicherung": [
      "Inventarsicherung",
      "Hausratsanierung"
    ],
    "Tatortreinigung": [
      "Tatortreinigung",
      "Leichenfundort-Sanierung"
    ],
    "Staplerservice": [
      "Staplerwartung",
      "Gabelstaplerprüfung"
    ],
    "Hebebühnen": [
      "Hebebühnenprüfung"
    ],
    "Kieswerk": [
      "Kieswerk-Wartung"
    ],
    "Biofilter": [
      "Biofilterservice"
    ],
    "Lüftungsanlagen": [
      "Lüftungsanlagenmessung"
    ],
    "Luftdichtigkeit": [
      "Luftdichtigkeitsmessung"
    ],
    "Künstlerbetreuung": [
      "Künstlerbetreuungsteams"
    ],
    "Dolmetschertechnik": [
      "Dolmetschertechnik-Setup"
    ],
    "Lasertechnik": [
      "Lasertechnik-Installation"
    ],
    "Spezialeffekte": [
      "Spezialeffektinstallation"
    ],
    "Messebau": [
      "Messebodenmontage",
      "Messewandbau"
    ],
    "Werbetechnik": [
      "Werbetechnik-Montage"
    ],
    "Fahnenmast": [
      "Fahnenmastmontage",
      "Bannerinstallation"
    ],
    "Ladenbau": [
      "Ladenbauservice"
    ],
    "Kassensysteme": [
      "Kassenautomatinstallation",
      "Self-Checkout-Technik"
    ],
    "Einkaufswagen": [
      "Einkaufswagentechnik"
    ],
    "Kühlregal": [
      "Kühlregalservice"
    ],
    "Bäckerei": [
      "Bäckerei-Maschinenservice"
    ],
    "Metzgerei": [
      "Metzgerei-Technikservice"
    ],
    "Gastronomie": [
      "Gastronomie-Küchentechnik",
      "Restaurant-Technikservice"
    ],
    "Zapfanlagen": [
      "Zapfanlagentechnik"
    ],
    "Tankstellen": [
      "Tankstellenwartung",
      "Staubsaugerstationservice"
    ],
    "Off-Grid-Systeme": [
      "Off-Grid-Systemservice",
      "Inselanlagenservice"
    ],
    "Carver-Systeme": [
      "Carver-Systeminstallation"
    ],
    "Camper": [
      "Camper-Umbauten",
      "Wohnmobiltechnik-Service"
    ],
    "Offroad": [
      "Offroad-Umbauten"
    ],
    "Fahrzeugfolierung": [
      "Fahrzeugfolierer mobil",
      "Lackschutzfolienservice"
    ],
    "Automatenbefüller": [
      "Automatenbefüller"
    ],
    "Baustellen-WC": [
      "Baustellen-WC-Service"
    ],
    "Grubenentleerung": [
      "Grubenentleerung"
    ],
    "Industriestaubsauger": [
      "Industriestaubsauger-Service"
    ]
  };

  // Flatten all branches for search (keeping original flat structure)
  const branchen = Object.values(branchenCategories).flat();

  // Function to get umbrella term for a branch
  const getUmbrellaterm = (branche: string): string | null => {
    for (const [umbrella, branches] of Object.entries(branchenCategories)) {
      if (branches.includes(branche)) {
        return umbrella;
      }
    }
    return null;
  };

  const old_unused_branchen = [
    "Garten- und Landschaftsbau",
    "Elektroinstallationen",
    "Sanitär- und Heizungsbau",
    "Trockenbau",
    "Malerbetriebe",
    "Dachdecker",
    "Fliesenleger",
    "Maurerbetriebe",
    "Straßenbau",
    "Tiefbau",
    "Hochbauunternehmen",
    "Fenster- und Türenbau",
    "Metallbau",
    "Schreinereien / Tischler",
    "Parkett- und Bodenleger",
    "Solar- und Photovoltaikmontage",
    "Gebäudetechnik",
    "Fassadenbau",
    "Gerüstbau",
    "Kamin- & Ofenbauer",
    "Rohrreinigungsdienste",
    "Haustechnikbetriebe",
    "Baustellen-Logistik",
    "Bauüberwachung",
    "Bauleitungsteams",
    "Statikbüros",
    "Sanierungsbetriebe",
    "Asbestsanierung",
    "Pflasterbetriebe",
    "Betonfertigteile-Montage",
    "Paket- & Lieferdienste",
    "Kurierfahrer",
    "Hausmeisterservices",
    "Reinigungsunternehmen",
    "Gebäudereinigung",
    "Winterdienste",
    "Schlüsseldienste",
    "Poolservice",
    "Umzugsservices",
    "Möbelmontage",
    "Entrümpelungsdienste",
    "Schädlingsbekämpfer",
    "Sicherheitsdienste",
    "Catering-Lieferteams",
    "Event-Aufbau & Technik",
    "Messebauer",
    "Gerätewartung & Reparaturdienste",
    "Klimaanlagen-Service",
    "Brandschutzservice",
    "Aufzugswartung",
    "Kälte- und Lüftungstechniker",
    "Maschinenservice",
    "Außendienst-Servicetechniker",
    "Automatenbefüller",
    "IT-Onsite-Support",
    "Telekom-Techniker",
    "Medizintechnik-Service",
    "Hygiene-Services",
    "Photovoltaik-Reinigung",
    "Fassadenreinigung",
    "Forstwirtschaft",
    "Landwirtschaft",
    "Baumpflege",
    "Grünflächenpflege",
    "Friedhofsgärtner",
    "Landschaftsplanung",
    "Natursteinbetriebe",
    "Tierpflege mobil",
    "Bodengutachter",
    "Umwelttechnik",
    "Recyclingbetriebe",
    "Kompostierungsanlagen",
    "Wasserwirtschaft",
    "Kanaldienstleister",
    "Gewässerpflege",
    "Straßenbegleitgrünpflege",
    "Jagd- & Revierdienste",
    "Agrartechnik-Service",
    "Hof- & Stallservice",
    "Wildtiermanagement",
    "Immobilienverwaltung",
    "Facility Management",
    "Hausverwaltungen",
    "Wohnungsgenossenschaften",
    "Projektentwickler",
    "Makler mit Sanierungsteams",
    "Energieberater",
    "Gebäudediagnostik",
    "Home-Staging",
    "Brandschutzbeauftragte",
    "Immobilieninspektionen",
    "Rohrkamera-Inspektionen",
    "Thermografie",
    "Gebäudewartung",
    "Objektbetreuung",
    "Leerstandsmanagement",
    "Renovierungsservices",
    "Notfall-Reparaturdienste",
    "Photovoltaik-Besichtigungen",
    "Hausmeister großer Objekte",
    "Industriemontage",
    "Maschinenbau-Service",
    "Produktionswartung",
    "Lagerlogistik",
    "Hafenlogistik",
    "Flughafen-Bodenservice",
    "Pipeline-Wartung",
    "Verkehrstechnik",
    "Bahninstandhaltung",
    "Gleisbau",
    "Energieversorger",
    "Stadtwerke",
    "Netzwerkinstallation",
    "Smart-Home-Installationen",
    "Roboterwartung",
    "SPS-Programmierer",
    "PV-Planungsteams",
    "Baustofflieferanten",
    "Kranservice",
    "Industriereinigung",
    "Schlossereiteams",
    "Qualitätsprüfung",
    "Brandschutzprüfer",
    "Montagepartner",
    "Technische Betriebsdienste",
    "Energieaudits",
    "Umweltgutachten",
    "Baugutachten",
    "Sicherheitsprüfungen",
    "Prüfdienste (TÜV-ähnlich)",
    "Gebäudekontrollen",
    "Drohneninspektionen",
    "Vermessungstechnik",
    "Baudokumentation",
    "Projektmanagementbüros",
    "Montageüberwachung",
    "Qualitätsmanagement",
    "Brandschutzberatung",
    "Hygieneaudits",
    "Handwerkerkoordination",
    "Wartungsverträge",
    "Objektgutachten",
    "Industrielle Abnahmen",
    "Gebäudesicherheitschecks",
    "Abfallgutachter",
    "Verkehrssicherungsdienste",
    "Baustellendokumentation",
    "Instandhaltungsplanung",
    "Bauzeitenmanagement",
    "Sicherheits- & Gesundheitskoordination",
    "Haushaltsreinigung",
    "Seniorenbetreuung mobil",
    "Mobile Friseure",
    "Mobile Nageldesigner",
    "Gartenpflege privat",
    "Poolreinigung",
    "Hausaufsicht während Urlaub",
    "Kleintierbetreuung mobil",
    "Mobile Autopflege",
    "Kaminreinigung",
    "Fensterputzer",
    "Teppichreinigung",
    "Haushaltsorganisation",
    "Möbelreparatur vor Ort",
    "Handyman-Dienstleister",
    "Hausnotrufdienste",
    "Hauscheck-Dienste",
    "Privater Sicherheitsdienst",
    "Dachrinnenreinigung",
    "Terrassenreinigung",
    "Markisenmontage",
    "Wintergartenreinigung",
    "Rolladenreparatur",
    "Zaunmontage",
    "Carportbau",
    "Möbelmontagefirmen",
    "Industrieanlagenbau",
    "Verpackungsservices mobil",
    "Montagepartner für Hersteller",
    "Maschineninbetriebnahme",
    "Prüf- & Messdienste",
    "Großküchenmontage",
    "Fördertechnik-Installationen",
    "Produktionslinien-Support",
    "Industrielle Teilmontage",
    "Stahlbau",
    "Aluminiumverarbeitung",
    "Kunststoffverarbeitung",
    "Werkzeuginstandhaltung",
    "Fertigungstechnikservice",
    "Robotermontage",
    "Sensorinstallationen",
    "Abfüllanlagen-Service",
    "Chemietechnik-Wartung",
    "Laborgerätewartung",
    "Reinraumservice",
    "Abhol- & Bringdienste",
    "Mess- & Kalibrierdienste",
    "Hydraulikservice",
    "Pneumatikservice",
    "Förderbandservice",
    "Walzwerksupport",
    "Industrielle Lackierdienste",
    "Maschinenumzüge",
    "Technische Prüfdienste",
    "Mobile KFZ-Mechaniker",
    "Reifenwechsel mobil",
    "Autoglas-Service",
    "Smart-Repair",
    "Caravan-Wartung",
    "Bootspflege mobil",
    "Fahrradreparatur mobil",
    "E-Bike-Service",
    "Werkzeuglieferdienste",
    "Baumaschinenprüfung",
    "Agrarfahrzeug-Service",
    "Mähroboter-Service",
    "Photobooth-Aufbau",
    "Eventdekoration",
    "Grill-Catering-Teams",
    "Foodtrucks",
    "Marktstandaufbau",
    "Promotionteams",
    "Baustellenbewachung",
    "Transporthelfer",
    "Mobile Baustrominstallation",
    "Mobile Sanitärstation-Wartung",
    "Mobile Containerdienste",
    "Drohnenflugdienste",
    "Mobile IT-Einrichtung",
    "Mobile Serverinstallation",
    "Mobile Kassensysteme",
    "Mobile Medientechnik",
    "Mobile Smart-Lock-Installateure",
    "Mobile Schweißteams",
    "Gasnetz-Wartung",
    "Wasserzählerwechsel",
    "Stromzählerdienst",
    "Fernwärmetechnik",
    "Pumpenwartung",
    "Kläranlagenservice",
    "Kanal-TV-Inspektion",
    "Hochwasserschutz",
    "Straßenbeleuchtungsdienst",
    "Ampeltechnik",
    "Funkmast-Wartung",
    "Glasfaserausbau",
    "Kabelverlegung",
    "Telekommunikationsausbau",
    "Stadtentwässerung",
    "Bauhofdienste",
    "Kommunale Grünpflege",
    "Bauhofarbeiten",
    "Straßenschilder-Montage",
    "Verkehrsleittechnik",
    "Straßenmarkierungsdienste",
    "Parkplatzservice",
    "Tunnelwartung",
    "Brückeninspektion",
    "Leitungsdokumentation",
    "Tattoo-Studios mit Außendienst",
    "Spezialreinigung (Graffiti/Öl)",
    "Feuerwehr-Nachrüstservice",
    "Löschanlagenservice",
    "Alarmanlagen-Installateure",
    "Videoüberwachungstechnik",
    "Smart-Lock-Systeme",
    "Drohnenrettung",
    "PV-Gutachter",
    "Ladesäulenmontage",
    "Ladesäulenwartung",
    "Outdoor-Saunabau",
    "Whirlpoolinstallation",
    "Zaunbau mobil",
    "Hundetrainer mobil",
    "Schäferdienste",
    "Bienenpflegebetriebe",
    "Metallrecycling mobil",
    "Bootstechnik-Service",
    "Yachtausrüstung",
    "Schiffsmotorenservice",
    "Hafeninstandsetzung",
    "Seiltechnikteams",
    "Industriekletterer",
    "Bergungsdienste",
    "Notfalltechnik",
    "Mobile Erste-Hilfe-Kurse",
    "Brandschutzschulungen",
    "Mobile Schulungsanbieter",
    "Mobile Labordienstleister",
    "Strahlenschutztechnik",
    "Spezialmontage für Kunst",
    "Bühnenbau",
    "Filmset-Aufbauteams",
    "Tontechnikservice",
    "Lichttechnikservice",
    "Klimaanlagenvermietung",
    "Notstromservice",
    "Wasserschaden-Notdienst",
    "Brandschadensanierer",
    "Drohnen-Landvermessung",
    "Landwirtschaftliche Maschinenreparatur",
    "Photovoltaik-Gutachterdienste",
    "Windkraftanlagenwartung",
    "Windrad-Installateure",
    "Turbinenwartung",
    "Fassadenbegrünung",
    "Bewässerungsanlagenbau",
    "Regenwassersystemtechnik",
    "Baustromverteilung",
    "Baustellenabsicherung",
    "Parkplatzmarkierer",
    "Straßensanierungsdienste",
    "Asphaltierungsteams",
    "Kanalreparaturdienste",
    "Kanalspülung",
    "Ölabscheiderwartung",
    "Brandschutzabschottung",
    "Mobile Lackierer",
    "Industriestaubsauger-Service",
    "Hochdruckreinigungsteam",
    "Geruchsneutralisationsservice",
    "Stein- und Mauerrestaurierung",
    "Denkmalpflege",
    "Wasserbrunnenbau",
    "Zisternenbau",
    "Pumpentransportteams",
    "Baustoffprüfstellen",
    "Betonlabor",
    "Prüfstatiker",
    "Fertiggaragen-Montage",
    "Fertighaus-Teams",
    "Tiny-House-Montage",
    "Modulhaus-Bauer",
    "Containerbau",
    "Hallenbau",
    "Stahlhallenmontage",
    "Wintergartenbau",
    "Carport-Montageteams",
    "Zaunanlagenbau",
    "Terrassenbau",
    "Naturpool-Bauer",
    "Bewässerungstechniker",
    "Baumaschinenvermietung",
    "Baustellen-WC-Service",
    "Event-WC-Service",
    "Platzwartservices",
    "Grünflächenbewässerung",
    "Tropfbewässerungsinstallateure",
    "Großküchenreinigung",
    "Restaurant-Technikservice",
    "Großküchenlüftungsreinigung",
    "Fettabscheiderreinigung",
    "Abfallcontainer-Service",
    "Metallcontainer-Wartung",
    "Elektroschrott-Abholung",
    "Bauholzlieferanten",
    "Holzzuschnittdienste",
    "Schreinermontage",
    "Möbeltransporte",
    "Küchenmontage",
    "Badrenovierungsteams",
    "Saunabau",
    "Dampfbadinstallation",
    "Pooltechnikservice",
    "Whirlpool-Reparatur",
    "Solarthermie-Installateure",
    "Luft-Wasser-Wärmepumpen-Service",
    "Erdwärmetechnik",
    "Blockhausbauer",
    "Holzhausbauer",
    "Baumhäuserbauer",
    "Spielplatzbau",
    "Spielplatzprüfer",
    "Sportstättenwartung",
    "Kunstraseninstallation",
    "Zeltbau",
    "Veranstaltungszelte-Service",
    "Feuerwerksteams",
    "Event-Sicherheitsauflagenprüfer",
    "Bühnentechnik-Monteure",
    "LED-Wand-Installation",
    "Großbildschirmtechniker",
    "Ausstellungsbau",
    "Museumsinstallationsteams",
    "Kunsttransportunternehmen",
    "Kunstrestauratoren vor Ort",
    "Teppichverleger mobil",
    "Parkettschädenreparatur",
    "Hausfassadenreinigung",
    "Graffitischutzbeschichtung",
    "Fassadenhydrophobierung",
    "Steinversiegelung",
    "Holzschutzservice",
    "Asphaltspritzservice",
    "Schlaglochreparaturteams",
    "Straßenpollermontage",
    "Verkehrsspiegelmontage",
    "Leitplankenmontage",
    "Straßengräbenpflege",
    "Randstreifenmähen",
    "Unkrautbeseitigung mobil",
    "Thermische Unkrautentfernung",
    "Wildwuchs-Entfernung",
    "Wurzelfräsen-Service",
    "Heckenrückschnittdienste",
    "Baumkontrolleure",
    "Sturmholz-Beseitigung",
    "Forstschutzteams",
    "Wildzaunbau",
    "Tierfallenservice",
    "Schädlingsmonitoring",
    "Wespen-Notdienst",
    "Spechtlochreparatur",
    "Taubenschutz-Montage",
    "Insektennetz-Montage",
    "Marderschutz-Service",
    "Dachbodenreinigung",
    "Schimmelbeseitigung",
    "Feuchtigkeitsmessung",
    "Bauforensik",
    "Schadstoffmessung",
    "Luftqualitätstechnik",
    "Klimaservice für Bürogebäude",
    "Kältetechnik-Großanlagen",
    "Lüftungskanalreinigung",
    "Entrauchungsanlagenprüfung",
    "Brandschutztürenprüfung",
    "Fluchttürenwartung",
    "Sicherheitsbeleuchtungstest",
    "Notstromaggregat-Checks",
    "USV-Wartung",
    "Batteriespeicherwartung",
    "Photovoltaik-String-Messung",
    "Energietechnik-Großanlagen",
    "Smart-Meter-Installation",
    "E-Check-Dienstleister",
    "Blitzschutzinstallation",
    "Blitzschutzprüfung",
    "Elektrothermografie",
    "Kabelfehlerortung",
    "Steckdosen-Prüfservice",
    "Maschinenverkabelung",
    "Schaltschrankbau vor Ort",
    "SPS-Diagnose",
    "Förderband-Montage",
    "Roboterschutzzaun-Montage",
    "Sicherheitsscanner-Installation",
    "Verpackungsmaschinenservice",
    "CNC-Maschinenprüfung",
    "Metallfrässervice vor Ort",
    "Schweißroboter-Setup",
    "Autoklavenservice",
    "Dampfsterilisationsservices",
    "Heizungsnotdienst",
    "Pelletheizungs-Service",
    "Ölheizungsteams",
    "Gasleitungsprüfung",
    "Warmwassertechnik",
    "Trinkwasserhygieneprüfer",
    "Legionellenprüfung",
    "Filterwechsel-Service",
    "Rohrsanierungsteams",
    "Epoxidharz-Rohrsanierung",
    "Rohrfräsdienst",
    "Abflusswartung",
    "Rückstauklappen-Service",
    "Pumpensumpfreinigung",
    "Grubenentleerung",
    "Fettabscheiderservice",
    "Kläranlageninstallation",
    "Regenrückhaltebecken-Service",
    "Teichbau",
    "Teichsanierung",
    "Bewässerungsbrunnenbau",
    "Tiefpumpeninstallation",
    "Drainageservice",
    "Fundamentabdichtungsteams",
    "Mauertrockenlegung",
    "Estrichleger",
    "Bodenversiegelung",
    "Industriebodeninstallation",
    "Hallenbodensanierung",
    "Teppichfliesenmontage",
    "Vinylbodenmontage",
    "Laminatverleger",
    "PVC-Bodenservice",
    "Bodenreparaturdienst",
    "Estrichtrocknung",
    "Wasserschadentrocknung",
    "Bautrocknung",
    "Ölbindemittel-Entfernung",
    "Brandschadensanierungsteam",
    "Sofort-Restaurationsdienste",
    "Einbruchschadensanierung",
    "Rußentfernung",
    "Geruchsneutralisation",
    "Dokumentenrettung",
    "Elektronikreinigung nach Brand",
    "Inventarsicherung",
    "Hausratsanierung",
    "Tatortreinigung",
    "Leichenfundort-Sanierung",
    "Professionelle Geruchsbekämpfung",
    "Hygiene-Spezialteams",
    "Seniorenheim-Hausmeisterdienste",
    "Krankenhaus-Technikservice",
    "Medizinproduktinstallation",
    "Labortechnik-Aufbau",
    "Reinraumtechnik-Service",
    "Isolationsraumtechnik",
    "Desinfektionsservice",
    "OP-Technik-Wartung",
    "Zahnmedizintechnik-Wartung",
    "Medikationsschrank-Installation",
    "Pflegedienst-Hausmeisterservice",
    "Mietwagenflottenservice",
    "Fuhrparkpflege",
    "LKW-Reparatur mobil",
    "Trailerwartung",
    "Kühltransporter-Service",
    "Reifenservice LKW",
    "Staplerwartung",
    "Gabelstaplerprüfung",
    "Kranprüfung",
    "Hebebühnenprüfung",
    "Baumaschinenlackierung",
    "Motoreninstandsetzung mobil",
    "Hydraulikschlauch-Notdienst",
    "Betonpumpenwartung",
    "Asphaltmischanlagenservice",
    "Kieswerk-Wartung",
    "Steinbruch-Service",
    "Förderbandanlagenmontage",
    "Sortieranlagen-Service",
    "Recyclingmaschinenmontage",
    "Müllpressenwartung",
    "Kompaktorenservice",
    "Containerpressenservice",
    "Biofilterservice",
    "Lüftungsanlagenmessung",
    "Kälteanlagenprüfung",
    "Wärmepumpendiagnose",
    "Heizungsoptimierung",
    "Energiekostenmessung",
    "Gebäudethermografie",
    "Luftdichtigkeitsmessung",
    "Dachinspektionsdrohnen",
    "Fassadeninspektionsdrohnen",
    "Windkraftinspektionsdrohnen",
    "Großevent-Logistik",
    "Festival-Aufbau",
    "Konzertbühnenmontage",
    "Tournee-Logistik",
    "Künstlerbetreuungsteams",
    "Filmtechnikmontage",
    "Mobile Greenscreen-Studios",
    "Requisitentransportteams",
    "Setbau",
    "Szenenbildbau",
    "Kameratechnikservice",
    "Lichtsetzungsservice",
    "Tonmischtechnik mobil",
    "Dolmetschertechnik-Setup",
    "Lasertechnik-Installation",
    "Pyrotechnik-Service",
    "Spezialeffektinstallation",
    "Event-Sicherheitsinspektionen",
    "Messebodenmontage",
    "Messewandbau",
    "Werbetechnik-Montage",
    "Schildermontage",
    "Leuchtreklameinstallation",
    "Fahnenmastmontage",
    "Bannerinstallation",
    "Ladenbauservice",
    "Kassenautomatinstallation",
    "Self-Checkout-Technik",
    "Einkaufswagentechnik",
    "Kühlregalservice",
    "Supermarkt-Hausmeisterdienste",
    "Bäckerei-Maschinenservice",
    "Metzgerei-Technikservice",
    "Gastronomie-Küchentechnik",
    "Zapfanlagentechnik",
    "Tankstellenwartung",
    "Autowaschstraßenservice",
    "Staubsaugerstationservice",
    "Solarcarport-Installation",
    "Balkonkraftwerk-Montage",
    "Batteriespeichermontage",
    "Off-Grid-Systemservice",
    "Inselanlagenservice",
    "Yacht-Solaranlagentechnik",
    "Carver-Systeminstallation",
    "Camper-Umbauten",
    "Wohnmobiltechnik-Service",
    "Offroad-Umbauten",
    "Fahrzeugfolierer mobil",
    "Lackschutzfolienservice"
  ];

  // Calculate similarity score between two strings (Levenshtein-inspired)
  const getSimilarityScore = (str1: string, str2: string): number => {
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();
    
    // Check if s2 is an umbrella term (Überbegriff)
    const isUmbrellaterm = Object.keys(branchenCategories).map(k => k.toLowerCase()).includes(s2);
    
    // Exact match
    if (s1 === s2) return isUmbrellaterm ? 2000 : 1000;
    
    // Word-based matching (split by spaces, hyphens, slashes)
    const words1 = s1.split(/[\s\-\/&]+/);
    const words2 = s2.split(/[\s\-\/&]+/);
    
    // Check for Überbegriff (umbrella term) - prioritize shorter, more general terms
    // Example: "Reinigung" should match "Reinigungsdienste" higher than "Poolreinigung"
    for (const word1 of words1) {
      if (word1.length < 3) continue; // Skip very short words
      
      for (const word2 of words2) {
        // Exact word match
        if (word1 === word2) {
          // MASSIVE bonus for umbrella terms
          if (isUmbrellaterm) return 1900;
          // Bonus for shorter branch names (Überbegriff indicator)
          const shortnessBonus = Math.max(0, 100 - s2.length);
          return 950 + shortnessBonus;
        }
        
        // Word starts with search term (e.g., "reinigung" matches "reinigungsdienste")
        if (word2.startsWith(word1)) {
          // HUGE priority for umbrella terms
          if (isUmbrellaterm) return 1800;
          
          // Higher priority if it's near the start of the branch name
          const position = s2.indexOf(word2);
          const positionBonus = position === 0 ? 100 : 50;
          // Bonus for being an Überbegriff (shorter branch name)
          const isShortGeneral = s2.length < 30 && !s2.includes('mobil') && !s2.includes('-');
          const uberbegriffBonus = isShortGeneral ? 150 : 0;
          return 900 + positionBonus + uberbegriffBonus - Math.abs(word2.length - word1.length);
        }
        
        // Search term starts with word (e.g., "reinigungsunternehmen" typed partially)
        if (word1.startsWith(word2)) {
          if (isUmbrellaterm) return 1700;
          return 850 - Math.abs(word1.length - word2.length);
        }
      }
    }
    
    // One contains the other (full string match)
    if (s2.includes(s1)) {
      // Check if search term appears at the START of branch (Überbegriff indicator)
      if (s2.startsWith(s1)) {
        if (isUmbrellaterm) return 1600;
        const shortnessBonus = Math.max(0, 100 - s2.length);
        return 800 + shortnessBonus;
      }
      // Search term appears in middle/end (more specific term)
      return 700 - (s2.length - s1.length);
    }
    if (s1.includes(s2)) {
      if (isUmbrellaterm) return 1500;
      return 650 - (s1.length - s2.length);
    }
    
    // Partial word matches
    for (const word1 of words1) {
      if (word1.length < 3) continue;
      for (const word2 of words2) {
        if (word2.includes(word1)) {
          if (isUmbrellaterm) return 1400;
          return 600 - Math.abs(word2.length - word1.length);
        }
        if (word1.includes(word2)) return 550 - Math.abs(word1.length - word2.length);
        if (word2.startsWith(word1.slice(0, -1))) return 500; // Allow one char difference at end
        if (word1.startsWith(word2.slice(0, -1))) return 450;
      }
    }
    
    // Character overlap score (for typos)
    let overlap = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s2.includes(s1[i])) overlap++;
    }
    const overlapRatio = overlap / Math.max(s1.length, s2.length);
    
    if (overlapRatio > 0.6) return 400 * overlapRatio;
    
    return 0;
  };

  // Filter and sort branchen based on search term with intelligent matching
  const filteredBranchen = useMemo(() => {
    if (!searchTerm.trim()) {
      return branchen;
    }
    
    const term = searchTerm.toLowerCase();
    
    // Score all branches
    const scoredBranches = branchen.map(branche => ({
      branche,
      score: getSimilarityScore(term, branche)
    }));
    
    // Filter out low scores and sort by score
    return scoredBranches
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.branche);
  }, [searchTerm, branchen]);

  const displayedBranchen = showAll ? filteredBranchen : filteredBranchen.slice(0, 48);
  const hasSearchResults = searchTerm.trim() && filteredBranchen.length > 0;
  const noResults = searchTerm.trim() && filteredBranchen.length === 0;

  // Random reasons why Taskey fits the branch
  const reasons = [
    "Automatische Zeiterfassung spart wertvolle Zeit",
    "Digitale Auftragsplanung für mehr Übersicht",
    "Schnelle Rechnungsstellung direkt nach dem Auftrag",
    "GPS-Tracking optimiert Ihre Routen",
    "Perfekt für mobile Teams im Außendienst",
    "Einfache Mitarbeiterkoordination in Echtzeit",
    "DSGVO-konforme Datenverwaltung"
  ];

  // Function to get a consistent random reason for each branch
  const getReasonForBranch = (branche: string): string => {
    // Use branch name to generate consistent index
    let hash = 0;
    for (let i = 0; i < branche.length; i++) {
      hash = branche.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % reasons.length;
    return reasons[index];
  };

  return (
    <>
      <DemoBookingModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Über <span className="text-blue-900">600 Branchen</span> vertrauen auf Taskey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Passt Taskey zu Ihnen? Finden Sie es raus!
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Branche suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-full border-2 border-gray-200 focus:border-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            )}
          </div>
          {hasSearchResults && (
            <p className="text-center mt-4 text-gray-600">
              <span className="font-semibold text-blue-900">{filteredBranchen.length}</span> Branche{filteredBranchen.length !== 1 ? 'n' : ''} gefunden
            </p>
          )}
        </div>

        {/* No Results Message */}
        {noResults && (
          <div className="text-center py-12 mb-12">
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg border border-gray-200">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Keine Branche gefunden
              </h3>
              <p className="text-gray-600 mb-6">
                Wir konnten keine passende Branche für "{searchTerm}" finden.
              </p>
              <p className="text-gray-700 mb-4">
                Aber keine Sorge – Taskey ist flexibel und passt sich vielen Dienstleistungsbetrieben an!
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition-all hover:scale-105"
              >
                Kontaktieren Sie uns
              </a>
            </div>
          </div>
        )}

        {/* Branchen Grid */}
        {!noResults && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {displayedBranchen.map((branche, index) => {
              const isTopResult = hasSearchResults && index === 0;
              const showReason = hasSearchResults;
              const reason = getReasonForBranch(branche);
              
              return (
                <div
                  key={index}
                  className={`bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 border ${
                    isTopResult 
                      ? 'border-blue-500 ring-4 ring-blue-200 animate-pulse shadow-lg' 
                      : 'border-gray-100 hover:border-blue-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      isTopResult ? 'bg-blue-500' : 'bg-blue-900'
                    }`}></div>
                    <p className={`text-sm font-medium ${
                      isTopResult ? 'text-blue-900 font-bold' : 'text-gray-700'
                    }`}>{branche}</p>
                  </div>
                  {showReason && (
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <p className="text-xs text-gray-600 italic">
                        💡 {reason}
                      </p>
                    </div>
                  )}
                  {isTopResult && (
                    <div className="mt-2 text-xs text-blue-600 font-semibold">
                      ✓ Perfekte Übereinstimmung
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Show More/Less Button */}
        {!noResults && filteredBranchen.length > 48 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-blue-900 text-white text-lg font-semibold rounded-full hover:bg-blue-800 transition-all hover:scale-105 hover:shadow-xl"
            >
              {showAll 
                ? 'Weniger anzeigen' 
                : `Alle ${filteredBranchen.length} ${searchTerm ? 'gefundenen ' : ''}Branchen anzeigen`
              }
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ist Ihre Branche dabei?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Entdecken Sie, wie Taskey Ihren Betrieb effizienter macht
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="px-8 py-4 bg-white text-blue-900 text-lg font-semibold rounded-full hover:bg-blue-50 transition-all hover:scale-105 hover:shadow-xl"
            >
              Kostenlose Demo buchen
            </button>
            <a
              href="https://signup.vars-development.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105"
            >
              4 Wochen kostenlos testen
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
