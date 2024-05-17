<script setup lang="ts">
import AsideInfo from "@/components/AsideInfo.vue";
import WidgetInfo from "@/components/WidgetInfo.vue";
</script>

<template>
  <main class="relative flex flex-col max-w-6xl my-20 mx-auto shadow-effect fix-height">

    <span class="absolute top-16 left-12 text-white text-sm font-bold font-serif z-10">the.vue.weather</span>

    <img src="/raining.jpeg" alt="Imagem do clima" class="h-full">

    <WidgetInfo />

    <AsideInfo />

  </main>
</template>
