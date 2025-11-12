<template>
  <header
    :class="['navbar-header', isScrolled ? '' : 'navbar-header-scrolled']"
  >
    <nav id="navbar">
      <div class="flex items-center justify-between w-full">
        <h1 :class="[isScrolled ? 'invisible' : 'visible text-xl font-bold']">
          <a href="/">MD</a>
        </h1>

        <!-- Hamburger for mobile -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden block text-2xl focus:outline-none z-[60]"
        >
          <i
            :class="isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
          ></i>
        </button>

        <!-- Desktop Menu -->
        <ul class="navbar-menu hidden md:flex items-center gap-6">
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

          <!-- Settings and Locale (same as before) -->
          <li class="navbar-cog" @click="toggleCogDropdown">
            <i class="fa-solid fa-gear"></i>
            <transition name="slide-fade">
              <div v-if="isOpenForCog" class="navbar-cog-dropdown" role="menu">
                <div class="py-1">
                  <div class="cog" role="menuitem">
                    <span class="mr-7">{{
                      $t("message.navbar.cog_darkmode")
                    }}</span>
                    <i
                      :class="[
                        localIsDark
                          ? 'fa-regular fa-sun mr-2'
                          : 'fa-solid fa-sun mr-2',
                      ]"
                    ></i>
                    <label class="navbar-cog-dark-mode">
                      <input
                        type="checkbox"
                        class="navbar-cog-dark-mode-container peer"
                        v-model="localIsDark"
                        @change="toggleDark"
                      />
                      <div
                        class="navbar-cog-dark-mode-button peer peer-checked:bg-blue-600"
                      ></div>
                      <div
                        class="navbar-cog-dark-mode-toggle peer-checked:translate-x-full"
                      ></div>
                    </label>
                    <i
                      :class="[
                        localIsDark
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
            <span :class="[locale == 'en' ? 'fi fi-gb' : 'fi fi-id']"></span>
            <i class="fa-solid fa-caret-down"></i>

            <transition name="slide-fade">
              <div
                v-if="isOpenForLocale"
                class="navbar-locale-dropdown"
                role="menu"
              >
                <div class="py-1">
                  <div @click="switchLocaleTo('en')" class="locale">
                    <span class="fi fi-gb"></span
                    >{{ $t("message.navbar.language_english") }}
                  </div>
                  <div @click="switchLocaleTo('id')" class="locale">
                    <span class="fi fi-id"></span
                    >{{ $t("message.navbar.language_indonesian") }}
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </ul>
      </div>

      <!-- Overlay when mobile menu open -->
      <div
        v-if="isMobileMenuOpen"
        @click="toggleMobileMenu"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
      ></div>

      <!-- Mobile Side Drawer -->
      <transition name="slide-right">
        <div
          v-if="isMobileMenuOpen"
          class="fixed top-0 right-0 h-full w-full bg-white dark:bg-[#1d1e26] shadow-lg z-50 flex flex-col p-6"
        >
          <nav class="flex flex-col gap-6 text-lg">
            <a href="/about" @click="toggleMobileMenu">{{
              $t("message.navbar.about")
            }}</a>
            <a href="/portfolio" @click="toggleMobileMenu">{{
              $t("message.navbar.portfolio")
            }}</a>
            <a href="/contact" @click="toggleMobileMenu">{{
              $t("message.navbar.contact")
            }}</a>

            <hr class="border-gray-300 dark:border-gray-600" />

            <!-- Dark mode toggle -->
            <button
              @click="toggleDark"
              class="flex items-center gap-3 cursor-pointer"
            >
              <i
                :class="localIsDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun'"
              ></i>
              <span>{{
                localIsDark
                  ? $t("message.navbar.cog_darkmode")
                  : $t("message.navbar.cog_lightmode")
              }}</span>
            </button>

            <!-- Locale toggle -->
            <div
              @click="switchLocaleTo('')"
              class="flex items-center gap-3 cursor-pointer"
            >
              <span :class="[locale == 'en' ? 'fi fi-gb' : 'fi fi-id']"></span>
              <span>{{
                locale === "en"
                  ? $t("message.navbar.language_english")
                  : $t("message.navbar.language_indonesian")
              }}</span>
            </div>
          </nav>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  props: { isDark: Boolean },
  data: function () {
    return {
      isScrolled: false,
      isOpenForCog: false,
      isOpenForLocale: false,
      isMobileMenuOpen: false,
      locale: this.$store.getters.currentLocale,
      localIsDark: this.isDark,
    };
  },
  watch: {
    isDark(val) {
      this.localIsDark = val;
    },
    isOpenForCog(newValue, oldValue) {
      if (newValue == true) {
        document.addEventListener("click", this.handleClickOutsideCog);
      } else {
        document.removeEventListener("click", this.handleClickOutsideCog);
      }
    },
    isOpenForLocale(newValue, oldValue) {
      if (newValue == true) {
        document.addEventListener("click", this.handleClickOutsideLocale);
      } else {
        document.removeEventListener("click", this.handleClickOutsideLocale);
      }
    },
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
      if (this.isMobileMenuOpen) this.isMobileMenuOpen = !this.isMobileMenuOpen;
      setTimeout(() => {
        this.isOpenForLocale = false;
      }, 250);
      this.$emit("locale", lang);
    },
    toggleDark() {
      if (this.isMobileMenuOpen) this.isMobileMenuOpen = !this.isMobileMenuOpen;
      this.$emit("theme");
    },
    handleClickOutsideCog(event) {
      const cogDropdown = this.$el.querySelector(".navbar-cog-dropdown");
      const cogButton = this.$el.querySelector(".navbar-cog");

      const clickedInsideCog =
        cogDropdown?.contains(event.target) ||
        cogButton?.contains(event.target);

      if (!clickedInsideCog) {
        this.isOpenForCog = false;
      }
    },
    handleClickOutsideLocale(event) {
      const localeDropdown = this.$el.querySelector(".navbar-locale-dropdown");
      const localeButton = this.$el.querySelector(".navbar-locale");

      const clickedInsideLocale =
        localeDropdown?.contains(event.target) ||
        localeButton?.contains(event.target);

      if (!clickedInsideLocale) {
        this.isOpenForLocale = false;
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;

      // Close other dropdowns when opening mobile menu
      if (this.isOpenForCog) this.isOpenForCog = false;
      if (this.isOpenForLocale) this.isOpenForLocale = false;
    },
  },
};
</script>

