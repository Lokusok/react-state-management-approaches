import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { TAppDispatch, TRootState } from './counter-slice/types';

import counterReducer from './counter-slice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const useAppDispatch = useDispatch.withTypes<TAppDispatch>();
export const useAppSelector = useSelector.withTypes<TRootState>();

export default store;
