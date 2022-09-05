<template>
  <div>
    <img :src="donut.image" />
    <div>{{ donut.taste }}</div>
    <div>{{ donut.price }}</div>
    <div>{{ donut.describe }}</div>
  </div>
</template>


<script>
  export default {
    name: 'DonutDescribe',
    props: {
      donut: {
        type: Object
      }
    },
  };
  </script>
  