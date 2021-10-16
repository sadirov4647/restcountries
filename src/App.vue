<template>
  <div id="app">
    <NavBar/>

    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Main from '@/views/Main.vue';

export default {
  components: {
    NavBar,
    Main
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;800&display=swap');

html{
  box-sizing: border-box;
}

body{
  margin: 0;
  padding: 0;
  font-family: "Nunito Sans", "Arial", sans-serif;
  font-weight: 600;
  color: #111517;
}

.container{
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
}

.body-dark-theme{
    background: #202C36;
    color: white;
}

</style>
