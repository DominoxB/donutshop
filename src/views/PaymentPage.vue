<template>
  <PaymentUserData></PaymentUserData>
  <Footer></Footer>
</template>

<script>
import PaymentUserData from '@/components/atoms/PaymentUserData.vue';
import Footer from '@/components/atoms/Footer.vue';
export default {
    name: "PaymentPage",
    components: { PaymentUserData, Footer }
}
</script>