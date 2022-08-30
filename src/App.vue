<template>
  <!-- <img src="img/tapeta-donuty.jpg" alt="tapeta"> -->
  <img :src="require('@/img/tapeta-donuty.jpg')" class="z-0 absolute opacity-90">
  <Navbar></Navbar>
  <router-view class="text-3xl text-zinc-800 font-mono z-10 relative "></router-view>
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
