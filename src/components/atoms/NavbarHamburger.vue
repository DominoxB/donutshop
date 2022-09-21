<template>
  <div class="mr-6">
    <button @click="clickHamburger" class="relative group">
      <div class="relative flex overflow-hidden items-center justify-center">
        <div
          class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden"
        >
          <div
            :class="{ 'translate-x-10': show }"
            class="bg-zinc-800 h-[2px] w-7 origin-left"
          ></div>
          <div
            :class="{ 'translate-x-10': show }"
            class="bg-zinc-800 h-[2px] w-7"
          ></div>
          <div
            :class="{ 'translate-x-10': show }"
            class="bg-zinc-800 h-[2px] w-7 origin-left"
          ></div>

          <div
            class="absolute items-center justify-between transform transition-all duration-500 top-2.5 flex"
          >
            <div
              :class="{ 'rotate-45': show }"
              class="absolute bg-zinc-800 h-[2px] w-5 transform transition-all duration-300 delay-100"
            ></div>
            <div
              :class="{ '-rotate-45': show }"
              class="absolute bg-zinc-800 h-[2px] w-5 transform transition-all duration-300 delay-100"
            ></div>
          </div>
        </div>
      </div>
    </button>
    <div 
    v-show="show"
    class="fixed h-full w-64 block text-xl text-slate-800 bg-slate-300 inset-y-0 left-0">
    <div class=" my-4 px-4">
      <span class="font-pacifico text-amber-700">DONUTINO</span>
    <img src="@/images/donutino.png" class="w-16 h-16 mt-2"/>
    </div>
      <div class="hover:bg-slate-400 py-2 px-4 font-pacifico">
        <router-link to="/">
          <span>Strona główna</span>
        </router-link>
      </div>
      <div class="hover:bg-slate-400 py-2 px-4 font-pacifico">
        <router-link to="/DonutShop">
          <span>Zakupy</span>
        </router-link>
      </div>
      <div class="hover:bg-slate-400 py-2 px-4 font-pacifico">
        <router-link to="/AboutDonuts">
          <span>Nasze donuty</span>
        </router-link>
      </div>
      <div class="hover:bg-slate-400 py-2 px-4 font-pacifico">
        <router-link to="/AboutUs">
          <span>O firmie</span>
        </router-link>
      </div>
      <div class="hover:bg-slate-400 py-2 px-4 font-pacifico">
        <router-link to="/Contact">
          <span>Kontakt</span>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "NavbarHamburger",
  setup(props, context) {
    const show = ref(false);
    const clickHamburger = () => {
      show.value = !show.value;
      context.emit("mobileMenu", show.value);
    };
    return {
      clickHamburger,
      show,
    };
  },
};
</script>
