import { useState, ChangeEvent } from 'react';

export const useInput = (init: string): [string, (e: ChangeEvent<HTMLInputElement>) => void, () => void] => {
  // custom hook
  const [value, setValue] = useState(init);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value ? e.target.value : '');
  };
  const reset = (newInit = '') => {
    setValue(newInit);
  };
  // return the value with the onChange function instead of setValue function
  return [value, onChange, reset];
};