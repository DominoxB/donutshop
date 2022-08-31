import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index.js";
import i18n from './locale/index.js'

createApp(App).use(router).use(i18n).mount("#app");
