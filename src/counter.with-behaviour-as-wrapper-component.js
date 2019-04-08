// @flow
import React, { useState, useCallback } from 'react';

type ExternalProps = {
  title: string;
}

type InternalProps = {
  value: number,
  increment: void => void,
  decrement: void => void,
}
export const _Counter = ({ value, increment, decrement, title }: InternalProps & ExternalProps) => (
  <>
    <h3>{ title }</h3>
    <button onClick={decrement}>-</button>
    { value }
    <button onClick={increment}>+</button>
  </>
);

export function Counter({ title }: ExternalProps) {
  const [value, setValue] = useState(0);
  const decrement = useCallback(() => setValue(value - 1), [value]);
  const increment = useCallback(() => setValue(value + 1), [value]);

  return <_Counter {...{ value, increment, decrement, title }} />;
}
