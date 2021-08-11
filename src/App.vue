<template>
  <!-- <img alt="Vue logo" :src="vueImage"> -->
  <!-- <Counter :start="startCounter"></Counter> -->
  <Indecision></Indecision>
</template>

<script>
// import Counter from './components/Counter.vue'
import Counter from '@/components/Counter.vue'
import Indecision from '@/components/Indesicion.vue'

export default {
  name: 'App',
  components: {
    Counter,
    Indecision
  },
  data() {
    return {
      startCounter: 1,
      vueImage: require('./assets/logo.png')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
