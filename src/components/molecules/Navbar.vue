<template>
    <div class="w-screen p-4 pb-6 z-10 relative">
      <h1 class="pb-8 text-2xl md:text-4xl lg:text-6xl text-center font-bold text-indigo-800">
        🍩DONUTINO🍩
      </h1>
      <div class="flex text-l md:text-2xl lg:text-4xl items-center justify-center space-x-8">
        <CustomLink :name="$t('message.home')" url="/"></CustomLink>
        <CustomLink
          :name="$t('message.shopping')"
          url="/DonutShop"
        ></CustomLink>
        <CustomLink
          :name="$t('message.aboutdonuts')"
          url="/AboutDonuts"
        ></CustomLink>
        <CustomLink :name="$t('message.company')" url="/AboutUs"></CustomLink>
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
