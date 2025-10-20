// store/theme.js
const savedTheme = localStorage.getItem("isDark") || "false";

const themeModule = {
  namespaced: true,
  state: () => ({
    isDark: savedTheme,
  }),
  mutations: {
    setDark(state, value) {
      state.isDark = value;
      if (value) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      // Save to localStorage
      localStorage.setItem("isDark", value);
    },
  },
  actions: {
    toggleDark({ commit, state }) {
      commit("setDark", !state.isDark);
    },
    initTheme({ commit }) {
      const saved = localStorage.getItem("isDark");
      commit("setDark", saved === "true"); // apply saved local value
    },
  },
  getters: {
    currentTheme: (state) => state.isDark,
  },
};

export default themeModule;
