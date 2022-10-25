<template>
  <AboutUsContent></AboutUsContent>
  <BtnScrollToTop></BtnScrollToTop>
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/atoms/Footer.vue";
import AboutUsContent from "@/components/atoms/AboutUsContent.vue";
import BtnScrollToTop from "@/components/atoms/BtnScrollToTop.vue";
export default {
  name: "AboutUs",
  components: { Footer, AboutUsContent, BtnScrollToTop },
};
</script>
