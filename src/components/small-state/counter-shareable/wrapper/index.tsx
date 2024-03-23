import { memo } from 'react';

import Input from '../input';

function Wrapper() {
  return (
    <div>
      <p>Set amount:</p>
      <div>
        <Input type="number" />
      </div>
    </div>
  );
}

export default memo(Wrapper);
