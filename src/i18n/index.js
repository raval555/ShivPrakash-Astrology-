import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import hiTranslations from './locales/hi.json';
import mrTranslations from './locales/mr.json';
import guTranslations from './locales/gu.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    hi: {
      translation: hiTranslations,
    },
    mr: {
      translation: mrTranslations,
    },
    gu: {
      translation: guTranslations,
    },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
