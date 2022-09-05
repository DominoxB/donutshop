<template>
  <div class="ml-8">
    <p>{{ $t("message.ingredients") }}</p>
    <p>{{ taste }}</p>
    <p>{{ store.count }}</p>
    <button @click="store.increment">button</button>
  </div>
</template>

<script>
import { useDonutStore } from "@/stores";
import { computed } from "vue";

export default {
  name: "AboutDonuts",
  setup() {
    const store = useDonutStore();
    const { taste, count } = store;

    const inc = computed(() => store.count);

    return {
      store,
      taste,
      count,
      inc,
    };
  },
};
</script>
