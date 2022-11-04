<template>
  <BasketContent></BasketContent>
  <BtnScrollToTop></BtnScrollToTop>
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/atoms/Footer.vue";
import BasketContent from "@/components/molecules/BasketContent.vue";
import BtnScrollToTop from "@/components/atoms/BtnScrollToTop.vue";
export default {
  name: "BasketPage",
  components: { Footer, BasketContent, BtnScrollToTop },
};
</script>
