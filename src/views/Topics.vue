<template>
  <div class="my-4">
    <v-container>
      <v-row>
        <div class="headline">المواضيع الطبية</div>
        <v-spacer />
        <div>
          <v-btn @click="dialog = true">إضافة موضوع جديد</v-btn>
        </div>
      </v-row>
      <div class="mt-4">
        <topics-table></topics-table>
      </div>
      <topic-form :dialog="dialog" @close="dialog = false"></topic-form>
    </v-container>
  </div>
</template>

<script>
import TopicsTable from "../components/Topics/TopicsTable";
import TopicForm from "../components/Topics/TopicForm";
export default {
  name: "Topics",
  components: { TopicForm, TopicsTable },
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style scoped></style>
