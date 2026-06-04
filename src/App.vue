<script setup>
import { onMounted, watch } from 'vue'
import { useGeolocation } from '@/composables/useGeolocation'
import { useWeather } from '@/composables/useWeather'
import WeatherBackground from '@/components/WeatherBackground.vue'
import WeatherDisplay from '@/components/WeatherDisplay.vue'

const { lat, lon, requestLocation } = useGeolocation()
const {
  weather,
  videoName,
  iconName,
  conditionES,
  bgGradient,
  fetchWeather,
} = useWeather()

onMounted(() => {
  requestLocation()
})

watch([lat, lon], ([newLat, newLon]) => {
  if (newLat !== null && newLon !== null) {
    fetchWeather(newLat, newLon)
  }
})
</script>

<template>
  <div class="app-container">
    <WeatherBackground
      v-if="videoName"
      :video-name="videoName"
      :gradient="bgGradient"
    />

    <main class="app-main">
      <WeatherDisplay
        v-if="weather && iconName"
        :weather="weather"
        :icon-name="iconName"
        :condition-es="conditionES"
      />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
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
