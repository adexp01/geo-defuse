import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const defaultData = {
  defaultLanguage: "ua",
  useBrowserLanguage: true
};

const defaultLanguage = defaultData.defaultLanguage;
export const languageMap = {
  ua: "Ukrainian",
  en: "English"
};

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLanguage,
    debug: true,
    detection: {
      order: ["queryString", "cookie", "localStorage", "sessionStorage"],
      caches: ["localStorage", "cookie"]
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json"
    }
  });

export default i18n;
