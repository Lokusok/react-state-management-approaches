import './style.css';
import { memo } from 'react';

import { useRecoilValue } from 'recoil';
import { counterState, nextCounterSelector } from '@src/store/recoil/counter';

function Display() {
  const count = useRecoilValue(counterState);
  const nextCount = useRecoilValue(nextCounterSelector);

  const isVisible = nextCount !== null;

  return (
    <>
      <div>Now: {count}</div>
      <div style={{ opacity: isVisible ? 0.5 : 0 }}>Next: {nextCount}</div>
    </>
  );
}

export default memo(Display);
