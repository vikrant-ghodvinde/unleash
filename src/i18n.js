import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// Importing translation files

import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationDE from "./locales/de/translation.json";
import translationIT from "./locales/it/translation.json";
import translationCN from "./locales/cn/translation.json";
import translationJP from "./locales/jp/translation.json";
import translationKR from "./locales/kr/translation.json";
import translationID from "./locales/id/translation.json";
import translationTR from "./locales/tr/translation.json";

//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
  fr: {
    translation: translationFR,
  },
  de: {
    translation: translationDE,
  },
  it: {
    translation: translationIT,
  },
  cn: {
    translation: translationCN,
  },
  jp: {
    translation: translationJP,
  },
  kr: {
    translation: translationKR,
  },
  id: {
    translation: translationID,
  },
  tr: {
    translation: translationTR,
  },
};

//i18N Initialization

i18n.use(initReactI18next).init({
  resources,
  lng: "en", //default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
