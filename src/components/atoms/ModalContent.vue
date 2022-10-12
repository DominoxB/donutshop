<template>
  <div
    class="bg-slate-400 fixed top-0 left-0 h-screen w-screen z-40 opacity-80"
  ></div>
  <div class="relative z-50">
    <div
      class="bg-white fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-indigo-900 rounded-2xl p-10 text-center"
    >
      <span class="text-2xl font-pacifico"
        >Czy na pewno chcesz usunąć te pozycję?</span
      >
      <div class="flex justify-center mt-10 font-pacifico">
        <button
         @click="clickYes"
          class="border border-black hover:bg-slate-200 rounded text-center text-lg p-1 mr-10"
        >
          Tak, usuń donuta
        </button>
        <button
          @click="clickCancel"
          class="w-[136px] border border-black hover:bg-slate-200 rounded text-center text-lg p-1"
        >
          Anuluj
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalContent",  
  setup(props, context) {
    const clickYes = () => {
      context.emit("delete-donut")
    }
    const clickCancel = () => {
      context.emit("cancel-action")
    }
    return {
      clickYes,
      clickCancel
    }
  }
};
</script>
