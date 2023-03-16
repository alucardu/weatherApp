import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
registerLocaleData(localeNl);

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { QueryLocationComponent } from './shared/components/location/queryLocation/queryLocation.component';
import { DisplayLocationsComponent } from './shared/components/location/displayLocations/displayLocations.component';
import { DisplayWeatherComponent } from './shared/components/weather/displayWeather/displayWeather.component';
import { TemperaturePipe } from './shared/pipes/temperature.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QueryLocationComponent,
    DisplayLocationsComponent,
    DisplayWeatherComponent,
    TemperaturePipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-NL'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
