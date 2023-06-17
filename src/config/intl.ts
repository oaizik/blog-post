import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJson from './languages/en.json';
import heJson from './languages/he.json';
  
i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources:{
        en: {
            translation: enJson,
            direction: 'lrt'
        },
        he: {
            translation: heJson
        },
    }
  });

export default i18n;