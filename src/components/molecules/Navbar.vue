<template>
  <div class="sticky z-30 md:relative bg-white top-0">
    <div
      class="flex justify-between items-center text-2xl md:text-4xl md:block md:text-center md:pb-4 lg:text-6xl lg:pb-4 text-[#610e54]"
    >
      <div class="md:invisible">
        <router-link to="/Donutshop">
          <span class="font-pacifico ml-4">DONUTINO</span>
        </router-link>
      </div>
      <div class="invisible md:visible">
        <div class="w-24 h-24 mx-auto">
          <router-link to="/Donutshop">
            <img
              src="@/images/donutino.png"
              class="w-24 h-24 pb-2"
            />
          </router-link>
        </div>
        <div>
          <router-link to="/Donutshop">
            <span class="font-pacifico text-[#610e54]"
              >DONUTINO</span
            >
          </router-link>
        </div>
      </div>
      <NavbarHamburger
        @mobile-menu="showMenu($event)"
        class="flex my-auto md:hidden"
      ></NavbarHamburger>
    </div>
  </div>
  <div
    class="hidden md:sticky md:top-0 z-50 font-pacifico md:block bg-white text-l text-center py-2 md:text-2xl lg:text-4xl items-center justify-center space-x-8"
  >
    <CustomLink :name="$t('shopping')" url="/DonutStore"></CustomLink>
    <CustomLink
      :name="$t('aboutdonuts')"
      url="/AboutDonuts"
    ></CustomLink>
    <CustomLink :name="$t('company')" url="/AboutUs"></CustomLink>
    <CustomLink :name="$t('contact')" url="/Contact"></CustomLink>
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
  setup() {
    const showMenu = (event) => {
      console.log(event);
    };
    
    return {
      showMenu,
    };
  },
};
</script>
