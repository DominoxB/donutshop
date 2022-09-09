<template>
  <div class="container mx-auto min-h-[500px]">
    <p>{{ $t("message.ingredients") }} </p>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from '@/components/atoms/Footer.vue';

export default {
    name: "AboutDonuts",
    components: { Footer }
}
;
</script>
