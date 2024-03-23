import { atom, selector } from 'recoil';

export const counterState = atom({
  key: 'counterState',
  default: 0,
});

export const amountState = atom({
  key: 'amountState',
  default: 1,
});

export const nextCounterSelector = selector({
  key: 'nextCounterState',
  get: ({ get }) => {
    const nowAction = get(activeActionState);
    const amount = get(amountState);

    let value = null;

    if (nowAction === 'increment') value = amount;
    else if (nowAction === 'decrement') value = -amount;

    if (value === null) return null;

    return get(counterState) + value;
  },
});

export const activeActionState = atom<TCounterAction>({
  key: 'activeActionState',
  default: null,
});
