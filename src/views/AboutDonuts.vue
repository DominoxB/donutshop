<template>
  <AboutContent></AboutContent>
  <BtnScrollToTop></BtnScrollToTop>
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/atoms/Footer.vue";
import AboutContent from "@/components/atoms/AboutContent.vue";
import BtnScrollToTop from "@/components/atoms/BtnScrollToTop.vue";
export default {
  name: "AboutDonuts",
  components: { Footer, AboutContent, BtnScrollToTop },
};
</script>
