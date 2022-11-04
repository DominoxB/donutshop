<template>
  <div>
    <FormContent></FormContent>
    <BtnScrollToTop></BtnScrollToTop>
    <Footer></Footer>
  </div>
</template>

<script>
import FormContent from "@/components/molecules/FormContent.vue";
import Footer from "@/components/atoms/Footer.vue";
import BtnScrollToTop from "@/components/atoms/BtnScrollToTop.vue";
export default {
  name: "ContactPage",
  components: { FormContent, Footer, BtnScrollToTop },
};
</script>
