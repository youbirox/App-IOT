import axios from 'axios'
import type { Device, Log } from '../types/device'

const API_URL = 'http://localhost:8000/api'

export const getDevices = () => {
  return axios.get<Device[]>(`${API_URL}/devices`)
}

export const toggleDevice = (id: number) => {
  return axios.post(`${API_URL}/device/${id}/toggle`)
}

export const getLogs = () => {
  return axios.get<Log[]>(`${API_URL}/logs`)
}