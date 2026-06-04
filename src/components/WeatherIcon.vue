<template>
  <img
    v-if="iconName"
    :src="iconSrc"
    :alt="altText"
    class="weather-icon"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: 'Icono del clima',
  },
  size: {
    type: Number,
    default: 80,
  },
})

const iconSrc = computed(() => {
  return new URL(`../assets/${props.iconName}.webp`, import.meta.url).href
})
</script>

<style scoped>
.weather-icon {
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
}
</style>
