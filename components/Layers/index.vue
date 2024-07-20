<script lang="ts" setup>
import { layers } from "~/composables/Layers/data";
import { logic } from "~/composables/Layers/logic";

onBeforeMount(() => {
  const { animate } = logic();
  animate();
});
</script>

<template>
  <div class="relative">
    <div
      class="overflow-hidden relative h-screen w-auto aspect-video min-w-[375px] max-w-[2140px] max-h-[1080px] mx-auto md:h-auto lg:w-screen lg:max-h-screen max-md:portrait:translate-x-[-300px]"
    >
      <picture
        v-for="(layer, i) of layers"
        :key="i"
        :data-speedx="layer.speedx"
        :data-speedy="layer.speedy"
        :data-speedz="layer.speedz"
        :data-distance="layer.distance"
        :data-delay="layer.delay"
        :data-duration="layer.duration"
        :class="layer.class"
        style="transition: 0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99)"
      >
        <source :srcset="layer.webp" type="image/webp" />
        <source :srcset="layer.png" type="image/png" />
        <img :src="layer.png" alt="" />
      </picture>
    </div>

    <div
      class="absolute top-0 z-[100] w-full h-full pointer-events-none hide opacity-0 min-w-[375px]"
      v-bind:style="{
        backgroundColor: 'transparent',
        background:
          'radial-gradient(circle, rgba(255,255,255,0) 60%, rgba(0,0,0,0.7) 100%)',
      }"
    />

    <div
      class="parallax text absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-center uppercase text-white max-w-full w-screen"
      data-speedx="0.01"
      data-speedy="0.035"
      style="transition: 0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99)"
    >
      <h2
        class="font-thin text-[2.3rem] leading-[0.88] md:text-[4.7rem] xl:text-[7rem] -translate-y-[200%] opacity-0"
      >
        China
      </h2>
      <h1
        class="font-extrabold text-[3rem] leading-[0.88] md:text-[5.8rem] xl:text-[9.5rem] translate-y-[100vh]"
      >
        Zhangjiajie
      </h1>
    </div>
  </div>
</template>
