<template>
  <div class="container mx-auto">
    <DonutPage :donut="single"></DonutPage>
  </div>
</template>

<script>
import { useProductStore } from "@/stores/products";
import { useRoute } from 'vue-router'
import DonutPage from "@/components/atoms/DonutPage.vue";
export default {
    name: "SingleDonut",
    setup() {
        const store = useProductStore();
        const route = useRoute();
        const id = route.params.id;
        const single = store.getId(id);
        return {
            id,
            single
        };
    },
    components: { DonutPage }
}
</script>
