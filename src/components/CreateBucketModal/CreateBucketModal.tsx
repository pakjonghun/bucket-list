import BaseInput from '../ui/BaseInput/BaseInput';
import useInput from '../../hooks/useInput';
import { FormEvent } from 'react';
import BaseButton from '../ui/BaseButton/BaseButton';
import BaseTextArea from '../ui/BaseTextArea/BaseTextArea';
import { MdModeEdit } from 'react-icons/md';
import styles from './CreateBucketModal.module.css';
import { bucketViewModel } from '../../viewModel/bucketViewModel/bucketViewModel';

const CreateBucketModal = () => {
  const [bucketName, onChangeBucketName] = useInput();
  const [bucketDescription, onChangeBucketDescription] = useInput();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    bucketViewModel.createBucket({
      name: bucketName,
      description: bucketDescription,
      position: { x: 0, y: 0 },
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <BaseInput
        startIcon={<MdModeEdit />}
        inputAttributes={{
          placeholder: '버킷 이름',
        }}
        onChange={onChangeBucketName}
        value={bucketName}
      />
      <BaseTextArea
        startIcon={<MdModeEdit />}
        textAreaAttributes={{
          placeholder: '버킷 설명',
        }}
        onChange={onChangeBucketDescription}
        value={bucketDescription}
      />
      <BaseButton className={styles.button} onClick={() => {}} text="생성" />
    </form>
  );
};

export default CreateBucketModal;
