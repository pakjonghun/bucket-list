import { FC, ReactNode } from 'react';
import styles from './BaseButton.module.css';

interface Props {
  text: string;
  onClick: () => void;
  endIcon?: ReactNode;
  className?: string;
}

const BaseButton: FC<Props> = ({ text, onClick, endIcon, className }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className ?? ''}`}>
      <span>{text}</span>
      {!!endIcon && endIcon}
    </button>
  );
};

export default BaseButton;
