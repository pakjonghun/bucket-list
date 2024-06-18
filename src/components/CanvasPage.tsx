import { FC, RefObject, useCallback, useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { useCanvas } from '../contexts/CanvasContext';

interface Props {
  parentRef: RefObject<HTMLDivElement | null>;
}

const CanvasPage: FC<Props> = ({ parentRef }) => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const { fabricCanvas, setFabricCanvas } = useCanvas();
  // const fabricCanvas = useRef<null | fabric.Canvas>(null);
  // const setFabricCanvas = (canvas: fabric.Canvas) => {
  //   fabricCanvas.current = canvas;
  // };
  // useCanvas();

  const handleResize = useCallback(() => {
    console.log('resize', fabricCanvas);
    if (!parentRef.current || !fabricCanvas) return;
    console.log('resize1');

    const newWidth = parentRef.current.clientWidth;
    const newHeight = parentRef.current.clientHeight;
    const scaleX = newWidth / fabricCanvas.getWidth();
    const scaleY = newWidth / fabricCanvas.getHeight();

    fabricCanvas.setWidth(newWidth).setHeight(newHeight);
    fabricCanvas.forEachObject((obj) => {
      obj.scaleX = (obj.scaleX || 1) * scaleX;
      obj.scaleY = (obj.scaleY || 1) * scaleY;
      obj.left = (obj.left || 0) * scaleX;
      obj.top = (obj.top || 0) * scaleY;
      obj.setCoords();
    });
    fabricCanvas.renderAll();
  }, [fabricCanvas]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [fabricCanvas]);

  useEffect(() => {
    if (!canvasRef.current || !parentRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: parentRef.current.clientWidth,
      height: parentRef.current.clientHeight,
      backgroundColor: 'pink',
    });

    console.log('set canvas : ');
    setFabricCanvas(canvas);

    return () => {
      setFabricCanvas(null);
    };
  }, [fabricCanvas]);

  return <canvas ref={canvasRef} />;
};

export default CanvasPage;
