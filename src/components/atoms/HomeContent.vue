<template>
  <div class="container mx-auto min-h-[500px] mt-6">
    <div class="bg-slate-200 grid grid-cols-1 md:grid-cols-2">
    <p class="text-2xl font-light text-zinc-800 text-center leading-loose my-auto ml-5">{{ $t("message.header") }} </p>
    <img src="@/images/don.jpg" class= "md:h-[624px] mx-auto"/>
  </div>
  </div>
</template>

<script>
export default {
  name: "HomeContent"
}
</script>