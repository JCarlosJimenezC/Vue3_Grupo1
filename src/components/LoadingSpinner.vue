<template>
  <div class="loading-spinner" role="status">
    <div class="spinner"></div>
    <p class="loading-text">Cargando clima…</p>
  </div>
</template>

<script setup>
// Versión mínima del estado de carga (funcionalidad #4).
// El compañero a cargo del #4 puede reemplazar/ampliar este componente
// (por ejemplo, con un skeleton). Lo dejo básico a propósito.
</script>

<style scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  color: var(--bg-base);
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(255, 255, 255, 0.25);
  border-top-color: var(--bg-base);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  font-family: var(--font-family-sans);
  font-size: 16px;
  font-weight: 300;
  margin: 0;
  opacity: 0.85;
}
</style>
