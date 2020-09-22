import React, { createRef, useEffect, useContext } from 'react';
import clsx from 'clsx';
import { PointerClassesContext } from '@context/pointer-classes.context';
import { MousePosition } from '@hooks/useMousePointer';

type MouseTrackerProps = {
  mousePosition: MousePosition;
};
const MouseTracker: React.FunctionComponent<MouseTrackerProps> = ({
  mousePosition = { x: null, y: null, isOver: false },
}) => {
  const { pointerClasses } = useContext(PointerClassesContext);
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

  const cursorClasses = clsx('pointer__cursor', pointerClasses);

  const pointerContainerClasses = clsx('pointer', {
    'pointer--no-blend': 'pointer__cursor--is-on-nav' in pointerClasses,
  });
  return (
    <>
      <div className={pointerContainerClasses} ref={mouseRef}>
        <div className={cursorClasses} />
      </div>
    </>
  );
};

export default MouseTracker;
