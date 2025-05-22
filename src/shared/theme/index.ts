import { extendTheme } from '@chakra-ui/react';

import * as foundations from './Foundations';
import { components } from './Variants';
import { styles } from '@shared/theme/Styles/global';

const customTheme = extendTheme({
  ...foundations,
  components,
  styles
});

export default customTheme;
