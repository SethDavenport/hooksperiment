// @flow
import React, { useEffect } from 'react';
import { useRenderLogger } from './render-log.behaviour';

global.console = { log: jest.fn() };
jest.mock('react', () => ({
  useEffect:  jest.fn().mockImplementation(fn => fn()),
}));

describe('useRender', () => {
  it('logs when the value changes', () => {
    useRenderLogger(0);
    expect(React.useEffect).toHaveBeenCalledWith(expect.any(Function), [0]);
    expect(console.log).toHaveBeenCalledWith('I was rendered with value=0');

    useRenderLogger(1);
    expect(React.useEffect).toHaveBeenCalledWith(expect.any(Function), [1]);
    expect(console.log).toHaveBeenCalledWith('I was rendered with value=1');
  });
});
