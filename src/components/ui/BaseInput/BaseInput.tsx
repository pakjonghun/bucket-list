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
      <div className={styles.startIconContainer}>{!!startIcon && startIcon}</div>
      <input
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        {...inputAttributes}
        className={`${styles.input} ${focused ? styles.focused : ''}`}
        value={value}
        onChange={onChange}
      />
      <div className={`${styles.endIconContainer} ${focused ? styles.focused : ''}`}>
        {!!endIcon && endIcon}
      </div>
    </div>
  );
};

export default BaseInput;
