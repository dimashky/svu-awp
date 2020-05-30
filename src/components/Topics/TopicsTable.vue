<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "TopicsTable",
  data() {
    return {
      items: [],
      headers: [
        { text: "#", value: "Id" },
        { text: "العنوان", value: "Title" },
        { text: "المشاهدات", value: "Views" },
        { text: "تاريخ التحرير", value: "CreatedAt" },
        { text: "الاجراءات", sortable: false }
      ]
    };
  }
};
</script>

<style scoped></style>
