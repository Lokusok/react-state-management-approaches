import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TCounterState } from './types';

const initialState: TCounterState = {
  count: 0,
  amount: 1,
  activeAction: null,
};

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += state.amount;
    },

    decrement: (state) => {
      state.count -= state.amount;
    },

    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },

    setActiveAction: (state, action: PayloadAction<TCounterAction>) => {
      state.activeAction = action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
