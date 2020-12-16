<template>
  <div id="sample">
    <!-- 年の選択 -->
    <select class="select" v-model="year_selected">
      <option v-for="(year, index) in year_list" :key="index" :value="year">
        {{ year }}
      </option>
    </select>
    <label for="year_selected">年</label>
    <!-- 月の選択 -->
    <select class="select" v-model="month_selected">
      <option v-for="month in month_list" :key="month" :value="month">
        {{ month }}
      </option>
    </select>
    <label for="month_selected">月</label>
    <!-- 日の選択 -->
    <select class="select" v-model="day_selected">
      <option v-for="day in day_list" :key="day" :value="day">
        {{ day }}
      </option>
    </select>
    <label for="day_selected">日</label>
  </div>
</template>
<script>
export default {
  name: "BirthCalender",
  data() {
    return {
      year_selected: null,
      year_list: [],
      year_maxNum: 100,
      month_selected: null,
      month_list: [],
      month_maxNum: 12,
      day_selected: null,
      day_list: [],
      day_maxNum: 31,
    };
  },
  created() {
    // 年
    const year = new Date().getFullYear();
    for (let i = 0; i < this.year_maxNum; i++) {
      this.year_list.unshift(year - i);
    }
    this.year_selected = this.year_list[this.year_list.length * 0.6];

    // 月
    const month = 0;
    for (let j = 1; j <= this.month_maxNum; j++) {
      this.month_list.push(month + j);
    }
    this.month_selected = this.month_list[0];

    // 日
    const day = 0;
    for (let k = 1; k <= this.day_maxNum; k++) {
      this.day_list.push(day + k);
    }
    this.day_selected = this.day_list[0];
  },
};
</script>
<style scoped></style>
