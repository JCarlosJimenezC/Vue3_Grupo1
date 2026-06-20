<script setup>
import { computed, onMounted, watch } from 'vue'
import { useGeolocation } from '@/composables/useGeolocation'
import { useWeather } from '@/composables/useWeather'
import WeatherBackground from '@/components/WeatherBackground.vue'
import WeatherDisplay from '@/components/WeatherDisplay.vue'
import WeatherError from '@/components/WeatherError.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import CitySearch from '@/components/CitySearch.vue'

const { lat, lon, loading: geoLoading, requestLocation } = useGeolocation()
const {
  weather,
  loading: weatherLoading,
  error,
  videoName,
  iconName,
  conditionES,
  bgGradient,
  fetchWeather,
  fetchWeatherCity,
} = useWeather()

// Mostramos el spinner mientras se obtiene la ubicación O el clima
const isLoading = computed(() => geoLoading.value || weatherLoading.value)

onMounted(() => {
  requestLocation()
})

watch([lat, lon], ([newLat, newLon]) => {
  if (newLat !== null && newLon !== null) {
    fetchWeather(newLat, newLon)
  }
})

// Reintento: si ya tenemos coordenadas, reintenta el fetch;
// si no, vuelve a pedir la ubicación.
function handleRetry() {
  if (lat.value !== null && lon.value !== null) {
    fetchWeather(lat.value, lon.value)
  } else {
    requestLocation()
  }
}

function handleCitySearch(payload) {
  if (typeof payload === 'object' && payload !== null) {
    fetchWeather(payload.lat, payload.lon)
  } else {
    fetchWeatherCity(payload)
  }
}
</script>

<template>
  <div class="app-container">
    <WeatherBackground
      v-if="videoName"
      :video-name="videoName"
      :gradient="bgGradient"
    />

    <main class="app-main">
    <div class="app-content">
    <CitySearch @search="handleCitySearch" />

      <!-- #5: Manejo de errores -->
      <WeatherError
        v-if="error"
        :message="error"
        @retry="handleRetry"
      />

      <!-- #4: Estado de carga (versión mínima) -->
      <LoadingSpinner v-else-if="isLoading" />

      <!-- #2: Datos del clima -->
      <WeatherDisplay
        v-else-if="weather && iconName"
        :weather="weather"
        :icon-name="iconName"
        :condition-es="conditionES"
      />
      </div>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
}

.app-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.app-main {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: var(--space-lg);
}
</style>
