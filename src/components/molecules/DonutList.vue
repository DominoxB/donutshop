<template>
  <div class="container mx-auto">
    <div
      class="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-6"
    >
      <DonutItem
        v-for="item in donuts"
        :donut="item"
        :key="item.id"
      ></DonutItem>
    </div>
  </div>
</template>

<script>
import DonutItem from "../atoms/DonutItem.vue";
import { useProductStore } from "@/stores/products";
import { onMounted } from "vue";
export default {
  name: "DonutList",
  components: {
    DonutItem,
  },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });

    const store = useProductStore();
    const { donuts } = store;
    
    return {
      donuts,
    };
  },
};
</script>
