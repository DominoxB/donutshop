<template>
  <DonutList></DonutList>
  <Footer></Footer>
</template>

<script>
import DonutList from '@/components/molecules/DonutList.vue'
import Footer from '@/components/atoms/Footer.vue';
export default {
  name: "DonutShop",
  components: {
    DonutList,
    Footer
}
};
</script>
