import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../shared/theme';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
