import { useEffect } from 'react';

export function useDebounce<T>(
  callback: (value: T) => void,
  value: T,
  delay: number
) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      callback(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [callback, value, delay]);
} 