<style scoped>
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

@import "flag-icons/css/flag-icons.min.css";

@media (max-width: 768px) {
  .navbar-menu {
    @apply hidden!;
  }
}

#navbar {
  @apply max-w-7xl mx-auto max-h-[71.5px] px-9 py-5 flex items-center justify-between text-[21px];
}
.navbar-header {
  @apply fixed top-0 w-full z-50 transition-all duration-500;
}

.navbar-header-scrolled {
  @apply bg-[#d5dbec] dark:bg-[#1d1e26];
}
.navbar-header #navbar .navbar-menu {
  @apply flex gap-6;
}

.navbar-header-scrolled #navbar .navbar-menu {
  @apply flex gap-6;
}
.navbar-header #navbar .navbar-menu .navbar-cog {
  @apply relative cursor-pointer;
}

.navbar-header-scrolled #navbar .navbar-menu .navbar-cog {
  @apply relative cursor-pointer;
}
.navbar-header #navbar .navbar-menu .navbar-cog .navbar-cog-dropdown {
  @apply absolute right-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-white dark:bg-[#000000] shadow-lg ring-1 ring-blue-100/50 focus:outline-hidden;
}

.navbar-header-scrolled #navbar .navbar-menu .navbar-cog .navbar-cog-dropdown {
  @apply absolute right-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-white dark:bg-[#000000] shadow-lg ring-1 ring-blue-100/50 focus:outline-hidden;
}
.navbar-header #navbar .navbar-menu .navbar-cog .navbar-cog-dropdown .cog {
  @apply block px-4 py-2 text-sm;
}

