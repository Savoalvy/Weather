import { Grid, GridItem } from '@chakra-ui/react';
import { style } from './style.ts';
import { Map } from '@widgets/map/ui/Map.tsx';

export const Main = () => {
  return (
    <Grid sx={style.wrapper}>
      <GridItem sx={style.sideArea}>sideBar</GridItem>
      <GridItem sx={style.mapArea}>
        <Map />
      </GridItem>
      <GridItem sx={style.cardArea}>CardArea</GridItem>
    </Grid>
  );
};
