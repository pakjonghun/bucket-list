import { makeAutoObservable } from 'mobx';
import { SelectedBucket } from './layoutController/types';

export class LayoutController {
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

export const layoutController = new LayoutController();
