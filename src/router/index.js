import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("../views/HomePage.vue");
const AboutPage = () => import("../views/AboutPage.vue");
const PortfolioPage = () => import("../views/PortfolioPage.vue");
const ContactPage = () => import("../views/ContactPage.vue");

const routes = [
  {
    path: "/",
    redirect: { name: "home" },
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioPage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
];

const router = createRouter({
  mode: "hash",
  // history: createWebHistory("/portfolio/"),
  history: createWebHistory(),
  routes,
});

export default router;
