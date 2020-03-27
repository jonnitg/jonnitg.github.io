import React, { useEffect, createRef } from 'react';
import CSS from 'csstype';

const style: CSS.Properties<string | number> = {
  position: 'absolute',
  width: '30px',
  height: '30px',
  backgroundColor: 'var(--main-theme-color)',
  transform: 'translate(-50%, -50%)',
};

export default () => {
  const mouseRef = createRef<HTMLDivElement>();

  const handleOnMouseMove = (e: MouseEvent) => {
    mouseRef.current.style.left = `${e.clientX}px`;
    mouseRef.current.style.top = `${e.clientY}px`;
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleOnMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleOnMouseMove);
    };
  }, []);

  const Component = () => (
    <div id="mouse-pointer" ref={mouseRef} style={style} />
  );

  return Component;
};
