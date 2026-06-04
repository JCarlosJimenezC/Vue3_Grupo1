# 🎨 Design System & Tokens

Este documento define las variables de diseño (Design Tokens) extraídas de Figma. Estos valores deben utilizarse como única fuente de verdad para mantener la consistencia visual en toda la aplicación.

## 1. Paleta de Colores (Colors)

Los colores están definidos en formato RGB para facilitar su uso con variables de opacidad si es necesario.

| Nombre Propuesto | Valor RGB | Uso Recomendado (Basado en el layout) |
| :--- | :--- | :--- |
| **Background Base** | `rgb(255, 255, 255)` | Fondos principales, tarjetas blancas, textos claros. |
| **Brand Primary** | `rgb(34, 134, 186)` | Color principal de las tarjetas meteorológicas. |
| **Brand Dark** | `rgb(4, 73, 108)` | Detalles oscuros, bordes o contrastes sobre el azul. |
| **Brand Accent** | `rgb(47, 136, 255)` | Elementos interactivos o gráficos (barómetros). |
| **Sun Accent Light** | `rgb(255, 241, 118)` | Detalles iluminados (sol, clima). |
| **Sun Accent Mid** | `rgb(251, 216, 86)` | Detalles intermedios (sol, clima). |
| **Sun Accent Dark** | `rgb(246, 179, 56)` | Detalles oscuros (sol, clima). |
| **Text Main** | `rgb(0, 4, 30)` | Texto principal oscuro para máxima legibilidad. |
| **Gray 100** | `rgb(239, 239, 240)` | Fondos neutros secundarios. |
| **Gray 200** | `rgb(231, 232, 238)` | Divisores y líneas sutiles. |
| **Gray 300** | `rgb(216, 217, 218)` | Iconos inactivos o texto secundario claro. |
| **Gray 400** | `rgb(172, 173, 178)` | Texto terciario o placeholders. |

## 2. Tipografía (Typography)

Toda la aplicación utiliza una única familia tipográfica.

* **Font Family:** `Inter`, sans-serif.
* **Importación:** Google Fonts en `src/assets/base.css` con pesos 300, 400, 500, 600, 700.

### Tamaños de Fuente (Font Sizes)
| Uso | Tamaño | Peso | Dónde se usa |
| :--- | :--- | :--- | :--- |
| **Micro** | `8px` | — | Leyendas pequeñas o datos secundarios |
| **Tiny** | `12px` / `14px` | 300 / 400 | Etiquetas (detail-label), fecha, sensación térmica |
| **Base** | `16px` / `17px` / `18px` | 400 / 500 | Valores de detalles (detail-value) |
| **Medium** | `24px` | 500 / 600 | Nombre de ciudad, condición del clima |
| **Large** | `40px` / `48px` | — | Estados del clima (reservado para forecast) |
| **Display** | `128px` | 300 (Light) | Temperatura principal (hero text). Se reduce a 96px en tablet y 72px en mobile |

### Pesos Tipográficos (Font Weights)
| Peso | Valor | Uso |
| :--- | :--- | :--- |
| **Light** | `300` | Fechas, sensación térmica, temperatura principal |
| **Regular** | `400` | Labels de detalles, cuerpo base |
| **Medium** | `500` | Condición del clima, valores de detalles |
| **SemiBold** | `600` | Nombre de ciudad |

## 3. Espaciado y Layout (Spacing & Radii)

El diseño utiliza un sistema de espaciado definido para mantener la proporción entre las tarjetas y el contenido.

**Márgenes y Paddings:**
* `4px` (gap entre ícono y texto en ubicación)
* `8px` (gap entre detalle cards)
* `10px` (—)
* `15px` (gap interno en detalle cards, gap entre secciones en card principal)
* `20px` (padding interno de tarjetas en mobile)

**Gaps (Espaciado en Flexbox/Grid):**
* `15px` (gap entre elementos en weather-main-card)
* `30px` (gap entre card principal y panel de detalles en dashboard desktop)

