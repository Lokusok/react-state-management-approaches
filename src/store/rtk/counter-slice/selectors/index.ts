import { TRootState } from '../types';

export const selectCount = (state: TRootState) => state.counter.count;
export const selectAmount = (state: TRootState) => state.counter.amount;

export const deriveNextCount = (state: TRootState) => {
  const count = state.counter.count;
  const amount = state.counter.amount;
  const action = state.counter.activeAction;

  let value = null;

  if (action === 'increment') value = amount;
  else if (action === 'decrement') value = -amount;

  if (value === null) return null;

  return count + value;
};
