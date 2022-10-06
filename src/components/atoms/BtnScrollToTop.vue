<template>
  <button
    v-show="isVisible"
    @click="scroll"
    class="fixed z-10 bottom-8 right-2 border-0 w-12 h-12 rounded-full drop-shadow-md bg-indigo-300 hover:bg-indigo-400 text-white text-3xl font-bold scroll-smooth"
  >
    &#129045; 
  </button>
</template>

<script>
export default {
  name: "BtnScrollToTop",
  setup() {
    const isVisible = () => {
      window.scrollY > 150
    }
    const scroll = () => {
      window.scrollTo(0, 0);
    }
    console.log(window)
    return {
      scroll,
      isVisible,
    };
  },
};
</script>
