import { getSetting } from 'client/utils/settings';
import type { Language } from '@/data/settings';
import en, { type Translation } from './en';
import de from './de';
import es from './es';
import fr from './fr';
import pt from './pt';
import zh from './zh';

type Strings = typeof en & { lang: Language };

// Fill in whatever a translation leaves out with the English, and tag it for lang attributes
const withEnglish = (lang: Language, translation: Translation): Strings => ({
  ...(Object.fromEntries(
    Object.entries(en).map(([section, strings]) => [
      section,
      { ...strings, ...translation[section as keyof typeof en] },
    ]),
  ) as typeof en),
  lang,
});

const dictionaries: Record<Language, Strings> = {
  de: withEnglish('de', de),
  en: withEnglish('en', {}),
  es: withEnglish('es', es),
  fr: withEnglish('fr', fr),
  pt: withEnglish('pt', pt),
  zh: withEnglish('zh', zh),
};

const isLanguage = (value: unknown): value is Language =>
  typeof value === 'string' && Object.hasOwn(dictionaries, value);

// Language and script, like zh-Hant for zh-TW, so Traditional readers don't get Simplified
const writtenIn = (tag: string) => {
  try {
    const { language, script } = new Intl.Locale(tag).maximize();
    return `${language}-${script}`;
  } catch {
    // Can't tell the script, so only an exact match will do
    return tag;
  }
};

// Our languages, keyed by how they're written
const supported = new Map(
  Object.keys(dictionaries).map((code) => [writtenIn(code), code as Language]),
);

// The first of the browser's languages we have, else English
const browserLanguage = (): Language => {
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of tags) {
    const match = supported.get(writtenIn(tag));
    if (match) return match;
  }
  return 'en';
};

// The browser's pick is only worked out once, as strings() runs on every render
let detected: Language | undefined;

// Strings in the language picked in settings, or the browser's when that's left on auto
export const strings = (): Strings => {
  const picked = getSetting('language');
  if (isLanguage(picked)) return dictionaries[picked];
  if (!detected) detected = browserLanguage();
  return dictionaries[detected];
};