**Bordes (Border Radius):**
* `40px` (Radio principal para tarjetas grandes: card principal)
* `20px` (Radio para tarjetas pequeñas de detalles)

## 4. Variables CSS Implementadas

Declaradas en `src/assets/base.css` y disponibles globalmente:

```css
:root {
  /* Colors */
  --bg-base: rgb(255, 255, 255);
  --brand-primary: rgb(34, 134, 186);
  --brand-dark: rgb(4, 73, 108);
  --brand-accent: rgb(47, 136, 255);
  --sun-accent-light: rgb(255, 241, 118);
  --sun-accent-mid: rgb(251, 216, 86);
  --sun-accent-dark: rgb(246, 179, 56);
  --text-main: rgb(0, 4, 30);
  --gray-100: rgb(239, 239, 240);
  --gray-200: rgb(231, 232, 238);
  --gray-300: rgb(216, 217, 218);
  --gray-400: rgb(172, 173, 178);

  /* Fonts */
  --font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 15px;
  --space-lg: 20px;
  --space-xl: 30px;

  /* Radii */
  --radius-card: 40px;
}
```

## 5. Glassmorphism

Todas las tarjetas usan el efecto glassmorphism. Especificación:

```css
.glass-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-card);
  color: var(--bg-base);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}
```

**Reglas:**
- `background` siempre con opacidad entre 10-15% blanco
- `backdrop-filter: blur(24px)` con prefijo `-webkit-` para Safari
- `border: 1px solid rgba(255, 255, 255, 0.2)` para dar borde sutil
- `box-shadow` para profundidad (0 8px 32px en cards grandes, 0 4px 16px en cards pequeñas)
- Texto en blanco (`--bg-base`) para contraste sobre fondos oscuros

## 6. Assets de Video

Ubicados en `src/assets/videos/` (formato `.webm`).

| Condición Climática | Archivo | Tamaño aprox |
| :--- | :--- | :--- |
| Despejado Día | `Despejado_Dia.webm` | 2.0 MB |
| Despejado Noche | `Despejado_Noche.webm` | 2.5 MB |
| Poco Nublado Día | `Nublado_Dia.webm` | 2.9 MB |
| Poco Nublado Noche | `Nublado_Noche.webm` | 1.6 MB |
| Nublado/Cubierto | `Nublado_Cerrado.webm` | 2.3 MB |
| Lluvia Ligera | `Lluvia_Ligera.webm` | 2.3 MB |
| Lluvia Fuerte | `Lluvia_Fuerte.webm` | 3.0 MB |
| Lluvia Nocturna | `Lluvia_Noche.webm` | 2.9 MB |
| Tormenta Eléctrica | `Tormenta_Electrica.webm` | 2.3 MB |
| Nieve | `Nieve.webm` | 2.4 MB |
| Niebla/Atmósfera | `Niebla.webm` | 5.5 MB |

Los videos se muestran con `object-fit: cover`, `autoplay`, `muted`, `loop`, `playsinline`. Transición con animación `fadeIn` de 0.8s al cambiar de condición.

## 7. Assets de Íconos

Ubicados en `src/assets/` (formato `.webp`).

| Condición Climática | Archivo | Tamaño |
| :--- | :--- | :--- |
| Despejado Día/Noche | `Despejado_Dia.webp` | 16 KB |
| Poco Nublado Día | `Nublado_Dia.webp` | 25 KB |
| Poco Nublado Noche | `Nublado_Noche.webp` | 25 KB |
| Nublado/Cubierto | `Nublado_Cerrado.webp` | 25 KB |
| Lluvia Ligera | `Lluvia_Ligera.webp` | 25 KB |
| Lluvia Fuerte | `Lluvia_Fuerte.webp` | 27 KB |
| Tormenta Eléctrica | `Tormenta_Electrica.webp` | 29 KB |
| Nieve | `Nieve.webp` | 20 KB |
| Temperatura Alta | `Temperatura_Alta.webp` | 21 KB |
| Temperatura Baja | `Temperatura_Baja.webp` | 25 KB |

