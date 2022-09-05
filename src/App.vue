<template>
  <!-- <img :src="require('@/img/tapeta-donuty.jpg')" class="z-0 absolute opacity-90"> -->
  <p>{{ $t("message.hello") }}</p>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
  <Navbar></Navbar>
  <router-view
    class="text-3xl text-pink-800 font-sans z-10 relative mt-12"
  ></router-view>
  <!-- <router-link to="/DonutShop"></router-link> -->
</template>

<script>
import Navbar from "./components/molecules/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
