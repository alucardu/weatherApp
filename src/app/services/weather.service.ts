import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, Subject, tap } from 'rxjs'
import { Temp, WeatherCollection, WeatherObj } from '../types/weatherTypes'
import { Location } from '../types/locationTypes';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

constructor(
  private http: HttpClient
) { }

  public weatherSubject$ = new Subject<WeatherCollection>()
  public weather$ = this.weatherSubject$.asObservable();

  public setWeatherInfo(location: Location): void {
    this.http.get<WeatherCollection>(`https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&lang=nl&exclude=minutely&appid=${environment.weatherApi}&units=metric`).pipe(
      map((weatherCollection) => {
        return {
          ...weatherCollection,
          current: {
            ...this.transformWeatherDate(weatherCollection.current)
          },
          daily: [
            ...weatherCollection.daily.map((daily) => {
              return {
                ...this.transformWeatherDate(daily)
              }
            })
          ]
        }
      }),
    ).subscribe({
      next: (data) => this.weatherSubject$.next(data)
    })
  }

  private transformWeatherDate(weather: WeatherObj): WeatherObj {
    return {
      ...weather,
      pop: weather.pop || 0,
      ...this.transformDates(weather),
      ...this.formatTemp(weather)
    }
  }

  private transformDates(weatherInfo: WeatherObj): {dt: Date, sunrise: Date, sunset: Date} {
    return {
      dt: new Date(Number(weatherInfo.dt) * 1000),
      sunrise: new Date(Number(weatherInfo.sunrise) * 1000),
      sunset: new Date(Number(weatherInfo.sunset) * 1000),
    }
  }

  private formatTemp(weatherInfo: WeatherObj): {temp: number, feels_like: number} {
    return {
      temp: Math.round((<Temp>weatherInfo.temp).day || Number(weatherInfo.temp)),
      feels_like: Math.round((<Temp>weatherInfo.feels_like).day || Number(weatherInfo.feels_like))
    }
  }
}
