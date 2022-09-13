<template>
  <div class="container mx-auto min-h-[500px] text-center text-xl text-slate-900 m-3">
    <p>{{ $t("message.about") }}</p>
  <div class="grid grid-cols-4 mt-8">
    <img src="@/images/donuty.jpg" class="w-96 h-56"/>
    <img src="@/images/donuty2.jpg" class="w-96 h-56"/>
    <img src="@/images/donuty4.jpg" class="w-96 h-56"/>
    <img src="@/images/donuty3.jpg" class="w-96 h-56"/>
  </div>
  </div>

</template>

<script>
export default {
  name: "AboutUsContent"
}
</script>