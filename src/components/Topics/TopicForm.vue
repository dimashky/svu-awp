<template>
  <div>
    <div>
      <v-dialog v-model="dialog" max-width="590" @click:outside="close">
        <v-card>
          <v-card-title class="headline">موضوع طبي</v-card-title>

          <v-form ref="form" v-model="valid">
            <v-card-text>
              <v-text-field
                v-model="title"
                :counter="50"
                label="عنوان الموضوع"
                required
              >
              </v-text-field>
              <v-file-input
                :rules="fileRules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="الصورة الاساسية للموضوع"
                prepend-icon="mdi-camera"
                label="صورة الخلفية"
              ></v-file-input>
              <v-textarea
                v-model="content"
                :counter="1000"
                label="محتوى الموضوع"
                required
              ></v-textarea>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" class="mr-4" @click="close" text>
                اغلاق
              </v-btn>
              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                @click="submit"
              >
                ارسال
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
  name: "TopicForm",
  props: ["dialog"],
  data() {
    return {
      valid: true,
      title: "",
      content: "",
      fileRules: [
        value =>
          !value ||
          value.size < 2000000 ||
          "الصورة يجب ألا تتجاوز ال 2 ميغابايت"
      ]
    };
  },
  methods: {
    submit() {},
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped></style>
