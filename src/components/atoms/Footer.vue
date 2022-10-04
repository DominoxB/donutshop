<template>
  <footer>
    <div class="bg-gray-200 border-t-zinc-400 border-t-2 h-46 mt-10 items-end font-pacifico font-thin text-slate-800">
      <div class="flex text-base pl-4 py-2 justify-between">
        <span>DONUTINO - nasze wypieki tworzymy z pasją już od 30 lat!</span>
        <div class="flex">
          <span>Szukaj nas na: </span>
          <a href="https://pl-pl.facebook.com" target="_blank">
            <img src="@/images/fb.png" class="w-7 h-7 mt-2 ml-3" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src="@/images/insta.png" class="w-8 h-8 ml-3 mt-2" />
          </a>
          <a href="https://www.tiktok.com" target="_blank">
            <img src="@/images/tik.png" class="w-7 h-7 ml-3 mt-2 mr-3" />
          </a>
        </div>
      </div>
      <div class="text-center text-sm">
        <p>Donata Pączkowska</p>
        <p>ul. Czekoladowa 17</p>
        <p>88-888 Pączkosławice Wielkie</p>
      </div>
      <div class="text-end text-lg mr-3">&copy; 2022 Domino IT Polska</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>
