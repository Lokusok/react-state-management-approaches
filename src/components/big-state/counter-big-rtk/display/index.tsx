import './style.css';
import { memo } from 'react';

import { useAppSelector } from '@src/store/rtk';
import {
  deriveNextCount,
  selectCount,
} from '@src/store/rtk/counter-slice/selectors';

function Display() {
  const count = useAppSelector(selectCount);
  const nextCount = useAppSelector(deriveNextCount);
  const isVisible = nextCount !== null;

  return (
    <>
      <div>Now: {count}</div>
      <div style={{ opacity: isVisible ? 0.5 : 0 }}>Next: {nextCount}</div>
    </>
  );
}

export default memo(Display);
