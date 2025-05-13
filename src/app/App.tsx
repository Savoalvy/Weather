import { BrowserRouter } from 'react-router-dom';
import { RouterProvider } from './providers/routerProvider.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <RouterProvider />
    </BrowserRouter>
  );
};

export default App;
