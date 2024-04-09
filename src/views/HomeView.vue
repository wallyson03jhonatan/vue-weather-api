<script setup lang="ts">
import BaseAside from "@/components/BaseAside.vue";
import BaseHeader from "@/components/BaseHeader.vue";
import BaseImage from "@/components/BaseImage.vue";
import BaseWidget from "@/components/BaseWidget.vue";
import BaseLayout from "@/layout/BaseLayout.vue";

</script>

<template>
  <BaseLayout>
    <template #image>
      <base-image />
    </template>

    <template #header>
      <base-header />
    </template>

    <template #widget>
      <base-widget />
    </template>

    <template #aside>
      <base-aside />
    </template>
  </BaseLayout>
</template>
