import { autorun, makeAutoObservable } from 'mobx';
import { FabricCanvas } from './types';
import { bucketViewModel } from '../bucketViewModel/bucketViewModel';
import { BucketItem } from '../../view/BucketItem';

class CanvasViewModel {
  private fabricCanvas: FabricCanvas = null;

  constructor() {
    makeAutoObservable(this);
    autorun(() => this.paintBucketList());
  }

  private paintBucketList = () => {
    const requestPaintList = bucketViewModel.requestPaint;

    requestPaintList.forEach((item) => {
      const bucket = new BucketItem({}, item.name, item.description);
      this.canvas?.add(bucket);
    });
  };

  setCanvas = (canvasValue: FabricCanvas) => {
    this.fabricCanvas = canvasValue;
  };

  get canvas() {
    return this.fabricCanvas;
  }
}

export const canvasViewModel = new CanvasViewModel();
