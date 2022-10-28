<template>
  <div class="container mx-auto min-h-[500px] mt-3">
    <div>
      <p
        class="text-xl font-garamond p-4 text-center text-slate-900 bg-[#e8cfe1]"
      >
        {{ $t("ingredients") }}
      </p>
      <img src="@/images/don3.jpg" class="w-screen" />
      <img src="@/images/don4.jpg" class="w-screen" />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "AboutContent",
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>
