<template>
  <div class="bg-slate-200 font-garamond border border-black rounded block mt-12 ml-auto mr-auto p-4">
    <p class="text-xl font-semibold mb-2">Wybierz metodę płatności: </p>
    <div class="flex text-lg mb-2">
      <input type="radio" value="gotówka" id="cash" name="chosen" v-model="chosen"/>
      <label>Gotówka przy odbiorze</label>
      <img src="@/images/cash.png" class="w-10 h-8 ml-2"/>
    </div>
    <div class="flex text-lg mb-2">
      <input type="radio" value="karta płatnicza" id="card" name="chosen" v-model="chosen"/>
      <label>Karta płatnicza</label>
      <img src="@/images/karta.png" class="w-20 h-6 ml-2"/>
    </div>
    <div class="flex text-lg mb-2">
      <input type="radio" value="przelew internetowy" id="transfer" name="chosen" v-model="chosen"/>
      <label>Przelewy24 (szybki przelew online)</label>
      <img src="@/images/przelewy.png" class="w-12 h-6 ml-2"/>
    </div>
    <div class="flex text-lg mb-2">
      <input type="radio" value="blik" id="blik" name="chosen" v-model="chosen"/>
      <label>Blik</label>
      <img src="@/images/blik.png" class="w-8 h-8 ml-2"/>
    </div>
    <div>
      <h1>Wybrany sposób płatności: {{ chosen }}</h1>
    </div>


  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "MethodsOfPayment",
  setup() {
    const chosen = ref(null)
    return {
      chosen
    }
  }

}
</script>