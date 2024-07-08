import { FC, ReactNode } from 'react';
import { IoMdClose } from 'react-icons/io';
import styles from './ModalHeader.module.css';

interface Props {
  title: ReactNode;
  onClose: () => void;
}

const ModalHeader: FC<Props> = ({ title, onClose }) => {
  return (
    <div className={styles.title}>
      {title}
      <IoMdClose className={styles.close} onClick={onClose} />
    </div>
  );
};

export default ModalHeader;
