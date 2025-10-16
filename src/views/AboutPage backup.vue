<template>
  <div class="relative p-6 min-h-screen bg-gray-100">
    <!-- Content -->
    <h1 class="text-2xl font-bold mb-4">{{ t("message.hello") }}</h1>
    <button
      @click="changeLanguage"
      class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {{ t("message.switch") }}
    </button>

    <!-- Loading Overlay -->
    <transition name="fade">
      <div
        v-if="loading"
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      >
        <div
          class="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import "@fortawesome/fontawesome-free/css/all.min.css";

const { t, locale } = useI18n();
const loading = ref(false);

function changeLanguage() {
  loading.value = true;

  // Simulate delay (you could await a real async import here)
  setTimeout(() => {
    locale.value = locale.value === "en" ? "id" : "en";
    loading.value = false;
  }, 600); // adjust duration to match animation
}
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
