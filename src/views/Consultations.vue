<template>
  <div class="mt-5">
    <v-container>
      <v-row>
        <div class="headline">الاستشارات الطبية</div>
        <v-spacer></v-spacer>
        <div>
          <v-btn v-if="!isAdmin" @click="dialog = true"
            >إضافة استشارة جديد</v-btn
          >
        </div>
      </v-row>
      <div class="mt-4">
        <consultations-table ref="table" @update="openEditDialog" />
      </div>
      <consultation-form
        ref="form"
        :id="itemId"
        :dialog="dialog"
        @close="handleClose"
        @submit="handleSubmit"
      ></consultation-form>
    </v-container>
  </div>
</template>

<script>
import ConsultationsTable from "../components/Consultations/ConsultationsTable";
import ConsultationForm from "../components/Consultations/ConsultationForm";
import { mapGetters } from "vuex";
export default {
  name: "Consultations",
  components: { ConsultationForm, ConsultationsTable },
  computed: {
    ...mapGetters(["isAuthenticated", "isAdmin"])
  },
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
      this.$refs.form.setForm(item.question, item.answer);
    },
    handleClose() {
      this.dialog = false;
      this.itemId = null;
    },
    handleSubmit() {
      this.dialog = false;
      this.itemId = null;
      this.$refs.table.fetch();
    }
  }
};
</script>

<style scoped></style>
