import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import getWeatherInfo from '@/services/getWeatherInfo';
import getGeoCodingByCoords from '@/services/getGeoCodingByCoords';

interface weatherInfoInterface {
  name: string;
  coord: {
    lat: string;
    lon: string;
  }
  main: {
    temp: string;
    humidity: string;
    feels_like: string;
  };
  weather: [{
    main: string;
    icon: string;
  }];
  wind: {
    speed: string;
  }
}

interface locationInfoInterface {
  country?: string,
  lat?: number,
  lon?: number,
  name?: string,
  state?: string,
}  

export const useWeatherStore = defineStore('weather', () => {
  const lastCities = localStorage.getItem('lastCities');
  const lastWeatherInfo = localStorage.getItem('lastWeatherInfo');
  
  const locationInfo = ref<null|locationInfoInterface>(null);
  const weatherStoreInfo = ref<null|weatherInfoInterface>(lastWeatherInfo ? JSON.parse(lastWeatherInfo) : null);
  const moreLocations = ref<string[]>(lastCities ? JSON.parse(lastCities) : ['Santos', 'Liverpool', 'Dortmund', 'Madrid']);

  
  onMounted(async () => {
    if (!lastWeatherInfo) {
      locationInfo.value = await getGeoCodingByCoords();
    
      if (locationInfo.value.name) {
        weatherStoreInfo.value = await getWeatherInfo({
          city: locationInfo.value.name,
          countryCode: locationInfo.value.country
        });
      } 
    } 
  });
  
  return { weatherStoreInfo, moreLocations }
})