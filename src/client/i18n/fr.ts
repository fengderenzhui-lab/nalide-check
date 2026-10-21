import type { Translation } from './en';

// French counts 0 and 1 as singular
const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;

export default {
  checks: {
    ssl: 'Certificat SSL',
    dns: 'Enregistrements DNS',
    cookies: 'Cookies',
    'robots-txt': "Règles d'exploration",
    headers: 'En-têtes',
    quality: 'Indicateurs de qualité',
    location: 'Emplacement du serveur',
    hosts: 'Hôtes associés',
    redirects: 'Chaîne de redirections',
    'txt-records': 'Enregistrements TXT',
    status: 'État du serveur',
    ports: 'Ports ouverts',
    'trace-route': 'Traceroute',
    carbon: 'Empreinte carbone',
    'server-info': 'Infos serveur',
    vulnerabilities: 'Vulnérabilités',
    'whois-lookup': 'Recherche Whois',
    'domain-info': 'Infos domaine',
    dnssec: 'DNSSEC',
    'caa-records': 'Enregistrements CAA',
    hsts: 'HSTS',
    'dns-server': 'Serveur DNS',
    'tech-stack': 'Technologies',
    sitemap: 'Plan du site',
    'security-txt': 'Security.txt',
    'linked-pages': 'Pages liées',
    'social-tags': 'Balises sociales',
    'social-presence': 'Présence sociale',
    'mail-config': 'Configuration e-mail',
    firewall: 'Pare-feu',
    'http-security': 'Sécurité HTTP',
    'mixed-content': 'Contenu mixte et SRI',
    archives: 'Historique des archives',
    rank: 'Classement mondial',
    'block-lists': 'Détection de blocage',
    threats: 'Malware et phishing',
    breaches: 'Fuites de données',
    trackers: 'Traqueurs et tiers',
    'tls-connection': 'Connexion TLS',
    'tls-security-audit': 'Audit de sécurité TLS',
    'tls-client-compat': 'Compatibilité clients TLS',
    screenshot: "Capture d'écran",
    subdomains: 'Sous-domaines',
  },

  card: {
    info: (title) => `Infos : ${title}`,
    refresh: (title) => `Recharger : ${title}`,
    crashed: 'Ce composant a rencontré une erreur inattendue',
    crashedHelp:
      "Cela arrive généralement quand la réponse du serveur n'est pas celle attendue. " +
      "Consultez les journaux pour en savoir plus. Si le problème persiste, merci d'ouvrir " +
      'un ticket sur le dépôt.',
    errorDetails: "Détails de l'erreur",
  },

  advisory: {
    heading: 'Diagnostic',
    severity: {
      critical: 'Critiques',
      issue: 'Problèmes',
      warning: 'Avertissements',
      info: 'Informations',
      pass: 'Réussites',
    },
  },

  progress: {
    state: {
      success: 'réussie',
      loading: 'en cours',
      error: 'erreur',
      'timed-out': 'délai dépassé',
      skipped: 'ignorée',
    },
    jobs: {
      success: (n) => plural(n, 'tâche réussie', 'tâches réussies'),
      skipped: (n) => plural(n, 'tâche ignorée', 'tâches ignorées'),
      'timed-out': (n) => `${plural(n, 'tâche', 'tâches')} hors délai`,
      error: (n) => `${plural(n, 'tâche', 'tâches')} en échec`,
    },
    showReason: {
      error: "Voir l'erreur",
      'timed-out': 'Voir le motif du délai',
      skipped: 'Voir le motif',
    },
    loading: (done, total) => `Chargement : ${done} sur ${total}`,
    loadingJobs: (done, total) => `Chargement : ${done} / ${total} tâches`,
    finished: (total, seconds) => `${total} requêtes terminées en ${seconds} s`,
    allPassed: (n) => plural(n, 'tâche terminée avec succès', 'tâches terminées avec succès'),
    doneIn: (time) => `Terminé en ${time}`,
    issues: (n) => plural(n, 'problème', 'problèmes'),
    took: (ms) => `Durée : ${ms} ms`,
    retry: 'Réessayer',
    detailsFor: (name) => `Détails : ${name}`,
    ended: (name, state, ms) =>
      `La tâche ${name} s'est terminée avec l'état « ${state} »${ms ? ` après ${ms} ms` : ''}.`,
    reason: 'Motif :',
    serverResponse: 'Réponse du serveur :',
    showLoadState: "Afficher l'état du chargement",
    showDetails: 'Afficher les détails',
    dismiss: 'Fermer',
    consoleHint: "Consultez la console du navigateur pour les journaux et plus d'infos",
    failuresNormal:
      "Il est normal que certaines tâches échouent, soit parce que l'hôte ne renvoie pas les " +
      "infos nécessaires, soit à cause des limites de la fonction lambda, soit parce qu'une " +
      "limite d'API est atteinte.",
    learnMore: 'En savoir plus sur Web-Check',
  },

  loader: {
    crunching: 'Analyse en cours',
    checks: (done, total) => `${done} / ${total} vérifications`,
    status: (done, total) => `Analyse en cours, ${done} sur ${total} terminées`,
    wait: "Toutes les tâches peuvent prendre jusqu'à une minute",
    preview: "Les premiers résultats s'affichent ci-dessous au fur et à mesure",
  },

  noResults: {
    possibleReasons: 'Causes possibles :',
    reason: 'Motif :',
    lookupError: 'Erreur de résolution :',
    unreachable: {
      title: 'Site injoignable',
      description:
        'Impossible de résoudre une adresse IP pour cet hôte, les vérifications ne peuvent ' +
        "donc pas s'exécuter",
      reasons: [
        "Le domaine est peut-être mal orthographié ou n'est plus enregistré",
        'Le site est peut-être hors ligne ou temporairement injoignable',
        'Un problème de résolution DNS perturbe peut-être la recherche',
        "Un pare-feu ou un blocage géographique empêche peut-être l'accès",
      ],
    },
    invalid: {
      title: 'Saisie invalide',
      description:
        'Cela ne ressemble pas à une URL ou une adresse IP valide, les vérifications ne ' +
        "peuvent donc pas s'exécuter",
      reasons: [
        'Saisissez un domaine (example.com) ou une adresse IPv4 / IPv6',
        'Vérifiez les fautes de frappe ou les caractères en trop',
        "Évitez les espaces et les symboles non pris en charge dans l'adresse",
      ],
    },
    'api-down': {
      title: 'Service indisponible',
      description: "La plupart des vérifications ont échoué car l'API Web-Check est injoignable",
      reasons: [
        "L'API est peut-être en panne, en redémarrage ou limitée en débit",
        'Une instance auto-hébergée est peut-être mal configurée ou hors ligne',
        "Un problème réseau ou de pare-feu bloque peut-être l'API",
      ],
    },
    blocked: {
      title: 'Analyse non autorisée',
      description:
        'Toutes les vérifications ont été ignorées, car cette instance ' +
        "n'autorise pas l'analyse de cet hôte",
      reasons: [
        "L'administrateur a peut-être bloqué ce domaine ou cette plage d'IP",
        "L'instance est peut-être configurée pour ne pas exécuter ces vérifications",
        'Vous pouvez toujours analyser cet hôte depuis votre propre instance de Web-Check',
      ],
    },
    disabled: {
      title: 'Web-Check est en pause',
      description:
        'Cette instance est temporairement désactivée, les vérifications ne peuvent donc pas ' +
        "s'exécuter",
      reasons: [
        "L'instance publique est peut-être en pause pour maîtriser les coûts",
        'Une instance auto-hébergée est peut-être en maintenance',
        'Vous pouvez héberger votre propre copie depuis le dépôt open source sur GitHub',
      ],
    },
  },

  rawData: {
    heading: 'Voir / télécharger les données brutes',
    download: 'Télécharger les résultats',
    view: 'Voir les résultats',
    update: 'Mettre à jour les résultats',
    hide: 'Masquer les résultats',
    frameTitle: 'Résultats, via JSON Hero',
    open: 'Ouvrir ces résultats dans JSON Hero',
    httpError: (status) => `Erreur HTTP ! Statut : ${status}`,
    about:
      'Voici les résultats bruts générés pour votre URL, au format JSON. Vous pouvez les ' +
      'importer dans votre propre programme pour une analyse plus poussée.',
  },

  resources: {
    heading: 'Outils externes pour aller plus loin',
  },

  errorPage: {
    home: "Retour à l'accueil",
    github: 'Voir sur GitHub',
    report: 'Signaler un problème',
    reload: 'Recharger la page',
    heading: 'Un problème est survenu',
    subheading: "Une erreur inattendue s'est produite.",
    apology:
      'Désolé pour ce désagrément. Recharger la page suffit généralement, sinon merci de ' +
      'signaler le bug.',
    message: "Voici le message d'erreur reçu :",
    notFound: 'Page introuvable',
  },
} satisfies Translation;
