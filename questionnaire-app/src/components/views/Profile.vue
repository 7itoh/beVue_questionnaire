<template>
  <div class="profile">
    <form action="">
      <section>
        <div>
          <input
            type="radio"
            name="gender"
            :value="male"
            v-model="updateRadio1"
          />
          <label for="gender">男性</label>
          <input
            type="radio"
            name="gender"
            :value="female"
            v-model="updateRadio1"
          />
          <label for="gender">女性</label>
        </div>
      </section>
      <!-- <BirthCalender /> -->
      <div class="birth_calender">
        <!-- 年の選択 -->
        <select class="select" v-model="yearSelected">
          <option v-for="(year, index) in yearList" :key="index" :value="year">
            {{ year }}
          </option>
        </select>
        <label for="yearSelected">年</label>
        <!-- 月の選択 -->
        <select class="select" v-model="monthSelected">
          <option v-for="month in monthList" :key="month" :value="month">
            {{ month }}
          </option>
        </select>
        <label for="monthSelected">月</label>
        <!-- 日の選択 -->
        <select class="select" v-model="daySelected">
          <option v-for="day in dayList" :key="day" :value="day">
            {{ day }}
          </option>
        </select>
        <label for="daySelected">日</label>
      </div>
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
// import BirthCalender from "../elements/BirthCalender";
import BaseButton from "../elements/BaseButton";
import yearDate from "../modules/definition";

export default {
  name: "Profile",
  components: {
    // BirthCalender,
    BaseButton,
  },
  data() {
    return {
      male: "男性",
      female: "女性",
      yearList: [],
      yearSelected: null,
      monthList: [],
      monthSelected: null,
      dayList: [],
      daySelected: null,
    };
  },
  computed: {
    updateRadio1: {
      get() {
        return this.$store.state.radioValue1A;
      },
      set(value) {
        this.$store.commit("updateRadio1A", value);
      },
    },
  },
  methods: {
    toQAcheck() {
      this.$router.push({ path: "qacheck" });
      // ↓カスタムコンポーネントを利用した値の取得がまだできていません。
      this.$store.state.calender.year = this.yearSelected;
      this.$store.state.calender.month = this.monthSelected;
      this.$store.state.calender.day = this.daySelected;
    },
  },
  created() {
    // 年
    this.yearList = yearDate.setYear();
    this.yearSelected = this.yearList[this.yearList.length * 0.6];

    // 月
    this.monthList = yearDate.setMonth();
    this.monthSelected = this.monthList[0];

    // 日
    this.dayList = yearDate.setDay();
    this.daySelected = this.dayList[0];
  },
};
</script>
<style scoped></style>
