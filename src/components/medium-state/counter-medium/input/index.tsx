import React, { memo } from 'react';
import { useRecoilState } from 'recoil';
import { amountState } from '@src/store/recoil/counter';

type TProps = {
  type: 'text' | 'number';
};

function Input(props: TProps) {
  const [amount, setAmount] = useRecoilState(amountState);

  const handlers = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(Number(e.target.value));
    },
  };

  return (
    <input value={amount} onChange={handlers.onChange} type={props.type} />
  );
}

export default memo(Input);
