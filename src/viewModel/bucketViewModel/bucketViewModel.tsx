import { makeAutoObservable } from 'mobx';
import { Bucket } from '../../model/bucket';

export class BucketViewModel {
  private boardById = new Map<string, Bucket>();

  constructor() {
    makeAutoObservable(this);
  }
}
