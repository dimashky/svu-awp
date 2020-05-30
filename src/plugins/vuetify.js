import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  theme: {
    themes: {
      light: {
        primary: "#142850",
        secondary: "#dae1e7",
        accent: "#00909e",
        error: "#FF5252",
        info: "#27496d",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