Los íconos se importan dinámicamente via `new URL(..., import.meta.url).href` y se renderizan con `filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15))`.

## 8. Mapeo de Condiciones Climáticas

El mapeo de códigos de OpenWeatherMap a los assets locales se realiza en `src/utils/weatherMappings.js`.

| Código OWM | Condición ES | Video | Ícono .webp |
| :--- | :--- | :--- | :--- |
| 200-299 | Tormenta eléctrica | `Tormenta_Electrica` | `Tormenta_Electrica` |
| 300-399 | Llovizna | `Lluvia_Ligera` | `Lluvia_Ligera` |
| 500-531 día (`d`) | Lluvia | `Lluvia_Fuerte` | `Lluvia_Fuerte` |
| 500-531 noche (`n`) | Lluvia nocturna | `Lluvia_Noche` | `Lluvia_Fuerte` |
| 600-699 | Nieve | `Nieve` | `Nieve` |
| 701-799 | Niebla/Atmósfera | `Niebla` | `Nublado_Cerrado` |
| 800 día (`d`) | Despejado | `Despejado_Dia` | `Despejado_Dia` |
| 800 noche (`n`) | Despejado nocturno | `Despejado_Noche` | `Despejado_Dia` |
| 801 día (`d`) | Poco nuboso | `Nublado_Dia` | `Nublado_Dia` |
| 801 noche (`n`) | Poco nuboso noche | `Nublado_Noche` | `Nublado_Noche` |
| 802 día (`d`) | Parcialmente nublado | `Nublado_Dia` | `Nublado_Dia` |
| 802 noche (`n`) | Parcialmente nublado noche | `Nublado_Noche` | `Nublado_Noche` |
| 803 | Nublado | `Nublado_Cerrado` | `Nublado_Cerrado` |
| 804 | Cubierto | `Nublado_Cerrado` | `Nublado_Cerrado` |

Determinación día/noche: el sufijo del `icon` code de la API (`d` = day, `n` = night).

## 9. Estructura de Componentes

```
src/
├── App.vue                         # Layout raíz: background video + weather display
├── main.js                         # Entry point, mount de App
├── assets/
│   ├── base.css                    # Variables CSS (tokens) + reset global
│   ├── main.css                    # Layout base (importa base.css)
│   ├── videos/                     # 11 videos .webm de fondo
│   ├── Despejado_Dia.webp          # 10 imágenes .webp de íconos
│   └── ...
├── components/
│   ├── WeatherBackground.vue       # Video fullscreen + overlay gradiente
│   ├── WeatherDisplay.vue          # Dashboard: card principal + detalle cards
│   └── WeatherIcon.vue             # Ícono climático dinámico
├── composables/
│   ├── useGeolocation.js           # Geolocalización del navegador
│   └── useWeather.js               # Estado del clima + mapeo de assets
├── services/
│   └── weather.js                  # Fetch a OpenWeatherMap API
└── utils/
    └── weatherMappings.js          # Mapeo códigos OWM → assets
```

### Descripción de componentes

| Componente | Props | Propósito |
| :--- | :--- | :--- |
| `WeatherBackground` | `videoName`, `gradient` | Video `.webm` fullscreen con overlay de gradiente |
| `WeatherDisplay` | `weather`, `iconName`, `conditionES` | Dashboard con temperatura grande (128px), ubicación, fecha y grid de detalles |
| `WeatherIcon` | `iconName`, `altText`, `size` | Imagen dinámica `.webp` con drop-shadow |

