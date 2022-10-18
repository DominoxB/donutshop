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
      <button class="bg-slate-500 rounded font-bold">
        &larr;
      </button>
      <button class="bg-slate-500 rounded font-bold"
      @click="onNext">
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
      element.classList.remove('hidden')
      element.classList.add('animate__animated', animation)
    }

    const onNext = () => {
      const element = document.querySelector(`[data-index="${currentSlideIndex.value}"]`)
      animate(element, 'animate__fadeOutLeft')

      const nextElementIndex = currentSlideIndex.value + 1

      const nextElement = document.querySelector(`[data-index="${nextElementIndex}"]`)
      animate(nextElement, 'animate__fadeInRight')

      currentSlideIndex.value = nextElementIndex
      
    } 

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
      animate,
    };
  },
};
</script>
