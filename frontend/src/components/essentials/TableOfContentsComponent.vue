<template>
  <!-- Overlay -->
  <transition name="overlay-fade">
    <div v-if="open" class="fixed inset-0 z-10" @click.self="$emit('close')">
      <!-- Menu Panel -->
      <transition name="slide-fade">
        <nav
          class="absolute left-13 top-0 -translate-y-[-90px] z-50 bg-white dark:bg-gray-900 rounded-r-2xl shadow-xl p-6 w-56 space-y-4"
        >
          <span class="mb-6">Contexts</span>
          <button
            v-for="item in items"
            :key="item.key"
            @click="navigate(item.key)"
            class="w-full text-left text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
          >
            {{ item.label }}
          </button>
        </nav>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    open: Boolean,
  },
  emits: ["navigate", "close"],
  data() {
    return {
      items: [
        { key: "home", label: "Home" },
        { key: "summary", label: "Summary" },
        { key: "background", label: "Experience" },
      ],
    };
  },
  methods: {
    navigate(key) {
      this.$emit("navigate", key);
      this.$emit("close");
    },
  },
};
</script>

<style>
/* Overlay fade */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: all 0.5s ease;
  transform: translateX(0px);
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Panel slide + fade */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.28s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
