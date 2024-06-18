import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useRef,
} from 'react';
import { fabric } from 'fabric';

const CanvasContext = createContext<{
  fabricCanvas: fabric.Canvas | null;
  setFabricCanvas: (canvasRef: fabric.Canvas | null) => void;
}>({
  fabricCanvas: null,
  setFabricCanvas: () => {},
});

interface Props {
  children: ReactNode;
}
export const CanvasProvider: FC<Props> = ({ children }) => {
  const fabricCanvas = useRef<null | fabric.Canvas>(null);
  const setFabricCanvas = useCallback((canvasRef: fabric.Canvas | null) => {
    console.log('set canvas func : ', canvasRef);
    fabricCanvas.current = canvasRef;
  }, []);

  return (
    <CanvasContext.Provider
      value={{ fabricCanvas: fabricCanvas.current, setFabricCanvas }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => {
  const canvas = useContext(CanvasContext);
  if (!canvas) {
    throw new Error('캔버스 객체가 존재하지 않습니다.');
  }

  return canvas;
};