.navbar-header-scrolled
  #navbar
  .navbar-menu
  .navbar-cog
  .navbar-cog-dropdown
  .cog {
  @apply block px-4 py-2 text-sm;
}
.navbar-header
  #navbar
  .navbar-menu
  .navbar-cog
  .navbar-cog-dropdown
  .cog
  .navbar-cog-dark-mode {
  @apply relative inline-flex items-center cursor-pointer;
}

.navbar-header-scrolled
  #navbar
  .navbar-menu
  .navbar-cog
  .navbar-cog-dropdown
  .cog
  .navbar-cog-dark-mode {
  @apply relative inline-flex items-center cursor-pointer;
}

.navbar-header
  #navbar
  .navbar-menu
  .navbar-cog
  .navbar-cog-dropdown
  .cog
  .navbar-cog-dark-mode
  .navbar-cog-dark-mode-container {
  @apply sr-only;
}

.navbar-header-scrolled
  #navbar
  .navbar-menu
  .navbar-cog
  .navbar-cog-dropdown
  .cog
  .navbar-cog-dark-mode
  .navbar-cog-dark-mode-container {
  @apply sr-only;
}

.navbar-header
  #navbar
  .navbar-menu
  .navbar-cog
  .navbar-cog-dropdown
  .cog
  .navbar-cog-dark-mode
  .navbar-cog-dark-mode-button {
  @apply w-5 h-3 bg-gray-300  rounded-full dark:bg-gray-600;
}

.navbar-header-scrolled
  #navbar
  .navbar-menu
  .navbar-cog
  .navbar-cog-dropdown
  .cog
  .navbar-cog-dark-mode
  .navbar-cog-dark-mode-button {
  @apply w-5 h-3 bg-gray-300  rounded-full dark:bg-gray-600;
}

.navbar-header
  #navbar
  .navbar-menu
  .navbar-cog
  .navbar-cog-dropdown
  .cog
  .navbar-cog-dark-mode
  .navbar-cog-dark-mode-toggle {
  @apply absolute left-0.5 top-0.5 bg-white w-1.75 h-1.75 rounded-full transition-transform dark:bg-gray-200;
}

.navbar-header-scrolled
  #navbar
  .navbar-menu
  .navbar-cog
  .navbar-cog-dropdown
  .cog
  .navbar-cog-dark-mode
  .navbar-cog-dark-mode-toggle {
  @apply absolute left-0.5 top-0.5 bg-white w-1.75 h-1.75 rounded-full transition-transform dark:bg-gray-200;
}

.navbar-header #navbar .navbar-menu .navbar-locale {
  @apply relative cursor-pointer;
}

.navbar-header-scrolled #navbar .navbar-menu .navbar-locale {
  @apply relative cursor-pointer;
}
.navbar-header #navbar .navbar-menu .navbar-locale .navbar-locale-dropdown {
  @apply absolute right-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-white dark:bg-[#000000] shadow-lg ring-1 ring-blue-100/50 focus:outline-hidden;
}

.navbar-header-scrolled
  #navbar
  .navbar-menu
  .navbar-locale
  .navbar-locale-dropdown {
  @apply absolute right-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-white dark:bg-[#000000] shadow-lg ring-1 ring-blue-100/50 focus:outline-hidden;
}
.navbar-header
  #navbar
  .navbar-menu
  .navbar-locale
  .navbar-locale-dropdown
  .locale {
  @apply block px-4 py-2 text-sm;
}

.navbar-header-scrolled
  #navbar
  .navbar-menu
  .navbar-locale
  .navbar-locale-dropdown
  .locale {
  @apply block px-4 py-2 text-sm;
}

.fi-id {
  @apply mr-2 box-border! border bg-cover!;
}
.fi-gb {
  @apply mr-2 box-border! border bg-cover!;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

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

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0);
}
</style>
