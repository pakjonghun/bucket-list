import Canvas from '../Canvas/Canvas';
import LeftNav from '../LeftNav/LeftNav';
import RightInspector from '../RightInspector/RightInspector';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <LeftNav />
      <Canvas />
      <RightInspector />
    </main>
  );
};

export default Main;
