<template>
  <Navbar></Navbar>
  <router-view></router-view>
  <!-- <router-link to="/DonutShop"></router-link> -->
</template>

<script>
import Navbar from './components/molecules/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
}
}
</script>
