<template>
  <div class="container">
    <div class="relative">
      <button class="bg-transparent rounded absolute z-20 left-0 top-1/2 ml-2 hover:bg-slate-300 hover:bg-opacity-30" @click="onPrevious">&#x276E;</button>
      <button class="bg-transparent rounded absolute z-20 right-0 top-1/2 mr-2 hover:bg-slate-300 hover:bg-opacity-30" @click="onNext">&#x276F;</button>
      <div
        v-for="(slide, index) in slides"
        :key="slide"
        :data-index="index"
        class="absolute z-10"
      >
        <img :src="slide" />
      </div>
      <img :src="slides[0]" class="opacity-0" />
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

    const animate = (element, animation, onAnimationEnd) => {
      const plainClassList = Array.prototype.slice.call(element.classList);
      const animationsToRemove = plainClassList.filter((className) =>
        className.includes("animate__")
      );
      element.classList.remove("hidden", ...animationsToRemove);
      element.classList.add("animate__animated", animation);

      if (onAnimationEnd) {
        element.addEventListener("animationend", onAnimationEnd, {
          once: true,
        });
      }
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
      animate(element, "animate__fadeOutLeft", () => {
        element.classList.add("hidden");
      });

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
      animate(element, "animate__fadeOutRight", () => {
        element.classList.add("hidden");
      });

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
