<script setup lang="ts">
import { useWeatherStore } from "@/stores/weather";
import LocationForm from "@/components/LocationForm.vue";
import MoreLocations from "@/components/MoreLocations.vue";
import WeatherDetails from "@/components/WeatherDetails.vue";

const store = useWeatherStore()

</script>

<template>
  <div class="absolute right-0 glass-effect h-full overflow-y-auto w-2/5">

    <div class="max-h-1/2">
      <LocationForm />

      <div class="pt-4 px-12 flex flex-col">
        <div class="flex flex-col">
          <MoreLocations v-for="location, index in store.$state.moreLocations" :key="index" :location="location" />
        </div>

        <span class="mt-2 border-b border-b-zinc-200" />
      </div>
    </div>

    <div class="max-h-1/2 overflow-auto">
      <div class="pt-8 px-12 flex flex-col">
        <span class="font-semibold text-zinc-200">Detalhes climáticos</span>

        <div class="pt-8 flex flex-col gap-6">
          <WeatherDetails />
        </div>
    
        <span class="mt-10 border-b border-b-zinc-200" />
      </div>
    </div>

  </div>
</template>
