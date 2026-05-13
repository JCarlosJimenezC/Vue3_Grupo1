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

### Tamaños de Fuente (Font Sizes)
* **Micro:** `8px` (Ideal para leyendas pequeñas o datos secundarios)
* **Tiny:** `12px` / `14px` (Etiquetas, datos de viento/probabilidad)
* **Base:** `16px` / `17px` / `18px` (Cuerpo de texto, fechas, horas)
* **Medium:** `24px` (Subtítulos, nombres de ciudades)
* **Large:** `40px` / `48px` (Estados del clima como "Thunderstorm", mediciones grandes)
* **Display:** `75px` / `96px` / `128px` (Temperaturas principales, hero text)

### Pesos Tipográficos (Font Weights)
* **Light:** `300` (Datos de humedad, textos estilizados)
* **Regular:** `400` (Cuerpo de texto base)
* **Medium:** `500` (Leyendas de tarjetas, horas, grados)
* **SemiBold:** `600` (Títulos principales)
* **Bold:** `700` (Cabeceras de sección como "AIR CONDITIONS")

## 3. Espaciado y Layout (Spacing & Radii)

El diseño utiliza un sistema de espaciado definido para mantener la proporción entre las tarjetas y el contenido.

**Márgenes y Paddings:**
* `4px`
* `8px`
* `10px`
* `15px`
* `20px` (Padding estándar interno de las tarjetas)

**Gaps (Espaciado en Flexbox/Grid):**
* `5px`
* `10px`
* `30px` (Gap principal entre tarjetas de actividades)

**Bordes (Border Radius):**
* `40px` (Radio principal para las tarjetas grandes como el forecast y actividades)

---

## 💻 Implementación Técnica (Ejemplo)

Para implementar esto rápidamente en tu proyecto, puedes declarar estas variables en tu archivo global de CSS o adaptarlo a la configuración de tu framework:

```css
:root {
  /* Colors */
  --bg-base: rgb(255, 255, 255);
  --brand-primary: rgb(34, 134, 186);
  --brand-dark: rgb(4, 73, 108);
  --brand-accent: rgb(47, 136, 255);
  --text-main: rgb(0, 4, 30);
  
  /* Fonts */
  --font-family-sans: 'Inter', sans-serif;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 15px;
  --space-lg: 20px;
  --space-xl: 30px;
  
  /* Radii */
  --radius-card: 40px;
}