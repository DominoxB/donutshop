<template>
  <router-link
    :to="url"
    class="text-zinc-900 font-bold text-3xl"
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
