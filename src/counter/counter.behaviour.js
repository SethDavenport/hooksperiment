// @flow
import { useState, useCallback } from 'react';

export type CounterBehaviourProps = {
  value: number,
  increment: void => void,
  decrement: void => void,
}
export const useCounterBehaviour = (): CounterBehaviourProps => {
  const [value, setValue] = useState(0);
  const decrement = useCallback(() => setValue(value - 1), [value]);
  const increment = useCallback(() => setValue(value + 1), [value]);

  return { value, decrement, increment };
};

