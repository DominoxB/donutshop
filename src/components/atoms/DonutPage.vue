<template>
  <div class="container mx-auto min-h-[500px] mt-3">
    <div
      class="text-center text-zinc-800 text-3xl font-garamond font-semibold mt-6"
    >
      {{ donut.taste }}
    </div>
    <div class="grid md:grid-cols-2">
      <img :src="donut.image" class="w-68 h-72 object-contain mx-auto mt-2" />
      <div class="text-zinc-800 text-xl m-auto">
        <div class="text-center mb-1">1 szt./{{ donut.price }}</div>
        <input
          id="quantity"
          v-model="quantity"
          type="number"
          min="1"
          onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
          class="text-center justify-center mb-1 border-4 border- rounded"
        />
        <button
          @click="add"
          :disabled="quantity <= 0"
          class="bg-purple-200 hover:bg-purple-300 text-gray-800 block w-44 h-10 font-bold text-base rounded my-auto mx-auto"
        >
          <span>Do koszyka 🍩</span>
        </button>
      </div>
    </div>
    <div
      v-if="showMessage"
      class="font-garamond text-2xl text-center text-emerald-600 font-bold mt-4"
    >
      Świetny wybór, produkt został dodany do koszyka!
    </div>
    <div class="text-zinc-800 text-center mt-6">
      <div class="flex justify-center items-center">
        <div v-if="donut.glutenFree">
          <img src="@/icons/gluten.png" class="w-24 h-18" />
        </div>
        <div v-if="donut.sugarFree">
          <img src="@/icons/sugar.png" class="w-24 h-18" />
        </div>
        <div v-if="donut.lactoseFree">
          <img src="@/icons/lactose.png" class="w-24 h-18" />
        </div>
        <div v-if="donut.vegan">
          <img src="@/icons/vegan.jpg" class="w-24 h-18" />
        </div>
      </div>
      <div class="text-xl mt-4 font-garamond font-semibold px-2">
        {{ donut.describe }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";
import { useBasketStore } from "@/stores/basket";
export default {
  name: "DonutPage",
  props: {
    donut: {
      type: Object,
    },
  },
  setup(props) {
    const quantity = ref(1);
    const store = useBasketStore();
    const showMessage = ref(false);

    onMounted(async () => {
      const hasAutofocus = document.getElementById("quantity");
      hasAutofocus.focus();
      await nextTick();
      hasAutofocus.scrollIntoView({ block: "end", behavior: "smooth" });
    });

    const add = () => {
      store.addProduct({
        id: props.donut.id,
        quantity: quantity.value,
      });
      showMessage.value = true;
    };

    return {
      quantity,
      add,
      showMessage,
    };
  },
};
</script>
