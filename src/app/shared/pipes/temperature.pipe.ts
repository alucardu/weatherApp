import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(temperature: number, unit: string = 'celsius'): string {
    return new Intl.NumberFormat(
      'nl-NL', {
        style: 'unit',
        unit: unit
      }
    ).format(temperature)
  }
}
