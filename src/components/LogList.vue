<script setup lang="ts">
import type { Log } from '../types/device'

defineProps<{
  logs: Log[]
}>()
</script>

<template>
  <div>
    <div v-for="(log, i) in logs" :key="i" class="log">
      [{{ log.time }}] {{ log.device }} → {{ log.action }}
    </div>
  </div>
</template>

<style scoped>
.log {
  font-size: 14px;
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}
</style>
