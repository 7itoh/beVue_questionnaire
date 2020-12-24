<template>
  <section class="result_form">
    <form action="">
      <div>
        <div>
          {{ gender }}
        </div>
        {{ inptRadio1A }}
      </div>
      <div>
        <div>
          {{ birthday }}
        </div>
        {{ `${inptBirthYear} ${inptBirthMonth}月 ${inptBirthDay}日` }}
      </div>
      <div>
        <div>
          {{ lifeInsurance }}
        </div>
        {{ inptRadio2A }}
      </div>
      <div>
        <div>
          {{ inHospital }}
        </div>
        {{ inptRadio2B }}
      </div>
      <div>
        <div>
          {{ pastInHospital }}
        </div>
        {{ inptRadio2C }}
      </div>
      <div>
        <div>
          {{ consul }}
        </div>
        {{ inptTextArea }}
      </div>
    </form>
    <div>
      <BaseButton
        @click="toConsul"
        class="button is-primary"
        action="前へ戻る"
      />
      <BaseButton @click="sendForm" class="button is-primary" action="送信" />
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
  data() {
    return {
      gender: "-性別-",
      birthday: "-生年月日-",
      lifeInsurance: "-生命保険に加入していますか-",
      inHospital:
        "-現在、入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-",
      pastInHospital:
        "-過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか?-",
      consul: "-ご相談内容-",
    };
  },
  computed: {
    inptRadio1A() {
      return this.$store.state.radioValue1A;
    },
    inptRadio2A() {
      return this.$store.state.radioValue2A;
    },
    inptRadio2B() {
      return this.$store.state.radioValue2B;
    },
    inptRadio2C() {
      return this.$store.state.radioValue2C;
    },
    inptBirthYear() {
      return this.$store.state.calender.year;
    },
    inptBirthMonth() {
      return this.$store.state.calender.month;
    },
    inptBirthDay() {
      return this.$store.state.calender.day;
    },
    inptTextArea() {
      return this.$store.state.textAreaValue;
    },
  },
  methods: {
    toConsul() {
      this.$router.push("consul");
    },
    sendForm() {
      console.log("仮設Button");
    },
  },
};
</script>

<style scoped></style>
