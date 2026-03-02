<template>
  <div id="projects" class="projects">
    <div class="card-container">
      <h2 class="">Latest Projects</h2>

      <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.id"
          class="rounded-lg shadow hover:shadow-lg transition duration-300"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover rounded-t-lg"
          />
          <div class="p-6 space-y-3">
            <h3 class="text-xl font-semibold">{{ project.title }}</h3>
            <p class="text-sm">{{ project.description }}</p>
            <div class="flex gap-2 flex-wrap text-sm">
              <span
                v-for="tag in project.tech"
                :key="tag"
                class="text-indigo-600 px-2 py-0.5 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
            <div class="pt-3">
              <a
                :href="project.link"
                target="_blank"
                class="inline-block text-indigo-600 hover:underline font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "./../assets/css/portfolio.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const projects = [
  {
    id: 1,
    title: "Weather App",
    description: "A simple Vue + API-based weather forecast app.",
    tech: ["Vue 3", "Tailwind", "OpenWeather"],
    image: "https://via.placeholder.com/400x250?text=Weather+App",
    link: "https://yourweatherapp.netlify.app",
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A CRUD task management app with Pinia store.",
    tech: ["Vue", "Pinia", "Firebase"],
    image: "https://via.placeholder.com/400x250?text=Task+Manager",
    link: "https://yourtaskmanager.netlify.app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "My personal site built with Vue and Tailwind.",
    tech: ["Vue 3", "Tailwind CSS"],
    image: "https://via.placeholder.com/400x250?text=Portfolio",
    link: "https://yourportfolio.com",
  },
];
</script>
