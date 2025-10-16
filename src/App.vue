<template>
  <Navbar @locale="switchLanguage" />

  <transition name="fade" mode="out-in">
    <router-view />
  </transition>

  <transition name="fade">
    <div v-if="isLoading" class="loading-screen">
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
import "./assets/css/main.css";
import Navbar from "./components/essentials/NavbarComponent.vue";
import router from "./router";
import store from "./store";

import { useI18n } from "vue-i18n";
import { loadLanguageAsync } from "./i18n";

export default {
  name: "App",
  components: {
    Navbar,
  },
  setup() {
    const { t, locale } = useI18n();

    locale.value = store.getters.currentLocale;

    return { t, locale };
  },
  data: function () {
    return {
      isLoading: false,
      isLoadingLocale: false,
    };
  },

  mounted() {
    router.beforeEach((to, from, next) => {
      this.isLoading = true;
      next();
    });

    router.afterEach((to, from, next) => {
      if (to.name != "portfolio") {
        setTimeout(() => {
          this.isLoading = false;
        }, 750);
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
      const current = store.getters.currentLocale;
      const newLang = current != lang ? lang : current;

      this.isLoading = true;
      this.isLoadingLocale = true;
      setTimeout(() => {
        loadLanguageAsync(newLang);
        store.dispatch("changeLocale", newLang);

        setTimeout(() => {
          this.isLoading = false;
          this.isLoadingLocale = false;
        }, 750);
      }, 150);
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
