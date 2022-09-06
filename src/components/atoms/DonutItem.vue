<template>
  <router-link :to="`/donut/${donut.id}`">
  <div
    class="grid items-center justify-center group transition ease-in-out delay-100 group-hover:-translate-y-1 hover:scale-110 cursor-pointer"
  >
    <img :src="donut.image" class="w-64 h-72 object-contain">
    <div
      class="text-xl text-center text-blue-900 font-medium group-hover:text-blue-500"
    >
      <div>{{ donut.taste }}</div>
      <div>{{ donut.price }}</div>
      <div>{{ donut.diet }}</div>
    </div>
  </div>
</router-link>
</template>

<script>
export default {
  name: 'DonutItem',
  props: {
    donut: {
      type: Object
    }
  },
};
</script>
