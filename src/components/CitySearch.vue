<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])
const city = ref('')

function handleSearch() {
  const trimmed = city.value.trim()
  if (!trimmed) return
  emit('search', trimmed)
}
</script>

<template>
  <form class="city-search" @submit.prevent="handleSearch">
    <input
      v-model="city"
      type="text"
      class="city-search__input"
      placeholder="Buscar ciudad..."
    />
    <button type="submit" class="city-search__button" aria-label="Buscar">
      Buscar
    </button>
  </form>
</template>

<style scoped>
.city-search {
  display: flex;
  gap: 0.5rem;
  width: 100%;
  max-width: 320px;
  margin-bottom: 1rem;
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
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
}
.city-search__button:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>