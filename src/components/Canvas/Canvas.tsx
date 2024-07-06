import { useEffect, useRef } from 'react';
import styles from './Canvas.module.css';
import { CANVAS_ID } from './constants';
import * as fabric from 'fabric';
import { canvasController } from '../../controller/canvasController/canvasController';

const Canvas = () => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !canvasContainerRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: 'lightGrey',
      width: canvasContainerRef.current.clientWidth,
      height: canvasContainerRef.current.clientHeight,
    });

    canvasController.setCanvas(canvas);

    canvas.requestRenderAll();

    const handleResize = () => {
      if (!canvasContainerRef.current) return;
      canvas.setWidth(canvasContainerRef.current.clientWidth);
      canvas.setHeight(canvasContainerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      canvas.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={canvasContainerRef} className={styles.container}>
      <canvas ref={canvasRef} id={CANVAS_ID} className={styles.canvas} />
    </div>
  );
};

export default Canvas;
