<script setup lang="ts">
import { computed } from "vue";
import { useWeatherStore } from "@/stores/weather";
import AsideInfo from "@/components/AsideInfo.vue";
import WidgetInfo from "@/components/WidgetInfo.vue";
import { weatherInEnglish } from "@/composables/utils";

const store = useWeatherStore();

const randomImages = weatherInEnglish();

const imageUrl = computed(() => {
  const randomImage = Math.floor(Math.random() * randomImages.length);
  return store.$state.weatherStoreInfo?.weather[0]?.main ? `/${store.$state.weatherStoreInfo?.weather[0]?.main.toLowerCase()}.jpeg` : `/${randomImages[randomImage]}.jpeg`;
})

</script>

<template>
  <main class="relative flex flex-col max-w-6xl my-20 mx-auto shadow-effect fix-height">

    <span class="absolute top-16 left-12 text-white text-sm font-bold font-serif z-10">the.vue.weather</span>

    <img :src="imageUrl" alt="Imagem do clima" class="h-full">

    <WidgetInfo />

    <AsideInfo />

  </main>
</template>
