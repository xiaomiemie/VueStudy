<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <hello></hello> -->
    <p>{{count}}</p>
    <!-- <p>{{odd}}</p> -->
  </div>
</template>

<script>
import Hello from './components/Hello'
import store from './store'
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'app',
  store,
  computed: {
    ...mapState(['count']),
    // ...mapGetters(['odd'])
  },
  components: {
    Hello
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
  margin-top: 60px;
}
</style>
