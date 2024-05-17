const appID = import.meta.env.VITE_API_KEY;

interface Coordinates {
  lat?: number;
  lon?: number;
  name?: string;
  country?: string;
}

export default async function getGeoCodingByCoords(): Promise<Coordinates> {
  try {
    const coords = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          reject(error);
        }
      );
    });

    const { lat, lon }: any = await coords;
    
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${appID}`
    )
      .then((response) => response.json())
      
    return response[0]

  } catch (error) {    
    console.error(error);
    return {
      name: 'São Paulo',
      country: 'BR',
    }
  }
}
