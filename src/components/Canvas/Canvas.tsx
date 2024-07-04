import styles from './Canvas.module.css';

const Canvas = () => {
  return (
    <div className={styles.container}>
      <canvas className={styles.canvas} />
    </div>
  );
};

export default Canvas;
