import { memo } from 'react';

import Counter from '../components/small-state/counter';
import CounterShareable from '../components/small-state/counter-shareable';
import CounterMedium from '../components/medium-state/counter-medium';
import CounterBigRtk from '../components/big-state/counter-big-rtk';
import CounterBigMobx from '@src/components/big-state/counter-big-mobx';

function App() {
  return (
    <div className="App">
      <h3 className="App-title">useState example:</h3>
      <Counter />
      <hr />
      <h3 className="App-title">Context example:</h3>
      <CounterShareable />
      <hr />
      <h3 className="App-title">Recoil example:</h3>
      <CounterMedium />
      <hr />
      <h3 className="App-title">RTK example:</h3>
      <CounterBigRtk />
      <hr />
      <h3 className="App-title">Mobx examlple:</h3>
      <CounterBigMobx />
    </div>
  );
}

export default memo(App);
