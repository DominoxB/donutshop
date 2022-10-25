<template>
  <router-link :to="url" class="text-zinc-800 hover:text-zinc-700">{{
    name
  }}</router-link>
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
