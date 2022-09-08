<template>
  <div class="text-center text-zinc-800">{{ donut.taste }}</div>
  <div class="flex justify-center">
    <img :src="donut.image" class="w-64 h-72 object-contain" />
    <div class="text-indigo-600 text-xl m-auto">
      <div class="text-center pb-4">1 szt./{{ donut.price }}</div>
      <input v-model="ilość" type="number" placeholder="Wybierz ilość" class="w-26 h-6 text-center" />
    </div>
      <button
        class="bg-purple-300 hover:bg-gray-400 text-gray-800 w-44 h-10 font-bold text-base py-2 px-4 rounded  my-auto"
      >
        <span>Do koszyka 🍩</span>
      </button>
    </div>
  <div class="text-zinc-800 text-center mt-10">
    <div class="text-xl font-bold">{{ donut.diet }}</div>
    <div class="text-xl mt-4">{{ donut.describe }}</div>
  </div>
</template>

<script>
export default {
  name: "DonutPage",
  props: {
    donut: {
      type: Object,
    },
  },
};
</script>
