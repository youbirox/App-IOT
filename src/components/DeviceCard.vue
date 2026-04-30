<script setup lang="ts">
import type { Device } from '../types/device'

defineProps<{
  device: Device
}>()

defineEmits<{
  (e: 'toggle', id: number): void
}>()
</script>

<template>
  <div class="device">
    <div>
      <strong>{{ device.name }}</strong>
      <span :class="device.status ? 'on' : 'off'">
        {{ device.status ? 'ON' : 'OFF' }}
      </span>
    </div>

    <button @click="$emit('toggle', device.id)">Toggle</button>
  </div>
</template>
