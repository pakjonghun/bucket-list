import { makeAutoObservable } from 'mobx';
import { FabricCanvas } from './types';

class CanvasViewModel {
  private fabricCanvas: FabricCanvas = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCanvas = (setCanvasValue: FabricCanvas) => {
    this.fabricCanvas = setCanvasValue;
  };

  get canvas() {
    return this.fabricCanvas;
  }
}

export const canvasViewModel = new CanvasViewModel();
