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
        <topics-table ref="table" @update="openEditDialog"></topics-table>
      </div>
      <topic-form
        ref="dialog"
        :id="itemId"
        :dialog="dialog"
        @close="handleClose"
        @submit="handleSubmit"
      ></topic-form>
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
      dialog: false,
      itemId: null
    };
  },
  methods: {
    openEditDialog(item) {
      this.dialog = true;
      this.itemId = item.id;
      this.$refs.dialog.setForm(item.title, item.content);
    },
    handleClose() {
      this.dialog = false;
      this.itemId = null;
    },
    handleSubmit() {
      this.$refs.table.fetch();
    }
  }
};
</script>

<style scoped></style>
