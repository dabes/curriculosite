import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/bootstrap-material-design.min.css";
import "./assets/css/main.css";
import router from "./router";
window.axios = require("axios");

document.title = "Curriculo e Portifolio de Daniel Vieira Dabés";

createApp(App)
  .use(router)
  .mount("#app");
