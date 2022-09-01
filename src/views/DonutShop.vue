<template>
<InfoDonut :donut="donut"></InfoDonut>> 
</template>

<script>
import InfoDonut from '../components/atoms/InfoDonut.vue'
export default {
  name: "DonutShop",
  components: {
    InfoDonut,
  },
  setup() {
    let donut = {
      taste: "CHOCO",
      price: "3.00",
      diet: "no sugar",
    };
    return {
      donut,
    };
  },
};
</script>





