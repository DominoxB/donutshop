<template>
  <div
    class="w-1/4 grid items-center justify-center group transition ease-in-out delay-100 group-hover:-translate-y-1 hover:scale-110 cursor-pointer"
  >
    <img src="@/img/chocolate.jpg" />
    <div
      class="text-xl text-center text-blue-900 font-medium group-hover:text-blue-500"
    >
      <div>{{ donut.taste }}</div>
      <div>{{ donut.price }}</div>
      <div>{{ donut.diet }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoDonut',

  props: {
    donut: {
      type: Object
    }
  },
};
</script>
