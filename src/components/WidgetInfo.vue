<script setup lang="ts">
import { computed } from "vue";
import { useWeatherStore } from "@/stores/weather";
import DateTime from "@/components/DateTime.vue";

const store = useWeatherStore(); 

const city = computed(() => {
  return store.$state.weatherStoreInfo?.name ? store.$state.weatherStoreInfo.name : ''
})

const temperature = computed(() => {
  return store.$state.weatherStoreInfo?.main?.temp ? parseInt(store.$state.weatherStoreInfo.main.temp) : false
})

const weather = computed(() => {
  return store.$state.weatherStoreInfo?.weather[0]?.main ? store.$state.weatherStoreInfo.weather[0].main : ''
})

const icon = computed(() => {
  const iconTag = store.$state.weatherStoreInfo?.weather[0]?.icon ? store.$state.weatherStoreInfo?.weather[0]?.icon : '50d';
  return `https://openweathermap.org/img/wn/${iconTag}@2x.png`
});  

</script>

<template>
  <div class="absolute bottom-16 left-12">
    <div class="flex items-end gap-4">
      <span class="text-7xl text-white font-semibold" v-show="temperature">{{ temperature }}°</span>

      <div class="flex flex-col">
        <span class="text-4xl text-white">{{ city }}</span>
        <DateTime />
      </div>

      <div class="flex flex-col">
        <img :src="icon" alt="Icon" height="100" width="100" class="absolute -right-8 -bottom-2">
        <span class="text-sm text-white">{{ weather }}</span>
      </div>
    </div>
  </div>
</template>
