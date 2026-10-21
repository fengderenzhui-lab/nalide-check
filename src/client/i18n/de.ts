import type { Translation } from './en';

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export default {
  checks: {
    ssl: 'SSL-Zertifikat',
    dns: 'DNS-Einträge',
    cookies: 'Cookies',
    'robots-txt': 'Crawling-Regeln',
    headers: 'Header',
    quality: 'Qualitätsmetriken',
    location: 'Serverstandort',
    hosts: 'Zugehörige Hosts',
    redirects: 'Weiterleitungskette',
    'txt-records': 'TXT-Einträge',
    status: 'Serverstatus',
    ports: 'Offene Ports',
    'trace-route': 'Traceroute',
    carbon: 'CO₂-Fußabdruck',
    'server-info': 'Serverinfo',
    vulnerabilities: 'Schwachstellen',
    'whois-lookup': 'Whois-Abfrage',
    'domain-info': 'Domaininfo',
    dnssec: 'DNSSEC',
    'caa-records': 'CAA-Einträge',
    hsts: 'HSTS',
    'dns-server': 'DNS-Server',
    'tech-stack': 'Tech-Stack',
    sitemap: 'Sitemap',
    'security-txt': 'Security.txt',
    'linked-pages': 'Verlinkte Seiten',
    'social-tags': 'Social-Tags',
    'social-presence': 'Social-Media-Präsenz',
    'mail-config': 'E-Mail-Konfiguration',
    firewall: 'Firewall',
    'http-security': 'HTTP-Sicherheit',
    'mixed-content': 'Mixed Content & SRI',
    archives: 'Archivverlauf',
    rank: 'Globales Ranking',
    'block-lists': 'Sperrerkennung',
    threats: 'Malware & Phishing',
    breaches: 'Datenlecks',
    trackers: 'Tracker & Drittanbieter',
    'tls-connection': 'TLS-Verbindung',
    'tls-security-audit': 'TLS-Sicherheitsaudit',
    'tls-client-compat': 'TLS-Client-Kompatibilität',
    screenshot: 'Screenshot',
    subdomains: 'Subdomains',
  },

  card: {
    info: (title) => `Infos zu ${title}`,
    refresh: (title) => `${title} neu laden`,
    crashed: 'Diese Komponente ist unerwartet abgestürzt',
    crashedHelp:
      'Meist passiert das, wenn die Antwort des Servers nicht wie erwartet war. Mehr Infos ' +
      'findest du in den Logs. Tritt das Problem weiterhin auf, melde es bitte im Repository.',
    errorDetails: 'Fehlerdetails',
  },

  advisory: {
    heading: 'Befunde',
    severity: {
      critical: 'Kritisch',
      issue: 'Probleme',
      warning: 'Warnungen',
      info: 'Informationen',
      pass: 'Bestanden',
    },
  },

  progress: {
    state: {
      success: 'erfolgreich',
      loading: 'lädt',
      error: 'Fehler',
      'timed-out': 'Zeitüberschreitung',
      skipped: 'übersprungen',
    },
    jobs: {
      success: (n) => `${plural(n, 'Job', 'Jobs')} erfolgreich`,
      skipped: (n) => `${plural(n, 'Job', 'Jobs')} übersprungen`,
      'timed-out': (n) => `${plural(n, 'Job', 'Jobs')} mit Zeitüberschreitung`,
      error: (n) => `${plural(n, 'Job', 'Jobs')} fehlgeschlagen`,
    },
    showReason: {
      error: 'Fehler anzeigen',
      'timed-out': 'Grund für Zeitüberschreitung',
      skipped: 'Grund fürs Überspringen',
    },
    loading: (done, total) => `${done} von ${total} geladen`,
    loadingJobs: (done, total) => `${done} / ${total} Jobs geladen`,
    finished: (total, seconds) => `${total} Abfragen in ${seconds} s abgeschlossen`,
    allPassed: (n) => `${plural(n, 'Job', 'Jobs')} erfolgreich abgeschlossen`,
    doneIn: (time) => `Fertig in ${time}`,
    issues: (n) => plural(n, 'Problem', 'Probleme'),
    took: (ms) => `Dauerte ${ms} ms`,
    retry: 'Erneut versuchen',
    detailsFor: (name) => `Details zu ${name}`,
    ended: (name, state, ms) =>
      `Der Job ${name} endete mit Status „${state}“${ms ? ` nach ${ms} ms` : ''}.`,
    reason: 'Grund:',
    serverResponse: 'Serverantwort:',
    showLoadState: 'Ladestatus anzeigen',
    showDetails: 'Details anzeigen',
    dismiss: 'Schließen',
    consoleHint: 'Logs und mehr Infos findest du in der Browserkonsole',
    failuresNormal:
      'Es ist normal, dass einige Jobs fehlschlagen, etwa weil der Host die nötigen Infos nicht ' +
      'liefert, wegen Einschränkungen der Lambda-Funktion oder weil ein API-Limit erreicht wurde.',
    learnMore: 'Mehr über Web-Check',
  },

  loader: {
    crunching: 'Analyse läuft',
    checks: (done, total) => `${done} / ${total} Prüfungen`,
    status: (done, total) => `Analyse läuft, ${done} von ${total} fertig`,
    wait: 'Es kann bis zu einer Minute dauern, bis alle Jobs fertig sind',
    preview: 'Erste Ergebnisse erscheinen schon unten, sobald sie da sind',
  },

  noResults: {
    possibleReasons: 'Mögliche Gründe:',
    reason: 'Grund:',
    lookupError: 'Fehler bei der Abfrage:',
    unreachable: {
      title: 'Seite nicht erreichbar',
      description:
        'Für diesen Host konnte keine IP-Adresse ermittelt werden, daher können keine ' +
        'Prüfungen laufen',
      reasons: [
        'Die Domain ist vielleicht falsch geschrieben oder nicht mehr registriert',
        'Die Website ist eventuell offline oder vorübergehend nicht erreichbar',
        'Ein DNS-Problem könnte die Abfrage stören',
        'Eine Firewall oder Geo-Sperre könnte den Zugriff verhindern',
      ],
    },
    invalid: {
      title: 'Ungültige Eingabe',
      description:
        'Das sieht nicht nach einer gültigen URL oder IP-Adresse aus, daher können keine ' +
        'Prüfungen laufen',
      reasons: [
        'Gib eine Domain (example.com) oder eine IPv4- / IPv6-Adresse ein',
        'Prüfe die Eingabe auf Tippfehler oder überflüssige Zeichen',
        'Vermeide Leerzeichen und nicht unterstützte Symbole in der Adresse',
      ],
    },
    'api-down': {
      title: 'Dienst nicht verfügbar',
      description:
        'Die meisten Prüfungen sind fehlgeschlagen, weil die Web-Check-API nicht erreichbar war',
      reasons: [
        'Die API ist eventuell ausgefallen, startet neu oder ist durch ein Rate-Limit gedrosselt',
        'Eine selbst gehostete Instanz ist vielleicht falsch konfiguriert oder offline',
        'Ein Netzwerk- oder Firewall-Problem könnte die API blockieren',
      ],
    },
    blocked: {
      title: 'Scan nicht erlaubt',
      description:
        'Alle Prüfungen wurden übersprungen, da diese Instanz das Scannen dieses Hosts nicht ' +
        'erlaubt',
      reasons: [
        'Der Administrator hat diese Domain oder diesen IP-Bereich eventuell gesperrt',
        'Die Instanz ist eventuell so konfiguriert, dass diese Prüfungen nicht laufen',
        'Du kannst diesen Host weiterhin mit deiner eigenen Web-Check-Instanz scannen',
      ],
    },
    disabled: {
      title: 'Web-Check ist pausiert',
      description:
        'Diese Instanz wurde vorübergehend deaktiviert, daher können keine Prüfungen laufen',
      reasons: [
        'Die öffentliche Instanz ist eventuell pausiert, um die Betriebskosten zu begrenzen',
        'Eine selbst gehostete Instanz ist vielleicht im Wartungsmodus',
        'Du kannst deine eigene Kopie aus dem Open-Source-Repo auf GitHub betreiben',
      ],
    },
  },

  rawData: {
    heading: 'Rohdaten ansehen / herunterladen',
    download: 'Ergebnisse herunterladen',
    view: 'Ergebnisse ansehen',
    update: 'Ergebnisse aktualisieren',
    hide: 'Ergebnisse ausblenden',
    frameTitle: 'Ergebnisse, über JSON Hero',
    open: 'Diese Ergebnisse in JSON Hero öffnen',
    httpError: (status) => `HTTP-Fehler! Status: ${status}`,
    about:
      'Das sind die Rohdaten zu deiner URL, im JSON-Format. Du kannst sie für weitere Analysen ' +
      'in dein eigenes Programm importieren.',
  },

  resources: {
    heading: 'Externe Tools für weitere Recherchen',
  },

  errorPage: {
    home: 'Zur Startseite',
    github: 'Auf GitHub ansehen',
    report: 'Problem melden',
    reload: 'Seite neu laden',
    heading: 'Da ist etwas schiefgelaufen',
    subheading: 'Ein unerwarteter Fehler ist aufgetreten.',
    apology:
      'Das tut uns leid. Meist hilft es, die Seite neu zu laden. Falls nicht, melde den Fehler ' +
      'bitte.',
    message: 'Das ist die Fehlermeldung, die wir erhalten haben:',
    notFound: 'Nicht gefunden',
  },
} satisfies Translation;
