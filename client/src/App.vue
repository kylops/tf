<template>
  <div id="app">
    <div>
      <navbar></navbar>
      <main>
        <b-container fluid>
          <router-view></router-view>
        </b-container>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'App',
    components: {
        Navbar
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
