<template>
  <div class="weather-dashboard">
    <div class="weather-main-card">
      <header class="main-header">
        <div class="location">
          <svg class="pin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <h1 class="city-name">{{ weather.name }}</h1>
          <span class="country-code">{{ weather.sys.country }}</span>
        </div>
        <p class="date-time">{{ formattedDate }}</p>
      </header>

      <main class="main-content">
        <WeatherIcon :icon-name="iconName" :alt-text="conditionES" :size="120" />
        <div class="temp-section">
          <p class="condition">{{ conditionES }}</p>
          <span class="temperature">{{ Math.round(weather.main.temp) }}°</span>
          <p class="feels-like">Sensación {{ Math.round(weather.main.feels_like) }}°C</p>
        </div>
      </main>
    </div>

    <section class="weather-details">
      <div class="detail-card">
        <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
        </svg>
        <div class="detail-info">
          <span class="detail-value">{{ weather.main.humidity }}%</span>
          <span class="detail-label">Humedad</span>
        </div>
      </div>

      <div class="detail-card">
        <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
        </svg>
        <div class="detail-info">
          <span class="detail-value">{{ weather.wind.speed }} m/s</span>
          <span class="detail-label">Viento</span>
        </div>
      </div>

      <div class="detail-card">
        <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
        <div class="detail-info">
          <span class="detail-value">{{ weather.main.pressure }}</span>
          <span class="detail-label">Presión hPa</span>
        </div>
      </div>

      <div class="detail-card">
        <svg class="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        <div class="detail-info">
          <span class="detail-value">{{ visibility }}</span>
          <span class="detail-label">Visibilidad</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import WeatherIcon from './WeatherIcon.vue'

// defineProps: recibe datos reactivos desde el componente padre (App.vue)
const props = defineProps({
  weather: { type: Object, required: true },
  iconName: { type: String, required: true },
  conditionES: { type: String, required: true },
})

// Computed que formatea timestamp UNIX a fecha local en español (Costa Rica)
const formattedDate = computed(() => {
  const date = new Date(props.weather.dt * 1000)
  return date.toLocaleDateString('es-CR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  })
})

const visibility = computed(() => {
  const km = (props.weather.visibility / 1000).toFixed(1)
  return `${km} km`
})
</script>

<style scoped>
.weather-dashboard {
  display: flex;
  gap: var(--space-xl);
  align-items: flex-start;
  max-width: 720px;
  width: 100%;
  animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.weather-main-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding: var(--space-xl);
  flex: 1;
  min-width: 280px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-card);
  color: var(--bg-base);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.main-header {
  text-align: center;
}

.location {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
}

.pin-icon {
  width: 20px;
  height: 20px;
  color: var(--sun-accent-mid);
}

.city-name {
  font-family: var(--font-family-sans);
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  text-transform: capitalize;
}

.country-code {
  font-family: var(--font-family-sans);
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
}

.date-time {
  font-family: var(--font-family-sans);
  font-size: 14px;
  font-weight: 300;
  margin: var(--space-xs) 0 0;
  opacity: 0.7;
  text-transform: capitalize;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
}

.temp-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.condition {
  font-family: var(--font-family-sans);
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  text-transform: capitalize;
}

.temperature {
  font-family: var(--font-family-sans);
  font-size: 128px;
  font-weight: 300;
  line-height: 1;
  letter-spacing: -6px;
}

.feels-like {
  font-family: var(--font-family-sans);
  font-size: 14px;
  font-weight: 300;
  margin: var(--space-xs) 0 0;
  opacity: 0.7;
}

.weather-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  width: 200px;
  flex-shrink: 0;
}

.detail-card {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  color: var(--bg-base);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.detail-icon {
  width: 28px;
  height: 28px;
  color: var(--sun-accent-light);
  flex-shrink: 0;
}

.detail-info {
  display: flex;
  flex-direction: column;
}

.detail-value {
  font-family: var(--font-family-sans);
  font-size: 18px;
  font-weight: 500;
}

.detail-label {
  font-family: var(--font-family-sans);
  font-size: 12px;
  font-weight: 400;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .weather-dashboard {
    flex-direction: column;
    align-items: center;
    max-width: 400px;
  }

  .weather-details {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }

  .temperature {
    font-size: 96px;
    letter-spacing: -4px;
  }

  .city-name {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .weather-main-card {
    padding: var(--space-lg);
  }

  .temperature {
    font-size: 72px;
    letter-spacing: -2px;
  }

  .weather-details {
    grid-template-columns: 1fr;
  }
}
</style>
