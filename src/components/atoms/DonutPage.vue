<template>
  <div class="text-center">{{ donut.taste }}</div>
  <div class="flex justify-between">
    <img :src="donut.image" class="w-64 h-72 object-contain" />
    <p>Cena za sztukę {{ donut.price }}</p>
    <input v-model="number" placeholder="wpisz ilość"/>
  </div>
  <div>
    <div>{{ donut.diet }}</div>
    <div>{{ donut.describe }}</div>
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
