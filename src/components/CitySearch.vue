<script setup>
import { ref, watch } from 'vue'
import { fetchCitySuggestions } from '@/services/weather'

const emit = defineEmits(['search'])
const city = ref('')

defineExpose({ clear: () => { city.value = '' } })
const suggestions = ref([])
const showSuggestions = ref(false)
let debounceTimer = null

watch(city, (newValue) => {
  clearTimeout(debounceTimer)
  if (newValue.trim().length < 2) {
    suggestions.value = []
    showSuggestions.value = false
    return
  }
  debounceTimer = setTimeout(async () => {
    suggestions.value = await fetchCitySuggestions(newValue.trim())
    showSuggestions.value = suggestions.value.length > 0
  }, 350)
})

function formatSuggestion(item) {
  const parts = [item.name]
  if (item.state) parts.push(item.state)
  parts.push(item.country)
  return parts.join(', ')
}

function selectSuggestion(item) {
  showSuggestions.value = false
  emit('search', { lat: item.lat, lon: item.lon })
  city.value = ''
}

function handleSearch() {
  const trimmed = city.value.trim()
  if (!trimmed) return
  city.value = ''
  showSuggestions.value = false
  emit('search', trimmed)
}
</script>

<template>
  <div class="city-search">
    <form class="city-search__form" @submit.prevent="handleSearch">
      <input
        v-model="city"
        type="text"
        class="city-search__input"
        placeholder="Buscar ciudad"
        @focus="showSuggestions = suggestions.length > 0"
        @blur="() => setTimeout(() => (showSuggestions = false), 150)"
      />
      <button type="submit" class="city-search__button" aria-label="Buscar">
        Buscar
      </button>
    </form>

    <ul v-if="showSuggestions" class="city-search__suggestions">
      <li
        v-for="item in suggestions"
        :key="`${item.lat}-${item.lon}`"
        class="city-search__suggestion"
        @mousedown.prevent="selectSuggestion(item)"
      >
        {{ formatSuggestion(item) }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.city-search {
  position: relative;
  width: 100%;
  max-width: 440px;
}
.city-search__form {
  display: flex;
  gap: 0.5rem;
}
.city-search__input {
  flex: 1;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  color: white;
  font-size: 0.95rem;
  outline: none;
}
.city-search__input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}
.city-search__button {
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  border: none;
  background: #38b6ff;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(56, 182, 255, 0.4);
  transition: background 0.2s ease, transform 0.1s ease;
}
.city-search__button:hover {
  background: #2aa3ec;
}
.city-search__button:active {
  transform: scale(0.97);
}
.city-search__suggestions {
  position: absolute;
  top: calc(100% + 0.4rem);
  left: 0;
  right: 0;
  list-style: none;
  margin: 0;
  padding: 0.4rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(20, 30, 45, 0.85);
  backdrop-filter: blur(10px);
  z-index: 10;
}
.city-search__suggestion {
  padding: 0.5rem 0.7rem;
  border-radius: 0.6rem;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
}
.city-search__suggestion:hover {
  background: rgba(255, 255, 255, 0.15);
}
</style>