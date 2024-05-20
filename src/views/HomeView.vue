<script setup lang="ts">
import BaseLayout from "@/layout/BaseLayout.vue";
import MobileLayout from "@/layout/MobileLayout.vue";
import { useMobileStore } from "@/stores/mobile";

const store = useMobileStore();

</script>

<template>
  <BaseLayout v-if="!store.$state.isMobile" />
  <MobileLayout v-else />
</template>
