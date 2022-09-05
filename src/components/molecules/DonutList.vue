<template>
  <div class="grid grid-cols-4 grid-rows-2 container mx-auto">
    <DonutItem v-for="item in donuts" :donut="item" :key="item.id"></DonutItem>
  </div>
</template>

<script>
import DonutItem from '../atoms/DonutItem.vue'
import { useProductStore } from "@/stores/products";
export default {
  name: "DonutList",
  components: {
    DonutItem
  },
  setup() {
    const store = useProductStore();
    const { donuts } = store;
    return {
      donuts
    };
  },
};
</script>
