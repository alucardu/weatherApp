export type WeatherObj = {
  weather: {
    main: string
    description: string
    icon: string
  }
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
  }
  cloud: {
    all: number
  }
  sys: {
    sunrise: Date
    sunset: Date
  }
}
