import { memo } from 'react';
import { useCounterShareableContext } from '..';

type TProps = {
  type: 'text' | 'number';
};

function Input(props: TProps) {
  const { amount, onAmountChange } = useCounterShareableContext();

  return <input value={amount} onChange={onAmountChange} type={props.type} />;
}

export default memo(Input);
