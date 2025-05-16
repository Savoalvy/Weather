import type { AppRoutes } from './types.ts';

export const routes: AppRoutes = {
  home: () => '/home',
  forecasts: () => '/forecasts',
  favourites: () => '/favourites',
  map: () => '/map',
  settings: () => '/settings',
  weather: (city: string) => `/weather/${city}`,
  notFound: () => '*'
};
