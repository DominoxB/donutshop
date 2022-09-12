<template>
  <HomeContent></HomeContent>
  <Footer></Footer>
</template>

<script>
import Footer from '../components/atoms/Footer.vue'
import HomeContent from '@/components/atoms/HomeContent.vue';
export default {
    name: "HomePage",
    components: {
    Footer,
    HomeContent
}
};
</script>
