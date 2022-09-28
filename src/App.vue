<template>
  <div class="flex justify-end mt-4 mr-4 text-xl font-sans">
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
  <div class="flex justify-end mt-2 mr-4">
    {{ basket }}
  </div>

  <Navbar></Navbar>
  <router-view class="text-3xl mt-5"></router-view>
</template>

<script>
import Navbar from "./components/molecules/Navbar.vue";
import { useBasketStore } from "@/stores/basket";
export default {
  name: "App",
  components: {
    Navbar,
  },
  setup() {
    const store = useBasketStore();
    const { basket } = store;
    return {
      basket,
    };
  },
};
</script>
