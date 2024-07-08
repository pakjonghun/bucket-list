import { autorun, makeAutoObservable } from 'mobx';
import { FabricCanvas } from './types';
import { bucketViewModel } from '../bucketViewModel/bucketViewModel';
import { BucketItem } from '../../view/BucketItem/BucketItem';

class CanvasViewModel {
  private fabricCanvas: FabricCanvas = null;

  constructor() {
    makeAutoObservable(this);
    autorun(() => this.paintBucketList());
  }

  private paintBucketList = () => {
    const requestPaintList = bucketViewModel.requestPaint;

    requestPaintList.forEach((item) => {
      const bucket = new BucketItem(item);
      this.canvas?.add(bucket);
    });

    if (requestPaintList.length) {
      bucketViewModel.bindBucket(requestPaintList.map((item) => item.id));
      this.canvas?.requestRenderAll();
    }
  };

  setCanvas = (canvasValue: FabricCanvas) => {
    this.fabricCanvas = canvasValue;
  };

  get canvas() {
    return this.fabricCanvas;
  }
}

export const canvasViewModel = new CanvasViewModel();
