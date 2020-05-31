<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :loading="loading"
      multi-sort
      :items-per-page="20"
      class="elevation-1"
    >
      <template v-slot:item.answeredAt="{ item }">
        {{ item.answeredAt ? $moment(item.answeredAt).format("L") : "" }}
      </template>
      <template v-slot:item.createdAt="{ item }">
        {{ $moment(item.createdAt).format("L") }}
      </template>
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
        { text: "#", value: "id", sortable: false },
        { text: "السؤال", value: "question", sortable: false },
        { text: "الرد", value: "answer", sortable: false },
        { text: "تاريخ السؤال", value: "createdAt", sortable: false },
        { text: "تاريخ الاجابة", value: "answeredAt", sortable: false },
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
