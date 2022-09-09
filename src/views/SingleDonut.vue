<template>
  <div class="container mx-auto">
    <DonutPage :donut="single"></DonutPage>
  </div>
  <Footer></Footer>
</template>

<script>
import { useProductStore } from "@/stores/products";
import { useRoute } from 'vue-router'
import DonutPage from "@/components/atoms/DonutPage.vue";
import Footer from "@/components/atoms/Footer.vue";
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
    components: { DonutPage, Footer }
}
</script>
