<template>
  <div id="app">
    <div id="nav" class="p-0">
      <navbar class="fixed-top"></navbar>
      <transition name="custom-classes-transition" enter-active-class="animate__animated animate__fadeIn">
      <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import navbar from "./components/NavBar";
export default {
  components: {
    navbar,
    
  }
}
</script>

<style>
#app {
  font-family: Mangal, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.view {
  margin-top: 7rem;
}
.res-width {
  margin-left: auto;
  margin-right: auto;
  
}
/* For Mobile */
@media only screen and (max-width: 600px) {
  .res-width {
    width: 90%;
  }
}
/* For Desktop */
@media only screen and (min-width: 600px) {
  .res-width {
    width: 60%;
  }
}
</style>