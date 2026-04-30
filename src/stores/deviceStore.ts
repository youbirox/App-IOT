import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getDevices, toggleDevice, getLogs } from '../services/deviceService'
import type { Device, Log } from '../types/device'

export const useDeviceStore = defineStore('device', () => {
  const devices = ref<Device[]>([])
  const logs = ref<Log[]>([])

  const fetchDevices = async () => {
    const res = await getDevices()
    devices.value = res.data
  }

  const fetchLogs = async () => {
    const res = await getLogs()
    logs.value = res.data
  }

  const toggle = async (id: number) => {
    await toggleDevice(id)
    await fetchDevices()
    await fetchLogs()
  }

  return { devices, logs, fetchDevices, fetchLogs, toggle }
})
