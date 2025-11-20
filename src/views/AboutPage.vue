<template>
  <div ref="container" class="about-container">
    <div
      v-for="(page, index) in pages"
      :key="index"
      :style="{ transform: `translateY(-${currentIndex * 100}vh)` }"
      :class="[
        'section-transition section-container',
        index % 2 != 0 ? 'md:flex-row!' : 'md:flex-row-reverse!',
      ]"
    >
      <div
        :class="[
          'section-content-image',
          index === currentIndex ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <img
          :src="page.image"
          :class="[
            'section-image',
            index % 2 != 0 ? 'md:mr-auto!' : 'md:ml-auto!',
          ]"
        />
      </div>

      <div
        :class="[
          'section-content-details',
          index === currentIndex ? 'opacity-100' : 'opacity-0',
        ]"
      >
        <p v-if="!Array.isArray(page.description)" class="section-details">
          {{ page.description }}
        </p>
        <p
          v-if="Array.isArray(page.description)"
          v-for="details in page.description"
          class="section-details"
        >
          {{ details }}
        </p>
      </div>
    </div>
  </div>
  <NavigationPane
    :currentIndex="currentIndex"
    :pageAmount="pages.length"
    @pane="toggleViewedSection"
  />
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavigationPane from "./../components/essentials/NavigationPaneComponent.vue";

import profile_image from "./../assets/img/random/sample.png";
import first_light from "./../assets/img/about_page/introduction_first_light.svg";
import first_dark from "./../assets/img/about_page/introduction_first_dark.svg";
import graphic_design_light from "./../assets/img/about_page/introduction_graphic_design_light.svg";
import graphic_design_dark from "./../assets/img/about_page/introduction_graphic_design_dark.svg";

export default {
  components: {
    NavigationPane,
  },
  props: ["isDark"],
  mounted() {
    this.total = this.pages.length;
    window.addEventListener("wheel", this.handleScroll);
    window.addEventListener("keydown", this.handleKeydown);
  },
  unmounted() {
    window.removeEventListener("wheel", this.handleScroll);
    window.removeEventListener("keydown", this.handleKeydown);
  },
  computed: {
    pages() {
      return [
        {
          description: [
            this.$t("message.about.introduction_1"),
            this.$t("message.about.introduction_2"),
          ],
          image: this.isDark ? first_dark : first_light,
        },
        {
          description: this.$t("message.about.introduction_second"),
          image: profile_image,
        },
        {
          description: this.$t("message.about.introduction_graphic_design"),
          image: this.isDark ? graphic_design_dark : graphic_design_light,
        },
        {
          description: this.$t("message.about.introduction_photography"),
          image: profile_image,
        },
        {
          description: [
            this.$t("message.about.introduction_closing_1"),
            this.$t("message.about.introduction_closing_2"),
          ],
          image: profile_image,
        },
      ];
    },
  },
  data: function () {
    return {
      currentIndex: 0,
      profile_image: profile_image,
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
      this.currentIndex = parseInt(index);
    },
  },
};
</script>

<style scoped>
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

.about-container {
  @apply h-screen w-full overflow-hidden;
}

.about-container .section-transition {
  @apply transition-all duration-350 ease-in-out;
}

.about-container .section-container {
  @apply flex flex-col md:gap-14 min-h-screen items-center justify-center px-12 md:px-14 md:pt-[71.5px] border-2 border-amber-500;
}

.about-container .section-container .section-content-image {
  @apply w-full md:flex-[72%] md:mt-0 mb-6 md:mb-0 transition-all duration-2500;
}

.about-container .section-container .section-content-details {
  @apply w-full md:flex-[28%] text-left space-y-4 transition-all duration-2500;
}

.about-container .section-container .section-content-image .section-image {
  @apply w-full transition-all duration-350;
}
.about-container .section-container .section-content-details .section-details {
  @apply text-gray-600 dark:text-[white] text-lg leading-relaxed text-[16px] md:text-[18px] leading-[1.5];
}
</style>
