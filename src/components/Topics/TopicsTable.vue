<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1"
      :loading="loading"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small color="danger" @click="deleteItem(item.id)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import TopicsAPI from "../../api/TopicsAPI";

export default {
  name: "TopicsTable",
  data() {
    return {
      loading: false,
      items: [],
      headers: [
        { text: "#", value: "id" },
        { text: "العنوان", value: "title" },
        { text: "المشاهدات", value: "views" },
        { text: "تاريخ التحرير", value: "createdAt" },
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
      TopicsAPI.fetch()
        .then(topics => (this.items = topics))
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
      TopicsAPI.delete(itemId)
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
