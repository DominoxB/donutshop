<template>
  <div class="text-center text-zinc-800">{{ donut.taste }}</div>
  <div class="grid grid-cols-2">
    <img :src="donut.image" class="w-68 h-72 object-contain mx-auto" />
    <div class="text-purple-500 text-xl m-auto">
      <div class="text-center mb-1">1 szt./{{ donut.price }}</div>
      <input v-model="ilość" type="number" placeholder="Wybierz ilość" class="w-26 h-6 text-center mb-1" />
      <button
        class="bg-purple-200 hover:bg-gray-400 text-gray-800 block w-44 h-10 font-bold text-base rounded  my-auto mx-auto"
      >
        <span>Do koszyka 🍩</span>
      </button>

    </div>
    </div>
  <div class="text-zinc-800 text-center mt-6">
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
