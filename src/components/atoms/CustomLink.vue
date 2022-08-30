<template>
  <router-link
    :to="url"
    class="text-pink-400 text-2xl"
    >{{ name }}</router-link
  >
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
};
</script>
