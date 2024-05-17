<script setup lang="ts">
import { ref, computed } from "vue";
import { useDateTime } from "@/composables/utils";

interface dateTimeInterface {
  day?: string;
  time?: string;
  date?: string;
}

const dateTime = ref<dateTimeInterface>({});
const { value } = useDateTime();
dateTime.value = value;

setInterval(() => {
  const newHours = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours(); 
  const newMinutes = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
  dateTime.value.time = `${newHours}:${newMinutes}`  
}, 60000)

const time = computed(() => dateTime.value.time);
const day = computed(() => dateTime.value.day);
const date = computed(() => dateTime.value.date);

</script>

<template>
  <span class="text-sm text-white">{{ time }} - {{ day }}, {{ date }}</span>
</template>