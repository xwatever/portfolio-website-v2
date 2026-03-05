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
        <div
          v-if="!Array.isArray(page.description)"
          class="section-details"
          v-html="page.description"
        ></div>
        <div
          v-if="Array.isArray(page.description)"
          v-for="details in page.description"
          class="section-details"
          v-html="details"
        ></div>
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

export default {
  components: {
    NavigationPane,
  },
  props: ["isDark"],
  watch: {
    locale() {
      this.fetchAboutTranslations();
    },
    theme() {
      this.fetchAboutImages();
    },
  },
  mounted() {
    this.fetchAboutPost();
    setTimeout(() => {
      this.total = this.pages.length;
      window.addEventListener("wheel", this.handleScroll);
      window.addEventListener("keydown", this.handleKeydown);
    }, 100);
  },
  unmounted() {
    window.removeEventListener("wheel", this.handleScroll);
    window.removeEventListener("keydown", this.handleKeydown);
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    theme() {
      return this.$store.getters["theme/currentTheme"] == false
        ? "light"
        : "dark";
    },
    pages() {
      if (!this.aboutFeedIDs.length) return [];

      return this.aboutFeedIDs.map((feed) => {
        const image = this.aboutImages.find(
          (img) => img.about_feed_id === feed.id,
        );

        const translation = this.aboutTranslations.filter(
          (tr) => tr.about_feed_id === feed.id,
        );

        return {
          image: image ? `http://localhost:5173${image.image_url}` : "",
          description:
            translation.length > 1
              ? translation.map((t) => t.details)
              : translation[0]?.details || "",
        };
      });
    },
  },
  data: function () {
    return {
      currentIndex: 0,
      total: "",
      isScrolling: false,
      aboutPostID: [],
      aboutFeedIDs: [],
      aboutImages: [],
      aboutTranslations: [],
    };
  },
  methods: {
    async fetchAboutPost() {
      try {
        const res = await this.$axios.get(
          `${this.$axios.defaults.baseURL}/api/about/post/featured`,
        );

        this.aboutPostID = res.data;

        console.log(this.aboutPostID);

        await this.fetchAboutFeeds();
      } catch (err) {
        console.log(err);
      }
    },
    async fetchAboutFeeds() {
      try {
        const res = await this.$axios.get(
          `${this.$axios.defaults.baseURL}/api/about/feeds/${this.aboutPostID.id}`,
        );

        this.aboutFeedIDs = res.data;

        await this.fetchAboutImages();
        await this.fetchAboutTranslations();
      } catch (err) {
        console.log(err);
      }
    },
    async fetchAboutImages() {
      try {
        var posts = {
          feed_ids: this.aboutFeedIDs,
          image_theme: this.theme,
        };
        this.$axios
          .post(`${this.$axios.defaults.baseURL}/api/about/images`, posts)
          .then((res) => {
            this.aboutImages = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
    async fetchAboutTranslations() {
      try {
        var posts = {
          feed_ids: this.aboutFeedIDs,
          locale: this.locale,
        };
        this.$axios
          .post(`${this.$axios.defaults.baseURL}/api/about/translations`, posts)
          .then((res) => {
            this.aboutTranslations = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
    handleScroll(e) {
      if (this.isScrolling) return;
      this.isScrolling = true;
      if (e.deltaY >= 0 || e.deltaY <= 0) {
        const direction = e.deltaY > 0 ? 1 : -1;
        this.currentIndex = Math.min(
          Math.max(this.currentIndex + direction, 0),
          this.total - 1,
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
  @apply transition-all duration-250 ease-in-out;
}

.about-container .section-container {
  @apply flex flex-col md:gap-14 min-h-screen items-center justify-center px-10 md:px-14 md:pt-[71.5px] border-2 border-amber-500;
}

.about-container .section-container .section-content-image {
  @apply w-full md:flex-[68%] md:mt-0 mb-6 md:mb-0 transition-all duration-2500;
}

.about-container .section-container .section-content-details {
  @apply w-full md:flex-[32%] text-left space-y-4 transition-all duration-2500;
}

.about-container .section-container .section-content-image .section-image {
  @apply w-full transition-all duration-350;
}
.about-container .section-container .section-content-details .section-details {
  @apply text-gray-600 dark:text-[white] text-lg leading-relaxed text-[16px] md:text-[18px] leading-[1.5];
}
</style>
