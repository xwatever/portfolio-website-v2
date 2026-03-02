<template>
  <section class="min-h-screen bg-gradient-to-br">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row">
      <!-- LEFT: Sticky Profile -->
      <main class="md:w-2/3 w-full">
        <!-- Introduction -->
        <section
          class="border-2 border-amber-200 h-[calc(100vh-71px)] mt-[71px] flex items-center px-10"
        >
          <div class="text-y-center space-y-2">
            <h1
              class="text-2xl md:text-5xl font-thin tracking-tight leading-tight"
            >
              {{ $t("message.home.introduction") }}
            </h1>
            <p class="text-2xl md:text-2xl">
              {{ $t("message.home.introduction_2") }}
            </p>
          </div>
        </section>

        <section
          class="border-2 border-amber-200 h-[150vh] flex items-center px-10"
        >
          <div
            class="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-6 space-y-6"
          >
            <h2 class="text-xl font-semibold">Muhammad Darmawan</h2>
            <p class="text-sm text-gray-600 mt-2">
              Front-End & Web Developer focused on building clean, accessible,
              and maintainable web interfaces.
            </p>
          </div>
        </section>

        <section
          class="border-2 border-amber-200 h-[150vh] flex items-center px-10"
        >
          <div class="text-y-center space-y-2">
            <h1
              class="text-2xl md:text-5xl font-thin tracking-tight leading-tight"
            >
              Tech stack i have used:
            </h1>
            <p class="text-2xl md:text-2xl">
              {{ $t("message.home.introduction_2") }}
            </p>
          </div>
        </section>
      </main>

      <!-- RIGHT: Scrollable Content -->
      <aside
        class="md:w-1/3 w-full h-[calc(100vh-63px)] md:sticky md:top-0 self-start flex items-center justify-center"
      >
        <div
          class="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-6 space-y-6"
        >
          <!-- Profile Image -->
          <div class="flex justify-center">
            <!-- <img
              src="/images/profile.jpg"
              alt="Profile Photo"
              class="w-40 h-40 object-cover rounded-full shadow-md"
            /> -->
          </div>

          <!-- Brief Profile -->
          <div class="text-center">
            <h2 class="text-xl font-semibold">Muhammad Darmawan</h2>
            <p class="text-sm text-gray-600 mt-2">
              Front-End & Web Developer focused on building clean, accessible,
              and maintainable web interfaces.
            </p>
          </div>

          <!-- Tech Stack -->
          <div>
            <h3
              class="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3"
            >
              Tech Stack
            </h3>
            <div class="flex flex-wrap gap-2">
              <span class="tech-badge">Vue</span>
              <span class="tech-badge">React</span>
              <span class="tech-badge">TypeScript</span>
              <span class="tech-badge">Tailwind CSS</span>
              <span class="tech-badge">Node.js</span>
              <span class="tech-badge">MySQL</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

.tech-badge {
  /* @apply text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium; */
  @apply px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium;
}

.section-title {
  @apply text-2xl font-semibold;
}

.section-text {
  @apply text-gray-700 leading-relaxed;
}
</style>
