<template>
  <div>
    <v-container>
      <div class="text--primary headline">استعلام جديد</div>
      <v-form ref="form" v-model="valid" @submit="submit">
        <v-row>
          <v-col md="6" sm="12">
            <v-text-field type="number" placeholder="العمر" v-model="age" />
            <v-select
              v-model="chestPainType"
              placeholder="نوع ألم الصدر"
              :items="chestPainTypes"
              required
            />
            <v-text-field
              type="number"
              placeholder="ضغط الدم الانبساطي"
              v-model="restBloodPressure"
              required
            />
            <v-select
              v-model="bloodSugar"
              placeholder="مرض السكري؟"
              :items="[
                { value: 1, text: 'Yes' },
                { value: 0, text: 'No' }
              ]"
              required
            />
          </v-col>
          <v-col md="6" sm="12">
            <v-text-field
              type="number"
              placeholder="نبضات القلب العظمى"
              v-model="maxHeartRate"
              required
            />
            <v-select
              v-model="restElectro"
              placeholder="تخطيط القلب"
              required
              :items="[
                { value: 'normal', text: 'normal' },
                { value: 'left_vent_hyper', text: 'left_vent_hyper' },
                {
                  value: 'st_t_wave_abnormality',
                  text: 'st_t_wave_abnormality'
                }
              ]"
            />
            <v-select
              v-model="exerciceAngina"
              placeholder="ألم عند التمرين"
              required
              :items="[
                { value: 1, text: 'Yes' },
                { value: 0, text: 'No' }
              ]"
            />
          </v-col>
        </v-row>
        <div class="text-center">
          <v-btn :disabled="!valid" type="submit" color="primary">ارسال</v-btn>
        </div>
      </v-form>
      <div class="d-flex mt-2 justify-space-around">
        <div class="text--primary headline">النتيجة</div>
        <div class="text-center">
          <v-icon
            v-if="result !== null"
            :color="result === false ? 'error' : 'success'"
            x-large
            >mdi-heart</v-icon
          >
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SmartAssist",
  data() {
    return {
      valid: false,
      result: null,
      age: "",
      bloodSugar: "",
      maxHeartRate: "",
      restElectro: "",
      restBloodPressure: "",
      exerciceAngina: "",
      chestPainType: null,
      chestPainTypes: [
        { value: "asympt", text: "asympt" },
        { value: "atyp_angina", text: "atyp_angina" },
        { value: "non_anginal", text: "non_anginal" }
      ]
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.result = !!Math.round(Math.random());
    }
  }
};
</script>

<style scoped></style>
