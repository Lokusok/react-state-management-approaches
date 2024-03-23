import './style.css';

import { observer } from 'mobx-react-lite';

import Display from './display';
import Controls from './controls';

import counterStore from '@src/store/mobx/counter';

function Counter() {
  const handlers = {
    handleAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      counterStore.setAmount(Number(e.target.value));
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
            value={counterStore.amount}
            onChange={handlers.handleAmountChange}
            type="number"
          />
        </div>
      </div>
    </div>
  );
}

export default observer(Counter);
