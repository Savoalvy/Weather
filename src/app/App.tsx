import { useRoutes } from 'react-router-dom';
import { routerConfig } from '@shared/config/routerConfig.tsx';

const App = () => {
  const routes = useRoutes(routerConfig);
  return routes;
};

export default App;
