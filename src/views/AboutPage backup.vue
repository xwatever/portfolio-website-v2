<template>
  <div ref="container" class="about-container">
    <div
      ref="sections"
      class="section-transition"
      :style="{ transform: `translateY(-${currentIndex * 100}vh)` }"
    >
      <BriefIntroduction />
      <BriefIntroductionContinuation />
      <InterestedInGraphicDesign />
      <InterestedInPhotography />
      <ClosingAboutPage />
    </div>
  </div>
  <NavigationPane :currentIndex="currentIndex" @pane="toggleViewedSection" />
</template>

<script>
import "./../assets/css/about.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BriefIntroduction from "./../components/about/BriefIntroductionComponent.vue";
import BriefIntroductionContinuation from "./../components/about/BriefIntroductionContinuationComponent.vue";
import InterestedInGraphicDesign from "./../components/about/InterestedInGraphicDesignComponent.vue";
import InterestedInPhotography from "./../components/about/InterestedInPhotographyComponent.vue";
import ClosingAboutPage from "./../components/about/ClosingAboutPageComponent.vue";
import NavigationPane from "./../components/essentials/NavigationPaneComponent.vue";

export default {
  components: {
    BriefIntroduction,
    BriefIntroductionContinuation,
    InterestedInGraphicDesign,
    InterestedInPhotography,
    ClosingAboutPage,
    NavigationPane,
  },
  mounted() {
    this.total = this.pages.length;
    window.addEventListener("wheel", this.handleScroll);
    window.addEventListener("keydown", this.handleKeydown);
  },
  unmounted() {
    window.removeEventListener("wheel", this.handleScroll);
    window.removeEventListener("keydown", this.handleKeydown);
  },
  data: function () {
    return {
      currentIndex: 0,
      pages: [
        "bg-blue-600",
        "bg-green-600",
        "bg-purple-600",
        "bg-white-600",
        "bg-black-600",
      ],
      total: "",
      isScrolling: false,
    };
  },
  methods: {
    handleScroll(e) {
      if (this.isScrolling) return;
      this.isScrolling = true;

      if (e.deltaY >= 0 || e.deltaY <= 0) {
        const direction = e.deltaY > 0 ? 1 : -1;
        this.currentIndex = Math.min(
          Math.max(this.currentIndex + direction, 0),
          this.total - 1
        );
      }

      setTimeout(() => {
        this.isScrolling = false;
      }, 1500); // debounce scroll
    },
    handleKeydown(e) {
      if (this.isScrolling) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        this.currentIndex = Math.min(this.currentIndex + 1, this.total - 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        this.currentIndex = Math.max(this.currentIndex - 1, 0);
      }
      this.isScrolling = true;
      setTimeout(() => (this.isScrolling = false), 1500);
    },
    toggleViewedSection(index) {
      this.$refs.sections.style.transform = `translateY(-${index * 100}vh)`;
      this.currentIndex = parseInt(index) - 1;
    },
  },
};
</script>
