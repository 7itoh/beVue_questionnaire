<template>
  <div class="profile">
    <form action="">
      <section>
        <div>
          <input
            type="radio"
            name="gender"
            :value="male"
            v-model="updateGenderRadio"
          />
          <label for="gender">男性</label>
          <input
            type="radio"
            name="gender"
            :value="female"
            v-model="updateGenderRadio"
          />
          <label for="gender">女性</label>
        </div>
      </section>
      <!-- <BirthCalender /> -->
      <div class="birth_calender">
        <!-- 年の選択 -->
        <select
          class="select"
          :value="yearSelected"
          @change="updateCalenderYear"
        >
          <option
            v-for="(year, indexYear) in yearList"
            :key="indexYear"
            :value="year"
          >
            {{ year }}
          </option>
        </select>
        <label for="yearSelected">年</label>
        <!-- 月の選択 -->
        <select
          class="select"
          :value="monthSelected"
          @change="updateCalenderMonth"
        >
          <option
            v-for="(month, indexMonth) in monthList"
            :key="indexMonth"
            :value="month"
          >
            {{ month }}
          </option>
        </select>
        <label for="monthSelected">月</label>
        <!-- 日の選択 -->
        <select class="select" :value="daySelected" @change="updateCalenderDay">
          <option
            v-for="(day, indexDay) in dayList"
            :key="indexDay"
            :value="day"
          >
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
import BaseButton from "../elements/BaseButton";
import yearDate from "../modules/definition";

export default {
  name: "Profile",
  components: {
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
    updateGenderRadio: {
      get() {
        return this.$store.getters.genderValue;
      },
      set(value) {
        this.$store.commit("updateGenderRadio", value);
      },
    },
  },
  methods: {
    toQAcheck() {
      this.$router.push({ path: "qacheck" });
    },
    updateCalenderYear(e) {
      this.$store.dispatch("updateYear", e.target.value);
    },
    updateCalenderMonth(e) {
      this.$store.dispatch("updateMonth", e.target.value);
    },
    updateCalenderDay(e) {
      this.$store.commit("updateDay", e.target.value);
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
