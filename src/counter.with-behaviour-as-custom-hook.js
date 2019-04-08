// @flow
import React, { useState, useCallback } from 'react';

type CounterBehaviourProps = {
  value: number,
  increment: void => void,
  decrement: void => void,
}
function useCounterBehaviour(): CounterBehaviourProps {
  const [value, setValue] = useState(0);
  const decrement = useCallback(() => setValue(value - 1), [value]);
  const increment = useCallback(() => setValue(value + 1), [value]);

  return { value, decrement, increment };
}

type CounterProps = {
  title: string;
}
export function Counter({ title }: CounterProps) {
  const { value, decrement, increment } = useCounterBehaviour();

  return (
    <>
      <h3>{ title }</h3>
      <button onClick={decrement}>-</button>
      { value }
      <button onClick={increment}>+</button>
    </>
  );
}
