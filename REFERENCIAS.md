# Referencias

## Documentación Oficial

Vue.js. (s. f.). *Vue.js 3 — The Progressive JavaScript Framework*. Vue.js. https://vuejs.org/

Vite. (s. f.). *Vite — Next Generation Frontend Tooling*. Vite. https://vite.dev/

OpenWeatherMap. (s. f.). *Current Weather Data API*. OpenWeatherMap.
https://openweathermap.org/api

## Documentación Técnica

Mozilla Developer Network. (s. f.). *Geolocation API*. MDN Web Docs.
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

Mozilla Developer Network. (s. f.). *backdrop-filter — CSS: Cascading Style Sheets*. MDN Web Docs.
https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter

## Diseño

Figma Community. (s. f.). *Customizable Weather Station Monitoring UI Design — Tablets and Desktops (Free)* [Diseño de interfaz]. Figma.
https://www.figma.com/design/jluCaGGP2aIdMXwhR4Jy4w/

## Videos de Fondo

Pixabay. (2026). *Despejado_Dia* [Video]. Pixabay.
https://drive.google.com/file/d/1y75P-w88JrL1kiu7eY77Yhd_BCXrYBRZ/view

Pixabay. (2026). *Despejado_Noche* [Video]. Pixabay.
https://drive.google.com/file/d/1ISzlXMGzwI4_FYVh2WLwLbxSgwUA3wkU/view

Pixabay. (2026). *Lluvia_Fuerte* [Video]. Pixabay.
https://drive.google.com/file/d/1pcYD2IGG7LqdgWLZLHdzWOxP73L3FxL_/view

Pixabay. (2026). *Lluvia_Ligera* [Video]. Pixabay.
https://drive.google.com/file/d/1rypoKjRdKk43SMKIzYvP-kahn0ZuDgu1/view

Pixabay. (2026). *Lluvia_Noche* [Video]. Pixabay.
https://drive.google.com/file/d/1HlfT9vCbYT02w0K_KcObSXGLTGxlT8ov/view

Pixabay. (2026). *Niebla* [Video]. Pixabay.
https://drive.google.com/file/d/1DVyUg6BMH1whizTalzrwvKHB-x2zjFci/view

Pixabay. (2026). *Nieve* [Video]. Pixabay.
https://drive.google.com/file/d/1HOYyLeZrLGjTsxSDpmGrSJjkMQF11U-J/view

Pixabay. (2026). *Nublado_Cerrado* [Video]. Pixabay.
https://drive.google.com/file/d/1SH2ETWiEPSV27PAxHj-U3VP539L-WtYq/view

Pixabay. (2026). *Nublado_Dia* [Video]. Pixabay.
https://drive.google.com/file/d/1bPujNEUm9UoO4pGr3X1gZKDvlAcISbh3/view

Pixabay. (2026). *Nublado_Noche* [Video]. Pixabay.
https://drive.google.com/file/d/16eTS1-KKFf1Fuwx3xbWqEeTOOVnV32KC/view

Pixabay. (2026). *Tormenta_Electrica* [Video]. Pixabay.
https://drive.google.com/file/d/1MiXgpTbgLRCvINZFNcoZv4dQz0uTyC-j/view

---

## Documentación Oficial — Vue 3 (framework)

Vue.js. (s.f.). *Composables*. Vue.js Guide. Recuperado el 21 de junio de 2026, de https://vuejs.org/guide/reusability/composables
*Usado en:* `useGeolocation.js`, `useWeather.js`, `useSearchHistory.js` (patrón composable).

Vue.js. (s.f.). *`<script setup>`*. Vue.js API Reference. Recuperado el 21 de junio de 2026, de https://vuejs.org/api/sfc-script-setup.html
*Usado en:* `CitySearch.vue` (`defineEmits`, `defineExpose`) y `WeatherDisplay.vue` / `SearchHistory.vue` (`defineProps`, `defineEmits`).

Vue.js. (s.f.). *Watchers*. Vue.js Guide. Recuperado el 21 de junio de 2026, de https://vuejs.org/guide/essentials/watchers
*Usado en:* `App.vue` y `useWeather.js` (función `watch`).

Vue.js. (s.f.). *Reactivity API: Core*. Vue.js API Reference. Recuperado el 21 de junio de 2026, de https://vuejs.org/api/reactivity-core
*Usado en:* todos los componentes/composables con `computed` y `watch`.

## Documentación Oficial — Vite

Vite. (s.f.). *Static Asset Handling*. Vite Guide. Recuperado el 21 de junio de 2026, de https://vite.dev/guide/assets
*Usado en:* `WeatherBackground.vue` (carga dinámica de assets con `new URL(..., import.meta.url)`).

## Documentación Oficial — OpenWeatherMap

OpenWeather. (s.f.). *Current weather data*. OpenWeatherMap API. Recuperado el 21 de junio de 2026, de https://openweathermap.org/api/current
*Usado en:* `weather.js` (endpoint `/data/2.5/weather`).

OpenWeather. (s.f.). *Geocoding API*. OpenWeatherMap API. Recuperado el 21 de junio de 2026, de https://openweathermap.org/api/geocoding-api
*Usado en:* `weather.js` (endpoint `/geo/1.0/direct`, autocomplete de `CitySearch.vue`).

## Documentación Oficial — APIs del navegador (MDN)

Mozilla. (s.f.). *Window: localStorage property*. MDN Web Docs. Recuperado el 21 de junio de 2026, de https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
*Usado en:* `useSearchHistory.js` (persistencia del historial).

Mozilla. (s.f.). *Using the Fetch API*. MDN Web Docs. Recuperado el 21 de junio de 2026, de https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
*Usado en:* `weather.js` (peticiones HTTP a OpenWeatherMap).

Mozilla. (s.f.). *URLSearchParams*. MDN Web Docs. Recuperado el 21 de junio de 2026, de https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
*Usado en:* `weather.js` (construcción de query strings).

## Artículos Complementarios

LogRocket. (2024, 4 de junio). *How to implement glassmorphism with CSS*. LogRocket Blog. https://blog.logrocket.com/implement-glassmorphism-css/
*Complementa:* `WeatherDisplay.vue` (efecto glass con `backdrop-filter` + `rgba`).

freeCodeCamp. (2025, 13 de junio). *How Vue Composables Work – Explained with Code Examples*. freeCodeCamp News. https://www.freecodecamp.org/news/how-vue-composables-work/
*Complementa:* el patrón de composables usado en `useGeolocation.js`, `useWeather.js` y `useSearchHistory.js`.

## Video

The Net Ninja. (2020, 16 de diciembre). *Vue JS 3 Tutorial for Beginners #11 - The Composition API (part 2)* [Video]. YouTube. https://www.youtube.com/watch?v=0FwBjPeLqQ8
*Complementa:* uso de `props`, `fetch` y composables dentro de la Composition API (cubre exactamente el patrón que usan `useWeather.js` y `CitySearch.vue`).


Junior Programmer. (2025, 18 de septiembre). #3 Cómo crear una app del Clima usando la API de OpenWeatherMap [Video]. YouTube. https://www.youtube.com/watch?v=DWv7vHpULfc

Per's Multimedia Design Tutorials. (2020, 5 de octubre). OpenWeatherMap - get the API token [Video]. YouTube. https://www.youtube.com/watch?v=SPfgbeJGnec