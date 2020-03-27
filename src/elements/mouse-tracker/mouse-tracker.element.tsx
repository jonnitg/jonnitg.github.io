import React, { createRef, useEffect, useContext } from 'react';
import clsx from 'clsx';
import { PointerClassesContext } from '@context/pointer-classes.context';
import { MousePosition } from '@hooks/useMousePointer';

type MouseTrackerProps = {
  mousePosition: MousePosition;
};
const MouseTracker = ({
  mousePosition = { x: null, y: null, isOver: false },
}: MouseTrackerProps) => {
  const { classes } = useContext(PointerClassesContext);
  const mouseRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (mouseRef.current) {
      const { x, y, isOver } = mousePosition;
      mouseRef.current.style.transform = `translate3d(${x}px, ${y}px,0px)`;
      if (isOver) {
        mouseRef.current.style.transform = `matrix(1,0,0,1,${x}, ${y})`;
      }
    }
  }, [mousePosition.x, mousePosition.y]);

  const pointerClasses = clsx('pointer__cursor', classes);

  return (
    <div className="pointer" ref={mouseRef}>
      <div className={pointerClasses} />
    </div>
  );
};

export default MouseTracker;
