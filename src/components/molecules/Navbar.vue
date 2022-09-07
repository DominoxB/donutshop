<template>
  <div class="sticky top-0 bg-white w-screen pt-4 z-10 md:relative lg:relative">
    <div
      class="flex pl-4 pr-4 md:block justify-between text-2xl md:text-4xl md:text-center md:pb-4 lg:text-6xl lg:text-center lg:pb-4 font-bold text-indigo-800"
    >
      <span class="block my-auto">🍩DONUTINO🍩</span>
      <NavbarHamburger
        class="flex my-auto md:hidden"
      ></NavbarHamburger>
    </div>
  </div>
  <div
    class="sticky hidden md:block lg:block top-0 bg-white text-l text-center py-2 md:text-2xl lg:text-4xl items-center justify-center space-x-8"
  >
    <CustomLink :name="$t('message.home')" url="/"></CustomLink>
    <CustomLink :name="$t('message.shopping')" url="/DonutShop"></CustomLink>
    <CustomLink
      :name="$t('message.aboutdonuts')"
      url="/AboutDonuts"
    ></CustomLink>
    <CustomLink :name="$t('message.company')" url="/AboutUs"></CustomLink>
  </div>
</template>

<script>
import CustomLink from "../atoms/CustomLink.vue";
import NavbarHamburger from "../atoms/NavbarHamburger.vue";
export default {
  name: "MyNavbar",
  components: {
    CustomLink,
    NavbarHamburger,
  },
};
</script>
