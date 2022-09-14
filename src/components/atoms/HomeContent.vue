<template>
  <div class="container mx-auto min-h-[500px] mt-6">
    <div class="bg-slate-200 grid grid-cols-1 md:grid md:grid-cols-2 lg:flex lg:items-center lg:justify-center">
    <p class="text-2xl font-light text-zinc-800 text-center leading-loose pl-3 pr-3">{{ $t("message.header") }} </p>
    <img src="@/images/don.jpg" class= "md:h-[624px] object-fill"/>
  </div>
  </div>
</template>

<script>
export default {
  name: "HomeContent"
}
</script>