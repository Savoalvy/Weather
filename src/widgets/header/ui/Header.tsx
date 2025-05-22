import { GridItem } from '@chakra-ui/react';
import { style } from './style.ts';
import { TabsNav } from '@features/';
import { SearchInput } from '@shared/';

export const Header = () => (
  <GridItem sx={style.wrapper} as='header'>
    <TabsNav />
    <SearchInput variant={'flushed'} placeholder={'Выберите город'} />
  </GridItem>
);
