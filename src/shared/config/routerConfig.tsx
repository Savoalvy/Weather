import type { RouteObject } from 'react-router-dom';

import { Navigate } from 'react-router-dom';
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
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Navigate to='home' replace /> },
      { path: 'home', element: <Main /> },
      { path: 'forecasts', element: <Forecasts /> },
      { path: 'favourites', element: <Favourites /> },
      { path: 'map', element: <WorldMap /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <NotFound /> }
    ]
  }
];
