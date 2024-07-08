import { makeAutoObservable } from 'mobx';
import { Position } from '../../types';

class BucketPopupViewModel {
  private spot: Position = { x: 0, y: 0 };
  private isShow: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setPosition = (positionValue: Position) => {
    this.spot = positionValue;
  };

  setShow = (show: boolean) => {
    this.isShow = show;
  };

  get show() {
    return this.isShow;
  }

  get position() {
    return this.spot;
  }
}

export const bucketPopupViewModel = new BucketPopupViewModel();
