import { ref, computed, readonly } from 'vue'
import { fetchWeatherByCoords } from '@/services/weather'
import { getVideoName, getIconName, getWeatherConditionES, getBgGradient } from '@/utils/weatherMappings'

export function useWeather() {
  const weather = ref(null)
  const loading = ref(false)
  const error = ref(null)

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

  const isNight = computed(() => {
    if (!weather.value) return false
    return weather.value.weather[0].icon.endsWith('n')
  })

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
  }
}
