import { Position } from '../types';

export type BucketStatus = 'Done' | 'Processing';

export type Bucket = {
  id: string;
  name: string;
  description: string;
  status: BucketStatus;
  position: Position;
};
