<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <PaymentUserData></PaymentUserData>
    <div>
      <MethodsOfPayment></MethodsOfPayment>
    </div>
  </div>
  <BtnScrollToTop></BtnScrollToTop>
  <Footer></Footer>
</template>

<script>
import PaymentUserData from "@/components/atoms/PaymentUserData.vue";
import Footer from "@/components/atoms/Footer.vue";
import BtnScrollToTop from "@/components/atoms/BtnScrollToTop.vue";
import MethodsOfPayment from "@/components/atoms/MethodsOfPayment.vue";
export default {
  name: "PaymentPage",
  components: { PaymentUserData, Footer, BtnScrollToTop, MethodsOfPayment },
};
</script>
