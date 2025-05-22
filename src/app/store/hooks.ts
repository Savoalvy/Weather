import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux';
import { store } from './store';
import type { ApplicationState } from '@app/store/rootReducer.ts';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
