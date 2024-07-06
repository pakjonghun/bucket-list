import { FC, ReactNode, useState } from 'react';
import styles from './BaseTextArea.module.css';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  textAreaAttributes?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

const BaseTextArea: FC<Props> = ({ value, onChange, startIcon, endIcon, textAreaAttributes }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`${styles.container} ${focused ? styles.focused : ''}`}>
      {startIcon && (
        <div className={`${styles.startIconContainer} ${focused ? styles.focused : ''}`}>
          {!!startIcon && startIcon}
        </div>
      )}

      <textarea
        {...textAreaAttributes}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        className={`${styles.textarea} ${focused ? styles.focused : ''}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default BaseTextArea;
