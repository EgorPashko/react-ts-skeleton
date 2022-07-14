import "react-i18next";

// import type { i18n, StringMap, TFunctionKeys, TFunctionResult, TOptions } from "i18next";
import type * as translations from "locales";

declare module "react-i18next" {
  type DefaultResources = typeof translations["en"];
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Resources extends DefaultResources {}
}

// react-i18next versions higher than 11.11.0
declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof translations["en"];
  }
}
