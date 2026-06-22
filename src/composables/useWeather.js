import { ref, computed } from 'vue'
import { fetchWeatherByCoords, fetchWeatherByCity  } from '@/services/weather'
import { getVideoName, getIconName, getWeatherConditionES, getBgGradient } from '@/utils/weatherMappings'

export function useWeather() {
  // Estado reactivo del clima usando refs de Vue
  const weather = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // Propiedades computadas que derivan assets visuales desde el código OWM
  // Se recalculan automáticamente cuando weather.value cambia
  const videoName = computed(() => {
    if (!weather.value) return null
    return getVideoName(weather.value.weather[0].id, weather.value.weather[0].icon)
  })

  const iconName = computed(() => {
    if (!weather.value) return null
    return getIconName(weather.value.weather[0].id, weather.value.weather[0].icon)
  })

  const conditionES = computed(() => {
    if (!weather.value) return ''
    return getWeatherConditionES(weather.value.weather[0].id)
  })

  const bgGradient = computed(() => {
    if (!weather.value) return ''
    return getBgGradient(weather.value.weather[0].id, weather.value.weather[0].icon)
  })

  // Detecta si es de noche por el sufijo del icono de OWM ('d' = día, 'n' = noche)
  const isNight = computed(() => {
    if (!weather.value) return false
    return weather.value.weather[0].icon.endsWith('n')
  })

  
  // Busca clima por coordenadas geográficas usando async/await con manejo de errores
  async function fetchWeather(lat, lon) {
    loading.value = true
    error.value = null
    weather.value = null

    try {
      weather.value = await fetchWeatherByCoords(lat, lon)
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  // Busca clima por nombre de ciudad (string)
   async function fetchWeatherCity(city) {
    loading.value = true
    error.value = null
    weather.value = null
    try {
      weather.value = await fetchWeatherByCity(city)
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    weather,
    loading,
    error,
    videoName,
    iconName,
    conditionES,
    bgGradient,
    isNight,
    fetchWeather,
    fetchWeatherCity,
  }
}
