import { FC, ReactNode } from 'react';
import styles from './BaseButton.module.css';

interface Props {
  text: string;
  onClick: () => void;
  endIcon?: ReactNode;
}

const BaseButton: FC<Props> = ({ text, onClick, endIcon }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{text}</span>
      {!!endIcon && endIcon}
    </button>
  );
};

export default BaseButton;
