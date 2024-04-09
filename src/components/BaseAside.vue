<script setup lang="ts">
import { onMounted, ref } from "vue";
import getWeatherInfo from "../services/getWeatherInfo";

const weatherInfo = ref(null);

onMounted(async () => {
  weatherInfo.value = await getWeatherInfo();
});

</script>

<template>
  <div class="absolute right-0 glass-effect h-full w-1/3">
    <h3>Sou o BaseAside</h3>
    <div class="relative">
      <pre class="h-full">{{ weatherInfo }}</pre>
    </div>
  </div>
</template>
