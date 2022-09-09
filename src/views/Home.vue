<template>
  <div class="container mx-auto min-h-[500px]">
    <p>{{ $t("message.header") }} </p>
  </div>
  <Footer></Footer>

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
