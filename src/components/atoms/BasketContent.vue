<template>
  <div class="container mx-auto min-h-[500px]">
    <div class="block p-4 m-4 text-2xl">
      <p class="mb-6 mt-6 text-center text-3xl font-pacifico text-neutral-700">
        Twój koszyk pełen pyszności
      </p>
      <div class="grid grid-cols-5 border-4 text-center text-lg md:text-xl lg:text-2xl font-semibold mt-4">
        <div>Donut</div>
        <div>Cena</div>
        <div>Ilość</div>
        <div>Suma</div>
      </div>
      <div
        class="grid grid-cols-5 border-t-0 border-b-0 border-2 text-center text-sm md:text-xl lg:text-2xl"
        v-for="data in basket"
        :donut="product"
        :key="data.id"
      >
        <div class="font-semibold cursor-pointer border-2 border-white hover:border-slate-700 hover:rounded-2xl">
          <router-link :to="`/donut/${data.product.id}`">
          {{ data.product.taste }}
          <img :src="data.product.image" class="w-20 h-20 m-auto" />
        </router-link>
        </div>
        <div class="m-auto">{{ data.product.price }}</div>
        <input v-model="data.quantity" type="number" class="w-12 h-12 m-auto text-center border border-slate-400 rounded cursor-pointer focus:bg-slate-200"/>
        <div class="m-auto">{{ (data.product.price * data.quantity).toFixed(2) }}</div>
        <button @click="removeDonut(data.id)"
        class="text-sm md:text-xl border rounded border-neutral-900 hover:bg-red-500 w-14 h-8 md:w-24 md:h-10 m-auto font-pacifico">Usuń</button>
      </div>
      <div
        class="grid grid-cols-4 border-black border-2 text-center font-bold h-10"
      >
        <div class="col-span-2 my-auto text-sm md:text-xl lg:text-2xl">Podsumowanie zakupów: </div>
        <div class="my-auto text-sm md:text-xl lg:text-2xl">{{ result }}</div>
        <div class="my-auto text-sm md:text-xl lg:text-2xl">Razem zł: {{ total.toFixed(2) }}</div>
      </div>
    </div>
    <div class="flex justify-between">
      <router-link to="/DonutShop">
        <button
          class="border border-neutral-900  bg-orange-200 hover:bg-orange-300 rounded p-3 font-pacifico text-2xl ml-4"
        >
          Kontynuuj zakupy
        </button>
      </router-link>
      <button
        class="border border-neutral-900 bg-orange-200 hover:bg-orange-300 rounded p-3 font-pacifico text-2xl mr-4"
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
  props: {
    donut: {
      type: Object
    }
  },

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

    const removeDonut = (id) => {
      store.deleteProduct(id)
    }

    basket.map((el) => {
      el.product = donuts[el.id];
    });
    return {
      basket,
      donuts,
      result,
      total,
      removeDonut
    };
  },
};
</script>
