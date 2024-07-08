import { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import { bucketPopupViewModel } from '../../viewModel/bucketPopupViewModel/bucketPopupViewModel';
import CreateBucketModal from '../CreateBucketModal/CreateBucketModal';
import ModalHeader from '../ModalHeader/ModalHeader';
import styles from './CreateBucketPopup.module.css';

const CreateBucketPopup = () => {
  const handleClosePopup = () => {
    bucketPopupViewModel.setShow(false);
  };

  const { x, y } = bucketPopupViewModel.position;
  const popupRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    const handleClickPopupOutside = (event: MouseEvent) => {
      const isPopupClicked = popupRef.current?.contains(event.target as Node);
      if (isPopupClicked) {
        return;
      }
      handleClosePopup();
    };

    window.addEventListener('click', handleClickPopupOutside);

    return () => {
      window.removeEventListener('click', handleClickPopupOutside);
    };
  }, []);

  return (
    <div ref={popupRef} style={{ left: x, top: y }} className={styles.createModalPopup}>
      <ModalHeader title="버킷 생성" onClose={handleClosePopup} />
      <CreateBucketModal onClose={handleClosePopup} position={{ x, y }} />
    </div>
  );
};

export default observer(CreateBucketPopup);
