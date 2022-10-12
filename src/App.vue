<template>
  <div id="charger" class="flex justify-end mt-4 mr-4 text-xl font-sans">
    <select v-model="$i18n.locale" class="cursor-pointer">
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
  <router-link to="/BasketPage">
  <div class="flex w-14 mt-3 ml-auto cursor-pointer">
    <img
      src="https://cdn-icons-png.flaticon.com/512/52/52404.png"
      class="w-6 h-6 mr-2"
    />
    {{ result }}
  </div>
</router-link>

  <Navbar></Navbar>
  <router-view class="text-3xl mt-5"></router-view>
</template>

<script>
import Navbar from "./components/molecules/Navbar.vue";
import { useBasketStore } from "@/stores/basket";
import { computed } from 'vue'
export default {
  name: "App",
  components: {
    Navbar,
  },
  setup() {
    const store = useBasketStore();
    const { basket } = store;
    const result = computed(() => {
      return store.getDonutsQuantity
    })
    return {
      basket,
      result,
    };
  },
};
</script>
