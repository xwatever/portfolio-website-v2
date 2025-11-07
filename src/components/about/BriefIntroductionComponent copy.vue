<template>
  <div class="h-dvh w-full border-4 border-red flex flex-row items-center">
    <div
      class="border-4 border-blue w-[1500px] p-[3em] rounded-2xl shadow-lg text-center"
    >
      <p class="text-left mb-10 text-[21px] leading-[1.6]">
        {{ $t("message.about.introduction_1") }}
      </p>
      <p class="text-left text-[21px] leading-[1.6]">
        {{ $t("message.about.introduction_2") }}
      </p>
    </div>
    <div class="p-[3em] rounded-2xl shadow-lg text-center">
      <img :src="profile_image" />
    </div>
  </div>
</template>

<script>
// import "./../../assets/css/about-pages.css";
import profile_image from "./../../assets/img/random/sample.png";
export default {
  data: function () {
    return {
      profile_image: profile_image,
    };
  },
};
</script>

<!-- <template>
  <div class="h-dvh w-full border-4 border-red flex flex-row items-center">
    <div class="w-[1500px] p-[5em] rounded-2xl shadow-lg text-center">
      <p class="text-left mb-10 text-[21px] leading-[1.6]">
        {{ $t("message.about.introduction_1") }}
      </p>
      <p class="text-left text-[21px] leading-[1.6]">
        {{ $t("message.about.introduction_2") }}
      </p>
    </div>
    <div class="p-8 rounded-2xl shadow-lg text-center">
      <p class="">
        {{ $t("message.about.introduction_1") }}
      </p>
      <p class="">
        {{ $t("message.about.introduction_2") }}
      </p>
    </div>
  </div>
</template>

<script>
// import "./../../assets/css/about-pages.css";
export default {};
</script> -->
