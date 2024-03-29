import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import "./index.css";
import "primevue/resources/themes/lara-light-green/theme.css";

createApp(App).use(router).use(PrimeVue).mount("#app");
