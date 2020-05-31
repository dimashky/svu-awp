<template>
  <div>
    <div>
      <v-dialog v-model="dialog" max-width="290" @click:outside="close">
        <v-card>
          <v-card-title class="headline">تسجيل مستخدم جديد</v-card-title>

          <v-form ref="form" v-model="valid" @submit="submit">
            <v-card-text>
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="اسم المستخدم *"
                :loading="loading"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="الايميل"
                :loading="loading"
                type="email"
              ></v-text-field>
              <v-text-field
                v-model="phoneNumber"
                label="رقم الهاتف"
                :loading="loading"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                type="password"
                label="كلمة السر *"
                :loading="loading"
                required
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" class="mr-4" @click="close" text>
                إغلاق
              </v-btn>
              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                type="submit"
                :loading="loading"
              >
                انشاء
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import AuthAPI from "../../api/AuthAPI";

export default {
  name: "Register",
  props: ["dialog"],
  data() {
    return {
      valid: true,
      birthDate: "",
      email: "",
      phoneNumber: "",
      loading: false,
      name: "",
      nameRules: [
        v => !!v || "اسم المستخدم ضروري",
        v =>
          (v && v.length <= 10) ||
          "يجب على الأسم ألا يحتوي أكثر من 10 محارف على الأكثر"
      ],
      password: "",
      passwordRules: [
        v => !!v || "كلمة السر ضرورية",
        v =>
          (v && v.length >= 3) || "كلمة السر يجب أن يحتوى على 3 محارف او أكثر"
      ],
      emailRules: [
        v => !v || /.+@.+\..+/.test(v) || "يجب أن يكون البريد الالكتروني صالح"
      ]
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submit(e) {
      e.preventDefault();
      this.$refs.form.validate();
      if (!this.valid) return;
      this.loading = true;
      AuthAPI.register(
        this.username,
        this.password,
        this.email,
        this.phoneNumber
      )
        .then(user => {
          localStorage.setItem("accessToken", user.token);
          AuthAPI.setAuthorizationHeader(user.token);
          this.$store.commit("user", user);
          this.$emit("close");
          this.$snotify.success("تم التسجيل بنجاح");
        })
        .catch(err => this.$snotify.error(err.message))
        .finally(() => (this.loading = false));
    },
    close() {
      this.$refs.form.reset();
      this.$emit("close");
    }
  }
};
</script>

<style scoped></style>
