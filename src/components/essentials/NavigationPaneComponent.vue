<template>
  <header
    :class="[
      'navigation-pane-header',
      isHovered ? 'navigation-pane-header-hovered' : 'invisible',
    ]"
  >
    <div
      id="navigation-pane"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <i
        id="1"
        @click="togglePane"
        :class="[
          'navigation-bullet',
          currentIndex === 0 ? 'fa-solid fa-circle' : 'fa-regular fa-circle',
        ]"
      ></i>
      <i
        id="2"
        @click="togglePane"
        :class="[
          'navigation-bullet',
          currentIndex === 1 ? 'fa-solid fa-circle' : 'fa-regular fa-circle',
        ]"
      ></i>
      <i
        id="3"
        @click="togglePane"
        :class="[
          'navigation-bullet',
          currentIndex === 2 ? 'fa-solid fa-circle' : 'fa-regular fa-circle',
        ]"
      ></i>
      <i
        id="4"
        @click="togglePane"
        :class="[
          'navigation-bullet',
          currentIndex === 3 ? 'fa-solid fa-circle' : 'fa-regular fa-circle',
        ]"
      ></i>
      <i
        id="5"
        @click="togglePane"
        :class="[
          'navigation-bullet',
          currentIndex === 4 ? 'fa-solid fa-circle' : 'fa-regular fa-circle',
        ]"
      ></i>
    </div>
  </header>
</template>

<script>
export default {
  props: ["currentIndex"],
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
  @apply absolute right-2 bottom-2 md:right-9 md:bottom-9 z-50 transition-all duration-500;
}
.navigation-pane-header #navigation-pane {
  @apply px-3 py-4 bg-white rounded-[100px] w-10 flex flex-col gap-1.5;
}
.navigation-pane-header .navigation-pane-header-hovered {
  @apply visible bg-white rounded-[100px];
}
.navigation-pane-header #navigation-pane i {
  @apply text-[12.75px] cursor-pointer;
}
.navigation-pane-header #navigation-pane .navigation-bullet {
  @apply visible;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
