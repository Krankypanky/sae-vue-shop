import { createApp } from "vue";
import App from "./App.vue";
import VueToast from "vue-toast-notification";
import router from "./router";
import store from "./store";

import "./scss/tailwind.scss";
import "vue-toast-notification/dist/theme-sugar.css";

import "./registerServiceWorker";

createApp(App)
  .use(router)
  .use(store)
  .use(VueToast, {
    duration: 5000,
  })
  .mount("#app");
