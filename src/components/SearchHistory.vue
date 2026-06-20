<script setup>
defineProps({
  history: { type: Array, required: true },
})

const emit = defineEmits(['select'])
</script>

<template>
  <div v-if="history.length" class="search-history">
    <span class="history-label">Recientes:</span>
    <div class="history-chips">
      <button
        v-for="item in history"
        :key="`${item.lat}-${item.lon}`"
        type="button"
        class="history-chip"
        @click="emit('select', { lat: item.lat, lon: item.lon })"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.search-history {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 440px;
}

.history-label {
  font-size: 0.78rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  align-self: flex-start;
  padding-left: 0.4rem;
}

.history-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  width: 100%;
}

.history-chip {
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  color: white;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
  white-space: nowrap;
}

.history-chip:hover {
  background: rgba(255, 255, 255, 0.22);
}

.history-chip:active {
  transform: scale(0.96);
}
</style>
