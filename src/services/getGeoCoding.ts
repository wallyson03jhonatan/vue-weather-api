interface getGeoCodingInterface {
  city: string;
}

const appID = import.meta.env.VITE_API_KEY;

export default async function getGeoCoding({ city }: getGeoCodingInterface) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${appID}`
    )
      .then((response) => response.json())

    return response
  } catch (error) {
    console.error(error)
  }
}