import { FC, ReactNode, useState } from 'react';
import styles from './BaseInput.module.css';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
}

const BaseInput: FC<Props> = ({ value, onChange, startIcon, endIcon, inputAttributes }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`${styles.container} ${focused ? styles.focused : ''}`}>
      {startIcon && (
        <div className={`${styles.startIconContainer} ${focused ? styles.focused : ''}`}>
          {!!startIcon && startIcon}
        </div>
      )}
      <input
        {...inputAttributes}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        className={`${styles.input} ${focused ? styles.focused : ''}`}
        value={value}
        onChange={onChange}
      />
      {endIcon && (
        <div className={`${styles.endIconContainer} ${focused ? styles.focused : ''}`}>
          {!!endIcon && endIcon}
        </div>
      )}
    </div>
  );
};

export default BaseInput;
