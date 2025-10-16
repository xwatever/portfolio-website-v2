import { createI18n } from "vue-i18n";

// import en from "./en.json";
// import id from "./id.json";

const messages = {
  en: () => import("./en.json"),
  id: () => import("./id.json"),
};

const loadedLanguages = [];

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: await messages["en"](),
    id: await messages["id"](),
  },
});

export async function loadLanguageAsync(lang) {
  if (!loadedLanguages.includes(lang)) {
    const msg = await messages[lang]();
    i18n.global.setLocaleMessage(lang, msg);
    loadedLanguages.push(lang);
  }

  i18n.global.locale.value = lang;
}

export default i18n;
