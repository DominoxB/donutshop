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
    {{ basket }}

  </div>
  <Navbar></Navbar>
  <router-view class="text-3xl mt-5"></router-view>
</template>

<script>
import Navbar from "./components/molecules/Navbar.vue";
import { useBasketStore } from '@/stores/basket';
export default {
  name: "App",
  components: {
    Navbar,
  },
  setup() {
    const store = useBasketStore();
    const { basket } = store
    return {
      basket
    }

  }
};
</script>
