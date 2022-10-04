<template>
  <button
    @click="scroll"
    class="fixed z-10 bottom-8 right-10 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-300 hover:bg-indigo-400 text-white text-3xl font-bold"
  >
    &#129045;
  </button>
</template>

<script>
export default {
  name: "BtnScrollToTop",
  setup() {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    return {
      scroll,
    };
  },
};
</script>
