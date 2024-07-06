import { makeAutoObservable } from 'mobx';
import { FabricCanvas } from './types';

export class CanvasController {
  fabricCanvas: FabricCanvas = null;

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

export const canvasController = new CanvasController();
