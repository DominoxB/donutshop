<template>
  <div class="w-screen h-screen p-4 pb-6">
    <h1 class="pb-8 text-5xl text-center font-bold text-indigo-800">
      Welcome in our Donuts Shop
      <h1 class="text-amber-800 pt-2">🍩DONUTINO🍩</h1>
    </h1>
    <div class="flex items-center justify-center space-x-16">
      <CustomLink name="Home" url="/"></CustomLink>
      <CustomLink name="Shop" url="/DonutShop"></CustomLink>
      <CustomLink name="About Donuts" url="/AboutDonuts"></CustomLink>
      <CustomLink name="Donuts World" url="/DonutsWorld"></CustomLink>
      <CustomLink name="About Us" url="/AboutUs"></CustomLink>
    </div>
  </div>
</template>

<script>
import CustomLink from "../atoms/CustomLink.vue";
export default {
  name: "MyNavbar",
  components: {
    CustomLink,
},
};
</script>
