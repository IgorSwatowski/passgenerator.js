<template>
  <div id="app">
    <Navbar/>
    <Generator/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Generator from './components/Generator.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Generator
  }
}
</script>

<style lang="scss" scoped>

</style>
