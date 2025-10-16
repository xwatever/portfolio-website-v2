<template>
  <HomeMain />
  <PortfolioSummary />
</template>

<script>
import "./../assets/css/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
