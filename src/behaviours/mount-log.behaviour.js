// @flow
import { useEffect } from 'react';

export const useMountLogger = (): void => {
  useEffect(() => {
    console.log('I was mounted');
    return () => console.log('I was unmounted');
  }, []);
};
