import { FaPlus } from 'react-icons/fa';
import CreateButton from '../ui/BaseButton/BaseButton';
import styles from './Header.module.css';
import SearchBucket from '../SearchBucket/SearchBucket';

const Header = () => {
  return (
    <header className={styles.header}>
      <CreateButton text="버킷 리스트 생성" onClick={() => {}} endIcon={<FaPlus fontSize={10} />} />
      <SearchBucket />
    </header>
  );
};

export default Header;
