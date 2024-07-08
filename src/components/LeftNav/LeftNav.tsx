import { RiDragDropLine } from 'react-icons/ri';
import styles from './LeftNav.module.css';

const LeftNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.bucketContainer}>
        <div draggable className={styles.bucket}>
          <span>버킷 리스트 생성</span>
          <RiDragDropLine />
        </div>
      </div>
    </nav>
  );
};

export default LeftNav;
