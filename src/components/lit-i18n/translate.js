/* eslint-disable no-console */

import snarkdown from 'snarkdown';
import './lit-i18n.js';

export let i18nConfig = {};

export const setup = ({ resolveMethod, language, fallbackLanguage } = {}) => {
  if (!resolveMethod || typeof resolveMethod !== 'function') {
    throw new Error('[lit-i18n] resolveMethod is required and must be a function');
  }

  if (!fallbackLanguage) {
    console.warn('[lit-i18n] Warning: no fallback language specified (en-EN will be used)');
  }

  i18nConfig = {
    ...i18nConfig,
    resolveMethod,
    fallbackLanguage: fallbackLanguage ? fallbackLanguage : 'en-EN',
    language: language ? language : navigator.language || navigator.userLanguage,
  };

  update();
};

export const update = (language = i18nConfig.language) => {
  if (language && language !== i18nConfig.language) {
    i18nConfig.language = language;
  }

  i18nConfig.resolveMethod(language)
    .then((result) => {
      i18nConfig.translationsCache = result;
      document.dispatchEvent(new CustomEvent('LIT_I18N_UPDATED'));
    })
    .catch((error) => {
      if (language !== i18nConfig.fallbackLanguage) {
        update(i18nConfig.fallbackLanguage);
        console.warn(`[lit-i18n] Error resolving locales for language '${language}'. Falling back to '${i18nConfig.fallbackLanguage}'. ${error}.`);
      } else {
        throw new Error(`[lit-i18n] Error resolving locales for fallback language '${language}'. ${error}.`);
      }
    });
};

export const get = (key, raw = false) => {
  if (!('translationsCache' in i18nConfig)) {
    return '';
  }

  if (key in i18nConfig.translationsCache) {
    const translation = i18nConfig.translationsCache[key];
    return raw ? translation : snarkdown(translation);
  } else {
    console.error(`[lit-i18n] Key '${key}' not found.`);
    return key;
  }
};

/* eslint-enable no-console */
