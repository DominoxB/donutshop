<template>
  <div class="text-center text-zinc-800 text-3xl font-garamond font-semibold mt-6">{{ donut.taste }}</div>
  <div class="grid grid-cols-2">
    <img :src="donut.image" class="w-68 h-72 object-contain mx-auto mt-2" />
    <div class="text-zinc-800 text-xl m-auto">
      <div class="text-center mb-1">1 szt./{{ donut.price }}</div>
      <input v-model="quantity" type="number" placeholder="Wybierz ilość" class="w-26 h-6 text-center mb-1" />
      <button
        @click="add"
        class="bg-orange-200 hover:bg-orange-300 text-gray-800 block w-44 h-10 font-bold text-base rounded my-auto mx-auto"
      >
        <span>Do koszyka 🍩</span> 
      </button>

    </div>
    </div>
  <div class="text-zinc-800 text-center mt-6">
    <div class="flex justify-center items-center">
      <div v-if="donut.glutenFree"><img src="../icons/gluten.png" class="w-24 h-18"></div>
      <div v-if="donut.sugarFree"><img src="../icons/sugar.png" class="w-24 h-18"></div>
      <div v-if="donut.lactoseFree"><img src="../icons/lactose.png" class="w-24 h-18"></div>
      <div v-if="donut.vegan"><img src="../icons/vegan.jpg" class="w-24 h-18"></div>
    </div>
    <div class="text-xl mt-4 font-garamond font-semibold">{{ donut.describe }}</div>


  </div>
</template>

<script>
import { ref } from "vue";
import { useBasketStore } from '@/stores/basket';

export default {
  name: "DonutPage",
  props: {
    donut: {
      type: Object,
    },
  },
    setup(props) {
    const quantity = ref(0)
    const store = useBasketStore();

    const add = () => store.addProduct({id: props.donut.id, quantity: quantity.value});
    return {
      quantity,
      add,
    };
  },
};
</script>
