import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import styles from './Board.module.css';

const Board = () => {
  return (
    <section className={styles.section}>
      <Header />
      <Main />
    </section>
  );
};

export default Board;
