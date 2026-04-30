<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const devices = ref([])
const logs = ref([])

const fetchDevices = async () => {
  const res = await axios.get('http://localhost:8000/api/devices')
  devices.value = res.data
}

const fetchLogs = async () => {
  const res = await axios.get('http://localhost:8000/api/logs')
  logs.value = res.data
}

const toggleDevice = async (id) => {
  await axios.post(`http://localhost:8000/api/device/${id}/toggle`)
  await fetchDevices()
  await fetchLogs()
}

onMounted(() => {
  fetchDevices()
  fetchLogs()
})
</script>

<template>
  <div class="container">
    <h1> Smart Pool Controller</h1>

    <div class="grid">
      <!-- DEVICES -->
      <div class="card">
        <h2>Devices</h2>

        <div v-for="d in devices" :key="d.id" class="device">
          <div>
            <strong>{{ d.name }}</strong>
            <span :class="d.status ? 'on' : 'off'">
              {{ d.status ? 'ON' : 'OFF' }}
            </span>
          </div>

          <button @click="toggleDevice(d.id)">Toggle</button>
        </div>
      </div>

      <!-- LOGS -->
      <div class="card">
        <h2>Logs SAV</h2>

        <div v-for="(log, i) in logs" :key="i" class="log">
          [{{ log.time }}] {{ log.device }} → {{ log.action }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial;
  padding: 20px;
  background: #f4f6f8;
  min-height: 100vh;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.grid {
  display: flex;
  gap: 20px;
}

.card {
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.device {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  background: #f9f9f9;
  border-radius: 8px;
}

button {
  background: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

.on {
  color: green;
  margin-left: 10px;
}

.off {
  color: red;
  margin-left: 10px;
}

.log {
  font-size: 14px;
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}

.device {
  transition: all 0.2s;
}
.device:hover {
  transform: scale(1.02);
}
</style>
