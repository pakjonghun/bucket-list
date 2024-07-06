import React, { useEffect, useState } from 'react';

interface Props {
  text: string;
  delay?: number;
}

const useTextDebounce = ({ text, delay = 200 }: Props) => {
  const [value, setValue] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(text);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);

  return value;
};

export default useTextDebounce;
