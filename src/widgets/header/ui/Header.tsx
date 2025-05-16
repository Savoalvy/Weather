import { GridItem } from '@chakra-ui/react';
import { style } from './style.ts';
import { TabsNav } from '@features/';

export const Header = () => (
  <GridItem sx={style.wrapper} as='header'>
    <TabsNav />
  </GridItem>
);
