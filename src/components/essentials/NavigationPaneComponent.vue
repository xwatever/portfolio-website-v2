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
import "./../../assets/css/navigation-pane.css";

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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
