<template>
  <div class="container mx-auto min-h-[500px] mt-3">
    <div
      class="bg-purple-100 w-3/4 font-garamond border border-black rounded block mt-12 ml-auto mr-auto p-4"
    >
      <!-- SPOSÓB PŁATNOŚCI -->
      <p class="text-xl font-semibold mb-2">{{ $t("payment") }}</p>
      <div class="flex text-lg mb-2">
        <input
          type="radio"
          value="gotówka"
          id="cash"
          name="selected"
          v-model="selected"
        />
        <label>{{ $t("cash") }}</label>
        <img src="@/images/cash.png" class="w-10 h-8 ml-2" />
      </div>
      <div class="flex text-lg mb-2">
        <input
          type="radio"
          value="karta płatnicza"
          id="card"
          name="selected"
          v-model="selected"
        />
        <label>{{ $t("card") }}</label>
        <img src="@/images/karta.png" class="w-20 h-6 ml-2" />
      </div>
      <div class="flex text-lg mb-2">
        <input
          type="radio"
          value="przelew internetowy"
          id="transfer"
          name="selected"
          v-model="selected"
        />
        <label>{{ $t("online") }}</label>
        <img src="@/images/przelewy.png" class="w-12 h-6 ml-2" />
      </div>
      <div class="flex text-lg mb-2">
        <input
          type="radio"
          value="blik"
          id="blik"
          name="selected"
          v-model="selected"
        />
        <label>{{ $t("blik") }}</label>
        <img src="@/images/blik.png" class="w-8 h-8 ml-2" />
      </div>
      <div class="mt-2 bg-purple-200">
        <h1 class="p-2">
          {{ $t("yourmethod") }}
          <span class="font-semibold">{{ selected }}</span>
        </h1>
      </div>
      <!-- DOSTAWA -->
      <div class="mt-8 border-t-2 border-black">
        <p class="text-xl font-semibold mt-4 mb-2">
          {{ $t("delivery") }}
        </p>
        <div class="flex text-lg mb-2">
          <input
            type="radio"
            value="kurier DPD"
            id="courier"
            name="delivery"
            v-model="delivery"
          />
          <label>{{ $t("courier") }}</label>
        </div>
        <div class="flex text-lg mb-2">
          <input
            type="radio"
            value="paczkomat InPost Fresh"
            id="inpost"
            name="delivery"
            v-model="delivery"
          />
          <label>{{ $t("inpost") }}</label>
        </div>
        <div class="flex text-lg mb-2">
          <input
            type="radio"
            value="odbiór osobisty"
            id="self"
            name="delivery"
            v-model="delivery"
          />
          <label>{{ $t("self") }}</label>
        </div>
        <div class="mt-2 bg-purple-200">
          <h1 class="p-2">
            {{ $t("yourdelivery") }}
            <span class="font-semibold">{{ delivery }}</span>
          </h1>
        </div>
      </div>
      <div class="flex justify-end mr-2 mt-4">
        <router-link to="/">
          <button
            class="border border-neutral-900 bg-purple-200 hover:bg-purple-300 rounded p-3 font-pacifico text-2xl"
          >
            {{ $t("check") }}
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MethodsOfPayment",
  setup() {
    const selected = ref(null);
    const delivery = ref(null);
    
    return {
      selected,
      delivery,
    };
  },
};
</script>
