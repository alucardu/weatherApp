import { Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherObj } from 'src/app/types/weatherTypes';

enum DisplayedColumns {
  DATE = 'date',
  TEMP = 'temp',
  CLOUDS = 'clouds',
  WIND_SPEED = 'windSpeed',
  PROBABILITY_OF_PRECIPITATION = 'probabilityOfPrecipitation'
}

@Component({
  selector: 'app-displayWeather',
  templateUrl: './displayWeather.component.html',
  styleUrls: ['./displayWeather.component.scss']
})
export class DisplayWeatherComponent {
  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService
  ) {}

  public displayColumnsEnum = DisplayedColumns;

  public weather$ = this.weatherService.weather$;
  public weatherLoading$ = this.weatherService.weatherLoading$
  public location$ = this.locationService.location$;

  public displayWeekInfo = false;
  public displayedColumns: Array<string> = [...Object.values(DisplayedColumns)];

  public weather?: WeatherObj;

  public vm$ = combineLatest([this.weather$, this.location$]).pipe(
    map(([weather, location]) => ({weather, location})),
  )

  public displayWeatherDetails(weather: WeatherObj): void {
    this.weather = weather;
  }
}
