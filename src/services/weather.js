const BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

if (!BASE_URL || !API_KEY) {
  console.error(
    '%c❌ ClimaVue: Configuraci\u00f3n incompleta.\n' +
    'Crea el archivo .env a partir de .env.example y agrega tu API key de OpenWeatherMap.\n' +
    '  cp .env.example .env',
    'color: #ff6b6b; font-weight: bold; font-size: 14px;'
  )
}

// Petición genérica al API de OpenWeatherMap usando URLSearchParams para la query string
async function fetchWeather(params) {
  if (!BASE_URL || !API_KEY) {
    throw new Error(
      'Configuraci\u00f3n incompleta: crea el archivo .env con tu API key de OpenWeatherMap.'
    )
  }

  const query = new URLSearchParams({
    appid: API_KEY,
    units: 'metric',
    lang: 'es',
    ...params,
  })

  const response = await fetch(`${BASE_URL}?${query}`)

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    // Errores HTTP comunes: 404 ciudad no encontrada, 401 API key inválida
    if (response.status === 404) {
      throw new Error('Ubicación no encontrada')
    }
    if (response.status === 401) {
      throw new Error('API key inválida')
    }
    throw new Error(errorData.message || 'Error al obtener datos del clima')
  }

  const text = await response.text()
  try {
    return JSON.parse(text)
  } catch {
    throw new Error(
      'La API del clima no est\u00e1 disponible. ' +
      'Verifica que el archivo .env exista y tenga una API key v\u00e1lida de OpenWeatherMap.'
    )
  }
}

export async function fetchWeatherByCoords(lat, lon) {
  return fetchWeather({ lat, lon })
}

export async function fetchWeatherByCity(city) {
  return fetchWeather({ q: city })
}


const GEO_URL = import.meta.env.VITE_OPENWEATHER_GEO_URL

// Autocomplete de ciudades usando el Geocoding API de OpenWeatherMap
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
    const text = await response.text()
    try {
      return JSON.parse(text)
    } catch {
      return []
    }
  } catch {
    return []
  }
}