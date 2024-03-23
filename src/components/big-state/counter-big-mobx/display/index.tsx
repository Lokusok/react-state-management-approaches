import './style.css';

import { observer } from 'mobx-react-lite';
import counterStore from '@src/store/mobx/counter';

function Display() {
  const count = counterStore.count;
  const nextCount = counterStore.nextCounter;

  const isVisible = nextCount !== null;

  return (
    <>
      <div>Now: {count}</div>
      <div style={{ opacity: isVisible ? 0.5 : 0 }}>Next: {nextCount}</div>
    </>
  );
}

export default observer(Display);
