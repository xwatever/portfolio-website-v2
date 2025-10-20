<template>
  <header
    :class="['navbar-header', isScrolled ? '' : 'navbar-header-scrolled']"
  >
    <nav id="navbar">
      <!-- <h1 class="text-xl font-bold">MyApp</h1> -->
      <div>
        <h1 :class="[isScrolled ? 'invisible' : 'visible text-xl font-bold']">
          <a href="/">MD</a>
        </h1>
      </div>
      <div>
        <ul class="navbar-menu">
          <li>
            <a
              href="/about"
              :class="[isScrolled ? 'invisible' : 'hover:underline']"
              >{{ $t("message.navbar.about") }}</a
            >
          </li>
          <li>
            <a
              href="/portfolio"
              :class="[isScrolled ? 'invisible' : 'hover:underline']"
              >{{ $t("message.navbar.portfolio") }}</a
            >
          </li>
          <li>
            <a
              href="/contact"
              :class="[isScrolled ? 'invisible' : 'hover:underline']"
              >{{ $t("message.navbar.contact") }}</a
            >
          </li>
          <li class="navbar-cog" @click="toggleCogDropdown">
            <i class="fa-solid fa-gear"></i>

            <transition name="slide-fade">
              <div
                v-if="isOpenForCog"
                class="navbar-cog-dropdown"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <!-- Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700" -->
                  <div
                    class="cog"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    <span class="mr-7"
                      >{{ $t("message.navbar.cog_darkmode") }}
                    </span>
                    <i
                      :class="[
                        isDark
                          ? 'fa-regular fa-sun mr-2'
                          : 'fa-solid fa-sun mr-2',
                      ]"
                    ></i>
                    <label class="navbar-cog-dark-mode">
                      <input
                        type="checkbox"
                        class="navbar-cog-dark-mode-container peer"
                        v-model="isDark"
                        @change="toggleDark"
                      />
                      <div
                        class="navbar-cog-dark-mode-button peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-800 peer peer-checked:bg-blue-600"
                      ></div>
                      <div
                        class="navbar-cog-dark-mode-toggle peer-checked:translate-x-full"
                      ></div>
                    </label>
                    <i
                      :class="[
                        isDark
                          ? 'fa-solid fa-moon ml-2'
                          : 'fa-regular fa-moon ml-2',
                      ]"
                    ></i>
                  </div>
                </div>
              </div>
            </transition>
          </li>
          <li class="navbar-locale" @click="toggleLocaleDropdown">
            <span :class="[locale == 'en' ? 'fi fi-gb' : 'fi fi-id']"></span
            ><i class="fa-solid fa-caret-down"></i>

            <transition name="slide-fade">
              <div
                v-if="isOpenForLocale"
                class="navbar-locale-dropdown"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <!-- Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700" -->
                  <div
                    @click="switchLocaleTo('en')"
                    class="locale"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    <span class="fi fi-gb"></span
                    >{{ $t("message.navbar.language_english") }}
                  </div>
                  <div
                    @click="switchLocaleTo('id')"
                    class="locale"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    <span class="fi fi-id"></span
                    >{{ $t("message.navbar.language_indonesian") }}
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import "./../../assets/css/navbar.css";
import "./../../../node_modules/flag-icons/css/flag-icons.min.css";
import store from "./../../store/";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  data: function () {
    return {
      isScrolled: false,
      isOpenForCog: false,
      isOpenForLocale: false,
      locale: store.getters.currentLocale,
      isDark: store.getters["theme/currentTheme"],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0.1;
    },
    toggleCogDropdown(event) {
      if (event.target.outerHTML.includes("fa-gear")) {
        this.isOpenForCog = !this.isOpenForCog;
        if (this.isOpenForLocale) {
          this.isOpenForLocale = !this.isOpenForLocale;
        }
      }
    },
    toggleLocaleDropdown(event) {
      if (
        event.target.outerHTML.includes("li class") ||
        event.target.outerHTML.includes("fi fi-gb") ||
        event.target.outerHTML.includes("fi fi-id") ||
        event.target.outerHTML.includes("fa-caret-down")
      ) {
        this.isOpenForLocale = !this.isOpenForLocale;
        if (this.isOpenForCog) {
          this.isOpenForCog = !this.isOpenForCog;
        }
      }
    },
    switchLocaleTo(lang) {
      setTimeout(() => {
        this.isOpenForLocale = false;
      }, 250);
      this.$emit("locale", lang);
    },
    toggleDark() {
      this.$emit("theme");
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
