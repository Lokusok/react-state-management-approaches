import React, { memo } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import {
  amountState,
  counterState,
  activeActionState,
} from '@src/store/recoil/counter';

function Controls() {
  const [activeAction, setActiveAction] = useRecoilState(activeActionState);
  const [count, setCount] = useRecoilState(counterState);
  const amount = useRecoilValue(amountState);

  const callbacks = {
    increment: () => setCount(count + amount),
    decrement: () => setCount(count - amount),
  };

  const handlers = {
    onHover: (e: React.PointerEvent<HTMLButtonElement>) => {
      const target = e.target as EventTarget & { id: TCounterAction };
      setActiveAction(target.id);
    },

    onOut: () => {
      setActiveAction(null);
    },
  };

  return (
    <div>
      <button
        id={'increment'}
        onPointerEnter={handlers.onHover}
        onPointerOut={handlers.onOut}
        onClick={callbacks.increment}
      >
        Increment
      </button>
      <button
        id={'decrement'}
        onPointerEnter={handlers.onHover}
        onPointerOut={handlers.onOut}
        onClick={callbacks.decrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default memo(Controls);
