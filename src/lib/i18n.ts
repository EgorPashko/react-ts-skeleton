import i18n from "i18next";
import * as resources from "locales";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    lng: "en",
    ns: ["common", "validation"],
    preload: ["en"],
    defaultNS: "common",
    partialBundledLanguages: true,

    saveMissing: true,
    missingKeyHandler: (lng, ns, key) => {
      throw new Error(`Missing i18n key ${[lng].flat().join(",")}:${ns}:${key}`);
    },
    // @todo: lazy-loading for non-english
    resources: {
      en: resources,
    },
  });

export default i18n;
