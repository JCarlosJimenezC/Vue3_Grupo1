<template>
  <div class="weather-bg">
    <video
      v-if="videoName"
      :key="videoName"
      class="bg-video"
      autoplay
      muted
      loop
      playsinline
    >
      <source :src="videoSrc" type="video/webm" />
    </video>
    <div class="bg-overlay" :style="{ background: gradient }"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  videoName: {
    type: String,
    required: true,
  },
  gradient: {
    type: String,
    default: 'linear-gradient(135deg, rgba(34, 134, 186, 0.3), rgba(0, 4, 30, 0.5))',
  },
})

const videoSrc = computed(() => {
  return new URL(`../assets/videos/${props.videoName}.webm`, import.meta.url).href
})
</script>

<style scoped>
.weather-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fadeIn 0.8s ease-out;
}

.bg-overlay {
  position: absolute;
  inset: 0;
  transition: background 0.6s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
