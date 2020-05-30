<template>
  <div class="mt-5">
    <v-container>
      <v-row>
        <div class="headline">الاستشارات الطبية</div>
        <v-spacer></v-spacer>
        <div>
          <v-btn @click="dialog = true">إضافة استشارة جديد</v-btn>
        </div>
      </v-row>
      <div class="mt-4">
        <consultations-table />
      </div>
      <consultation-form
        :dialog="dialog"
        @close="dialog = false"
      ></consultation-form>
    </v-container>
  </div>
</template>

<script>
import ConsultationsTable from "../components/Consultations/ConsultationsTable";
import ConsultationForm from "../components/Consultations/ConsultationForm";
export default {
  name: "Consultations",
  components: { ConsultationForm, ConsultationsTable },
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style scoped></style>
