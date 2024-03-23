import './style.css';

import { memo } from 'react';

import Input from './input';
import Controls from './controls';
import Display from './display';

function CounterMedium() {
  return (
    <div className="CounterMedium">
      <Display />
      <Controls />

      <div>
        <p>Set amount:</p>
        <div>
          <Input type="number" />
        </div>
      </div>
    </div>
  );
}

export default memo(CounterMedium);
