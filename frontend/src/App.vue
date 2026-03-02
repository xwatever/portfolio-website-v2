<template>
  <Navbar @locale="switchLanguage" @theme="switchTheme" :isDark="isDark" />

  <transition name="fade" mode="out-in">
    <router-view :isDark="isDark" />
  </transition>

  <transition name="fade">
    <div v-if="isLoading" id="loading-screen">
      <div class="loading-spinner"></div>
      <div v-if="!isLoadingLocale" class="loading-text">
        {{ $t("message.loading") }}
      </div>
      <div v-if="isLoadingLocale" class="loading-text">
        {{ $t("message.loading_locale") }}
      </div>
    </div>
  </transition>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/essentials/NavbarComponent.vue";

import { useI18n } from "vue-i18n";
import { loadLanguageAsync } from "./i18n";

export default {
  name: "App",
  components: {
    Navbar,
  },
  computed() {
    const { t, locale } = useI18n();
    locale.value = this.$store.getters.currentLocale;

    const isDark = this.$store.getters["theme/currentTheme"];

    return { t, locale, isDark };
  },
  data: function () {
    return {
      isLoading: false,
      isLoadingLocale: false,
    };
  },
  mounted() {
    this.$store.dispatch("theme/initTheme");
    loadLanguageAsync(this.$store.getters.currentLocale);

    this.$router.beforeEach((to, from, next) => {
      this.isLoading = true;
      next();
    });

    this.$router.afterEach((to, from, next) => {
      if (to.name != "portfolio") {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      } else {
        setTimeout(() => {
          this.isLoading = false;
        }, 50);
      }
    });
  },
  methods: {
    async switchLanguage(val) {
      var lang = val;
      const current = this.$store.getters.currentLocale;
      const newLang =
        lang != "_"
          ? current != lang
            ? lang
            : current
          : current == "en"
          ? "id"
          : "en";

      this.isLoading = true;
      this.isLoadingLocale = true;
      setTimeout(() => {
        loadLanguageAsync(newLang);
        this.$store.dispatch("changeLocale", newLang);
        setTimeout(() => {
          this.isLoading = false;
          this.isLoadingLocale = false;
        }, 750);
      }, 150);
    },
    switchTheme() {
      this.$store.dispatch("theme/toggleDark");
      setTimeout(() => {
        this.isDark = this.$store._modules.root.state.theme.isDark;
      }, 150);
    },
  },
};
</script>

<style scoped>
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

#loading-screen {
  @apply fixed inset-0 bg-gray-100/100 dark:bg-black/100 z-50 flex items-center justify-center gap-5;
}
#loading-screen .loading-spinner {
  @apply w-9 h-9 border-3 border-gray-800 dark:border-gray-100 border-t-transparent dark:border-t-black rounded-full animate-spin transition-all;
}
#loading-screen .loading-text {
  @apply text-xl animate-pulse;
}
</style>
