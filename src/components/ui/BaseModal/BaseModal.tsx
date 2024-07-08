import { FC, MouseEvent, ReactNode } from 'react';
import CreatePortal from '../CreatePortal/CreatePortal';
import { IoMdClose } from 'react-icons/io';
import styles from './BaseModal.module.css';
import ModalHeader from '../../ModalHeader/ModalHeader';

interface Props {
  title: ReactNode;
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

const BaseModal: FC<Props> = ({ title, children, open, onClose }) => {
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
        <div className={styles.content}>
          <ModalHeader title={title} onClose={onClose} />
          {children}
        </div>
      </div>
    ),
  });
};

export default BaseModal;
