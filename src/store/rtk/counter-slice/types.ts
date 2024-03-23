import store from '..';

export type TCounterState = {
  count: number;
  amount: number;
  activeAction: TCounterAction;
};

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
