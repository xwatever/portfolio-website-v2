// store/theme.js
const savedTheme = localStorage.getItem("isDark") || " ";

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
      if (state.isDark === " ") {
        localStorage.setItem(
          "isDark",
          window.matchMedia("(prefers-color-scheme: dark)").matches
        );
        setTimeout(() => {
          commit("setDark", true);
        }, 150);
      } else {
        commit("setDark", !state.isDark);
      }
    },
    initTheme({ commit }) {
      const saved = localStorage.getItem("isDark");

      if (saved === "false" || saved === "true")
        commit("setDark", saved === "true"); // apply saved local value
      else {
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        media.addEventListener("change", (e) => {
          commit("setDark", e.matches);
        });
      }
    },
  },
  getters: {
    currentTheme: (state) => state.isDark,
  },
};

export default themeModule;
