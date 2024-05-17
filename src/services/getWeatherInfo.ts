interface getWeatherInfoInterface {
  city: string;
  countryCode?: string;
}

const appID = import.meta.env.VITE_API_KEY;

export default async function getWeatherInfo({ city, countryCode }: getWeatherInfoInterface) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&APPID=${appID}&units=metric`
    )
      .then((response) => response.json())

    return response
  } catch (error) {
    console.error(error)
  }
}


