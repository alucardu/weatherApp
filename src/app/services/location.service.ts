import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Location } from '../types/locationTypes';
import * as countries from 'i18n-iso-countries';
import * as i18nIsoCountries from 'i18n-iso-countries';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient
  ) {
    i18nIsoCountries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  }

  readonly locationsSubject$ = new Subject<Array<Location> | null>()
  readonly locations$ = this.locationsSubject$.asObservable();

  readonly locationSubject$ = new Subject<Location | null>()
  readonly location$ = this.locationSubject$.asObservable();

  public setLocationsInfo(city: string): void {
    this.http.get<Array<Location>>(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&APPID=${environment.weatherApi}`).pipe(
      map((locations) => locations.map((location) => {
        return {
          ...location,
          countryFull: countries.getName(location.country, "en"),
        }
      })),
    ).subscribe({
      next: (data) => this.locationsSubject$.next(data)
    })
  }

  public clearLocations(): void {
    this.locationsSubject$.next(null)
  }

  public setLocationInfo(location: Location): void {
    this.locationSubject$.next(location)
  }
}
