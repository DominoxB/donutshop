<template>
  <footer>
    <div class="grid grid-cols-1 bg-gray-100 border-t-zinc-400 border-t-2 h-46 mt-10 items-end font-thin text-slate-800">
      <div class="flex text-base font-pacifico justify-center mt-3">
        <span>DONUTINO - nasze wypieki tworzymy z pasją już od 30 lat!</span>
      </div>
      <div class="text-center font-garamond text-sm mt-2">
        <p>Donata Pączkowska</p>
        <p>ul. Czekoladowa 17</p>
        <p>06-550 Pączkowo</p>
      </div>
      <div class="flex justify-center text-lg font-garamond my-auto mt-2">
          <span class="font-semibold my-auto">Szukaj nas na: </span>
          <a href="https://pl-pl.facebook.com" target="_blank">
            <img src="@/images/fb.png" class="w-5 h-5 md:w-7 md:h-7 mt-2 ml-3" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src="@/images/insta.png" class="w-5 h-5 md:w-7 md:h-7 ml-3 mt-2" />
          </a>
          <a href="https://www.tiktok.com" target="_blank">
            <img src="@/images/tik.png" class="w-5 h-5 md:w-7 md:h-7 ml-3 mt-2 mr-3" />
          </a>
        </div>
      <div class="text-end text-sm md:text-lg mr-3 font-garamond mt-2">&copy; 2022 Domino IT Polska</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>
