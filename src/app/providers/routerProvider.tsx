import { useRoutes } from 'react-router';
import { routerConfig } from '@shared/config/routerConfig.tsx';

export const RouterProvider = () => {
  return useRoutes(routerConfig);
};
