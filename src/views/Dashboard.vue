<script setup lang="ts">
import { onMounted } from 'vue'
import { useDeviceStore } from '../stores/deviceStore'
import DeviceCard from '../components/DeviceCard.vue'
import LogList from '../components/LogList.vue'

const store = useDeviceStore()

onMounted(() => {
  store.fetchDevices()
  store.fetchLogs()
})
</script>

<template>
  <div class="container">
    <h1>🚀 Smart Pool Controller</h1>

    <div class="grid">
      <div class="card">
        <h2>Devices</h2>

        <DeviceCard v-for="d in store.devices" :key="d.id" :device="d" @toggle="store.toggle" />
      </div>

      <div class="card">
        <h2>Logs SAV</h2>
        <LogList :logs="store.logs" />
      </div>
    </div>
  </div>
</template>
