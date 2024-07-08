import { makeAutoObservable } from 'mobx';
import { Bucket } from '../../model/bucket';

class SelectedBucketViewModel {
  private bucket: Bucket | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get selectedBucket() {
    return this.bucket;
  }

  setSelectedBucket = (bucket: Bucket | null) => {
    this.bucket = bucket;
  };
}

export const selectedBucketViewModel = new SelectedBucketViewModel();
