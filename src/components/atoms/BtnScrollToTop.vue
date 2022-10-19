<template>
  <button
    v-show="scY > 150"
    @click="scroll"
    class="fixed z-50 bottom-8 right-2 border-0 w-12 h-12 rounded-full drop-shadow-md bg-indigo-400 opacity-30 hover:bg-indigo-500 text-white text-3xl font-bold scroll-smooth"
  >
    &uarr;
  </button>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "BtnScrollToTop",
  setup() {
    const scY = ref(0);
    const scroll = () => {
      const charger = document.getElementById("charger"); // chwytamy element po id
      charger.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    onMounted(() => {
      document.addEventListener("scroll", () => {
        scY.value = window.scrollY;
      });
    });
    return {
      scroll,
      scY,
    };
  },
};
</script>
