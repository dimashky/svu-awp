<template>
  <div>
    <div>
      <v-dialog v-model="dialog" max-width="290" @click:outside="close">
        <v-card>
          <v-card-title class="headline">تسجيل الدخول</v-card-title>

          <v-form ref="form" v-model="valid">
            <v-card-text>
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="اسم المستخدم"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                type="password"
                label="كلمة السر"
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
                @click="submit"
              >
                تسجيل دخول
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: ["dialog"],
  data() {
    return {
      valid: true,
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
    submit() {
      this.$refs.form.validate();
      // TODO
    },
    close() {
      this.$refs.form.reset();
      this.$emit("close");
    }
  }
};
</script>

<style scoped></style>
