import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';

  constructor(
    private weatherService: WeatherService
    ) {}

    public weather$ = this.weatherService.weather$

  ngOnInit(): void {
    this.weatherService.getWeatherInfo();
  }
}
