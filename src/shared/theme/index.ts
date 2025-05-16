import { extendTheme } from '@chakra-ui/react';

import * as foundations from './foundations';
import { components } from './components';
import { styles } from './styles/global';

const customTheme = extendTheme({
  ...foundations,
  components,
  styles
});

export default customTheme;
