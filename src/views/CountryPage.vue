<template>
  <div>
    <div class="container new-container">  
      <router-link class="back-router" to="/"><button class="back-btn">Back</button></router-link>

        <div class="inside-main">
          <img class="main-img" :src="country.flag" alt="germany-image" width="560" height="401">            <div class="aside">  
          <div class="left-side">
            <h2 class="main-title">{{ country.name}}</h2>
            <p class="left-side-text">Native Name:<span> {{ country.nativeName}}</span></p>
            <p class="left-side-text">Population::<span> {{ country.population}}</span></p> 
            <p class="left-side-text">Region:<span> {{ country.region}}</span></p>
            <p class="left-side-text">Sub Region:<span>{{ country.subregion}}</span></p>  
            <p class="left-side-text">Capital:<span> {{ country.capital}}</span></p> 
            <div class="add-countries">
                <p class="add-countries-text">Border Countries:</p>
                <a class="add-countries-link" v-for="borders in country.borders" :key="borders">{{borders}}</a>
            </div>
          </div>
          <div class="right-side">
              <p class="right-side-text">Top Level Domain:<span v-for="item in country.topLevelDomain" :key="item">{{item}}</span></p> 
              <p class="right-side-text">Currencies:<span v-for="item in country.currencies" :key="item.name">{{item.name}}</span></p>
              <p class="right-side-text">Languages:<span v-for="item in country.languages" :key="item.name">{{item.name}}</span></p> 
          </div>  
                </div>     
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    props: ['name'],
    created () {
      this.$store.dispatch('fetchNameCountry', this.name)
    },
    computed: {
      ...mapState(['country'])
    }
  }
</script>

<style scoped>
.new-container{
  padding-top: 40px;
}

.back-router{
  text-decoration: none;
}

.back-btn{
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  font-family: "Nunito Sans", "Arial", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #111517;
  border: none;
  background: transparent;
  cursor: pointer;
}

.back-btn::before {
  content: "";
  width: 14px;
  height: 14px;
  margin-right: 10px;
  background-image: url("../assets/back.svg");
  background-size: contain;
  background-repeat: no-repeat;
}

.inside-main{
    display: flex;
    margin-bottom: 300px;
    padding-top: 40px;
}
.main-img{
    border-radius: 10px;
    margin-right: 120px;
}
.aside{
    display: flex;
    align-items: center;
    width: 598px;
}
.main-title{
    margin: 0;
    margin-bottom: 23px;
    font-weight: 800;
    font-size: 32px;
    line-height: 44px;
   
}
.left-side{
    max-width: 300px;
}
.left-side-text{
    margin: 0;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
   
}
span{
    margin-left: 5px;
    font-weight: 300;
    font-size: 16px;
    line-height: 32px;
}
.add-countries{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 550px;
    margin-top: 68px;
    white-space: nowrap;
}
.add-countries-text{
    margin: 0;
    margin-right: 16px;
    padding: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
}
.add-countries-link{
    text-decoration: none;
    padding: 5px 27px;
    margin: 0;
    margin-left: 10px;
    margin-bottom: 10px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
    border-radius: 2px;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    color: var(--text-color);
}
.right-side{
    margin: 0;
    margin-top: -120px;
    padding: 0;
    max-width: 300px;
}
.right-side-text{
    margin: 0;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
}
</style>