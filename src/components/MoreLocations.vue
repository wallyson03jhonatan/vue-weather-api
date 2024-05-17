<script setup lang="ts">
import getGeoCoding from '@/services/getGeoCoding';
import getWeatherInfo from '@/services/getWeatherInfo';
import { useWeatherStore } from '@/stores/weather';

defineProps<{
  location: string
}>()

const store = useWeatherStore()

async function searchWeather(city: string) {
  const countryCode = await getGeoCoding({ city: city });
  const weatherInfos = await getWeatherInfo({
    city: city,
    countryCode: countryCode[0].country
  });

  store.$patch((state: any) => {
    state.weatherStoreInfo = weatherInfos;
    localStorage.setItem('lastWeatherInfo', JSON.stringify(state.weatherStoreInfo));
  });
}

</script>

<template>
  <div class="cursor-pointer py-4 hover:pl-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.75)] hover:scale-105 hover:rounded-sm" @click="searchWeather(location)">
    <span>{{ location }}</span>
  </div>
</template>
