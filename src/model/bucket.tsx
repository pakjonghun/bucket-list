export type BucketStatus = 'Done' | 'Processing';

export type Position = {
  x: number;
  y: number;
};

export type Bucket = {
  id: string;
  name: string;
  description: string;
  status: BucketStatus;
  position: Position;
};
