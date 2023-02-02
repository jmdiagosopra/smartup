import { setup } from './translate';
export { get, update } from './translate';

setup({
  resolveMethod: (lang) => (
    fetch(`/assets/locales/${lang}.json`)
      .then((response) => response.json())
  ),
  language: 'es-ES',
  fallbackLanguage: 'es-ES',
});
