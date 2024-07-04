import { useCallback, useState } from 'react';

type SetValue = (value: string) => void;
type OnChange = (event: React.ChangeEvent<HTMLInputElement>) => void;
type UseInput = (initValue?: string) => [string, OnChange, SetValue];

const useInput: UseInput = (initValue = '') => {
  const [value, setValue] = useState<string>(initValue);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return [value, onChange, setValue];
};

export default useInput;
