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

  const pointerContainerClasses = clsx('pointer', {
    'pointer--no-blend': 'pointer__cursor--is-on-nav' in classes,
  });
  return (
    <>
      <div className={pointerContainerClasses} ref={mouseRef}>
        <div className={pointerClasses} />
      </div>
    </>
  );
};

export default MouseTracker;
