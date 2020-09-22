/**
 * This hook is based on:
 *  - https://github.com/jaredLunde/react-hook/tree/master/packages/mouse-position
 * Not all logic, only the things that I needed
 */
import { useState, useEffect, SetStateAction, Dispatch } from 'react';

export interface MousePosition {
  x: number | null;
  y: number | null;
  isOver: boolean;
}

const initialState = {
  x: null,
  y: null,
  isOver: false,
};

const useMousePointer = (): {
  mousePosition: MousePosition;
  setRef: Dispatch<SetStateAction<HTMLElement>>;
} => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>(
    initialState
  );

  useEffect(() => {
    if (element !== null) {
      const onMove = (event: MouseEvent) => {
        const { clientX: x, clientY: y } = event;
        setMousePosition({ x, y, isOver: true });
      };
      const onLeave = (event: MouseEvent) => {
        setMousePosition((prev) => ({ ...prev, isOver: false }));
      };

      const addEvent = element.addEventListener.bind(element);
      addEvent('mouseenter', onMove);
      addEvent('mousemove', onMove);
      addEvent('mouseleave', onLeave);

      return () => {
        const removeEvent = element.addEventListener.bind(element);
        removeEvent('mouseenter', onMove);
        removeEvent('mousemove', onMove);
        removeEvent('mouseleave', onLeave);
      };
    }
    return () => {};
  }, [element]);

  return {
    mousePosition,
    setRef: setElement,
  };
};

export default useMousePointer;
