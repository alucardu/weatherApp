import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-queryLocation',
  templateUrl: './queryLocation.component.html',
  styleUrls: ['./queryLocation.component.scss']
})
export class QueryLocationComponent {

  constructor(
    private locationService: LocationService
  ) {
    this.watchQuery();
  }

  public locations$ = this.locationService.locations$;

  public location = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(2),
    ]
  })

  private watchQuery(): void {
    this.location.valueChanges.pipe(
      debounceTime(500),
    ).subscribe({
      next: (query) => this.queryLocation(query)
    })
  }

  public queryLocation(query: string): void {
    if (this.location.invalid) return;

    this.locationService.setLocationInfo(query);
  }
}
