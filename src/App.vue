<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center" @click="$router.push('/')">
        <v-icon>mdi-heart-outline</v-icon>
        <span class="mr-2 headline">طبيبي</span>
      </div>

      <v-spacer></v-spacer>

      <template v-if="isAdmin">
        <v-btn
          @click="$router.push({ name: 'Topics' })"
          class="ml-1"
          color="success"
        >
          <span class="ml-2">المواضيع</span>
          <v-icon small>mdi-grid</v-icon>
        </v-btn>
      </template>
      <v-btn
        v-if="isAuthenticated"
        @click="$router.push({ name: 'Consultations' })"
        class="accent"
      >
        <span class="ml-2">استشارات</span>
        <v-icon small>mdi-chat</v-icon>
      </v-btn>
      <template v-if="!isAuthenticated">
        <v-btn @click="loginDialog = true" class="mr-1" text>
          <span>تسجيل دخول</span>
        </v-btn>
        <v-btn @click="registerDialog = true" class="warning mr-1">
          <span>تسجيل جديد</span>
        </v-btn>
      </template>
      <template v-else>
        <v-btn @click="logout" class="accent mr-1">
          <span>تسجيل الخروج</span>
        </v-btn>
      </template>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
    <login :dialog="loginDialog" @close="loginDialog = false"></login>
    <register
      :dialog="registerDialog"
      @close="registerDialog = false"
    ></register>
    <vue-snotify />
  </v-app>
</template>

<script>
import Login from "./components/Auth/Login";
import { mapGetters } from "vuex";
import AuthAPI from "./api/AuthAPI";
import Register from "./components/Auth/Register";

export default {
  name: "App",

  components: { Register, Login },

  data: () => ({
    loginDialog: false,
    registerDialog: false
  }),
  computed: {
    ...mapGetters(["isAuthenticated", "userName", "isAdmin"])
  },
  methods: {
    logout() {
      AuthAPI.logout()
        .then(() => {
          localStorage.removeItem("accessToken");
          AuthAPI.setAuthorizationHeader("");
          this.$store.commit("user", {});
          this.$router.push("/");
        })
        .catch(error => {
          this.$snotify.error(error.message);
        });
    }
  }
};
</script>
