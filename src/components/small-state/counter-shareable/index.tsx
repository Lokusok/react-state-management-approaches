import './style.css';
import React, { memo, useState, createContext, useContext } from 'react';

import Wrapper from './wrapper';

type TCounterShareableContext = {
  amount: number;
  count: number;
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CounterShareableContext =
  createContext<TCounterShareableContext | null>(null);

export const useCounterShareableContext: () => TCounterShareableContext =
  () => {
    const ctx = useContext(CounterShareableContext);

    if (!ctx) {
      throw new Error();
    }

    return ctx;
  };

function CounterShareable() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  const callbacks = {
    increment: () => setCount((prevCount) => prevCount + amount),
    decrement: () => setCount((prevCount) => prevCount - amount),
  };

  const handlers = {
    handleAmountChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setAmount(Number(e.target.value)),
  };

  return (
    <div className="CounterShareable">
      <div>{count}</div>
      <div>
        <button onClick={callbacks.increment}>Increment</button>
        <button onClick={callbacks.decrement}>Decrement</button>
      </div>

      <CounterShareableContext.Provider
        value={{ count, amount, onAmountChange: handlers.handleAmountChange }}
      >
        <Wrapper />
      </CounterShareableContext.Provider>
    </div>
  );
}

export default memo(CounterShareable);
