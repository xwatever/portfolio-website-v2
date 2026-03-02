<template>
  <div
    class="min-h-full mt-[71.5px] bg-gray-900 text-white py-20 px-6"
    id="contact"
  >
    <div class="max-w-2xl mx-auto text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
      <p class="">
        Have a question or want to work together? Send me a message!
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="max-w-3xl mx-auto space-y-6">
      <div class="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          v-model="form.name"
          required
          class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          v-model="form.email"
          required
          class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <textarea
        rows="5"
        placeholder="Your Message"
        v-model="form.message"
        required
        class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>

      <div class="text-center">
        <button
          type="submit"
          class="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-full text-white font-medium shadow transition duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import "@fortawesome/fontawesome-free/css/all.min.css";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

function handleSubmit() {
  console.log("Form submitted:", form);
  // You can integrate email sending logic here (e.g., Formspree, EmailJS, or backend API)
  alert("Message sent (mock)!");
}
</script>
