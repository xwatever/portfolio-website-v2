<template>
  <div class="w-full">
    <section
      v-for="(block, index) in contentBlocks"
      :key="index"
      class="flex flex-col md:flex-row min-h-screen items-center justify-center px-6 md:px-16 transition-all duration-300"
      :class="{
        'md:flex-row': index % 2 === 0,
        'md:flex-row-reverse': index % 2 !== 0,
      }"
    >
      <!-- Image -->
      <div class="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          :src="block.image"
          :alt="block.title"
          class="max-w-full md:max-w-[80%] rounded-xl shadow-lg"
        />
      </div>

      <!-- Text -->
      <div class="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h2 class="text-3xl font-bold text-gray-800">{{ block.title }}</h2>
        <p class="text-gray-600 text-lg leading-relaxed">
          {{ block.description }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
const contentBlocks = [
  {
    title: "Freshly Baked Cakes",
    description:
      "We bake every cake with love and passion. Explore our wide variety of flavors, from classic chocolate to exotic fruits.",
    image: "/images/cake.jpg",
  },
  {
    title: "Refreshing Drinks",
    description:
      "Our drinks are made from natural ingredients to complement your favorite desserts and keep you refreshed.",
    image: "/images/drinks.jpg",
  },
  {
    title: "Custom Orders",
    description:
      "Want something unique? Customize your order for special occasions — we’ll bring your vision to life!",
    image: "/images/custom.jpg",
  },
];
</script>
