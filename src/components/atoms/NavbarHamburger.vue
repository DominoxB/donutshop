<template>
  <div class="mr-6">
    <button @click="clickHamburger" class="relative group">
      <div class="relative flex overflow-hidden items-center justify-center">
        <div
          class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all origin-center overflow-hidden"
        >
          <div
            :class="{ 'translate-x-10': show }"
            class="bg-zinc-800 h-[2px] w-7 origin-left"
          ></div>
          <div
            :class="{ 'translate-x-10': show }"
            class="bg-zinc-800 h-[2px] w-7 origin-left"
          ></div>
          <div
            :class="{ 'translate-x-10': show }"
            class="bg-zinc-800 h-[3px] w-7 origin-left"
          ></div>
          <div
            class="absolute items-center justify-between transform transition-all top-2.5 flex"
          >
            <div
              :class="{ 'rotate-45': show }"
              class="absolute bg-zinc-800 h-[2px] w-5 transform transition-all duration-200 delay-100"
            ></div>
            <div
              :class="{ '-rotate-45': show }"
              class="absolute bg-zinc-800 h-[2px] w-5 transform transition-all duration-200 delay-100"
            ></div>
          </div>
        </div>
      </div>
    </button>
    <div
      :class="{ '-translate-x-full': !show }"
      class="fixed h-full w-48 block text-xl text-slate-800 bg-slate-300 top-0 bottom-0 left-0 transition duration-700 z-50"
    >
      <div class="my-4 px-4">
        <span class="font-pacifico text-[#610e54]">DONUTINO</span>
        <img src="@/images/donutino.png" class="w-16 h-16 mt-2" />
      </div>
      <p
        @click="clickLink('/Donutshop')"
        class="hover:bg-slate-400 py-2 px-4 font-pacifico cursor-pointer"
      >
        {{ $t("home") }}
      </p>
      <p
        @click="clickLink('/DonutStore')"
        class="hover:bg-slate-400 py-2 px-4 font-pacifico cursor-pointer"
      >
        {{ $t("shopping") }}
      </p>
      <p
        @click="clickLink('/AboutDonuts')"
        class="hover:bg-slate-400 py-2 px-4 font-pacifico cursor-pointer"
      >
        {{ $t("aboutdonuts") }}
      </p>
      <p
        @click="clickLink('/AboutUs')"
        class="hover:bg-slate-400 py-2 px-4 font-pacifico cursor-pointer"
      >
        {{ $t("company") }}
      </p>
      <p
        @click="clickLink('/Contact')"
        class="hover:bg-slate-400 py-2 px-4 font-pacifico cursor-pointer"
      >
        {{ $t("contact") }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "NavbarHamburger",
  setup(props, context) {
    const router = useRouter();
    const show = ref(false);

    const clickHamburger = () => {
      show.value = !show.value;
      context.emit("mobile-menu", show.value);
    };

    const clickLink = (url) => {
      show.value = false;
      router.push({ path: url });
    };
    
    return {
      clickHamburger,
      clickLink,
      show,
    };
  },
};
</script>
