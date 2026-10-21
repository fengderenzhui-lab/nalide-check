import { checkIds, checks, type CheckId } from '@/data/checks';

// Card titles, taken from each check's own data
const titles = Object.fromEntries(checkIds.map((id) => [id, checks[id].title]));

// Like 1 job or 3 jobs
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

// Strings for the results page, which every other language falls back to
const en = {
  checks: titles as Record<CheckId, string>,

  card: {
    info: (title: string) => `Info about ${title}`,
    refresh: (title: string) => `Re-fetch ${title} data`,
    crashed: 'This component errored unexpectedly',
    crashedHelp:
      'Usually this happens if the result from the server was not what was expected. Check the ' +
      'logs for more info. If you continue to experience this issue, please raise a ticket on ' +
      'the repository.',
    errorDetails: 'Error Details',
  },

  advisory: {
    heading: 'Advisory',
    severity: {
      critical: 'Critical',
      issue: 'Issues',
      warning: 'Warnings',
      info: 'Informational',
      pass: 'Passes',
    },
  },

  progress: {
    state: {
      success: 'success',
      loading: 'loading',
      error: 'error',
      'timed-out': 'timed-out',
      skipped: 'skipped',
    },
    jobs: {
      success: (n: number) => `${plural(n, 'job', 'jobs')} successful`,
      skipped: (n: number) => `${plural(n, 'job', 'jobs')} skipped`,
      'timed-out': (n: number) => `${plural(n, 'job', 'jobs')} timed out`,
      error: (n: number) => `${plural(n, 'job', 'jobs')} failed`,
    },
    showReason: {
      error: 'Show Error',
      'timed-out': 'Show Timeout Reason',
      skipped: 'Show Skip Reason',
    },
    loading: (done: number, total: number) => `Loading ${done} of ${total}`,
    loadingJobs: (done: number, total: number) => `Loading ${done} / ${total} Jobs`,
    finished: (total: number, seconds: string) => `Finished ${total} lookups in ${seconds}s`,
    allPassed: (n: number) => `${plural(n, 'Job', 'Jobs')} Completed Successfully`,
    doneIn: (time: string) => `Done in ${time}`,
    issues: (n: number) => plural(n, 'issue', 'issues'),
    took: (ms: string) => `Took ${ms} ms`,
    retry: 'Retry',
    detailsFor: (name: string) => `Details for ${name}`,
    ended: (name: string, state: string, ms?: string) =>
      `The ${name} job ended with state '${state}'${ms ? ` after ${ms} ms` : ''}.`,
    reason: 'Reason:',
    serverResponse: 'Server response:',
    showLoadState: 'Show Load State',
    showDetails: 'Show Details',
    dismiss: 'Dismiss',
    consoleHint: 'Check the browser console for logs and more info',
    failuresNormal:
      "It's normal for some jobs to fail, either because the host doesn't return the required " +
      'info, or restrictions in the lambda function, or hitting an API limit.',
    learnMore: 'Learn More about Web-Check',
  },

  loader: {
    crunching: 'Crunching data',
    checks: (done: number, total: number) => `${done} / ${total} checks`,
    status: (done: number, total: number) => `Crunching data, ${done} of ${total} done`,
    wait: 'It may take up to a minute for all jobs to complete',
    preview: 'You can view preliminary results as they come in below',
  },

  noResults: {
    possibleReasons: 'Possible reasons:',
    reason: 'Reason:',
    lookupError: 'Lookup error:',
    unreachable: {
      title: 'Cannot Reach This Site',
      description: 'We could not resolve an IP address for this host, so checks cannot run',
      reasons: [
        'The domain might be misspelled or no longer registered',
        'The website may be offline or temporarily unreachable',
        'A DNS resolution issue may be affecting the lookup',
        'A firewall or geo-block may be preventing access',
      ],
    },
    invalid: {
      title: 'Invalid Input',
      description: 'That does not look like a valid URL or IP address, so checks cannot run',
      reasons: [
        'Enter a domain (example.com) or an IPv4 / IPv6 address',
        'Check for typos or stray characters in the input',
        'Avoid spaces and unsupported symbols in the address',
      ],
    },
    'api-down': {
      title: 'Service Unavailable',
      description: 'Most checks failed because the Web-Check API could not be reached',
      reasons: [
        'The API may be down, restarting or rate-limited',
        'A self-hosted instance might be misconfigured or offline',
        'A network or firewall issue could be blocking the API',
      ],
    },
    blocked: {
      title: 'Scanning Not Permitted',
      description: 'Every check was skipped, as this instance does not allow scanning this host',
      reasons: [
        'The administrator may have blocked this domain or IP range',
        'The instance may be configured to not run these checks',
        'You can still scan this host from your own instance of Web-Check',
      ],
    },
    disabled: {
      title: 'Web-Check is Paused',
      description: 'This instance has been temporarily disabled, so checks cannot run',
      reasons: [
        'The public instance may be paused to manage running costs',
        'A self-hosted instance may be in maintenance mode',
        'You can run your own copy from the open-source repo on GitHub',
      ],
    },
  },

  rawData: {
    heading: 'View / Download Raw Data',
    download: 'Download Results',
    view: 'View Results',
    update: 'Update Results',
    hide: 'Hide Results',
    frameTitle: 'Results, via JSON Hero',
    open: 'Open these results in JSON Hero',
    httpError: (status: number) => `HTTP error! status: ${status}`,
    about:
      'These are the raw results generated from your URL, and in JSON format. You can import ' +
      'these into your own program, for further analysis.',
  },

  resources: {
    heading: 'External Tools for Further Research',
  },

  errorPage: {
    home: 'Back to Homepage',
    github: 'View on GitHub',
    report: 'Report Issue',
    reload: 'Reload Page',
    heading: "Something's gone wrong",
    subheading: 'An unexpected error occurred.',
    apology:
      "We're sorry this happened. Usually reloading the page will resolve this, but if it " +
      "doesn't, please raise a bug report.",
    message: 'Below is the error message we received:',
    notFound: 'Not Found',
  },
};

export default en;

// Other languages can leave out any string, and it shows in English instead
export type Translation = { [Section in keyof typeof en]?: Partial<(typeof en)[Section]> };
