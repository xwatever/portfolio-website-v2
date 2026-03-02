<template>
  <div class="relative">
    <!-- Floating Toggle Button -->
    <header
      @mouseover="isHovered = true"
      @mouseleave="if (!isTocOpen) isHovered = false;"
      @click="(isTocOpen = !isTocOpen), (isHovered = true)"
      class="toc-header"
      :class="[
        isHovered || isTocOpen ? 'toc-header-hovered opacity-100' : 'opacity-0',
        isTocOpen ? 'rounded-l-2xl' : 'rounded-2xl',
      ]"
      aria-label="Toggle navigation"
    >
      <div
        @mouseover="isHovered = true"
        @mouseleave="if (!isTocOpen) isHovered = false;"
      >
        <i class="fas fa-bars"></i>
      </div>
    </header>

    <!-- Table of Contents -->
    <TableOfContents
      :open="isTocOpen"
      @navigate="handleNavigate"
      @close="
        isTocOpen = false;
        isHovered = false;
      "
    />

    <!-- Sections -->
    <div ref="home" class="reveal"><HomeMain /></div>
    <div ref="summary" class="reveal"><PortfolioSummary /></div>
    <div ref="background" class="reveal">
      <ProfessionalBackground @toggleScroll="scrollForPB" />
    </div>
  </div>
</template>

<script>
import HomeMain from "./../components/home/HomeMainComponent.vue";
import PortfolioSummary from "./../components/home/PortfolioSummaryComponent.vue";
import ProfessionalBackground from "./../components/home/ProfessionalBackgroundComponent.vue";
import TableOfContents from "./../components/essentials/TableOfContentsComponent.vue";

import Lenis from "@studio-freight/lenis";

export default {
  components: {
    HomeMain,
    PortfolioSummary,
    ProfessionalBackground,
    TableOfContents,
  },
  data() {
    return {
      isTocOpen: false,
      isHovered: false,
    };
  },

  mounted() {
    const lenis = new Lenis({ smooth: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    this.lenis = lenis;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(this.$refs).forEach((el) => observer.observe(el));
  },
  methods: {
    handleNavigate(section) {
      const target = this.$refs[section];
      if (!target || !this.lenis) return;

      this.lenis.scrollTo(target, {
        offset: -100,
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });

      this.isTocOpen = false;
    },
    scrollForPB() {
      this.lenis.scrollTo(this.$refs["background"], {
        offset: -100,
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    },
  },
};
</script>

<style scoped>
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

.toc-header {
  @apply fixed top-22.5 left-1 z-10 w-12 h-12   flex items-center justify-center transition-all duration-500 ease-in-out opacity-100;
}

.toc-header-hovered {
  @apply bg-blue-600 text-white shadow-lg;
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
