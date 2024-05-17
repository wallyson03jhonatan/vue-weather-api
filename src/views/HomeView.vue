<script setup lang="ts">
import { ref } from "vue";
import BaseLayout from "@/layout/BaseLayout.vue";

const isMobile = ref(window.innerWidth < 640 || false);

window.addEventListener("resize", () => {
  isMobile.value = window.innerWidth < 640 || false;
});

</script>

<template>
  <BaseLayout v-if="!isMobile" />
</template>
