<script setup lang="ts">
import { computed } from 'vue';
import { useWeatherStore } from '@/stores/weather';

const store = useWeatherStore();

const weatherDetails = computed(() => {
  return store.$state.weatherStoreInfo ? {
    'Sensação térmica': `${parseInt(store.$state.weatherStoreInfo.main.feels_like)}°`,
    Humidade: `${store.$state.weatherStoreInfo.main.humidity}%`,
    Vento: `${parseInt(store.$state.weatherStoreInfo.wind.speed) * 3.6}km/h`,
    Longitude: `${store.$state.weatherStoreInfo.coord.lon}`, 
    Latitude: `${store.$state.weatherStoreInfo.coord.lat}`
  } : {}
})
</script>

<template>
  <div v-for="info, key in weatherDetails" :key="key" class="flex justify-between">
    <span>{{ key }}</span>
    <span class="text-white">{{ info }}</span>
  </div>
</template>
