<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
    <Login/>
    <Signup/>
    <ScrollToTop/>
  </div>
</template>
<script>
import Header from "./views/layout/Header.vue"
import Footer from "./views/layout/Footer.vue"
import Login from "./views/layout/modal/Login.vue"
import Signup from "./views/layout/modal/Signup.vue"
import ScrollToTop from "./views/layout/ScrollToTop.vue"

export default {
    components: { Header, Footer, Login, Signup , ScrollToTop },
}
</script>
<style>
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
