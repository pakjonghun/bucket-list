import { fabric } from 'fabric';

export class CanvasController {
  canvasRef: fabric.Canvas | null = null;
  constructor(canvasRef: HTMLCanvasElement, parentRef: HTMLDivElement) {
    this.initCanvas(canvasRef, parentRef);
  }

  initCanvas = (canvasRef: HTMLCanvasElement, parentRef: HTMLDivElement) => {
    this.canvasRef = new fabric.Canvas(canvasRef, {
      width: parentRef.clientWidth,
      height: parentRef.clientHeight,
      backgroundColor: 'pink',
    });
  };

  addEventListener = () => {
    // this.canvasRef?.on('');
  };

  dispose() {
    this.canvasRef?.dispose();
  }
}
