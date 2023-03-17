import { Component, Input } from '@angular/core';
import { WeatherObj } from 'src/app/types/weatherTypes';

@Component({
  selector: 'app-weatherDetails',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})
export class WeatherDetailsComponent {
  @Input() weather!: WeatherObj
}
