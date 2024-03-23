import './style.css';
import React, { memo, useState } from 'react';

function Counter() {
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
    <div className="Counter">
      <div>{count}</div>
      <div>
        <button onClick={callbacks.increment}>Increment</button>
        <button onClick={callbacks.decrement}>Decrement</button>
      </div>

      <div>
        <p>Set amount:</p>
        <div>
          <input
            value={amount}
            onChange={handlers.handleAmountChange}
            type="number"
          />
        </div>
      </div>
    </div>
  );
}

export default memo(Counter);
