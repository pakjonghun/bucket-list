import { FC, RefObject, useCallback, useEffect, useRef } from 'react';
import { fabric } from 'fabric';

//첫 랜더링 시 상태를 확인해서 캔버스에 그린다.
//drag and drop 시 캔버스에 그린다

//그려진 객체는  상태를 확인해서 상태에 따라 뷰가 변한다.
//상태를 변경하는 곳은 인스펙터, 헤더, 네비게이션, 캔버스 컴포넌트 상에서 이뤄진다.

//캔버스 뷰 ref 연결후 ref 를 전달해준다.
//캔버스 컨트롤러 전달받은 ref 로 캔버스 객체를 만들고, 상태를 확인해서 새로운 fabric 객체를 추가한다. (초기, 이후에도)
//각 fabric 객체 본인의 상태를 확인하면서 뷰를 변경한다.

interface Props {
  parentRef: RefObject<HTMLDivElement | null>;
}

const CanvasPage: FC<Props> = ({ parentRef }) => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  // const fabricCanvas = useRef<null | fabric.Canvas>(null);

  // const handleResize = useCallback(() => {
  //   if (!parentRef.current || !fabricCanvas.current) return;

  //   const newWidth = parentRef.current.clientWidth;
  //   const newHeight = parentRef.current.clientHeight;
  //   const scaleX = newWidth / fabricCanvas.current.getWidth();
  //   const scaleY = newWidth / fabricCanvas.current.getHeight();

  //   fabricCanvas.current.setWidth(newWidth).setHeight(newHeight);
  //   fabricCanvas.current.forEachObject((obj) => {
  //     obj.scaleX = (obj.scaleX || 1) * scaleX;
  //     obj.scaleY = (obj.scaleY || 1) * scaleY;
  //     obj.left = (obj.left || 0) * scaleX;
  //     obj.top = (obj.top || 0) * scaleY;
  //     obj.setCoords();
  //   });
  //   fabricCanvas.current.renderAll();
  // }, [fabricCanvas]);

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [handleResize]);

  useEffect(() => {
    if (!canvasRef.current || !parentRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: parentRef.current.clientWidth,
      height: parentRef.current.clientHeight,
      backgroundColor: 'pink',
    });

    return () => {
      fabricCanvas.current?.dispose();
      fabricCanvas.current = null;
    };
  }, [parentRef]);

  return <canvas ref={canvasRef} />;
};

export default CanvasPage;
