<template>
  <HomeMain />
  <PortfolioSummary />
</template>

<script>
import HomeMain from "./../components/home/HomeMainComponent.vue";
import PortfolioSummary from "./../components/home/PortfolioSummaryComponent.vue";

import Lenis from "@studio-freight/lenis";

export default {
  components: {
    HomeMain,
    PortfolioSummary,
  },
  setup() {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  },
};
</script>

<style scoped>
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

.home-container {
  @apply h-screen w-screen overflow-hidden;
}
</style>
