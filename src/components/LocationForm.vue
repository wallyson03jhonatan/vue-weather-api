<script lang="ts" setup>
import { ref } from "vue";
import { Search } from "lucide-vue-next";
import { useWeatherStore } from '@/stores/weather';
import getGeoCoding from "@/services/getGeoCoding";
import getWeatherInfo from "@/services/getWeatherInfo";
import { useMobileStore } from "@/stores/mobile";

const store = useWeatherStore();
const mobileStore = useMobileStore();

const city = ref<string>('');
const error = ref<boolean>(false);

async function onSubmit() {
  const getCountry = await getGeoCoding({ city: city.value });

  if (getCountry.length === 0) {
    error.value = true;
    city.value = '';
    return;
  }

  const countryCode = getCountry[0].country;

  const weatherInfos = await getWeatherInfo({
    city: city.value,
    countryCode: countryCode,
  })

  if (weatherInfos.cod == 404) {
    error.value = true;
    city.value = '';
    return;
  }

  store.$patch((state: any) => {
    state.weatherStoreInfo = weatherInfos;
    localStorage.setItem('lastWeatherInfo', JSON.stringify(state.weatherStoreInfo));
  });

  store.$patch((state: any) => {
    state.moreLocations.pop();
    state.moreLocations.unshift(city.value);
    localStorage.setItem('lastCities', JSON.stringify(state.moreLocations));
  });
}
</script>

<template>
  <form v-if="mobileStore.$state.isMobile"
    class="relative w-4/5 p-1 flex justify-center items-center rounded-md glass-effect" @submit.prevent="onSubmit">
    <input type="text" class="w-full bg-transparent focus-visible:outline-none"
      :class="[error ? 'border-b border-b-red-800' : 'border-b-zinc-200']" placeholder="Outra cidade" minlength="3"
      maxlength="100" required v-model="city" @input="error = false" />

    <button type="submit" class="px-2 flex items-center justify-center" title="Pesquisar">
      <Search stroke-width="3" color="#e4e4e7" :size="16" />
    </button>

  </form>

  <form v-else class="relative w-full h-20" @submit.prevent="onSubmit">
    <input type="text" class="absolute left-12 w-2/3 bottom-0 bg-transparent border-b focus-visible:outline-none"
      :class="[error ? 'border-b-red-800' : 'border-b-zinc-200']" placeholder="Outra cidade" minlength="3"
      maxlength="100" required v-model="city" @input="error = false">

    <button type="submit" class="absolute right-0 top-0 h-20 lg:w-20 w-12 bg-zinc-800 flex items-center justify-center "
      title="Pesquisar">
      <Search stroke-width="2" color="#e4e4e7" :size="32" />
    </button>
  </form>

  <span class="absolute left-12 -bottom-6 text-sm text-red-700 font-semibold" v-if="error">Cidade não foi
    encontrada</span>

</template>
