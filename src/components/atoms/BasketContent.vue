<template>
  <div class="container mx-auto min-h-[500px]">
    <div class="block">
      <div class="flex"></div>
    </div>
    <div class="flex justify-between">
      <router-link to="/DonutShop">
        <button
          class="border-4 border-amber-800 hover:bg-amber-200 rounded p-3 font-pacifico text-2xl"
        >
          Kontunuuj zakupy
        </button>
      </router-link>
      <button
        class="border-4 border-amber-800 hover:bg-amber-200 rounded p-3 font-pacifico text-2xl"
      >
        Przejdź do kasy
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketContent",
};
</script>
