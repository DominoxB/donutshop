<template>
  <router-link :to="`/donut/${donut.id}`">
    <div
      class="grid items-center justify-center group lg:transition lg:ease-in-out lg:delay-100 lg:hover:scale-110 cursor-pointer z-0"
    >
      <img :src="donut.image" class="w-52 h-72 object-contain" />
      <div
        class="text-xl text-center text-[#610e54] font-garamond font-semibold"
      >
        <div>{{ donut.taste }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "DonutItem",
  props: {
    donut: {
      type: Object,
    },
  },
};
</script>
