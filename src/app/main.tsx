import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../shared/theme';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </Provider>
);
