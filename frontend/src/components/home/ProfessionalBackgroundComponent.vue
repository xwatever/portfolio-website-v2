<template>
  <div id="professional-background" ref="experienceTop" class="relative">
    <!-- Sticky Menu -->
    <div
      class="sticky top-20 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
    >
      <div class="max-w-4xl mx-auto flex justify-center gap-6 py-4">
        <button @click="changeTab('work')" :class="tabClass('work')">
          Work Experience
        </button>

        <button @click="changeTab('education')" :class="tabClass('education')">
          Education
        </button>
      </div>
    </div>

    <!-- Title -->
    <h1
      class="mt-16 text-xl md:text-4xl text-center font-bold tracking-tight leading-tight"
    >
      My Experience
    </h1>

    <!-- WORK EXPERIENCE -->
    <section
      v-show="activeTab === 'work'"
      class="bg-white dark:bg-gray-900 py-12 px-8 max-w-9xl mx-auto"
    >
      <h2 class="section-heading">Work Experience</h2>

      <div v-for="(background, index) in works" :key="index" class="timeline">
        <!-- Back Officer -->
        <div class="timeline-item">
          <div class="dot"></div>
          <h3 class="title">{{ background.occupation }}</h3>
          <p class="meta">
            {{ background.institute_or_organization }} -
            {{ background.location }} |
            {{
              new Date(background.start).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })
            }}
            -
            {{
              new Date(background.end).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })
            }}
          </p>
          <div
            class="content [&>ul]:list-disc [&>ul]:pl-4"
            v-html="background.details"
          ></div>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section
      v-show="activeTab === 'education'"
      class="bg-white dark:bg-gray-900 py-12 px-8 max-w-9xl mx-auto"
    >
      <h2 class="section-heading">Education</h2>

      <div
        v-for="(background, index) in educations"
        :key="index"
        class="timeline"
      >
        <div class="timeline-item">
          <div class="dot"></div>
          <h3 class="title">
            {{ background.institute_or_organization }} -
            {{ background.occupation }}
          </h3>
          <p class="meta">
            {{
              new Date(background.start).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })
            }}
            -
            {{
              new Date(background.end).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })
            }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
  data() {
    return {
      activeTab: "work",
      educations: [],
      works: [],
    };
  },
  watch: {
    locale() {
      this.fetchBackgroundTranslation();
    },
  },
  mounted() {
    this.fetchBackgroundTranslation();
  },
  methods: {
    fetchBackgroundTranslation() {
      this.$axios
        .get(
          `${this.$axios.defaults.baseURL}/professional-background-translations/work/${this.locale}`,
        )
        .then((res) => {
          this.works = res.data;
        })
        .catch((err) => {
          console.log(err);
        });

      this.$axios
        .get(
          `${this.$axios.defaults.baseURL}/professional-background-translations/education/${this.locale}`,
        )
        .then((res) => {
          this.educations = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeTab(tab) {
      if (this.activeTab === tab) return;

      this.activeTab = tab;

      this.$emit("toggleScroll");
    },
    tabClass(tab) {
      return [
        "px-5 py-2 rounded-full text-sm font-medium transition",
        this.activeTab === tab
          ? "bg-blue-600 text-white"
          : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200",
      ];
    },
  },
};
</script>

<style scoped>
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

.section-heading {
  @apply text-3xl font-bold text-gray-800 dark:text-white mb-10;
}

.timeline {
  @apply relative border-l-2 border-gray-300 dark:border-gray-700 pl-6 space-y-10;
}

.timeline-item {
  @apply relative;
}

.dot {
  @apply absolute w-3 h-3 bg-blue-500 rounded-full -left-[16px] top-2;
}

.title {
  @apply text-xl font-semibold text-gray-800 dark:text-white;
}

.meta {
  @apply text-sm text-gray-500 dark:text-gray-400;
}

.content {
  @apply mt-2 text-gray-700 dark:text-gray-300;
}
</style>
