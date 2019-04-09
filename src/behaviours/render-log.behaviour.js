// @flow
import { useEffect } from 'react';

export const useRenderLogger = (value: number): void => {
  useEffect(() => {
    console.log(`I was rendered with value=${value}`);
  }, [value]);
};
