import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Subject } from 'rxjs'
import { WeatherObj } from '../types/weatherType'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

constructor(
  private http: HttpClient
) { }

  public weatherSubject$ = new Subject<WeatherObj>()
  public weather$ = this.weatherSubject$.asObservable();

  public getWeather(): void {
    this.http.get<WeatherObj>(`http://api.openweathermap.org/data/2.5/weather?q=Groningen,nl&APPID=${environment.weatherApi}`).subscribe({
      next: (data) => this.weatherSubject$.next(data)
    })
  }
}
