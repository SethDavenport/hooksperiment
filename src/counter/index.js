// @flow
import React from 'react';
import { useCounterBehaviour } from './counter.behaviour';

type CounterProps = {
  title: string;
}
export const Counter = ({ title }: CounterProps) => {
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
