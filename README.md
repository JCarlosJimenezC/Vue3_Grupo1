# ClimaVue — App del Clima con Vue 3

Aplicación del clima en tiempo real con geolocalización, videos de fondo dinámicos y diseño glassmorphism. Construida con **Vue 3** + **Vite** como parte de la investigación de Frameworks para la Universidad de Costa Rica.

---

## Framework Usado

- **Vue 3** — Composition API con `<script setup>`
- **Vite** — Build tool y dev server
- Sin librerías de componentes UI externas (Vuetify, Bootstrap, Material UI, etc.) — todo CSS custom

---

## Características Implementadas

### ✅ Completadas

- **#2 — Mostrar datos del clima actual**: temperatura, descripción, humedad, velocidad del viento e ícono del clima
- **Geolocalización automática**: solicita permiso de ubicación al navegador al cargar la página, con fallback a San José, Costa Rica
- **Video de fondo dinámico**: reproduce un video distinto según la condición climática (día/noche)
- **Íconos climáticos**: imágenes `.webp` dinámicas que cambian según el clima
- **Diseño glassmorphism responsivo**: tarjetas con `backdrop-filter: blur()` y transparencia sobre el video de fondo

- **#5 - Manejo de errores** 
La app maneja errores de forma centralizada y los muestra en una tarjeta
dedicada (`WeatherError.vue`) en lugar de fallar en silencio.

**Errores que maneja:**
- **Ciudad no encontrada** (HTTP 404) → "Ubicación no encontrada"
- **API key inválida o no activa** (HTTP 401) → "API key inválida"
- **Fallo de red u otros** → mensaje devuelto por la API o uno genérico

**Cómo funciona:**
- `services/weather.js` traduce el código HTTP de la respuesta a un mensaje
  claro y lanza un `Error`.
- El composable `useWeather()` captura ese error en un `ref` reactivo (`error`).
- `App.vue` decide qué renderizar según el estado: error → carga → datos.
- El componente `WeatherError.vue` muestra el mensaje con un botón
  **"Reintentar"** que vuelve a solicitar los datos (emite el evento `retry`).

**Cómo probarlo:**
- *Error de API key:* poner una key inválida en `.env` y reiniciar el server.
- *Error de red:* desconectar el internet y recargar.
- *Ciudad inexistente:* (al integrarse con el buscador #1) buscar una ciudad
  que no exista.

### 🔜 Pendientes (otros integrantes)

- **#1 — Buscador de ciudad**: campo de texto + botón buscar (o Enter)
- **#3 — Historial de búsquedas**: últimas 5 ciudades con acceso rápido
- **#4 — Estado de carga**: indicador visual (spinner o skeleton)
- **#6 — Persistencia en localStorage**: el historial persiste al recargar la página

---

## Conceptos Clave de Vue 3

- **Composition API** con `<script setup>` en todos los componentes
- **Composables**: `useGeolocation()` y `useWeather()` para lógica reutilizable con `ref`, `computed` y `watch`
- **Prop drilling** con `defineProps` y comunicación con `defineEmits`
- **Import dinámico de assets** con `new URL(..., import.meta.url).href` para cargar videos e imágenes según la condición climática
- **Variables de entorno con Vite** usando `import.meta.env.VITE_OPENWEATHER_API_KEY`
- **CSS dinámico** con `:style` binding para cambiar el gradiente del overlay según el clima
- **Vue reactive** para actualizar la vista automáticamente cuando cambian los datos

---

## Configuración de API Key

1. Crear archivo `.env` en la raíz del proyecto (basado en `.env.example`)
2. Agregar la API key:
   ```
   VITE_OPENWEATHER_API_KEY=tu_api_key_aqui
   ```
3. Obtener una API key gratuita en [OpenWeatherMap](https://openweathermap.org/api)
4. **No compartir la API key** — `.env` está en `.gitignore`

---

## Setup del Proyecto

### Requisitos

- Node.js `^20.19.0` o `>=22.12.0`

### Instalación

```sh
pnpm install
```
Para evitar inyección de scripts maliciosos 

### Desarrollo (con Hot-Reload)

```sh
npm run dev
```

### Producción

```sh
npm run build
npm run preview
```

---

## Estructura del Proyecto

```
src/
├── App.vue                         # Layout raíz: fondo + tarjeta del clima
├── main.js                         # Entry point de Vue
├── assets/
│   ├── base.css                    # Variables CSS con design tokens
│   ├── main.css                    # Estilos base
│   ├── videos/                     # 11 videos .webm de fondo climático
│   ├── Despejado_Dia.webp          # Íconos climáticos .webp
│   └── ...                         # (10 imágenes en total)
├── components/
│   ├── WeatherBackground.vue       # Video fullscreen con overlay
│   ├── WeatherDisplay.vue          # Dashboard principal con temperatura y detalles
│   └── WeatherIcon.vue             # Ícono climático dinámico
├── composables/
│   ├── useGeolocation.js           # Lógica de geolocalización
│   └── useWeather.js               # Estado del clima + mapeo de assets
├── services/
│   └── weather.js                  # Fetch a OpenWeatherMap API
└── utils/
    └── weatherMappings.js          # Mapeo de códigos OWM → assets locales
```

---

## Pros y Contras de Vue 3

### Pros
- **Composition API** permite extraer lógica en funciones reutilizables (composables)
- `<script setup>` reduce boilerplate comparado con Options API
- Reactividad fina con `ref` y `computed` sin dependencias externas
- Ecosistema ligero — sin necesidad de librerías UI externas para este proyecto
- **Vite** ofrece HMR instantáneo y builds optimizados
- TypeScript-ready y buena integración con herramientas modernas

### Contras
- Curva de aprendizaje para Composition API si se viene de Options API
- Dos formas de escribir componentes (Options vs Composition) puede confundir al equipo
- Ecosistema de componentes más pequeño que React
- Reactividad requiere entender cuándo usar `ref`, `reactive`, `computed`, `watch`
- Documentación a veces asume conocimientos previos de Vue 2

---

## Demo

> URL de la demo: *pendiente de publicar en Vercel o Netlify*

---

## Capturas de Pantalla

**# Manejo de errores (#5)**
![Tarjeta de error cuando la API key es inválida](./screenshots/app-error.png)
> *Pendiente de agregar el resto*

---

## Referencias

Ver [REFERENCIAS.md](./REFERENCIAS.md)
