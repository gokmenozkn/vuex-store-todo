import Vue, { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircle, faWindowClose } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle, faCross, faClosedCaptioning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCircle);
library.add(faCheckCircle);
library.add(faCross);
library.add(faWindowClose);
library.add(faClosedCaptioning);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store);
app.mount("#app");
