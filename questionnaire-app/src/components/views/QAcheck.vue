<template>
  <div class="qa_check">
    <form action="">
      <section class="qa_check2_1">
        <div>
          <h2>-生命保険に加入していますか-</h2>
          <input
            type="radio"
            id="life_insurance_yes"
            name="life_insurance"
            :value="yes"
            v-model="updateLifeInsuranceRadio"
          />
          <label for="life_insurance">はい</label>
          <input
            type="radio"
            id="life_insurance_no"
            name="life_insurance"
            :value="no"
            v-model="updateLifeInsuranceRadio"
          />
          <label for="life_insurance">いいえ</label>
        </div>
      </section>
      <section v-if="updateLifeInsuranceRadio">
        <div class="qa_check2_2">
          <h2>
            現在、入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
          </h2>
          <input
            type="radio"
            id="in_hospital_yes"
            name="in_hospital"
            :value="yes"
            v-model="updateInHospitalRadio"
          />
          <label for="in_hospital">はい</label>
          <input
            type="radio"
            id="in_hospital_no"
            name="in_hospital"
            :value="no"
            v-model="updateInHospitalRadio"
          />
          <label for="in_hospital">いいえ</label>
        </div>
      </section>
      <section v-if="updateInHospitalRadio">
        <div class="qa_check2_3">
          <h2>
            過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？
          </h2>
          <input
            type="radio"
            id="past_in_hospital_yes"
            name="past_in_hospital"
            :value="yes"
            v-model="updatePastInHospitalRadio"
          />
          <label for="past_in_hospital">はい</label>
          <input
            type="radio"
            id="past_in_hospital_no"
            name="past_in_hospital"
            :value="no"
            v-model="updatePastInHospitalRadio"
          />
          <label for="past_in_hospital">いいえ</label>
        </div>
      </section>
    </form>
    <div>
      <section>
        <BaseButton
          class="button is-primary"
          @click="toProfile"
          action="前へ戻る"
        />
        <BaseButton
          class="button is-primary"
          @click="toConsul"
          action="次へ進む"
        />
      </section>
    </div>
  </div>
</template>
<script>
import BaseButton from "../elements/BaseButton";

export default {
  name: "QAcheck",
  components: {
    BaseButton,
  },
  data() {
    return {
      yes: "はい",
      no: "いいえ",
    };
  },
  methods: {
    toProfile() {
      this.$router.push({ path: "/" });
    },
    toConsul() {
      this.$router.push({ path: "consul" });
    },
  },
  computed: {
    updateLifeInsuranceRadio: {
      get() {
        return this.$store.getters.lifeInsuranceValue;
      },
      set(value) {
        this.$store.commit("updateLifeInsuranceRadio", value);
      },
    },
    updateInHospitalRadio: {
      get() {
        return this.$store.getters.inHospitalValue;
      },
      set(value) {
        this.$store.commit("updateInHospitalRadio", value);
      },
    },
    updatePastInHospitalRadio: {
      get() {
        return this.$store.getters.pastInHospitalValue;
      },
      set(value) {
        this.$store.commit("updatePastInHospitalRadio", value);
      },
    },
  },
};
</script>
<style scoped></style>
