import { createApp } from "vue";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./styles.css";
import router from "./router";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
pinia.use(createPersistedState());

app.use(pinia);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
