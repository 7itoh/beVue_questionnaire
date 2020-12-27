'use strict';
class YearDate {
    // 設定 年
    year = new Date().getFullYear();
    maxNumYear = 100;

    // 設定 月
    month = 1
    maxNumMonth = 11;

    // 設定 日
    day = 1;
    maxNumDay = 30;

    // 年号
    taishou = {
        nengo: '大正',
        maxYear: 1925,
        maxSpan: 15,
        init : 0,
        // 1926 15年間
    };
    showa = {
        nengo: '昭和',
        maxYear: 1988,
        maxSpan: 63,
        init : 0,
        // 1988 63年間
    };
    heisei = {
        nengo: '平成',
        maxYear: 2019,
        maxSpan: 31,
        init : 0,
        // 2019 31年間
    };

    reiwa = {
        nengo : '令和',
        maxSpan : this.year - 2018,
        init : 0,
        // start 2019 ~
    }

    constructor() { 
        this.yearList = [];
        this.monthList = [];
        this.dayList = [];
    }
    setYear() { 
        for (let i = 0; i < this.maxNumYear; i++) { 
            const resultYear = this.year - i;
            // 大正
            if (resultYear < this.taishou.maxYear) {
                const nengoNum = this.taishou.maxSpan - this.taishou.init
                const yearbox = `${resultYear}年 (${this.taishou.nengo}${nengoNum})`
                this.yearList.push(yearbox);
                this.taishou.init++;
            }
            // 昭和
            else if (resultYear < this.showa.maxYear) {
                const nengoNum = this.showa.maxSpan - this.showa.init
                const yearbox = `${resultYear}年 (${this.showa.nengo}${nengoNum})`
                this.yearList.push(yearbox);
                this.showa.init++;
            }
            // 平成
            else if (resultYear < this.heisei.maxYear) {
                const nengoNum = this.heisei.maxSpan - this.heisei.init
                const yearbox = `${resultYear}年 (${this.heisei.nengo}${nengoNum})`
                this.yearList.push(yearbox);
                this.heisei.init++;
            }
            // 令和
            else {
                const nengoNum = this.reiwa.maxSpan - this.reiwa.init
                const yearbox = `${resultYear}年 (${this.reiwa.nengo}${nengoNum})`
                this.yearList.push(yearbox);
                this.reiwa.init++;
            }
        }    
        return this.yearList;    
    }
    setMonth() { 
        for (let j = 0; j <= this.maxNumMonth; j++) { 
            this.monthList.push(`${this.month}`);
            this.month++
        }
        return this.monthList;
    }
    setDay() {
        for (let k = 0; k <= this.maxNumDay; k++) { 
            this.dayList.push(`${this.day}`);
            this.day++;
        }
        return this.dayList;
    }
}

const yearDate = new YearDate();
export default yearDate;
