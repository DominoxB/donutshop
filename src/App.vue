<template>
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
