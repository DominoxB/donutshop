<template>
  <div class="container mx-auto">
    <p>{{ $t("message.header") }}</p>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '../components/atoms/Footer.vue'
export default {
    name: "HomePage",
    components: {
      Footer
    }
};
</script>
