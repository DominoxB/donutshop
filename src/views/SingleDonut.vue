<template>
  <div class="container mx-auto">
    <DonutPage :donut="single"></DonutPage>
  </div>
  <BtnScrollToTop></BtnScrollToTop>
  <Footer></Footer>
</template>

<script>
import { useProductStore } from "@/stores/products";
import { useRoute } from "vue-router";
import DonutPage from "@/components/atoms/DonutPage.vue";
import Footer from "@/components/atoms/Footer.vue";
import BtnScrollToTop from "@/components/atoms/BtnScrollToTop.vue";
export default {
  name: "SingleDonut",
  components: { DonutPage, Footer, BtnScrollToTop },
  setup() {
    const store = useProductStore();
    const route = useRoute();
    const id = route.params.id;
    const single = store.getId(id);
    
    return {
      id,
      single,
    };
  },
};
</script>
