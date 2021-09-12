<template>
  <v-app>
    <v-main>
        <router-view/>
        <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue"
export default {
 name: "App",
  components: {
   Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
