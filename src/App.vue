<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center" @click="$router.push('/')">
        <v-icon>mdi-heart-outline</v-icon>
        <span class="mr-2 headline">طبيبي</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="$router.push({ name: 'Consultations' })" class="accent">
        <span class="ml-2">استشارات</span>
        <v-icon small>mdi-chat</v-icon>
      </v-btn>
      <v-btn @click="loginDialog = true" class="accent mr-1">
        <span>تسجيل دخول</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
    <login :dialog="loginDialog"></login>
  </v-app>
</template>

<script>
import Login from "./components/Auth/Login";
export default {
  name: "App",

  components: { Login },

  data: () => ({
    loginDialog: false
  })
};
</script>
