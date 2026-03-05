import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";

import "./assets/css/main.css";

import axios from "axios";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3000";

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(router);
app.use(store);
app.use(i18n);

app.mount("#app");
