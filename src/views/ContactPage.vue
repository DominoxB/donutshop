<template>
  <div>
    <FormContent></FormContent>
    <Footer></Footer>
  </div>
</template>

<script>
import FormContent from '@/components/atoms/FormContent.vue';
import Footer from '@/components/atoms/Footer.vue';
export default {
    name: "ContactPage",
    components: { FormContent, Footer }
}
</script>