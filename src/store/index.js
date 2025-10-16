import { createStore } from "vuex";
import theme from "./theme";

const savedLocale = localStorage.getItem("locale") || "en";

export default createStore({
  state: {
    locale: savedLocale,
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale;
      localStorage.setItem("locale", locale);
    },
  },
  actions: {
    changeLocale({ commit }, locale) {
      commit("setLocale", locale);
    },
  },
  getters: {
    currentLocale: (state) => state.locale,
  },
  modules: {
    theme,
  },
});
