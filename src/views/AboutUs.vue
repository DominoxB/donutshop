<template>
<AboutUsContent></AboutUsContent>
<Footer></Footer>
</template>

<script>
import Footer from '@/components/atoms/Footer.vue';
import AboutUsContent from '@/components/atoms/AboutUsContent.vue';
export default {
    name: "AboutUs",
    components: { Footer, AboutUsContent }
}
</script>