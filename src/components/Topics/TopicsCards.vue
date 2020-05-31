<template>
  <v-container>
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
          <v-card-text class="text--primary" v-html="item.content">
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text>مشاهدة كامل المقالة</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TopicsAPI from "../../api/TopicsAPI";

export default {
  name: "Topics",
  data() {
    return {
      items: []
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      TopicsAPI.fetch()
        .then(items => (this.items = items))
        .catch(err => this.$snotify.error(err.message));
    }
  }
};
</script>

<style scoped></style>
