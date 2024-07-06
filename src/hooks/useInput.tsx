import { useCallback, useState } from 'react';

type SetValue = (value: string) => void;
type OnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
type useText = (initValue?: string) => [string, OnChange, SetValue];

const useInput: useText = (initValue = '') => {
  const [value, setValue] = useState<string>(initValue);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(event.target.value);
    },
    []
  );

  return [value, onChange, setValue];
};

export default useInput;
