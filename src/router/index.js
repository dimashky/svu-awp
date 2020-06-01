import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Consultations from "../views/Consultations";
import Topics from "../views/Topics";
import store from "../store/index";
import SmartAssist from "../views/SmartAssist";

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
    component: Consultations,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = store.getters.isAuthenticated;
      if (!isAuthenticated) next("/");
      else next();
    }
  },
  {
    path: "/topics",
    name: "Topics",
    component: Topics
  },
  {
    path: "/smart-assist",
    name: "SmartAssist",
    component: SmartAssist
  }
];

const router = new VueRouter({
  routes
});

export default router;
