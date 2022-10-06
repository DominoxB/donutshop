<template>
  <DonutList></DonutList>
  <BtnScrollToTop></BtnScrollToTop>
  <Footer></Footer>
</template>

<script>
import DonutList from '@/components/molecules/DonutList.vue'
import Footer from '@/components/atoms/Footer.vue';
import BtnScrollToTop from '@/components/atoms/BtnScrollToTop.vue';
export default {
  name: "DonutShop",
  components: {
    DonutList,
    Footer,
    BtnScrollToTop
}
};
</script>
