<template>
  <div>
    <div class="relative h-[250px]">
      <div
        v-for="(slide, index) in slides"
        :key="slide"
        :data-index="index"
        class="absolute"
      >
        <img :src="slide" class="h-[240px] col-span-2" />
      </div>
    </div>
    <div class="flex justify-between">
      <button class="bg-slate-500 rounded font-bold">
        &larr;
      </button>
      <button class="bg-slate-500 rounded font-bold">
        &rarr;
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "TheSlider",
  props: {
    slides: Array,
  },
  setup(props) {
    const currentSlideIndex = 0;

    onMounted(() => {
      props.slides.forEach((_, index) => {
        if (index !== currentSlideIndex) {
          const element = document.querySelector(`[data-index="${index}"]`);
          element.classList.add("hidden");
        }
      });
    });
    return {
      currentSlideIndex,
    };
  },
};
</script>
