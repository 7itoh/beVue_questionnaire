'use strict';

class YearDate {
  year = new Date().getFullYear();
  month = 1;
  day = 1;
  yearMaxNum = 100;
  monthMaxNum = 11;
  dayMaxNum = 30;

  constructor () {
    this.yearList = [];
    this.monthList = [];
    this.dayList = [];
  }
  // 年
  setYear() {
    this.year = new Date().getFullYear();
    for (let i = 0; i < this.yearMaxNum; i++) {
      this.yearList.unshift(this.year - i);
    }
    return this.yearList;
  }
  // 月
  setMonth() {
    for(let j = 0; j <= this.monthMaxNum; j++) {
      this.monthList.push(this.month + j);
    }
    return this.monthList;
  }
  // 日
  setDay() {
    for(let k = 0; k <= this.dayMaxNum; k++) {
      this.dayList.push(this.day + k);
    }
    return this.dayList;
  }
}

const yearDate = new YearDate();
export default yearDate;
