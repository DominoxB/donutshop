<template>
  <div class="bg-slate-100 font-garamond border block mt-4">
    <p class="text-xl font-semibold mb-2">Wybierz metodę płatności: </p>
    <div class="flex text-lg mb-2">
      <input type="radio" value="cash" v-model="chosen.cash"/>
      <label>Gotówka przy odbiorze</label>
      <img src="@/images/cash.png" class="w-10 h-8 ml-2"/>
    </div>
    <div class="flex text-lg mb-2">
      <input type="radio" value="card" v-model="chosen.card"/>
      <label>Karta płatnicza</label>
      <img src="@/images/karta.png" class="w-20 h-6 ml-2"/>
    </div>
    <div class="flex text-lg mb-2">
      <input type="radio" value="transfer" v-model="chosen.transfer"/>
      <label>Przelewy24 (szybki przelew online)</label>
      <img src="@/images/przelewy.png" class="w-12 h-6 ml-2"/>
    </div>
    <div class="flex text-lg mb-2">
      <input type="radio" value="blik" v-model="chosen.blik"/>
      <label>Blik</label>
      <img src="@/images/blik.png" class="w-8 h-8 ml-2"/>
    </div>


  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: "MethodsOfPayment",
  setup() {
    const chosen = reactive({
      cash: "",
      card: "",
      transfer: "",
      blik: ""
    })
    return {
      chosen
    }
  }

}
</script>