import type { Translation } from './en';

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export default {
  checks: {
    ssl: 'Certificado SSL',
    dns: 'Registros DNS',
    cookies: 'Cookies',
    'robots-txt': 'Regras de rastreamento',
    headers: 'Cabeçalhos',
    quality: 'Métricas de qualidade',
    location: 'Localização do servidor',
    hosts: 'Hosts associados',
    redirects: 'Redirecionamentos',
    'txt-records': 'Registros TXT',
    status: 'Status do servidor',
    ports: 'Portas abertas',
    'trace-route': 'Traceroute',
    carbon: 'Pegada de carbono',
    'server-info': 'Info do servidor',
    vulnerabilities: 'Vulnerabilidades',
    'whois-lookup': 'Consulta Whois',
    'domain-info': 'Info do domínio',
    dnssec: 'DNSSEC',
    'caa-records': 'Registros CAA',
    hsts: 'HSTS',
    'dns-server': 'Servidor DNS',
    'tech-stack': 'Tecnologias',
    sitemap: 'Mapa do site',
    'security-txt': 'Security.txt',
    'linked-pages': 'Páginas vinculadas',
    'social-tags': 'Tags sociais',
    'social-presence': 'Presença social',
    'mail-config': 'Configuração de e-mail',
    firewall: 'Firewall',
    'http-security': 'Segurança HTTP',
    'mixed-content': 'Conteúdo misto e SRI',
    archives: 'Histórico de arquivos',
    rank: 'Ranking global',
    'block-lists': 'Detecção de bloqueio',
    threats: 'Malware e phishing',
    breaches: 'Vazamentos de dados',
    trackers: 'Rastreadores e terceiros',
    'tls-connection': 'Conexão TLS',
    'tls-security-audit': 'Auditoria de segurança TLS',
    'tls-client-compat': 'Compatibilidade TLS',
    screenshot: 'Captura de tela',
    subdomains: 'Subdomínios',
  },

  card: {
    info: (title) => `Informações sobre ${title}`,
    refresh: (title) => `Recarregar ${title}`,
    crashed: 'Este componente falhou inesperadamente',
    crashedHelp:
      'Isso costuma acontecer quando a resposta do servidor não é a esperada. Confira os logs ' +
      'para mais informações. Se o problema continuar, abra um ticket no repositório.',
    errorDetails: 'Detalhes do erro',
  },

  advisory: {
    heading: 'Diagnóstico',
    severity: {
      critical: 'Críticos',
      issue: 'Problemas',
      warning: 'Alertas',
      info: 'Informativos',
      pass: 'Aprovados',
    },
  },

  progress: {
    state: {
      success: 'sucesso',
      loading: 'carregando',
      error: 'erro',
      'timed-out': 'tempo esgotado',
      skipped: 'ignorada',
    },
    jobs: {
      success: (n) => plural(n, 'tarefa concluída', 'tarefas concluídas'),
      skipped: (n) => plural(n, 'tarefa ignorada', 'tarefas ignoradas'),
      'timed-out': (n) => `${plural(n, 'tarefa', 'tarefas')} com tempo esgotado`,
      error: (n) => `${plural(n, 'tarefa', 'tarefas')} com falha`,
    },
    showReason: {
      error: 'Ver erro',
      'timed-out': 'Ver motivo do tempo esgotado',
      skipped: 'Ver motivo',
    },
    loading: (done, total) => `Carregando ${done} de ${total}`,
    loadingJobs: (done, total) => `Carregando ${done} / ${total} tarefas`,
    finished: (total, seconds) => `${total} consultas concluídas em ${seconds}s`,
    allPassed: (n) => plural(n, 'tarefa concluída com sucesso', 'tarefas concluídas com sucesso'),
    doneIn: (time) => `Concluído em ${time}`,
    issues: (n) => plural(n, 'problema', 'problemas'),
    took: (ms) => `Levou ${ms} ms`,
    retry: 'Tentar novamente',
    detailsFor: (name) => `Detalhes de ${name}`,
    ended: (name, state, ms) =>
      `A tarefa ${name} terminou com o estado "${state}"${ms ? ` após ${ms} ms` : ''}.`,
    reason: 'Motivo:',
    serverResponse: 'Resposta do servidor:',
    showLoadState: 'Ver status do carregamento',
    showDetails: 'Ver detalhes',
    dismiss: 'Fechar',
    consoleHint: 'Confira o console do navegador para ver logs e mais informações',
    failuresNormal:
      'É normal algumas tarefas falharem, seja porque o host não retorna as informações ' +
      'necessárias, por restrições da função lambda ou por atingir um limite da API.',
    learnMore: 'Saiba mais sobre o Web-Check',
  },

  loader: {
    crunching: 'Analisando dados',
    checks: (done, total) => `${done} / ${total} verificações`,
    status: (done, total) => `Analisando dados, ${done} de ${total} concluídas`,
    wait: 'Pode levar até um minuto para todas as tarefas terminarem',
    preview: 'Você já pode ver os primeiros resultados abaixo, conforme chegam',
  },

  noResults: {
    possibleReasons: 'Possíveis motivos:',
    reason: 'Motivo:',
    lookupError: 'Erro na consulta:',
    unreachable: {
      title: 'Não foi possível acessar o site',
      description:
        'Não conseguimos resolver um endereço IP para este host, então as verificações não ' +
        'podem ser executadas',
      reasons: [
        'O domínio pode estar digitado errado ou não estar mais registrado',
        'O site pode estar fora do ar ou temporariamente inacessível',
        'Um problema de resolução DNS pode estar afetando a consulta',
        'Um firewall ou bloqueio geográfico pode estar impedindo o acesso',
      ],
    },
    invalid: {
      title: 'Entrada inválida',
      description:
        'Isso não parece uma URL ou endereço IP válido, então as verificações não podem ser ' +
        'executadas',
      reasons: [
        'Digite um domínio (example.com) ou um endereço IPv4 / IPv6',
        'Verifique se há erros de digitação ou caracteres a mais',
        'Evite espaços e símbolos não suportados no endereço',
      ],
    },
    'api-down': {
      title: 'Serviço indisponível',
      description:
        'A maioria das verificações falhou porque não foi possível acessar a API do Web-Check',
      reasons: [
        'A API pode estar fora do ar, reiniciando ou com limite de requisições',
        'Uma instância auto-hospedada pode estar mal configurada ou offline',
        'Um problema de rede ou firewall pode estar bloqueando a API',
      ],
    },
    blocked: {
      title: 'Análise não permitida',
      description:
        'Todas as verificações foram ignoradas, pois esta instância não permite analisar ' +
        'este host',
      reasons: [
        'O administrador pode ter bloqueado este domínio ou faixa de IP',
        'A instância pode estar configurada para não executar estas verificações',
        'Você ainda pode analisar este host na sua própria instância do Web-Check',
      ],
    },
    disabled: {
      title: 'Web-Check está pausado',
      description:
        'Esta instância foi desativada temporariamente, então as verificações não podem ser ' +
        'executadas',
      reasons: [
        'A instância pública pode estar pausada para controlar custos',
        'Uma instância auto-hospedada pode estar em manutenção',
        'Você pode rodar sua própria cópia a partir do repositório open source no GitHub',
      ],
    },
  },

  rawData: {
    heading: 'Ver / baixar dados brutos',
    download: 'Baixar resultados',
    view: 'Ver resultados',
    update: 'Atualizar resultados',
    hide: 'Ocultar resultados',
    frameTitle: 'Resultados, via JSON Hero',
    open: 'Abrir estes resultados no JSON Hero',
    httpError: (status) => `Erro HTTP! Status: ${status}`,
    about:
      'Estes são os resultados brutos gerados para a sua URL, em formato JSON. Você pode ' +
      'importá-los no seu próprio programa para análises mais detalhadas.',
  },

  resources: {
    heading: 'Ferramentas externas para pesquisa adicional',
  },

  errorPage: {
    home: 'Voltar ao início',
    github: 'Ver no GitHub',
    report: 'Relatar problema',
    reload: 'Recarregar página',
    heading: 'Algo deu errado',
    subheading: 'Ocorreu um erro inesperado.',
    apology:
      'Lamentamos o ocorrido. Normalmente recarregar a página resolve, mas se não resolver, ' +
      'por favor relate o bug.',
    message: 'Esta é a mensagem de erro que recebemos:',
    notFound: 'Não encontrado',
  },
} satisfies Translation;
