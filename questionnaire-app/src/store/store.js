'use strict';

import { createStore } from 'vuex';

const state = {
    genderValue : '',
    yearValue: '',
    monthValue: '',
    dayValue: '',
    lifeInsuranceValue : '',
    inHospitalValue : '',
    pastInHospitalValue : '',
    consulValue : '',
};
const getters = {
    genderValue: state => state.genderValue,
    lifeInsuranceValue: state => state.lifeInsuranceValue,
    inHospitalValue: state => state.inHospitalValue,
    pastInHospitalValue: state => state.pastInHospitalValue,
    yearValue: state => state.yearValue,
    monthValue: state => state.monthValue,
    dayValue: state => state.dayValue,
    consulValue: state => state.consulValue
};
const mutations = {
    updateGenderRadio(state, newRadio) { 
        state.genderValue = newRadio;
    },
    updateYear(state, newYear) { 
        state.yearValue = newYear;
    },
    updateMonth(state, newMonth) { 
        state.monthValue = newMonth;
    },
    updateDay(state, newDay) { 
        state.dayValue = newDay;
    },
    updateLifeInsuranceRadio(state, newRadio) { 
        state.lifeInsuranceValue = newRadio;
    },
    updateInHospitalRadio(state, newRadio) { 
        state.inHospitalValue = newRadio;
    },
    updatePastInHospitalRadio(state, newRadio) { 
        state.pastInHospitalValue = newRadio;
    },
    updateConsulText(state, newTextArea) { 
        state.consulValue = newTextArea;
    }
};
const actions = {
    updateConsulText({ commit }, newTextArea) { 
        commit('updateConsulText', newTextArea);
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
