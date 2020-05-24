<template>
  <div class="navigation">
   <nav class="navbar navbar-expand-lg navbar-dark">
     <a class="navbar-brand" href="#">Password Generator</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
     </button>
  <div class="collapse navbar-collapse mr-auto" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#">Home</a>
      <a class="nav-item nav-link" href="#">Info</a>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.js'
export default {
  name: 'Navbar',
  
}
</script>

<style lang="scss">

@import "./src/scss/Navbar/_navbar.scss";

</style>
