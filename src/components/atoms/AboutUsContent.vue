<template>
  <div
    class="container mx-auto min-h-[500px] text-center text-xl text-slate-900 mt-3"
  >
    <p class="bg-[#e8cfe1] py-3 px-2 font-garamond">
      {{ $t("about") }}
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
      <img src="@/images/donuty.jpg" class="w-96 h-56 mx-auto" />
      <img src="@/images/donuty2.jpg" class="w-96 h-56 mx-auto" />
      <img src="@/images/donuty4.jpg" class="w-96 h-56 mx-auto" />
      <img src="@/images/donuty3.jpg" class="w-96 h-56 mx-auto" />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "AboutUsContent",
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>
