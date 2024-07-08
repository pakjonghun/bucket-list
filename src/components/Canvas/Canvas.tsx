import { useEffect, useRef } from 'react';
import styles from './Canvas.module.css';
import { CANVAS_ID } from './constants';
import { canvasViewModel } from '../../viewModel/canvasViewModel/canvasViewModel';
import { fabric } from 'fabric';
import { bucketViewModel } from '../../viewModel/bucketViewModel/bucketViewModel';
import { Bucket } from '../../model/bucket';

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

    const handleDrop = (event: any) => {
      const pointer = canvas.getPointer(event.e);
      console.log(pointer);
      const newBucket: Bucket = {
        id: Math.random().toString(),
        name: 'name',
        description: '',
        position: pointer,
        status: 'Processing',
      };

      bucketViewModel.appendBucket(newBucket);
    };

    canvas.on('drop', handleDrop);

    canvasViewModel.setCanvas(canvas);

    canvas.requestRenderAll();

    const handleResize = () => {
      if (!canvasContainerRef.current) return;
      canvas.setDimensions({
        width: canvasContainerRef.current.clientWidth,
        height: canvasContainerRef.current.clientHeight,
      });
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
