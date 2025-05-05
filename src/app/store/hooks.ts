import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { ApplicationState } from './rootReducer';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
