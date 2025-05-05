import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from '../../api/apiSlice';
import appSlice from '../../features/app/appSlice.ts';

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  app: appSlice
});

export type ApplicationState = ReturnType<typeof rootReducer>;
