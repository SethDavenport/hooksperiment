// @flow
import { useEffect } from 'react';

export const useMountLogger = (): void => {
  return useEffect(() => {
    console.log('I was mounted');
    return () => console.log('I was unmounted');
  }, []);
};
