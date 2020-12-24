'use strict';

import { createStore } from 'vuex';

const state = {
    radioValue1A : '',
    calender : {
        year : '',
        month : '',
        day : '',
    },
    radioValue2A : '',
    radioValue2B : '',
    radioValue2C : '',
    textAreaValue : '',
};
const getters = {};
const mutations = {
    updateRadio1A(state, newRadio) { 
        state.radioValue1A = newRadio;
    },
    updateYear(state, newYear) { 
        state.calender.year = newYear;
    },
    updateMonth(state, newMonth) { 
        state.calender.month = newMonth;
    },
    updateDay(state, newDay) { 
        state.calender.day = newDay;
    },
    updateRadio2A(state, newRadio) { 
        state.radioValue2A = newRadio;
    },
    updateRadio2B(state, newRadio) { 
        state.radioValue2B = newRadio;
    },
    updateRadio2C(state, newRadio) { 
        state.radioValue2C = newRadio;
    },
    updateTextArea(state, newTextArea) { 
        state.textAreaValue = newTextArea;
    }
};
const actions = {
    updateTextArea({ commit }, newTextArea) { 
        commit('updateTextArea', newTextArea);
    },
    updateYear({ commit }, newYear) { 
        commit('updateYear', newYear);
    },
    updateMonth({ commit }, newMonth) { 
        commit('updateMonth', newMonth);
    },
    updateDay({ commit }, newDay) { 
        commit('updateDay', newDay);
    },
};

const store = createStore({
    state,
    getters,
    mutations,
    actions,
})

export default store;
