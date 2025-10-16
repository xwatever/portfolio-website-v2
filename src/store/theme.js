// store/theme.js
const themeModule = {
  namespaced: true,
  state: () => ({
    isDark: false,
  }),
  mutations: {
    setDark(state, value) {
      state.isDark = value;
      if (value) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      // Save to sessionStorage
      sessionStorage.setItem("isDark", value);
    },
  },
  actions: {
    toggleDark({ commit, state }) {
      commit("setDark", !state.isDark);
    },
    initTheme({ commit }) {
      const saved = sessionStorage.getItem("isDark");
      commit("setDark", saved === "true"); // apply saved session value
    },
  },
};

export default themeModule;
