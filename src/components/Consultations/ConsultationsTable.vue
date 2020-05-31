<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :loading="loading"
      :sort-by="['AnswerAt', 'CreatedAt']"
      :sort-desc="[true, true]"
      multi-sort
      :items-per-page="20"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn
          v-if="isAdmin"
          color="success"
          class="mr-2"
          @click="editItem(item)"
        >
          رد
        </v-btn>
        <v-btn v-else color="success" class="mr-2" @click="editItem(item)">
          مشاهدة
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import ConsultationsAPI from "../../api/ConsultationsAPI";
import { mapGetters } from "vuex";

export default {
  name: "ConsultationsTable",
  computed: {
    ...mapGetters(["isAuthenticated", "isAdmin"])
  },
  data() {
    return {
      loading: false,
      items: [],
      headers: [
        { text: "#", value: "Id" },
        { text: "السؤال", value: "question" },
        { text: "الرد", value: "answer" },
        { text: "المستخدم", value: "user_id" },
        { text: "تاريخ السؤال", value: "createdAt" },
        { text: "تاريخ الاجابة", value: "answerAt" },
        { text: "الاجراءات", value: "actions", sortable: false }
      ]
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.loading = true;
      ConsultationsAPI.fetch()
        .then(res => (this.items = res))
        .catch(err => this.$snotify.error(err.message))
        .finally(() => (this.loading = false));
    },
    editItem(item) {
      this.$emit("update", item);
    },
    deleteItem(itemId) {
      if (!confirm("هل تريد الحذف؟")) {
        return;
      }
      ConsultationsAPI.delete(itemId)
        .then(() => {
          this.fetch();
          this.$snotify.success("تم الحذف بنجاح");
        })
        .catch(err => this.$snotify.error(err.message))
        .finally(() => (this.loading = false));
    }
  }
};
</script>

<style scoped></style>
