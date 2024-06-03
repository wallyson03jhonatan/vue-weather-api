<script setup lang="ts">
import { computed } from "vue";
import { useMobileStore } from "@/stores/mobile";
import { useWeatherStore } from "@/stores/weather";
import { weatherInEnglish } from "@/composables/utils";

import DateTime from "@/components/DateTime.vue";

const store = useWeatherStore();
const mobileStore = useMobileStore();

const weatherInEn = weatherInEnglish();
const weatherInBR = [
  'Atmosferico',
  'Limpo',
  'Nublado',
  'Chuviscos',
  'Chuvoso',
  'Nevando',
  'Tempestade'
]

const city = computed(() => {
  return store.$state.weatherStoreInfo?.name ? store.$state.weatherStoreInfo.name : ''
})

const temperature = computed(() => {
  return store.$state.weatherStoreInfo?.main?.temp ? parseInt(store.$state.weatherStoreInfo.main.temp) : false
})

const weather = computed(() => {
  const index = store.$state.weatherStoreInfo?.weather[0]?.main ? weatherInEn.indexOf(store.$state.weatherStoreInfo?.weather[0]?.main.toLowerCase()) : -1;
  return index !== -1 ? weatherInBR[index] : ''
})

const icon = computed(() => {
  const iconTag = store.$state.weatherStoreInfo?.weather[0]?.icon ? store.$state.weatherStoreInfo?.weather[0]?.icon : '50d';
  return `https://openweathermap.org/img/wn/${iconTag}@2x.png`
});

</script>

<template>
  <div v-if="mobileStore.$state.isMobile" class="relative flex flex-col sm:mt-8 mt-4 items-center justify-center">

    <span class="sm:text-2xl text-xl text-white font-semibold">{{ city }}</span>

    <div class="mt-4 flex items-end">
      <span class="text-5xl sm:text-7xl text-white font-semibold" v-show="temperature">
        {{ temperature }}
      </span>
      <span class="text-3xl sm:text-5xl text-white font-thin">°C</span>
    </div>

    <span class="mt-2 text-base sm:text-lg text-white font-semibold">{{ weather }}</span>
    <DateTime />

  </div>

  <div v-else class="absolute bottom-16 left-12">
    <div class="flex items-end gap-4">
      <span class="lg:text-7xl text-5xl text-white font-semibold" v-show="temperature">{{ temperature }}°</span>

      <div class="flex flex-col">
        <span class="lg:text-4xl text-2xl text-white">{{ city }}</span>
        <DateTime />
      </div>

      <div class="relative flex flex-col items-center">
        <img :src="icon" alt="Icon" class="absolute -bottom-1.5">
        <span class="text-sm text-white">{{ weather }}</span>
      </div>
    </div>
  </div>
</template>
