<script setup lang="ts">
import { computed } from "vue";
import { useWeatherStore } from "@/stores/weather";
import { weatherInEnglish } from "@/composables/utils";
import LoadingCard from "@/layout/LoadingCard.vue";
import DateTime from "@/components/DateTime.vue";
import WidgetInfo from "@/components/WidgetInfo.vue";
import WeatherDetails from "@/components/WeatherDetails.vue";
import LocationForm from "@/components/LocationForm.vue";

const store = useWeatherStore();

const randomImages = weatherInEnglish();

const imageUrl = computed(() => {
  const randomImage = Math.floor(Math.random() * randomImages.length);
  return store.$state.weatherStoreInfo?.weather[0]?.main ? `/${store.$state.weatherStoreInfo?.weather[0]?.main.toLowerCase()}.jpeg` : `/${randomImages[randomImage]}.jpeg`;
})

const loading = computed(() => {
  return store.$state.weatherStoreInfo?.name ? false : true;
})

</script>

<template>
  <main class="relative flex flex-col max-w-6xl my-20 mx-auto shadow-effect fix-height">

    <template v-if="loading">
      <LoadingCard v-show="loading" />
    </template>

    <template v-else>

      <img :src="imageUrl" alt="Imagem do clima" class="h-full">

      <div
        class="absolute left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center justify-center w-full h-full">

        <LocationForm />

        <WidgetInfo />

        <div class="glass-effect p-4 w-4/5 rounded-md mt-8">
          <WeatherDetails />
        </div>

        <span class="text-white text-sm font-bold font-serif text-center mt-16">the.vue.weather</span>

      </div>
    </template>

  </main>
</template>
