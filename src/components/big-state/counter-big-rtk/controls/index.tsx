import React, { memo } from 'react';

import { useAppDispatch } from '@src/store/rtk';
import { counterActions } from '@src/store/rtk/counter-slice';

function Controls() {
  const dispatch = useAppDispatch();

  const callbacks = {
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
  };

  const handlers = {
    onHover: (e: React.PointerEvent<HTMLButtonElement>) => {
      const target = e.target as EventTarget & { id: TCounterAction };
      dispatch(counterActions.setActiveAction(target.id));
    },

    onOut: () => {
      dispatch(counterActions.setActiveAction(null));
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
