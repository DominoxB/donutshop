<template>
  <div class="container mx-auto min-h-[500px] text-center text-xl text-slate-900 mt-3">
    <p class="bg-slate-100">{{ $t("message.about") }}</p>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
    <img src="@/images/donuty.jpg" class="w-96 h-56 mx-auto"/>
    <img src="@/images/donuty2.jpg" class="w-96 h-56 mx-auto"/>
    <img src="@/images/donuty4.jpg" class="w-96 h-56 mx-auto"/>
    <img src="@/images/donuty3.jpg" class="w-96 h-56 mx-auto"/>
  </div>
  </div>

</template>

<script>
export default {
  name: "AboutUsContent"
}
</script>