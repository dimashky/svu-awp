import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import Snotify, { SnotifyPosition } from "vue-snotify";
import "vue-snotify/styles/material.css";
import moment from "moment";

Vue.use(Snotify, {
  toast: {
    position: SnotifyPosition.leftBottom
  }
});

moment.locale("ar");
Vue.prototype.$moment = moment;

Vue.prototype.$url = url => {
  if (!url) return "";
  url = url.replace("\\", "/");
  return `${process.env.VUE_APP_SERVER_IP}/${url}`;
};

Vue.config.productionTip = false;

store.dispatch("checkToken").finally(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app");
});
