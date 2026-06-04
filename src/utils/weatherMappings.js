const ASSET_BASE = 'src/assets'

const VIDEO_MAP = {
  clear_day: 'Despejado_Dia',
  clear_night: 'Despejado_Noche',
  few_clouds_day: 'Nublado_Dia',
  few_clouds_night: 'Nublado_Noche',
  scattered_clouds_day: 'Nublado_Dia',
  scattered_clouds_night: 'Nublado_Noche',
  broken_clouds: 'Nublado_Cerrado',
  overcast_clouds: 'Nublado_Cerrado',
  thunderstorm: 'Tormenta_Electrica',
  drizzle: 'Lluvia_Ligera',
  rain_day: 'Lluvia_Fuerte',
  rain_night: 'Lluvia_Noche',
  snow: 'Nieve',
  fog: 'Niebla',
  atmosphere: 'Niebla',
}

const ICON_MAP = {
  clear_day: 'Despejado_Dia',
  clear_night: 'Despejado_Dia',
  few_clouds_day: 'Nublado_Dia',
  few_clouds_night: 'Nublado_Noche',
  scattered_clouds_day: 'Nublado_Dia',
  scattered_clouds_night: 'Nublado_Noche',
  broken_clouds: 'Nublado_Cerrado',
  overcast_clouds: 'Nublado_Cerrado',
  thunderstorm: 'Tormenta_Electrica',
  drizzle: 'Lluvia_Ligera',
  rain_day: 'Lluvia_Fuerte',
  rain_night: 'Lluvia_Fuerte',
  snow: 'Nieve',
  fog: 'Nublado_Cerrado',
  atmosphere: 'Nublado_Cerrado',
}

function isNight(iconCode) {
  return iconCode.endsWith('n')
}

function getWeatherAssetKey(weatherCode, iconCode) {
  const night = isNight(iconCode)

  if (weatherCode >= 200 && weatherCode < 300) return 'thunderstorm'
  if (weatherCode >= 300 && weatherCode < 400) return 'drizzle'
  if (weatherCode >= 500 && weatherCode < 600) return night ? 'rain_night' : 'rain_day'
  if (weatherCode >= 600 && weatherCode < 700) return 'snow'
  if (weatherCode >= 700 && weatherCode < 800) return 'atmosphere'
  if (weatherCode === 800) return night ? 'clear_night' : 'clear_day'
  if (weatherCode === 801) return night ? 'few_clouds_night' : 'few_clouds_day'
  if (weatherCode === 802) return night ? 'scattered_clouds_night' : 'scattered_clouds_day'
  if (weatherCode === 803) return 'broken_clouds'
  if (weatherCode === 804) return 'overcast_clouds'

  return night ? 'clear_night' : 'clear_day'
}

export function getVideoName(weatherCode, iconCode) {
  const key = getWeatherAssetKey(weatherCode, iconCode)
  return VIDEO_MAP[key] || VIDEO_MAP.clear_day
}

export function getIconName(weatherCode, iconCode) {
  const key = getWeatherAssetKey(weatherCode, iconCode)
  return ICON_MAP[key] || ICON_MAP.clear_day
}

export function getWeatherConditionES(weatherCode) {
  if (weatherCode >= 200 && weatherCode < 300) return 'Tormenta eléctrica'
  if (weatherCode >= 300 && weatherCode < 400) return 'Llovizna'
  if (weatherCode >= 500 && weatherCode < 600) return 'Lluvia'
  if (weatherCode >= 600 && weatherCode < 700) return 'Nieve'
  if (weatherCode >= 700 && weatherCode < 800) return 'Niebla'
  if (weatherCode === 800) return 'Despejado'
  if (weatherCode === 801) return 'Poco nuboso'
  if (weatherCode === 802) return 'Parcialmente nublado'
  if (weatherCode === 803) return 'Nublado'
  if (weatherCode === 804) return 'Cubierto'
  return 'Despejado'
}

export function getBgGradient(weatherCode, iconCode) {
  const night = isNight(iconCode)
  if (night) return 'linear-gradient(135deg, rgba(4, 73, 108, 0.35), rgba(0, 4, 30, 0.45))'
  if (weatherCode === 800) return 'linear-gradient(135deg, rgba(34, 134, 186, 0.15), rgba(251, 216, 86, 0.08))'
  if (weatherCode >= 200 && weatherCode < 300) return 'linear-gradient(135deg, rgba(4, 73, 108, 0.3), rgba(0, 4, 30, 0.35))'
  if (weatherCode >= 500 && weatherCode < 600) return 'linear-gradient(135deg, rgba(4, 73, 108, 0.25), rgba(34, 134, 186, 0.15))'
  if (weatherCode >= 600 && weatherCode < 700) return 'linear-gradient(135deg, rgba(239, 239, 240, 0.2), rgba(34, 134, 186, 0.1))'
  return 'linear-gradient(135deg, rgba(172, 173, 178, 0.2), rgba(34, 134, 186, 0.1))'
}
