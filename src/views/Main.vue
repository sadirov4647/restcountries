<template>
  <div class="container main-container">
    <form class="search-form" action="google.com" method="POST">
      <label class="search-label"> 
          <img class="search-svg" src="../assets/search.svg" alt="search" width="18" height="18">    
          <input class="search-input" type="search" placeholder="Search for a country…">
      </label>
      <select class="country-select">
        <option class="country-select-option" value="" v-for="countryName in CountryNames" :key="countryName">{{countryName}}</option>
      </select>
    </form>

    <CountryCreate/>
  </div>
</template>

<script>
import CountryCreate from '@/components/CountryCreate.vue';
  export default {
     components: {
      CountryCreate
    },
    data() {
      return {
        CountryNames: ['Filter by Region', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']
      }
    },
   
  }
</script>

<style scoped>
.main-container{
  padding-top: 45px;
  padding-bottom: 45px;
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