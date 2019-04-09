// @flow
import React from 'react';
import { useCounterBehaviour } from './counter.behaviour';
import { useMountLogger } from '../behaviours/mount-log.behaviour';
import { useRenderLogger } from '../behaviours/render-log.behaviour';

type CounterProps = {
  title: string;
}
export const Counter = ({ title }: CounterProps) => {
  const { value, decrement, increment } = useCounterBehaviour();
  useMountLogger();
  useRenderLogger(value);

  return (
    <>
      <h3>{ title }</h3>
      <button onClick={decrement}>-</button>
      { value }
      <button onClick={increment}>+</button>
    </>
  );
}
