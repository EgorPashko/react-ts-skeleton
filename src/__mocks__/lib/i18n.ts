import i18nTesting from "i18next";
import * as translations from "locales";
import { initReactI18next } from "react-i18next";

i18nTesting.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",

  // have a common namespace used around the full app
  ns: ["common"],
  defaultNS: "common",

  // debug: true,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: { en: translations },
});

export default i18nTesting;
