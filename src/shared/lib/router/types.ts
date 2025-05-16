export interface AppRoutes {
  home: () => string;
  forecasts: () => string;
  favourites: () => string;
  map: () => string;
  settings: () => string;
  weather: (city: string) => string;
  notFound: () => string;
}
