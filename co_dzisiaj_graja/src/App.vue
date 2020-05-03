<template>
  <div id="app">
    <Navbar/>
    <img src="./assets/logo.jpg" alt="logo" class="center"  v-on:click="change">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  },
  methods:{
    change(){
             this.$router.push('/');
    }
  }
}
</script>
