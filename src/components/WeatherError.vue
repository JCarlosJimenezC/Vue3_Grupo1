<template>
  <div class="weather-error" role="alert">
    <svg class="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="13" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
    <h2 class="error-title">Algo salió mal</h2>
    <p class="error-message">{{ message }}</p>
    <button class="retry-button" type="button" @click="$emit('retry')">
      Reintentar
    </button>
  </div>
</template>

<script setup>
// defineProps: recibe el mensaje de error desde el padre con valor por defecto
defineProps({
  message: {
    type: String,
    default: 'No se pudieron obtener los datos del clima.',
  },
})

// defineEmits: evento 'retry' que el padre escucha para reintentar la carga
defineEmits(['retry'])
</script>

<style scoped>
.weather-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-xl);
  max-width: 420px;
  width: 100%;
  text-align: center;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-card);
  color: var(--bg-base);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.error-icon {
  width: 56px;
  height: 56px;
  color: var(--sun-accent-dark);
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
}

.error-title {
  font-family: var(--font-family-sans);
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.error-message {
  font-family: var(--font-family-sans);
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  opacity: 0.85;
  line-height: 1.5;
}

.retry-button {
  margin-top: var(--space-sm);
  padding: var(--space-sm) var(--space-lg);
  font-family: var(--font-family-sans);
  font-size: 16px;
  font-weight: 500;
  color: var(--bg-base);
  background: var(--brand-primary);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease;
}

.retry-button:hover {
  background: var(--brand-accent);
  transform: scale(1.05);
}

.retry-button:active {
  transform: scale(0.98);
}

@media (max-width: 480px) {
  .weather-error {
    padding: var(--space-lg);
  }
}
</style>
