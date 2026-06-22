<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useGeolocation } from '@/composables/useGeolocation'
import { useWeather } from '@/composables/useWeather'
import { useSearchHistory } from '@/composables/useSearchHistory'
import WeatherBackground from '@/components/WeatherBackground.vue'
import WeatherDisplay from '@/components/WeatherDisplay.vue'
import WeatherError from '@/components/WeatherError.vue'
import WeatherSkeleton from '@/components/WeatherSkeleton.vue'
import CitySearch from '@/components/CitySearch.vue'
import SearchHistory from '@/components/SearchHistory.vue'

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

const { history, addToHistory } = useSearchHistory()
const citySearchRef = ref(null)

const isLoading = computed(() => geoLoading.value || weatherLoading.value)

onMounted(() => {
  requestLocation()
})

watch([lat, lon], ([newLat, newLon]) => {
  if (newLat !== null && newLon !== null) {
    fetchWeather(newLat, newLon)
  }
})

// Cada vez que llegan datos nuevos, guardamos la ciudad en el historial
watch(weather, (newWeather) => {
  if (newWeather) {
    addToHistory({
      label: `${newWeather.name}, ${newWeather.sys.country}`,
      lat: newWeather.coord.lat,
      lon: newWeather.coord.lon,
    })
  }
})

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

function handleHistorySelect(payload) {
  citySearchRef.value?.clear()
  handleCitySearch(payload)
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
    <template v-if="!isLoading && !error">
      <CitySearch ref="citySearchRef" @search="handleCitySearch" />
      <SearchHistory :history="history" @select="handleHistorySelect" />
    </template>

      <!-- #5: Manejo de errores -->
      <WeatherError
        v-if="error"
        :message="error"
        @retry="handleRetry"
      />

      <!-- #4: Estado de carga (skeleton) -->
      <WeatherSkeleton v-else-if="isLoading" />

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
