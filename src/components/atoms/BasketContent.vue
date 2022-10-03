<template>
  <div class="container mx-auto min-h-[500px]">
    <div class="block p-4 m-4 text-2xl">
        <p class="mb-6 mt-6 text-center text-3xl font-pacifico text-neutral-700">Twój koszyk pełen pyszności</p>
        <div class="grid grid-cols-4 border-4 text-center font-semibold mt-4">
            <div>Donut</div>
            <div>Cena</div>
            <div>Ilość</div>
            <div>Suma</div>
        </div>
        <div 
        class="grid grid-cols-4 border-t-0 border-2 text-center p-3"
        v-for="data in basket" :donut="product" :key="data.id">
         <div class="font-semibold">{{ data.product.taste }}</div> 
         <div>{{ data.product.price }}</div>
         <div>{{ quantity }}</div>
        </div>
    </div>
    <div class="flex justify-between">
      <router-link to="/DonutShop">
        <button
          class="border-4 border-amber-800 hover:bg-slate-200 rounded p-3 font-pacifico text-2xl"
        >
          Kontunuuj zakupy
        </button>
      </router-link>
      <button
        class="border-4 border-amber-800 hover:bg-slate-200 rounded p-3 font-pacifico text-2xl"
      >
        Przejdź do kasy
      </button>
    </div>
  </div>
</template>

<script>
import { useBasketStore } from "@/stores/basket";
import { useProductStore } from "@/stores/products";
import { ref } from 'vue'
export default {
  name: "BasketContent",
  setup() {
    const store = useBasketStore();
    const { basket } = store;

    const productStore = useProductStore();
    const { donuts } = productStore;
    const quantity = ref(0)
    
    console.log(basket);
    // const initBasket = [];
    basket.map((el) => {
      el.product = donuts[el.id];
    });
    return {
      basket,
      donuts,
      quantity,
    };
  },
};
</script>
