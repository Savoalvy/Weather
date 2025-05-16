import { routes } from '@shared/';

export const headerTabs = [
  { label: 'Home', route: routes.home() },
  { label: 'Forecast', route: routes.forecasts() },
  { label: 'Favourites', route: routes.favourites() },
  { label: 'Map', route: routes.map() },
  { label: 'Settings', route: routes.settings() }
];
