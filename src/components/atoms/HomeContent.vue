<template>
  <div class="container mx-auto min-h-[500px] mt-3">
    <div class="bg-[#e8cfe1]  grid grid-cols-1 md:grid md:grid-cols-2 lg:flex lg:items-center lg:justify-center">
      <img src="@/images/don.jpg" class= "md:h-[624px] object-fill"/>
    <p class="text-2xl font-garamond text-zinc-800 text-center leading-loose pl-4 pr-4">{{ $t("message.header") }} </p>
  </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: "HomeContent",
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0)
    }
 )}

}
</script>