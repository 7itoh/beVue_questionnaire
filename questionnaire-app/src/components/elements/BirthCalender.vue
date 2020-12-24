<template>
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
</template>
<script>
import yearDate from "../modules/definition";

export default {
  name: "BirthCalender",
  data() {
    return {
      yearList: [],
      yearSelected: null,
      monthList: [],
      monthSelected: null,
      dayList: [],
      daySelected: null,
    };
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
