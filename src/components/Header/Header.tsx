import { FaPlus } from 'react-icons/fa';
import CreateButton from '../ui/BaseButton/BaseButton';
import styles from './Header.module.css';
import SearchBucket from '../SearchBucket/SearchBucket';
import { useState } from 'react';
import BaseModal from '../ui/Modal/BaseModal';
import CreateBucketModal from '../CreateBucketModal/CreateBucketModal';

const Header = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const handleClickCreateButton = () => {
    setOpenCreateModal((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <CreateButton
        text="버킷 리스트 생성"
        onClick={handleClickCreateButton}
        endIcon={<FaPlus fontSize={10} />}
      />
      <SearchBucket />
      <BaseModal
        title="버킷생성"
        children={<CreateBucketModal />}
        open={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
      />
    </header>
  );
};

export default Header;
