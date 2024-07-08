import { useEffect, useRef } from 'react';
import styles from './Canvas.module.css';
import { CANVAS_ID } from './constants';
import { canvasViewModel } from '../../viewModel/canvasViewModel/canvasViewModel';
import { fabric } from 'fabric';
import { observer } from 'mobx-react';
import { bucketPopupViewModel } from '../../viewModel/bucketPopupViewModel/bucketPopupViewModel';
import CreateBucketPopup from '../CreateBucketPopup/CreateBucketPopup';

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
      bucketPopupViewModel.setPosition(pointer);
      bucketPopupViewModel.setShow(true);
    };

    canvas.on('drop', handleDrop);
    canvasViewModel.setCanvas(canvas);

    const handleResize = () => {
      if (!canvasContainerRef.current) return;
      canvas.setDimensions({
        width: canvasContainerRef.current.clientWidth,
        height: canvasContainerRef.current.clientHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      canvas.off('drop', handleDrop);
      canvas.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const isShow = bucketPopupViewModel.show;

  return (
    <div ref={canvasContainerRef} className={styles.container}>
      <canvas ref={canvasRef} id={CANVAS_ID} className={styles.canvas} />
      {isShow && <CreateBucketPopup />}
    </div>
  );
};

export default observer(Canvas);
