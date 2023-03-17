export type WeatherCollection = {
  current: WeatherObj
  daily: Array<WeatherObj>
  hourly: Array<WeatherObj>
}

export type WeatherObj = {
  clouds: number
  dew_point: number
  dt: number | Date
  humidity: number
  pressure: number
  sunrise: number | Date
  sunset: number | Date
  feels_like: number | Temp
  temp: number | Temp
  uvi: number
  visibility: number
  weather: Array<Weather>
  wind_deg: number
  wind_speed: number
  pop: number
  wind_gust?: number
  rain?: number
  snow?: number
}

type Weather = {
  description: string
  icon: string
  id: number
  main: string
}

export type Temp = {
  day: number
  eve: number
  morn: number
  night: number
  max?: number
  min?: number
}
