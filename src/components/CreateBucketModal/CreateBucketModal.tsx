import BaseInput from '../ui/BaseInput/BaseInput';
import styles from './CreateBucketModal.module.css';
import useInput from '../../hooks/useInput';
import { FormEvent } from 'react';
import BaseButton from '../ui/BaseButton/BaseButton';
import BaseTextArea from '../ui/BaseTextArea/BaseTextArea';

const CreateBucketModal = () => {
  const [bucketName, onChangeBucketName] = useInput();
  const [bucketDescription, onChangeBucketDescription] = useInput();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <BaseInput
        inputAttributes={{
          placeholder: '버킷 이름',
        }}
        onChange={onChangeBucketName}
        value={bucketName}
      />
      <BaseTextArea
        textAreaAttributes={{
          placeholder: '버킷 설명',
        }}
        onChange={onChangeBucketDescription}
        value={bucketDescription}
      />
      <BaseButton
        className={styles.button}
        onClick={() => {}}
        text="생성"

        // endIcon={}
      />
    </form>
  );
};

export default CreateBucketModal;
