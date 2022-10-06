<template>
  <HomeContent></HomeContent>
  <BtnScrollToTop></BtnScrollToTop>
  <Footer></Footer>
</template>

<script>
import Footer from '../components/atoms/Footer.vue'
import HomeContent from '@/components/atoms/HomeContent.vue';
import BtnScrollToTop from '@/components/atoms/BtnScrollToTop.vue';
export default {
    name: "HomePage",
    components: {
    Footer,
    HomeContent,
    BtnScrollToTop,
}
};
</script>
