import React from 'react';

import { observer } from 'mobx-react-lite';

import counterStore from '@src/store/mobx/counter';

function Controls() {
  const callbacks = {
    increment: () => counterStore.increment(),
    decrement: () => counterStore.decrement(),
  };

  const handlers = {
    onHover: (e: React.PointerEvent<HTMLButtonElement>) => {
      const target = e.target as EventTarget & { id: TCounterAction };
      counterStore.setActiveAction(target.id);
    },

    onOut: () => {
      counterStore.setActiveAction(null);
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

export default observer(Controls);
