<template>
  <PaymentUserData></PaymentUserData>
  <BtnScrollToTop></BtnScrollToTop>
  <Footer></Footer>
</template>

<script>
import PaymentUserData from '@/components/atoms/PaymentUserData.vue';
import Footer from '@/components/atoms/Footer.vue';
import BtnScrollToTop from '@/components/atoms/BtnScrollToTop.vue';
export default {
    name: "PaymentPage",
    components: { PaymentUserData, Footer, BtnScrollToTop }
}
</script>