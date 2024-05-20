import { ref } from 'vue'
import { defineStore } from 'pinia'
  
export const useMobileStore = defineStore('mobile', () => {
  
  const isMobile = ref<boolean>(window.innerWidth < 768 || false);

  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth < 768 || false;
  });
    
  return { isMobile }
})