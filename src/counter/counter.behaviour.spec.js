// @flow
import React, { useState, useCallback } from 'react';
import { useCounterBehaviour } from './counter.behaviour';

// Augment the React typedef with some spies I set up below.
const mockReact = ((React: any): {
  __setValue: Function,
});

jest.mock('react', () => {
  const setValue = jest.fn();
  return {
    useState: (initialValue) => [initialValue, setValue],
    useCallback: cb => cb,
    __setValue: setValue,
  };
});

describe('useCounterBehaviour', () => {
  it('supplies a value property', () => {
    const { value } = useCounterBehaviour();
    expect(value).toEqual(0);
  });

  it('supplies an increment property', () => {
    const { increment } = useCounterBehaviour();
    increment();
    expect(mockReact.__setValue).toHaveBeenCalledWith(1);
  });

  it('supplies a decrement property', () => {
    const { decrement } = useCounterBehaviour();
    decrement();
    expect(mockReact.__setValue).toHaveBeenCalledWith(-1);
  });
});
