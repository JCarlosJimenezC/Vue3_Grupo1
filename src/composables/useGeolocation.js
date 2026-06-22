import { ref, readonly } from 'vue'

// Coordenadas por defecto: San José, Costa Rica (fallback si se deniega la geolocalización)
const SAN_JOSE = { lat: 9.9281, lon: -84.0907 }

export function useGeolocation() {
  // Estado reactivo para las coordenadas y el estado de carga
  const lat = ref(null)
  const lon = ref(null)
  const loading = ref(true)
  const error = ref(null)

  function requestLocation() {
    loading.value = true
    error.value = null

    // Si el navegador no soporta Geolocation API, usar fallback inmediato
    if (!navigator.geolocation) {
      error.value = 'Geolocalización no soportada'
      lat.value = SAN_JOSE.lat
      lon.value = SAN_JOSE.lon
      loading.value = false
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        lat.value = position.coords.latitude
        lon.value = position.coords.longitude
        loading.value = false
      },
      (err) => {
        console.warn('Geolocalización denegada, usando San José, CR:', err.message)
        error.value = 'Ubicación no disponible, mostrando San José'
        lat.value = SAN_JOSE.lat
        lon.value = SAN_JOSE.lon
        loading.value = false
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    )
  }

  return { lat, lon, loading, error, requestLocation }
}
