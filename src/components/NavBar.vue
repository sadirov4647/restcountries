<template>
  <div class="site-nav">
    <div class="container nav-container">
      <router-link to="/" class="site-logo">Where in the world?</router-link>
      <button class="toggle-btn">Dark Mode</button>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.site-nav{
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
}

.nav-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 25px;
}

.site-logo{
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  text-decoration: none;
  color: #111517;
}

.toggle-btn{
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}

.toggle-btn::before{
  content: "";
  width: 15px;
  height: 15px;
  margin-right: 10px;
  background: url("../assets/light-moon.svg") no-repeat;
  background-size: contain;
}

</style>