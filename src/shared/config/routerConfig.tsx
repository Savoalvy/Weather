// src/shared/config/routerConfig.tsx
import { RouteObject } from 'react-router-dom';
import { Main } from '../../pages/main/ui';

export const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <Main />
  }
  // другие страницы...
];
