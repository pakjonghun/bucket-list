import { DragEvent } from 'react';
import styles from './LeftNav.module.css';
import { Bucket } from '../../model/bucket';

const LeftNav = () => {
  const bucket: Bucket = {
    id: Math.random().toString(),
    description: 'desc',
    name: 'title',
    position: { x: 300, y: 200 },
    status: 'Processing',
  };

  const handleDragStart = (event: DragEvent<HTMLLIElement>) => {
    // event.dataTransfer.setData('text/plain', bucket.id);
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li draggable onDragStart={handleDragStart} className={styles.bucket}>
          item1
        </li>
        <li draggable onDragStart={handleDragStart} className={styles.bucket}>
          item1
        </li>
      </ul>
    </nav>
  );
};

export default LeftNav;
