import Vue from 'vue'
import Vuex from 'vuex'
import CountryServices from '@/services/CountryServices.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countriesList: [],
    sortedCountries: [],
    countriesTotal: 0,
    country: {},
    filtered: false,
    seached: false
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.countriesList = countries
      state.sortedCountries = countries
    },
    SEARCH_COUNTRIES(state, countries) {
      state.sortedCountries = countries
    },
    SET_COUNTRIES_TOTAL(state, countriesTotal) {
      state.countriesTotal = countriesTotal
    },
    SET_COUNTRY(state, countryName) {
      state.country = countryName
    }
  },
  actions: {
    fetchCountries({commit}) {
      return CountryServices.getCountries()
        .then(response => {
          console.log(response.data);
          commit('SET_COUNTRIES', response.data)
        })
    },
    fetchSortCountry({ commit, state, getters }, name) {
      let countries = getters.searchCountries(name)
      if(name === ''){
        commit('SET_COUNTRIES', state.countriesList)
      } else {
        commit('SEARCH_COUNTRIES', countries)
      }
    },
    fetchFilterCountry({ commit, state, getters}, region) {
      let countries = getters.filterByRegion(region)
      if(region === '') {
        commit('SET_COUNTRIES', state.countriesList)
      } else {
        commit('SEARCH_COUNTRIES', countries)
      }
    },
    fetchNameCountry({ commit }, name) {
      return CountryServices.getSearchName(name)
        .then(response => {
          console.log(response.data[0]);
          commit('SET_COUNTRY', response.data[0])
        })
    }
  },
  getters: {
    searchCountries: state => name => {
      let regex = new RegExp(`${name}`, 'i')
      return state.countriesList.filter(country => regex.test(country.name))
    },
    filterByRegion: state => region => {
      return state.countriesList.filter(country => country.region === region)
    }
  }
})
