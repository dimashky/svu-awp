<template>
  <div v-if="isAuthenticated">
    <div>
      <v-dialog v-model="dialog" max-width="500" @click:outside="close">
        <v-card>
          <v-card-title class="headline">استشارة طبية</v-card-title>

          <v-form ref="form" v-model="valid">
            <v-card-text>
              <v-textarea
                :readonly="isAdmin"
                v-model="question"
                :counter="300"
                :rules="questionRules"
                label="نص الاستشارة"
                required
              ></v-textarea>

              <v-textarea
                v-if="isAdmin || answer"
                :readonly="!isAdmin"
                v-model="answer"
                :counter="300"
                :rules="answerRules"
                label="الجواب"
              ></v-textarea>
            </v-card-text>

            <v-card-actions v-if="!id || isAdmin">
              <v-spacer></v-spacer>
              <v-btn color="primary" class="mr-4" @click="close" text>
                إغلاق
              </v-btn>
              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                @click="submit"
                :loading="loading"
              >
                إرسال
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ConsultationsAPI from "../../api/ConsultationsAPI";

export default {
  name: "ConsultationForm",
  props: ["dialog", "id"],
  computed: {
    ...mapGetters(["isAuthenticated", "isAdmin"])
  },
  data() {
    return {
      loading: false,
      valid: true,
      question: "",
      answer: "",
      questionRules: [
        v => !!v || "نص الاستشارة ضرورية",
        v =>
          (v && v.length >= 10) ||
          "محتوى الاستشارة يجب ان يحوي على 10 محارف او أكثر.",
        v =>
          (v && v.length <= 300) ||
          "محتوى الاستشارة يجب ان يحوي على 300 محرف او اقل."
      ],
      answerRules: [
        v => !!v || "رد الاستشارة ضروري",
        v =>
          (v && v.length >= 10) ||
          "محتوى الرد يجب ان يحوي على 10 محارف او أكثر.",
        v =>
          (v && v.length <= 300) ||
          "محتوى الرد يجب ان يحوي على 300 محرف أو اقل."
      ]
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.question = "";
      this.answer = "";
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    close() {
      this.reset();
      this.$emit("close");
    },
    setForm(question, answer) {
      this.question = question;
      this.answer = answer;
    },
    submit() {
      const { question, answer } = this;
      const request = { question, answer };
      this.loading = true;
      if (!this.id) {
        ConsultationsAPI.create(request)
          .then(() => {
            this.$refs.form.reset();
            this.$emit("submit");
          })
          .catch(err => this.$snotify.error(err.message))
          .finally(() => (this.loading = false));
      } else {
        ConsultationsAPI.update(this.id, answer)
          .then(() => {
            this.$refs.form.reset();
            this.$emit("submit");
          })
          .catch(err => this.$snotify.error(err.message))
          .finally(() => (this.loading = false));
      }
    }
  }
};
</script>

<style scoped></style>
