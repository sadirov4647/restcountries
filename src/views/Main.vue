<template>
  <div class="container header-container">
    <form class="search-form" action="google.com" method="POST">
      <label class="search-label"> 
          <img class="search-svg" src="../assets/search.svg" alt="search" width="18" height="18">    
          <input @input="updateValue" class="search-input" type="search" placeholder="Search for a country…">
      </label>
      <select class="country-select" @input="updateSelect">
        <option class="country-select-option" value="">Filter by Region</option>
        <option class="country-select-option" :value="countryName" v-for="countryName in CountryNames" :key="countryName">{{countryName}}</option>
      </select>
    </form>

    <div class="container main-container">
      <CountryCreate v-for="country in sortedCountries.slice(0, 12)" :key="country.name" :country="country"/>
    </div>
  </div>
</template>

<script>
import CountryCreate from '@/components/CountryCreate.vue'
import { mapState } from 'vuex';
  export default {
     components: {
      CountryCreate
    },
    data() {
      return {
        CountryNames: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
      }
    },
    created() {
      this.$store.dispatch('fetchCountries')
    },
    methods: {
      updateValue(event) {
        this.$store.dispatch('fetchSortCountry', event.target.value)
      },
      updateSelect(event) {
        this.$store.dispatch('fetchFilterCountry', event.target.value)
      }
    },
    computed: {
      ...mapState(['sortedCountries'])
    }
   
  }
</script>

<style scoped>
.header-container{
  padding-top: 45px;
  padding-bottom: 45px;
}

.main-container{
  padding: 0;
  padding-top: 48px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.search-form{
    display: flex;
    justify-content: space-between;
}
.search-label{
    display: flex;
    align-items: center;
    width: 480px;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
    padding: 15px ;
    border-radius: 5px;
    background: white;
}
.search-svg{
    margin-right: 24px;
    margin-left: 10px;
}
.search-input{
    outline: none;
    width: 450px;
    border: none;
    background:none;
    font-size: 14px;
    line-height: 20px;
    color: #848484;
}
.country-select{
    width: 200px;
    padding: 18px 24px;
    border: none;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
    font-size: 14px;
    line-height: 20px;
    color: #111517;
}

</style>