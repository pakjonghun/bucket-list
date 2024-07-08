import { makeAutoObservable } from 'mobx';
import { Bucket } from '../../model/bucket';

class BucketViewModel {
  private bucketById = new Map<string, { hasView: boolean; data: Bucket }>();

  constructor() {
    makeAutoObservable(this);
  }

  bindBucket = (bucketIdList: string[]) => {
    bucketIdList.forEach((id) => {
      const bucket = this.bucketById.get(id);
      if (bucket) {
        bucket.hasView = true;
      }
    });
  };

  getBucketById = (id: string) => {
    return this.bucketById.get(id);
  };

  get requestPaint() {
    const result: Bucket[] = [];
    this.bucketById.forEach((item) => {
      if (!item.hasView) {
        result.push(item.data);
      }
    });

    return result;
  }

  appendBucket = (bucket: Bucket) => {
    this.bucketById.set(bucket.id, { hasView: false, data: bucket });
  };

  createBucket = ({
    name,
    description,
    position,
  }: Pick<Bucket, 'name' | 'description' | 'position'>) => {
    const newBucket: Bucket = {
      id: Math.random().toString(),
      name,
      description,
      position,
      status: 'Processing',
    };

    this.appendBucket(newBucket);
  };
}

export const bucketViewModel = new BucketViewModel();
