import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Consultations from "../views/Consultations";
import Topics from "../views/Topics";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/consultations",
    name: "Consultations",
    component: Consultations
  },
  {
    path: "/topics",
    name: "Topics",
    component: Topics
  }
];

const router = new VueRouter({
  routes
});

export default router;
