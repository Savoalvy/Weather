import type { RouteObject } from 'react-router';

import { Navigate } from 'react-router';
import { MainLayout } from '@layouts/';
import {
  Main,
  Forecasts,
  WorldMap,
  Favourites,
  Settings,
  NotFound
} from '@pages/';

export const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to='home' replace /> },
      { path: 'home', element: <Main /> },
      { path: 'forecasts', element: <Forecasts /> },
      { path: 'favourites', element: <Favourites /> },
      { path: 'map', element: <WorldMap /> },
      { path: 'settings', element: <Settings /> }
    ]
  },
  { path: '*', element: <NotFound /> }
];
