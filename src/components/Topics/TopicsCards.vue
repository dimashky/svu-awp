<template>
  <v-container>
    <v-row>
      <v-col sm="4" cols="6" md="3">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Top 10 Australian beache</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
            <div>Whitsunday Island, Whitsunday Islands</div>
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
export default {
  name: "Topics"
};
</script>

<style scoped></style>
