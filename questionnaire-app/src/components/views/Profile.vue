<template>
  <div class="profile">
    <form action="">
      <section>
        <div>
          <TwowayQARadio
            :question="gender"
            :answer1="male"
            :answer2="female"
            :val1="genderval1"
            :val2="genderval2"
            v-model="genders"
          />
        </div>
      </section>
      <BirthCalender />
    </form>
    <div>
      <BaseButton
        @click="toQAcheck"
        class="button is-primary"
        action="次へ進む"
      />
    </div>
  </div>
</template>
<script>
import TwowayQARadio from "../elements/TwowayQARadio";
import BirthCalender from "../elements/BirthCalender";
import BaseButton from "../elements/BaseButton";

export default {
  name: "Profile",
  components: {
    TwowayQARadio,
    BirthCalender,
    BaseButton,
  },
  data() {
    return {
      male: "男性",
      female: "女性",
      genderval1: "male",
      genderval2: "female",
      birthday: "-生年月日-",
      gender: "-性別-",
      genders: "",
      birthdate: {
        year: "",
        month: "",
        day: "",
      },
    };
  },
  methods: {
    toQAcheck() {
      this.$router.push({ path: "qacheck" });
      // ↓カスタムコンポーネントを利用した値の取得がまだできていません。
      console.log(this.genders);
      console.log(this.birth);
    },
  },
};
</script>
<style scoped></style>
