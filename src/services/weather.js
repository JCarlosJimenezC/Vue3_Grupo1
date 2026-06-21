const BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

async function fetchWeather(params) {
  const query = new URLSearchParams({
    appid: API_KEY,
    units: 'metric',
    lang: 'es',
    ...params,
  })

  const response = await fetch(`${BASE_URL}?${query}`)

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    if (response.status === 404) {
      throw new Error('Ubicación no encontrada')
    }
    if (response.status === 401) {
      throw new Error('API key inválida')
    }
    throw new Error(errorData.message || 'Error al obtener datos del clima')
  }

  return response.json()
}

export async function fetchWeatherByCoords(lat, lon) {
  return fetchWeather({ lat, lon })
}

export async function fetchWeatherByCity(city) {
  return fetchWeather({ q: city })
}


const GEO_URL = import.meta.env.VITE_OPENWEATHER_GEO_URL

export async function fetchCitySuggestions(query) {
  if (!query || query.trim().length < 2) return []
  const params = new URLSearchParams({
    q: query.trim(),
    limit: 5,
    appid: API_KEY,
  })
  try {
    const response = await fetch(`${GEO_URL}?${params}`)
    if (!response.ok) return []
    return response.json()
  } catch {
    return []
  }
}