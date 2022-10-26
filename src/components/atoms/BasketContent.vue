<template>
  <div class="container mx-auto min-h-[500px]">
    <div class="block p-4 m-4 text-2xl">
      <p class="mb-6 mt-6 text-center text-3xl font-pacifico text-neutral-700">
        {{ $t("message.yourbasket") }}
      </p>
      <div
        class="grid grid-cols-5 border-4 text-center text-sm md:text-xl lg:text-2xl font-semibold mt-4"
      >
        <div>Donut</div>
        <div>{{ $t("message.donutprice") }}</div>
        <div>{{ $t("message.donutquantity") }}</div>
        <div>{{ $t("message.donutsum") }}</div>
      </div>
      <div
        class="grid grid-cols-5 border-t-0 border-b-0 border-2 text-center text-xs md:text-xl lg:text-2xl"
        v-for="data in basket"
        :donut="product"
        :key="data.id"
      >
        <div
          class="cursor-pointer border-2 border-white hover:border-slate-300 hover:rounded"
        >
          <router-link :to="`/donut/${data.product.id}`">
            {{ data.product.taste }}
            <img
              :src="data.product.image"
              class="w-auto h-auto md:h-20 m-auto"
            />
          </router-link>
        </div>
        <div class="m-auto">{{ data.product.price }}</div>
        <input
          v-model="data.quantity"
          type="number"
          min="1"
          class="w-12 h-12 m-auto text-center border border-slate-400 rounded cursor-pointer focus:bg-slate-200"
        />
        <div class="m-auto">
          {{ (data.product.price * data.quantity).toFixed(2) }}
        </div>
        <button
          @click="removeDonut(data.id)"
          class="text-sm md:text-xl border rounded border-neutral-900 hover:bg-red-500 w-14 h-8 md:w-24 md:h-10 m-auto font-pacifico"
        >
          {{ $t("message.delete") }}
        </button>
      </div>
      <div class="grid grid-cols-4 border-black border-2 text-center font-bold">
        <div class="col-span-2 my-auto text-sm md:text-xl lg:text-2xl">
          {{ $t("message.all") }}
        </div>
        <div class="my-auto text-sm md:text-xl lg:text-2xl">{{ result }}</div>
        <div class="my-auto text-sm md:text-xl lg:text-2xl">
          {{ $t("message.totalprice") }} {{ total.toFixed(2) }}
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <router-link to="/DonutShop">
        <button
          class="border border-neutral-900 bg-purple-200 hover:bg-purple-300 rounded p-3 font-pacifico text-sm md:text-2xl ml-2 md:ml-4"
        >
          {{ $t("message.continue") }}
        </button>
      </router-link>
      <router-link to="/PaymentPage">
        <button
          class="border border-neutral-900 bg-purple-200 hover:bg-purple-300 rounded p-3 font-pacifico text-sm md:text-2xl mr-2 md:mr-4"
          :disabled="result <= 0"
        >
          {{ $t("message.gotoorder") }}
        </button>
      </router-link>
    </div>
  </div>
  <ModalContent
    v-if="showModal"
    @delete-donut="agree($event)"
    @cancel-action="cancel($event)"
  >
  </ModalContent>
</template>

<script>
import { useBasketStore } from "@/stores/basket";
import { useProductStore } from "@/stores/products";
import { computed, ref, onMounted } from "vue";
import ModalContent from "@/components/atoms/ModalContent.vue";
export default {
  name: "BasketContent",
  components: {
    ModalContent,
  },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    const store = useBasketStore();
    const { basket } = store;

    const productStore = useProductStore();
    const { donuts } = productStore;

    const showModal = ref(false);
    const activeId = ref(-1);

    const result = computed(() => {
      return store.getDonutsQuantity;
    });

    const total = computed(() => {
      return store.getDonutsPrice;
    });

    const removeDonut = (id) => {
      activeId.value = id;
      showModal.value = true;
    };

    const agree = (event) => {
      console.log(event);
      store.deleteProduct(activeId.value);
      showModal.value = false;
    };

    const cancel = (event) => {
      console.log(event);
      showModal.value = false;
    };

    basket.map((el) => {
      el.product = donuts[el.id];
    });
    return {
      basket,
      donuts,
      result,
      total,
      removeDonut,
      showModal,
      agree,
      cancel,
    };
  },
};
</script>
