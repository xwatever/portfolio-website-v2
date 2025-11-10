<template>
  <header
    :class="[
      'navigation-pane-header',
      isHovered ? 'navigation-pane-header-hovered opacity-100' : 'opacity-0',
    ]"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div id="navigation-pane">
      <i
        v-for="i in pageAmount"
        :key="i"
        :id="i - 1"
        @click="togglePane"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
        :class="[
          'navigation-bullet',
          currentIndex === i - 1
            ? 'fa-solid fa-circle'
            : 'fa-regular fa-circle',
        ]"
      ></i>
    </div>
  </header>
</template>

<script>
export default {
  props: ["currentIndex", "pageAmount"],
  data: function () {
    return {
      isHovered: false,
    };
  },
  methods: {
    togglePane(event) {
      this.$emit("pane", event.target.id);
    },
  },
};
</script>

<style scoped>
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

.navigation-pane-header {
  @apply absolute right-2 bottom-2 md:right-9 md:bottom-9 z-50 
    transition-all duration-500 ease-in-out opacity-100;
}

.navigation-pane-header-hovered {
  @apply bg-[#d5dbec] dark:bg-[#1d1e26] rounded-[100px];
}

#navigation-pane {
  @apply px-3 py-4 rounded-[100px] w-10 flex flex-col gap-1.5 items-center;
}

.navigation-bullet {
  @apply text-[12.75px] cursor-pointer;
}

/* Always-visible bullet (first one) */
.always-visible {
  @apply opacity-100;
}

/* Fade animation for the other bullets */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
