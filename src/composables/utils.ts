import { computed, ref } from 'vue'

export function useDateTime() {
  
  const weekDays = [
    'Domingo',
    'Segunda feira',
    'Terça feira',
    'Quarta feira',
    'Quinta feira',
    'Sexta feira',
    'Sábado'
  ]
  const yearMonths = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  const dateTime = new Date();
  const hours = dateTime.getHours() < 10 ? "0" + dateTime.getHours() : dateTime.getHours();
  const minutes = dateTime.getMinutes() < 10 ? "0" + dateTime.getMinutes() : dateTime.getMinutes();
  const dayNumber = dateTime.getDate();
  const dayName = weekDays[dateTime.getDay()];
  const month = yearMonths[dateTime.getMonth()];
  const year = dateTime.getFullYear().toString().slice(-2);
   
  const formatedDateTime = computed(() => {    
    return {
      time: `${hours}:${minutes}`,
      day: dayName,
      date: `${dayNumber} ${month} ${year}`
    }
  })

  return formatedDateTime
}

export const weatherInEnglish = () => [
  'atmosphere',
  'clear',
  'clouds',
  'drizzle',
  'rain',
  'snow',
  'thunderstorm',
]