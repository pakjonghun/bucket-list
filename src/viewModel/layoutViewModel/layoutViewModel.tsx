import { makeAutoObservable } from 'mobx';
import { SelectedBucket } from './types';

export class LayoutViewModel {
  private bucket: SelectedBucket = null;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedBucket = (bucket: SelectedBucket) => {
    this.bucket = bucket;
  };

  get selectedBucket() {
    return this.bucket;
  }
}

export const layoutViewModel = new LayoutViewModel();
