import { FC, MouseEvent, ReactNode } from 'react';
import CreatePortal from '../CreatePortal/CreatePortal';
import styles from './BaseModal.module.css';

interface Props {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

const BaseModal: FC<Props> = ({ children, open, onClose }) => {
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    onClose();
  };

  if (!open) {
    return <></>;
  }

  return CreatePortal({
    children: (
      <div onClick={handleBackdropClick} className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    ),
  });
};

export default BaseModal;
