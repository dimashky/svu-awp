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
                v-model="cover"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="الصورة الاساسية للموضوع"
                prepend-icon="mdi-camera"
                label="صورة الخلفية"
              ></v-file-input>
              <VueTrix v-model="content" placeholder="محتوى الموضوع" />
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
                :loading="loading"
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
import TopicsAPI from "../../api/TopicsAPI";
import VueTrix from "vue-trix";

export default {
  name: "TopicForm",
  props: ["dialog", "id"],
  components: {
    VueTrix
  },
  data() {
    return {
      loading: false,
      valid: true,
      title: "",
      content: "",
      cover: null,
      fileRules: [
        value =>
          !value ||
          value.size < 2000000 ||
          "الصورة يجب ألا تتجاوز ال 2 ميغابايت"
      ]
    };
  },
  methods: {
    submit() {
      this.loading = true;
      const { cover, title, content } = this;
      let request = new FormData();
      if (cover) {
        request.append("cover", cover, cover.name);
      }
      request.append("title", title);
      request.append("content", content);
      if (this.id) {
        TopicsAPI.update(this.id, request)
          .then(() => this.closeAfterSubmit())
          .catch(err => this.$snotify.error(err.message))
          .finally(() => (this.loading = false));
      } else {
        TopicsAPI.create(request)
          .then(() => this.closeAfterSubmit())
          .catch(err => this.$snotify.error(err.message))
          .finally(() => (this.loading = false));
      }
    },
    closeAfterSubmit() {
      let msg = "تم الإضافة بنجاح";
      if (this.id) msg = "تم التعديل بنجاح";
      this.$snotify.success(msg);
      this.$emit("close");
      this.$emit("submit");
    },
    close() {
      this.$emit("close");
    },
    setForm(title, content) {
      this.title = title;
      this.content = content;
      this.cover = null;
    }
  }
};
</script>

<style scoped></style>