### Pendientes (a cargo de otros compañeros)
- `LoadingSpinner` / estado de carga (funcionalidad #4)
- `WeatherError` / manejo de errores (funcionalidad #5)
- Historial de búsquedas (funcionalidad #3 + #6)
- Buscador de ciudades (funcionalidad #1)

## 10. Composables Disponibles

### `useGeolocation()`

```js
import { useGeolocation } from '@/composables/useGeolocation'
const { lat, lon, loading, error, requestLocation } = useGeolocation()
```

| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `lat` | `ref<number\|null>` | Latitud de la ubicación |
| `lon` | `ref<number\|null>` | Longitud de la ubicación |
| `loading` | `ref<boolean>` | `true` mientras se obtiene la ubicación |
| `error` | `ref<string\|null>` | Mensaje de error si la geolocalización falla |
| `requestLocation()` | function | Solicita permiso de ubicación al navegador |

**Comportamiento:** Si el usuario deniega el permiso o la geolocalización falla, usa como fallback San José, Costa Rica (9.9281, -84.0907).

### `useWeather()`

```js
import { useWeather } from '@/composables/useWeather'
const {
  weather, loading, error,
  videoName, iconName, conditionES, bgGradient, isNight,
  fetchWeather
} = useWeather()
```

| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `weather` | `ref<object\|null>` | Respuesta completa de la API de OpenWeatherMap |
| `loading` | `ref<boolean>` | `true` mientras se obtienen datos del clima |
| `error` | `ref<string\|null>` | Mensaje de error si la API falla |
| `videoName` | `computed<string\|null>` | Nombre del video correspondiente (sin extensión) |
| `iconName` | `computed<string\|null>` | Nombre del ícono .webp correspondiente (sin extensión) |
| `conditionES` | `computed<string>` | Condición climática en español |
| `bgGradient` | `computed<string>` | Gradiente CSS para el overlay del fondo |
| `isNight` | `computed<boolean>` | `true` si es de noche según el icon code |
| `fetchWeather(lat, lon)` | async function | Obtiene datos del clima para las coordenadas dadas |

## 11. Servicio API

Endpoints definidos en `src/services/weather.js`.

**Endpoint base:** `https://api.openweathermap.org/data/2.5/weather`

**Parámetros:**
| Parámetro | Valor | Descripción |
| :--- | :--- | :--- |
| `appid` | `VITE_OPENWEATHER_API_KEY` | API Key desde variable de entorno |
| `units` | `metric` | Temperatura en Celsius, viento en m/s |
| `lang` | `es` | Descripciones en español |
| `lat` / `lon` | — | Coordenadas de la ubicación |

**Funciones exportadas:**
- `fetchWeatherByCoords(lat, lon)` → obtiene clima por coordenadas
- `fetchWeatherByCity(city)` → obtiene clima por nombre de ciudad (para funcionalidad #1)

**Manejo de errores:**
- 404 → "Ubicación no encontrada"
- 401 → "API key inválida"
- Otros → mensaje del error desde la API o genérico

**Variable de entorno requerida:**
```
VITE_OPENWEATHER_API_KEY=tu_api_key_aqui
```
Crear archivo `.env` en la raíz del proyecto (no incluido en el repositorio). Ver `.env.example` como referencia.

## 12. Layout Responsive

### Desktop (>768px)
```
┌─────────────────────────────────────────────────┐
│  ┌─────────────────┐  ┌────────┐ ┌────────┐   │
│  │   Ubicación      │  │ 💧 Hum  │ │ 💨 Vnt │   │
│  │   Condición      │  │  64%    │ │ 4.1m/s │   │
│  │                  │  └────────┘ └────────┘   │
│  │   128°           │  ┌────────┐ ┌────────┐   │
│  │   Sensación      │  │ 📊 Prs  │ │ 👁 Vis  │   │
│  │   Fecha          │  │ 1015hPa │ │ 10 km  │   │
│  └─────────────────┘  └────────┘ └────────┘   │
│                                                 │
└─────────────────────────────────────────────────┘
```
- Card principal: lado izquierdo, flex 1, min-width 280px
- Detalles: lado derecho, columna única de 200px
- Gap entre paneles: 30px

### Tablet (≤768px)
- Dashboard se coloca en columna vertical
- Card principal ocupa todo el ancho (max 400px)
- Detalles en grid 2x2
- Temperatura: 96px

### Mobile (≤480px)
- Mismo layout en columna
- Detalles en grid 1x1 (apilados)
- Padding reducido a 20px
- Temperatura: 72px
