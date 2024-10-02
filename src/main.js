import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

import Products from "./components/Products.vue";
import Checkout from "./components/Checkout.vue";

library.add(faShoppingCart, faDollarSign);

const routes = [
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: "/:pathMatch(.*)*", // Updated catch-all route
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
