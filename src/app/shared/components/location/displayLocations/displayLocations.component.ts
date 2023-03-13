import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-displayLocations',
  templateUrl: './displayLocations.component.html',
  styleUrls: ['./displayLocations.component.scss']
})
export class DisplayLocationsComponent {

  constructor(
    private locationService: LocationService
  ) {}

  public locations$ = this.locationService.locations$;

}
