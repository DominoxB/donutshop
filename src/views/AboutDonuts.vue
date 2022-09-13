<template>
  <AboutContent></AboutContent>
  <Footer></Footer>
</template>

<script>
import Footer from '@/components/atoms/Footer.vue';
import AboutContent from '@/components/atoms/AboutContent.vue';

export default {
    name: "AboutDonuts",
    components: { Footer, AboutContent }
}
;
</script>
