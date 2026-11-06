// English is spoken by Kokoro. Spanish, French, Portuguese, and Korean are spoken by Supertonic 2.
export const MODEL_LANGUAGES = [
  { code: 'en', label: 'English', native: 'English', locale: 'United States', voice: 'kokoro' },
  { code: 'fr', label: 'French', native: 'Français', locale: 'France', voice: 'supertonic' },
  { code: 'ko', label: 'Korean', native: '한국어', locale: 'Korea', voice: 'supertonic' },
  { code: 'pt', label: 'Portuguese', native: 'Português', locale: 'Brazil', voice: 'supertonic' },
  { code: 'es', label: 'Spanish', native: 'Español', locale: 'Spain', voice: 'supertonic' },
];

export const DEFAULT_LANGUAGE_CODE = 'en';

export function getLanguageByCode(code) {
  return MODEL_LANGUAGES.find((lang) => lang.code === code) || MODEL_LANGUAGES.find((lang) => lang.code === DEFAULT_LANGUAGE_CODE);
}

export function getInitialLanguage(storageKey = 'pendulum-language') {
  const stored = localStorage.getItem(storageKey);
  const isValid = stored && MODEL_LANGUAGES.some((lang) => lang.code === stored);
  const code = isValid ? stored : DEFAULT_LANGUAGE_CODE;

  if (!isValid) {
    localStorage.setItem(storageKey, DEFAULT_LANGUAGE_CODE);
  }

  return getLanguageByCode(code);
}

export function getLanguagesForMenu() {
  return [...MODEL_LANGUAGES].sort((a, b) => {
    if (a.code === DEFAULT_LANGUAGE_CODE) return -1;
    if (b.code === DEFAULT_LANGUAGE_CODE) return 1;
    return a.label.localeCompare(b.label);
  });
}

export function formatLanguageOption(lang) {
  return lang.native === lang.label ? lang.label : lang.native;
}
