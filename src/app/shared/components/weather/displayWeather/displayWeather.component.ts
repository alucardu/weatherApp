import { Component, OnDestroy } from '@angular/core';
import { combineLatest, map, Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherObj } from 'src/app/types/weatherTypes';

enum DisplayedColumns {
  DATE = 'date',
  TEMP = 'temp',
  CLOUDS = 'clouds',
  WIND_SPEED = 'windSpeed',
  PROBABILITY_OF_PRECIPITATION = 'probabilityOfPrecipitation',
  DESCRIPTION = 'description'
}

@Component({
  selector: 'app-displayWeather',
  templateUrl: './displayWeather.component.html',
  styleUrls: ['./displayWeather.component.scss']
})
export class DisplayWeatherComponent implements OnDestroy {
  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService
  ) {
    this.weatherSubscription = this.weather$.subscribe({
      next: (data) => this.weatherService.setDetailedWeatherInformation(data.current)
    })
  }

  public displayColumnsEnum = DisplayedColumns;

  private weatherSubscription: Subscription
  public weather$ = this.weatherService.weather$;
  public weatherLoading$ = this.weatherService.weatherLoading$
  public location$ = this.locationService.location$;
  public detailedWeather$ = this.weatherService.detailedWeather$;

  public displayWeekInfo = false;
  public displayedColumns: Array<string> = [...Object.values(DisplayedColumns)];

  public vm$ = combineLatest([this.weather$, this.location$]).pipe(
    map(([weather, location]) => ({weather, location})),
  )

  public displayWeatherDetails(weather: WeatherObj): void {
    this.weatherService.setDetailedWeatherInformation(weather)
  }

  ngOnDestroy(): void {
    this.weatherSubscription.unsubscribe();
  }
}
