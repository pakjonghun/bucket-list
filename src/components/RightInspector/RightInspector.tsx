import { observer } from 'mobx-react';
import { selectedBucketViewModel } from '../../viewModel/selectedBucketViewModel/bucketViewModel';
import styles from './RightInspector.module.css';

const RightInspector = () => {
  const bucketName = selectedBucketViewModel.selectedBucket?.name;
  if (!bucketName) return <></>;

  return <div className={styles.inspector}>{bucketName}</div>;
};

export default observer(RightInspector);
