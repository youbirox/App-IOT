export interface Device {
  id: number
  name: string
  status: boolean
}

export interface Log {
  time: string
  device: string
  action: string
}
