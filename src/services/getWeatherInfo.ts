// const api = {
//   key: "",
//   base_url: "",
//   lang: "",
//   units: "",
//   mode: "",
//   lat: "",
//   long: "",
// }

export default async function getWeatherInfo() {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=98600db9d000e125791110f5a36c7106'
    )
      .then((response) => response.json())

    return response
    
  } catch (error) {
    console.error(error)
  }
}

/* Docs = {
  https://openweathermap.org/current#one
  Current weather data: https://openweathermap.org/current#one
  https://openweathermap.org/api/geocoding-api
*/
