import type { Translation } from './en';

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export default {
  checks: {
    ssl: 'Certificado SSL',
    dns: 'Registros DNS',
    cookies: 'Cookies',
    'robots-txt': 'Reglas de rastreo',
    headers: 'Cabeceras',
    quality: 'Métricas de calidad',
    location: 'Ubicación del servidor',
    hosts: 'Hosts asociados',
    redirects: 'Cadena de redirecciones',
    'txt-records': 'Registros TXT',
    status: 'Estado del servidor',
    ports: 'Puertos abiertos',
    'trace-route': 'Traceroute',
    carbon: 'Huella de carbono',
    'server-info': 'Info del servidor',
    vulnerabilities: 'Vulnerabilidades',
    'whois-lookup': 'Consulta Whois',
    'domain-info': 'Info del dominio',
    dnssec: 'DNSSEC',
    'caa-records': 'Registros CAA',
    hsts: 'HSTS',
    'dns-server': 'Servidor DNS',
    'tech-stack': 'Tecnologías',
    sitemap: 'Mapa del sitio',
    'security-txt': 'Security.txt',
    'linked-pages': 'Páginas enlazadas',
    'social-tags': 'Etiquetas sociales',
    'social-presence': 'Presencia en redes',
    'mail-config': 'Configuración de correo',
    firewall: 'Cortafuegos',
    'http-security': 'Seguridad HTTP',
    'mixed-content': 'Contenido mixto y SRI',
    archives: 'Historial de archivo',
    rank: 'Ranking global',
    'block-lists': 'Detección de bloqueos',
    threats: 'Malware y phishing',
    breaches: 'Filtraciones de datos',
    trackers: 'Rastreadores y terceros',
    'tls-connection': 'Conexión TLS',
    'tls-security-audit': 'Auditoría de seguridad TLS',
    'tls-client-compat': 'Compatibilidad TLS',
    screenshot: 'Captura de pantalla',
    subdomains: 'Subdominios',
  },

  card: {
    info: (title) => `Información sobre ${title}`,
    refresh: (title) => `Recargar ${title}`,
    crashed: 'Este componente falló inesperadamente',
    crashedHelp:
      'Suele pasar cuando la respuesta del servidor no es la esperada. Revisa los registros para ' +
      'más información. Si el problema continúa, abre una incidencia en el repositorio.',
    errorDetails: 'Detalles del error',
  },

  advisory: {
    heading: 'Diagnóstico',
    severity: {
      critical: 'Críticos',
      issue: 'Problemas',
      warning: 'Advertencias',
      info: 'Informativos',
      pass: 'Superados',
    },
  },

  progress: {
    state: {
      success: 'éxito',
      loading: 'cargando',
      error: 'error',
      'timed-out': 'tiempo agotado',
      skipped: 'omitida',
    },
    jobs: {
      success: (n) => plural(n, 'tarea completada', 'tareas completadas'),
      skipped: (n) => plural(n, 'tarea omitida', 'tareas omitidas'),
      'timed-out': (n) => plural(n, 'tarea sin respuesta', 'tareas sin respuesta'),
      error: (n) => plural(n, 'tarea fallida', 'tareas fallidas'),
    },
    showReason: {
      error: 'Ver error',
      'timed-out': 'Ver motivo del tiempo agotado',
      skipped: 'Ver motivo de la omisión',
    },
    loading: (done, total) => `Cargando ${done} de ${total}`,
    loadingJobs: (done, total) => `Cargando ${done} / ${total} tareas`,
    finished: (total, seconds) => `${total} consultas terminadas en ${seconds}s`,
    allPassed: (n) => plural(n, 'tarea completada con éxito', 'tareas completadas con éxito'),
    doneIn: (time) => `Terminado en ${time}`,
    issues: (n) => plural(n, 'problema', 'problemas'),
    took: (ms) => `Tardó ${ms} ms`,
    retry: 'Reintentar',
    detailsFor: (name) => `Detalles de ${name}`,
    ended: (name, state, ms) =>
      `La tarea ${name} terminó con estado «${state}»${ms ? ` tras ${ms} ms` : ''}.`,
    reason: 'Motivo:',
    serverResponse: 'Respuesta del servidor:',
    showLoadState: 'Ver estado de carga',
    showDetails: 'Ver detalles',
    dismiss: 'Cerrar',
    consoleHint: 'Consulta la consola del navegador para ver registros y más información',
    failuresNormal:
      'Es normal que algunas tareas fallen, ya sea porque el host no devuelve la información ' +
      'necesaria, por restricciones de la función lambda o por alcanzar un límite de la API.',
    learnMore: 'Más información sobre Web-Check',
  },

  loader: {
    crunching: 'Analizando datos',
    checks: (done, total) => `${done} / ${total} pruebas`,
    status: (done, total) => `Analizando datos, ${done} de ${total} listas`,
    wait: 'Todas las tareas pueden tardar hasta un minuto en completarse',
    preview: 'Puedes ver los primeros resultados abajo a medida que llegan',
  },

  noResults: {
    possibleReasons: 'Posibles motivos:',
    reason: 'Motivo:',
    lookupError: 'Error de búsqueda:',
    unreachable: {
      title: 'No se puede acceder al sitio',
      description:
        'No pudimos resolver una dirección IP para este host, así que no se pueden ejecutar ' +
        'las pruebas',
      reasons: [
        'Puede que el dominio esté mal escrito o ya no esté registrado',
        'Puede que el sitio web esté caído o no disponible temporalmente',
        'Un problema de resolución DNS puede estar afectando a la búsqueda',
        'Un cortafuegos o un bloqueo geográfico puede estar impidiendo el acceso',
      ],
    },
    invalid: {
      title: 'Entrada no válida',
      description:
        'Eso no parece una URL o dirección IP válida, así que no se pueden ejecutar las pruebas',
      reasons: [
        'Introduce un dominio (example.com) o una dirección IPv4 / IPv6',
        'Revisa si hay errores de escritura o caracteres de más',
        'Evita espacios y símbolos no admitidos en la dirección',
      ],
    },
    'api-down': {
      title: 'Servicio no disponible',
      description:
        'La mayoría de las pruebas fallaron porque no se pudo contactar con la API de Web-Check',
      reasons: [
        'Puede que la API esté caída, reiniciándose o limitando peticiones',
        'Puede que una instancia autoalojada esté mal configurada o desconectada',
        'Un problema de red o de cortafuegos podría estar bloqueando la API',
      ],
    },
    blocked: {
      title: 'Análisis no permitido',
      description:
        'Se omitieron todas las pruebas, ya que esta instancia no permite analizar este host',
      reasons: [
        'Puede que el administrador haya bloqueado este dominio o rango de IP',
        'Puede que la instancia esté configurada para no ejecutar estas pruebas',
        'Aún puedes analizar este host desde tu propia instancia de Web-Check',
      ],
    },
    disabled: {
      title: 'Web-Check está en pausa',
      description:
        'Esta instancia se ha desactivado temporalmente, así que no se pueden ejecutar las pruebas',
      reasons: [
        'Puede que la instancia pública esté en pausa para controlar los costes',
        'Puede que una instancia autoalojada esté en mantenimiento',
        'Puedes ejecutar tu propia copia desde el repositorio de código abierto en GitHub',
      ],
    },
  },

  rawData: {
    heading: 'Ver / descargar datos sin procesar',
    download: 'Descargar resultados',
    view: 'Ver resultados',
    update: 'Actualizar resultados',
    hide: 'Ocultar resultados',
    frameTitle: 'Resultados, vía JSON Hero',
    open: 'Abrir estos resultados en JSON Hero',
    httpError: (status) => `¡Error HTTP! Estado: ${status}`,
    about:
      'Estos son los resultados sin procesar de tu URL, en formato JSON. Puedes importarlos en ' +
      'tu propio programa para analizarlos más a fondo.',
  },

  resources: {
    heading: 'Herramientas externas para seguir investigando',
  },

  errorPage: {
    home: 'Volver al inicio',
    github: 'Ver en GitHub',
    report: 'Informar de un problema',
    reload: 'Recargar página',
    heading: 'Algo ha salido mal',
    subheading: 'Se produjo un error inesperado.',
    apology:
      'Sentimos que haya pasado esto. Normalmente se soluciona recargando la página, pero si no, ' +
      'por favor informa del error.',
    message: 'Este es el mensaje de error que recibimos:',
    notFound: 'No encontrado',
  },
} satisfies Translation;
