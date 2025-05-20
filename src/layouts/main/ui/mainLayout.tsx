import { Outlet } from 'react-router-dom';
import { Header } from '@widgets/';
import { Grid } from '@chakra-ui/react';
import { style } from './style.ts';

export const MainLayout = () => (
  <Grid sx={style.wrapper}>
    <Header />
    <Outlet />
  </Grid>
);
