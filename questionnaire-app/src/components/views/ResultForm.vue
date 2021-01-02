<template>
  <section class="result_form">
    <form action="">
      <div>
        <div>
          <p>-性別-</p>
        </div>
        {{ genderValue }}
      </div>
      <div>
        <div>
          <p>-生年月日-</p>
        </div>
        {{ `${inptBirthYear} ${inptBirthMonth}月 ${inptBirthDay}日` }}
      </div>
      <div>
        <div>
          <p>-生命保険に加入していますか-</p>
        </div>
        {{ lifeInsuranceValue }}
      </div>
      <div>
        <div>
          <p>
            -現在、入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-
          </p>
        </div>
        {{ inHospitalValue }}
      </div>
      <div>
        <div>
          <p>
            -過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか?-
          </p>
        </div>
        {{ pastInHospitalValue }}
      </div>
      <div>
        <div>
          <p>-ご相談内容-</p>
        </div>
        {{ inptConsulText }}
      </div>
    </form>
    <div>
      <BaseButton
        @click="toConsul"
        class="button is-primary"
        action="前へ戻る"
      />
      <BaseButton class="button is-primary" action="送信" />
    </div>
  </section>
</template>
<script>
import BaseButton from "../elements/BaseButton";

export default {
  name: "ResultForm",
  components: {
    BaseButton,
  },
  computed: {
    genderValue() {
      return this.$store.getters.genderValue;
    },
    lifeInsuranceValue() {
      return this.$store.getters.lifeInsuranceValue;
    },
    inHospitalValue() {
      return this.$store.getters.inHospitalValue;
    },
    pastInHospitalValue() {
      return this.$store.getters.pastInHospitalValue;
    },
    inptBirthYear() {
      return this.$store.getters.yearValue;
    },
    inptBirthMonth() {
      return this.$store.getters.monthValue;
    },
    inptBirthDay() {
      return this.$store.getters.dayValue;
    },
    inptConsulText() {
      return this.$store.getters.consulValue;
    },
  },
  methods: {
    toConsul() {
      this.$router.push("consul");
    },
  },
};
</script>

<style scoped></style>
