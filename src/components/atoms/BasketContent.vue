<template>
  <div class="container mx-auto min-h-[500px]">
    <div class="block p-4 m-4 text-2xl">
      <p class="mb-6 mt-6 text-center text-3xl font-pacifico text-neutral-700">
        Twój koszyk pełen pyszności
      </p>
      <div class="grid grid-cols-4 border-4 text-center font-semibold mt-4">
        <div>Donut</div>
        <div>Cena</div>
        <div>Ilość</div>
        <div>Suma</div>
      </div>
      <div
        class="grid grid-cols-4 border-t-0 border-b-0 border-2 text-center p-3"
        v-for="data in basket"
        :donut="product"
        :key="data.id"
      >
        <div class="font-semibold">
          {{ data.product.taste }}
          <img :src="data.product.image" class="w-20 h-20 m-auto" />
        </div>
        <div>{{ data.product.price }}</div>
        <div>{{ data.quantity }}</div>
        <div>{{ (data.product.price * data.quantity).toFixed(2) }}</div>
      </div>
      <div
        class="grid grid-cols-4 border-black border-2 text-center font-semibold h-10"
      >
        <div class="col-span-2"></div>
        <div>{{ result }}</div>
        <div>Łącznie zł: {{ total.toFixed(2) }}</div>
      </div>
    </div>
    <div class="flex justify-between">
      <router-link to="/DonutShop">
        <button
          class="border-4 border-amber-800 hover:bg-slate-200 rounded p-3 font-pacifico text-2xl ml-4"
        >
          Kontynuuj zakupy
        </button>
      </router-link>
      <button
        class="border-4 border-amber-800 hover:bg-slate-200 rounded p-3 font-pacifico text-2xl mr-4"
      >
        Przejdź do kasy
      </button>
    </div>
  </div>
</template>

<script>
import { useBasketStore } from "@/stores/basket";
import { useProductStore } from "@/stores/products";
import { computed } from "vue";
export default {
  name: "BasketContent",
  setup() {
    const store = useBasketStore();
    const { basket } = store;

    const productStore = useProductStore();
    const { donuts } = productStore;

    const result = computed(() => {
      return store.getDonutsQuantity;
    });

    const total = computed(() => {
      return store.getDonutsPrice;
    });

    basket.map((el) => {
      el.product = donuts[el.id];
    });
    return {
      basket,
      donuts,
      result,
      total,
    };
  },
};
</script>
