import './style.css';

import React, { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/rtk';
import { counterActions } from '../../../store/rtk/counter-slice';
import Display from './display';
import Controls from './controls';

function Counter() {
  const dispatch = useAppDispatch();

  const amount = useAppSelector((state) => state.counter.amount);

  const handlers = {
    handleAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(counterActions.setAmount(Number(e.target.value)));
    },
  };

  return (
    <div className="Counter">
      <Display />
      <Controls />

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
