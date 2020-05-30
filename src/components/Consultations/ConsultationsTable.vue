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
  name: "ConsultationsTable",
  data() {
    return {
      items: [],
      headers: [
        { text: "#", value: "Id" },
        { text: "السؤال", value: "Question" },
        { text: "الرد", value: "Answer" },
        { text: "المستخدم", value: "UserName" },
        { text: "تاريخ السؤال", value: "CreatedAt" },
        { text: "تاريخ الاجابة", value: "AnswerAt" },
        { text: "الاجراءات", sortable: false }
      ]
    };
  }
};
</script>

<style scoped></style>
