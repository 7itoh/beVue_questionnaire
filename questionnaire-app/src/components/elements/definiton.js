'use strict';

export class YearDate {
  yearMaxNum = 100;
  monthMaxNum = 11;
  dayMaxNum = 30;

  constructor () {
    this.year = new Date().getFullYear();;
    this.month = 0;
    this.day = 0;
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
    // console.log(this.yearList);
    return this.yearList;
  }
  // 月
  setMonth() {
    for(let j = 0; j <= this.monthMaxNum; j++) {
      this.monthList.push(this.month + j);
    }
    // console.log(this.monthList);
    return this.monthList;
  }
  // 日
  setDay() {
    for(let k = 0; k <= this.dayMaxNum; k++) {
      this.dayList.push(this.day + k);
    }
    // console.log(this.dayList);
    return this.dayList;
  }
}