<template>
  <v-container>
    <v-overlay :value="overlay" opacity=".8">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-row>
      <v-col v-for="item in items" :key="item.id" sm="4" cols="6" md="3">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="$url(item.cover)"
          >
            <v-card-title v-html="item.title"></v-card-title>
          </v-img>
          <v-card-text
            class="text--primary"
            v-html="item.content.substring(0, 120)"
          >
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="open(item)" text
              >مشاهدة كامل المقالة</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" fullscreen>
      <v-card class="mx-auto" max-width="400">
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ selectedItem.title }}</v-toolbar-title>
        </v-toolbar>
        <v-img
          class="white--text align-end"
          height="300px"
          :src="$url(selectedItem.cover)"
        >
          <v-card-title v-html="selectedItem.title"></v-card-title>
        </v-img>
        <v-card-text class="p-2 text--primary">
          <div class="my-2">
            <div>عدد المشاهدات: {{ selectedItem.views }}</div>
            <div>
              تاريخ الكتابة: {{ $moment(selectedItem.createdAt).format("LLL") }}
            </div>
          </div>
          <div v-html="selectedItem.content"></div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import TopicsAPI from "../../api/TopicsAPI";

export default {
  name: "Topics",
  data() {
    return {
      overlay: false,
      items: [],
      selectedItem: {},
      dialog: false
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.overlay = true;
      TopicsAPI.fetch()
        .then(items => (this.items = items))
        .catch(err => this.$snotify.error(err.message))
        .finally(() => (this.overlay = false));
    },
    open(item) {
      this.selectedItem = item;
      this.dialog = true;
      TopicsAPI.show(item.id).then(item => (this.selectedItem = item));
    },
    close() {
      this.selectedItem = {};
      this.dialog = false;
    }
  }
};
</script>

<style scoped></style>
