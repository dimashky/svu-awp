<template>
  <div>
    <div>
      <v-dialog v-model="dialog" max-width="500" @click:outside="close">
        <v-card>
          <v-card-title class="headline">استشارة طبية</v-card-title>

          <v-form ref="form" v-model="valid">
            <v-card-text>
              <v-textarea
                v-model="question"
                :counter="10000"
                :rules="questionRules"
                label="نص الاستشارة"
                required
              ></v-textarea>

              <v-textarea
                v-model="answer"
                :counter="10000"
                :rules="answerRules"
                label="الجواب"
              ></v-textarea>
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
export default {
  name: "ConsultationForm",
  props: ["dialog", "question", "answer"],
  data() {
    return {
      valid: true,
      questionRules: [
        v => !!v || "نص الاستشارة ضرورية",
        v =>
          (v && v.length >= 10) ||
          "محتوى الاستشارة يجب ان يحوي على 10 محارف او أكثر."
      ],
      answerRules: [
        v => !!v || "رد الاستشارة ضروري",
        v =>
          (v && v.length >= 10) ||
          "محتوى الرد يجب ان يحوي على 10 محارف او أكثر."
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
    close() {
      this.reset();
      this.$emit("close");
    },
    submit() {
      // TODO
    }
  }
};
</script>

<style scoped></style>
