<template>
  <BasketContent></BasketContent>
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/atoms/Footer.vue";
import BasketContent from "@/components/atoms/BasketContent.vue";
export default {
  name: "BasketPage",
  components: { Footer, BasketContent },
}; 
</script>
