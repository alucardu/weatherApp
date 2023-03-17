# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## API

This app uses the https://openweathermap.org API for its data. Generate or create a `environment.development.ts` file in the `src/environments` folder with the content:
```
export const environment = {
  production: false,
  weatherApi: "<API_KEY>"
};
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Cypress testing

Run `npm run cyress:run` to run a headless Cypress test.
Run `npm run cyress:open` to open the Cypress testing environment.

