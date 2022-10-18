<template>
  <div>
    <div class="relative h-[320px]">
      <div
        v-for="(slide, index) in slides"
        :key="slide"
        :data-index="index"
        class="absolute"
      >
        <img :src="slide" class="h-[290px]" />
      </div>
    </div>
    <div class="flex justify-between">
      <button class="bg-slate-500 rounded font-bold" @click="onPrevious">
        &larr;
      </button>
      <button class="bg-slate-500 rounded font-bold" @click="onNext">
        &rarr;
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "TheSlider",
  props: {
    slides: Array,
  },
  setup(props) {
    const currentSlideIndex = ref(0);

    const animate = (element, animation) => {
      const plainClassList = Array.prototype.slice.call(element.classList);
      const animationsToRemove = plainClassList.filter((className) =>
        className.includes("animate__")
      );
      console.log(animationsToRemove);

      element.classList.remove("hidden", ...animationsToRemove);
      element.classList.add("animate__animated", animation);
    };

    const getNextSlideIndex = () => {
      if (currentSlideIndex.value + 1 < props.slides.length) {
        return currentSlideIndex.value + 1;
      }
      return 0;
    };

    const getPreviousSlideIndex = () => {
      if (currentSlideIndex.value > 0) {
        return currentSlideIndex.value - 1;
      }
      return props.slides.length - 1;
    };

    const onNext = () => {
      const element = document.querySelector(
        `[data-index="${currentSlideIndex.value}"]`
      );
      animate(element, "animate__fadeOutLeft");

      const nextSlideIndex = getNextSlideIndex();

      const nextElement = document.querySelector(
        `[data-index="${nextSlideIndex}"]`
      );
      animate(nextElement, "animate__fadeInRight");

      currentSlideIndex.value = nextSlideIndex;
    };

    const onPrevious = () => {
      const element = document.querySelector(
        `[data-index="${currentSlideIndex.value}"]`
      );
      animate(element, "animate__fadeOutRight");

      const previousSlideIndex = getPreviousSlideIndex();

      const previousElement = document.querySelector(
        `[data-index="${previousSlideIndex}"]`
      );
      animate(previousElement, "animate__fadeInLeft");

      currentSlideIndex.value = previousSlideIndex;
    };

    onMounted(() => {
      props.slides.forEach((_, index) => {
        if (index !== currentSlideIndex.value) {
          const element = document.querySelector(`[data-index="${index}"]`);
          element.classList.add("hidden");
        }
      });
    });
    return {
      currentSlideIndex,
      onNext,
      onPrevious,
      animate,
      getNextSlideIndex,
      getPreviousSlideIndex,
    };
  },
};
</script>
