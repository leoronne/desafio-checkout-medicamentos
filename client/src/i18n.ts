import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import { Cookies } from 'react-cookie-consent';

import Backend from 'i18next-xhr-backend';

// const lgnstrg = Cookies.get('@Memed:language');

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,

    lng: 'pt',
    fallbackLng: 'pt',
    whitelist: ['pt', 'en'],

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
