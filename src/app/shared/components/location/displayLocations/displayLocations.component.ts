import { Component } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { WeatherService } from 'src/app/services/weather.service';
import { Location } from 'src/app/types/locationTypes';

@Component({
  selector: 'app-displayLocations',
  templateUrl: './displayLocations.component.html',
  styleUrls: ['./displayLocations.component.scss']
})
export class DisplayLocationsComponent {

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService,
  ) {}

  public locations$ = this.locationService.locations$;

  public setWeatherInfo(location: Location): void {
    this.weatherService.setWeatherInfo(location);
    this.locationService.clearLocations();
    this.locationService.setLocationInfo(location)
  }
}
