<template>
  <div class="skeleton-dashboard">
    <div class="skeleton-main-card">
      <header class="skeleton-header">
        <div class="skeleton-line skeleton-line--title"></div>
        <div class="skeleton-line skeleton-line--subtitle"></div>
      </header>

      <main class="skeleton-body">
        <div class="skeleton-icon"></div>
        <div class="skeleton-temp-section">
          <div class="skeleton-line skeleton-line--condition"></div>
          <div class="skeleton-line skeleton-line--temp"></div>
          <div class="skeleton-line skeleton-line--feels"></div>
        </div>
      </main>
    </div>

    <section class="skeleton-details">
      <div v-for="i in 4" :key="i" class="skeleton-detail-card">
        <div class="skeleton-detail-icon"></div>
        <div class="skeleton-detail-info">
          <div class="skeleton-line skeleton-line--detail-value"></div>
          <div class="skeleton-line skeleton-line--detail-label"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.skeleton-dashboard {
  display: flex;
  gap: var(--space-xl);
  align-items: flex-start;
  max-width: 720px;
  width: 100%;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Shimmer animation */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton-line {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.18) 50%,
    rgba(255, 255, 255, 0.06) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: 12px;
}

/* Main card */
.skeleton-main-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding: var(--space-xl);
  flex: 1;
  min-width: 280px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-card);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

/* Header */
.skeleton-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.skeleton-line--title {
  width: 200px;
  height: 24px;
}

.skeleton-line--subtitle {
  width: 140px;
  height: 14px;
}

/* Body */
.skeleton-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
}

.skeleton-icon {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.18) 50%,
    rgba(255, 255, 255, 0.06) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}

.skeleton-temp-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.skeleton-line--condition {
  width: 160px;
  height: 24px;
}

.skeleton-line--temp {
  width: 220px;
  height: 128px;
}

.skeleton-line--feels {
  width: 120px;
  height: 14px;
}

/* Detail cards */
.skeleton-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  width: 200px;
  flex-shrink: 0;
}

.skeleton-detail-card {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.skeleton-detail-icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  flex-shrink: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.18) 50%,
    rgba(255, 255, 255, 0.06) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}

.skeleton-detail-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.skeleton-line--detail-value {
  width: 60px;
  height: 18px;
}

.skeleton-line--detail-label {
  width: 50px;
  height: 12px;
}

@media (max-width: 768px) {
  .skeleton-dashboard {
    flex-direction: column;
    align-items: center;
    max-width: 400px;
  }

  .skeleton-details {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }

  .skeleton-line--temp {
    height: 96px;
  }
}

@media (max-width: 480px) {
  .skeleton-main-card {
    padding: var(--space-lg);
  }

  .skeleton-line--temp {
    height: 72px;
    width: 160px;
  }

  .skeleton-details {
    grid-template-columns: 1fr;
  }
}
</style>
